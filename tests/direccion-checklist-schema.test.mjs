import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const schema = fs.readFileSync(new URL("../supabase/direccion_checklist_items.sql", import.meta.url), "utf8");

test("Dirección checklist schema stores area, completion and server timestamps", () => {
  assert.match(schema, /create table if not exists public\.direccion_checklist_items/);
  assert.match(schema, /area_key text not null/);
  assert.match(schema, /completed boolean not null default false/);
  assert.match(schema, /completed_at timestamptz/);
  assert.match(schema, /created_at timestamptz not null default now\(\)/);
  assert.match(schema, /updated_at timestamptz not null default now\(\)/);
  assert.match(schema, /direccion_checklist_items_updated_at/);
  assert.match(schema, /enable row level security/);
});
