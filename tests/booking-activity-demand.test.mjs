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
