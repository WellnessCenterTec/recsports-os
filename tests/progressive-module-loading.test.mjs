import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import loaderModule from "../site/module-data-loader.js";
import planModule from "../site/module-data-plan.js";

const { createModuleDataLoader } = loaderModule;
const { createModuleDataPlan } = planModule;

test("loads only the active area's dependencies and reuses ready data", async () => {
  const calls = [];
  const loaderNames = [
    "student-master", "gym", "class-grades", "booking", "class-simulator",
    "intramuros", "communication"
  ];
  const loaders = Object.fromEntries(loaderNames.map((name) => [name, async () => {
    calls.push(name);
    return name;
  }]));
  const coordinator = createModuleDataLoader();
  const plan = createModuleDataPlan({ coordinator, loaders, period: "AD26" });

  await plan.ensureArea("gimnasio");
  assert.deepEqual(calls, ["student-master", "gym"]);
  assert.equal(plan.status("gimnasio"), "ready");

  await plan.ensureArea("clases");
  assert.deepEqual(calls, ["student-master", "gym", "class-grades", "booking", "class-simulator"]);
  assert.equal(plan.status("clases"), "ready");

  await plan.ensureArea("gimnasio");
  assert.deepEqual(calls, ["student-master", "gym", "class-grades", "booking", "class-simulator"]);
  assert.equal(calls.includes("intramuros"), false);
  assert.equal(calls.includes("communication"), false);

  plan.reset("FJ26");
  assert.equal(plan.status("gimnasio"), "idle");
  await plan.ensureArea("gimnasio");
  assert.deepEqual(calls.slice(-2), ["student-master", "gym"]);
});

test("Intramuros carga Representativos para detectar matrículas no elegibles", async () => {
  const calls = [];
  const expected = ["student-master", "intramuros", "representativos", "planning"];
  const coordinator = createModuleDataLoader();
  const plan = createModuleDataPlan({
    coordinator,
    period: "AD26",
    loaders: Object.fromEntries(expected.map((name) => [name, async () => calls.push(name)]))
  });

  await plan.ensureArea("intramuros");
  assert.deepEqual(calls, expected);
  assert.deepEqual(plan.dependencies("intramuros"), expected);
});

test("loads Reporte General participation sources and planning only for Calendario", async () => {
  const calls = [];
  const dashboardDependencies = [
    "student-master", "captures", "class-grades", "gym", "booking",
    "vivencia", "semana-tec", "semana-tec-program", "intramuros", "mentorship",
    "representativos", "gamer", "communication"
  ];
  const loaders = Object.fromEntries([...dashboardDependencies, "planning"].map((name) => [name, async () => {
    calls.push(name);
    return name;
  }]));
  const coordinator = createModuleDataLoader();
  const plan = createModuleDataPlan({ coordinator, loaders, period: "AD26" });

  await plan.ensureArea("general", "dashboard");
  assert.deepEqual(calls, dashboardDependencies);
  assert.equal(plan.dependencies("general", "dashboard").includes("planning"), false);
  assert.equal(plan.dependencies("general", "dashboard").includes("budget"), false);
  assert.equal(plan.dependencies("general", "dashboard").includes("mentorship"), true);
  assert.equal(plan.dependencies("general", "dashboard").includes("communication"), true);
  assert.equal(plan.dependencies("general", "dashboard").includes("representativos"), true);
  assert.equal(plan.dependencies("general", "dashboard").includes("gamer"), true);
  assert.equal(plan.dependencies("general", "dashboard").includes("class-simulator"), false);

  await plan.ensureArea("general", "schedules");
  assert.equal(calls.filter((name) => name === "planning").length, 1);
  assert.equal(plan.status("general", "schedules"), "ready");
});

