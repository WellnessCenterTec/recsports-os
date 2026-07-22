# Executive Presentation History Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a permanent, dated and optionally named history of immutable 12-slide executive presentations while preserving the current presentation as the active working copy.

**Architecture:** Add a small browser helper responsible for snapshot validation, date formatting and a local pending-sync queue. Reuse the existing `presentaciones` and `presentacion_notas` Supabase tables with `presentation_type = history`; each user save receives a unique key, stores reusable editable content plus one frozen internal rendering per slide, and never touches the weekly draft row. Extend the existing Presentation Executive hub with save, history, read-only viewer and reuse-confirmation interfaces without changing the approved preview browser.

**Tech Stack:** Static HTML, vanilla JavaScript, CSS, Supabase browser client, browser `localStorage`, Node.js built-in test runner.

## Global Constraints

- Keep the existing 16:9 preview, arrows, counter and 12-thumbnail filmstrip unchanged.
- Keep the active presentation as the working copy after every history save.
- Every **Guardar presentación** action creates a new immutable history version.
- A blank name becomes `Presentación del <fecha y hora>` in `America/Monterrey`.
- **Ver** displays the frozen 12-slide copy without re-querying current automatic data.
- **Editar / Reutilizar** copies editable content only; automatic slides use current WellSync data.
- Historical records are never deleted or overwritten in this phase.
- A cloud failure must be shown as **Pendiente de sincronizar**, not as a permanent save.
- Do not change PDF, PowerPoint, current slide editing, Supabase source data, or the base composition of the 12 slides.
- Publish only after all automated tests and production interaction checks pass.

---

## File Map

- Create `site/presentation-history.js`: pure snapshot, naming, completeness and local pending-queue helper exposed as `window.WellSyncPresentationHistory`.
- Create `tests/presentation-history.test.mjs`: unit contracts for unique versions, immutable cloning, default naming, completeness and pending synchronization state.
- Modify `site/index.html`: load the helper before `app.js` and bump production asset versions.
- Modify `site/app.js`: presentation history state, Supabase persistence, local retry, history rendering, viewer, reuse confirmation and event bindings.
- Modify `site/styles.css`: compact history list and modal/viewer styles that match the current Executive Presentation module.
- Modify `tests/executive-presentation-preview.test.mjs`: regression contracts proving the approved preview remains present and separate from history controls.

---

### Task 1: Snapshot and pending-sync helper

**Files:**
- Create: `site/presentation-history.js`
- Create: `tests/presentation-history.test.mjs`
- Modify: `site/index.html` immediately before the existing `app.js` script

**Interfaces:**
- Consumes: a Storage-compatible object with `getItem(key)`, `setItem(key, value)` and `removeItem(key)`.
- Produces: `window.WellSyncPresentationHistory` with `createSnapshot`, `cloneEditableContent`, `defaultTitle`, `formatSavedAt`, `isComplete`, `createPendingStore` and `PENDING_STORAGE_KEY`.

- [ ] **Step 1: Write failing helper tests**

Create `tests/presentation-history.test.mjs`:

```js
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
  assert.deepEqual(store.list().map((item) => item.title), ["Actualizada", "Segunda"]);
  store.remove("a");
  assert.deepEqual(store.list().map((item) => item.id), ["b"]);
});

test("rejects incomplete or duplicate slide snapshots", async () => {
  const history = await loadHelper();
  const slides = Array.from({ length: 12 }, (_, index) => ({ key: index === 11 ? "slide-0" : `slide-${index}`, html: `<article>${index}</article>` }));
  assert.equal(history.isComplete({ slides }), false);
});
```

- [ ] **Step 2: Run tests and verify RED**

Run:

```bash
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/presentation-history.test.mjs
```

Expected: FAIL because `site/presentation-history.js` does not exist.

- [ ] **Step 3: Implement the helper**

Create `site/presentation-history.js` as an IIFE. Use these exact public contracts:

