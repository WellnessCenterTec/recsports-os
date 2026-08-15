# Semana Tec Grade Card Source Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Semana Tec group cards calculate student and academic metrics from structured grade rows while using official programming only for group identity, professor, CRN, and week.

**Architecture:** Add a dependency-free UMD helper that classifies grades, preserves existing grades during roster replacement, and summarizes grade rows against program offerings. Keep Supabase reads/writes and HTML rendering in `site/app.js`, loading the helper before the monolithic app.

**Tech Stack:** Browser JavaScript, CommonJS-compatible UMD modules, Node.js built-in test runner, Supabase JavaScript client.

## Global Constraints

- Keep groups 215 and 216 separate.
- Do not modify ordinary Clases Deportivas or `class_grades`.
- Do not parse group PDF files or include them in metrics.
- Do not add or migrate Supabase tables.
- Preserve existing nonempty grades when a roster upload has a blank grade for the same period, matrícula, and group.
- Use official programming only for period, group, CRN, professor, and week.
- Treat unknown grade text and invalid numeric values as pending.
- Treat `BAJA` as a separate status.

---

### Task 1: Pure Semana Tec grade-card calculations

**Files:**
- Create: `site/semana-tec-grade-cards.js`
- Create: `tests/semana-tec-grade-cards.test.mjs`

**Interfaces:**
- Produces: `classifySemanaTecGrade(value)` returning `{ outcome, numeric }`.
- Produces: `buildSemanaTecGroupSummaries(gradeRows, programRows)` returning group summaries sorted by numeric group.
- Group summaries contain `group`, `week`, `periodo`, `crn`, `professor`, `total`, `female`, `male`, `unspecified`, `average`, `approved`, `failed`, `bajas`, and `pending`.

- [ ] **Step 1: Write failing classification tests**

Add literal assertions covering numeric approval/failure, explicit Spanish statuses, `BAJA`, blank values, unknown text, and numbers outside 0–100.

- [ ] **Step 2: Run classification tests and verify RED**

Run:

```bash
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/semana-tec-grade-cards.test.mjs
```

Expected: FAIL because `site/semana-tec-grade-cards.js` does not exist.

- [ ] **Step 3: Implement the minimal classifier**

Create a dependency-free UMD module. Normalize accents and case internally. Recognize only the statuses defined in the approved spec; return pending for all other values.

- [ ] **Step 4: Run classification tests and verify GREEN**

Run the Task 1 test command and expect all classification tests to pass.

- [ ] **Step 5: Write failing group-summary tests**

Use hand-checked fixtures for groups 215 and 216. Assert that groups remain separate, programming supplies week/professor/CRN, student totals and results come only from grade rows, duplicate matrícula rows do not inflate totals and the last row wins, unknown gender increments `unspecified`, and textual outcomes do not create a numeric average.

- [ ] **Step 6: Run group-summary tests and verify RED**

Run the Task 1 test command and expect failure because `buildSemanaTecGroupSummaries` is missing.

- [ ] **Step 7: Implement the minimal summary builder**

Index program offerings by normalized `periodo|grupo`. Deduplicate grade rows by normalized `periodo|matricula|grupo`, keeping the last occurrence. Create groups only from grade rows, then overlay matching program identity fields without adding students or results from programming.

- [ ] **Step 8: Run Task 1 tests and verify GREEN**

Run the Task 1 test command and expect all tests to pass.

- [ ] **Step 9: Commit Task 1**

```bash
git add site/semana-tec-grade-cards.js tests/semana-tec-grade-cards.test.mjs
git commit -m "fix: derive Semana Tec cards from grades"
```

### Task 2: Preserve grades during roster replacement

**Files:**
- Modify: `site/semana-tec-grade-cards.js`
- Modify: `tests/semana-tec-grade-cards.test.mjs`

**Interfaces:**
- Produces: `preserveSemanaTecGrades(incomingRows, existingRows)` returning cloned incoming rows with protected grade values.

- [ ] **Step 1: Write failing preservation tests**

Assert with literal fixtures that a blank incoming grade keeps the existing grade for the same logical key, a nonempty incoming grade replaces it, unrelated students remain unchanged, and input arrays are not mutated.

- [ ] **Step 2: Run preservation tests and verify RED**

Run the Task 1 test command and expect failure because `preserveSemanaTecGrades` is missing.

- [ ] **Step 3: Implement minimal preservation**

Build an existing-grade map by normalized `periodo|matricula|grupo`. Clone every incoming row and copy the old grade only when the incoming grade is empty.

- [ ] **Step 4: Run preservation tests and verify GREEN**

Run the Task 1 test command and expect all tests to pass.

- [ ] **Step 5: Commit Task 2**

```bash
git add site/semana-tec-grade-cards.js tests/semana-tec-grade-cards.test.mjs
git commit -m "fix: preserve Semana Tec grades on roster upload"
```

### Task 3: Connect the helper to WellSync

**Files:**
- Modify: `site/index.html`
- Modify: `site/app.js`
- Modify: `tests/semana-tec-grade-cards.test.mjs`

**Interfaces:**
- Consumes: `window.WellSyncSemanaTecGradeCards.buildSemanaTecGroupSummaries`.
- Consumes: `window.WellSyncSemanaTecGradeCards.preserveSemanaTecGrades`.

- [ ] **Step 1: Write failing integration tests**

Read `site/index.html` and `site/app.js` as integration boundaries. Assert that the helper loads before `app.js`, that `semanaTecGroupSummaries` delegates grade rows plus `semanaTecProgramRows`, and that `importSemanaTecDraft` preserves grades before writing the new snapshot.

- [ ] **Step 2: Run integration tests and verify RED**

Run the Task 1 test command and expect the new integration assertions to fail.

- [ ] **Step 3: Load and use the helper**

Add the versioned helper script before `app.js`. Replace the in-file group aggregation with delegation to the helper. Before `saveSemanaTecRowsCloud`, merge the draft with the existing `semanaTecRows`; use the protected rows both for the cloud write and the new local state.

- [ ] **Step 4: Render explicit unknown gender and bajas**

Keep the current card layout. Add `sin especificar` only when `group.unspecified > 0`, and `bajas` only when `group.bajas > 0`.

- [ ] **Step 5: Run focused tests and syntax checks**

```bash
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check site/semana-tec-grade-cards.js
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check site/app.js
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/semana-tec-grade-cards.test.mjs
```

Expected: all commands exit 0.

- [ ] **Step 6: Commit Task 3**

```bash
git add site/index.html site/app.js tests/semana-tec-grade-cards.test.mjs
git commit -m "fix: connect Semana Tec cards to grade metrics"
```

### Task 4: Full regression verification

**Files:**
- Verify only.

**Interfaces:**
- Consumes all outputs from Tasks 1–3.

- [ ] **Step 1: Run the complete verification suite**

```bash
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check site/app.js
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check site/semana-tec-grade-cards.js
/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/*.test.mjs
git diff --check main...HEAD
git status --short
```

Expected: syntax checks exit 0, all tests pass, `git diff --check` reports no whitespace errors, and the only branch changes are the approved spec, plan, helper, tests, and wiring.

- [ ] **Step 2: Review the final diff against the spec**

Confirm each acceptance item from `docs/superpowers/specs/2026-08-15-semana-tec-grade-card-source-design.md` has either a behavioral test or direct diff evidence. Do not publish or modify Supabase.
