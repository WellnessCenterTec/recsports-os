import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import test from "node:test";

const require = createRequire(import.meta.url);
const birthdays = require("../site/presentation-birthdays.js");

test("parses collaborator birthday formats used by the module", () => {
  assert.deepEqual(birthdays.parseBirthday("21/06"), { month: 5, day: 21 });
  assert.deepEqual(birthdays.parseBirthday("2025-08-04T00:00:00"), { month: 7, day: 4 });
  assert.deepEqual(birthdays.parseBirthday("45784.0"), { month: 4, day: 7 });
  assert.equal(birthdays.parseBirthday("31/02"), null);
  assert.equal(birthdays.parseBirthday(""), null);
});

test("keeps only the first name and groups birthdays that share a day", () => {
  const rows = [
    { Colaboradores: "Ana Sofía Pérez", "Fecha cumpleaños": "13/08" },
    { Colaboradores: "Bruno López", "Fecha cumpleaños": "2025-08-13T00:00:00" },
    { Colaboradores: "Carla Ruiz", "Fecha cumpleaños": "14/08" },
    { Colaboradores: "Sin Fecha", "Fecha cumpleaños": "" }
  ];

  assert.deepEqual(birthdays.birthdaysForMonth(rows, 7), [
    { day: 13, names: ["Ana", "Bruno"] },
    { day: 14, names: ["Carla"] }
  ]);
});

test("places one cake marker per birthday date in every academic-calendar occurrence", () => {
  const markers = birthdays.schoolCalendarBirthdayMarkers([
    { Colaboradores: "Ana Pérez", "Fecha cumpleaños": "21/06" },
    { Colaboradores: "Bruno López", "Fecha cumpleaños": "21/06" },
    { Colaboradores: "Carla Ruiz", "Fecha cumpleaños": "04/08" }
  ]);

  assert.equal(markers.filter((marker) => marker.month === 5 && marker.day === 21).length, 2);
  assert.equal(markers.filter((marker) => marker.month === 7 && marker.day === 4).length, 1);
  assert.deepEqual(markers.find((marker) => marker.month === 7).names, ["Carla"]);
  assert.ok(markers.every((marker) => marker.left > 0 && marker.left < 100 && marker.top > 0 && marker.top < 100));
});

test("WellSync loads collaborator birthdays before app rendering and integrates them into the calendar", async () => {
  const [index, app, css, dataPlan] = await Promise.all([
    readFile(new URL("../site/index.html", import.meta.url), "utf8"),
    readFile(new URL("../site/app.js", import.meta.url), "utf8"),
    readFile(new URL("../site/styles.css", import.meta.url), "utf8"),
    readFile(new URL("../site/module-data-plan.js", import.meta.url), "utf8")
  ]);

  assert.match(index, /presentation-birthdays\.js[^]*app\.js/);
  assert.match(app, /birthdaysForMonth\(collaboratorBirthdayRows/);
  assert.match(app, /schoolCalendarBirthdayMarkers\(collaboratorBirthdayRows\)/);
  assert.match(app, /item\.names\.join\(", "\)/);
  assert.match(app, /executive-presentation-school-calendar-birthdays/);
  assert.match(css, /\.executive-presentation-school-calendar-birthdays span/);
  assert.match(css, /time\.birthday/);
  assert.match(css, /\[data-slide-key="general-indicators"\] \.executive-presentation-slide-body\s*\{\s*padding:\s*6px 8px/);
  assert.match(css, /\[data-slide-key="general-indicators"\] \.executive-presentation-school-calendar\s*\{[^}]*justify-content:\s*space-between[^}]*gap:\s*8px/);
  assert.match(css, /\[data-slide-key="general-indicators"\] \.executive-presentation-school-calendar-sheet\s*\{[^}]*max-width:\s*calc\(100% - 298px\)/);
  assert.match(dataPlan, /presentacion:\s*\[[^\]]*"collaborators"[^\]]*"uniformes"/);
});