```js
(() => {
  const PENDING_STORAGE_KEY = "wellsync_executive_presentation_history_pending_v1";
  const formatter = new Intl.DateTimeFormat("es-MX", {
    timeZone: "America/Monterrey",
    dateStyle: "long",
    timeStyle: "short"
  });

  function cloneEditableContent(value) {
    return JSON.parse(JSON.stringify(value && typeof value === "object" ? value : {}));
  }

  function formatSavedAt(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? "Fecha no disponible" : formatter.format(date);
  }

  function defaultTitle(savedAt) {
    return `Presentación del ${formatSavedAt(savedAt)}`;
  }

  function isComplete(snapshot) {
    const slides = Array.isArray(snapshot?.slides) ? snapshot.slides : [];
    return slides.length === 12
      && new Set(slides.map((slide) => String(slide?.key || ""))).size === 12
      && slides.every((slide) => slide.key && typeof slide.html === "string" && slide.html.includes("<article"));
  }

  function createSnapshot({ title, weekKey, editableContent, slides, savedAt = new Date().toISOString(), id = crypto.randomUUID() }) {
    const snapshot = {
      schemaVersion: 1,
      id,
      title: String(title || "").trim() || defaultTitle(savedAt),
      weekKey: String(weekKey || ""),
      savedAt,
      editableContent: cloneEditableContent(editableContent),
      slides: cloneEditableContent(slides)
    };
    if (!isComplete(snapshot)) throw new Error("La presentación debe contener 12 diapositivas completas");
    return snapshot;
  }

  function createPendingStore(storage) {
    const read = () => {
      try {
        const value = JSON.parse(storage.getItem(PENDING_STORAGE_KEY) || "[]");
        return Array.isArray(value) ? value : [];
      } catch {
        return [];
      }
    };
    const write = (rows) => storage.setItem(PENDING_STORAGE_KEY, JSON.stringify(rows));
    return {
      list: () => cloneEditableContent(read()),
      upsert: (snapshot) => {
        const rows = read();
        const index = rows.findIndex((row) => row.id === snapshot.id);
        if (index >= 0) rows[index] = cloneEditableContent(snapshot);
        else rows.push(cloneEditableContent(snapshot));
        write(rows);
      },
      remove: (id) => write(read().filter((row) => row.id !== id))
    };
  }

  window.WellSyncPresentationHistory = {
    PENDING_STORAGE_KEY,
    cloneEditableContent,
    formatSavedAt,
    defaultTitle,
    isComplete,
    createSnapshot,
    createPendingStore
  };
})();
```

Add to `site/index.html` before `app.js`:

```html
<script src="./presentation-history.js?v=20260722-presentation-history-v1"></script>
```

- [ ] **Step 4: Run helper tests and syntax checks**

Run:

```bash
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check site/presentation-history.js
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/presentation-history.test.mjs
```

Expected: 4 tests pass, 0 fail.

- [ ] **Step 5: Commit Task 1**

```bash
git add site/presentation-history.js site/index.html tests/presentation-history.test.mjs
git commit -m "feat: add presentation history snapshot helper"
```

When local Git credentials are unavailable, preserve the tested files in `work/implementation` and publish the same bytes through the authenticated GitHub editor during the final publication task.

---

### Task 2: Cloud persistence and safe retry

**Files:**
- Modify: `site/app.js` near presentation constants and `loadExecutivePresentationNotes`
- Modify: `tests/presentation-history.test.mjs`

**Interfaces:**
- Consumes: `WellSyncPresentationHistory.createSnapshot`, `createPendingStore`, existing `supabaseClient`, `currentUser`, `presentationWeekKey`, `presentationNotesForCurrentWeek`, `renderExecutivePresentationSlide` and the two existing Supabase tables.
- Produces: `captureExecutivePresentationSnapshot(title): Snapshot`, `savePresentationHistorySnapshot(snapshot): Promise<boolean>`, `loadPresentationHistory(): Promise<void>`, `syncPendingPresentationHistory(): Promise<void>`.

- [ ] **Step 1: Add failing static integration tests**

Append to `tests/presentation-history.test.mjs`:

```js
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
```

- [ ] **Step 2: Run tests and verify RED**

Run the history test file. Expected: the 4 helper tests pass and the 2 app integration tests fail because persistence functions are absent.

