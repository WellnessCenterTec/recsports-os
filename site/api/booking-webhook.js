const { timingSafeEqual } = require("node:crypto");
const service = require("../booking-sync-service.js");

function json(response, status, body) {
  response.setHeader("Cache-Control", "private, no-store, max-age=0");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.status(status).json(body);
}

function safeMatch(left, right) {
  const a = Buffer.from(String(left || ""));
  const b = Buffer.from(String(right || ""));
  return a.length > 0 && a.length === b.length && timingSafeEqual(a, b);
}

async function handler(request, response) {
  if (request.method !== "POST") return json(response, 405, { error: "Método no permitido" });
  const config = service.envConfig();
  const token = String(request.headers.authorization || "").match(/^Bearer (.+)$/i)?.[1] || "";
  if (!config.webhookSecret || !safeMatch(token, config.webhookSecret)) return json(response, 401, { error: "Webhook no autorizado" });
  try {
    const result = await service.applyWebhook(request.body || {}, config);
    return json(response, 200, { ok: true, action: result.action });
  } catch (error) {
    console.error("Booking webhook failed", error.message, error.privateDetail || "");
    return json(response, 422, { error: "Evento de Reservaciones inválido" });
  }
}

module.exports = handler;
module.exports.safeMatch = safeMatch;
