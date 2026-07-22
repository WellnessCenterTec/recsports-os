# Executive Presentation Preview Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir Presentación Ejecutiva en un visor preliminar navegable de las 12 diapositivas antes de abrir pantalla completa.

**Architecture:** Reutilizar `EXECUTIVE_PRESENTATION_SLIDES`, `executivePresentationIndex` y `renderExecutivePresentationSlide` para renderizar una diapositiva principal y 12 miniaturas reales. Los controles de vista previa solo actualizan el índice; una acción separada activa `executivePresentationMode` conservando la selección.

**Tech Stack:** JavaScript de navegador, HTML generado por plantillas, CSS adaptable, pruebas estáticas con Node `node:test`.

## Global Constraints

- Conservar exactamente 12 diapositivas y su contenido actual.
- No modificar Supabase, fuentes de datos, edición semanal ni exportaciones.
- Seleccionar una miniatura nunca debe abrir pantalla completa.
- `Abrir en pantalla completa` debe abrir la diapositiva seleccionada.
- Mantener proporción 16:9 y evitar el espacio vertical vacío actual.

---

### Task 1: Contrato de navegación preliminar

**Files:**
- Create: `tests/executive-presentation-preview.test.mjs`
- Modify: `site/app.js`

**Interfaces:**
- Consumes: `EXECUTIVE_PRESENTATION_SLIDES`, `executivePresentationIndex`, `renderExecutivePresentationSlide(slide, index)`.
- Produces: `renderExecutivePresentationPreview(): string`, atributos `data-presentation-preview-select`, `data-presentation-preview-step` y `data-presentation-preview-fullscreen`.

- [ ] **Step 1: Write the failing test**

```js
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const appUrl = new URL("../site/app.js", import.meta.url);

test("presentation hub exposes a preview-only navigator", async () => {
  const app = await readFile(appUrl, "utf8");
  assert.match(app, /function renderExecutivePresentationPreview\(\)/);
  assert.match(app, /data-presentation-preview-select/);
  assert.match(app, /data-presentation-preview-step/);
  assert.match(app, /data-presentation-preview-fullscreen/);
  assert.match(app, /EXECUTIVE_PRESENTATION_SLIDES\.map/);
  assert.match(app, /renderExecutivePresentationSlide\(slide, index\)/);
});

test("thumbnail selection is separate from fullscreen mode", async () => {
  const app = await readFile(appUrl, "utf8");
  assert.match(app, /data-presentation-preview-select[\s\S]{0,600}executivePresentationIndex/);
  assert.match(app, /data-presentation-preview-fullscreen[\s\S]{0,600}executivePresentationMode = true/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/executive-presentation-preview.test.mjs
```

Expected: FAIL because `renderExecutivePresentationPreview` and the preview attributes do not exist.

- [ ] **Step 3: Write minimal implementation**

Add before `renderExecutivePresentationHub`:

```js
function renderExecutivePresentationPreview() {
  executivePresentationIndex = Math.max(0, Math.min(EXECUTIVE_PRESENTATION_SLIDES.length - 1, executivePresentationIndex));
  const selectedSlide = EXECUTIVE_PRESENTATION_SLIDES[executivePresentationIndex];
  return `<section class="executive-presentation-preview-browser">
    <header class="executive-presentation-preview-heading">
      <div><p class="eyebrow">Vista preliminar</p><h3>${executivePresentationIndex + 1}. ${escapeHtml(selectedSlide.title)}</h3></div>
      <div><strong>${executivePresentationIndex + 1} / ${EXECUTIVE_PRESENTATION_SLIDES.length}</strong><button class="primary-btn" type="button" data-presentation-preview-fullscreen>Abrir en pantalla completa</button></div>
    </header>
    <div class="executive-presentation-preview-stage">
      <button type="button" data-presentation-preview-step="-1" aria-label="Diapositiva anterior" ${executivePresentationIndex === 0 ? "disabled" : ""}>&#8249;</button>
      <div class="executive-presentation-preview-canvas">${renderExecutivePresentationSlide(selectedSlide, executivePresentationIndex)}</div>
      <button type="button" data-presentation-preview-step="1" aria-label="Siguiente diapositiva" ${executivePresentationIndex === EXECUTIVE_PRESENTATION_SLIDES.length - 1 ? "disabled" : ""}>&#8250;</button>
    </div>
    <div class="executive-presentation-preview-filmstrip" role="tablist" aria-label="Vista preliminar de diapositivas">
      ${EXECUTIVE_PRESENTATION_SLIDES.map((slide, index) => `<button type="button" role="tab" aria-selected="${index === executivePresentationIndex}" class="${index === executivePresentationIndex ? "selected" : ""}" data-presentation-preview-select="${index}"><span class="executive-presentation-thumbnail-canvas">${renderExecutivePresentationSlide(slide, index)}</span><strong>${index + 1}. ${escapeHtml(slide.title)}</strong></button>`).join("")}
    </div>
  </section>`;
}
```

Replace the old cover-only preview and title-button grid inside `renderExecutivePresentationHub()` with `${renderExecutivePresentationPreview()}` while preserving the existing action buttons and future-format cards.

Bind controls inside `bindExecutivePresentationControls()`:

