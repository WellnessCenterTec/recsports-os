import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function extractFunction(source, name, nextName) {
  const start = source.indexOf(`function ${name}(`);
  const end = source.indexOf(`\nfunction ${nextName}(`, start + 1);
  assert.notEqual(start, -1, `${name} debe existir`);
  assert.notEqual(end, -1, `${nextName} debe aparecer después de ${name}`);
  return source.slice(start, end);
}

test("la agenda de Intramuros muestra hoy, próximos y al final los pasados", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const sorterSource = extractFunction(app, "intramurosRoleAgendaRows", "renderIntramurosRolesDashboard");
  const rendererSource = extractFunction(app, "renderIntramurosRolesDashboard", "intramurosOperationMetrics");
  const createSorter = Function(`"use strict"; ${sorterSource}; return intramurosRoleAgendaRows;`);
  const sortAgenda = createSorter();
  const rows = [
    { id: "past-old", fecha: "2026-08-20", hora: "19:00" },
    { id: "future-late", fecha: "2026-08-30", hora: "20:00" },
    { id: "today-late", fecha: "2026-08-28", hora: "20:00" },
    { id: "invalid", fecha: "", hora: "18:00" },
    { id: "past-recent", fecha: "2026-08-27", hora: "21:00" },
    { id: "future-near", fecha: "2026-08-29", hora: "18:00" },
    { id: "today-early", fecha: "2026-08-28", hora: "18:00" }
  ];

  const sorted = sortAgenda(rows, new Date(2026, 7, 28, 11, 0, 0));

  assert.deepEqual(sorted.map((row) => row.id), [
    "today-early",
    "today-late",
    "future-near",
    "future-late",
    "past-recent",
    "past-old",
    "invalid"
  ]);
  assert.deepEqual(rows.map((row) => row.id), [
    "past-old",
    "future-late",
    "today-late",
    "invalid",
    "past-recent",
    "future-near",
    "today-early"
  ], "el orden original de los datos no debe modificarse");
  assert.match(rendererSource, /intramurosRoleAgendaRows\(roles\)/, "la tabla debe usar el orden operativo");
});
