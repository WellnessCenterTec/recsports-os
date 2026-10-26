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

test("la vista rápida de Reporte Wellness caduca al cambiar la fecha", () => {
  assert.match(appSource, /EXECUTIVE_VIVENCIA_CACHE_RULE_VERSION/);
  assert.match(appSource, /cachedViewSnapshot\.vivenciaTimelineVersion !== EXECUTIVE_VIVENCIA_CACHE_RULE_VERSION/);
  assert.match(appSource, /savedAt\.getFullYear\(\) === today\.getFullYear\(\)/);
  assert.match(appSource, /savedAt\.getMonth\(\) === today\.getMonth\(\)/);
  assert.match(appSource, /savedAt\.getDate\(\) === today\.getDate\(\)/);
  assert.match(appSource, /vivenciaTimelineVersion: areaId === "general" && viewId === "dashboard"/);
});

test("la versión identifica la nueva regla de fechas", () => {
  assert.match(indexSource, /20261026-vivencia-elapsed-events-v3/);
  assert.match(indexSource, /app\.js\?v=20261026-vivencia-elapsed-events-v3/);
});
