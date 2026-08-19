import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("weekly report uses the approved ten-week full-width dashboard", () => {
  [
    "Reporte Ejecutivo Semanal",
    "ALUMNOS ATENDIDOS",
    "Semana TEC —",
    "Promedio de asistencias en Wellness",
    "Cantidad de matrículas únicas",
    "Impacto general en el Tec de Monterrey",
    "Array.from({ length: 10 }",
    "Array.from({ length: 20 }"
  ].forEach((needle) => assert.ok(source.includes(needle), `Missing approved report marker: ${needle}`));
  assert.ok(styles.includes("max-width: 1344px"), "Report must be 20% wider than the former 1120px layout");
  assert.ok(styles.includes("grid-template-columns: repeat(10"), "Gym chart must reserve ten weekly columns");
  assert.ok(!source.includes("Alumnos únicos en Gimnasio"), "Legacy gym-only unique KPI must stay removed");
});

test("daily Wellness average is computed from dated Wellness visits only", () => {
  assert.ok(source.includes('normalizeGymSite(row.sitio) === "Wellness"'));
  assert.ok(source.includes("perDate.set(row.fecha"));
  assert.ok(source.includes('"Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"'));
});
