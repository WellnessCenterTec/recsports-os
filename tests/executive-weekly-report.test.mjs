import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("the general module is named Reporte Wellness", () => {
  assert.match(source, /id:\s*"general",\s*name:\s*"Reporte Wellness"/s);
  assert.doesNotMatch(source, /name:\s*"Reporte General"/);
});

test("weekly report uses the approved ten-week full-width dashboard", () => {
  [
    "Reporte Wellness",
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
  assert.doesNotMatch(source, /Reporte Ejecutivo(?: Semanal| Semana)/, "The report title must use the Wellness name");
  assert.match(source, /Reporte Wellness Semana \$\{executiveReportState\.week\}/, "Changing the week must preserve the Wellness report name");
  assert.doesNotMatch(source, /CORTE OPERATIVO · SEMANA/, "The week must not be repeated inside the blue summary band");
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
  assert.match(source, /const laneMax = Math\.max\(\.\.\.rows\.map\(\(row\) => Number\(row\[key\] \|\| 0\)\), 1\)/, "Cada sede debe calcular su propia escala");
  assert.match(source, /\(row\[key\] \/ laneMax\) \* 119/, "Las columnas deben conservar sus valores, normalizarse por sede y reducirse 30%");
  assert.match(source, /Escala independiente por sede · valores reales sobre cada columna/);
  assert.match(styles, /\.exec-report-gym-columns \{[^}]*min-height:\s*210px;/);
  assert.match(source, /exec-report-card exec-report-gym-card/);
  assert.match(styles, /\.exec-report-gym-card \.exec-report-gym-columns\s*\{[^}]*min-height:\s*147px;/s, "La altura interna debe reducirse exactamente 30%");
  assert.match(styles, /\.exec-report-gym-card\s*\{[^}]*padding:\s*15px 20px;/s);
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
  assert.match(source, /function executiveIntramurosSportIcon\(label\)/);
  ["🏀", "🏐", "🎾", "🏈", "⚽"].forEach((icon) => assert.ok(source.includes(icon), `Missing sport icon ${icon}`));
  assert.match(source, /exec-report-sport-icon[\s\S]*?exec-report-intramuros-label[\s\S]*?row\.value/);
  assert.match(styles, /\.exec-report-intramuros-grid strong\s*{[^}]*font-size:\s*21px;[^}]*font-weight:\s*700;/s, "Tournament figures must be smaller and lighter");
  assert.match(styles, /\.exec-report-intramuros-label\s*{[^}]*font-size:\s*12px;[^}]*font-weight:\s*700;/s, "Tournament labels must be smaller and lighter");
  assert.match(styles, /\.exec-report-sport-icon\s*{[^}]*border-radius:\s*50%;[^}]*height:\s*34px;/s);
  assert.ok(styles.includes("print-color-adjust: exact !important"), "PDF export must preserve report colors");
  assert.ok(styles.includes("page-break-inside: avoid"), "PDF cards and charts must avoid internal page breaks");
  assert.ok(styles.includes("--executive-report-print-scale"), "PDF export must scale its dedicated page to fit");
  assert.match(styles, /\.exec-report-attended\s*{[^}]*grid-template-columns:\s*minmax\(0,\s*1\.05fr\)\s*minmax\(170px,\s*\.95fr\)/s, "Attended total and gender chart must reserve separate screen columns");
  assert.match(styles, /\.exec-report-attended-total\s*{[^}]*container-type:\s*inline-size/s, "Attended total must size against its own column");
  assert.match(styles, /\.exec-report-attended-total > strong\s*{[^}]*font-size:\s*clamp\(26px,\s*22cqw,\s*72px\)[^}]*white-space:\s*nowrap/s, "Large attended totals must stay inside their own column");
});

test("executive PDF unifies card typography and preserves both information bands", () => {
  assert.match(styles, /\.executive-report-print-page\s*\{[^}]*--exec-print-card-title:\s*11px;[^}]*--exec-print-label:\s*7px;[^}]*--exec-print-value:\s*8\.5px;/s);
  assert.match(styles, /\.executive-report-print-page \.exec-report-card > h3\s*\{[^}]*font-size:\s*var\(--exec-print-card-title\)/s);
  assert.match(styles, /\.executive-report-print-page \.exec-insight-card > h3\s*\{[^}]*font-size:\s*var\(--exec-print-card-title\)/s);
  assert.match(styles, /\.executive-report-print-page \.exec-report-intramuros-label\s*\{[^}]*font-size:\s*var\(--exec-print-value\)/s);
  assert.match(styles, /\.exec-report-hero\s*\{[^}]*background:\s*linear-gradient\(/s, "The upper blue information band must remain");
  assert.match(styles, /\.exec-report-hero\s*\{[^}]*min-height:\s*240px;/s, "The upper blue band must not leave unused space below the module cards");
  assert.match(styles, /\.exec-footer-kpis\s*\{[^}]*background:\s*var\(--teal\);[^}]*color:\s*#fff;/s, "The lower information band must remain");
});

