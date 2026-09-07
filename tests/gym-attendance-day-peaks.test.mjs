import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const GYM_DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

test("Gimnasio pone en negrita el registro semanal más alto de cada día", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const styles = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");
  const start = app.indexOf("function gymAttendanceDayPeaks(");
  const end = app.indexOf("\nfunction renderGymFacilityAttendanceTable(", start);
  assert.notEqual(start, -1);
  assert.notEqual(end, -1);
  const helpers = app.slice(start, end);
  const createHelpers = Function(
    "GYM_DAYS",
    "formatCount",
    `"use strict"; ${helpers}; return { gymAttendanceDayPeaks, gymAttendanceDayCell };`
  );
  const { gymAttendanceDayPeaks, gymAttendanceDayCell } = createHelpers(GYM_DAYS, (value) => Number(value).toLocaleString("es-MX"));
  const rows = [
    { days: { Lunes: 2283, Martes: 2564, Domingo: 318 } },
    { days: { Lunes: 2538, Martes: 2405, Domingo: 318 } },
    { days: { Lunes: 2402, Martes: 0, Domingo: 264 } }
  ];
  const peaks = gymAttendanceDayPeaks(rows);

  assert.equal(peaks.Lunes, 2538);
  assert.equal(peaks.Martes, 2564);
  assert.equal(peaks.Domingo, 318);
  assert.match(gymAttendanceDayCell(rows[1], "Lunes", peaks), /class="gym-day-peak"[^>]*>2,538</);
  assert.doesNotMatch(gymAttendanceDayCell(rows[0], "Lunes", peaks), /gym-day-peak/);
  assert.match(gymAttendanceDayCell(rows[0], "Domingo", peaks), /gym-day-peak/);
  assert.match(gymAttendanceDayCell(rows[1], "Domingo", peaks), /gym-day-peak/, "los empates máximos también deben resaltarse");
  assert.doesNotMatch(gymAttendanceDayCell(rows[2], "Martes", peaks), /gym-day-peak/, "un cero nunca debe resaltarse");
  assert.match(app, /dayCells\(wellness, wellnessDayPeaks\)/);
  assert.match(app, /dayCells\(emis, emisDayPeaks\)/);
  assert.match(styles, /\.gym-attendance-combined-table tbody td\.gym-day-peak\s*\{\s*font-weight:\s*900;/);
});
