import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(new URL("../site/app.js", import.meta.url), "utf8");

function loadPhysicalFormatter() {
  const block = source.match(/const PHYSICAL_WHOLE_NUMBER_TESTS = new Set\([^]*?\n}\n/);
  assert.ok(block, "No se encontró el formateador de resultados físicos");
  const context = {};
  vm.runInNewContext(`${block[0]}\nthis.formatPhysicalValue = physicalTestValueDisplay;`, context);
  return context.formatPhysicalValue;
}

function loadPhysicalRawFormatter() {
  const block = source.match(/function physicalRawValueDisplay\(testKey, value\) \{[^]*?\n}/);
  assert.ok(block, "No se encontró el formateador de valores históricos");
  const context = {};
  vm.runInNewContext(`${block[0]}\nthis.formatPhysicalRawValue = physicalRawValueDisplay;`, context);
  return context.formatPhysicalRawValue;
}

test("Cooper conserva tres decimales y las demás pruebas muestran solo enteros", () => {
  const format = loadPhysicalFormatter();

  assert.equal(format("cooper_12m", 1.62), "1.620");
  assert.equal(format("abdominales", 40.0), "40");
  assert.equal(format("lagartijas", 65.99), "65");
  assert.equal(format("saltos_cuerda", 110.0), "110");
  assert.equal(format("wall_ball", 48.0), "48");
  assert.equal(format("remo_distancia", 317.0), "317");
  assert.equal(format("remo_suspendido", 24.75), "24");
});

test("el historial, el Top y la exportación usan el mismo formato", () => {
  assert.match(source, /return physicalTestValueDisplay\(testKey, numericValue\);/);
  assert.match(source, /if \(testKey === "cooper_12m"\) return formatted;/);
  assert.doesNotMatch(source, /if \(testKey === "cooper_12m"\) return `\$\{formatted} km`;/);
  assert.match(source, /\? physicalTestValueDisplay\(key, numericValue\)/);
});

test("Remo distancia elimina m, mts y metros sin alterar otros textos", () => {
  const formatRaw = loadPhysicalRawFormatter();

  assert.equal(formatRaw("remo_distancia", "271m"), "271");
  assert.equal(formatRaw("remo_distancia", "331 mts"), "331");
  assert.equal(formatRaw("remo_distancia", "579 mts."), "579");
  assert.equal(formatRaw("remo_distancia", "250 metros"), "250");
  assert.equal(formatRaw("remo_distancia", "18 calorias"), "18 calorias");
  assert.equal(formatRaw("remo_distancia", "N/A"), "N/A");
  assert.equal(formatRaw("remo_suspendido", "25 mts"), "25 mts");
  assert.doesNotMatch(source, /if \(testKey === "remo_distancia"\) return `\$\{formatted} m`;/);
});

test("corrige únicamente los dos resultados de remo indicados", () => {
  assert.match(source, /collaborator: "Carlos Daniel Navarro Luna",\s+evaluatedAt: "2026-09-30",\s+testKey: "remo_distancia",\s+value: 168/);
  assert.match(source, /collaborator: "Jesús Francisco Vázquez Reza",\s+evaluatedAt: "2026-09-26",\s+testKey: "remo_distancia",\s+value: 275/);
  assert.match(source, /\.map\(\(row\) => correctedPhysicalNumericValue\(row, testKey\)\)/);
});
