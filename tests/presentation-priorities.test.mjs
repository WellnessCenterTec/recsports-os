import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import test from "node:test";

const require = createRequire(import.meta.url);
const priorities = require("../site/presentation-priorities.js");

test("reads versioned title and detail items and limits them to eight", () => {
  const source = JSON.stringify({
    version: 2,
    items: Array.from({ length: 10 }, (_, index) => ({
      title: `Tema ${index + 1}`,
      detail: `Detalle ${index + 1}`
    }))
  });

  assert.equal(priorities.parsePriorityItems(source).length, 8);
  assert.deepEqual(priorities.parsePriorityItems(source)[0], { title: "Tema 1", detail: "Detalle 1" });
  assert.deepEqual(priorities.parsePriorityItems(source)[7], { title: "Tema 8", detail: "Detalle 8" });
});

test("migrates each complete legacy line into the title without losing content", () => {
  const source = [
    "Planeación: Reunión martes 28 de agosto: 10:00",
    "Indicadores semanales",
    "",
    "Evaluaciones: Compartir acuerdos"
  ].join("\n");

  assert.deepEqual(priorities.parsePriorityItems(source), [
    { title: "Planeación: Reunión martes 28 de agosto: 10:00", detail: "" },
    { title: "Indicadores semanales", detail: "" },
    { title: "Evaluaciones: Compartir acuerdos", detail: "" }
  ]);
});

test("serializes only nonempty items using the version two contract", () => {
  const serialized = priorities.serializePriorityItems([
    { title: " Planeación ", detail: " Martes 10:00 " },
    { title: "", detail: "" },
    { title: "", detail: "Contexto conservado" }
  ]);

  assert.deepEqual(JSON.parse(serialized), {
    version: 2,
    items: [
      { title: "Planeación", detail: "Martes 10:00" },
      { title: "Contexto conservado", detail: "" }
    ]
  });
});

test("editor exposes eight independent title and detail pairs", () => {
  const html = priorities.renderPriorityEditor(
    JSON.stringify({ version: 2, items: [{ title: "Planeación", detail: "Martes" }] }),
    priorities.escapeHtml
  );

  assert.equal((html.match(/data-priority-editor-item=/g) || []).length, 8);
  assert.equal((html.match(/name="priority_title_\d"/g) || []).length, 8);
  assert.equal((html.match(/name="priority_detail_\d"/g) || []).length, 8);
  assert.match(html, /value="Planeación"/);
  assert.match(html, />Martes<\/textarea>/);
});

test("form entries preserve paired values and ignore fully empty rows", () => {
  const items = priorities.priorityItemsFromFormEntries([
    ["priority_title_0", "Planeación"],
    ["priority_detail_0", "Reunión del bloque"],
    ["priority_title_1", ""],
    ["priority_detail_1", ""],
    ["priority_title_2", "Indicadores"],
    ["priority_detail_2", "Entrega viernes"]
  ]);

  assert.deepEqual(items, [
    { title: "Planeación", detail: "Reunión del bloque" },
    { title: "Indicadores", detail: "Entrega viernes" }
  ]);
});

test("selects a balanced column count for every supported item count", () => {
  assert.deepEqual(
    Array.from({ length: 8 }, (_, index) => priorities.priorityColumnCount(index + 1)),
    [1, 2, 2, 2, 3, 3, 4, 4]
  );
});

test("turns separated detail phrases into clean bullet items", () => {
  assert.deepEqual(
    priorities.priorityDetailItems("- Reunión del staff - Playeras de uniforme\n• Equipos de apoyo"),
    ["Reunión del staff", "Playeras de uniforme", "Equipos de apoyo"]
  );
  assert.deepEqual(priorities.priorityDetailItems("Actualizar los indicadores"), ["Actualizar los indicadores"]);
});

test("chooses a topic icon for each priority detail", () => {
  assert.equal(priorities.priorityDetailIcon("Actualizar los indicadores"), "📊");
  assert.equal(priorities.priorityDetailIcon("Playeras de uniforme"), "👕");
  assert.equal(priorities.priorityDetailIcon("Reunión del staff"), "👥");
  assert.equal(priorities.priorityDetailIcon("Agenda con departamentos"), "📅");
  assert.equal(priorities.priorityDetailIcon("Difundir la carrera"), "📣");
});

test("board renders centered title hierarchy, bulleted detail, and no visible numbering", () => {
  const source = JSON.stringify({
    version: 2,
    items: Array.from({ length: 8 }, (_, index) => ({
      title: `Tema ${index + 1}`,
      detail: `Detalle ${index + 1}`
    }))
  });
  const html = priorities.renderPriorityBoard(source, priorities.escapeHtml);

  assert.match(html, /data-priority-count="8"/);
  assert.match(html, /priority-columns-4/);
  assert.match(html, /<h3>TEMA 1<\/h3>/);
  assert.match(html, /executive-presentation-priority-details/);
  assert.match(html, /executive-presentation-priority-detail-icon/);
  assert.match(html, /<span>Detalle 1<\/span>/);
  assert.equal((html.match(/executive-presentation-priority-card/g) || []).length, 8);
  assert.doesNotMatch(html, /executive-presentation-priority-number/);
});

test("WellSync loads the priority module before the app and uses it in editor and slide", async () => {
  const [index, app] = await Promise.all([
    readFile(new URL("../site/index.html", import.meta.url), "utf8"),
    readFile(new URL("../site/app.js", import.meta.url), "utf8")
  ]);

  assert.match(index, /presentation-priorities\.js[^]*app\.js/);
  assert.match(index, /wellsync-version" content="20260824-presentation-layout-v2/);
  assert.match(index, /presentation-priorities\.js\?v=20260818-priority-icons-v1/);
  assert.match(app, /WellSyncPresentationPriorities/);
  assert.match(app, /renderPriorityEditor\(notes\.priorities/);
  assert.match(app, /renderPriorityBoard\(notes\.priorities/);
});

test("priority editor submission serializes paired fields into the existing priorities section", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");

  assert.match(app, /priorityItemsFromFormEntries\(formData\.entries\(\)\)/);
  assert.match(app, /values\.priorities\s*=\s*presentationPrioritiesApi\.serializePriorityItems/);
  assert.match(app, /section_key, content/);
});

test("priority grid and editor collapse safely on narrow screens", async () => {
  const css = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");

  assert.match(css, /\.executive-presentation-priority-grid\.priority-columns-4\s*\{\s*grid-template-columns:\s*repeat\(4/);
  assert.match(css, /\.executive-presentation-priority-grid\s*\{\s*grid-template-columns:\s*1fr !important;\s*\}/);
  assert.match(css, /\.executive-presentation-priority-editor\s*\{\s*grid-template-columns:\s*1fr;\s*\}/);
  assert.match(css, /\.executive-presentation-priority-card h3[^}]*text-align:\s*center/);
  assert.match(css, /\.executive-presentation-priority-detail-icon/);
});
