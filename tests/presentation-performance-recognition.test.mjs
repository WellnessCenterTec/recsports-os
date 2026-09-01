import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("performance slide celebrates every highlighted area leader equally", () => {
  assert.match(source, /¡Felicidades, equipo destacado!/);
  assert.match(source, /Su compromiso y sus resultados marcan la diferencia\./);
  assert.match(source, /<b>#1<\/b><span>\$\{escapeHtml\(profile\.role\)\}<\/span>/);
  assert.match(source, /<em>Líder del área<\/em>/);
  assert.doesNotMatch(source, /performance-award[\s\S]{0,120}#2/);
  assert.doesNotMatch(source, /performance-award[\s\S]{0,120}#3/);
  assert.match(styles, /\.executive-presentation-performance-award span\s*\{[^}]*text-transform:\s*uppercase;/s);
  assert.match(styles, /\.executive-presentation-portrait-grid article\s*\{[^}]*position:\s*relative;[^}]*padding-top:\s*62px;/s);
  assert.match(styles, /\.executive-presentation-performance-award\s*\{[^}]*position:\s*absolute;[^}]*top:\s*0;/s);
});

test("performance slide gives the improvement group positive actionable guidance", () => {
  assert.match(source, /Tu siguiente gran avance comienza hoy/);
  assert.match(source, /Este resultado no te define: es una oportunidad para crecer\./);
  assert.match(source, /Define una meta concreta\./);
  assert.match(source, /Convierte la retroalimentación en acción\./);
  assert.match(source, /Avanza con constancia: cada mejora cuenta\./);
  assert.match(source, /¡Tú puedes lograrlo!/);
  assert.match(source, /Confía en tu proceso y no te rindas\./);
  assert.doesNotMatch(styles, /executive-presentation-portrait-group\.improving[^}]*#[a-fA-F0-9]{0,6}(?:ff0000|c43d3d)/);
});
