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
    mentores: [
      "mentorship", "captures", "class-grades", "gym", "booking", "vivencia", "semana-tec",
      "representativos", "gamer", "communication", "intramuros"
    ],
    colaboradores: ["collaborators", "physical-evaluations", "uniformes"],
    compras: ["budget", "planning"],
    configuracion: ["quick-links", "collaborators"],
    presentacion: ["captures", "collaborators", "physical-evaluations", "budget", "planning", "uniformes"],
    general: [
      "student-master", "captures", "class-grades", "gym", "booking",
      "vivencia", "semana-tec", "intramuros", "mentorship",
      "representativos", "gamer", "communication"
    ]
  });

  const AREA_VIEW_DEPENDENCIES = Object.freeze({
    general: Object.freeze({
      schedules: ["planning"]
    })
  });

  function createModuleDataPlan({ coordinator, loaders = {}, period = "" }) {
    if (!coordinator?.ensure) throw new Error("A module data coordinator is required");
    let activePeriod = String(period || "");

    function dependencies(areaId, viewId = "dashboard") {
      const base = AREA_DEPENDENCIES[areaId] || [];
      const view = AREA_VIEW_DEPENDENCIES[areaId]?.[viewId] || [];
      return [...new Set([...base, ...view])];
    }

    function cacheKey(dependency) {
      return `${dependency}:${activePeriod}`;
    }

    function ensureArea(areaId, viewId = "dashboard") {
      return Promise.all(dependencies(areaId, viewId).map((dependency) => {
        const task = loaders[dependency];
        if (typeof task !== "function") {
          return Promise.reject(new Error(`Missing loader: ${dependency}`));
        }
        return coordinator.ensure(cacheKey(dependency), task);
      }));
    }

    function status(areaId, viewId = "dashboard") {
      const states = dependencies(areaId, viewId).map((dependency) => coordinator.status(cacheKey(dependency)));
      if (!states.length) return "ready";
      if (states.every((state) => state === "ready")) return "ready";
      if (states.includes("loading")) return "loading";
      if (states.includes("error")) return "error";
      return "idle";
    }

    function error(areaId, viewId = "dashboard") {
      for (const dependency of dependencies(areaId, viewId)) {
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

  return { AREA_DEPENDENCIES, AREA_VIEW_DEPENDENCIES, createModuleDataPlan };
});
