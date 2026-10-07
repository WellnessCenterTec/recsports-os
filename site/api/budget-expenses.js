const { createSign } = require("node:crypto");
const feed = require("../budget-expenses-feed.js");

const SHEET_ID = "1Wt7fV1NIoywjfvU8EE08O6H_mc_Mhemi-9yDb5Sk56c";
const SHEET_RANGE = "'Gastos Log'!A:K";

function json(response, status, body) {
  response.setHeader("Cache-Control", "private, no-store, max-age=0");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.status(status).json(body);
}

async function verifyWellSyncUser(token, supabaseUrl, anonKey) {
  const headers = { apikey: anonKey, Authorization: `Bearer ${token}` };
  const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, { headers, signal: AbortSignal.timeout(10000) });
  if (!userResponse.ok) return false;
  const user = await userResponse.json();
  if (!user?.id) return false;
  const permissionResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/can_read_area`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ target_area: "compras" }),
    signal: AbortSignal.timeout(10000)
  });
  return permissionResponse.ok && await permissionResponse.json() === true;
}

async function googleAccessToken(credentials) {
  const issued = Math.floor(Date.now() / 1000);
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString("base64url");
  const claim = encode({
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: issued,
    exp: issued + 3600
  });
  const assertion = `${encode({ alg: "RS256", typ: "JWT" })}.${claim}`;
  const signature = createSign("RSA-SHA256")
    .update(assertion)
    .end()
    .sign(credentials.private_key.replace(/\\n/g, "\n"), "base64url");
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${assertion}.${signature}` }),
    signal: AbortSignal.timeout(10000)
  });
  if (!response.ok) throw new Error("No se autorizó la cuenta de servicio de Google");
  const payload = await response.json();
  if (!payload.access_token) throw new Error("Google no entregó un token de lectura");
  return payload.access_token;
}

async function readExpenses(accessToken) {
  const url = new URL(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(SHEET_RANGE)}`);
  url.searchParams.set("valueRenderOption", "FORMATTED_VALUE");
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
    signal: AbortSignal.timeout(15000)
  });
  if (!response.ok) throw new Error(`Google Sheets devolvió ${response.status}`);
  const payload = await response.json();
  if (!Array.isArray(payload.values) || payload.values.length > 10001) throw new Error("La hoja no tiene un rango de gastos válido");
  return feed.parse(payload.values);
}

async function handler(request, response) {
  if (request.method !== "GET") return json(response, 405, { error: "Método no permitido" });
  const token = String(request.headers.authorization || "").match(/^Bearer (.+)$/i)?.[1];
  if (!token) return json(response, 401, { error: "Inicia sesión con Supabase" });
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !anonKey) return json(response, 503, { error: "Conexión de WellSync no configurada" });
  try {
    if (!await verifyWellSyncUser(token, supabaseUrl, anonKey)) {
      return json(response, 403, { error: "Sin acceso al presupuesto" });
    }
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
      return json(response, 503, { error: "Lectura privada de Google Sheets pendiente de activar" });
    }
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    if (!credentials.client_email || !credentials.private_key) throw new Error("Cuenta de servicio incompleta");
    const result = await readExpenses(await googleAccessToken(credentials));
    return json(response, 200, { ...result, fetchedAt: new Date().toISOString(), source: "Gastos Log", sourcePeriod: feed.SOURCE_PERIOD });
  } catch (error) {
    console.error("No se pudo leer Gastos Log", error);
    return json(response, 502, { error: "No se pudo actualizar la hoja de gastos" });
  }
}

module.exports = handler;
module.exports.verifyWellSyncUser = verifyWellSyncUser;
module.exports.googleAccessToken = googleAccessToken;
module.exports.readExpenses = readExpenses;
