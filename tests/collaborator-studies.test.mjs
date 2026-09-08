import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const app = readFileSync(new URL("../site/app.js", import.meta.url), "utf8");

test("Colaboradores includes Estudios as a visible base column", () => {
  assert.match(app, /const BASE_COLLABORATOR_COLUMNS = \[[^\]]*"Coordinador",\s*"Estudios",\s*"% de cursos"/s);
});

test("the supplied 22 study records are linked by exact nomina", () => {
  const block = app.match(/const COLLABORATOR_STUDIES_BY_NOMINA = Object\.freeze\(\{([\s\S]*?)\}\);/)?.[1] || "";
  const expected = [
    "L03519864", "L03566159", "L01310698", "L03131207", "L03584237", "L03526997",
    "L03526995", "L01418467", "L03526872", "L03110251", "L01193243", "L03566480",
    "L03105095", "L03501954", "L03554088", "L03058587", "L03526957", "L03131201",
    "L03578302", "L03132238", "L03561193", "L03566395"
  ];
  expected.forEach((nomina) => assert.match(block, new RegExp(`\\b${nomina}:`)));
  assert.equal((block.match(/\bL\d{8}:/g) || []).length, expected.length);
});

test("cloud and local collaborator rows receive the study fallback", () => {
  assert.match(app, /Estudios: COLLABORATOR_STUDIES_BY_NOMINA\[nomina\] \|\| ""/);
  assert.match(app, /Estudios: row\.Estudios \|\| COLLABORATOR_STUDIES_BY_NOMINA\[String\(row\.Nomina/);
});
