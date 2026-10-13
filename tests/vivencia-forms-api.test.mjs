import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { generateKeyPairSync } from "node:crypto";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const endpoint = require("../site/api/vivencia-forms.js");

function response() {
  return {
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; return this; }
  };
}

test("Vivencia Forms rejects calls without a WellSync session", async () => {
  const result = response();
  await endpoint({ method: "GET", headers: {} }, result);
  assert.equal(result.code, 401);
  assert.equal(result.headers["Cache-Control"], "private, no-store, max-age=0");
});

test("Vivencia Forms requires area permission and returns no email addresses", async () => {
  const originalFetch = globalThis.fetch;
  const originalEnv = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    VIVENCIA_GOOGLE_SERVICE_ACCOUNT_JSON: process.env.VIVENCIA_GOOGLE_SERVICE_ACCOUNT_JSON
  };
  const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048, privateKeyEncoding: { type: "pkcs8", format: "pem" }, publicKeyEncoding: { type: "spki", format: "pem" } });
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "public-test-key";
  process.env.VIVENCIA_GOOGLE_SERVICE_ACCOUNT_JSON = JSON.stringify({ client_email: "reader@example.iam.gserviceaccount.com", private_key: privateKey });
  let allowed = false;
  let sheetsCalled = false;
  globalThis.fetch = async (url) => {
    const target = String(url);
    if (target.endsWith("/auth/v1/user")) return { ok: true, json: async () => ({ id: "user-1" }) };
    if (target.endsWith("/rest/v1/rpc/can_read_area")) return { ok: true, json: async () => allowed };
    if (target === "https://oauth2.googleapis.com/token") return { ok: true, json: async () => ({ access_token: "google-token" }) };
    if (target.startsWith("https://sheets.googleapis.com/")) {
      sheetsCalled = true;
      return { ok: true, json: async () => ({ values: [
        ["Marca temporal", "Dirección de correo electrónico", "Matricula", "Seleccióna el evento al que deseas inscribirte"],
        ["10/08/2026 12:00:00", "private@example.com", "A00100002", "Kermés 1 de septiembre"]
      ] }) };
    }
    throw new Error(`URL inesperada: ${target}`);
  };
  try {
    const forbidden = response();
    await endpoint({ method: "GET", headers: { authorization: "Bearer test-jwt" } }, forbidden);
    assert.equal(forbidden.code, 403);
    assert.equal(sheetsCalled, false);

    allowed = true;
    const permitted = response();
    await endpoint({ method: "GET", headers: { authorization: "Bearer test-jwt" } }, permitted);
    assert.equal(permitted.code, 200);
    assert.equal(permitted.body.participant_records, 1);
    assert.equal(permitted.body.events[0].participants[0].matricula, "A00100002");
    assert.equal(JSON.stringify(permitted.body).includes("private@example.com"), false);
  } finally {
    globalThis.fetch = originalFetch;
    for (const [name, value] of Object.entries(originalEnv)) {
      if (value === undefined) delete process.env[name];
      else process.env[name] = value;
    }
  }
});

test("WellSync auto-syncs event cards and matrículas into Supabase", () => {
  const app = readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
  assert.match(app, /async function syncVivenciaFormsFeedToSupabase/);
  assert.match(app, /\.from\("vivencia_events"\)[\s\S]*onConflict: "source_name,source_row_key"/);
  assert.match(app, /\.from\("vivencia_participants"\)[\s\S]*onConflict: "event_id,matricula"/);
  assert.match(app, /data-vivencia-participant-manage/);
  assert.match(app, /Ver matrículas/);
});
