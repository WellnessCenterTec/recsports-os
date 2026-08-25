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

test("Booking activity card shows count, divisor days, and calculated percentage", () => {
  assert.ok(appSource.includes('renderBookingActivityBars(activities)'));
  assert.ok(appSource.includes('<div class="booking-activity-rate"><strong>${percentage}%</strong><small>entre ${dateLabel}</small></div>'));
  assert.ok(styles.includes(".booking-activity-rate"));
  assert.match(styles, /\.booking-activity-copy\s*{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s*auto/s);
});
