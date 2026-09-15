import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const code = readFileSync(new URL("../site/participation-verification.js", import.meta.url), "utf8");
const context = { globalThis: {} };
vm.runInNewContext(code, context);
const verifier = context.globalThis.WellSyncParticipationVerification;
const normalize = (value) => JSON.parse(JSON.stringify(value));

test("archivo con encabezado seleccionado, filas vacías y repetidas procesa matrículas únicas", () => {
  const summary = verifier.inputSummary([["Alumno", "MATRÍCULA"], ["Uno", " a001 "], ["Dos", "A001"], ["", ""], ["Tres", "a002"]], 1);
  assert.deepEqual(normalize(summary), { input: ["A001", "A002"], rows: 4, duplicates: 1 });
});

test("un módulo, varios módulos, matrícula inexistente y actividades en fechas distintas", () => {
  const input = ["A001", "A002", "A999"];
  const sources = {
    captures: [
      { id: "c1", matricula: "A001", area_key: "clases", status: "asistio", operation_label: "Voleibol", record_date: "2026-08-12" },
      { id: "c2", matricula: "A001", area_key: "clases", status: "asistio", operation_label: "Voleibol", record_date: "2026-08-19" },
      { id: "c3", matricula: "A001", area_key: "clases", status: "asistio", operation_label: "Yoga", record_date: "2026-08-25" },
      { id: "c4", matricula: "A002", area_key: "intramuros", status: "asistio", operation_label: "Básquetbol", record_date: "2026-08-26" },
      { id: "c5", matricula: "A002", area_key: "intramuros", status: "activo", operation_label: "Básquetbol", record_date: "2026-08-27" }
    ],
    gym: [{ id: "g1", matricula: "A001", sitio: "Wellness", fecha: "2026-08-20" }],
    booking: [
      { id: "b1", matricula: "A001", activity: "Nado Libre", status: "ATTENDED", reservation_at: "2026-08-21" },
      { id: "b1", matricula: "A001", activity: "Nado Libre", status: "ATTENDED", reservation_at: "2026-08-21" },
      { id: "b2", matricula: "A001", activity: "Yoga", status: "CHECKED_IN", reservation_at: "2026-08-22" },
      { id: "b3", matricula: "A001", activity: "Yoga", status: "APPROVED", reservation_at: "2026-08-23" }
    ],
    vivencia: [{ id: "v1", event_id: "event1", matricula: "A001", event_name: "Festival", event_status: "realizado", event_date: "2026-08-30" }]
  };
  const rows = normalize(verifier.consolidate(input, sources));
  assert.equal(rows.length, 3);
  assert.equal(rows[0].total, 7);
  assert.deepEqual(rows[0].counts, { Clases: 3, Gimnasio: 1, Intramuros: 0, Booking: 1, "Nado libre": 1, Vivencia: 1 });
  assert.equal(rows[0].details.filter((item) => item.activity === "Voleibol").length, 2);
  assert.deepEqual(rows[0].details.filter((item) => item.activity === "Voleibol").map((item) => item.date), ["2026-08-12", "2026-08-19"]);
  assert.equal(rows[1].total, 1);
  assert.equal(rows[2].total, 0);
  rows.forEach((row) => assert.equal(row.total, Object.values(row.counts).reduce((sum, value) => sum + value, 0)));
});

test("Nado libre solo reconoce su actividad y una reserva aprobada no es asistencia", () => {
  assert.equal(verifier.activityForBooking("Nado Libre"), "Nado libre");
  assert.equal(verifier.activityForBooking("Natación"), "Booking");
  assert.equal(verifier.validBooking("APPROVED"), false);
  assert.equal(verifier.validBooking("CHECKED_IN"), true);
});

test("consulta por lotes a las cuatro fuentes físicas, sin N+1 ni escrituras", async () => {
  const calls = [];
  const client = { from(table) {
    calls.push(table);
    return { select() { return this; }, in(field, values) { assert.equal(field, "matricula"); assert.ok(values.length <= 250); return this; }, order() { return this; }, async range() { return { data: [], error: null }; } };
  } };
  const input = Array.from({ length: 251 }, (_, i) => `A${String(i).padStart(8, "0")}`);
  const results = await verifier.query(client, input);
  assert.deepEqual(normalize(Object.keys(results)), ["captures", "gym", "booking", "vivencia"]);
  assert.equal(calls.length, 8);
  assert.deepEqual([...new Set(calls)].sort(), ["class_booking_reservations", "gym_asistencias", "participations", "vivencia_participant_details"].sort());
});

test("al cambiar o cerrar sesión elimina matrículas y resultados de memoria", () => {
  verifier.useSession("user-one");
  verifier.state.grid = [["Matrícula"], ["A001"]];
  verifier.state.rows = [{ matricula: "A001" }];
  verifier.useSession(null);
  assert.equal(verifier.state.grid, null);
  assert.equal(verifier.state.rows, null);
});
