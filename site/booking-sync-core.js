"use strict";

const { createHash } = require("node:crypto");

const MAX_ROWS = 50000;

function clean(value) {
  return String(value ?? "").trim();
}

function normalizedHeader(value) {
  return clean(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  const source = String(text || "").replace(/^\uFEFF/, "");
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (char === '"' && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
      continue;
    }
    if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
      if (rows.length > MAX_ROWS + 1) throw new Error("La fuente excede el máximo de reservaciones permitido");
    } else field += char;
  }
  if (field || row.length) {
    row.push(field.replace(/\r$/, ""));
    rows.push(row);
  }
  if (!rows.length) return [];
  const headers = rows[0].map(normalizedHeader);
  return rows.slice(1)
    .filter((values) => values.some((value) => clean(value)))
    .map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

function pick(row, names) {
  for (const name of names) {
    const value = row?.[name];
    if (value !== undefined && value !== null && clean(value) !== "") return value;
  }
  return "";
}

function normalizeMatricula(value) {
  return clean(value).toUpperCase().replace(/\s+/g, "");
}

function isoDate(value) {
  const raw = clean(value);
  if (!raw) return "";
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toISOString();
}

function logicalKey(row) {
  const externalId = clean(row.source_reservation_id);
  if (externalId) return `id:${externalId}`;
  const fingerprint = [
    clean(row.reservation_at).toLowerCase(),
    normalizeMatricula(row.matricula),
    clean(row.activity).toLowerCase(),
    clean(row.raw_space).toLowerCase()
  ].join("|");
  return `sha256:${createHash("sha256").update(fingerprint).digest("hex")}`;
}

function normalizeReservation(input) {
  const row = Object.fromEntries(Object.entries(input || {}).map(([key, value]) => [normalizedHeader(key), value]));
  const reservation = {
    source_reservation_id: clean(pick(row, ["id", "reservation_id", "reserva_id", "folio"])) || null,
    reservation_at: isoDate(pick(row, ["reservation_date", "reservation_at", "fecha", "date", "fecha_reservacion"])),
    status: clean(pick(row, ["status", "estatus", "estado"])) || "Sin estatus",
    reservation_type: clean(pick(row, ["type", "tipo", "reservation_type", "modalidad"])) || "Sin tipo",
    matricula: normalizeMatricula(pick(row, ["alumno", "matricula", "registration", "student_id", "user_registration"])) || null,
    activity: clean(pick(row, ["espacio", "actividad", "activity", "space", "space_name"])) || "Sin actividad",
    raw_space: clean(pick(row, ["espacio", "space", "space_name", "actividad"])) || null,
    source_name: "Wellness Reservaciones API",
    source_kind: "automatic",
    source_updated_at: isoDate(pick(row, ["updated_at", "updatedat", "fecha_actualizacion"])) || null
  };
  if (!reservation.reservation_at) return { error: "fecha_invalida", row: reservation };
  reservation.source_key = logicalKey(reservation);
  return { row: reservation };
}

function normalizeReservations(rows) {
  const unique = new Map();
  const issues = [];
  for (let index = 0; index < (rows || []).length; index += 1) {
    const result = normalizeReservation(rows[index]);
    if (result.error) {
      issues.push({ row: index + 2, code: result.error });
      continue;
    }
    const existing = unique.get(result.row.source_key);
    if (!existing || String(result.row.source_updated_at || result.row.reservation_at) >= String(existing.source_updated_at || existing.reservation_at)) {
      unique.set(result.row.source_key, result.row);
    }
  }
  return { rows: [...unique.values()], issues, duplicates: Math.max(0, (rows || []).length - issues.length - unique.size) };
}

function rowsFromPayload(payload, contentType = "") {
  if (String(contentType).toLowerCase().includes("text/csv") || typeof payload === "string") return parseCsv(payload);
  if (Array.isArray(payload)) return payload;
  for (const key of ["rows", "reservations", "data", "results"]) {
    if (Array.isArray(payload?.[key])) return payload[key];
  }
  throw new Error("La API de Reservaciones no entregó una lista compatible");
}

module.exports = {
  MAX_ROWS,
  logicalKey,
  normalizeReservation,
  normalizeReservations,
  parseCsv,
  rowsFromPayload
};
