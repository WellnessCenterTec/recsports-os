(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WellSyncVivenciaFormsFeed = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const MONTHS = Object.freeze({
    enero: 1,
    febrero: 2,
    marzo: 3,
    abril: 4,
    mayo: 5,
    junio: 6,
    julio: 7,
    agosto: 8,
    septiembre: 9,
    setiembre: 9,
    octubre: 10,
    noviembre: 11,
    diciembre: 12
  });

  function normalizeText(value) {
    return String(value ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\b(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\b/g, " ")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function normalizeMatricula(value) {
    return String(value ?? "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let cell = "";
    let quoted = false;
    const source = String(text ?? "").replace(/^\uFEFF/, "");
    for (let index = 0; index < source.length; index += 1) {
      const character = source[index];
      if (quoted) {
        if (character === '"' && source[index + 1] === '"') {
          cell += '"';
          index += 1;
        } else if (character === '"') {
          quoted = false;
        } else {
          cell += character;
        }
      } else if (character === '"') {
        quoted = true;
      } else if (character === ",") {
        row.push(cell);
        cell = "";
      } else if (character === "\n") {
        row.push(cell.replace(/\r$/, ""));
        rows.push(row);
        row = [];
        cell = "";
      } else {
        cell += character;
      }
    }
    if (cell || row.length) {
      row.push(cell.replace(/\r$/, ""));
      rows.push(row);
    }
    return rows;
  }

  function parseTimestamp(value) {
    const match = String(value || "").trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
    if (!match) return null;
    const [, day, month, year, hour, minute, second = "0"] = match;
    const date = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function extractEventDate(eventName, year = 2026) {
    const normalized = normalizeText(eventName);
    const monthPattern = Object.keys(MONTHS).join("|");
    const match = normalized.match(new RegExp(`\\b(\\d{1,2})\\s+(?:de\\s+)?(${monthPattern})\\b`));
    if (!match) return "";
    const day = Number(match[1]);
    const month = MONTHS[match[2]];
    if (!day || day > 31 || !month) return "";
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  function eventKey(eventName) {
    return normalizeText(eventName);
  }

  function headerIndex(headers, aliases) {
    const normalizedAliases = aliases.map(normalizeText);
    return headers.map(normalizeText).findIndex((header) => normalizedAliases.includes(header));
  }

  function parseGoogleFormsCsv(text, options = {}) {
    const cutoffDate = String(options.cutoffDate || "2026-08-10");
    const defaultYear = Number(options.defaultYear || cutoffDate.slice(0, 4) || 2026);
    const rows = parseCsv(text).filter((row) => row.some((cell) => String(cell || "").trim()));
    if (rows.length < 2) return { cutoff_date: cutoffDate, response_count: 0, participant_records: 0, events: [] };
    const headers = rows[0];
    const timestampColumn = headerIndex(headers, ["Marca temporal", "Timestamp"]);
    const matriculaColumn = headerIndex(headers, ["Matricula", "Matrícula"]);
    const eventColumn = headers.map(normalizeText).findIndex((header) => header.includes("evento") && header !== "proximo evento");
    if (timestampColumn < 0 || matriculaColumn < 0 || eventColumn < 0) {
      throw new Error("La hoja necesita las columnas Marca temporal, Matricula y Evento");
    }

    const cutoff = new Date(`${cutoffDate}T00:00:00`);
    const grouped = new Map();
    let lastResponseAt = null;
    rows.slice(1).forEach((row) => {
      const submittedAt = parseTimestamp(row[timestampColumn]);
      const matricula = normalizeMatricula(row[matriculaColumn]);
      const eventName = String(row[eventColumn] || "").trim();
      if (!submittedAt || submittedAt < cutoff || !/^A\d{7,9}$/.test(matricula) || !eventName) return;
      if (!lastResponseAt || submittedAt > lastResponseAt) lastResponseAt = submittedAt;
      const key = eventKey(eventName);
      if (!grouped.has(key)) {
        grouped.set(key, {
          id: `google-forms-${key.replace(/\s+/g, "-").slice(0, 72)}`,
          event_name: eventName,
          event_date: extractEventDate(eventName, defaultYear),
          response_count: 0,
          matriculas: new Set()
        });
      }
      const event = grouped.get(key);
      event.response_count += 1;
      event.matriculas.add(matricula);
    });

    const events = [...grouped.values()]
      .map((event) => ({
        id: event.id,
        event_name: event.event_name,
        event_date: event.event_date,
        response_count: event.response_count,
        participant_records: event.matriculas.size,
        women: null,
        men: null,
        unspecified: event.matriculas.size
      }))
      .sort((first, second) => String(second.event_date).localeCompare(String(first.event_date)) || second.participant_records - first.participant_records);

    return {
      source: "Google Forms",
      cutoff_date: cutoffDate,
      last_response_at: lastResponseAt ? lastResponseAt.toISOString() : "",
      response_count: events.reduce((sum, event) => sum + event.response_count, 0),
      participant_records: events.reduce((sum, event) => sum + event.participant_records, 0),
      events
    };
  }

  function normalizeFeed(payload, options = {}) {
    const cutoffDate = String(options.cutoffDate || payload?.cutoff_date || "2026-08-10");
    const events = Array.isArray(payload?.events) ? payload.events : [];
    return {
      source: String(payload?.source || "Google Forms"),
      cutoff_date: cutoffDate,
      last_response_at: String(payload?.last_response_at || ""),
      response_count: Math.max(0, Number(payload?.response_count || 0)),
      participant_records: Math.max(0, Number(payload?.participant_records || 0)),
      events: events
        .filter((event) => event && event.event_name && event.event_date)
        .map((event) => ({
          id: String(event.id || `google-forms-${eventKey(event.event_name).replace(/\s+/g, "-")}`),
          event_name: String(event.event_name),
          event_date: String(event.event_date),
          response_count: Math.max(0, Number(event.response_count || 0)),
          participant_records: Math.max(0, Number(event.participant_records || 0)),
          women: event.women == null ? null : Math.max(0, Number(event.women || 0)),
          men: event.men == null ? null : Math.max(0, Number(event.men || 0)),
          unspecified: Math.max(0, Number(event.unspecified || 0))
        }))
    };
  }

  function genderRows(feed) {
    const totals = (feed?.events || []).reduce((summary, event) => {
      summary.women += Number(event.women || 0);
      summary.men += Number(event.men || 0);
      summary.unspecified += event.women == null || event.men == null
        ? Number(event.participant_records || 0)
        : Number(event.unspecified || 0);
      return summary;
    }, { women: 0, men: 0, unspecified: 0 });
    return [
      { label: "Mujeres", value: totals.women },
      { label: "Hombres", value: totals.men },
      { label: "Sin género registrado", value: totals.unspecified }
    ];
  }

  return { eventKey, extractEventDate, genderRows, normalizeFeed, normalizeMatricula, normalizeText, parseCsv, parseGoogleFormsCsv, parseTimestamp };
});
