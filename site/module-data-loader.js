(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WellSyncModuleDataLoader = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function createModuleDataLoader({ onStateChange } = {}) {
    const entries = new Map();

    function notify(key, entry) {
      if (typeof onStateChange === "function") {
        onStateChange(key, entry?.status || "idle", entry?.error || null);
      }
    }

    function ensure(key, task) {
      const existing = entries.get(key);
      if (existing?.status === "loading") return existing.promise;
      if (existing?.status === "ready") return Promise.resolve(existing.value);

      const entry = { status: "loading", error: null, value: undefined, promise: null };
      entries.set(key, entry);
      notify(key, entry);
      let taskResult;
      try {
        taskResult = task();
      } catch (error) {
        taskResult = Promise.reject(error);
      }
      entry.promise = Promise.resolve(taskResult)
        .then((value) => {
          entry.status = "ready";
          entry.value = value;
          notify(key, entry);
          return value;
        })
        .catch((error) => {
          entry.status = "error";
          entry.error = error;
          notify(key, entry);
          throw error;
        });
      return entry.promise;
    }

    function status(key) {
      return entries.get(key)?.status || "idle";
    }

    function error(key) {
      return entries.get(key)?.error || null;
    }

    function reset(key) {
      if (typeof key === "string") {
        entries.delete(key);
        notify(key, null);
        return;
      }
      const keys = Array.from(entries.keys());
      entries.clear();
      keys.forEach((entryKey) => notify(entryKey, null));
    }

    return { ensure, status, error, reset };
  }

  return { createModuleDataLoader };
});
