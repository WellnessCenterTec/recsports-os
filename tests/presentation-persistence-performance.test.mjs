import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("presentation saves to Supabase even when browser storage is full", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");

  assert.match(app, /function saveExecutivePresentationLocalNotes[\s\S]*?try \{[\s\S]*?localStorage\.setItem\(EXECUTIVE_PRESENTATION_STORAGE_KEY/);
  assert.match(app, /No se pudo crear el respaldo local de la presentación/);
  assert.match(app, /No se pudo marcar la presentación para sincronización/);
  assert.match(app, /supabaseClient\.from\("presentaciones"\)\.upsert/);
  assert.match(app, /supabaseClient\.from\("presentacion_notas"\)\.upsert/);
});

test("keyboard navigation updates only the active executive slide", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const handler = app.slice(app.indexOf('if (!executivePresentationMode) return;'), app.indexOf('document.addEventListener("click"'));

  assert.match(handler, /event\.key === "ArrowRight"[\s\S]*?updateExecutivePresentationStage\(\)/);
  assert.match(handler, /event\.key === "ArrowLeft"[\s\S]*?updateExecutivePresentationStage\(\)/);
  assert.match(handler, /event\.key === "ArrowRight"[\s\S]*?updateExecutivePresentationStage\(\);\n  \} else if \(event\.key === "ArrowLeft"\)[\s\S]*?updateExecutivePresentationStage\(\);/);
});
