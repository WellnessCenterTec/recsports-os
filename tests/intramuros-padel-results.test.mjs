import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

function extractFunction(source, name, nextName) {
  const start = source.indexOf(`function ${name}(`);
  const end = source.indexOf(`\nfunction ${nextName}(`, start + 1);
  assert.notEqual(start, -1, `${name} debe existir`);
  assert.notEqual(end, -1, `${nextName} debe aparecer después de ${name}`);
  return source.slice(start, end);
}

test("Pádel registra resultado cuando un equipo gana dos sets de seis o siete", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const source = extractFunction(app, "intramurosPadelResult", "intramurosTemplateRoleRowsFromGrid");
  const normalizeText = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const parsePadel = Function("normalizeText", `"use strict"; ${source}; return intramurosPadelResult;`)(normalizeText);
  const finished = Array(16).fill("");
  finished[8] = 6;
  finished[9] = 7;
  finished[11] = "vs";
  finished[12] = 2;
  finished[13] = 5;
  finished[15] = "Pádel Society";
  const pending = Array(16).fill("");
  pending[8] = 6;
  pending[11] = "vs";
  pending[12] = 4;
  pending[15] = "Rival";
  const defaulted = Array(16).fill("");
  defaulted[8] = "P";
  defaulted[9] = "D";
  defaulted[11] = "vs";
  defaulted[12] = "G";
  defaulted[13] = "D";
  defaulted[15] = "Rival";

  assert.deepEqual(parsePadel(finished, 0), { visitor: "Pádel Society", result: "6 - 2 · 7 - 5", hasResult: true });
  assert.deepEqual(parsePadel(pending, 0), { visitor: "Rival", result: "", hasResult: false });
  assert.deepEqual(parsePadel(defaulted, 0), { visitor: "Rival", result: "PD - GD", hasResult: true });
});
