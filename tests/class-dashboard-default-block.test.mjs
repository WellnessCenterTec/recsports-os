import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");

test("Clases defaults to the latest PMT block with captured grades", () => {
  const defaultBlock = source.slice(source.indexOf("function classDefaultDashboardBlock"), source.indexOf("function classDashboardSemesterLabel"));

  assert.match(defaultBlock, /normalizeClassGrade\(row\.grade\)/);
  assert.match(defaultBlock, /grade !== "" && grade !== null/);
  assert.match(defaultBlock, /\["PMT3", "PMT2", "PMT1"\]\.find/);
  assert.match(defaultBlock, /if \(latestGradedBlock\) return latestGradedBlock/);
});
