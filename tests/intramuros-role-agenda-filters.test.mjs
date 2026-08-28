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

test("la agenda de Roles filtra por equipo, fecha y torneo de forma combinada", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const filterSource = extractFunction(app, "intramurosRoleAgendaFilteredRows", "intramurosRoleAgendaTournaments");
  const rendererSource = extractFunction(app, "renderIntramurosRolesDashboard", "intramurosOperationMetrics");
  const normalizeText = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const createFilter = Function("normalizeText", "intramurosRoleAgendaFilters", `"use strict"; ${filterSource}; return intramurosRoleAgendaFilteredRows;`);
  const filterRows = createFilter(normalizeText, { team: "", date: "", tournament: "todos" });
  const rows = [
    { id: "local", equipo_local: "Borregos Azul", equipo_visitante: "Tigres", fecha: "2026-08-29", torneo: "Fútbol" },
    { id: "visitor", equipo_local: "Lobos", equipo_visitante: "Borregos Blanco", fecha: "2026-08-29", torneo: "Fútbol" },
    { id: "other-date", equipo_local: "Borregos Azul", equipo_visitante: "Pumas", fecha: "2026-08-30", torneo: "Fútbol" },
    { id: "other-tournament", equipo_local: "Borregos Azul", equipo_visitante: "Águilas", fecha: "2026-08-29", torneo: "Voleibol" }
  ];

  assert.deepEqual(filterRows(rows, { team: "borregos", date: "", tournament: "todos" }).map((row) => row.id), ["local", "visitor", "other-date", "other-tournament"]);
  assert.deepEqual(filterRows(rows, { team: "Borregos", date: "2026-08-29", tournament: "Fútbol" }).map((row) => row.id), ["local", "visitor"]);
  assert.deepEqual(filterRows(rows, { team: "", date: "2026-08-29", tournament: "Voleibol" }).map((row) => row.id), ["other-tournament"]);
  ["intramurosRoleAgendaTeam", "intramurosRoleAgendaDate", "intramurosRoleAgendaTournament"].forEach((id) => {
    assert.match(rendererSource, new RegExp(id), `la tabla debe mostrar el filtro ${id}`);
  });
});
