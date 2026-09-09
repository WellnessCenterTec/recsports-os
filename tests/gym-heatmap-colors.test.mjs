import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("Gimnasio uses a light-to-dark blue heatmap scale", () => {
  assert.match(source, /<i class="low"><\/i>Baja/);
  assert.match(source, /<i class="medium"><\/i>Media/);
  assert.match(source, /<i class="high"><\/i>Alta/);
  assert.match(styles, /\.gym-heatmap-cell\.low\s*\{\s*background:\s*#bfe8ff;\s*color:\s*#16324a;/);
  assert.match(styles, /\.gym-heatmap-cell\.medium\s*\{\s*background:\s*#5bade2;\s*color:\s*#102f49;/);
  assert.match(styles, /\.gym-heatmap-cell\.high\s*\{\s*background:\s*#1769aa;\s*color:\s*#fff;/);
  assert.doesNotMatch(styles, /\.gym-heatmap-cell\.low\s*\{[^}]*#2f9e5f/);
  assert.doesNotMatch(styles, /\.gym-heatmap-cell\.medium\s*\{[^}]*#f3c742/);
  assert.doesNotMatch(styles, /\.gym-heatmap-cell\.high\s*\{[^}]*#c93d3d/);
});
