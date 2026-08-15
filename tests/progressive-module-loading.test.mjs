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
