import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { runInNewContext } from "node:vm";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const helperPath = join(root, "site", "budget-requests.js");
const source = existsSync(helperPath)
  ? readFileSync(helperPath, "utf8")
  : "window.WellSyncBudgetRequests = {};";
const window = {};
runInNewContext(source, { window });

const budget = window.WellSyncBudgetRequests;
const plain = (value) => JSON.parse(JSON.stringify(value));

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.has(key) ? values.get(key) : null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: (key) => values.delete(key)
  };
}

test("Budget amounts accept positive pesos and cents but reject invalid precision", () => {
  const cases = [
    ["0.01", 0.01],
    ["1", 1],
    ["57.50", 57.5],
    ["124.99", 124.99],
    ["", null],
    ["0", null],
    ["-1", null],
    ["text", null],
    ["12.345", null]
  ];

  cases.forEach(([input, expected]) => {
    assert.equal(budget.parseAmount(input), expected, `input ${input}`);
  });
});

test("currency display shows cents only when the amount has them", () => {
  assert.equal(budget.fractionDigits(4500000), 0);
  assert.equal(budget.fractionDigits(57.5), 2);
  assert.equal(budget.fractionDigits(124.99), 2);
});

test("Administrator and global Sports Leader can delete while area coordinators cannot", () => {
  assert.equal(budget.canDelete({ role: "admin", globalAccess: false }), true);
  assert.equal(budget.canDelete({ role: "direccion", globalAccess: false }), true);
  assert.equal(budget.canDelete({ role: "coordinador", globalAccess: true }), true);
  assert.equal(budget.canDelete({ role: "coordinador", globalAccess: false }), false);
  assert.equal(budget.canDelete({ role: "compras", globalAccess: false }), false);
});

test("an authoritative empty cloud response clears stale nonpending local requests", () => {
  const localRows = [{ id: "stale", concept: "No longer in Supabase" }];
  assert.deepEqual(plain(budget.reconcile([], localRows)), []);
});

test("pending local writes survive reload and a matching cloud copy replaces them", () => {
  const storage = memoryStorage();
  const firstStore = budget.createPendingStore(storage, "budget-test");
  firstStore.upsert({ id: "local-1", concept: "Leader request", amount: 57.5 });

  const afterReload = budget.createPendingStore(storage, "budget-test").load();
  assert.equal(afterReload.length, 1);
  assert.equal(afterReload[0].pendingSync, true);
  assert.equal(afterReload[0].amount, 57.5);

  const reconciled = budget.reconcile([
    { id: "cloud-9", clientRequestId: "local-1", concept: "Leader request", amount: 57.5 }
  ], afterReload);
  assert.deepEqual(plain(reconciled), [
    { id: "cloud-9", clientRequestId: "local-1", concept: "Leader request", amount: 57.5, pendingSync: false }
  ]);
});

test("removing a pending request deletes only the selected client id", () => {
  const storage = memoryStorage();
  const store = budget.createPendingStore(storage, "budget-test");
  store.upsert({ id: "keep", concept: "Keep" });
  store.upsert({ id: "remove", concept: "Remove" });

  store.remove("remove");

  assert.deepEqual(plain(store.load().map((row) => row.id)), ["keep"]);
});

test("validated cents cross the exact budget_requests Supabase contract unchanged", () => {
  const request = {
    id: "11111111-1111-4111-8111-111111111111",
    period: "AD26",
    date: "2026-08-06",
    area: "gimnasio",
    concept: "Mantenimiento",
    provider: "Proveedor",
    amount: budget.parseAmount("124.99"),
    status: "pendiente",
    priority: "Alta",
    type: "Servicio"
  };

  assert.deepEqual(plain(budget.toCloud(request, "user-uuid")), {
    id: "11111111-1111-4111-8111-111111111111",
    period_key: "AD26",
    request_date: "2026-08-06",
    area_key: "gimnasio",
    concept: "Mantenimiento",
    provider: "Proveedor",
    amount: 124.99,
    status: "pendiente",
    priority: "Alta",
    request_type: "Servicio",
    created_by: "user-uuid"
  });
});