- [ ] **Step 3: Add state and snapshot capture**

Near the existing Executive Presentation state, add:

```js
const presentationHistoryApi = window.WellSyncPresentationHistory;
const presentationHistoryPendingStore = presentationHistoryApi.createPendingStore(localStorage);
let executivePresentationHistory = [];
let executivePresentationHistoryLoading = false;
let executivePresentationHistorySaving = false;
let executivePresentationHistoryCloudAvailable = true;
```

Implement:

```js
function captureExecutivePresentationSnapshot(title = "") {
  const savedAt = new Date().toISOString();
  return presentationHistoryApi.createSnapshot({
    title,
    weekKey: presentationWeekKey(),
    savedAt,
    editableContent: presentationNotesForCurrentWeek(),
    slides: EXECUTIVE_PRESENTATION_SLIDES.map((slide, index) => ({
      key: slide.key,
      title: slide.title,
      html: renderExecutivePresentationSlide(slide, index)
    }))
  });
}
```

- [ ] **Step 4: Add idempotent Supabase persistence**

Implement `savePresentationHistorySnapshot(snapshot)` with this sequence:

```js
async function savePresentationHistorySnapshot(snapshot) {
  if (!supabaseClient || currentUser?.auth !== "supabase") return false;
  const weekKey = `history-${snapshot.savedAt.replace(/[^0-9]/g, "")}-${snapshot.id}`;
  const head = await supabaseClient.from("presentaciones").upsert({
    week_key: weekKey,
    presentation_type: "history",
    title: snapshot.title,
    status: "draft",
    updated_at: snapshot.savedAt
  }, { onConflict: "week_key,presentation_type" }).select("id").single();
  if (head.error || !head.data?.id) return false;
  const rows = [
    { section_key: "__snapshot_meta", content: JSON.stringify({ schemaVersion: snapshot.schemaVersion, id: snapshot.id, savedAt: snapshot.savedAt, weekKey: snapshot.weekKey }) },
    { section_key: "__editable_content", content: JSON.stringify(snapshot.editableContent) },
    ...snapshot.slides.map((slide) => ({ section_key: `snapshot:${slide.key}`, content: JSON.stringify(slide) }))
  ].map((row) => ({ ...row, presentacion_id: head.data.id, updated_at: snapshot.savedAt }));
  const details = await supabaseClient.from("presentacion_notas").upsert(rows, { onConflict: "presentacion_id,section_key" });
  if (details.error) return false;
  const completed = await supabaseClient.from("presentaciones").update({ status: "saved", updated_at: snapshot.savedAt }).eq("id", head.data.id);
  return !completed.error;
}
```

The caller must place the snapshot in `presentationHistoryPendingStore` before calling this function and remove it only after `true` is returned.

- [ ] **Step 5: Load completed versions and merge pending versions**

Implement `loadPresentationHistory()` to:

1. set `executivePresentationHistoryLoading = true`;
2. query `presentaciones` for `id,title,week_key,updated_at,status`, filtered by `presentation_type = history` and `status = saved`, ordered by `updated_at` descending;
3. derive the snapshot id with `String(row.week_key || "").replace(/^history-\d+-/, "")` and map cloud headers to `{ id, cloudId, title, savedAt, weekKey, pending: false }`;
4. prepend local pending snapshots as `{ ...snapshot, pending: true }` when their snapshot id is not already represented by the metadata of a cloud record;
5. set `executivePresentationHistoryCloudAvailable` according to the query result;
6. clear the loading state in `finally`.

Implement `syncPendingPresentationHistory()` as a sequential loop over `presentationHistoryPendingStore.list()`. Remove an item only when `savePresentationHistorySnapshot(item)` returns `true`, then reload the history list.

- [ ] **Step 6: Load full details only when needed**

Implement `loadPresentationHistorySnapshot(record)`:

- return a deep clone immediately when `record.pending` already contains `slides`;
- otherwise query all `section_key,content` rows for `record.cloudId`;
- parse `__snapshot_meta`, `__editable_content` and every `snapshot:<slide_key>` row;
- sort slides according to `EXECUTIVE_PRESENTATION_SLIDES`;
- validate with `presentationHistoryApi.isComplete`;
- throw `No se pudo recuperar la presentación completa` if validation fails.

