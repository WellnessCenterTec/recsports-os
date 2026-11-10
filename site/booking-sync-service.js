"use strict";

const core = require("./booking-sync-core.js");

const DEFAULT_SOURCE_URL = "https://wellness-94dd0b1a4748.herokuapp.com/api/reservation/downloadReservations";

function envConfig() {
  return {
    supabaseUrl: String(process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/$/, ""),
    anonKey: String(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""),
    serviceKey: String(process.env.SUPABASE_SERVICE_ROLE_KEY || ""),
    sourceUrl: String(process.env.BOOKING_SOURCE_API_URL || DEFAULT_SOURCE_URL),
    sourceToken: String(process.env.BOOKING_SOURCE_API_TOKEN || ""),
    webhookSecret: String(process.env.BOOKING_WEBHOOK_SECRET || "")
  };
}

function jsonHeaders(key, bearer = key) {
  return { apikey: key, Authorization: `Bearer ${bearer}`, "Content-Type": "application/json" };
}

function configuration(config = envConfig()) {
  return {
    database: Boolean(config.supabaseUrl && config.anonKey && config.serviceKey),
    source: Boolean(config.sourceUrl && config.sourceToken),
    webhook: Boolean(config.webhookSecret)
  };
}

function canAccessBooking(profile, { write = false } = {}) {
  if (!profile?.active) return false;
  if (["admin", "direccion"].includes(profile.role)) return true;
  const classesCoordinator = profile.role === "coordinador" && profile.area_key === "clases";
  if (write) return classesCoordinator;
  return classesCoordinator;
}

async function verifyWellSyncUser(token, { write = false, config = envConfig() } = {}) {
  if (!token || !config.supabaseUrl || !config.anonKey) return null;
  const headers = jsonHeaders(config.anonKey, token);
  const userResponse = await fetch(`${config.supabaseUrl}/auth/v1/user`, { headers, signal: AbortSignal.timeout(10000) });
  if (!userResponse.ok) return null;
  const user = await userResponse.json();
  if (!user?.id) return null;
  const profileResponse = await fetch(`${config.supabaseUrl}/rest/v1/rpc/get_my_profile`, {
    method: "POST",
    headers,
    body: "{}",
    signal: AbortSignal.timeout(10000)
  });
  if (!profileResponse.ok) return null;
  const profilePayload = await profileResponse.json();
  const profile = Array.isArray(profilePayload) ? profilePayload[0] : profilePayload;
  if (!canAccessBooking(profile, { write })) return null;
  return { id: user.id, role: profile.role, area: profile.area_key };
}

function validateBounds(start, end) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(start || "") || !/^\d{4}-\d{2}-\d{2}$/.test(end || "")) {
    throw new Error("Rango de sincronización inválido");
  }
  const startTime = Date.parse(`${start}T00:00:00Z`);
  const endTime = Date.parse(`${end}T23:59:59Z`);
  if (!Number.isFinite(startTime) || !Number.isFinite(endTime) || endTime < startTime || endTime - startTime > 370 * 86400000) {
    throw new Error("Rango de sincronización inválido");
  }
}

async function supabaseRequest(path, options = {}, config = envConfig()) {
  if (!config.supabaseUrl || !config.serviceKey) throw new Error("Base de sincronización no configurada");
  const response = await fetch(`${config.supabaseUrl}/rest/v1/${path}`, {
    ...options,
    headers: { ...jsonHeaders(config.serviceKey), ...(options.headers || {}) },
    signal: options.signal || AbortSignal.timeout(20000)
  });
  if (!response.ok) {
    const detail = await response.text();
    const error = new Error(`Supabase rechazó la sincronización (${response.status})`);
    error.privateDetail = detail.slice(0, 500);
    throw error;
  }
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

async function latestRun(config = envConfig()) {
  const rows = await supabaseRequest("booking_sync_runs?select=id,status,trigger_kind,started_at,finished_at,rows_received,rows_upserted,rows_removed,issue_count,error_code&order=started_at.desc&limit=1", {}, config);
  return Array.isArray(rows) ? rows[0] || null : null;
}

async function fetchSourceRows(start, end, config = envConfig()) {
  if (!config.sourceToken) throw new Error("Credencial de Reservaciones pendiente");
  const response = await fetch(config.sourceUrl, {
    method: "POST",
    headers: { Authorization: `Bearer ${config.sourceToken}`, "Content-Type": "application/json", Accept: "text/csv, application/json" },
    body: JSON.stringify({ startDate: `${start}T00:00:00.000Z`, endDate: `${end}T23:59:59.999Z` }),
    signal: AbortSignal.timeout(30000)
  });
  if (!response.ok) throw new Error(`Reservaciones rechazó la consulta (${response.status})`);
  const length = Number(response.headers.get("content-length") || 0);
  if (length > 15 * 1024 * 1024) throw new Error("La respuesta de Reservaciones excede el límite permitido");
  const contentType = response.headers.get("content-type") || "";
  const payload = contentType.includes("json") ? await response.json() : await response.text();
  return core.rowsFromPayload(payload, contentType);
}

async function runAutomaticSync({ start, end, trigger = "manual" }, config = envConfig()) {
  validateBounds(start, end);
  const configured = configuration(config);
  if (!configured.database || !configured.source) throw new Error("Sincronización automática pendiente de credenciales");
  const sourceRows = await fetchSourceRows(start, end, config);
  const normalized = core.normalizeReservations(sourceRows);
  const result = await supabaseRequest("rpc/replace_booking_automatic", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({ p_start: start, p_end: end, p_rows: normalized.rows, p_trigger: trigger, p_issue_count: normalized.issues.length })
  }, config);
  return {
    ...(Array.isArray(result) ? result[0] : result),
    received: sourceRows.length,
    accepted: normalized.rows.length,
    duplicates: normalized.duplicates,
    issues: normalized.issues.length
  };
}

async function applyWebhook(payload, config = envConfig()) {
  if (!configuration(config).database) throw new Error("Base de sincronización no configurada");
  const action = String(payload?.action || payload?.event || "upsert").toLowerCase();
  const candidate = payload?.reservation || payload?.data || payload;
  const normalized = core.normalizeReservation(candidate);
  if (normalized.error) throw new Error("Webhook de Reservaciones sin fecha válida");
  if (["delete", "deleted", "remove", "removed"].includes(action)) {
    await supabaseRequest(`class_booking_reservations?source_kind=eq.automatic&source_key=eq.${encodeURIComponent(normalized.row.source_key)}`, { method: "DELETE" }, config);
    return { action: "deleted", source_key: normalized.row.source_key };
  }
  await supabaseRequest("class_booking_reservations?on_conflict=source_kind,source_key", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify([normalized.row])
  }, config);
  return { action: "upserted", source_key: normalized.row.source_key };
}

module.exports = {
  DEFAULT_SOURCE_URL,
  applyWebhook,
  canAccessBooking,
  configuration,
  envConfig,
  fetchSourceRows,
  latestRun,
  runAutomaticSync,
  validateBounds,
  verifyWellSyncUser
};
