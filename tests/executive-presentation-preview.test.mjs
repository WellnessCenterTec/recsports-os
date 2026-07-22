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
  assert.match(app, /data-presentation-preview-select[\s\S]{0,900}executivePresentationIndex/);
  assert.match(app, /data-presentation-preview-fullscreen[\s\S]{0,900}executivePresentationMode = true/);
});

test("preview keeps 16:9 and a horizontal filmstrip", async () => {
  const css = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");
  assert.match(css, /\.executive-presentation-preview-canvas[\s\S]*?aspect-ratio:\s*16\s*\/\s*9/);
  assert.match(css, /\.executive-presentation-preview-filmstrip[\s\S]*?overflow-x:\s*auto/);
  assert.match(css, /\.executive-presentation-thumbnail-canvas[\s\S]*?transform:\s*scale\(/);
});
