(function initBudgetExpensesFeed(global) {
  "use strict";

  const SOURCE_PERIOD = "AD26";
  const required = ["id", "nombre", "costo", "area", "fecha"];
  const clean = (value) => String(value ?? "").trim();
  const key = (value) => clean(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

  function areaKey(value) {
    const area = key(value);
    if (area.includes("clases")) return "clases";
    if (area.includes("gimnasio")) return "gimnasio";
    if (area.includes("intramuros")) return "intramuros";
    if (area.includes("vivencia") || area.includes("semana tec")) return "vivencia";
    if (area.includes("comunicacion")) return "comunicacion";
    if (area.includes("direccion")) return "direccion";
    return "";
  }

  function amount(value) {
    if (typeof value === "number") return Number.isFinite(value) ? Math.round(value * 100) / 100 : null;
    const raw = clean(value);
    if (!raw) return null;
    const negative = /^\(.*\)$/.test(raw);
    const numeric = raw.replace(/[$,\s()]/g, "");
    if (!/^-?\d+(?:\.\d{1,2})?$/.test(numeric)) return null;
    const parsed = Number(numeric) * (negative ? -1 : 1);
    return Number.isFinite(parsed) ? Math.round(parsed * 100) / 100 : null;
  }

  function date(value) {
    const raw = clean(value);
    let match = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (!match) {
      match = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
      if (!match) return "";
      match = [raw, match[3], match[1], match[2]];
    }
    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const parsed = new Date(Date.UTC(year, month - 1, day));
    if (parsed.getUTCFullYear() !== year || parsed.getUTCMonth() + 1 !== month || parsed.getUTCDate() !== day) return "";
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  function parse(values) {
    if (!Array.isArray(values) || !values.length) throw new Error("La pestaña Gastos Log no contiene encabezados");
    const headers = values[0].map(key);
    const columns = Object.fromEntries(required.map((name) => [name, headers.indexOf(name)]));
    const missing = required.filter((name) => columns[name] < 0);
    if (missing.length) throw new Error(`Faltan columnas en Gastos Log: ${missing.join(", ")}`);
    const categoryColumn = headers.indexOf("tipo de gasto");
    const paymentColumn = headers.indexOf("tipo de pago");
    const byId = new Map();
    const issues = [];
    let duplicateCount = 0;
    values.slice(1).forEach((cells, index) => {
      if (!Array.isArray(cells) || cells.every((cell) => !clean(cell))) return;
      const id = clean(cells[columns.id]);
      const concept = clean(cells[columns.nombre]);
      const expenseAmount = amount(cells[columns.costo]);
      const expenseDate = date(cells[columns.fecha]);
      const sourceArea = clean(cells[columns.area]);
      const area = areaKey(sourceArea);
      const missingFields = [!id && "ID", !concept && "Nombre", expenseAmount === null && "Costo", !expenseDate && "Fecha"].filter(Boolean);
      if (missingFields.length) {
        issues.push({ row: index + 2, reason: `Dato inválido: ${missingFields.join(", ")}` });
        return;
      }
      if (!area) issues.push({ row: index + 2, reason: `Área sin equivalencia: ${sourceArea || "vacía"}` });
      if (byId.has(id)) duplicateCount += 1;
      byId.set(id, {
        id,
        period: SOURCE_PERIOD,
        concept,
        category: categoryColumn < 0 ? "" : clean(cells[categoryColumn]),
        paymentType: paymentColumn < 0 ? "" : clean(cells[paymentColumn]),
        amount: expenseAmount,
        area,
        sourceArea,
        date: expenseDate
      });
    });
    const rows = [...byId.values()].sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));
    return { rows, issues, duplicateCount };
  }

  const api = Object.freeze({ SOURCE_PERIOD, areaKey, amount, date, parse });
  global.WellSyncBudgetExpensesFeed = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
