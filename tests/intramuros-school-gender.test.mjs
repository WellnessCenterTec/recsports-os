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

test("Escuelas por género cuenta participantes únicos por escuela", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const styles = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");
  const source = extractFunction(app, "intramurosSchoolGenderRows", "renderIntramurosSchoolGenderCard");
  const normalizeMatricula = (value) => String(value || "").trim().toUpperCase();
  const genderBucket = (value) => {
    const gender = String(value || "").toLowerCase();
    if (gender.includes("fem") || gender.includes("mujer")) return "Mujer";
    if (gender.includes("masc") || gender.includes("hombre")) return "Hombre";
    return "Sin dato";
  };
  const groupSchools = Function("normalizeMatricula", "intramurosGenderBucket", `"use strict"; ${source}; return intramurosSchoolGenderRows;`)(normalizeMatricula, genderBucket);
  const rows = groupSchools([
    { matricula: "A1", escuela: "Ingeniería", genero: "Masculino" },
    { matricula: "A1", escuela: "Ingeniería", genero: "Masculino" },
    { matricula: "A2", escuela: "Ingeniería", genero: "Femenino" },
    { matricula: "A3", escuela: "Negocios", genero: "Femenino" }
  ]);

  assert.deepEqual(rows, [
    { label: "Ingeniería", Mujer: 1, Hombre: 1, "Sin dato": 0, total: 2 },
    { label: "Negocios", Mujer: 1, Hombre: 0, "Sin dato": 0, total: 1 }
  ]);
  assert.match(styles, /\.intramuros-school-gender-card \.segment\.women \{ background: #7c3aed; \}/);
  assert.match(styles, /\.intramuros-school-gender-card \.segment\.men \{ background: #123a8a; \}/);
});
