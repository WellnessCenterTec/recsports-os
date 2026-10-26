import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const appSource = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
const indexSource = await readFile(new URL("../site/index.html", import.meta.url), "utf8");

test("la tarjeta usa eventos actuales con participantes", () => {
  const start = appSource.indexOf("function executiveVivenciaUploadHistory()");
  const end = appSource.indexOf("function executiveSemanaTecGroupCounts()", start);
  const source = appSource.slice(start, end);

  assert.match(source, /vivenciaVisibleEvents\(\)/);
  assert.match(source, /vivenciaEventParticipantsCount\(event, metricsByEvent\)/);
  assert.match(source, /filter\(\(row\) => row\.totalLoaded > 0\)/);
  assert.match(source, /return second - first/);
  assert.match(source, /slice\(0, 6\)/);
  assert.match(source, /if \(recentEvents\.length\) return recentEvents/);
});

test("la versión identifica la actualización publicada", () => {
  assert.match(indexSource, /20261026-vivencia-recent-events-v1/);
  assert.match(indexSource, /app\.js\?v=20261026-vivencia-recent-events-v1/);
});
