import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const app = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const index = fs.readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("Clases Deportivas incluye una pestaña Excel exclusiva del módulo", () => {
  assert.match(index, /id="classExcelViewButton" data-view="class-excel" hidden>Excel<\/button>/);
  assert.match(app, /classExcelTab\.hidden = !isClasses/);
  assert.match(app, /activeView === "class-excel" && activeArea !== "clases"/);
  assert.match(app, /activeView === "class-excel"\) contentHtml = renderClassExcelView\(\)/);
});

test("la hoja genera 50 filas por 50 columnas y guarda solo las celdas editadas", () => {
  assert.match(app, /const CLASS_EXCEL_ROWS = 50/);
  assert.match(app, /const CLASS_EXCEL_COLUMNS = 50/);
  assert.match(app, /wellsync_class_excel_grid_v1/);
  assert.match(app, /data-class-excel-cell/);
  assert.match(app, /localStorage\.setItem\(periodStorageKey\(CLASS_EXCEL_STORAGE_KEY\)/);
});

test("la cuadrícula conserva encabezados fijos y desplazamiento en ambas direcciones", () => {
  assert.match(styles, /\.class-excel-scroll[\s\S]*overflow: auto/);
  assert.match(styles, /\.class-excel-grid thead th[\s\S]*position: sticky/);
  assert.match(styles, /\.class-excel-grid tbody th,[\s\S]*left: 0/);
});
