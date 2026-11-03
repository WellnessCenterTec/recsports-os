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

  assert.match(styles, /\.intramuros-programming-tabs\s*\{[\s\S]*grid-template-columns:\s*repeat\(4,/);
  assert.match(styles, /\.intramuros-programming-table input:focus/);
  assert.match(styles, /\.intramuros-programming-table tr\.scheduled td/);
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
