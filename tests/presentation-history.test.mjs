import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { readFile } from "node:fs/promises";

async function loadHelper() {
  const source = await readFile(new URL("../site/presentation-history.js", import.meta.url), "utf8");
  const window = {};
  vm.runInNewContext(source, { window, crypto: { randomUUID: () => "uuid-1" } });
  return window.WellSyncPresentationHistory;
}

function memoryStorage() {
  const values = new Map();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: (key) => values.delete(key)
  };
}

test("creates an immutable complete 12-slide snapshot", async () => {
  const history = await loadHelper();
  const editable = { priorities: "Uno" };
  const slides = Array.from({ length: 12 }, (_, index) => ({ key: `slide-${index}`, title: `Slide ${index}`, html: `<article>${index}</article>` }));
  const snapshot = history.createSnapshot({ title: "Junta semanal", weekKey: "2026-W30", editableContent: editable, slides, savedAt: "2026-07-22T17:00:00.000Z" });
  editable.priorities = "Cambiado";
  assert.equal(snapshot.id, "uuid-1");
  assert.equal(snapshot.editableContent.priorities, "Uno");
  assert.equal(snapshot.slides.length, 12);
  assert.equal(history.isComplete(snapshot), true);
});

test("uses a readable automatic name when title is blank", async () => {
  const history = await loadHelper();
  assert.match(history.defaultTitle("2026-07-22T17:45:00.000Z"), /^Presentación del /);
  assert.match(history.formatSavedAt("2026-07-22T17:45:00.000Z"), /22 de julio de 2026/i);
});

test("pending queue upserts by id and removes only the synchronized item", async () => {
  const history = await loadHelper();
  const store = history.createPendingStore(memoryStorage());
  store.upsert({ id: "a", title: "Primera" });
  store.upsert({ id: "a", title: "Actualizada" });
  store.upsert({ id: "b", title: "Segunda" });
  assert.deepEqual(Array.from(store.list(), (item) => item.title), ["Actualizada", "Segunda"]);
  store.remove("a");
  assert.deepEqual(Array.from(store.list(), (item) => item.id), ["b"]);
});

test("rejects incomplete or duplicate slide snapshots", async () => {
  const history = await loadHelper();
  const slides = Array.from({ length: 12 }, (_, index) => ({ key: index === 11 ? "slide-0" : `slide-${index}`, html: `<article>${index}</article>` }));
  assert.equal(history.isComplete({ slides }), false);
});

test("app stores history separately from the weekly draft", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  assert.match(app, /presentation_type:\s*"history"/);
  assert.match(app, /status:\s*"draft"/);
  assert.match(app, /\.update\(\{\s*status:\s*"saved"/);
  assert.match(app, /snapshot:/);
  assert.match(app, /__editable_content/);
});

test("app maintains a pending queue when cloud persistence fails", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  assert.match(app, /presentationHistoryPendingStore\.upsert/);
  assert.match(app, /syncPendingPresentationHistory/);
  assert.match(app, /presentationHistoryPendingStore\.remove/);
});