test("reports an area error and permits a retry", async () => {
  let attempts = 0;
  const coordinator = createModuleDataLoader();
  const plan = createModuleDataPlan({
    coordinator,
    period: "AD26",
    loaders: {
      "student-master": async () => true,
      gym: async () => {
        attempts += 1;
        if (attempts === 1) throw new Error("offline");
        return true;
      }
    }
  });

  await assert.rejects(plan.ensureArea("gimnasio"), /offline/);
  assert.equal(plan.status("gimnasio"), "error");
  assert.match(plan.error("gimnasio").message, /offline/);
  await plan.ensureArea("gimnasio");
  assert.equal(plan.status("gimnasio"), "ready");
  assert.equal(attempts, 2);
});

test("keeps an area loading while another dependency can still provide data", async () => {
  let releaseGym;
  const coordinator = createModuleDataLoader();
  const plan = createModuleDataPlan({
    coordinator,
    period: "AD26",
    loaders: {
      "student-master": async () => { throw new Error("student source offline"); },
      gym: () => new Promise((resolve) => { releaseGym = resolve; })
    }
  });

  const pending = plan.ensureArea("gimnasio").catch((error) => error);
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(plan.status("gimnasio"), "loading");

  releaseGym(true);
  await pending;
  await Promise.resolve();
  assert.equal(plan.status("gimnasio"), "error");
});

test("Mentores loads every module that can identify participation by matrícula", async () => {
  const expected = [
    "mentorship", "captures", "class-grades", "gym", "booking", "vivencia", "semana-tec",
    "representativos", "gamer", "communication", "intramuros"
  ];
  const calls = [];
  const coordinator = createModuleDataLoader();
  const loaders = Object.fromEntries(expected.map((name) => [name, async () => calls.push(name)]));
  const plan = createModuleDataPlan({ coordinator, loaders, period: "AD26" });

  await plan.ensureArea("mentores");

  assert.deepEqual(calls, expected);
  assert.equal(plan.status("mentores"), "ready");
});

test("startup defers large static resources and class grades query cloud first", async () => {
  const appSource = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const startupSource = appSource.slice(appSource.indexOf("renderCareers();"));
  assert.doesNotMatch(startupSource, /loadPlanningCalendarRows\(\)\.then/);
  assert.doesNotMatch(startupSource, /loadUniformesData\(\);/);
  assert.doesNotMatch(startupSource, /loadClassGradeSeedData\(\)\.then/);
  assert.doesNotMatch(startupSource, /loadSemanaTecProgramSeed\(\)\.then/);

  const classLoaderSource = appSource.slice(
    appSource.indexOf("async function loadClassGrades(options = {})"),
    appSource.indexOf("function allClassGradeRows()")
  );
  assert.doesNotMatch(classLoaderSource, /await loadClassGradeSeedData\(\)/);
  assert.match(classLoaderSource, /if \(!classGrades\.length && seedIfEmpty\) await importInitialClassGrades\(\)/);
});

