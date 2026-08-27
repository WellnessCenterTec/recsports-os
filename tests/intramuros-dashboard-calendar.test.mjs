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
    () => [{ torneo: "Torneo prueba", genero: "Femenino", escuela: "Ingeniería", matricula: "A001", programa: "ITC", modalidad: "Presencial", tipo_actividad: "Fútbol", rama: "Femenil", equipo: "Azul" }],
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
    { search: "" },
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
