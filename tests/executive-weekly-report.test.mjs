import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("weekly report uses the approved ten-week full-width dashboard", () => {
  [
    "Reporte Ejecutivo Semanal",
    "ALUMNOS ATENDIDOS",
    "Semana TEC —",
    "Promedio de asistencias en Wellness",
    "Distribución por género",
    "executiveGenderAttendanceSummary",
    "Cantidad de matrículas únicas",
    "Impacto general en el Tec de Monterrey",
    "Array.from({ length: 10 }",
    "Array.from({ length: 20 }"
  ].forEach((needle) => assert.ok(source.includes(needle), `Missing approved report marker: ${needle}`));
  assert.ok(styles.includes("max-width: 1344px"), "Report must be 20% wider than the former 1120px layout");
  assert.ok(styles.includes("grid-template-columns: repeat(10"), "Gym chart must reserve ten weekly columns");
  assert.ok(styles.includes("grid-template-columns: repeat(4"), "Intramuros must use four columns on desktop");
  assert.ok(!source.includes("Alumnos únicos en Gimnasio"), "Legacy gym-only unique KPI must stay removed");
  assert.ok(!source.includes("Datos reales consultados directamente en los módulos de WellSync"), "Removed report legend must stay absent");
});

test("daily Wellness average is computed from dated Wellness visits only", () => {
  assert.ok(source.includes('normalizeGymSite(row.sitio) === "Wellness"'));
  assert.ok(source.includes("perDate.set(row.fecha"));
  assert.ok(source.includes('"Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"'));
});

test("general report PDF uses an isolated one-page landscape export view", () => {
  [
    "printExecutiveGeneralReport()",
    "createExecutiveReportPrintView()",
    'printRoot.className = "executive-report-print-root"',
    'page.classList.add("executive-report-print-page")',
    "fitExecutiveReportPrintPage(sheet, page)",
    'window.addEventListener("beforeprint", () => fitExecutiveReportPrintPage(sheet, page), { once: true })',
    'window.addEventListener("afterprint", cleanup, { once: true })'
  ].forEach((needle) => assert.ok(source.includes(needle), `Missing isolated PDF export marker: ${needle}`));
  const handler = source.slice(source.indexOf('$("#downloadExecutivePdf")'), source.indexOf('$("#refreshExecutiveData")'));
  assert.ok(handler.includes("printExecutiveGeneralReport()"), "General report button must use its dedicated export view");
  assert.ok(!handler.includes("window.print()"), "General report handler must not print the normal module view");
  assert.match(styles, /@page executive-report-page\s*{\s*size:\s*A4 landscape;\s*margin:\s*4mm;/);
  assert.ok(styles.includes("print-color-adjust: exact !important"), "PDF export must preserve report colors");
  assert.ok(styles.includes("page-break-inside: avoid"), "PDF cards and charts must avoid internal page breaks");
  assert.ok(styles.includes("--executive-report-print-scale"), "PDF export must scale its dedicated page to fit");
});
