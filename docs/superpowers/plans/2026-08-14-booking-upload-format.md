# Booking Upload Format Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make **Subir programación Booking** accept `booking (1).xlsx` directly and publish the verified behavior to the public WellSync site.

**Architecture:** Add a small browser/CommonJS module dedicated to detecting and normalizing Booking worksheet grids. Route only Booking Excel uploads through it, then reuse the existing schedule validator and persistence flow.

**Tech Stack:** Static JavaScript, SheetJS browser bundle, Node.js built-in test runner, GitHub, Vercel.

## Global Constraints

- Do not change Programación Oficial, Archivo Maestro, Calificaciones, Booking reservations, or unrelated uploaders.
- Preserve existing flat Booking CSV and Excel compatibility.
- Do not commit the user workbook or professor data as a fixture.
- Ignore summary rows that contain only `Horas totales`; preserve genuinely incomplete session rows so the validator reports them.
- Treat `Juves` as `Jueves` only in the Booking import path.
- Preserve the original Excel row number in validation messages.
- Completion requires separate proof for local implementation, GitHub, Vercel, and the public WellSync UI.

---

### Task 1: Booking worksheet normalizer

**Files:**
- Create: `site/booking-schedule-import.js`
- Create: `tests/booking-schedule-import.test.mjs`

**Interfaces:**
- Consumes: a SheetJS-style two-dimensional worksheet grid.
- Produces: `bookingRowsFromGrid(grid): object[]`, with canonical keys `Profesor`, `Actividad`, `Dia`, `Hora inicio`, `Hora fin`, `Instalacion`, `Frecuencia`, `Horas totales`, and `__rowNumber`.

- [ ] **Step 1: Write the failing tests**

Create tests using an anonymized grid that reproduces the real structure:

