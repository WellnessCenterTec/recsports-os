import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const source = fs.readFileSync(new URL("../site/app.js", import.meta.url), "utf8");

test("Representativos usa la clave canónica autorizada al guardar su carga", () => {
  const helper = source.slice(source.indexOf("function participationUploadCloudArea"), source.indexOf("function masterPeriodCloudSlot"));
  const payload = source.slice(source.indexOf("function participationUploadRowToCloud"), source.indexOf("function participationUploadRowFromCloud"));
  assert.match(helper, /return areaId/);
  assert.match(payload, /area_key: participationUploadCloudArea\(areaId\)/);
});

test("Representativos conserva un respaldo local si falla la persistencia en Supabase", () => {
  const importer = source.slice(source.indexOf("async function importParticipationUpload"), source.indexOf("function intramurosCloudRow"));
  assert.match(importer, /source = "local"/);
  assert.match(importer, /saveParticipationUploadsLocal\(\)/);
  assert.match(importer, /respaldada localmente para reintentar/);
});
