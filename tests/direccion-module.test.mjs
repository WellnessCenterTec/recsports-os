import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const appSource = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
const planSource = fs.readFileSync(new URL("../site/module-data-plan.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");

test("Dirección renders the seven requested area columns without data loading", () => {
  assert.match(appSource, /id: "direccion",[\s\S]*name: "Dirección"/);
  assert.match(appSource, /function renderDireccionDashboard\(\)/);
  ["Clases Deportivas", "Gimnasio", "Intramuros", "Vivencia", "Semana Tec", "Comunicación", "Diseño"].forEach((name) => {
    assert.match(appSource, new RegExp(`\\"${name}\\"`));
  });
  ["Ivonne Casas", "Pamela Treviño", "Omar Ruiz", "Jessica García", "Cecilia del Carmen González", "Wendy García"].forEach((name) => {
    assert.match(appSource, new RegExp(`\\"${name}\\"`));
  });
  assert.match(appSource, /area\.id === "direccion"\) return renderDireccionDashboard\(\)/);
  assert.match(appSource, /segmentedNav\.hidden = isPresentation \|\| isMentors \|\| isGamer/);
  assert.match(appSource, /async function direccionAccessCodeMatches\(value\)/);
  assert.match(appSource, /window\.crypto\.subtle\.digest\("SHA-256", payload\)/);
  assert.match(appSource, /targetArea === "direccion" && !direccionAccessGranted/);
  assert.match(appSource, /function openDireccionAccessGate\(\)/);
  assert.doesNotMatch(appSource, /"1717"/);
  assert.match(planSource, /direccion: \["collaborators"\]/);
  assert.match(styles, /\.direccion-columns \{/);
  assert.match(styles, /\.direccion-access-gate \{/);
  assert.match(styles, /repeat\(7, minmax\(220px, 1fr\)\)/);
});

test("Dirección includes a checklist with responsible photos, timestamps, and local resilience", () => {
  assert.match(appSource, /DIRECCION_CHECKLIST_STORAGE_KEY/);
  assert.match(appSource, /function loadDireccionChecklistLocal\(\)/);
  assert.match(appSource, /function direccionChecklistTimestamp\(value\)/);
  assert.match(appSource, /timeZone: "America\/Monterrey"/);
  assert.match(appSource, /from\("direccion_checklist_items"\)/);
  assert.match(appSource, /data-direccion-task-form/);
  assert.match(appSource, /data-direccion-task-complete/);
  assert.match(appSource, /classLiveTeacherProfile\(column\.photoName, photoIndex\)/);
  assert.match(styles, /\.direccion-responsible-photo/);
  assert.match(styles, /\.direccion-task-check/);
});

test("Dirección exposes Seguimiento, Historial, and Correo in its module navigation", () => {
  assert.match(appSource, /dashboardTab\.textContent = "Seguimiento"/);
  assert.match(appSource, /schedulesTab\.textContent = isDireccion \? "Historial"/);
  assert.match(appSource, /direccionEmailTab\.hidden = !isDireccion/);
  assert.match(appSource, /direccionEmailTab = \$\("#direccionEmailViewButton"\)/);
  assert.match(appSource, /reportsTab\.hidden = [^;]*isDireccion/);
  assert.match(appSource, /systemTab\.hidden = [^;]*isDireccion/);
  assert.match(appSource, /function renderDireccionHistory\(\)/);
  assert.match(appSource, /activeView === "schedules"\) contentHtml = isDireccion \? renderDireccionHistory\(\)/);
  assert.match(styles, /\.direccion-history-columns/);
});

test("Dirección generates an area email with four priorities and three favorable indicators", () => {
  assert.match(appSource, /function direccionEmailInsights\(areaId\)/);
  assert.match(appSource, /function direccionEmailDraft\(areaId = direccionEmailArea\)/);
  assert.match(appSource, /insights\.critical\.slice\(0, 4\)/);
  assert.match(appSource, /insights\.favorable\.slice\(0, 3\)/);
  assert.match(appSource, /id="direccionEmailArea"/);
  assert.match(appSource, /id="copyDireccionEmail"/);
  assert.match(appSource, /navigator\.clipboard\.writeText/);
  assert.match(appSource, /activeView === "direccion-email"\) contentHtml = isDireccion \? renderDireccionEmail\(\)/);
  assert.match(styles, /\.direccion-email-draft/);
});

test("completed tasks leave Seguimiento and render in the matching Historial column", () => {
  assert.match(appSource, /item\.areaKey === column\.id && !item\.completed/);
  assert.match(appSource, /item\.areaKey === column\.id && item\.completed/);
  assert.match(appSource, /data-direccion-history-column/);
  assert.match(appSource, /Completada \$\{escapeHtml\(direccionChecklistTimestamp/);
  assert.match(styles, /\.direccion-task-check\.is-static/);
});
