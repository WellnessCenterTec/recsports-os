import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const semesterApi = require("../site/student-semester.js");
const { normalizeAcademicSemester } = semesterApi;

test("normalizes numeric and Spanish ordinal semester values", () => {
  const cases = [
    [1, 1],
    ["1", 1],
    ["7.0", 7],
    ["Primer Semestre", 1],
    ["Septimo Semestre", 7],
    ["Séptimo Semestre", 7],
    ["  duodécimo   semestre  ", 12]
  ];

  cases.forEach(([input, expected]) => {
    assert.equal(normalizeAcademicSemester(input), expected, String(input));
  });
});

test("rejects empty, unknown, and out-of-range semester values", () => {
  [null, undefined, "", "Sin semestre", "desconocido", 0, 13, "13.0"].forEach((input) => {
    assert.equal(normalizeAcademicSemester(input), null, String(input));
  });
});

test("reads a textual semester from a student master row for dashboard use", () => {
  assert.equal(semesterApi.studentSemesterFromRow({ Semestre: "Séptimo Semestre" }), 7);
  assert.equal(semesterApi.studentSemesterFromRow({ semestre: "Cuarto Semestre" }), 4);
  assert.equal(semesterApi.studentSemesterFromRow({ Semestre: "Sin semestre" }), null);
});
