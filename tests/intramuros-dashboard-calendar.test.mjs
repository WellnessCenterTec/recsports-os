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

test("Intramuros Dashboard omits the calendar and preserves its remaining sections", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const dashboardSource = extractFunction(app, "renderIntramurosDashboard", "renderDashboard");
  const dependencyNames = [
    "filteredIntramurosParticipants", "normalizeText", "renderPlanningAreaDashboard", "areas",
    "planningCalendarRows", "planningCalendarLoaded", "planningCalendarError",
    "intramurosRoleCalendarActivities", "intramurosCalendarLayer", "renderIntramurosFilter",
    "intramurosFilterOptions", "intramurosFilters", "renderIntramurosExecutiveCharts",
    "renderTournamentCards", "renderTournamentExpediente", "escapeHtml"
  ];
  const createRenderer = Function(...dependencyNames, `"use strict"; ${dashboardSource}; return renderIntramurosDashboard;`);
  const renderDashboard = createRenderer(
    () => [{ torneo: "Torneo prueba", genero: "Femenino", escuela: "Ingeniería", matricula: "A001", programa: "ITC", modalidad: "Presencial", tipo_actividad: "Fútbol", rama: "Femenil", equipo: "Azul", grupo: "A", sancion: "Copa EMCS", comentario: "" }],
    (value) => String(value || "").toLowerCase(),
    () => '<div data-test="intramuros-calendar">Calendario operativo</div>',
    [{ id: "intramuros", name: "Intramuros" }],
    [],
    true,
    "",
    () => [],
    "all",
    (_name, label) => `<label data-test="filter">${label}</label>`,
    () => [],
    { search: "", sanction: "todos" },
    () => '<div data-test="executive-charts"></div>',
    () => '<div data-test="tournament-cards"></div>',
    () => '<div data-test="tournament-expediente"></div>',
    (value) => String(value ?? "")
  );

  const html = renderDashboard();

  assert.doesNotMatch(html, /data-test="intramuros-calendar"/);
  assert.match(html, /intramuros-filter-grid/);
  assert.match(html, /upload-kpi-grid/);
  assert.match(html, /data-test="executive-charts"/);
  assert.match(html, /data-test="tournament-cards"/);
  assert.match(html, /data-test="tournament-expediente"/);
  assert.match(html, /Participantes Intramuros/);
  assert.match(html, /Con sanción/);
  assert.match(html, />Sanción</);
  assert.match(html, />Grupo</);
  assert.match(html, />Comentario</);
});

test("Intramuros Dashboard removes only the four duplicated charts", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const styles = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");
  const chartsSource = extractFunction(app, "renderIntramurosExecutiveCharts", "renderIntramurosFilter");
  const desktopGrid = styles.slice(styles.indexOf(".intramuros-exec-grid {"), styles.indexOf(".intramuros-exec-card {"));

  [
    "Juegos programados",
    "Top 10 programas académicos",
    "Resultados vs pendientes",
    "Juegos por cancha"
  ].forEach((title) => assert.doesNotMatch(chartsSource, new RegExp(title), `${title} ya no debe aparecer en el Dashboard`));

  [
    "Participación por escuela",
    "renderIntramurosProgressCard(summaries)",
    "renderIntramurosTournamentGenderCard(rows)"
  ].forEach((marker) => assert.ok(chartsSource.includes(marker), `${marker} debe conservarse en el Dashboard`));

  assert.match(desktopGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/, "Las tres gráficas deben ocupar una sola fila completa");
  assert.doesNotMatch(desktopGrid, /grid-template-areas/, "La cuadrícula no debe reservar espacios para las gráficas eliminadas");
  assert.doesNotMatch(styles, /grid-area:\s*gender/, "La gráfica de género no debe conservar su posición antigua");
  assert.match(styles, /\.intramuros-chart-school \.intramuros-exec-bars,[\s\S]*?align-content:\s*space-between;[\s\S]*?height:\s*100%;/, "Las gráficas cortas deben aprovechar toda la altura disponible");
});

test("Avance por torneo siempre ordena de mayor a menor porcentaje", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const progressSource = extractFunction(app, "renderIntramurosProgressCard", "renderIntramurosExecutiveCharts");
  const createRenderer = Function("escapeHtml", `"use strict"; ${progressSource}; return renderIntramurosProgressCard;`);
  const renderProgress = createRenderer((value) => String(value ?? ""));
  const html = renderProgress([
    { torneo: "Fútbol soccer", progress: 0, totalParticipants: 536, status: "Programado" },
    { torneo: "Básquetbol", progress: 17, totalParticipants: 34, status: "En curso" },
    { torneo: "Fútbol rápido", progress: 25, totalParticipants: 221, status: "En curso" },
    { torneo: "Voleibol de playa", progress: 21, totalParticipants: 41, status: "En curso" }
  ]);

  const positions = ["Fútbol rápido", "Voleibol de playa", "Básquetbol", "Fútbol soccer"].map((label) => html.indexOf(label));
  assert.ok(positions.every((position) => position >= 0), "todos los torneos deben renderizarse");
  assert.deepEqual([...positions].sort((a, b) => a - b), positions, "el mayor avance debe quedar arriba y el menor abajo");
});

test("el buscador de Intramuros permite escribir seguido y conserva el cursor", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const listenerStart = app.indexOf('$("#intramurosSearch")?.addEventListener("input"');
  const listenerEnd = app.indexOf('\n  $("#addIntramurosOperationRow")', listenerStart);
  assert.notEqual(listenerStart, -1, "el buscador debe tener un controlador de entrada");
  assert.notEqual(listenerEnd, -1, "el controlador debe terminar antes del siguiente control");
  const listener = app.slice(listenerStart, listenerEnd);

  assert.match(listener, /clearTimeout\(intramurosSearchRenderTimer\)/);
  assert.match(listener, /setTimeout\(\(\) => \{/);
  assert.match(listener, /\.focus\(\{ preventScroll: true \}\)/);
  assert.match(listener, /\.setSelectionRange\(/);
  assert.match(listener, /\}, 250\)/);
  assert.doesNotMatch(listener, /intramurosFilters\.search = event\.target\.value;\s*render\(\);/);
});

