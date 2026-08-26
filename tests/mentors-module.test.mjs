import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import test from "node:test";

const require = createRequire(import.meta.url);
const api = require("../site/mentors-module.js");

test("normaliza la mentoría sin conservar nombres de alumnos ni correos", () => {
  const parsed = api.normalizeMentorshipRows([
    { "Matrícula": " a01234567 ", Estudiante: "Nombre privado", "Mentor(a)": "Fernanda", Comunidad: "Spirita", "Correo del Mentor": "privado@example.com" },
    { "Matrícula": "A01234567", Estudiante: "Nombre privado", "Mentor(a)": "Fernanda", Comunidad: "Spirita" },
    { "Matrícula": "", Estudiante: "Nombre privado", "Mentor(a)": "Fernanda", Comunidad: "Spirita" }
  ]);
  assert.deepEqual(parsed.rows, [{ matricula: "A01234567", mentor: "Fernanda", community: "Spirita" }]);
  assert.equal(parsed.duplicates, 1);
  assert.equal(parsed.invalid, 1);
  assert.equal("Estudiante" in parsed.rows[0], false);
  assert.equal("correo" in parsed.rows[0], false);
});

test("cuenta alumnos únicos aunque participen en varias áreas", () => {
  const assignments = [
    { matricula: "A1", mentor: "Fernanda", community: "Spirita" },
    { matricula: "A2", mentor: "Fernanda", community: "Spirita" },
    { matricula: "A3", mentor: "Luis", community: "Orienta" }
  ];
  const report = api.buildMentorReport(assignments, [
    { matricula: "A1", area: "Clases Deportivas" },
    { matricula: "A1", area: "Gimnasio" },
    { matricula: "A1", area: "Gimnasio" },
    { matricula: "A3", area: "Intramuros" }
  ]);
  const fernanda = report.mentors.find((row) => row.mentor === "Fernanda");
  assert.equal(fernanda.total, 2);
  assert.equal(fernanda.participating, 1);
  assert.equal(fernanda.withoutActivity, 1);
  assert.equal(fernanda.percentage, 50);
  assert.deepEqual(fernanda.students[0].areas, ["Clases Deportivas", "Gimnasio"]);
  assert.equal(report.uniqueStudents, 3);
  assert.equal(report.participating, 2);
});

test("ordena mentores por porcentaje y desempata por volumen", () => {
  const rows = [
    { mentor: "B", community: "Uno", percentage: 50, total: 10 },
    { mentor: "A", community: "Uno", percentage: 75, total: 5 },
    { mentor: "C", community: "Uno", percentage: 50, total: 20 }
  ];
  assert.deepEqual(api.sortMentors(rows, "desc").map((row) => row.mentor), ["A", "C", "B"]);
  assert.deepEqual(api.sortMentors(rows, "asc").map((row) => row.mentor), ["C", "B", "A"]);
});

test("WellSync cruza todas las fuentes identificables y el detalle no renderiza nombres de alumnos", async () => {
  const source = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const activitySource = source.slice(source.indexOf("function mentorActivityRows()"), source.indexOf("function mentorshipReport()"));
  for (const expected of [
    "cloudCaptures", "localCaptures", "allClassGradeRows()", "classBookingReservations",
    "gymAsistencias", "intramurosParticipants", "vivenciaParticipants", "semanaTecRows",
    "participationUploadState.representativos", "participationUploadState.gamer", "communicationParticipants"
  ]) assert.match(activitySource, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(activitySource, /APPROVED\|CONFIRMED\|COMPLETED\|ATTENDED\|ASIST/);

  const detailSource = source.slice(source.indexOf("function renderMentorDetail"), source.indexOf("function renderMentorsDashboard"));
  assert.doesNotMatch(detailSource, /Estudiante|Nombre del alumno|Nombre completo/i);
  assert.match(detailSource, /Matrícula/);
  assert.match(detailSource, /Áreas \/ módulos/);
});

test("Mentoría compartida usa Supabase sin columnas de nombres de alumnos", async () => {
  const appSource = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const migration = await readFile(new URL("../supabase/20260826_mentorship_assignments.sql", import.meta.url), "utf8");
  assert.match(appSource, /\.from\("mentorship_assignments"\)/);
  assert.match(appSource, /onConflict: "period_key,mentor,community,matricula"/);
  assert.match(migration, /create table if not exists public\.mentorship_assignments/);
  assert.match(migration, /period_key text not null/);
  assert.match(migration, /matricula text not null/);
  assert.match(migration, /mentor text not null/);
  assert.match(migration, /community text not null/);
  assert.doesNotMatch(migration, /\bestudiante\b|\bnombre_alumno\b|\bcorreo_alumno\b/i);
  assert.match(migration, /enable row level security/);
});

test("enumera las filas visibles del comparativo según el orden y filtro activos", async () => {
  const appSource = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const tableSource = appSource.slice(appSource.indexOf("Comparativo de mentores"), appSource.indexOf("function bindMentorsControls"));
  assert.match(tableSource, /<th class="mentor-row-number">No\.<\/th>/);
  assert.match(tableSource, /filteredMentors\.map\(\(row, index\)/);
  assert.match(tableSource, /<td class="mentor-row-number">\$\{index \+ 1\}<\/td>/);
});

test("mantiene visibles los encabezados al desplazarse en el comparativo", async () => {
  const styles = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");
  assert.match(styles, /\.mentor-comparison-table thead th\s*\{[^}]*position:\s*sticky;[^}]*top:\s*0;[^}]*z-index:\s*2;/s);
});

test("ordena las cinco comunidades con más alumnos únicos activos", () => {
  const mentors = [
    { community: "Forta", students: [{ matricula: "A1", participates: true }, { matricula: "A2", participates: true }] },
    { community: "Forta", students: [{ matricula: "A1", participates: true }, { matricula: "A3", participates: false }] },
    { community: "Spirita", students: [{ matricula: "B1", participates: true }] },
    { community: "Pasio", students: [{ matricula: "C1", participates: false }] }
  ];
  assert.deepEqual(api.rankCommunities(mentors, 5), [
    { label: "Forta", value: 2 },
    { label: "Spirita", value: 1 }
  ]);
});
