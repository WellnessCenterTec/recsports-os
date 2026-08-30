import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");

test("Eliminar un evento de Vivencia lo conserva como referencia archivada para que no reaparezca desde Planeación", () => {
  const loader = source.slice(source.indexOf("async function loadVivenciaEvents"), source.indexOf("async function loadCommunicationEvents"));
  const deletion = source.slice(source.indexOf("async function deleteVivenciaEvent"), source.indexOf("function collaboratorFromCloud"));
  const dashboard = source.slice(source.indexOf("function vivenciaDashboardEvents"), source.indexOf("function vivenciaCalendarBaseDate"));
  assert.doesNotMatch(loader, /\.is\("archived_at", null\)/);
  assert.match(loader, /vivenciaEvents\.filter\(isVisibleVivenciaEvent\)/);
  assert.match(deletion, /archivedAt/);
  assert.match(deletion, /vivenciaEvents = vivenciaEvents\.map/);
  assert.match(dashboard, /const existingKeys = new Set\(connectedEvents/);
});

test("Vivencia muestra eventos con matrículas en cuatro tarjetas y permite cargar su evidencia", () => {
  assert.match(source, /function renderVivenciaRegisteredEventGallery/);
  assert.match(source, /vivenciaEventParticipants\(event\.id\)\.length > 0/);
  assert.match(source, /data-vivencia-card-image-upload/);
  assert.match(source, /vivenciaDashboardImageFile/);
  assert.match(source, /renderVivenciaRegisteredEventGallery\(events, metricsByEvent, editable\)/);
  assert.match(source, /\$\$\('\[data-vivencia-card-image-upload\]'\)/);
  assert.match(source, /uploadVivenciaEventImages\(files, eventId\)/);
});

test("Vivencia elimina el historial visual de cargas de participantes", () => {
  const vivenciaView = source.slice(source.indexOf("function renderVivenciaEventsView"), source.indexOf("function renderCommunicationEventsView"));
  assert.doesNotMatch(vivenciaView, /renderVivenciaParticipantUploadHistory\(\)/);
  assert.doesNotMatch(vivenciaView, /<h3>Cargas de participantes<\/h3>/);
});

test("Vivencia conserva la carga de imagen en tarjetas y elimina el bloque de galería del formulario", () => {
  assert.doesNotMatch(source, /function renderVivenciaEventGallery/);
  assert.doesNotMatch(source, /Guarda primero un evento para poder agregar imágenes asociadas a él/);
  assert.match(source, /data-vivencia-card-image-upload/);
});