test("Próximos juegos y resultados muestran información sin barras", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const helperSource = extractFunction(app, "renderIntramurosGameInfoList", "renderTournamentExpediente");
  const createRenderer = Function("escapeHtml", `"use strict"; ${helperSource}; return renderIntramurosGameInfoList;`);
  const renderGames = createRenderer((value) => String(value ?? ""));
  const resultHtml = renderGames([{ fecha: "2026-09-23", hora: "18:00", cancha: "Cancha 1", equipo_local: "REGIAS", equipo_visitante: "PANTERAS", resultado: "50 - 10", estatus_partido: "Finalizado" }], "result");

  assert.match(resultHtml, /2026-09-23/);
  assert.match(resultHtml, /18:00 · Cancha 1/);
  assert.match(resultHtml, /REGIAS/);
  assert.match(resultHtml, /PANTERAS/);
  assert.match(resultHtml, /Resultado: 50 - 10/);
  assert.doesNotMatch(resultHtml, /upload-bar-row|<i>|value: 1/);

  const expedienteStart = app.indexOf("function renderTournamentExpediente(");
  const expedienteEnd = app.indexOf("\nfunction renderIntramurosDashboard(", expedienteStart);
  const expedienteSource = app.slice(expedienteStart, expedienteEnd);
  assert.match(expedienteSource, /renderIntramurosGameInfoList\(pending, "pending"\)/);
  assert.match(expedienteSource, /renderIntramurosGameInfoList\(withResult, "result"\)/);
  assert.doesNotMatch(expedienteSource, /renderUploadBars\("Pendientes"|renderUploadBars\("Resultados"/);
});

test("las seis gráficas de Roles forman dos filas de tres en escritorio", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const styles = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");
  const rolesStart = app.indexOf("function renderIntramurosRolesDashboard(");
  const rolesEnd = app.indexOf("\nfunction intramurosOperationMetrics(", rolesStart);
  const rolesSource = app.slice(rolesStart, rolesEnd);

  assert.match(rolesSource, /upload-chart-grid intramuros-role-chart-grid/);
  assert.equal((rolesSource.match(/renderUploadBars\(/g) || []).length, 6);
  assert.match(styles, /\.intramuros-role-chart-grid\s*\{\s*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(styles, /@media \(max-width: 1120px\)[\s\S]*?\.intramuros-role-chart-grid \{ grid-template-columns: repeat\(2, minmax\(0, 1fr\)\); \}/);
  assert.match(styles, /@media \(max-width: 760px\)[\s\S]*?\.intramuros-role-chart-grid \{ grid-template-columns: 1fr; \}/);
});

test("los siete indicadores de Roles permanecen en una sola línea", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const styles = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");
  const rolesStart = app.indexOf("function renderIntramurosRolesDashboard(");
  const rolesEnd = app.indexOf("\nfunction intramurosOperationMetrics(", rolesStart);
  const rolesSource = app.slice(rolesStart, rolesEnd);

  assert.match(rolesSource, /upload-kpi-grid intramuros-role-kpi-grid/);
  assert.equal((rolesSource.match(/<article><span>/g) || []).length, 7);
  assert.match(styles, /\.intramuros-role-kpi-grid\s*\{\s*grid-template-columns:\s*repeat\(7,\s*minmax\(0,\s*1fr\)\);/);
});

test("las tarjetas de torneo muestran totales y participantes por rama", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const cardsSource = extractFunction(app, "renderTournamentCards", "renderIntramurosGameInfoList");

  ["Participantes", "Equipos", "Juegos", "Participantes por rama", "Varonil", "Femenil", "Mixto"].forEach((label) => {
    assert.ok(cardsSource.includes(label), `${label} debe mostrarse en cada tarjeta`);
  });
  assert.match(cardsSource, /budget-area-track/);
  assert.match(cardsSource, /\$\{row\.progress\}% avance/);
});

test("Reportes incluye una auditoría de matrículas repetidas sin nombres", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const auditSource = extractFunction(app, "intramurosDuplicateParticipantAudit", "renderIntramurosDuplicateParticipantAudit");
  const auditRendererSource = extractFunction(app, "renderIntramurosDuplicateParticipantAudit", "renderIntramurosOmarWorkspace");
  const reportStart = app.indexOf("function renderIntramurosOmarWorkspace(");
  const reportEnd = app.indexOf("\nfunction renderTournamentCards(", reportStart);
  const reportSource = app.slice(reportStart, reportEnd);

  assert.match(auditSource, /group\.records > 1/);
  assert.match(auditSource, /canonicalIntramurosTournament\(row\.torneo\)/);
  assert.match(auditSource, /group\.teams\.set/);
  assert.match(auditRendererSource, /Matrículas repetidas en deportes o equipos/);
  assert.match(auditRendererSource, /Matrícula[\s\S]*?Apariciones[\s\S]*?Deportes[\s\S]*?Equipos[\s\S]*?Seguimiento/);
  assert.match(auditRendererSource, /Los casos con más de un equipo aparecen primero/);
  assert.match(reportSource, /renderIntramurosDuplicateParticipantAudit\(duplicateAuditRows\)/);
  assert.doesNotMatch(auditRendererSource, /Nombre|Apellido/);
});
