import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
const migration = await readFile(new URL("../supabase/communication-event-images.sql", import.meta.url), "utf8");

test("Las tarjetas registradas de Comunicación tienen selector propio y muestran la imagen guardada", () => {
  const gallery = source.slice(source.indexOf("function renderCommunicationRegisteredEventGallery"), source.indexOf("function renderCommunicationCoverage"));
  assert.match(gallery, /communicationEventImage\(event\.id\)/);
  assert.match(gallery, /data-communication-card-image-upload/);
  assert.match(gallery, /communicationEventImageFile/);
  assert.match(gallery, /image\.public_url/);
  assert.match(source, /event\.stopPropagation\(\);[^]*input\.dataset\.eventId = button\.dataset\.communicationCardImageUpload/);
  assert.match(source, /await uploadCommunicationEventImage\(event\.target\.dataset\.eventId, file\)/);
});

test("Los ocho eventos conservan ocho controles independientes de carga", () => {
  const galleryFunction = source.slice(source.indexOf("function renderCommunicationRegisteredEventGallery"), source.indexOf("function renderCommunicationCoverage"));
  const context = vm.createContext({
    communicationEventParticipants: () => [{ matricula: "matricula-prueba" }],
    communicationEventGenderSummary: () => ({ total: 1, women: 1, men: 0, unspecified: 0 }),
    communicationEventImage: (id) => id === "event-1" ? { public_url: "https://example.invalid/foto.jpg" } : null,
    communicationEventImageUploadingId: "",
    communicationEventImagesAvailable: true,
    currentUser: { auth: "supabase" },
    canEditArea: () => true,
    vivenciaEventDate: () => new Date("2026-09-03T12:00:00"),
    escapeHtml: (value) => String(value)
  });
  vm.runInContext(`${galleryFunction}\nthis.renderGallery = renderCommunicationRegisteredEventGallery`, context);
  const events = Array.from({ length: 8 }, (_, index) => ({ id: `event-${index + 1}`, event_name: `Evento ${index + 1}`, __communicationEvent: true }));
  const html = context.renderGallery(events);
  assert.equal((html.match(/data-communication-card-image-upload=/g) || []).length, 8);
  assert.match(html, /data-communication-card-image-upload="event-8"/);
  assert.match(html, /Cargar imagen/);
  assert.match(html, /Cambiar imagen/);
  assert.match(html, /https:\/\/example\.invalid\/foto\.jpg/);
});

test("Las imágenes se leen de Supabase por ID de evento, no por posición de tarjeta", () => {
  const loader = source.slice(source.indexOf("async function loadCommunicationEvents"), source.indexOf("async function loadCommunicationDiffusionStorageImages"));
  assert.match(loader, /\.from\("communication_event_images"\)/);
  assert.match(loader, /activeEventIds\.has\(image\.event_id\)/);
  assert.match(loader, /storage\.from\("communication-event-images"\)\.createSignedUrl/);
  assert.match(migration, /event_id uuid primary key references public\.communication_events\(id\)/);
  assert.match(migration, /'communication-event-images', 'communication-event-images', false/);
  assert.match(migration, /public\.can_read_area\('comunicacion'\)/);
});

function uploadHarness({ failMetadata = false } = {}) {
  const uploadFunction = source.slice(source.indexOf("async function uploadCommunicationEventImage"), source.indexOf("function renderCommunicationRegisteredEventGallery"));
  const calls = { uploaded: [], removed: [], upserted: [], toasts: [] };
  const bucket = {
    async upload(path, file) { calls.uploaded.push([path, file.name]); return { error: null }; },
    async createSignedUrl(path) { return { data: { signedUrl: `https://example.invalid/${path}` }, error: null }; },
    async remove(paths) { calls.removed.push(paths); return { error: null }; }
  };
  const context = vm.createContext({
    communicationEvents: [{ id: "event-1", event_name: "Evento 1" }],
    communicationEventImages: [],
    communicationEventImagesAvailable: true,
    communicationEventImageUploadingId: "",
    supabaseClient: {
      storage: { from: () => bucket },
      from: () => ({ upsert: async (row) => {
        calls.upserted.push(row);
        return { error: failMetadata ? new Error("Sin permiso") : null };
      } })
    },
    currentUser: { auth: "supabase", id: "user-1" },
    canEditArea: () => true,
    communicationEventImage: () => null,
    render: () => {},
    toast: (value) => calls.toasts.push(value),
    addAudit: () => {},
    supabaseErrorDetail: (error) => error?.message,
    crypto: { randomUUID: () => "unique-image" },
    console: { error: () => {}, warn: () => {} }
  });
  vm.runInContext(`${uploadFunction}\nthis.uploadImage = uploadCommunicationEventImage`, context);
  return { context, calls };
}

test("La carga guarda archivo y ficha, y la tarjeta conserva la vista previa", async () => {
  const { context, calls } = uploadHarness();
  await context.uploadImage("event-1", { name: "foto.jpg", type: "image/jpeg", size: 1000 });
  assert.equal(calls.uploaded.length, 1);
  assert.equal(calls.upserted[0].event_id, "event-1");
  assert.equal(context.communicationEventImages[0].public_url.includes("unique-image"), true);
  assert.equal(calls.removed.length, 0);
});

test("Si falla la ficha en Supabase, se retira el archivo nuevo y no se muestra como guardado", async () => {
  const { context, calls } = uploadHarness({ failMetadata: true });
  await context.uploadImage("event-1", { name: "foto.jpg", type: "image/jpeg", size: 1000 });
  assert.equal(calls.removed.length, 1);
  assert.equal(context.communicationEventImages.length, 0);
  assert.match(calls.toasts.at(-1), /No se pudo guardar/);
});