test("progressive loading preserves demo seeds and pending cloud backup sync", async () => {
  const appSource = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  assert.match(appSource, /"class-grades": async \(\) => \{[\s\S]*?loadClassGradeSeedData\(\)/);
  assert.match(appSource, /function areaDataStatus[\s\S]*?if \(!currentUser\) return "ready"/);
  assert.match(appSource, /loadSupabaseDataBundle\(\)[\s\S]*?syncPendingLocalUploadBackups\(\)/);
  assert.match(appSource, /renderCareers\(\);\s*if \(currentUser\) restoreCachedWorkspace/);
  assert.match(appSource, /Mostrando la última vista guardada mientras se actualiza en segundo plano/);
  assert.doesNotMatch(appSource, /Cargando datos de \$\{escapeHtml\(area\.name\)\}/);
});

test("large operational queries are filtered by the active period in Supabase", async () => {
  const appSource = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const gymSource = appSource.slice(
    appSource.indexOf("async function loadGymAsistencias"),
    appSource.indexOf("function studentFromDatabase")
  );
  const bookingSource = appSource.slice(
    appSource.indexOf("async function loadClassBookingReservationsCloud"),
    appSource.indexOf("async function saveClassBookingReservationsCloud")
  );
  const classGradeSource = appSource.slice(
    appSource.indexOf("async function loadClassGrades(options = {})"),
    appSource.indexOf("function allClassGradeRows()")
  );

  assert.match(gymSource, /\.gte\("fecha", start\)[\s\S]*?\.lte\("fecha", end\)/);
  assert.match(gymSource, /\.gte\("attendance_date", start\)[\s\S]*?\.lte\("attendance_date", end\)/);
  assert.match(gymSource, /\.gte\("registered_at", `\$\{start\}T00:00:00`\)/);
  assert.doesNotMatch(gymSource, /\.from\("gym_attendance_records"\)[\s\S]*?\.select\("\*"\)/);
  assert.doesNotMatch(gymSource, /\.from\("gym_asistencias"\)[\s\S]*?\.select\("\*"\)/);
  assert.match(bookingSource, /\.gte\("reservation_at", `\$\{start\}T00:00:00`\)/);
  assert.match(bookingSource, /\.lte\("reservation_at", `\$\{end\}T23:59:59\.999`\)/);
  assert.match(bookingSource, /const pageSize = 1000;/);
  assert.match(bookingSource, /\.range\(offset, offset \+ pageSize - 1\)/);
  assert.match(bookingSource, /data\.push\(\.\.\.page\);/);
  assert.match(bookingSource, /if \(page\.length < pageSize\) break;/);
  assert.doesNotMatch(bookingSource, /\.limit\(20000\)/);
  assert.doesNotMatch(bookingSource, /\.select\("\*"\)/);
  assert.match(classGradeSource, /query\.eq\("period_label", requestedPeriod\)/);
  assert.match(classGradeSource, /period_label\.in\.\(PMT1,PMT2,PMT3\)/);
  assert.doesNotMatch(classGradeSource, /\.select\("\*"\)/);
});

test("authenticated startup renders the cached workspace before background refresh", async () => {
  const appSource = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const sessionSource = appSource.slice(appSource.indexOf("async function loadSupabaseSession()"), appSource.indexOf("async function loginWithSupabase()"));
  const loginSource = appSource.slice(appSource.indexOf("async function loginWithSupabase()"), appSource.indexOf("async function saveCaptureToSupabase"));

  assert.ok(sessionSource.indexOf("restoreCachedWorkspace") < sessionSource.indexOf("startAuthenticatedBackgroundRefresh"));
  assert.ok(sessionSource.indexOf("render();") < sessionSource.indexOf("startAuthenticatedBackgroundRefresh"));
  assert.ok(loginSource.indexOf("restoreCachedWorkspace") < loginSource.indexOf("startAuthenticatedBackgroundRefresh"));
  assert.ok(loginSource.indexOf("render();") < loginSource.indexOf("startAuthenticatedBackgroundRefresh"));
  assert.match(appSource, /Vista rápida \$\{escapeHtml\(cachedViewTimestamp\(cachedView\)\)\}/);
  assert.match(appSource, /timeoutMs:\s*60000/);
  assert.match(appSource, /function limitBackgroundRefresh[\s\S]*?tardó demasiado/);
  assert.match(appSource, /limitBackgroundRefresh\([\s\S]*?"presentación"\)/);
  assert.match(appSource, /limitBackgroundRefresh\([\s\S]*?"historial"\)/);
  assert.match(appSource, /function cleanViewSnapshotHtml[\s\S]*?\[role="dialog"\][\s\S]*?node\.remove\(\)/);
  assert.match(appSource, /const contentHtml = cleanViewSnapshotHtml\(\$\("#contentArea"\)\)/);
  assert.match(appSource, /Mostrando información disponible mientras se actualiza/);
  assert.match(appSource, /Algunas fuentes no respondieron\. Se muestra la información disponible\./);
  assert.match(appSource, /currentAreaDataStatus !== "ready" && currentAreaDataStatus !== "error" && cachedView/);
});
