import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("coordinator gender chart uses a compact single-line layout", async () => {
  const css = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const index = await readFile(new URL("../site/index.html", import.meta.url), "utf8");

  assert.match(css, /\.coordinator-palette\.gender-row\s*\{[^}]*grid-template-columns:\s*minmax\(64px,\s*80px\)\s+minmax\(0,\s*1fr\)\s+30px;[^}]*margin:\s*8px 0;/s);
  assert.match(css, /\.coordinator-palette \.gender-breakdown\s*\{[^}]*flex-wrap:\s*nowrap;[^}]*font-size:\s*10px;/s);
  assert.match(css, /\.coordinator-palette \.gender-breakdown \.zero-count\s*\{\s*display:\s*none;\s*\}/s);
  assert.match(app, /class="\$\{row\.Mujer \? "" : "zero-count"\}"/);
  assert.match(app, /class="\$\{row\.Hombre \? "" : "zero-count"\}"/);
  assert.match(index, /styles\.css\?v=20260827-intramuros-v3/);
  assert.match(index, /app\.js\?v=20260827-intramuros-v3/);
});
