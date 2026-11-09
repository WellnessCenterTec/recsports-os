const { timingSafeEqual } = require("node:crypto");
const service = require("../booking-sync-service.js");

function json(response, status, body) {
  response.setHeader("Cache-Control", "private, no-store, max-age=0");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.status(status).json(body);
}

function bearer(request) {
  return String(request.headers.authorization || "").match(/^Bearer (.+)$/i)?.[1] || "";
}

function safeMatch(left, right) {
  const a = Buffer.from(String(left || ""));
  const b = Buffer.from(String(right || ""));
  return a.length > 0 && a.length === b.length && timingSafeEqual(a, b);
}

function defaultBounds() {
  const year = new Date().getUTCFullYear();
  return {
    start: process.env.BOOKING_SYNC_START || `${year}-01-01`,
    end: process.env.BOOKING_SYNC_END || `${year}-12-31`
  };
}

async function handler(request, response) {
  if (!["GET", "POST"].includes(request.method)) return json(response, 405, { error: "Método no permitido" });
  const config = service.envConfig();
  const token = bearer(request);
  const cronAuthorized = request.method === "POST" && safeMatch(token, process.env.CRON_SECRET);
  const user = cronAuthorized ? { role: "cron" } : await service.verifyWellSyncUser(token, { write: request.method === "POST", config });
  if (!user) return json(response, token ? 403 : 401, { error: token ? "Sin acceso a Booking" : "Inicia sesión con Supabase" });

  try {
    if (request.method === "GET") {
      const configured = service.configuration(config);
      const lastRun = configured.database ? await service.latestRun(config) : null;
      return json(response, 200, { configured, last_run: lastRun });
    }
    const fallback = defaultBounds();
    const start = String(request.body?.start || request.query?.start || fallback.start);
    const end = String(request.body?.end || request.query?.end || fallback.end);
    const result = await service.runAutomaticSync({ start, end, trigger: cronAuthorized ? "cron" : "manual" }, config);
    return json(response, 200, { ok: true, result });
  } catch (error) {
    console.error("Booking sync failed", error.message, error.privateDetail || "");
    const pending = /pendiente|configurada|configurado|credencial/i.test(error.message);
    return json(response, pending ? 503 : 502, { error: pending ? error.message : "No se pudo sincronizar Reservaciones", code: pending ? "configuration_pending" : "sync_failed" });
  }
}

module.exports = handler;
module.exports.defaultBounds = defaultBounds;
module.exports.safeMatch = safeMatch;
