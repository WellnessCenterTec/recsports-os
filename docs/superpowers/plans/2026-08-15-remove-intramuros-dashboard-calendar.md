# Remove Intramuros Dashboard Calendar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the operational calendar from the Intramuros Dashboard while preserving every other Dashboard component and module navigation path.

**Architecture:** Keep the shared planning-calendar renderer unchanged and stop composing it only inside `renderIntramurosDashboard()`. Protect the boundary with a source-level regression test that inspects this renderer independently and asserts both calendar absence and preservation of representative Dashboard sections.

**Tech Stack:** Static JavaScript application, Node.js built-in test runner, Node.js syntax checker.

## Global Constraints

- Remove the calendar only from the Intramuros Dashboard.
- Preserve filters, KPIs, executive charts, tournament cards, tournament expediente, participant table, and all Intramuros navigation.
- Do not modify shared calendar functions, data, styles, or calendar behavior in other modules.
- Do not publish or deploy this change.

---

### Task 1: Protect and remove the Intramuros Dashboard calendar

**Files:**
- Create: `tests/intramuros-dashboard-calendar.test.mjs`
- Modify: `site/app.js:11545`

**Interfaces:**
- Consumes: `site/app.js` as the production source and the existing `renderIntramurosDashboard()` renderer.
- Produces: an Intramuros Dashboard renderer that no longer calls `renderPlanningAreaDashboard(...)`, plus a regression contract for its retained sections.

- [ ] **Step 1: Write the failing regression test**

Create `tests/intramuros-dashboard-calendar.test.mjs`:

```js
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function extractFunction(source, name, nextName) {
  const start = source.indexOf(`function ${name}(`);
  const end = source.indexOf(`\nfunction ${nextName}(`, start + 1);
  assert.notEqual(start, -1, `${name} must exist`);
  assert.notEqual(end, -1, `${nextName} must follow ${name}`);
  return source.slice(start, end);
}

test("Intramuros Dashboard omits the calendar and preserves its remaining sections", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const dashboard = extractFunction(app, "renderIntramurosDashboard", "renderDashboard");

  assert.doesNotMatch(dashboard, /renderPlanningAreaDashboard\s*\(/);
  assert.doesNotMatch(dashboard, /intramurosCalendarLayer/);
  assert.match(dashboard, /intramuros-filter-grid/);
  assert.match(dashboard, /upload-kpi-grid/);
  assert.match(dashboard, /renderIntramurosExecutiveCharts\(rows\)/);
  assert.match(dashboard, /renderTournamentCards\(\)/);
  assert.match(dashboard, /renderTournamentExpediente\(\)/);
  assert.match(dashboard, /Participantes Intramuros/);
});
```

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```bash
node --test tests/intramuros-dashboard-calendar.test.mjs
```

Expected: FAIL on `renderPlanningAreaDashboard` because the calendar is still composed by `renderIntramurosDashboard()`.

- [ ] **Step 3: Implement the minimal production change**

In `site/app.js`, remove only this interpolation from the beginning of `renderIntramurosDashboard()`:

```js
${renderPlanningAreaDashboard(
  areas.find((item) => item.id === "intramuros") || { id: "intramuros", name: "Intramuros" },
  planningCalendarRows,
  planningCalendarLoaded,
  planningCalendarError,
  undefined,
  null,
  {
    compactHeader: true,
    extraActivities: intramurosRoleCalendarActivities(),
    layer: intramurosCalendarLayer,
    showLayerSelector: true,
    calendarOnly: true
  }
)}
```

Leave the surrounding `<section class="upload-center intramuros-dashboard">` and the following `intramuros-filter-grid` unchanged.

- [ ] **Step 4: Run focused checks and verify GREEN**

Run:

```bash
node --check site/app.js
node --test tests/intramuros-dashboard-calendar.test.mjs
```

Expected: syntax check exits 0 and the focused test reports 1 pass, 0 failures.

- [ ] **Step 5: Run the full automated verification**

Run:

```bash
node --test tests/*.test.mjs
npm run build
git diff --check
```

Expected: all tests pass, build exits 0, and the diff contains no whitespace errors.

- [ ] **Step 6: Verify the local Intramuros Dashboard behavior**

Serve `site/` locally, open WellSync, navigate to `Intramuros → Dashboard`, and confirm:

- No calendar header, layer selector, loading state, or monthly grid appears.
- Filters are the first functional Dashboard block.
- KPIs, charts, tournament cards, expediente, and participant table render.
- Intramuros navigation remains visible and usable.

- [ ] **Step 7: Commit the implementation**

```bash
git add site/app.js tests/intramuros-dashboard-calendar.test.mjs
git commit -m "fix: remove calendar from Intramuros dashboard"
```
