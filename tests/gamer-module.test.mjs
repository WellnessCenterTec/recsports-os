import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const appSource = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const planSource = fs.readFileSync(new URL("../site/module-data-plan.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("Gamer is a focused Excel upload dashboard", () => {
  assert.match(appSource, /id: "gamer",[\s\S]*name: "Gamer"/);
  assert.match(appSource, /function renderGamerDashboard\(\)/);
  assert.match(appSource, /data-participation-upload="gamer"/);
  assert.match(appSource, /Subir Excel/);
  assert.match(appSource, /renderUploadBars\("Participación por género"/);
  assert.match(appSource, /\["gamer", "representativos"\]\.includes\(areaId\)/);
  assert.match(appSource, /segmentedNav\.hidden = isPresentation \|\| isMentors \|\| isGamer/);
  assert.match(planSource, /gamer: \["student-master", "gamer"\]/);
  assert.match(styles, /\.gamer-dashboard-header \{/);
  assert.match(styles, /\.gamer-kpi-grid \{/);
});
