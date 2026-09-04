import test from "node:test";
import assert from "node:assert/strict";
import vivenciaFormsFeed from "../site/vivencia-forms-feed.js";

test("filters Google Forms rows from 2026-08-10 and never returns email addresses", () => {
  const csv = [
    "Marca temporal,Dirección de correo electrónico,Matricula,Seleccióna el evento al que deseas inscribirte",
    "9/08/2026 23:59:59,old@example.com,A00100001,Evento anterior 9 de agosto",
    "10/08/2026 0:00:00,new@example.com,A00100002,CONCURSO PUZZLE SWITCH Jueves 20 de agosto",
    "10/08/2026 1:00:00,new@example.com,A00100002,CONCURSO PUZZLE SWITCH 20 de agosto",
    "11/08/2026 1:00:00,other@example.com,A00100003,CONCURSO PUZZLE SWITCH 20 de agosto"
  ].join("\n");

  const result = vivenciaFormsFeed.parseGoogleFormsCsv(csv, { cutoffDate: "2026-08-10" });

  assert.equal(result.response_count, 3);
  assert.equal(result.participant_records, 2);
  assert.equal(result.events.length, 1);
  assert.equal(result.events[0].event_date, "2026-08-20");
  assert.equal(JSON.stringify(result).includes("example.com"), false);
  assert.equal(JSON.stringify(result).includes("A00100002"), false);
});

test("keeps missing gender explicit instead of inventing women or men counts", () => {
  const feed = vivenciaFormsFeed.normalizeFeed({
    cutoff_date: "2026-08-10",
    participant_records: 12,
    events: [{ id: "one", event_name: "Evento 1 de septiembre", event_date: "2026-09-01", participant_records: 12 }]
  });

  assert.deepEqual(vivenciaFormsFeed.genderRows(feed), [
    { label: "Mujeres", value: 0 },
    { label: "Hombres", value: 0 },
    { label: "Sin género registrado", value: 12 }
  ]);
});

test("extracts Spanish event dates", () => {
  assert.equal(vivenciaFormsFeed.extractEventDate("Halloween Run 3k 15 de octubre", 2026), "2026-10-15");
  assert.equal(vivenciaFormsFeed.extractEventDate("Evento sin fecha", 2026), "");
});
