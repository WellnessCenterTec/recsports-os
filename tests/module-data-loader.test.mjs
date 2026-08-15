import assert from "node:assert/strict";
import test from "node:test";
import loaderModule from "../site/module-data-loader.js";

const { createModuleDataLoader } = loaderModule;

test("deduplicates an in-flight task and caches its ready result", async () => {
  let resolveTask;
  let calls = 0;
  const task = () => {
    calls += 1;
    return new Promise((resolve) => { resolveTask = resolve; });
  };
  const loader = createModuleDataLoader();

  const first = loader.ensure("gym:AD26", task);
  const second = loader.ensure("gym:AD26", task);

  assert.equal(first, second);
  assert.equal(loader.status("gym:AD26"), "loading");
  assert.equal(calls, 1);
  resolveTask("loaded");
  assert.equal(await first, "loaded");
  assert.equal(loader.status("gym:AD26"), "ready");
  assert.equal(await loader.ensure("gym:AD26", task), "loaded");
  assert.equal(calls, 1);
});

test("records an error and retries on the next ensure", async () => {
  let calls = 0;
  const loader = createModuleDataLoader();
  const expected = new Error("temporary failure");

  await assert.rejects(loader.ensure("booking:AD26", async () => {
    calls += 1;
    if (calls === 1) throw expected;
    return "recovered";
  }), expected);

  assert.equal(loader.status("booking:AD26"), "error");
  assert.equal(loader.error("booking:AD26"), expected);
  assert.equal(await loader.ensure("booking:AD26", async () => {
    calls += 1;
    return "recovered";
  }), "recovered");
  assert.equal(loader.status("booking:AD26"), "ready");
  assert.equal(calls, 2);
});

test("reset clears one key or the entire coordinator", async () => {
  const loader = createModuleDataLoader();
  await loader.ensure("gym:AD26", async () => true);
  await loader.ensure("booking:AD26", async () => true);

  loader.reset("gym:AD26");
  assert.equal(loader.status("gym:AD26"), "idle");
  assert.equal(loader.status("booking:AD26"), "ready");

  loader.reset();
  assert.equal(loader.status("booking:AD26"), "idle");
});
