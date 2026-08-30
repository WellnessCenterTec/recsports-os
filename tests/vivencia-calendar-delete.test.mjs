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

test("Vivencia permite corregir o eliminar matrículas cargadas por evento", () => {
  assert.match(source, /function renderVivenciaParticipantsManagementModal/);
  assert.match(source, /data-vivencia-participant-manage/);
  assert.match(source, /data-vivencia-participant-save/);
  assert.match(source, /data-vivencia-participant-delete/);
  assert.match(source, /async function updateVivenciaParticipant/);
  assert.match(source, /async function deleteVivenciaParticipant/);
  assert.match(source, /from\("vivencia_participants"\)\.delete\(\)/);
});

test("Vivencia permite seleccionar y eliminar en bloque las matrículas de un evento", () => {
  assert.match(source, /Seleccionar todo/);
  assert.match(source, /data-vivencia-participant-select/);
  assert.match(source, /async function deleteSelectedVivenciaParticipants/);
  assert.match(source, /\.delete\(\)\.in\("id", participantIds\)/);
  assert.match(source, /Eliminar seleccionados \(\$\{vivenciaParticipantSelection\.size\}\)/);
});

test("Vivencia elimina el panel de próximos eventos del tablero", () => {
  const dashboard = source.slice(source.indexOf("function renderVivenciaDashboard"), source.indexOf("function filteredClassGrades"));
  assert.doesNotMatch(dashboard, /<h3>Próximos eventos<\/h3>/);
  assert.doesNotMatch(dashboard, /vivencia-upcoming-panel/);
});

test("Vivencia no muestra una franja adicional de resumen de eventos y género", () => {
  const dashboard = source.slice(source.indexOf("function renderVivenciaDashboard"), source.indexOf("function filteredClassGrades"));
  assert.doesNotMatch(dashboard, /vivencia-completion-summary/);
  assert.doesNotMatch(dashboard, /Mujeres participantes/);
});

test("Comunicación usa el patrón de tarjetas de Vivencia sin perder sus gráficos operativos", () => {
  const dashboard = source.slice(source.indexOf("function renderCommunicationDashboard"), source.indexOf("function renderVivenciaDashboard"));
  assert.match(source, /function renderCommunicationRegisteredEventGallery/);
  assert.match(source, /function communicationEventGenderSummary/);
  assert.match(dashboard, /renderCommunicationRegisteredEventGallery\(activities\)/);
  assert.match(dashboard, /renderCommunicationImpactGoal\(participantTotal\)/);
  assert.match(dashboard, /renderCommunicationStatusBreakdown\(activities\)/);
  assert.match(dashboard, /renderCommunicationTopActivities\(activities\)/);
  assert.match(dashboard, /renderCommunicationRecentActivities\(activities\)/);
});