- [ ] **Step 7: Wire initial load, refresh and retry**

After the existing presentation notes load during application startup, call:

```js
await syncPendingPresentationHistory();
await loadPresentationHistory();
```

At the end of `refreshExecutivePresentationData()`, call the same two functions so the **Actualizar datos** action retries pending versions and refreshes the list. Guard `syncPendingPresentationHistory()` so it exits immediately without a Supabase-authenticated session.

- [ ] **Step 8: Re-run tests**

Run:

```bash
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check site/app.js
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/presentation-history.test.mjs
```

Expected: 6 tests pass, 0 fail.

- [ ] **Step 9: Commit Task 2**

```bash
git add site/app.js tests/presentation-history.test.mjs
git commit -m "feat: persist immutable presentation history"
```

---

### Task 3: History user interface and reuse workflow

**Files:**
- Modify: `site/app.js` around `renderExecutivePresentationHub` and `bindExecutivePresentationControls`
- Modify: `site/styles.css` near existing `.executive-presentation-preview-*` rules
- Modify: `tests/executive-presentation-preview.test.mjs`

**Interfaces:**
- Consumes: Task 2 history state and persistence functions.
- Produces: `renderExecutivePresentationHistory`, `renderPresentationHistorySaveDialog`, `renderPresentationHistoryViewer`, `renderPresentationHistoryReuseDialog`, `sanitizePresentationSnapshotHtml` and data attributes `data-presentation-history-save`, `data-presentation-history-view`, `data-presentation-history-reuse`.

- [ ] **Step 1: Write failing UI contract tests**

Append to `tests/executive-presentation-preview.test.mjs`:

```js
test("history is added without replacing the approved preview", async () => {
  assert.match(app, /renderExecutivePresentationPreview\(\)/);
  assert.match(app, /renderExecutivePresentationHistory\(\)/);
  assert.match(app, /data-presentation-history-save/);
  assert.match(app, /data-presentation-history-view/);
  assert.match(app, /data-presentation-history-reuse/);
  assert.match(app, /Historial de presentaciones/);
});

test("historical viewer is read only and reuse requires confirmation", async () => {
  assert.match(app, /sanitizePresentationSnapshotHtml/);
  assert.match(app, /data-presentation-history-reuse-confirm/);
  assert.match(app, /contenido editable de la presentación principal/);
});

test("history layout is compact and responsive", async () => {
  assert.match(css, /\.executive-presentation-history-list/);
  assert.match(css, /\.executive-presentation-history-card/);
  assert.match(css, /@media[\s\S]*\.executive-presentation-history-card/);
});
```

- [ ] **Step 2: Run UI tests and verify RED**

Run the preview test file. Expected: existing preview tests pass and the 3 new history tests fail.

- [ ] **Step 3: Add history state for dialogs**

Add:

```js
let executivePresentationHistorySaveOpen = false;
let executivePresentationHistoryViewer = null;
let executivePresentationHistoryViewerIndex = 0;
let executivePresentationHistoryReuseTarget = null;
let executivePresentationHistoryReturnFocus = null;
```

- [ ] **Step 4: Add the save button and history list**

In the existing action row, add:

```html
<button class="primary-btn" type="button" data-presentation-history-save>Guardar presentación</button>
```

Render `renderExecutivePresentationHistory()` immediately after `renderExecutivePresentationPreview()` and before the `Próximamente` cards. Use:

