import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("slide 11 replaces the map with an automatic improvement history", () => {
  assert.match(source, /key: "improvement-history", title: "Historial de área de mejora"/);
  assert.doesNotMatch(source, /key: "map", title: "Mapa \/ distribución de espacios"/);
  assert.match(source, /presentationTeamHistory\(\["En Desarrollo", "En mejora", "En Mejora"\]\)/);
  assert.match(source, /slide\.key === "improvement-history"[\s\S]{0,180}renderPresentationImprovementTeam\(presentationImprovementTeam\(\)\)/);
});

test("improvement history keeps the adaptive weekly-card behavior from highlights", () => {
  assert.match(source, /function renderPresentationImprovementTeam\(profiles\)/);
  assert.match(source, /profiles\.length > 5 \? " dense"/);
  assert.match(source, /profiles\.length > 10 \? " very-dense"/);
  assert.match(source, /profiles\.length > 18 \? " ultra-dense"/);
  assert.match(source, /profile\.weeks\.length/);
  assert.match(source, /profile\.weeks\.map\(escapeHtml\)\.join\(" · "\)/);
});

test("improvement history uses encouraging language and a distinct teal treatment", () => {
  assert.match(source, /SEGUIMIENTO Y CRECIMIENTO/);
  assert.match(source, /Cada semana es una nueva oportunidad para avanzar/);
  assert.match(source, /¡Sigue adelante!/);
  assert.match(source, /¡Tú puedes lograrlo!/);
  assert.match(source, /Cada mejora cuenta; la constancia transforma los resultados\./);
  assert.match(source, /El historial se llenará al registrar semanas en la columna “En Desarrollo”/);
  assert.match(styles, /\.executive-presentation-team\.highlighted\.improvement-history article\s*\{[^}]*border-top-color:\s*#159b9a/s);
  assert.match(styles, /\.executive-presentation-team\.highlighted\.improvement-history \.executive-presentation-team-badge\s*\{[^}]*linear-gradient/s);
});
