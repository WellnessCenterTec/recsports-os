import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const context = { globalThis: {} };
vm.runInNewContext(readFileSync(new URL("../site/participation-posgrado-report.js", import.meta.url), "utf8"), context);
const report = context.globalThis.WellSyncPosgradoReport;
const plain = (value) => JSON.parse(JSON.stringify(value));

test("el archivo de Posgrado conserva todas sus matrículas aunque la base clasifique mal el nivel", () => {
  const batchRows = [
    { matricula: "A001", total: 3, counts: { Clases: 2, Gimnasio: 1 }, details: [
      { module: "Clases", activity: "Yoga", date: "2026-08-10" },
      { module: "Clases", activity: "Yoga", date: "2026-08-17" },
      { module: "Gimnasio", activity: "Acceso", date: "2026-09-01" }
    ] },
    { matricula: "A002", total: 0, counts: {}, details: [] },
    { matricula: "A003", total: 2, counts: { Clases: 2 }, details: [{ module: "Clases", activity: "Box", date: "2026-09-02" }, { module: "Clases", activity: "Box", date: "2026-09-09" }] },
    { matricula: "A004", total: 0, counts: {}, details: [] }
  ];
  const source = { academics: [
    { Matricula: "A001", "Desc Programa Academico": "Maestría en Negocios", carrera: "MNA", "Desc Genero": "F" },
    { Matricula: "A002", "Desc Programa Academico": "Maestría en Negocios", carrera: "MNA", "Desc Genero": "M" },
    { Matricula: "A003", carrera: "ITC", "Desc Genero": "Masculino" }
  ] };
  const result = plain(report.buildReport(batchRows, source));
  assert.equal(result.input, 4);
  assert.equal(result.rows.length, 4);
  assert.equal(result.unknown, 1);
  assert.equal(result.participating, 2);
  assert.equal(result.records, 5);
  assert.equal(result.byModule.reduce((sum, item) => sum + item.records, 0), result.records);
  assert.equal(result.activities.find((item) => item.name === "Yoga").records, 2);
  assert.equal(result.activities.find((item) => item.name === "Yoga").students, 1);
  assert.equal(result.programs[0].students, 2);
  assert.equal(result.programs[0].participating, 1);
  const html = report.renderReport(result);
  assert.match(html, /Reporte Posgrado/);
  assert.match(html, /Maestría en Negocios/);
  assert.match(html, /50\.0%/);
  assert.match(html, /ITC/);
  assert.match(html, /no aparecen en Base de datos_alumnos/);
});

test("las consultas académicas se limitan a las matrículas del archivo verificado", async () => {
  const calls = [];
  const client = { auth: { async getSession() { return { data: { session: {} }, error: null }; } }, from(table) {
    const request = { select(columns) { calls.push({ table, columns }); return this; }, in(field, values) { calls.at(-1).field = field; calls.at(-1).values = [...values]; return this; }, order() { return this; }, async range() {
      return { data: [{ Matricula: "A001", "Desc Programa Academico": "MNA" }], error: null };
    } };
    return request;
  } };
  const source = await report.queryAcademicRows(client, ["A001", "A002"]);
  assert.equal(source.academics.length, 1);
  assert.deepEqual(calls.map(({ table, field, values }) => [table, field, values]), [["Base de datos_alumnos", "Matricula", ["A001", "A002"]]]);
  assert.ok(calls.every(({ values }) => values.length <= 250));
});

test("si falta la sesión no se consulta ni se publica un tablero parcial", async () => {
  let queried = false;
  const client = { auth: { async getSession() { return { data: { session: null }, error: null }; } }, from() { queried = true; } };
  await assert.rejects(report.queryAcademicRows(client, ["A001"]), /sesión de Supabase venció/);
  assert.equal(queried, false);
});
