import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("presentation saves to Supabase even when browser storage is full", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");

  assert.match(app, /function saveExecutivePresentationLocalNotes[\s\S]*?try \{[\s\S]*?localStorage\.setItem\(EXECUTIVE_PRESENTATION_STORAGE_KEY/);
  assert.match(app, /No se pudo crear el respaldo local de la presentación/);
  assert.match(app, /No se pudo marcar la presentación para sincronización/);
  assert.match(app, /supabaseClient\.from\("presentaciones"\)\.upsert/);
  assert.match(app, /supabaseClient\.from\("presentacion_notas"\)\.upsert/);
});

test("keyboard navigation updates only the active executive slide", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const handler = app.slice(app.indexOf('if (!executivePresentationMode) return;'), app.indexOf('document.addEventListener("click"'));

  assert.match(handler, /event\.key === "ArrowRight"[\s\S]*?updateExecutivePresentationStage\(\)/);
  assert.match(handler, /event\.key === "ArrowLeft"[\s\S]*?updateExecutivePresentationStage\(\)/);
  assert.match(handler, /event\.key === "ArrowRight"[\s\S]*?updateExecutivePresentationStage\(\);\n  \} else if \(event\.key === "ArrowLeft"\)[\s\S]*?updateExecutivePresentationStage\(\);/);
});

test("budget presentation includes five recent purchases for every area", async () => {
  const [app, styles] = await Promise.all([
    readFile(new URL("../site/app.js", import.meta.url), "utf8"),
    readFile(new URL("../site/styles.css", import.meta.url), "utf8")
  ]);

  const purchases = app.slice(app.indexOf("function executivePresentationLatestPurchases"), app.indexOf("function renderExecutivePresentationBudget"));
  const budget = app.slice(app.indexOf("function renderExecutivePresentationBudget"), app.indexOf("function executivePresentationActivityWindow"));

  assert.match(purchases, /purchases:\s*rows\.slice\(0,\s*5\)/);
  assert.match(budget, /Últimas compras por área/);
  assert.match(budget, /row\.purchases\.map/);
  assert.match(styles, /\.executive-presentation-budget-latest\s*\{[^}]*grid-template-columns:\s*repeat\(3,/s);
  assert.match(styles, /\.executive-presentation-budget-latest ol\s*\{/);
});

test("global WellSync metric strip is removed without breaking dashboard renders", async () => {
  const [index, app] = await Promise.all([
    readFile(new URL("../site/index.html", import.meta.url), "utf8"),
    readFile(new URL("../site/app.js", import.meta.url), "utf8")
  ]);

  assert.doesNotMatch(index, /class="hero-dashboard"/);
  assert.match(index, /class="planning-link top-planning-link"/);
  assert.match(app, /function renderExecutiveKpis\(\) \{\s*const container = \$\("#executiveKpis"\);\s*if \(!container\) return;/s);
});

test("global module heading is removed while view navigation remains available", async () => {
  const [index, app, styles] = await Promise.all([
    readFile(new URL("../site/index.html", import.meta.url), "utf8"),
    readFile(new URL("../site/app.js", import.meta.url), "utf8"),
    readFile(new URL("../site/styles.css", import.meta.url), "utf8")
  ]);

  assert.doesNotMatch(index, /Dashboard ejecutivo/);
  assert.doesNotMatch(index, /id="currentTitle"/);
  assert.match(index, /class="segmented" role="tablist" aria-label="Vista"/);
  assert.match(app, /const currentTitle = \$\("#currentTitle"\);\s*if \(currentTitle\) currentTitle\.textContent = area\.name;/s);
  assert.match(styles, /\.main-panel > \.section-title\s*\{[^}]*justify-content:\s*flex-end;/s);
});

test("schedule view omits the duplicated Calendario Maestro banner", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const scheduleView = app.slice(app.indexOf("function renderSchedules(area)"), app.indexOf("function renderScheduleUploader"));

  assert.doesNotMatch(scheduleView, /Calendario Maestro: Programacion Oficial \+ Booking/);
  assert.match(scheduleView, /schedule-source-load/);
  assert.match(scheduleView, /data-schedule-mode="\$\{mode\}"/);
});
