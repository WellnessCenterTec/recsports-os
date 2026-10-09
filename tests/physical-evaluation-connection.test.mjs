import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const formSource = await readFile(new URL("../site/evaluaciones-fisicas.js", import.meta.url), "utf8");
const appSource = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
const formHtml = await readFile(new URL("../site/evaluaciones-fisicas.html", import.meta.url), "utf8");
const stylesSource = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");

function loadValidator() {
  const start = formSource.indexOf("const PHYSICAL_TESTS = [");
  const end = formSource.indexOf("function showReview()");
  assert.ok(start >= 0 && end > start, "No se encontró el contrato del formulario físico");
  const context = { window: { RECSPORTS_ENV: {} }, document: { querySelector: () => null } };
  vm.runInNewContext(`${formSource.slice(start, end)}\nthis.validatePhysicalPayload = validatePayload;`, context);
  return context.validatePhysicalPayload;
}

function payload(overrides = {}) {
  const values = {
    cooper_12m: "1.620",
    abdominales: "40",
    lagartijas: "30",
    saltos_cuerda: "120",
    wall_ball: "35",
    remo_distancia: "724",
    remo_suspendido: "20",
    ...overrides
  };
  return {
    collaborator_nomina: "L00000001",
    period_key: "AD26",
    discipline: "Wellness",
    results: Object.entries(values).map(([test_key, value]) => ({ test_key, value, status: "realizada", notes: "" }))
  };
}

function loadHallRankingEligibility() {
  const start = appSource.indexOf("const PHYSICAL_HALL_ROWING_DISTANCE_PERIOD");
  const end = appSource.indexOf("function physicalHallGenderValue");
  assert.ok(start >= 0 && end > start, "No se encontró el filtro del ranking de remo distancia");
  const context = {
    MASTER_PERIODS: {
      FJ26: { start: "2026-01-01", end: "2026-06-30" },
      IN26: { start: "2026-06-01", end: "2026-07-31" },
      AD26: { start: "2026-07-01", end: "2026-12-31" }
    }
  };
  vm.runInNewContext(`${appSource.slice(start, end)}\nthis.physicalHallRankingRowEligible = physicalHallRankingRowEligible;`, context);
  return context.physicalHallRankingRowEligible;
}

function loadHallPeriodMatcher() {
  const start = appSource.indexOf("function physicalHallPeriodValue");
  const end = appSource.indexOf("function physicalHallPeriodOptions");
  assert.ok(start >= 0 && end > start, "No se encontró el filtro de periodo del Salón de la Fama");
  const context = {
    MASTER_PERIODS: {
      FJ26: { start: "2026-01-01", end: "2026-06-30" },
      IN26: { start: "2026-06-01", end: "2026-07-31" },
      AD26: { start: "2026-07-01", end: "2026-12-31" }
    }
  };
  vm.runInNewContext(`${appSource.slice(start, end)}\nthis.physicalHallPeriodMatches = physicalHallPeriodMatches;`, context);
  return context.physicalHallPeriodMatches;
}

test("el formulario valida unidades y rangos antes de llamar a Supabase", () => {
  const validate = loadValidator();
  assert.equal(validate(payload()), "");
  assert.match(validate(payload({ cooper_12m: "82" })), /entre 0\.001 y 10 km/);
  assert.equal(validate(payload({ cooper_12m: "3.180" })), "");
  assert.match(validate(payload({ abdominales: "20.5" })), /repeticiones enteras/);
  assert.equal(validate(payload({ remo_distancia: "0.724" })), "");
});

