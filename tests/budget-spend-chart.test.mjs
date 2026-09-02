import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("budget comparison uses a clear spent versus assigned progress chart", () => {
  assert.match(source, /Ejecución presupuestal/);
  assert.match(source, /Gasto ejercido frente al presupuesto por área/);
  assert.match(source, /budget-spend-progress/);
  assert.match(source, />Gastado<b>/);
  assert.match(source, />Asignado<b>/);
  assert.match(source, />Saldo<b>/);
  assert.doesNotMatch(source, /budget-chart-legend/);
  assert.doesNotMatch(source, /budget-column-chart/);
});

test("budget progress cards use six distinct modern area colors", () => {
  assert.match(styles, /\.budget-spend-chart\s*\{[^}]*repeat\(2,/s);
  assert.match(styles, /\.budget-spend-row\s*\{[^}]*--budget-area-color:/s);
  for (let tone = 2; tone <= 6; tone += 1) {
    assert.match(styles, new RegExp(`\\.budget-spend-row\\.tone-${tone}\\s*\\{[^}]*--budget-area-color:`));
  }
  assert.match(styles, /\.budget-spend-progress\s*\{[^}]*border-radius:\s*999px/s);
});
