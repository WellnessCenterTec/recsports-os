import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("weekly report uses the approved ten-week full-width dashboard", () => {
  [
    "Reporte Ejecutivo Semanal",
    "ALUMNOS ATENDIDOS",
    "<span>Semana TEC</span><strong>",
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

test("every gym week with data receives its strong series color", () => {
  assert.ok(source.includes('class="${row[key] > 0 ? "has-data" : ""}"'), "Gym bars must mark every week with a positive value");
  assert.ok(styles.includes(".exec-report-gym-lane.wellness .exec-report-gym-columns > div.has-data span { background: #0874df; }"));
  assert.ok(styles.includes(".exec-report-gym-lane.emis .exec-report-gym-columns > div.has-data span { background: #ff7900; }"));
  assert.ok(!styles.includes(".exec-report-gym-columns > div:first-child span"), "Series colors must not be restricted to week 1");
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
  assert.ok(source.includes('class="exec-report-attended-total"'), "Attended total must have its own horizontal hero column");
  assert.ok(source.includes('<li><span>Gimnasio</span><strong>'), "Operational module totals must use separated labels and values");
  assert.ok(source.includes('style="--exec-report-intramuros-columns:${Math.max(rows.length, 1)}"'), "Intramuros must expose its tournament count to the layout");
  assert.match(styles, /@page executive-report-page\s*{\s*size:\s*A4 landscape;\s*margin:\s*4mm;/);
  assert.match(styles, /\.executive-report-print-page \.exec-report-attended\s*{[^}]*grid-template-columns:\s*repeat\(2,/s);
  assert.match(styles, /\.executive-report-print-page \.exec-report-intramuros-grid\s*{[^}]*grid-template-columns:\s*repeat\(var\(--exec-report-intramuros-columns,/s);
  assert.match(styles, /\.exec-report-intramuros-grid article\s*{[^}]*display:\s*grid;[^}]*justify-items:\s*center/s, "Intramuros labels and totals must stack without overlapping");
  assert.match(styles, /\.exec-report-intramuros-grid strong\s*{[^}]*white-space:\s*nowrap/s, "Intramuros totals must remain intact on their own row");
  assert.ok(styles.includes("print-color-adjust: exact !important"), "PDF export must preserve report colors");
  assert.ok(styles.includes("page-break-inside: avoid"), "PDF cards and charts must avoid internal page breaks");
  assert.ok(styles.includes("--executive-report-print-scale"), "PDF export must scale its dedicated page to fit");
  assert.match(styles, /\.exec-report-attended\s*{[^}]*grid-template-columns:\s*minmax\(0,\s*1\.05fr\)\s*minmax\(170px,\s*\.95fr\)/s, "Attended total and gender chart must reserve separate screen columns");
  assert.match(styles, /\.exec-report-attended-total\s*{[^}]*container-type:\s*inline-size/s, "Attended total must size against its own column");
  assert.match(styles, /\.exec-report-attended-total > strong\s*{[^}]*font-size:\s*clamp\(26px,\s*22cqw,\s*72px\)[^}]*white-space:\s*nowrap/s, "Large attended totals must stay inside their own column");
});

test("repeated module totals are replaced by actionable comparisons", () => {
  [
    "executiveBookingPopularity",
    "executiveClassPopularity",
    "executiveUpcomingVivenciaEvents",
    "executiveSemanaTecGroupCounts",
    "renderExecutiveInsightCards",
    "Más populares",
    "Menos populares",
    "Top 5",
    "Semana 6",
    "Semana 12",
    "Español",
    "Inglés"
  ].forEach((needle) => assert.ok(source.includes(needle), `Missing insight-card marker: ${needle}`));
  assert.ok(!source.includes('<article><h3>Booking</h3><strong>${attentions.booking'), "Booking total must not be duplicated below the operational summary");
  assert.ok(styles.includes(".exec-insight-ranking.low"), "Low-demand entries must have a distinct red treatment");
  assert.ok(styles.includes(".exec-week-group-grid"), "Semana TEC must compare weeks 6 and 12 side by side");
  assert.match(source, /function executiveSemanaTecGroupCounts\(\)[\s\S]*?languageByGroup[\s\S]*?spanish[\s\S]*?english[\s\S]*?hasLanguage/);
  assert.match(source, /exec-week-language-breakdown[\s\S]*?Español[\s\S]*?Inglés/);
  assert.match(styles, /\.exec-week-language-breakdown\s*\{[^}]*display:\s*grid;/s);
  assert.match(source, /function renderExecutiveGeneralDashboard\(\)[\s\S]*?\$\{renderExecutiveInsightCards\(\)\}/, "Insight cards must render in the normal Reporte General screen, not only its PDF clone");
  assert.match(styles, /\.exec-report-insight-grid\s*{[^}]*grid-template-columns:\s*repeat\(2,/s, "Normal Reporte General must show the insight cards in a readable two-column vertical layout");
  assert.match(styles, /@media \(max-width: 520px\)[\s\S]*?\.exec-report-insight-grid\s*{[^}]*grid-template-columns:\s*1fr/s, "Insight cards must stack on narrow screens");
});

test("mentor communities appear as a vertical top five in the three-card insight row", () => {
  [
    "executiveMentorCommunityRanking",
    "Mentores · comunidades activas",
    "rankCommunities(mentorshipReport().mentors, 5)",
    "exec-insight-mentor-communities"
  ].forEach((needle) => assert.ok(source.includes(needle), `Missing mentor community marker: ${needle}`));
  assert.match(source, /mentorCommunities\.map\(\(row, index\)[\s\S]*?\$\{index \+ 1\}[\s\S]*?alumnos/, "Community ranking must render vertically from 1 to 5");
  assert.match(styles, /\.exec-report-insight-grid\s*\{[^}]*grid-template-columns:\s*repeat\(6,/s);
  assert.match(styles, /\.exec-report-insight-grid > article:nth-last-child\(-n \+ 3\)\s*\{[^}]*grid-column:\s*span 2;/s);
  assert.match(styles, /\.executive-report-print-page \.exec-report-insight-grid\s*\{[^}]*grid-template-columns:\s*repeat\(6,/s);
  assert.match(styles, /\.exec-insight-mentor-communities ol\s*\{[^}]*display:\s*grid;/s);
});

test("class demand ranks complete disciplines instead of separate PMT blocks", () => {
  const popularityFunction = source.slice(
    source.indexOf("function executiveClassPopularity()"),
    source.indexOf("function executiveUpcomingVivenciaEvents")
  );
  assert.ok(popularityFunction.includes("classScheduleDisciplineBase(value)"), "PMT1, PMT2 and PMT3 must share the same discipline base");
  assert.ok(popularityFunction.includes("const key = normalizeText(label)"), "Case and accent variants must share one normalized discipline key");
  assert.ok(popularityFunction.includes("(current?.value || 0) + Number(amount || 0)"), "Enrollment totals must be added across every block");
  assert.ok(popularityFunction.includes("Array.from(counts.values())"), "The ranking must receive one aggregated row per discipline");
});
