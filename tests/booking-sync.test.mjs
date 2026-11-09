import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const core = require("../site/booking-sync-core.js");
const service = require("../site/booking-sync-service.js");
const endpoint = require("../site/api/booking-sync.js");
const webhook = require("../site/api/booking-webhook.js");

function response() {
  return {
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; return this; }
  };
}

test("parses the protected Reservations CSV and keeps only operational fields", () => {
  const csv = [
    "id,reservation_date,status,type,alumno,espacio,nombre,email",
    '41,2026-11-09T15:00:00Z,APPROVED,ONLINE,A00123456,"Yoga, Restaurativo",Nombre Privado,privado@example.com'
  ].join("\n");
  const normalized = core.normalizeReservations(core.parseCsv(csv));
  assert.equal(normalized.rows.length, 1);
  assert.equal(normalized.rows[0].source_key, "id:41");
  assert.equal(normalized.rows[0].matricula, "A00123456");
  assert.equal(normalized.rows[0].activity, "Yoga, Restaurativo");
  assert.equal(JSON.stringify(normalized).includes("Nombre Privado"), false);
  assert.equal(JSON.stringify(normalized).includes("privado@example.com"), false);
});

test("deduplicates source rows and keeps the newest update", () => {
  const normalized = core.normalizeReservations([
    { id: 9, reservation_date: "2026-11-09T10:00:00Z", status: "PENDING", espacio: "Spinning", updated_at: "2026-11-09T10:01:00Z" },
    { id: 9, reservation_date: "2026-11-09T10:00:00Z", status: "APPROVED", espacio: "Spinning", updated_at: "2026-11-09T10:02:00Z" }
  ]);
  assert.equal(normalized.rows.length, 1);
  assert.equal(normalized.rows[0].status, "APPROVED");
  assert.equal(normalized.duplicates, 1);
});

test("automatic sync calls the authenticated source and atomic Supabase RPC", async () => {
  const originalFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url: String(url), options });
    if (String(url).includes("downloadReservations")) return {
      ok: true,
      headers: { get: (name) => name === "content-type" ? "text/csv" : null },
      text: async () => "id,reservation_date,status,alumno,espacio\n1,2026-11-09T10:00:00Z,APPROVED,A001,Yoga"
    };
    return { ok: true, text: async () => JSON.stringify([{ run_id: "run-1", rows_upserted: 1, rows_removed: 0 }]) };
  };
  try {
    const result = await service.runAutomaticSync({ start: "2026-11-01", end: "2026-11-30" }, {
      supabaseUrl: "https://example.supabase.co",
      anonKey: "anon",
      serviceKey: "service-secret",
      sourceUrl: "https://source.example/api/reservation/downloadReservations",
      sourceToken: "source-secret",
      webhookSecret: ""
    });
    assert.equal(result.accepted, 1);
    assert.equal(calls.length, 2);
    assert.match(calls[1].url, /rpc\/replace_booking_automatic$/);
    assert.equal(calls[0].options.headers.Authorization, "Bearer source-secret");
    assert.equal(calls[1].options.headers.Authorization, "Bearer service-secret");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("Booking sync and webhook reject unauthenticated calls", async () => {
  const syncResponse = response();
  await endpoint({ method: "GET", headers: {} }, syncResponse);
  assert.equal(syncResponse.code, 401);
  const webhookResponse = response();
  await webhook({ method: "POST", headers: {}, body: {} }, webhookResponse);
  assert.equal(webhookResponse.code, 401);
});

test("migration preserves manual rows and makes automatic replacement atomic", () => {
  const sql = readFileSync(new URL("../supabase/20261109_booking_automatic_sync.sql", import.meta.url), "utf8");
  assert.match(sql, /source_kind in \('automatic', 'manual'\)/);
  assert.match(sql, /on conflict \(source_kind, source_key\)/);
  assert.match(sql, /existing\.source_kind = 'automatic'/);
  assert.doesNotMatch(sql, /delete from public\.class_booking_reservations[\s\S]*source_kind = 'manual'/);
  assert.match(sql, /grant execute[\s\S]*to service_role/);
});

test("Booking UI exposes both sources and automatic priority", () => {
  const app = readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
  assert.match(app, /Sincronización automática/);
  assert.match(app, /CSV de respaldo/);
  assert.match(app, /fuente automática tiene prioridad/);
  assert.match(app, /effectiveBookingReservations/);
  assert.match(app, /syncBookingAutomatically/);
});