test("formulario y tablero conservan las mismas siete claves de prueba", () => {
  for (const key of ["cooper_12m", "abdominales", "lagartijas", "saltos_cuerda", "wall_ball", "remo_distancia", "remo_suspendido"]) {
    assert.match(formSource, new RegExp(`key: "${key}"`));
    assert.match(appSource, new RegExp(`${key}:`));
  }
  assert.match(formSource, /client\.rpc\("submit_public_physical_evaluation", \{ payload \}\)/);
  assert.match(appSource, /\.from\("physical_evaluations"\)[\s\S]*physical_evaluation_results \(/);
});

test("el historial pagina todos los resultados sin el límite oculto anterior", () => {
  assert.match(appSource, /const PHYSICAL_HISTORY_PAGE_SIZE = 50/);
  assert.match(appSource, /const historyRows = rows\.slice\(historyStart, historyStart \+ PHYSICAL_HISTORY_PAGE_SIZE\)/);
  assert.match(appSource, /Mostrando \$\{rows\.length \? historyStart \+ 1 : 0\}–\$\{Math\.min\(historyStart \+ PHYSICAL_HISTORY_PAGE_SIZE, rows\.length\)\} de \$\{rows\.length\}/);
  assert.doesNotMatch(appSource, /rows\.slice\(0, 169\)/);
});

test("una captura guardada notifica al tablero abierto y usa activos versionados", () => {
  assert.match(formSource, /localStorage\.setItem\(PHYSICAL_EVALUATION_UPDATE_KEY, new Date\(\)\.toISOString\(\)\)/);
  assert.match(appSource, /window\.addEventListener\("storage", \(event\) => \{/);
  assert.match(appSource, /loadPhysicalEvaluations\(\)\.then/);
  assert.match(formHtml, /evaluaciones-fisicas\.js\?v=20261009-performance-v3/);
});

test("el salón de la fama muestra la foto del coach al doble y aprovecha el ancho de la tarjeta", () => {
  assert.match(appSource, /class="physical-hof-record-body"/);
  assert.match(stylesSource, /\.physical-hof-leader-row\s*\{[^}]*grid-template-columns:\s*132px minmax\(0, 1fr\)/s);
  assert.match(stylesSource, /\.physical-hof-person-avatar\s*\{[^}]*width:\s*132px;[^}]*height:\s*132px;/s);
  assert.match(stylesSource, /\.physical-hof-record-body\s*\{[^}]*min-height:\s*132px;/s);
});

test("remo distancia del salón de la fama usa solo AD26 desde el 1 de septiembre de 2026", () => {
  const eligible = loadHallRankingEligibility();
  assert.equal(eligible({ period_key: "AD26", evaluated_at: "2026-09-01T08:00:00Z" }, "remo_distancia"), true);
  assert.equal(eligible({ period_key: "AD26", evaluated_at: "2026-09-30T08:00:00Z" }, "remo_distancia"), true);
  assert.equal(eligible({ period_key: "AD26", evaluated_at: "2026-10-15" }, "remo_distancia"), true);
  assert.equal(eligible({ period_key: "AD26", evaluated_at: "2026-08-31" }, "remo_distancia"), false);
  assert.equal(eligible({ period_key: "FJ26", evaluated_at: "2026-10-15" }, "remo_distancia"), false);
  assert.equal(eligible({ period_key: "Pendiente", evaluated_at: "2026-10-15" }, "remo_distancia"), true);
  assert.equal(eligible({ period_key: "FJ26", evaluated_at: "2024-01-01" }, "cooper_12m"), true);
  assert.match(appSource, /if \(!physicalHallRankingRowEligible\(row, testKey\)\) return;/);
});

test("el periodo del salón de la fama se combina con género y alimenta todos los Top 5", () => {
  const matches = loadHallPeriodMatcher();
  assert.equal(matches({ period_key: "AD26" }, "todos"), true);
  assert.equal(matches({ period_key: "AD26" }, "AD26"), true);
  assert.equal(matches({ period_key: "FJ26" }, "AD26"), false);
  assert.equal(matches({ semester_label: "FJ26" }, "FJ26"), true);
  assert.equal(matches({ period_key: "Pendiente", evaluated_at: "2026-03-09" }, "FJ26"), true);
  assert.equal(matches({ period_key: "", evaluated_at: "2026-05-26" }, "FJ26"), true);
  assert.equal(matches({ period_key: "IN26", evaluated_at: "2026-06-15" }, "IN26"), true);
  assert.match(appSource, /id="physicalHallPeriod"[^]*Todos los periodos/);
  assert.match(appSource, /if \(!physicalHallPeriodMatches\(row\)\) return;/);
  assert.match(appSource, /physicalHallOfFamePeriod = event\.target\.value \|\| "todos"/);
});
