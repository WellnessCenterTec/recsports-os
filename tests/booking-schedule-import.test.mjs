import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import vm from "node:vm";

const require = createRequire(import.meta.url);

function loadBookingImport() {
  return require("../site/booking-schedule-import.js");
}

const realShapeGrid = [
  ["", "", "", "", "", "", "", ""],
  ["profesor", "actividad", "dia", "hora_inicio", "hora_fin", "instalacion", "frecuencia", "Horas totales"],
  ["Profesora Uno", "Tenis", "Lunes y Juves", "13:00", "14:00", "CDB2", "Lunes y Juves", 2],
  ["Profesor Dos", "Yoga", "Lunes", "18:30", "20:00", "Sala Yoga", "Lunes", 1.5],
  ["", "", "", "", "", "", "", 3]
];

function loadSheetJs() {
  const source = readFileSync(new URL("../site/assets/vendor/xlsx.mini.min.js", import.meta.url), "utf8");
  const sandbox = { ArrayBuffer, Buffer, Uint8Array, console };
  sandbox.globalThis = sandbox;
  sandbox.window = sandbox;
  vm.runInNewContext(source, sandbox, { filename: "xlsx.mini.min.js" });
  return sandbox.XLSX;
}

test("detects row 2 headers and maps snake_case Booking columns", () => {
  const rows = loadBookingImport().bookingRowsFromGrid(realShapeGrid);

  assert.equal(rows.length, 2);
  assert.deepEqual(rows[0], {
    Profesor: "Profesora Uno",
    Actividad: "Tenis",
    Dia: "Lunes y Jueves",
    "Hora inicio": "13:00",
    "Hora fin": "14:00",
    Instalacion: "CDB2",
    Frecuencia: "Lunes y Jueves",
    "Horas totales": 2,
    __rowNumber: 3
  });
});

test("ignores a total-only footer row", () => {
  assert.equal(loadBookingImport().bookingRowsFromGrid(realShapeGrid).length, 2);
});

test("keeps incomplete session rows for the existing validator", () => {
  const grid = [
    ...realShapeGrid.slice(0, 2),
    ["Profesora Uno", "", "Lunes", "09:00", "10:00", "Gimnasio", "Lunes", 1]
  ];

  assert.equal(loadBookingImport().bookingRowsFromGrid(grid)[0].Actividad, "");
});

test("throws a clear error when no Booking header row exists", () => {
  assert.throws(
    () => loadBookingImport().bookingRowsFromGrid([["sin", "encabezados"]]),
    /encabezados de Booking/i
  );
});

test("reads a real Excel workbook with a blank first row", async () => {
  const XLSX = loadSheetJs();
  const worksheet = XLSX.utils.aoa_to_sheet(realShapeGrid);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Booking ofertados");
  const bytes = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const file = {
    name: "booking.xlsx",
    async arrayBuffer() {
      return bytes;
    }
  };

  const rows = await loadBookingImport().bookingRowsFromFile(file, XLSX);

  assert.equal(rows.length, 2);
  assert.equal(rows[0].Dia, "Lunes y Jueves");
  assert.equal(rows[0]["Hora inicio"], "13:00");
  assert.equal(rows[1].__rowNumber, 4);
});
