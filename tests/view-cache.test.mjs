import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import viewCacheModule from "../site/view-cache.js";

function memoryStorage({ failWrites = false } = {}) {
  const values = new Map();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => {
      if (failWrites) throw new Error("Quota exceeded");
      values.set(key, String(value));
    }
  };
}

test("last view cache keeps workspace and snapshot scoped by user and period", () => {
  const store = viewCacheModule.createLastViewStore(memoryStorage());
  assert.equal(store.writeWorkspace("director-1", "AD26", { activeArea: "general", activeView: "reports" }), true);
  assert.equal(store.writeSnapshot("director-1", "AD26", {
    area: "general",
    view: "reports",
    contentHtml: "<section>17,173 alumnos</section>",
    kpisHtml: "<strong>17,173</strong>"
  }), true);

  assert.equal(store.readWorkspace("director-1", "AD26").activeView, "reports");
  assert.equal(store.readSnapshot("director-1", "AD26", { area: "general", view: "reports" }).contentHtml.includes("17,173"), true);
  assert.equal(store.readSnapshot("director-2", "AD26"), null);
  assert.equal(store.readSnapshot("director-1", "FJ26"), null);
  assert.equal(store.readSnapshot("director-1", "AD26", { area: "gimnasio" }), null);
});

test("cache failures and malformed values never block startup", () => {
  const failingStore = viewCacheModule.createLastViewStore(memoryStorage({ failWrites: true }));
  assert.equal(failingStore.writeWorkspace("director-1", "AD26", { activeArea: "general" }), false);
  assert.equal(failingStore.readWorkspace("director-1", "AD26"), null);

  const malformed = { getItem: () => "not-json", setItem: () => {} };
  const malformedStore = viewCacheModule.createLastViewStore(malformed);
  assert.equal(malformedStore.readSnapshot("director-1", "AD26"), null);
});

test("snapshot writes require a concrete area, view, and HTML payload", () => {
  const store = viewCacheModule.createLastViewStore(memoryStorage());
  assert.equal(store.writeSnapshot("director-1", "AD26", { area: "general", contentHtml: "ok" }), false);
  assert.equal(store.writeSnapshot("director-1", "AD26", { area: "general", view: "dashboard", contentHtml: "" }), true);
  assert.equal(store.readSnapshot("director-1", "AD26"), null);
});

test("WellSync loads the last-view cache before the main application", async () => {
  const indexHtml = await readFile(new URL("../site/index.html", import.meta.url), "utf8");
  assert.match(indexHtml, /view-cache\.js\?v=20260819-last-view-v2/);
  assert.ok(indexHtml.indexOf("view-cache.js") < indexHtml.indexOf("app.js"));
});
