import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("Comunicación cruza el género por matrícula después de cargar la base institucional", async () => {
  const source = await readFile(new URL("../site/app.js", import.meta.url), "utf8");

  assert.match(source, /function communicationEventGenderSummary\(event\)[^]*const institutionalGender = vivenciaParticipantGender\(findStudentInDatabase\(participant\.matricula\)\?\.genero\);/);
  assert.match(source, /const uploadedGender = vivenciaParticipantGender\(participant\.genero\);/);
  assert.match(source, /const gender = institutionalGender !== "Sin dato" \? institutionalGender : uploadedGender;/);
  assert.match(source, /communicationParticipants =[^]*genero: participant\.genero \|\| student\.genero \|\| "",/);
});
