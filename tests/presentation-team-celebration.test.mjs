import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("team slide celebrates every highlighted collaborator equally", () => {
  assert.match(source, /★ RECONOCIMIENTO SEMANAL ★/);
  assert.match(source, /¡Felicidades, equipo destacado!/);
  assert.match(source, /Cada logro refleja su compromiso, pasión y constancia\./);
  assert.match(source, /executive-presentation-team-badge">★ DESTACADO/);
  assert.match(source, /¡Gran trabajo!/);
  assert.match(source, /Su esfuerzo inspira a todo el equipo\./);
  assert.match(source, /¡Sigan brillando y marcando la diferencia!/);
  assert.doesNotMatch(source, /executive-presentation-team-rank/);
  assert.doesNotMatch(source, /class="rank-/);
});

test("highlight cards share one celebratory visual treatment", () => {
  assert.match(styles, /\.executive-presentation-team\.highlighted article\s*\{[^}]*border-top:\s*5px solid #dfa018;[^}]*box-shadow:/s);
  assert.match(styles, /\.executive-presentation-team\.highlighted img,[^}]*width:\s*88px;[^}]*height:\s*88px;/s);
  assert.match(styles, /\.executive-presentation-team-badge\s*\{[^}]*background:\s*linear-gradient/s);
  assert.doesNotMatch(styles, /\.executive-presentation-team\.highlighted \.rank-[123]/);
});

test("highlighted team layout becomes denser as more people are added", () => {
  assert.match(source, /profiles\.length > 5 \? " dense"/);
  assert.match(source, /profiles\.length > 10 \? " very-dense"/);
  assert.match(source, /profiles\.length > 18 \? " ultra-dense"/);
  assert.match(styles, /\.executive-presentation-team\.highlighted\.very-dense\s*\{[^}]*repeat\(6,/s);
  assert.match(styles, /\.executive-presentation-team\.highlighted\.ultra-dense\s*\{[^}]*repeat\(8,/s);
});
