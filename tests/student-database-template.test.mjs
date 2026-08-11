import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import test from "node:test";

const require = createRequire(import.meta.url);
const studentTemplate = require("../site/student-database-template.js");

test("creates the accepted student database CSV contract without sample records", () => {
  const expectedHeader = [
    "Matricula",
    "Nombre Campus",
    "Desc Nivel Acad Alumno",
    "Desc Programa Acad",
    "Periodo acad",
    "Genero",
    "Semestre"
  ].join(",");

  assert.equal(studentTemplate.templateFileName, "plantilla-base-datos-alumnos.csv");
  assert.equal(studentTemplate.templateCsv(), `\uFEFF${expectedHeader}\n`);
});

test("renders the download action before the unchanged student database upload action", () => {
  const html = studentTemplate.renderActions({ authorized: true, importing: false });
  const downloadIndex = html.indexOf('id="downloadStudentDatabaseTemplate"');
  const uploadIndex = html.indexOf('id="uploadStudentDatabase"');

  assert.ok(downloadIndex >= 0, "download action is present");
  assert.ok(uploadIndex > downloadIndex, "upload action follows download action");
  assert.match(html, /class="ghost-btn student-database-template-btn"/);
  assert.match(html, /data-lucide="download"/);
  assert.match(html, />Descargar plantilla</);
  assert.match(html, /class="primary-btn" id="uploadStudentDatabase"/);
  assert.doesNotMatch(html, /id="uploadStudentDatabase"[^>]*disabled/);
});

test("preserves upload authorization and importing states", () => {
  const unauthorized = studentTemplate.renderActions({ authorized: false, importing: false });
  const importing = studentTemplate.renderActions({ authorized: true, importing: true });

  assert.match(unauthorized, /id="uploadStudentDatabase"[^>]*disabled/);
  assert.match(importing, /id="uploadStudentDatabase"[^>]*disabled[^>]*>Cargando\.\.\.<\/button>/);
  assert.doesNotMatch(unauthorized, /id="downloadStudentDatabaseTemplate"[^>]*disabled/);
});

test("WellSync loads and wires the template helper only in the student database report action", async () => {
  const [index, app] = await Promise.all([
    readFile(new URL("../site/index.html", import.meta.url), "utf8"),
    readFile(new URL("../site/app.js", import.meta.url), "utf8")
  ]);

  assert.match(index, /student-database-template\.js[^]*app\.js/);
  assert.match(app, /WellSyncStudentDatabaseTemplate/);
  assert.match(app, /studentDatabaseTemplateApi\.renderActions/);
  assert.match(app, /downloadStudentDatabaseTemplate/);
  assert.match(app, /studentDatabaseTemplateApi\.templateCsv\(\)/);
  assert.match(app, /studentDatabaseTemplateApi\.templateFileName/);
});

test("student database report actions align horizontally and stack on narrow screens", async () => {
  const css = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");

  assert.match(css, /\.student-database-report-actions\s*\{[^}]*display:\s*flex;[^}]*align-items:\s*center;[^}]*gap:\s*10px;/s);
  assert.match(css, /\.student-database-report-actions\s*>\s*button\s*\{[^}]*min-height:\s*38px;/s);
  assert.match(css, /@media \(max-width:\s*760px\)[^]*\.student-database-report-actions\s*\{[^}]*display:\s*grid;[^}]*grid-template-columns:\s*1fr;/s);
});
