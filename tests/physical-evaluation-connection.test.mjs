import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const formSource = await readFile(new URL("../site/evaluaciones-fisicas.js", import.meta.url), "utf8");
const appSource = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
const formHtml = await readFile(new URL("../site/evaluaciones-fisicas.html", import.meta.url), "utf8");

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