```js
function renderExecutivePresentationHistory() {
  const rows = executivePresentationHistory;
  return `<section class="executive-presentation-history" aria-labelledby="presentationHistoryTitle">
    <header><div><p class="eyebrow">Versiones guardadas</p><h3 id="presentationHistoryTitle">Historial de presentaciones</h3></div><span>${rows.length} ${rows.length === 1 ? "versión" : "versiones"}</span></header>
    ${executivePresentationHistoryLoading ? `<div class="executive-presentation-history-empty">Cargando historial...</div>` : rows.length ? `<div class="executive-presentation-history-list">${rows.map((row) => `<article class="executive-presentation-history-card"><div><strong>${escapeHtml(row.title)}</strong><span>${escapeHtml(presentationHistoryApi.formatSavedAt(row.savedAt))}</span><em>${escapeHtml(row.weekKey || "Sin semana")} · 12 diapositivas${row.pending ? " · Pendiente de sincronizar" : ""}</em></div><div><button class="ghost-btn" type="button" data-presentation-history-view="${escapeHtml(row.id)}">Ver</button><button class="ghost-btn" type="button" data-presentation-history-reuse="${escapeHtml(row.id)}">Editar / Reutilizar</button></div></article>`).join("")}</div>` : `<div class="executive-presentation-history-empty"><strong>Aún no hay versiones guardadas</strong><span>Usa Guardar presentación para crear la primera.</span></div>`}
  </section>`;
}
```

- [ ] **Step 5: Add save, read-only viewer and reuse-confirmation dialogs**

Implement:

- a save dialog with `#presentationHistoryName`, visible date/time and `data-presentation-history-save-confirm`;
- a read-only viewer using the selected frozen `slides[index].html`, arrows, counter, 12 thumbnails and no edit button;
- a reuse dialog stating: `Se reemplazará el contenido editable de la presentación principal. La versión histórica permanecerá intacta.` with `data-presentation-history-reuse-confirm`.

`sanitizePresentationSnapshotHtml(html)` must parse into a detached `<template>`, remove `script,style,iframe,object,embed,link,meta`, remove attributes beginning with `on`, and remove `href` or `src` values beginning with `javascript:` before returning `template.innerHTML`.

- [ ] **Step 6: Bind save behavior**

The confirm handler must:

1. set `executivePresentationHistorySaving = true` and disable the confirm button;
2. call `captureExecutivePresentationSnapshot(nameInput.value)`;
3. put the snapshot in `presentationHistoryPendingStore` before any network request;
4. call `savePresentationHistorySnapshot(snapshot)`;
5. remove the pending copy only after cloud success;
6. close the dialog, reload history and render;
7. toast `Presentación guardada en el historial` on cloud success or `Presentación pendiente de sincronizar` on local-only preservation;
8. leave `executivePresentationNotes`, `executivePresentationIndex` and the current preview unchanged.

- [ ] **Step 7: Bind view and reuse behavior**

- **Ver:** fetch with `loadPresentationHistorySnapshot`, assign `executivePresentationHistoryViewer`, reset only the historical viewer index to zero and open the read-only viewer.
- **Editar / Reutilizar:** fetch the complete snapshot, assign it to `executivePresentationHistoryReuseTarget` and open the confirmation dialog.
- **Confirm reuse:** deep-clone `snapshot.editableContent` into `executivePresentationNotes[presentationWeekKey()]`, save locally, persist the active weekly fields through a dedicated `saveExecutivePresentationEditableContent(values)` wrapper using the existing weekly Supabase upsert logic, close the confirmation, open the existing editor at `priorities`, refresh automatic data and render.
- Do not alter the historical record during reuse.

- [ ] **Step 8: Add keyboard and focus handling**

Add one document keydown handler while a history dialog is open:

- `Escape` closes the topmost history dialog;
- `ArrowLeft` and `ArrowRight` navigate only inside the historical viewer;
- closing restores focus to `executivePresentationHistoryReturnFocus` when it is still connected.

- [ ] **Step 9: Add compact responsive styles**

Add styles with these layout contracts:

```css
.executive-presentation-history { display: grid; gap: 14px; padding: 18px; border: 1px solid #d5e0ea; border-radius: 10px; background: #fff; }
.executive-presentation-history > header { display: flex; align-items: end; justify-content: space-between; gap: 16px; }
.executive-presentation-history-list { display: grid; gap: 10px; }
.executive-presentation-history-card { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 13px 14px; border: 1px solid #d8e3ed; border-radius: 9px; background: #f8fbfd; }
.executive-presentation-history-card > div:first-child { display: grid; gap: 3px; min-width: 0; }
.executive-presentation-history-card > div:last-child { display: flex; flex-wrap: wrap; gap: 8px; }
.executive-presentation-history-empty { display: grid; place-items: center; min-height: 110px; gap: 5px; border: 1px dashed #c7d7e5; border-radius: 9px; color: #5d7183; text-align: center; }
.executive-presentation-history-viewer .executive-presentation-preview-canvas { aspect-ratio: 16 / 9; }
@media (max-width: 700px) {
  .executive-presentation-history > header,
  .executive-presentation-history-card { align-items: stretch; flex-direction: column; }
  .executive-presentation-history-card > div:last-child { display: grid; grid-template-columns: 1fr; }
}
```

