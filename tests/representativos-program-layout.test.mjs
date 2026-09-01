import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("lays out the Top 12 programs in two ordered columns", () => {
  const desktopRule = styles.match(/\.representativos-program-list\s*\{([^}]*)\}/)?.[1] || "";

  assert.match(desktopRule, /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(desktopRule, /grid-template-rows:\s*repeat\(6,\s*minmax\(0,\s*auto\)\)/);
  assert.match(desktopRule, /grid-auto-flow:\s*column/);
});

test("returns the program list to one column on narrow screens", () => {
  const mobileRule = styles.match(/@media\s*\(max-width:\s*520px\)\s*\{\s*\.representativos-program-list\s*\{([^}]*)\}/)?.[1] || "";

  assert.match(mobileRule, /grid-template-columns:\s*1fr/);
  assert.match(mobileRule, /grid-auto-flow:\s*row/);
  assert.match(mobileRule, /grid-template-rows:\s*none/);
});
