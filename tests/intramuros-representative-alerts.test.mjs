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

test("Alertas de elegibilidad cruzan sólo participantes de Intramuros con Representativos", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const source = extractFunction(app, "intramurosRepresentativeEligibilityAlerts", "renderIntramurosRepresentativeEligibilityAlerts");
  const normalizeMatricula = (value) => String(value || "").trim().toUpperCase();
  const normalizeText = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const collectAlerts = Function("normalizeMatricula", "normalizeText", `"use strict"; ${source}; return intramurosRepresentativeEligibilityAlerts;`)(normalizeMatricula, normalizeText);

  const alerts = collectAlerts([
    { matricula: "a001", torneo: "Voleibol de sala", equipo: "Borregas" },
    { matricula: "A001", torneo: "Voleibol de sala", equipo: "Borregas" },
    { matricula: "A002", torneo: "Fútbol 7", equipo: "Azul" }
  ], [
    { matricula: "A001", representativo: "Voleibol", duplicate: false },
    { matricula: "A001", representativo: "Voleibol", duplicate: true },
    { matricula: "A999", representativo: "Básquetbol", duplicate: false }
  ]);

  assert.deepEqual(alerts, [{
    matricula: "A001",
    representativo: "Voleibol",
    torneo: "Voleibol de sala",
    equipo: "Borregas"
  }]);
});

test("El panel de alertas muestra sólo los datos operativos solicitados", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const source = extractFunction(app, "renderIntramurosRepresentativeEligibilityAlerts", "renderIntramurosDashboard");
  const renderAlerts = Function("escapeHtml", `"use strict"; ${source}; return renderIntramurosRepresentativeEligibilityAlerts;`)((value) => String(value ?? ""));
  const html = renderAlerts([{ matricula: "A001", representativo: "Voleibol", torneo: "Voleibol de sala", equipo: "Borregas" }]);

  assert.match(html, /Alertas de elegibilidad/);
  assert.match(html, /Matrícula/);
  assert.match(html, /Deporte representativo/);
  assert.match(html, /Torneo \/ deporte Intramuros/);
  assert.match(html, /Equipo Intramuros/);
  assert.doesNotMatch(html, /Nombre|Apellido/);
});
