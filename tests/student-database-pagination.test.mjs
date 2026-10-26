import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import pagination from "../site/student-database-pagination.js";

function studentClient(total, { countAvailable = true, failOffset = null } = {}) {
  const calls = [];
  let active = 0;
  let maxActive = 0;
  const client = {
    from(table) {
      const request = { table, columns: "", count: null, orderColumn: "", offset: 0, end: 0 };
      return {
        select(columns, options) {
          request.columns = columns;
          request.count = options?.count || null;
          return this;
        },
        order(column) {
          request.orderColumn = column;
          return this;
        },
        async range(offset, end) {
          request.offset = offset;
          request.end = end;
          calls.push({ ...request });
          active += 1;
          maxActive = Math.max(maxActive, active);
          await new Promise((resolve) => setTimeout(resolve, 2));
          active -= 1;
          if (offset === failOffset) return { data: [], error: new Error(`page ${offset} failed`) };
          const length = Math.max(0, Math.min(end - offset + 1, total - offset));
          return {
            data: Array.from({ length }, (_, index) => ({ Matricula: `A${offset + index}` })),
            error: null,
            count: request.count === "exact" && countAvailable ? total : null
          };
        }
      };
    }
  };
  return { client, calls, maxActive: () => maxActive };
}

test("student database pages load in bounded parallel batches after one exact count", async () => {
  const mock = studentClient(5500);
  const result = await pagination.loadStudentDatabasePages(mock.client, {
    columns: 'Matricula,"Desc Genero"'
  });

  assert.equal(result.error, null);
  assert.equal(result.data.length, 5500);
  assert.deepEqual(mock.calls.map((call) => call.offset), [0, 1000, 2000, 3000, 4000, 5000]);
  assert.equal(mock.calls[0].count, "exact");
  assert.ok(mock.calls.slice(1).every((call) => call.count === null));
  assert.ok(mock.calls.every((call) => call.table === "Base de datos_alumnos"));
  assert.ok(mock.calls.every((call) => call.orderColumn === "Matricula"));
  assert.ok(mock.calls.every((call) => call.columns === 'Matricula,"Desc Genero"'));
  assert.equal(mock.maxActive(), 4);
});

test("student database pagination keeps the sequential fallback when count is unavailable", async () => {
  const mock = studentClient(2100, { countAvailable: false });
  const result = await pagination.loadStudentDatabasePages(mock.client);

  assert.equal(result.error, null);
  assert.equal(result.data.length, 2100);
  assert.deepEqual(mock.calls.map((call) => call.offset), [0, 1000, 2000]);
  assert.equal(mock.maxActive(), 1);
});

test("WellSync loads the optimized student paginator and requests only used student columns", () => {
  const index = fs.readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
  const app = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");
  assert.match(index, /student-database-pagination\.js\?v=20261013-performance-phase2a-v1[^]*app\.js\?v=20261026-booking-top-bottom-five-v5/);
  assert.match(app, /WellSyncStudentDatabasePagination/);
  assert.match(app, /"Matricula"[\s\S]*?'"Desc Genero"'[\s\S]*?\.join\(","\)/);
  const loader = app.slice(app.indexOf("async function loadStudentDatabase()"), app.indexOf("function findStudentInDatabase"));
  assert.doesNotMatch(loader, /\.select\("\*"\)/);
  assert.match(loader, /loadStudentDatabasePages\(supabaseClient, \{ columns: studentColumns \}\)/);
});
