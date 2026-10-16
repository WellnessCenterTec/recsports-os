import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("Clases shows live teacher presence from official scheduling before indicators", () => {
  assert.match(source, /function renderClassesDashboard\(\) \{[\s\S]*renderClassLivePresenceTimeline\(\)[\s\S]*renderClassDisciplineIndicators\(\)/);
  assert.match(source, /function classLiveScheduleRows\([\s\S]*scheduleState\.official/);
  assert.match(source, /timeZone: "America\/Monterrey"/);
  assert.match(source, /id="classLivePeriod"/);
  assert.match(source, /id="classLiveDay"/);
  assert.match(source, /id="classLiveHour"/);
  assert.match(source, /classLivePeriod === "todos"/);
  assert.match(source, /function classLiveTeacherProfile/);
  assert.match(source, /const exactProfile = index\.byName\.get\(key\)/);
  assert.match(source, /sharedParts >= requiredParts/);
  assert.match(source, /class-live-teacher-photo/);
  assert.match(source, /activeArea === "clases" && activeView === "dashboard"/);
  assert.match(styles, /\.class-live-presence \{/);
  assert.match(styles, /\.class-live-track::before \{/);
  assert.match(styles, /grid-template-columns: repeat\(5, minmax\(0, 1fr\)\)/);
});
