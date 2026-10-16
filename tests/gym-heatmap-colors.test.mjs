import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("Gimnasio uses yellow, green, and red for low, medium, and high demand", () => {
  assert.match(source, /<i class="low"><\/i>Baja/);
  assert.match(source, /<i class="medium"><\/i>Media/);
  assert.match(source, /<i class="high"><\/i>Alta/);
  assert.match(styles, /\.gym-heatmap-cell\.low\s*\{\s*background:\s*#f3c742;\s*color:\s*#3d3300;/);
  assert.match(styles, /\.gym-heatmap-cell\.medium\s*\{\s*background:\s*#2f9e5f;\s*color:\s*#fff;/);
  assert.match(styles, /\.gym-heatmap-cell\.high\s*\{\s*background:\s*#c93d3d;\s*color:\s*#fff;/);
});
