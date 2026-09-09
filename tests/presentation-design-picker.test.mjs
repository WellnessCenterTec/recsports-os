import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("presentation design picker changes appearance without editing slide content", () => {
  assert.match(source, /Cambiar diseño/);
  assert.match(source, /Modifica únicamente colores y superficies; la información permanece intacta\./);
  assert.match(source, /Toda la presentación/);
  assert.match(source, /Diapositiva \$\{executivePresentationIndex \+ 1\}/);
  assert.match(source, /data-presentation-design-option/);
  assert.match(source, /data-presentation-design-reset/);
});

test("four presentation palettes are available and persisted locally", () => {
  for (const design of ["institutional", "ocean", "energy", "forest"]) {
    assert.match(source, new RegExp(`id: "${design}"`));
    assert.match(styles, new RegExp(`data-presentation-design="${design}"`));
  }
  assert.match(source, /wellsync_executive_presentation_design_v1/);
  assert.match(source, /localStorage\.setItem\(EXECUTIVE_PRESENTATION_DESIGN_STORAGE_KEY/);
  assert.match(source, /executivePresentationDesign\.slides\?\.\[slideKey\] \|\| executivePresentationDesign\.global/);
});

test("each rendered slide carries only a design attribute while snapshot content stays complete", () => {
  assert.match(source, /data-slide-key="\$\{slide\.key\}" data-presentation-design="\$\{design\}"/);
  assert.match(source, /slides:\s*EXECUTIVE_PRESENTATION_SLIDES\.map/);
  assert.match(styles, /\.executive-presentation-slide\[data-presentation-design\][^{]*\{[^}]*var\(--presentation-bg\)/s);
  assert.match(styles, /\.executive-presentation-slide\[data-presentation-design\] \.executive-presentation-cover\s*\{[^}]*linear-gradient/s);
});
