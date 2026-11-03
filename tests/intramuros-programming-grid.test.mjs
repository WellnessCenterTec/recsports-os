import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("la programación de Intramuros usa siete botones y una cuadrícula editable", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const styles = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");

  const tabsStart = app.indexOf("const INTRAMUROS_PROGRAMMING_TABS");
  const tabsEnd = app.indexOf("const INTRAMUROS_PROGRAMMING_FIELDS", tabsStart);
  const tabsSource = app.slice(tabsStart, tabsEnd);
  assert.equal((tabsSource.match(/key:/g) || []).length, 7);
  [
    "Tochito",
    "Voleibol de sala y básquetbol",
    "Fútbol soccer y fútbol 7",
    "Fútbol rápido",
    "Pádel",
    "Tenis singles",
    "Voleibol de playa"
  ].forEach((label) => assert.match(tabsSource, new RegExp(label)));

  const renderStart = app.indexOf("function renderIntramurosProgrammingGrid(");
  const renderEnd = app.indexOf("\nfunction renderIntramurosRolesDashboard(", renderStart);
  const renderSource = app.slice(renderStart, renderEnd);
  assert.match(renderSource, /data-intramuros-programming-tab/);
  assert.match(renderSource, /data-intramuros-programming-cell/);
  assert.match(renderSource, /data-add-intramuros-programming-row/);
  assert.match(renderSource, /data-delete-intramuros-programming-row/);
  assert.match(renderSource, /data-save-intramuros-programming/);
  assert.match(renderSource, /pegar rangos desde Excel/);
  assert.match(renderSource, /intramuros-programming-result-group/);
  assert.match(renderSource, /colspan="3">Resultado/);
  assert.match(renderSource, /intramuros-programming-result-subheader/);

  assert.match(app, /key: "resultado_gd", label: "GD"/);
  assert.match(app, /key: "resultado_vs", label: "VS"/);
  assert.match(app, /key: "resultado_pd", label: "PD"/);
  assert.match(app, /function intramurosProgrammingResultParts\(/);
  assert.match(app, /`\$\{parts\.gd\} VS \$\{parts\.pd\}`/);

  assert.match(styles, /\.intramuros-programming-tabs\s*\{[\s\S]*grid-template-columns:\s*repeat\(7,/);
  assert.match(styles, /\.intramuros-programming-table input:focus/);
  assert.match(styles, /\.intramuros-programming-table tr\.scheduled td/);
  assert.match(styles, /\.intramuros-programming-table \.intramuros-programming-result-vs/);
});

test("la programación guarda altas, cambios y borrados en Supabase", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const saveStart = app.indexOf("async function saveIntramurosProgrammingChanges(");
  const saveEnd = app.indexOf("\nfunction pasteIntramurosProgrammingRange(", saveStart);
  const saveSource = app.slice(saveStart, saveEnd);

  assert.match(saveSource, /deleteIntramurosRowsById\("intramuros_roles_juego"/);
  assert.equal((saveSource.match(/\.from\("intramuros_roles_juego"\)/g) || []).length, 2);
  assert.match(saveSource, /onConflict:\s*"id"/);
  assert.match(saveSource, /onConflict:\s*"torneo,fecha,hora,cancha,equipo_local,equipo_visitante"/);
  assert.match(saveSource, /loadIntramurosParticipants\(\)/);

  const eventSource = app.slice(app.indexOf("$$('[data-intramuros-programming-tab]'"));
  assert.match(eventSource, /addEventListener\("paste"/);
  assert.match(eventSource, /pasteIntramurosProgrammingRange/);
  assert.match(eventSource, /intramurosProgrammingDeletedIds\.add/);
});

test("Tochito separa los resultados existentes en GD, VS y PD", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const helpersStart = app.indexOf("function intramurosProgrammingResultParts(");
  const helpersEnd = app.indexOf("\nfunction intramurosProgrammingRowKey(", helpersStart);
  const helpersSource = app.slice(helpersStart, helpersEnd);
  const loadHelpers = new Function(`${helpersSource}; return { intramurosProgrammingResultParts, setIntramurosProgrammingFieldValue };`);
  const { intramurosProgrammingResultParts, setIntramurosProgrammingFieldValue } = loadHelpers();

  assert.deepEqual(intramurosProgrammingResultParts("GD - PD"), { gd: "GD", pd: "PD" });
  assert.deepEqual(intramurosProgrammingResultParts("48 - 6"), { gd: "48", pd: "6" });
  assert.deepEqual(intramurosProgrammingResultParts("25 VS 43"), { gd: "25", pd: "43" });

  const row = { resultado: "34 - 18" };
  setIntramurosProgrammingFieldValue(row, { key: "resultado_gd", resultPart: "gd" }, "35");
  assert.equal(row.resultado, "35 VS 18");
  setIntramurosProgrammingFieldValue(row, { key: "resultado_pd", resultPart: "pd" }, "19");
  assert.equal(row.resultado, "35 VS 19");
});