```js
$$('[data-presentation-preview-select]').forEach((button) => button.addEventListener("click", () => {
  executivePresentationIndex = Number(button.dataset.presentationPreviewSelect) || 0;
  render();
}));
$$('[data-presentation-preview-step]').forEach((button) => button.addEventListener("click", () => {
  executivePresentationIndex = Math.max(0, Math.min(EXECUTIVE_PRESENTATION_SLIDES.length - 1, executivePresentationIndex + Number(button.dataset.presentationPreviewStep)));
  render();
}));
$("[data-presentation-preview-fullscreen]")?.addEventListener("click", () => {
  executivePresentationMode = true;
  render();
});
```

Update the existing `present` action so it sets `executivePresentationMode = true` without resetting `executivePresentationIndex`.

- [ ] **Step 4: Run test to verify it passes**

Run the command from Step 2.

Expected: 2 tests pass.

- [ ] **Step 5: Commit**

```bash
git add tests/executive-presentation-preview.test.mjs site/app.js
git commit -m "feat: add navigable executive presentation preview"
```

### Task 2: Diseño 16:9 y miniaturas legibles

**Files:**
- Modify: `site/styles.css`
- Modify: `tests/executive-presentation-preview.test.mjs`

**Interfaces:**
- Consumes: clases HTML producidas por `renderExecutivePresentationPreview()`.
- Produces: visor 16:9 adaptable y tira horizontal de miniaturas reales.

- [ ] **Step 1: Extend the failing style test**

```js
test("preview keeps 16:9 and a horizontal filmstrip", async () => {
  const css = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");
  assert.match(css, /\.executive-presentation-preview-canvas[\s\S]*?aspect-ratio:\s*16\s*\/\s*9/);
  assert.match(css, /\.executive-presentation-preview-filmstrip[\s\S]*?overflow-x:\s*auto/);
  assert.match(css, /\.executive-presentation-thumbnail-canvas[\s\S]*?transform:\s*scale\(/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run the Task 1 test command.

Expected: the new CSS test fails because the preview styles are absent.

- [ ] **Step 3: Add focused styles**

Add styles for:

```css
.executive-presentation-preview-browser { display: grid; gap: 14px; padding: 18px; border: 1px solid #d5e0ea; border-radius: 10px; background: #fff; }
.executive-presentation-preview-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.executive-presentation-preview-heading > div:last-child { display: flex; align-items: center; gap: 12px; }
.executive-presentation-preview-stage { display: grid; grid-template-columns: 44px minmax(0, 1fr) 44px; align-items: center; gap: 10px; }
.executive-presentation-preview-canvas { width: 100%; aspect-ratio: 16 / 9; min-height: 0; }
.executive-presentation-preview-stage > button { height: 70px; border: 1px solid #c8d6e4; border-radius: 8px; color: #0a66b7; background: #f3f8fc; font-size: 38px; cursor: pointer; }
.executive-presentation-preview-stage > button:disabled { opacity: .3; cursor: default; }
.executive-presentation-preview-filmstrip { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(220px, 270px); gap: 12px; overflow-x: auto; padding: 4px 2px 10px; scroll-snap-type: x proximity; }
.executive-presentation-preview-filmstrip > button { display: grid; gap: 7px; padding: 7px; scroll-snap-align: start; text-align: left; border: 2px solid transparent; border-radius: 8px; background: #eef4f8; cursor: pointer; }
.executive-presentation-preview-filmstrip > button.selected { border-color: #0a66b7; background: #e3f2fd; }
.executive-presentation-thumbnail-canvas { display: block; overflow: hidden; width: 100%; aspect-ratio: 16 / 9; border-radius: 5px; background: #fff; pointer-events: none; }
.executive-presentation-thumbnail-canvas .executive-presentation-slide { width: 400%; height: 400%; transform: scale(.25); transform-origin: top left; box-shadow: none; }
```

Add a mobile media rule that stacks the preview heading, reduces navigation buttons to 34px columns and uses 200px filmstrip cards.

- [ ] **Step 4: Run tests and syntax check**

```bash
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check site/app.js
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/upload-status.test.mjs tests/executive-presentation-preview.test.mjs
```

Expected: all tests pass and syntax check exits 0.

- [ ] **Step 5: Commit**

```bash
git add site/styles.css tests/executive-presentation-preview.test.mjs
git commit -m "style: show executive slide thumbnails"
```

### Task 3: Validación visual y publicación

**Files:**
- Modify: `site/index.html`

**Interfaces:**
- Consumes: `site/app.js` and `site/styles.css` from Tasks 1-2.
- Produces: production asset version `20260722-presentation-preview-v4`.

- [ ] **Step 1: Bump asset versions**

Update `styles.css` and `app.js` query parameters in `site/index.html` to `v=20260722-presentation-preview-v4`.

- [ ] **Step 2: Verify locally**

Open the local site, enter Presentación Ejecutiva and confirm:

```text
12 real-content thumbnails
Counter begins at 1 / 12
Thumbnail click changes preview only
Previous/next traverse 1 through 12
Fullscreen opens the selected slide
Closing fullscreen preserves selection
No browser console errors
```

- [ ] **Step 3: Publish approved files**

Commit `site/app.js`, `site/styles.css`, `site/index.html`, the test and this plan to `main` using the authenticated GitHub workflow.

- [ ] **Step 4: Verify production**

Confirm `https://recsports-wellness.vercel.app/` serves version `20260722-presentation-preview-v4`, repeat the interaction checklist and compare production hashes with the tested local files.