test("repeated module totals are replaced by actionable comparisons", () => {
  [
    "executiveBookingPopularity",
    "executiveClassPopularity",
    "executiveVivenciaUploadHistory",
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

test("Vivencia shows the five latest participant uploads instead of upcoming events", () => {
  const historyFunction = source.slice(
    source.indexOf("function executiveVivenciaUploadHistory"),
    source.indexOf("function executiveSemanaTecGroupCounts")
  );
  assert.match(historyFunction, /vivenciaParticipantUploads[\s\S]*?second - first[\s\S]*?\.slice\(0, 5\)/);
  assert.match(source, /Vivencia · últimas cargas/);
  assert.match(source, /upload\.eventName[\s\S]*?upload\.uploadDate[\s\S]*?upload\.totalLoaded/);
  assert.doesNotMatch(source, /Vivencia · próximos eventos|Sin próximos eventos con fecha/);
  assert.match(styles, /\.exec-insight-vivencia-history > div\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\) auto auto;/s);
  assert.match(styles, /\.exec-insight-vivencia\s*\{[^}]*padding:\s*15px 17px !important;/s, "Vivencia debe ocupar menos altura en la fila de tres tarjetas");
  assert.match(styles, /\.exec-insight-vivencia \.exec-insight-events > div\s*\{[^}]*padding:\s*3px 0;/s);
});

test("mentor communities appear as a vertical top seven in the three-card insight row", () => {
  [
    "executiveMentorCommunityRanking",
    "Mentores · comunidades activas",
    "rankCommunities(mentorshipReport().mentors, 7)",
    "exec-insight-mentor-communities"
  ].forEach((needle) => assert.ok(source.includes(needle), `Missing mentor community marker: ${needle}`));
  assert.match(source, /mentorCommunities\.map\(\(row, index\)[\s\S]*?\$\{index \+ 1\}[\s\S]*?alumnos/, "Community ranking must render vertically from 1 to 7");
  assert.match(styles, /\.exec-report-insight-grid\s*\{[^}]*grid-template-columns:\s*repeat\(6,/s);
  assert.match(styles, /\.exec-report-insight-grid > article:nth-last-child\(-n \+ 3\)\s*\{[^}]*grid-column:\s*span 2;/s);
  assert.match(styles, /\.executive-report-print-page \.exec-report-insight-grid\s*\{[^}]*grid-template-columns:\s*repeat\(6,/s);
  assert.match(styles, /\.exec-insight-mentor-communities ol\s*\{[^}]*display:\s*grid;/s);
  assert.match(source, /function executiveMentorCommunityLogo[\s\S]*?assets\/community-logos/);
  assert.match(source, /<img class="exec-mentor-community-logo"[\s\S]*?alt="\$\{escapeHtml\(row\.label\)\}"/);
  assert.doesNotMatch(source, /exec-mentor-community-logo[^\n]*?<\/img>[^\n]*?<span[^>]*>\$\{escapeHtml\(row\.label\)\}/, "The wordmark must not repeat the community name as adjacent text");
  assert.match(styles, /\.exec-mentor-community-logo\s*\{[^}]*object-fit:\s*contain;/s);
  assert.match(styles, /\.exec-mentor-community-logo\s*\{[^}]*height:\s*20px;[^}]*width:\s*90px;/s, "Every community wordmark must use the same visible box");
  ["forta", "kresko", "reflekto", "spirita", "talenta", "ekvilibro", "energio", "krei", "pasio", "revo"].forEach((community) => {
    const png = fs.readFileSync(new URL(`../site/assets/community-logos/${community}.png`, import.meta.url));
    assert.equal(png.readUInt32BE(16), 360, `${community} logo must use the common width`);
    assert.equal(png.readUInt32BE(20), 80, `${community} logo must use the common height`);
  });
});

test("class demand ranks complete disciplines instead of separate PMT blocks", () => {
  const popularityFunction = source.slice(
    source.indexOf("function executiveClassPopularity()"),
    source.indexOf("function executiveVivenciaUploadHistory")
  );
  assert.ok(popularityFunction.includes("classScheduleDisciplineBase(value)"), "PMT1, PMT2 and PMT3 must share the same discipline base");
  assert.ok(popularityFunction.includes("const key = normalizeText(label)"), "Case and accent variants must share one normalized discipline key");
  assert.ok(popularityFunction.includes("(current?.value || 0) + Number(amount || 0)"), "Enrollment totals must be added across every block");
  assert.ok(popularityFunction.includes("Array.from(counts.values())"), "The ranking must receive one aggregated row per discipline");
});

test("class insight shows the unique first-block group count without exposing the PMT label", () => {
  const countFunction = source.slice(
    source.indexOf("function executiveClassGroupCount"),
    source.indexOf("function executiveVivenciaUploadHistory")
  );
  assert.ok(countFunction.includes('classGradeBlockLabel(row) !== block'), "Only rows from the requested block must be counted");
  assert.ok(countFunction.includes('`crn:${normalizeText(crn)}`'), "Students in the same CRN must count as one group");
  assert.ok(countFunction.includes("classProgramOfferings().filter"), "Programming must provide a fallback group count");
  assert.match(source, /exec-insight-card-heading"><h3>Clases · participación<\/h3><span>\$\{classGroupCount\.toLocaleString\("es-MX"\)\} clases<\/span>/);
  assert.ok(!source.includes("clases PMT1</span>"), "The block code must not appear beside the class total");
  assert.match(styles, /\.exec-insight-card-heading\s*\{[^}]*display:\s*flex;/s);
});

test("each class discipline shows its own first-block offered group count", () => {
  const popularityFunction = source.slice(
    source.indexOf("function executiveClassPopularity()"),
    source.indexOf("function executiveVivenciaUploadHistory")
  );
  assert.ok(popularityFunction.includes('executiveClassGroupCountsByDiscipline("PMT1")'), "The demand ranking must use the first-block group breakdown");
  assert.ok(popularityFunction.includes("groupCount: groupCounts.get(normalizeText(row.label)) || 0"), "Each aggregated discipline must receive its own group count");
  assert.ok(popularityFunction.includes("groupKeys.get(disciplineKey).add(key)"), "Repeated students in one CRN must not duplicate the offered class");
  assert.match(source, /\$\{row\.label\} \(\$\{row\.groupCount\.toLocaleString\("es-MX"\)\} clase/);
});