Reuse existing backdrop, dialog, button, 16:9 slide and thumbnail visual language where possible; add specific class names instead of changing current preview rules.

- [ ] **Step 10: Run UI and regression tests**

Run:

```bash
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check site/app.js
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/upload-status.test.mjs tests/executive-presentation-preview.test.mjs tests/presentation-history.test.mjs
```

Expected: all tests pass, 0 fail.

- [ ] **Step 11: Commit Task 3**

```bash
git add site/app.js site/styles.css tests/executive-presentation-preview.test.mjs
git commit -m "feat: add executive presentation history interface"
```

---

### Task 4: Browser verification and publication

**Files:**
- Modify: `site/index.html` asset query versions
- Modify: test files only if verification exposes a missing regression contract

**Interfaces:**
- Consumes: completed Tasks 1-3.
- Produces: production asset version `20260722-presentation-history-v1` and verified live behavior.

- [ ] **Step 1: Bump cache versions**

Set these exact query values in `site/index.html`:

```html
<link rel="stylesheet" href="./styles.css?v=20260722-presentation-history-v1" />
<script src="./presentation-history.js?v=20260722-presentation-history-v1"></script>
<script src="./app.js?v=20260722-presentation-history-v1"></script>
```

- [ ] **Step 2: Run the full automated gate**

Run:

```bash
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check site/presentation-history.js
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check site/app.js
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check site/upload-status.js
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/upload-status.test.mjs tests/executive-presentation-preview.test.mjs tests/presentation-history.test.mjs
```

Expected: syntax checks exit 0; all tests pass; 0 failures.

- [ ] **Step 3: Verify locally in a real browser**

Serve `site/` on an unused local port and verify:

1. the existing 12-slide preview looks and behaves exactly as before;
2. **Guardar presentación** opens the optional-name dialog;
3. two consecutive saves create two rows without changing the active presentation;
4. a blank name receives the automatic Monterrey date/time title;
5. **Ver** opens the frozen read-only viewer with 12 thumbnails;
6. editing the active presentation after a save does not change the saved viewer;
7. **Editar / Reutilizar** requires confirmation, restores editable fields and keeps current automatic data;
8. desktop and 390px mobile layouts have no page-level horizontal overflow;
9. the browser console has no history-related errors.

- [ ] **Step 4: Publish the tested bytes**

Use the authenticated repository connection available in the user's session. Publish exactly:

- `site/presentation-history.js`
- `site/app.js`
- `site/styles.css`
- `site/index.html`
- `tests/presentation-history.test.mjs`
- `tests/executive-presentation-preview.test.mjs`
- this plan document

Do not publish untested local differences. Use focused commit messages matching Tasks 1-4 or one scoped commit `Agregar historial de presentaciones ejecutivas` when the web editor requires per-file commits.

- [ ] **Step 5: Verify production deployment**

Open `https://recsports-wellness.vercel.app/` after the deployment exposes `20260722-presentation-history-v1`. Repeat the interaction checklist with an authenticated session and confirm the presentation appears after a reload or on the second computer session.

- [ ] **Step 6: Compare production files with tested local files**

Run SHA-256 comparisons for `presentation-history.js`, `app.js`, `styles.css` and `index.html`. Expected: every local hash equals its production hash.

- [ ] **Step 7: Final completion report**

Report:

- the live WellSync link;
- total passing tests and zero failures;
- exact production hash match;
- the verified save, history, view and reuse behavior;
- whether any record remains **Pendiente de sincronizar**;
- confirmation that the existing preview and active working copy were preserved.
