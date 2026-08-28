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

test("la agenda de Roles filtra por equipo, rango de fechas, torneo y estatus de forma combinada", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const styles = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");
  const filterSource = extractFunction(app, "intramurosRoleAgendaFilteredRows", "intramurosRoleAgendaTournaments");
  const rendererSource = extractFunction(app, "renderIntramurosRolesDashboard", "intramurosOperationMetrics");
  const normalizeText = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const createFilter = Function("normalizeText", "intramurosRoleAgendaFilters", `"use strict"; ${filterSource}; return intramurosRoleAgendaFilteredRows;`);
  const filterRows = createFilter(normalizeText, { team: "", startDate: "", endDate: "", tournament: "todos", status: "todos" });
  const rows = [
    { id: "previous", equipo_local: "Borregos Verde", equipo_visitante: "Halcones", fecha: "2026-08-28", torneo: "Fútbol", estatus_partido: "Con resultado" },
    { id: "local", equipo_local: "Borregos Azul", equipo_visitante: "Tigres", fecha: "2026-08-29", torneo: "Fútbol", estatus_partido: "Programado" },
    { id: "visitor", equipo_local: "Lobos", equipo_visitante: "Borregos Blanco", fecha: "2026-08-29", torneo: "Fútbol", estatus_partido: "Programado" },
    { id: "other-date", equipo_local: "Borregos Azul", equipo_visitante: "Pumas", fecha: "2026-08-30", torneo: "Fútbol", estatus_partido: "Reservado" },
    { id: "other-tournament", equipo_local: "Borregos Azul", equipo_visitante: "Águilas", fecha: "2026-08-29", torneo: "Voleibol", estatus_partido: "Con resultado" }
  ];

  assert.deepEqual(filterRows(rows, { team: "borregos", startDate: "", endDate: "", tournament: "todos", status: "todos" }).map((row) => row.id), ["previous", "local", "visitor", "other-date", "other-tournament"]);
  assert.deepEqual(filterRows(rows, { team: "Borregos", startDate: "2026-08-29", endDate: "2026-08-29", tournament: "Fútbol", status: "Programado" }).map((row) => row.id), ["local", "visitor"]);
  assert.deepEqual(filterRows(rows, { team: "", startDate: "", endDate: "2026-08-29", tournament: "Voleibol", status: "Con resultado" }).map((row) => row.id), ["other-tournament"]);
  assert.deepEqual(filterRows(rows, { team: "", startDate: "2026-08-30", endDate: "", tournament: "Fútbol", status: "Reservado" }).map((row) => row.id), ["other-date"]);
  ["intramurosRoleAgendaTeam", "intramurosRoleAgendaStartDate", "intramurosRoleAgendaEndDate", "intramurosRoleAgendaTournament", "intramurosRoleAgendaStatus"].forEach((id) => {
    assert.match(rendererSource, new RegExp(id), `la tabla debe mostrar el filtro ${id}`);
  });
  assert.match(rendererSource, /<th>Local \/ actividad<\/th><th>Resultado<\/th><th>Visitante<\/th>/, "la agenda debe mostrar el resultado entre local y visitante");
  assert.match(rendererSource, /role-winner/, "la agenda debe identificar visualmente al equipo ganador");
  assert.match(styles, /\.intramuros-role-agenda-filters\s*\{[\s\S]*?grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/, "los cinco filtros deben permanecer en una sola línea en escritorio");
});