```js
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const bookingImport = require("../site/booking-schedule-import.js");

const realShapeGrid = [
  ["", "", "", "", "", "", "", ""],
  ["profesor", "actividad", "dia", "hora_inicio", "hora_fin", "instalacion", "frecuencia", "Horas totales"],
  ["Profesora Uno", "Tenis", "Lunes y Juves", "13:00", "14:00", "CDB2", "Lunes y Juves", 2],
  ["Profesor Dos", "Yoga", "Lunes", "18:30", "20:00", "Sala Yoga", "Lunes", 1.5],
  ["", "", "", "", "", "", "", 3]
];

test("detects row 2 headers and maps snake_case Booking columns", () => {
  const rows = bookingImport.bookingRowsFromGrid(realShapeGrid);
  assert.equal(rows.length, 2);
  assert.deepEqual(rows[0], {
    Profesor: "Profesora Uno",
    Actividad: "Tenis",
    Dia: "Lunes y Jueves",
    "Hora inicio": "13:00",
    "Hora fin": "14:00",
    Instalacion: "CDB2",
    Frecuencia: "Lunes y Jueves",
    "Horas totales": 2,
    __rowNumber: 3
  });
});

test("ignores a total-only footer row", () => {
  assert.equal(bookingImport.bookingRowsFromGrid(realShapeGrid).length, 2);
});

test("keeps incomplete session rows for the existing validator", () => {
  const grid = [...realShapeGrid.slice(0, 2), ["Profesora Uno", "", "Lunes", "09:00", "10:00", "Gimnasio", "Lunes", 1]];
  assert.equal(bookingImport.bookingRowsFromGrid(grid)[0].Actividad, "");
});

test("throws a clear error when no Booking header row exists", () => {
  assert.throws(() => bookingImport.bookingRowsFromGrid([["sin", "encabezados"]]), /encabezados de Booking/i);
});
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `node --test tests/booking-schedule-import.test.mjs`

Expected: FAIL because `site/booking-schedule-import.js` does not exist.

- [ ] **Step 3: Implement the minimal normalizer**

Create a UMD/CommonJS-compatible module with:

```js
function normalizeKey(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function normalizeBookingFrequency(value) {
  return String(value || "").replace(/\bjuves\b/gi, "Jueves").trim();
}
```

Define exact alias groups for professor, activity, day, start, end, installation, frequency, and total. Find the first row within the first 20 rows containing professor, activity, a day/frequency field, start, and installation. Map all later rows to canonical keys, set `__rowNumber = index + 1`, skip empty rows and total-only rows, and retain incomplete session rows that contain any identity/schedule field.

- [ ] **Step 4: Run the focused test and verify GREEN**

Run: `node --test tests/booking-schedule-import.test.mjs`

Expected: 4 tests pass, 0 fail.

- [ ] **Step 5: Commit the normalizer**

```bash
git add site/booking-schedule-import.js tests/booking-schedule-import.test.mjs
git commit -m "Add Booking worksheet normalizer"
```

---

### Task 2: Integrate the normalizer into the Booking upload flow

**Files:**
- Modify: `site/index.html:178-185`
- Modify: `site/app.js:1891-1990`
- Modify: `tests/booking-schedule-import.test.mjs`

**Interfaces:**
- Consumes: `window.WellSyncBookingScheduleImport.bookingRowsFromGrid(grid)` from Task 1.
- Produces: `rowsFromBookingScheduleFile(file): Promise<object[]>`, used only when `type === "booking"`.

- [ ] **Step 1: Add failing integration assertions**

Extend the test file to assert that:

```js
const indexSource = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
const appSource = readFileSync(new URL("../site/app.js", import.meta.url), "utf8");

assert.match(indexSource, /booking-schedule-import\.js\?v=20260814-booking-import-v1/);
assert.match(appSource, /rowsFromBookingScheduleFile/);
assert.match(appSource, /type === "booking"\s*\?\s*await rowsFromBookingScheduleFile\(file\)/);
assert.match(appSource, /raw\.__rowNumber \|\| index \+ 2/);
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `node --test tests/booking-schedule-import.test.mjs`

Expected: FAIL because the script reference and Booking-specific route are absent.

- [ ] **Step 3: Wire the browser adapter and preserve source rows**

Add the new script before `app.js` in `site/index.html`. In `site/app.js`, add:

```js
async function rowsFromBookingScheduleFile(file) {
  const ext = file.name.split(".").pop().toLowerCase();
  if (!["xlsx", "xls"].includes(ext)) return rowsFromScheduleFile(file);
  if (!window.XLSX || !window.WellSyncBookingScheduleImport) {
    throw new Error("No está disponible el lector de Booking");
  }
  const workbook = window.XLSX.read(await file.arrayBuffer(), { type: "array" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const grid = window.XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "", raw: false });
  return window.WellSyncBookingScheduleImport.bookingRowsFromGrid(grid);
}
```

In `handleScheduleUpload`, route Booking through this function and leave official uploads on `rowsFromScheduleFile`. In `parseScheduleRows`, use `raw.__rowNumber || index + 2` for errors and the stored `rowNumber`. Surface the specific missing-header error in the Booking catch branch.

- [ ] **Step 4: Run focused tests and syntax checks**

Run:

```bash
node --test tests/booking-schedule-import.test.mjs
node --check site/booking-schedule-import.js
node --check site/app.js
```

Expected: all tests pass and both syntax checks exit 0.

- [ ] **Step 5: Commit the integration**

```bash
git add site/index.html site/app.js tests/booking-schedule-import.test.mjs
git commit -m "Accept exported Booking workbook format"
```

---

### Task 3: Verify the exact workbook and prevent regressions

**Files:**
- Create: `work/verify-booking-upload.mjs` (local verification helper; do not commit)
- Modify only if a test exposes a defect: files from Tasks 1-2.

**Interfaces:**
- Consumes: `/Users/yankarloguerrero/Downloads/booking (1).xlsx` and the production modules.
- Produces: evidence of 16 normalized source rows, 24 expanded sessions, and zero validation errors.

- [ ] **Step 1: Run the new module against the exact workbook**

Load `site/assets/vendor/xlsx.mini.min.js` in a Node `vm` context, read the workbook bytes, convert the first sheet with `{ header: 1, defval: "", raw: false }`, and pass the grid to `bookingRowsFromGrid`.

- [ ] **Step 2: Assert the exact result**

The helper must assert:

```js
assert.equal(rows.length, 16);
assert.equal(rows.at(-1).Actividad, "Pilates");
assert.equal(rows.filter((row) => /Juves/i.test(row.Dia)).length, 0);
assert.equal(rows.reduce((sum, row) => sum + daysFromFrequency(row.Dia).length, 0), 24);
```

It must also run the same activity/day/time/installation checks as `parseScheduleRows` and assert zero errors.

- [ ] **Step 3: Run the full local checks**

Run:

```bash
node --test tests/*.test.mjs
node --check site/app.js
node --check site/booking-schedule-import.js
git diff --check
```

Expected: all tests pass, syntax checks exit 0, and no whitespace errors are reported.

- [ ] **Step 4: Serve the site and reproduce the upload locally**

Open the local site, navigate to Clases Deportivas → Horarios, use **Subir programación Booking** with the exact workbook, and verify 24 valid Booking sessions and no active error panel.

- [ ] **Step 5: Commit any test-driven correction**

If Step 1-4 required a correction, stage only the affected Task 1-2 files and commit with `Fix exact Booking workbook import`. If no correction was needed, do not create an empty commit.

---

### Task 4: Publish and prove production

**Files:**
- No new source files unless publication reveals a verified defect.

**Interfaces:**
- Consumes: verified branch `agent/booking-upload-format`.
- Produces: merged GitHub change, successful canonical Vercel deployment, and public UI evidence.

- [ ] **Step 1: Confirm publish prerequisites and scope**

Run:

```bash
git status -sb
git diff main...HEAD --check
gh --version
gh auth status
```

Expected: only intended commits are present and GitHub CLI is authenticated.

- [ ] **Step 2: Push and open the pull request**

Push `agent/booking-upload-format`, open a PR to `main`, and include root cause, behavior, tests, and exact-workbook result in the body.

- [ ] **Step 3: Merge and synchronize**

After required checks pass, merge the PR and confirm `origin/main` contains the merge commit.

- [ ] **Step 4: Verify canonical Vercel deployment**

Confirm the `recsports-wellness` production deployment from repository root with Root Directory `site/`. If automatic deployment is not current, run the authenticated production deploy from the repository root.

- [ ] **Step 5: Verify public assets and behavior**

Confirm `https://recsports-wellness.vercel.app/booking-schedule-import.js` returns the new module and that public `index.html` references version `20260814-booking-import-v1`. Then use the public UI to upload the exact workbook and verify 24 sessions with no active errors.

- [ ] **Step 6: Report four statuses separately**

Report:

- Local implementation and test evidence.
- GitHub branch/PR/merge with direct link.
- Vercel production deployment with direct link.
- Public WellSync upload verification with direct link and observed result.
