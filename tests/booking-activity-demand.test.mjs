import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const appSource = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");
const helperSource = appSource.slice(
  appSource.indexOf("function groupBookingActivityRows"),
  appSource.indexOf("function bookingStatusLabel")
);

function group(rows) {
  const sandbox = {
    rows,
    result: null,
    bookingDateParts: (value) => ({ date: value || "" })
  };
  vm.runInNewContext(`${helperSource}\nresult = groupBookingActivityRows(rows);`, sandbox);
  return JSON.parse(JSON.stringify(sandbox.result));
}

test("Booking activity demand uses each activity's own distinct dates", () => {
  const rows = [
    { activity: "Nado Libre", dateLabel: "01/08/2026" },
    { activity: "Nado Libre", dateLabel: "01/08/2026" },
    { activity: "Nado Libre", dateLabel: "02/08/2026" },
    { activity: "Nado Libre", dateLabel: "02/08/2026" },
    { activity: "Ciclismo", dateLabel: "03/08/2026" },
    { activity: "Ciclismo", dateLabel: "03/08/2026" },
    { activity: "Ciclismo", dateLabel: "04/08/2026" }
  ];
  const grouped = group(rows);
  assert.deepEqual(grouped[0], { label: "Nado Libre", count: 4, distinctDates: 2, dailyPercent: 2 });
  assert.deepEqual(grouped[1], { label: "Ciclismo", count: 3, distinctDates: 2, dailyPercent: 1.5 });
});

test("Booking activity demand orders highest daily demand first", () => {
  const grouped = group([
    { activity: "Muchos registros", dateLabel: "01/08/2026" },
    { activity: "Muchos registros", dateLabel: "02/08/2026" },
    { activity: "Muchos registros", dateLabel: "03/08/2026" },
    { activity: "Demanda alta", dateLabel: "04/08/2026" },
    { activity: "Demanda alta", dateLabel: "04/08/2026" }
  ]);
  assert.deepEqual(grouped.map((row) => row.label), ["Demanda alta", "Muchos registros"]);
  assert.deepEqual(grouped.map((row) => row.dailyPercent), [2, 1]);
});

test("Booking activity card shows count, divisor days, and calculated percentage", () => {
  assert.ok(appSource.includes('renderBookingActivityBars(activities)'));
  assert.ok(appSource.includes('bookingVisualHeader("Demanda promedio diaria", "Actividades con mayor demanda"'));
  assert.ok(appSource.includes('(row.dailyPercent / max) * 100'));
  assert.ok(appSource.includes('<div class="booking-activity-rate"><strong>${percentage}%</strong><small>entre ${dateLabel}</small></div>'));
  assert.ok(styles.includes(".booking-activity-rate"));
  assert.match(styles, /\.booking-activity-copy\s*{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s*auto/s);
});

test("Booking student ranking includes each student's distinct disciplines", () => {
  const sandbox = { result: null };
  vm.runInNewContext(`${helperSource}\nresult = groupBookingStudentRows([
    { student: "A001", activity: "Yoga" },
    { student: "A001", activity: "Nado Libre" },
    { student: "A001", activity: "Nado Libre" },
    { student: "A002", activity: "Ciclismo" }
  ]);`, sandbox);
  const grouped = JSON.parse(JSON.stringify(sandbox.result));
  assert.deepEqual(grouped[0], {
    label: "A001",
    count: 3,
    activities: ["Nado Libre", "Yoga"]
  });
  assert.ok(appSource.includes('class="booking-student-copy"'));
  assert.ok(appSource.includes('row.activities.map(escapeHtml).join(" · ")'));
  assert.ok(styles.includes(".booking-student-copy small"));
});

test("Booking student ranking muestra el género junto a cada matrícula", () => {
  assert.ok(appSource.includes('class="booking-student-gender"'));
  assert.ok(appSource.includes('bookingStudentGenderLabel(row.label)'));
  assert.match(appSource, /if \(gender === "Femenino"\) return "Mujer"/);
  assert.match(appSource, /if \(gender === "Masculino"\) return "Hombre"/);
  assert.ok(styles.includes(".booking-student-gender"));
});

test("Programación Booking mide eficiencia con reservas confirmadas y asigna verde relativo", () => {
  const start = appSource.indexOf("function bookingReservationIsConfirmed");
  const end = appSource.indexOf("function renderBookingProgramPanel");
  const efficiencySource = appSource.slice(start, end);
  const sandbox = {
    rows: [
      { activity: "Yoga", status: "APPROVED" },
      { activity: "Yoga", status: "PENDING" },
      { activity: "Ciclismo", status: "COMPLETED" },
      { activity: "Ciclismo", status: "ATTENDED" }
    ],
    result: null,
    cleanBookingActivity: (value) => String(value || "").trim(),
    normalizeText: (value) => String(value || "").trim().toLowerCase(),
    classBookingReservations: []
  };
  vm.runInNewContext(`${efficiencySource}\nresult = [...bookingProgramEfficiencyByActivity(rows).entries()];`, sandbox);
  const metrics = Object.fromEntries(JSON.parse(JSON.stringify(sandbox.result)));
  assert.deepEqual(metrics.yoga, { total: 2, confirmed: 1, efficiency: .5, percent: 50, tone: 0 });
  assert.deepEqual(metrics.ciclismo, { total: 2, confirmed: 2, efficiency: 1, percent: 100, tone: 4 });
  assert.ok(appSource.includes('booking-program-efficiency tone-${metric.tone}'));
  assert.ok(appSource.includes("reservas confirmadas"));
  assert.ok(appSource.includes("Aprobadas: ${metric.confirmed.toLocaleString"));
  assert.ok(styles.includes(".booking-program-efficiency.tone-4"));
  assert.match(appSource, /const offeringsByEfficiency = \[\.\.\.offerings\]\.sort/);
  assert.match(appSource, /\(secondEfficiency \|\| 0\) - \(firstEfficiency \|\| 0\)/);
});
