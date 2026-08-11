# Student Database Template Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a tested CSV template download beside the existing student database upload control without changing upload or persistence behavior.

**Architecture:** A small browser/CommonJS-compatible helper owns the template contract and action markup. The existing app uses the helper for rendering and downloads its CSV through the established `downloadBlob` utility.

**Tech Stack:** Static HTML, vanilla JavaScript, CSS, Node test runner.

## Global Constraints

- Modify only `Reporte General -> Reportes -> Base de datos de alumnos` behavior.
- Do not modify Supabase, upload processing, validations, dashboards, reports, or other upload modules.
- Preserve the existing `Cargar base de datos` behavior.

---

### Task 1: Template helper and tests

**Files:**
- Create: `site/student-database-template.js`
- Create: `tests/student-database-template.test.mjs`

**Interfaces:**
- Produces: `templateCsv(): string`, `templateFileName: string`, and `renderActions({ authorized: boolean, importing: boolean }): string`.

- [ ] Write tests asserting the exact filename, seven-column CSV header, button order, and disabled upload state.
- [ ] Run the focused test and confirm it fails because the helper does not exist.
- [ ] Implement the smallest helper that satisfies the contract.
- [ ] Run the focused test and confirm it passes.

### Task 2: App integration and responsive layout

**Files:**
- Modify: `site/index.html`
- Modify: `site/app.js`
- Modify: `site/styles.css`
- Test: `tests/student-database-template.test.mjs`

**Interfaces:**
- Consumes: `window.WellSyncStudentDatabaseTemplate` from Task 1.

- [ ] Add integration assertions for script order, click wiring, horizontal alignment, and mobile stacking.
- [ ] Run the focused test and confirm the new assertions fail.
- [ ] Load the helper before `app.js`, render its actions in the existing report row, and wire the download to `downloadBlob` plus the existing toast.
- [ ] Add only the scoped action-container styles needed for equal height and responsive stacking.
- [ ] Run the focused and full suites plus syntax checks.

### Task 3: Publish and production verification

**Files:**
- No additional source files.

- [ ] Review `git diff` and stage only the documented files.
- [ ] Commit with a focused message and push the feature branch.
- [ ] Open the normal repository pull request and merge/deploy according to repository access.
- [ ] Verify repository status, canonical Vercel deployment, public asset contents, and the live UI separately.

