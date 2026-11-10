import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const appSource = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
const indexSource = await readFile(new URL("../site/index.html", import.meta.url), "utf8");

test("la tarjeta usa solo eventos cuya fecha ya llegó y que tienen participantes", () => {
  const start = appSource.indexOf("function executiveVivenciaUploadHistory()");
  const end = appSource.indexOf("function executiveSemanaTecGroupCounts()", start);
  const source = appSource.slice(start, end);

  assert.match(source, /vivenciaVisibleEvents\(\)/);
  assert.match(source, /filter\(\(event\) => executiveVivenciaEventIsAvailable\(event\)\)/);
  assert.match(source, /vivenciaEventParticipantsCount\(event, metricsByEvent\)/);
  assert.match(source, /filter\(\(row\) => row\.totalLoaded > 0\)/);
  assert.match(source, /return second - first/);
  assert.match(source, /slice\(0, 6\)/);
  assert.match(source, /if \(recentEvents\.length\) return recentEvents/);
  assert.match(source, /filter\(\(row\) => executiveVivenciaEventIsAvailable\(eventsById\.get\(row\.event_id\)\)\)/);
});

test("la regla incluye la fecha actual y excluye eventos futuros", () => {
  const start = appSource.indexOf("function executiveVivenciaEventIsAvailable");
  const end = appSource.indexOf("function executiveVivenciaUploadHistory", start);
  const helperSource = appSource.slice(start, end);
  const isAvailable = Function(
    "vivenciaEventDate",
    `${helperSource}; return executiveVivenciaEventIsAvailable;`
  )((event) => event?.event_date ? new Date(`${event.event_date}T12:00:00`) : null);
  const today = new Date("2026-10-26T08:00:00");

  assert.equal(isAvailable({ event_date: "2026-10-25" }, today), true);
  assert.equal(isAvailable({ event_date: "2026-10-26" }, today), true);
  assert.equal(isAvailable({ event_date: "2026-10-27" }, today), false);
  assert.equal(isAvailable({}, today), false);
});

test("el nombre negro de Vivencia omite la fecha y conserva la fecha azul separada", () => {
  const start = appSource.indexOf("function executiveVivenciaEventDisplayName");
  const end = appSource.indexOf("function executiveVivenciaUploadHistory", start);
  const helperSource = appSource.slice(start, end);
  const displayName = Function(
    "executiveWellnessReportDisplayLabel",
    `${helperSource}; return executiveVivenciaEventDisplayName;`
  )((value) => String(value || ""));

  assert.equal(displayName("BOLETOS INTOCABLE, MARTES 3 de NOVIEMBRE, Arena"), "BOLETOS INTOCABLE, Arena");
  assert.equal(displayName("DÍA DE MUERTOS: CLAVERAS LITERARIAS, 3 de noviembre"), "DÍA DE MUERTOS: CLAVERAS LITERARIAS");
  assert.equal(displayName("BOLETOS BORREGOS, MARTES 20 octubre, 13:00 horas"), "BOLETOS BORREGOS, 13:00 horas");
  assert.equal(displayName("Halloween Run 3k 13 de octubre, Centro Deportivo"), "Halloween Run 3k, Centro Deportivo");
  assert.equal(displayName("Evento 03/11/2026, Auditorio"), "Evento, Auditorio");
});

test("la hora y el lugar se presentan como información secundaria", () => {
  const start = appSource.indexOf("function executiveVivenciaEventDisplayParts");
  const end = appSource.indexOf("function executiveVivenciaUploadHistory", start);
  const helperSource = appSource.slice(start, end);
  const displayParts = Function(`${helperSource}; return executiveVivenciaEventDisplayParts;`)();

  assert.deepEqual(displayParts("BOLETOS BORREGOS, 13:00 horas, Jardín de las carreras"), {
    title: "BOLETOS BORREGOS",
    details: "13:00 horas, Jardín de las carreras"
  });
  assert.deepEqual(displayParts("Evento sin ubicación"), {
    title: "Evento sin ubicación",
    details: ""
  });
  assert.match(appSource, /exec-insight-vivencia-title/);
  assert.match(appSource, /exec-insight-vivencia-details/);
});

test("la vista rápida de Reporte Wellness caduca al cambiar la versión o la fecha", () => {
  assert.match(appSource, /EXECUTIVE_REPORT_CACHE_RULE_VERSION/);
  assert.match(appSource, /cachedViewSnapshot\.executiveReportVersion !== EXECUTIVE_REPORT_CACHE_RULE_VERSION/);
  assert.match(appSource, /savedAt\.getFullYear\(\) === today\.getFullYear\(\)/);
  assert.match(appSource, /savedAt\.getMonth\(\) === today\.getMonth\(\)/);
  assert.match(appSource, /savedAt\.getDate\(\) === today\.getDate\(\)/);
  assert.match(appSource, /executiveReportVersion: areaId === "general" && viewId === "dashboard"/);
});

test("la versión identifica la jerarquía visual de Vivencia", () => {
  assert.match(indexSource, /20261110-booking-auto-sync-v4/);
  assert.match(indexSource, /app\.js\?v=20261110-booking-auto-sync-v4/);
});
