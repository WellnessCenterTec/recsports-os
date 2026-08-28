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

test("los roles identifican Fútbol rápido, Voleibol de playa y Pádel desde el bloque o la cancha", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const source = extractFunction(app, "intramurosRoleTournamentFromBlock", "intramurosRoleWorkbookSheets");
  const normalizeText = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const identifyTournament = Function("normalizeText", `"use strict"; ${source}; return intramurosRoleTournamentFromBlock;`)(normalizeText);

  assert.equal(identifyTournament("CDB 1 Fútbol Rápido", "", "C# 1 FR"), "Fútbol rápido");
  assert.equal(identifyTournament("", "Varonil", "VB Playa"), "Voleibol de playa");
  assert.equal(identifyTournament("CDB 2 PÁDEL", "", "C# 3"), "Pádel");
});
