# Weekly Executive Report Approved Advance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the approved WellSync executive-report advance: cumulative Wellness/EMIS gym weeks controlled by the selected report week, plus an eight-tournament Intramuros 2 × 4 tile grid.

**Architecture:** Keep the existing static `site/app.js` report and data-loading contracts. Add one pure gym aggregation function and one focused Intramuros renderer, then update only the two report panels and their scoped CSS. No database, permission, navigation, or module changes are required.

**Tech Stack:** Static HTML/CSS/JavaScript, Node.js built-in test runner, GitHub, Vercel.

## Global Constraints

- Default report selection is Semana 1.
- The report selector exposes Semana 1 through Semana 20.
- A selected week N renders only S1 through SN for both Wellness and EMIS.
- Wellness is blue above EMIS; EMIS is orange.
- Intramuros keeps its existing panel and replaces bars with at most eight tiles in two columns and four rows.
- All values are calculated from the current WellSync module data; no preview values are hard-coded into production.
- Preserve all other report components, navigation, roles, persistence, and module behavior.

---

### Task 1: Gym cumulative week lanes

**Files:**
- Modify: `site/app.js:662,10362-10370,10691-10766`
- Modify: `site/styles.css:6307-6341,9977-9990`
- Create: `tests/executive-weekly-report.test.mjs`

**Interfaces:**
- Consumes: `gymAttendanceRecords`, `normalizeGymSite(value)`, `executiveReportState.week`.
- Produces: `executiveGymWeeklyByFacility(rows, selectedWeek)` returning `{ selectedWeek, Wellness, EMIS }`, where each facility is an array of `{ label, value }` from S1 through the selected week.
- Produces: `renderExecutiveGymWeekly(series)` returning the two labeled report lanes.

- [ ] **Step 1: Write the failing gym behavior test**

```js
test("gym report shows only weeks through the selected cut for Wellness and EMIS", async () => {
  const aggregate = loadAppFunction("executiveGymWeeklyByFacility", "executiveIntramurosRows", ["normalizeGymSite"], [normalizeGymSite]);
  const series = aggregate([
    { week_number: 1, facility: "Wellness", attendee_count: 11 },
    { week_number: 2, facility: "Wellness", attendee_count: 9 },
    { week_number: 1, facility: "EMIS", attendee_count: 2 },
    { week_number: 3, facility: "EMIS", attendee_count: 5 }
  ], 2);
  assert.deepEqual(series.Wellness.map((row) => row.value), [11, 9]);
  assert.deepEqual(series.EMIS.map((row) => row.value), [2, 0]);
  assert.equal(series.Wellness.length, 2);
  assert.equal(series.EMIS.length, 2);
});
```

- [ ] **Step 2: Run the focused test and confirm the missing function fails**

Run: `node --test tests/executive-weekly-report.test.mjs`

Expected: FAIL because `executiveGymWeeklyByFacility` does not exist.

- [ ] **Step 3: Implement the smallest facility-aware aggregation and renderer**

```js
function executiveGymWeeklyByFacility(rows = gymAttendanceRecords, selectedWeek = executiveReportState.week) {
  const weekLimit = Math.max(1, Math.min(20, Number(selectedWeek) || 1));
  const counts = { Wellness: new Map(), EMIS: new Map() };
  rows.forEach((row) => {
    const week = Number(row.week_number) || 0;
    const facility = normalizeGymSite(row.facility || row.sitio);
    if (!counts[facility] || week < 1 || week > weekLimit) return;
    const value = Number(row.attendee_count ?? row.cantidad ?? row.total ?? 0) || 0;
    counts[facility].set(week, (counts[facility].get(week) || 0) + value);
  });
  const build = (facility) => Array.from({ length: weekLimit }, (_, index) => ({ label: `S${index + 1}`, value: counts[facility].get(index + 1) || 0 }));
  return { selectedWeek: weekLimit, Wellness: build("Wellness"), EMIS: build("EMIS") };
}
```

- [ ] **Step 4: Set Semana 1 as default, expose 20 options, and render both lanes**

Replace the existing combined gym chart call with `renderExecutiveGymWeekly(executiveGymWeeklyByFacility())`. Make `renderExecutiveWeeklyBars` use `--exec-week-count` so one selected week does not reserve 18 empty columns. Update the report header from `de 18` to `de 20`.

