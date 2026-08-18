(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WellSyncModuleDataPlan = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const AREA_DEPENDENCIES = Object.freeze({
    gimnasio: ["student-master", "gym"],
    clases: ["class-grades", "booking", "class-simulator"],
    intramuros: ["student-master", "intramuros", "planning"],
    vivencia: ["student-master", "vivencia", "planning"],
    "semana-tec": ["student-master", "semana-tec", "semana-tec-program"],
    comunicacion: ["student-master", "communication", "communication-images", "planning"],
    representativos: ["student-master", "representativos"],
    colaboradores: ["collaborators", "physical-evaluations", "uniformes"],
    compras: ["budget", "planning"],
    configuracion: ["quick-links", "collaborators"],
    presentacion: ["captures", "collaborators", "physical-evaluations", "budget", "planning"],
    general: [
      "student-master", "captures", "class-grades", "gym", "booking", "class-simulator",
      "vivencia", "semana-tec", "representativos", "communication", "intramuros", "budget", "planning"
    ]
  });

  function createModuleDataPlan({ coordinator, loaders = {}, period = "" }) {
    if (!coordinator?.ensure) throw new Error("A module data coordinator is required");
    let activePeriod = String(period || "");

    function dependencies(areaId) {
      return AREA_DEPENDENCIES[areaId] || [];
    }

    function cacheKey(dependency) {
      return `${dependency}:${activePeriod}`;
    }

    function ensureArea(areaId) {
      return Promise.all(dependencies(areaId).map((dependency) => {
        const task = loaders[dependency];
        if (typeof task !== "function") {
          return Promise.reject(new Error(`Missing loader: ${dependency}`));
        }
        return coordinator.ensure(cacheKey(dependency), task);
      }));
    }

    function status(areaId) {
      const states = dependencies(areaId).map((dependency) => coordinator.status(cacheKey(dependency)));
      if (!states.length) return "ready";
      if (states.every((state) => state === "ready")) return "ready";
      if (states.includes("loading")) return "loading";
      if (states.includes("error")) return "error";
      return "idle";
    }

    function error(areaId) {
      for (const dependency of dependencies(areaId)) {
        const dependencyError = coordinator.error(cacheKey(dependency));
        if (dependencyError) return dependencyError;
      }
      return null;
    }

    function reset(nextPeriod = activePeriod) {
      activePeriod = String(nextPeriod || "");
      coordinator.reset();
    }

    return { ensureArea, status, error, reset, dependencies };
  }

  return { AREA_DEPENDENCIES, createModuleDataPlan };
});
