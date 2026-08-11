import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const studentImport = require("../site/student-database-import.js");

test("maps the official CSV fields only to columns that exist in the student master", () => {
  const row = studentImport.toCloudRow({
    matricula: "A01720743",
    campus: "Campus Monterrey",
    level: "LEC",
    program: "Licenciado en Economia",
    period: "Ciencias Sociales y Gobierno",
    gender: "Masculino",
    semester: "Septimo Semestre"
  });

  assert.deepEqual(row, {
    Matricula: "A01720743",
    "Nombre Campus": "Campus Monterrey",
    "Desc Nivel Acad Alumno": "LEC",
    "Periodo acad": "Ciencias Sociales y Gobierno",
    "v_Clave Major Agrupado": "",
    "Desc Programa Academico": "Licenciado en Economia",
    "Desc Genero": "Masculino",
    "Desc Escuela Programa": "",
    "Ind Plan Tec21": "",
    Semestre: "Septimo Semestre",
    carrera: "Licenciado en Economia"
  });
  assert.equal(Object.hasOwn(row, "Carrera"), false);
  assert.equal(Object.hasOwn(row, "Genero"), false);
  assert.equal(Object.hasOwn(row, "Desc Programa Acad"), false);
});

test("replaces the student master through one atomic RPC call", async () => {
  const payload = [{ Matricula: "A01720743" }];
  const calls = [];
  const client = {
    async rpc(name, args) {
      calls.push({ name, args });
      return { data: 1, error: null };
    }
  };

  const inserted = await studentImport.replaceStudentMaster(client, payload);

  assert.equal(inserted, 1);
  assert.deepEqual(calls, [{
    name: "replace_student_master_for_authorized_upload",
    args: { rows: payload }
  }]);
});

test("does not report success when the atomic replacement fails", async () => {
  const expected = new Error("database rejected payload");
  const client = {
    async rpc() {
      return { data: null, error: expected };
    }
  };

  await assert.rejects(
    studentImport.replaceStudentMaster(client, [{ Matricula: "A01720743" }]),
    expected
  );
});
