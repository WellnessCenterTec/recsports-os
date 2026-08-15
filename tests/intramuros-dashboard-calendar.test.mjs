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
