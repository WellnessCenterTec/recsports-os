import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const appSource = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const indexSource = fs.readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
const participationVerificationSource = fs.readFileSync(new URL("../site/participation-verification.js", import.meta.url), "utf8");
const rootVercel = JSON.parse(fs.readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));
const siteVercel = JSON.parse(fs.readFileSync(new URL("../site/vercel.json", import.meta.url), "utf8"));

function headerValue(config, source) {
  return config.headers
    .find((entry) => entry.source === source)
    ?.headers.find((header) => header.key === "Cache-Control")
    ?.value;
}

test("versioned static assets are reusable while shell and environment stay fresh", () => {
  for (const config of [rootVercel, siteVercel]) {
    assert.equal(headerValue(config, "/(.*)\\.(js|css)"), "public, max-age=31536000, immutable");
    assert.equal(headerValue(config, "/assets/(.*)"), "public, max-age=31536000, immutable");
    assert.equal(headerValue(config, "/app.js"), "public, max-age=31536000, immutable");
    assert.equal(headerValue(config, "/vivencia-forms-preview.json"), "public, max-age=31536000, immutable");
    assert.equal(headerValue(config, "/env.js"), "no-store, max-age=0");
    assert.equal(headerValue(config, "/"), "no-store, max-age=0");
    assert.equal(headerValue(config, "/index.html"), "no-store, max-age=0");
  }
  assert.match(indexSource, /module-data-plan\.js\?v=20261013-performance-phase2a-v1/);
  assert.match(indexSource, /app\.js\?v=20261013-performance-phase2a-v1/);
});

test("student lookup uses the normalized matricula index", () => {
  assert.match(appSource, /let cloudStudentsByMatricula = new Map\(\)/);
  assert.match(appSource, /cloudStudentsByMatricula = new Map\([\s\S]*cloudStudentDatabase\.map/);
  assert.match(appSource, /function findStudentInDatabase\(matricula\)[\s\S]*return cloudStudentsByMatricula\.get\(clean\) \|\| null/);
});

test("global search render is debounced", () => {
  assert.match(appSource, /let globalSearchRenderTimer = null/);
  assert.match(appSource, /if \(id === "globalSearch"\) \{[\s\S]*setTimeout\(\(\) => render\(\), 180\);[\s\S]*return;/);
});

test("cached snapshot serialization yields to browser idle time", () => {
  assert.match(appSource, /window\.requestIdleCallback\(persistSnapshot, \{ timeout: 800 \}\)/);
  assert.match(appSource, /window\.cancelIdleCallback\(viewSnapshotIdleId\)/);
});

test("Vivencia and Communication filter large detail queries before download", () => {
  const vivenciaSource = appSource.slice(
    appSource.indexOf("async function loadVivenciaParticipantDetails"),
    appSource.indexOf("async function loadCommunicationEvents")
  );
  const communicationSource = appSource.slice(
    appSource.indexOf("async function loadCommunicationEvents"),
    appSource.indexOf("function parsePlanningCsv")
  );

  assert.match(vivenciaSource, /\.gte\("event_date", start\)[\s\S]*\.lte\("event_date", end\)/);
  assert.match(vivenciaSource, /\.from\("vivencia_participant_details"\)[\s\S]*\.in\("event_id", eventIds\)/);
  assert.doesNotMatch(vivenciaSource, /\.from\("vivencia_participant_details"\)\s*\.select\("\*"\)/);
  assert.match(communicationSource, /\.gte\("event_date", start\)[\s\S]*\.lte\("event_date", end\)/);
  assert.match(communicationSource, /\.from\("communication_participants"\)[\s\S]*\.in\("event_id", activeEventIdList\)/);
  assert.doesNotMatch(communicationSource, /\.from\("communication_participants"\)\s*\.select\("\*"\)/);
});

test("Vivencia renders its versioned fallback before refreshing Google in the background", () => {
  const source = appSource.slice(
    appSource.indexOf("async function loadVivenciaFormsFallbackFeed"),
    appSource.indexOf("async function loadVivenciaEvents")
  );
  assert.match(source, /v=20261013-performance-phase2a-v1/);
  assert.match(source, /cache: "force-cache"/);
  assert.match(source, /startVivenciaFormsFeedRefresh\(feedUrl, \{ hasFallback: fallbackLoaded \}\)/);
  assert.match(source, /if \(!fallbackLoaded && refreshPromise\) await refreshPromise/);
  assert.doesNotMatch(source, /fallbackUrl[^\n]*fresh=\$\{Date\.now\(\)\}/);
});

test("the spreadsheet runtime is loaded only when an Excel workflow needs it", () => {
  assert.doesNotMatch(indexSource, /<script src="\.\/assets\/vendor\/xlsx\.mini\.min\.js/);
  assert.match(indexSource, /ensureSpreadsheet:\s*\(\) => loadScript\(/);
  assert.match(indexSource, /if \(pending\.has\(key\)\) return pending\.get\(key\)/);
  assert.match(appSource, /async function ensureSpreadsheetLibrary\(\)/);
  assert.match(appSource, /async function rowsFromScheduleFile\(file\)[\s\S]*const XLSX = await ensureSpreadsheetLibrary\(\)/);
  assert.match(appSource, /async function exportCollaboratorTableExcel\(\)[\s\S]*const XLSX = await ensureSpreadsheetLibrary\(\)/);
  assert.match(participationVerificationSource, /if \(!root\.XLSX\) await root\.WellSyncAssets\?\.ensureSpreadsheet\?\.\(\)/);
});