- [ ] **Step 5: Run the focused test and confirm it passes**

Run: `node --test tests/executive-weekly-report.test.mjs`

Expected: PASS for aggregation, default week, selector count, lane order, colors, and no future-week markup.

### Task 2: Intramuros tournament tile grid

**Files:**
- Modify: `site/app.js:10372-10380,10777-10783`
- Modify: `site/styles.css:6099-6155`
- Modify: `tests/executive-weekly-report.test.mjs`

**Interfaces:**
- Consumes: `executiveIntramurosRows()` output `{ label, value }[]`.
- Produces: `renderExecutiveTournamentGrid(rows)` with an aggregate header and up to eight `.exec-tournament-tile` elements.

- [ ] **Step 1: Write the failing Intramuros renderer test**

```js
test("Intramuros uses an eight-tile two-column grid without mini bars", async () => {
  const render = loadAppFunction("renderExecutiveTournamentGrid", "renderExecutiveWeeklyBars", ["escapeHtml"], [(value) => String(value)]);
  const rows = Array.from({ length: 8 }, (_, index) => ({ label: `Torneo ${index + 1}`, value: index + 10 }));
  const html = render(rows);
  assert.equal((html.match(/exec-tournament-tile/g) || []).length, 8);
  assert.match(html, /8<\/strong><span>Torneos/);
  assert.match(html, /108<\/strong><span>Registros/);
  assert.doesNotMatch(html, /exec-mini-bar-row/);
});
```

- [ ] **Step 2: Run the focused test and confirm the missing renderer fails**

Run: `node --test tests/executive-weekly-report.test.mjs`

Expected: FAIL because `renderExecutiveTournamentGrid` does not exist.

- [ ] **Step 3: Implement the renderer and expand the source ranking to eight tournaments**

Render two summary values followed by the tile list. Change `executiveIntramurosRows()` from `.slice(0, 6)` to `.slice(0, 8)` and replace only the Intramuros panel body.

- [ ] **Step 4: Add the scoped 2 × 4 tile styles**

Add `.exec-tournament-summary`, `.exec-tournament-grid`, and `.exec-tournament-tile` styles. Keep `.exec-grid.three` unchanged so Booking, Classes, and Intramuros remain aligned.

- [ ] **Step 5: Run the focused test and confirm it passes**

Run: `node --test tests/executive-weekly-report.test.mjs`

Expected: PASS with eight tiles, correct aggregate labels, and no mini-bar markup.

### Task 3: Regression, visual verification, and publication

**Files:**
- Verify: `site/app.js`
- Verify: `site/styles.css`
- Verify: `tests/*.test.mjs`
- Verify: `vercel.json`, `.vercel/project.json`

**Interfaces:**
- Consumes: the completed static site and authenticated repository/deployment configuration.
- Produces: a pushed GitHub branch/merge, canonical Vercel production deployment, and public UI evidence.

- [ ] **Step 1: Run syntax and all automated tests**

Run: `node --check site/app.js && node --test tests/*.test.mjs`

Expected: syntax exit 0 and all tests pass with zero failures.

- [ ] **Step 2: Inspect the report locally at Semana 1 and Semana 8**

Verify that Semana 1 shows one Wellness and one EMIS week, Semana 8 shows exactly eight in each lane, Intramuros shows a 2 × 4 grid, and unrelated navigation remains available.

- [ ] **Step 3: Commit and push only the approved files**

```bash
git add docs/superpowers/specs/2026-08-17-weekly-executive-report-design.md docs/superpowers/plans/2026-08-17-weekly-executive-report-approved-advance.md site/app.js site/styles.css tests/executive-weekly-report.test.mjs
git commit -m "feat: refine weekly executive report"
git push -u origin agent/weekly-executive-report
```

- [ ] **Step 4: Merge the reviewed branch and deploy the canonical Vercel project**

Create the pull request against `main`, merge it after checks, synchronize the deployment checkout, and run the production deployment from the parent directory configured to publish `site/`.

- [ ] **Step 5: Verify repository, deployment, assets, and public UI separately**

Confirm the merged commit on GitHub, canonical Vercel production status, matching public `app.js`/`styles.css` content, and the live Reporte General interactions for Semana 1, Semana 8, and Intramuros.
