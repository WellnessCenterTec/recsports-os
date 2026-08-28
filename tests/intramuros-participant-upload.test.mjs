import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function extractFunction(source, name, nextName) {
  const start = source.indexOf(`function ${name}(`);
  const regularEnd = source.indexOf(`\nfunction ${nextName}(`, start + 1);
  const asyncEnd = source.indexOf(`\nasync function ${nextName}(`, start + 1);
  const end = [regularEnd, asyncEnd].filter((value) => value >= 0).sort((a, b) => a - b)[0] ?? -1;
  assert.notEqual(start, -1, `${name} debe existir`);
  assert.notEqual(end, -1, `${nextName} debe aparecer después de ${name}`);
  return source.slice(start, end);
}

function normalizeHeader(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

test("la carga de Intramuros descarta nombres y conserva los nuevos campos", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const aliasesStart = app.indexOf("const INTRAMUROS_PARTICIPANT_COLUMN_ALIASES = {");
  const aliasesEnd = app.indexOf("\n};", aliasesStart) + 3;
  const aliasesSource = app.slice(aliasesStart, aliasesEnd);
  const parserSource = extractFunction(app, "intramurosParticipantRowsFromGrid", "rowsFromIntramurosParticipantsFile");
  const createParser = Function("headerKey", "intramurosPeriodFromGrid", `"use strict"; ${aliasesSource}; ${parserSource}; return intramurosParticipantRowsFromGrid;`);
  const parseGrid = createParser(normalizeHeader, () => "");
  const result = parseGrid([
    ["NOMBRE", "APELLIDO PATERNO", "APELLIDO MATERNO", "MATRICULA", "GÉNERO", "PROGRAMA", "MODALIDAD", "ESCUELA", "TIPO DE ACTIVIDAD", "Equipo", "RAMA", "GRUPO", "SANCIÓN", "COMENTARIO"],
    ["Dato privado", "Dato privado", "Dato privado", "A01234567", "Femenino", "1.2", "NEG", "Negocios", "FÚTBOL 7", "Azul", "Femenil", "A", "Copa EMCS", "Observación operativa"]
  ]);

  assert.deepEqual(result.ignoredColumns, ["NOMBRE", "APELLIDO PATERNO", "APELLIDO MATERNO"]);
  assert.equal(result.rows.length, 1);
  assert.equal(result.rows[0]["Grupo"], "A");
  assert.equal(result.rows[0]["Sanción"], "Copa EMCS");
  assert.equal(result.rows[0]["Comentario"], "Observación operativa");
  assert.equal(Object.keys(result.rows[0]).some((key) => /nombre|apellido/i.test(key)), false);
  assert.equal(JSON.stringify(result.rows[0]).includes("Dato privado"), false);
});

test("Tipo de actividad funciona como torneo y la base no define columnas de nombres", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const sql = await readFile(new URL("../supabase/intramuros.sql", import.meta.url), "utf8");
  const normalizerSource = extractFunction(app, "normalizeIntramurosUploadRow", "parseIntramurosUploadRows");
  const createNormalizer = Function(
    "normalizeMatricula", "pickColumn", "intramurosUploadValue", "canonicalIntramurosTournament", "normalizeIntramurosGender", "activeMasterPeriod", "intramurosLogicalKey",
    `"use strict"; ${normalizerSource}; return normalizeIntramurosUploadRow;`
  );
  const pickColumn = (row, aliases) => aliases.map((alias) => row[alias]).find((value) => value !== undefined) ?? "";
  const normalize = createNormalizer(
    (value) => String(value || "").toUpperCase(),
    pickColumn,
    (value, fallback) => String(value ?? "").trim() || fallback,
    (value) => String(value || "").toLowerCase() === "fútbol 7" ? "Fútbol 7" : String(value || ""),
    () => "Femenino",
    "AD26",
    (row) => [row.matricula, row.torneo, row.equipo, row.periodo].join("|")
  );
  const row = normalize({
    "Matrícula": "A01234567",
    "Tipo de actividad": "FÚTBOL 7",
    Equipo: "Azul",
    Grupo: "A",
    "Sanción": "Copa EMCS",
    Comentario: "Observación operativa",
    NOMBRE: "Dato privado"
  }, 0, "participantes.xlsx", new Set());

  assert.equal(row.torneo, "Fútbol 7");
  assert.equal(row.tipo_actividad, "FÚTBOL 7");
  assert.equal(row.grupo, "A");
  assert.equal(row.sancion, "Copa EMCS");
  assert.equal(row.comentario, "Observación operativa");
  assert.equal(Object.hasOwn(row, "nombre"), false);
  assert.match(sql, /grupo text/);
  assert.match(sql, /sancion text/);
  assert.match(sql, /comentario text/);
  assert.match(sql, /grant select, insert, update, delete on public\.intramuros_participantes to authenticated;/);
  assert.match(sql, /grant select, insert, update, delete on public\.intramuros_roles_juego to authenticated;/);
  assert.doesNotMatch(sql, /\bnombre\s+text|\bapellido\w*\s+text/i);
});

test("las filas duplicadas combinan Grupo, Sanción y Comentario sin duplicar la participación", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const parserSource = extractFunction(app, "parseIntramurosUploadRows", "importIntramurosParticipants");
  const createParser = Function("headerKey", "normalizeIntramurosUploadRow", `"use strict"; ${parserSource}; return parseIntramurosUploadRows;`);
  const parseRows = createParser(
    normalizeHeader,
    (row, index, _fileName, seenKeys) => {
      const duplicate = seenKeys.has(row.key);
      seenKeys.add(row.key);
      return { ...row, matricula: "A01234567", torneo: "Fútbol 7", equipo: "Azul", __key: row.key, __duplicateInFile: duplicate, __error: "", __rowNumber: index + 2 };
    }
  );
  const result = parseRows([
    { "Matrícula": "A01234567", "Tipo de actividad": "Fútbol 7", key: "uno", grupo: "A", sancion: "", comentario: "Primero" },
    { "Matrícula": "A01234567", "Tipo de actividad": "Fútbol 7", key: "uno", grupo: "B", sancion: "Copa EMCS", comentario: "Segundo" }
  ], "participantes.xlsx");

  assert.equal(result.rows.length, 1);
  assert.equal(result.duplicateRows.length, 1);
  assert.equal(result.rows[0].grupo, "A · B");
  assert.equal(result.rows[0].sancion, "Copa EMCS");
  assert.equal(result.rows[0].comentario, "Primero · Segundo");
});

test("las variantes de Omar se agrupan bajo un solo nombre de torneo", async () => {
  const app = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
  const canonicalSource = extractFunction(app, "canonicalIntramurosTournament", "normalizeIntramurosGender");
  const createCanonical = Function("normalizeText", "headerKey", `"use strict"; ${canonicalSource}; return canonicalIntramurosTournament;`);
  const canonical = createCanonical(
    (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
    normalizeHeader
  );

  assert.equal(canonical("Tocho"), "Tochito");
  assert.equal(canonical("Tochito"), "Tochito");
  assert.equal(canonical("Voleibol Playa"), "Voleibol de playa");
  assert.equal(canonical("Voleibol de playa"), "Voleibol de playa");
  assert.equal(canonical("Fútbol"), "Fútbol soccer");
  assert.equal(canonical("F. Rápido"), "Fútbol rápido");
  assert.equal(canonical("Futbol rapido"), "Fútbol rápido");
});
