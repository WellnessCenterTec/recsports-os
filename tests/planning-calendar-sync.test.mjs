import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");

test("WellSync treats Planeacion delete markers as the shared source of truth", () => {
  assert.match(source, /const PLANNING_DELETE_MARKER_PREFIX = "__OCULTAR_ACTIVIDAD__::"/);
  assert.match(source, /function planningCalendarSourceActivityId\(row\)/);
  assert.match(source, /function visiblePlanningCalendarRows\(rows = planningCalendarRows\)/);
  assert.match(source, /!deletedIds\.has\(planningCalendarSourceActivityId\(row\)\)/);
  assert.match(source, /return visiblePlanningCalendarRows\(rows\)/);
  assert.match(source, /return visiblePlanningCalendarRows\(planningCalendarRows\)/);
  assert.doesNotMatch(source, /PLANNING_SEMESTRAL_DATA_URL/);
});

test("WellSync can send a shared deletion marker back to Planeacion", () => {
  assert.match(source, /async function deletePlanningCalendarActivity\(activityId\)/);
  assert.match(source, /PLANNING_SEMESTRAL_FORM_SUBMIT_URL/);
  assert.match(source, /data-delete-planning-activity/);
  assert.match(source, /Actividad eliminada de Planeación y WellSync/);
  assert.match(source, /Solo Dirección puede eliminar actividades del calendario/);
});

test("the executive calendar has a visible fresh-data control", () => {
  assert.match(source, /Datos en vivo de Planeación Semestral/);
  assert.match(source, /id="refreshPlanningCalendar" type="button">Actualizar<\/button>/);
  assert.match(source, /renderPlanningActivityDetail\(selected\)/);
});
