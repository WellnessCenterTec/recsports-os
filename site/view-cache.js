(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WellSyncViewCache = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const CACHE_VERSION = 3;
  const DEFAULT_PREFIX = "wellsync_last_view_v3";

  function safeToken(value, fallback = "anonymous") {
    const normalized = String(value || "").trim().toLowerCase();
    return normalized ? encodeURIComponent(normalized).slice(0, 180) : fallback;
  }

  function safeParse(value) {
    if (!value) return null;
    try {
      const parsed = JSON.parse(value);
      return parsed && typeof parsed === "object" ? parsed : null;
    } catch {
      return null;
    }
  }

  function createLastViewStore(storage, { prefix = DEFAULT_PREFIX } = {}) {
    function scopedKey(kind, userId, period) {
      return `${prefix}:${kind}:${safeToken(userId)}:${safeToken(period, "period")}`;
    }

    function read(kind, userId, period) {
      if (!storage?.getItem) return null;
      try {
        const value = safeParse(storage.getItem(scopedKey(kind, userId, period)));
        return value?.version === CACHE_VERSION ? value : null;
      } catch {
        return null;
      }
    }

    function write(kind, userId, period, payload) {
      if (!storage?.setItem || !payload || typeof payload !== "object") return false;
      try {
        storage.setItem(scopedKey(kind, userId, period), JSON.stringify({
          ...payload,
          version: CACHE_VERSION,
          savedAt: new Date().toISOString()
        }));
        return true;
      } catch {
        return false;
      }
    }

    function readWorkspace(userId, period) {
      return read("workspace", userId, period);
    }

    function writeWorkspace(userId, period, workspace) {
      return write("workspace", userId, period, workspace);
    }

    function readSnapshot(userId, period, { area, view } = {}) {
      const snapshot = read("snapshot", userId, period);
      if (!snapshot) return null;
      if (area && snapshot.area !== area) return null;
      if (view && snapshot.view !== view) return null;
      if (typeof snapshot.contentHtml !== "string" || !snapshot.contentHtml.trim()) return null;
      return snapshot;
    }

    function writeSnapshot(userId, period, snapshot) {
      if (!snapshot?.area || !snapshot?.view || typeof snapshot.contentHtml !== "string") return false;
      return write("snapshot", userId, period, snapshot);
    }

    return { readWorkspace, writeWorkspace, readSnapshot, writeSnapshot };
  }

  return { CACHE_VERSION, createLastViewStore, safeParse, safeToken };
});
