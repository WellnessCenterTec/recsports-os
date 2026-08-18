import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);

function gradeCards() {
  return require("../site/semana-tec-grade-cards.js");
}

test("classifies numeric and explicit Semana Tec grade outcomes", () => {
  const classify = gradeCards().classifySemanaTecGrade;

  assert.deepEqual(classify("95"), { outcome: "approved", numeric: 95 });
  assert.deepEqual(classify("69.5"), { outcome: "failed", numeric: 69.5 });
  assert.deepEqual(classify("ACREDITADO"), { outcome: "approved", numeric: null });
  assert.deepEqual(classify("No acreditado"), { outcome: "failed", numeric: null });
  assert.deepEqual(classify("NP"), { outcome: "failed", numeric: null });
  assert.deepEqual(classify("BAJA"), { outcome: "baja", numeric: null });
});

test("keeps blank, unknown, and out-of-range grades pending", () => {
  const classify = gradeCards().classifySemanaTecGrade;

  assert.deepEqual(classify(""), { outcome: "pending", numeric: null });
  assert.deepEqual(classify("por revisar"), { outcome: "pending", numeric: null });
  assert.deepEqual(classify("101"), { outcome: "pending", numeric: null });
  assert.deepEqual(classify("-1"), { outcome: "pending", numeric: null });
});

test("normalizes valid input without turning out-of-range grades into approvals", () => {
  const normalize = gradeCards().normalizeSemanaTecGradeValue;

  assert.equal(normalize(" 95,5 "), "95.5");
  assert.equal(normalize("101"), "101");
  assert.equal(normalize(" aprobado "), "APROBADO");
  assert.equal(normalize(""), "");
});

test("keeps groups 215 and 216 separate while programming supplies their identity", () => {
  const grades = [
    { periodo: "AD26", numero_grupo: 215, matricula: "a001", genero: "Femenino", calificacion: "95", profesor: "Profesor de lista", semana: 6 },
    { periodo: "AD26", numero_grupo: 215, matricula: "A001", genero: "Femenino", calificacion: "80", profesor: "Profesor de lista", semana: 6 },
    { periodo: "AD26", numero_grupo: 215, matricula: "A002", genero: "Masculino", calificacion: "NP" },
    { periodo: "AD26", numero_grupo: 215, matricula: "A003", genero: "No especificado", calificacion: "BAJA" },
    { periodo: "AD26", numero_grupo: 215, matricula: "A004", genero: "Masculino", calificacion: "por revisar" },
    { periodo: "AD26", numero_grupo: 216, matricula: "A005", genero: "Femenino", calificacion: "60" },
    { periodo: "AD26", numero_grupo: 216, matricula: "A006", genero: "Femenino", calificacion: "ACREDITADO" }
  ];
  const programming = [
    { periodo: "AD26", grupo: 215, semana: 12, crn: "17553", profesor: "Profesor Tec1" },
    { periodo: "AD26", grupo: 216, semana: 12, crn: "17563", profesor: "Profesor Tec1" },
    { periodo: "AD26", grupo: 217, semana: 12, crn: "99999", profesor: "Sin alumnos" }
  ];

  const summaries = gradeCards().buildSemanaTecGroupSummaries(grades, programming);

  assert.equal(summaries.length, 2);
  assert.deepEqual(summaries[0], {
    group: 215,
    week: 12,
    periodo: "AD26",
    crn: "17553",
    professor: "Profesor Tec1",
    horario: "",
    frecuencia: "",
    total: 4,
    female: 1,
    male: 2,
    unspecified: 1,
    average: 80,
    approved: 1,
    failed: 1,
    bajas: 1,
    pending: 1
  });
  assert.deepEqual(summaries[1], {
    group: 216,
    week: 12,
    periodo: "AD26",
    crn: "17563",
    professor: "Profesor Tec1",
    horario: "",
    frecuencia: "",
    total: 2,
    female: 2,
    male: 0,
    unspecified: 0,
    average: 60,
    approved: 1,
    failed: 1,
    bajas: 0,
    pending: 0
  });
});

test("does not invent a numeric average from textual grade outcomes", () => {
  const summaries = gradeCards().buildSemanaTecGroupSummaries([
    { periodo: "AD26", numero_grupo: 215, matricula: "A001", genero: "Femenino", calificacion: "APROBADO" },
    { periodo: "AD26", numero_grupo: 215, matricula: "A002", genero: "Masculino", calificacion: "REPROBADO" }
  ], [{ periodo: "AD26", grupo: 215, semana: 12, profesor: "Profesor Tec1" }]);

  assert.equal(summaries[0].average, null);
  assert.equal(summaries[0].approved, 1);
  assert.equal(summaries[0].failed, 1);
});

test("preserves existing grades when a roster replacement leaves them blank", () => {
  const incoming = [
    { periodo: "AD26", numero_grupo: 215, matricula: "a001", calificacion: "", profesor: "Profesor nuevo" },
    { periodo: "AD26", numero_grupo: 215, matricula: "A002", calificacion: "88" },
    { periodo: "AD26", numero_grupo: 216, matricula: "A003", calificacion: "" }
  ];
  const existing = [
    { periodo: "AD26", numero_grupo: 215, matricula: "A001", calificacion: "95" },
    { periodo: "AD26", numero_grupo: 215, matricula: "A002", calificacion: "70" }
  ];
  const originalIncoming = structuredClone(incoming);
  const originalExisting = structuredClone(existing);

  const protectedRows = gradeCards().preserveSemanaTecGrades(incoming, existing);

  assert.deepEqual(protectedRows, [
    { periodo: "AD26", numero_grupo: 215, matricula: "a001", calificacion: "95", profesor: "Profesor nuevo" },
    { periodo: "AD26", numero_grupo: 215, matricula: "A002", calificacion: "88" },
    { periodo: "AD26", numero_grupo: 216, matricula: "A003", calificacion: "" }
  ]);
  assert.deepEqual(incoming, originalIncoming);
  assert.deepEqual(existing, originalExisting);
});

test("WellSync loads the grade-card helper before the app and delegates summaries", () => {
  const indexHtml = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
  const appSource = readFileSync(new URL("../site/app.js", import.meta.url), "utf8");

  assert.match(indexHtml, /semana-tec-grade-cards\.js\?v=20260815-grade-source-v1/);
  assert.match(indexHtml, /app\.js\?v=20260818-instant-view-v2/);
  assert.ok(indexHtml.indexOf("semana-tec-grade-cards.js") < indexHtml.indexOf("app.js"));
  assert.match(appSource, /buildSemanaTecGroupSummaries\(rows, semanaTecProgramRows\)/);
  assert.match(appSource, /normalizeSemanaTecGradeValue\(value\)/);
});

test("WellSync protects grades before replacing the cloud roster snapshot", () => {
  const appSource = readFileSync(new URL("../site/app.js", import.meta.url), "utf8");

  assert.match(appSource, /preserveSemanaTecGrades\(draft\.rows, semanaTecRows\)/);
  assert.match(appSource, /saveSemanaTecRowsCloud\(protectedRows\)/);
  assert.match(appSource, /semanaTecRows = \[\.\.\.protectedRows\]/);
});
