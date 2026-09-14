import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const app = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("Gimnasio embeds the live GYM-MTY occupancy panel below manual attendance history", () => {
  assert.match(app, /const GYM_LIVE_OCCUPANCY_URL = "https:\/\/hash-dependence-latitude-dubai\.trycloudflare\.com\/app\/";/);
  assert.match(app, /function renderGymLiveOccupancy\(\)[\s\S]*?<iframe[\s\S]*?title="Aforo actual del gimnasio GYM-MTY"[\s\S]*?loading="lazy"[\s\S]*?sandbox="allow-forms allow-scripts allow-same-origin"/);

  const attendanceView = app.slice(
    app.indexOf("function renderGymAttendanceRegistration()"),
    app.indexOf("function canDeleteGymAttendance(")
  );
  assert.match(attendanceView, /Historial de cargas[\s\S]*?Registros manuales[\s\S]*?\$\{renderGymLiveOccupancy\(\)\}/);
  assert.match(styles, /\.gym-live-occupancy-frame\s*\{[^}]*height:\s*360px;[^}]*overflow:\s*hidden;/s);
  assert.match(styles, /@media \(max-width: 1120px\)[\s\S]*?\.gym-live-occupancy-heading\s*\{[^}]*flex-direction:\s*column;/s);
});
