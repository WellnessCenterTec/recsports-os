import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");

test("Clases Deportivas no muestra Sistema y redirige esa vista a Calificaciones", () => {
  const navigation = source.slice(source.indexOf("function render()"), source.indexOf("function downloadCsv"));
  assert.match(navigation, /const isClasses = activeArea === "clases"/);
  assert.match(navigation, /systemTab\.hidden = isClasses/);
  assert.match(navigation, /if \(isClasses && activeView === "blueprint"\) activeView = "grades"/);
});

test("Sistema ya no inserta la carga de calificaciones de Clases", () => {
  const blueprint = source.slice(source.indexOf("function renderBlueprint"), source.indexOf("document.addEventListener(\"keydown\""));
  assert.doesNotMatch(blueprint, /renderClassGradesSystemUpload\(\)/);
});
