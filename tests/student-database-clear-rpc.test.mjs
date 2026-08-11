import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const migrationUrl = new URL(
  "../supabase/20260811_fix_student_database_clear_rpc.sql",
  import.meta.url
);

test("student database replacement keeps authorization and uses an explicit delete predicate", async () => {
  const sql = await readFile(migrationUrl, "utf8");

  assert.match(
    sql,
    /create or replace function public\.clear_student_master_for_authorized_upload\(\)/i
  );
  assert.match(sql, /security definer/i);
  assert.match(sql, /set search_path to 'public'/i);
  assert.match(sql, /public\.current_app_role\(\) in \('admin', 'direccion'\)/i);
  assert.match(sql, /or public\.is_global_operator\(\)/i);
  assert.match(sql, /raise exception 'No autorizado para reemplazar la Base Maestra'/i);
  assert.match(sql, /delete from public\."Base de datos_alumnos"\s+where true;/i);
  assert.doesNotMatch(sql, /truncate\s+table/i);
});
