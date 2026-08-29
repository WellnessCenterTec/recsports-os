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
  assert.match(rendererSource, /intramurosRoleAgendaRows\(agendaRoles\)/, "la tabla debe usar el orden operativo después de filtrar");
});

test("la alerta de resultados vencidos cuenta sólo juegos anteriores sin resultado", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const source = extractFunction(app, "intramurosRoleResultFollowUp", "renderIntramurosRoleResultChart");
  const makeSummary = Function("intramurosRoleHasResult", `"use strict"; ${source}; return intramurosRoleResultFollowUp;`)(
    (row) => Boolean(row.resultado)
  );
  const summary = makeSummary([
    { fecha: "2026-08-25", resultado: "2 - 1" },
    { fecha: "2026-08-26", resultado: "" },
    { fecha: "2026-08-28", resultado: "" },
    { fecha: "2026-08-29", resultado: "" },
    { fecha: "2026-08-30", resultado: "" }
  ], new Date(2026, 7, 29));
  assert.deepEqual(summary, {
    completed: 1,
    overdue: 2,
    upcoming: 2,
    dueGames: 3,
    onTimePercent: 33,
    topTournament: "Sin torneo",
    topTournamentOverdue: 2,
    overdueTournaments: [{ tournament: "Sin torneo", pending: 2 }]
  });
});

test("la alerta muestra cada torneo con sus partidos vencidos pendientes", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const source = extractFunction(app, "intramurosRoleResultFollowUp", "renderIntramurosRoleResultChart");
  const makeSummary = Function("intramurosRoleHasResult", `"use strict"; ${source}; return intramurosRoleResultFollowUp;`)(
    (row) => Boolean(row.resultado)
  );
  const summary = makeSummary([
    { fecha: "2026-08-25", torneo: "Pádel" },
    { fecha: "2026-08-26", torneo: "Fútbol 7" },
    { fecha: "2026-08-27", torneo: "Pádel" }
  ], new Date(2026, 7, 29));
  assert.deepEqual(summary.overdueTournaments, [
    { tournament: "Pádel", pending: 2 },
    { tournament: "Fútbol 7", pending: 1 }
  ]);
  const renderer = extractFunction(app, "renderIntramurosRoleResultChart", "renderIntramurosRoleFeaturedChart");
  assert.match(renderer, /Pendientes por torneo/);
  assert.match(renderer, /partidos pendientes/);
});

test("el mapa de canchas usa recinto, fecha y horario para marcar ocupación", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const start = app.indexOf("const INTRAMUROS_FACILITY_COURTS");
  const end = app.indexOf("\nfunction intramurosRoleResultFollowUp", start);
  const source = app.slice(start, end);
  const normalize = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const headerKey = (value) => normalize(value).replace(/[^a-z0-9]+/g, "");
  const courtMap = Function("headerKey", "normalizeText", "intramurosRoleIsGame", "intramurosRoleCourtMapFilters", `"use strict"; ${source}; return intramurosRoleCourtMapState;`)(
    headerKey,
    normalize,
    (row) => Boolean(row.equipo_local && row.equipo_visitante),
    { facility: "CDB1", date: "", time: "" }
  );
  const rows = [
    { fecha: "2026-08-29", hora: "18:00", cancha: "C # 3", torneo: "Fútbol soccer", equipo_local: "Azules", equipo_visitante: "Rojos" },
    { fecha: "2026-08-29", hora: "18:00", cancha: "C # 3", torneo: "Pádel", equipo_local: "Pádel A", equipo_visitante: "Pádel B" },
    { fecha: "2026-08-29", hora: "19:00", cancha: "WELL 1 / VB", torneo: "Voleibol de sala", equipo_local: "A", equipo_visitante: "B" }
  ];
  const cdb1 = courtMap(rows, { facility: "CDB1", date: "2026-08-29", time: "18:00" });
  const cdb2 = courtMap(rows, { facility: "CDB2", date: "2026-08-29", time: "18:00" });
  const wellness = courtMap(rows, { facility: "WELLNESS", date: "2026-08-29", time: "19:00" });

  assert.equal(cdb1.courts.find((court) => court.label === "C # 3").occupiedBy.length, 1);
  assert.equal(cdb2.courts.find((court) => court.label === "CP # 3").occupiedBy.length, 1);
  assert.equal(wellness.courts.find((court) => court.label === "WELL # 1").occupiedBy.length, 1);
  assert.equal(wellness.courts.find((court) => court.label === "WELL # 2").occupiedBy.length, 0);
});
