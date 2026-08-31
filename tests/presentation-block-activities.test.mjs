import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import test from "node:test";

const require = createRequire(import.meta.url);
const activities = require("../site/presentation-activities.js");

test("selects the next ten events in chronological order", () => {
  const rows = Array.from({ length: 12 }, (_, index) => ({
    date: `2026-08-${String(30 - index).padStart(2, "0")}`,
    activity: `Evento ${index + 1}`
  }));
  rows.push({ date: "2026-08-17", activity: "Evento pasado" });

  const selected = activities.upcomingActivities(rows, new Date("2026-08-18T08:00:00"));

  assert.equal(selected.length, 10);
  assert.equal(selected[0].date, "2026-08-19");
  assert.equal(selected[9].date, "2026-08-28");
  assert.ok(selected.every((row) => row.activity !== "Evento pasado"));
});

test("formats the weekday in Spanish beside the original date", () => {
  assert.deepEqual(activities.activityDateParts("2026-08-18"), {
    date: "2026-08-18",
    weekday: "martes"
  });
});

test("slide four loads the activity helper and renders the expanded activity agenda", async () => {
  const [index, app] = await Promise.all([
    readFile(new URL("../site/index.html", import.meta.url), "utf8"),
    readFile(new URL("../site/app.js", import.meta.url), "utf8")
  ]);

  assert.match(index, /presentation-activities\.js\?v=20260818-block-activities-v1[^]*app\.js\?v=20260831-presentation-performance-v2/);
  assert.match(app, /upcomingActivities\([^]*new Date\(\),\s*12\s*\)/);
  assert.match(app, /Agenda próxima/);
  assert.match(app, /Fecha · día/);
  assert.match(app, /activityDateParts\(row\.date\)/);
  assert.match(app, /key: "priorities"[^]*key: "block-activities"[^]*key: "performance"[^]*key: "budget"[^]*key: "inventory"/);
});
