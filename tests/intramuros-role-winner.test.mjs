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

test("la agenda resalta únicamente al ganador por marcador", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const source = extractFunction(app, "intramurosRoleWinner", "intramurosRoleCalendarActivities");
  const normalizeText = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const winner = Function("normalizeText", `"use strict"; ${source}; return intramurosRoleWinner;`)(normalizeText);

  assert.equal(winner({ resultado: "3 - 1" }), "local");
  assert.equal(winner({ resultado: "2:9" }), "visitor");
  assert.equal(winner({ resultado: "0 - 0" }), "");
  assert.equal(winner({ resultado: "G - BAJA" }), "local");
  assert.equal(winner({ resultado: "GD - PD" }), "local");
  assert.equal(winner({ resultado: "PD - GD" }), "visitor");
});
