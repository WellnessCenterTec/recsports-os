import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { generateKeyPairSync } from "node:crypto";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const require = createRequire(import.meta.url);
const feed = require("../site/budget-expenses-feed.js");
const endpoint = require("../site/api/budget-expenses.js");
const headers = ["ID", "Nombre", "Tipo de gasto", "Tipo de pago", "Costo", "Área", "Comentario / OC", "Adjuntar archivo", "Fecha", "Mes", "Usuario"];

function response() {
  return {
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; return this; }
  };
}

test("Gastos Log se mapea por encabezados y no devuelve usuario, comentario ni adjunto", () => {
  const result = feed.parse([
    headers,
    ["a1", "Material", "Uniformes", "AMEX", "$1,250.50", "Comunicación", "nota privada", "archivo privado", "8/18/2026", "8", "Wendy"],
    ["a2", "Torneo", "Servicios", "", "($50.00)", "Semana Tec", "", "", "9/3/2026", "9", "Jessica"]
  ]);
  assert.equal(result.rows.length, 2);
  assert.deepEqual(result.rows.map((row) => row.area), ["vivencia", "comunicacion"]);
  assert.equal(result.rows[1].amount, 1250.5);
  assert.equal(result.rows[0].amount, -50);
  assert.equal(result.rows[1].date, "2026-08-18");
  assert.equal(JSON.stringify(result).includes("Wendy"), false);
  assert.equal(JSON.stringify(result).includes("nota privada"), false);
  assert.equal(JSON.stringify(result).includes("archivo privado"), false);
});

test("Consolida por ID sin duplicar y señala áreas sin equivalencia", () => {
  const result = feed.parse([
    headers,
    ["a1", "Original", "", "", "100", "Gimnasio", "", "", "8/18/2026"],
    ["a1", "Corregido", "", "", "120", "Gimnasio", "", "", "8/18/2026"],
    ["a2", "Otro", "", "", "200", "RecSports", "", "", "8/19/2026"]
  ]);
  assert.equal(result.rows.length, 2);
  assert.equal(result.duplicateCount, 1);
  assert.equal(result.rows.find((row) => row.id === "a1").amount, 120);
  assert.equal(result.rows.find((row) => row.id === "a2").area, "");
  assert.match(result.issues[0].reason, /Área sin equivalencia/);
});

test("Rechaza encabezados, importes y fechas inválidos sin convertirlos en cero", () => {
  assert.throws(() => feed.parse([["Nombre", "Costo"]]), /Faltan columnas/);
  const result = feed.parse([headers, ["a1", "Compra", "", "", "importe?", "Gimnasio", "", "", "2/30/2026"]]);
  assert.equal(result.rows.length, 0);
  assert.match(result.issues[0].reason, /Costo, Fecha/);
});

test("El endpoint rechaza llamadas sin sesión antes de leer Google", async () => {
  const result = response();
  await endpoint({ method: "GET", headers: {} }, result);
  assert.equal(result.code, 401);
  assert.equal(result.headers["Cache-Control"], "private, no-store, max-age=0");
});

test("El endpoint exige permiso de presupuesto y entrega solo campos financieros", async () => {
  const originalFetch = globalThis.fetch;
  const originalEnv = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    GOOGLE_SERVICE_ACCOUNT_JSON: process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  };
  const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048, privateKeyEncoding: { type: "pkcs8", format: "pem" }, publicKeyEncoding: { type: "spki", format: "pem" } });
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "public-test-key";
  process.env.GOOGLE_SERVICE_ACCOUNT_JSON = JSON.stringify({ client_email: "reader@example.iam.gserviceaccount.com", private_key: privateKey });
  let allowed = false;
  let sheetsCalled = false;
  globalThis.fetch = async (url) => {
    const target = String(url);
    if (target.endsWith("/auth/v1/user")) return { ok: true, json: async () => ({ id: "user-1" }) };
    if (target.endsWith("/rest/v1/rpc/can_read_area")) return { ok: true, json: async () => allowed };
    if (target === "https://oauth2.googleapis.com/token") return { ok: true, json: async () => ({ access_token: "google-token" }) };
    if (target.startsWith("https://sheets.googleapis.com/")) {
      sheetsCalled = true;
      return { ok: true, json: async () => ({ values: [headers, ["a1", "Material", "Uniformes", "AMEX", "$12.50", "Gimnasio", "privado", "adjunto", "8/18/2026", "8", "Wendy"]] }) };
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
    assert.equal(permitted.body.rows[0].amount, 12.5);
    assert.equal(JSON.stringify(permitted.body).includes("Wendy"), false);
    assert.equal(JSON.stringify(permitted.body).includes("privado"), false);
  } finally {
    globalThis.fetch = originalFetch;
    for (const [name, value] of Object.entries(originalEnv)) {
      if (value === undefined) delete process.env[name];
      else process.env[name] = value;
    }
  }
});

test("La vista pendiente no presenta importes ausentes como cero", () => {
  const app = readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
  const start = app.indexOf("function renderBudgetSheetPreview() {");
  const end = app.indexOf("\nasync function saveBudgetAllocation", start);
  assert.ok(start >= 0 && end > start);
  const context = {
    budgetSheetExpenses: [], budgetFilters: { area: "todos" }, budgetSheetFetchedAt: "",
    budgetSheetState: "pendiente", budgetSheetMessage: "Sin lectura", budgetSheetDuplicates: 0,
    budgetSheetIssues: [], escapeHtml: (value) => String(value),
    money: (value) => `$${value}`, budgetAreaLabel: (value) => value
  };
  const html = runInNewContext(`${app.slice(start, end)}\nrenderBudgetSheetPreview()`, context);
  assert.match(html, /<strong>—<\/strong> gastos con área identificada/);
  assert.match(html, /<strong>—<\/strong> en la fuente visible/);
  assert.doesNotMatch(html, /<strong>\$0<\/strong>/);
});
