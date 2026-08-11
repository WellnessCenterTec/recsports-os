(function initStudentDatabaseImport(root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.WellSyncStudentDatabaseImport = api;
})(typeof window !== "undefined" ? window : globalThis, function createStudentDatabaseImportApi() {
  function clean(value) {
    return String(value ?? "").trim();
  }

  function toCloudRow({ matricula, campus, level, program, period, gender, semester, major, school, tec21 }) {
    const career = clean(program);
    return {
      Matricula: clean(matricula).toUpperCase(),
      "Nombre Campus": clean(campus),
      "Desc Nivel Acad Alumno": clean(level),
      "Periodo acad": clean(period),
      "v_Clave Major Agrupado": clean(major),
      "Desc Programa Academico": career,
      "Desc Genero": clean(gender),
      "Desc Escuela Programa": clean(school),
      "Ind Plan Tec21": clean(tec21),
      Semestre: clean(semester),
      carrera: career
    };
  }

  async function replaceStudentMaster(supabaseClient, rows) {
    const result = await supabaseClient.rpc("replace_student_master_for_authorized_upload", { rows });
    if (result.error) throw result.error;
    return Number(result.data || 0);
  }

  return { replaceStudentMaster, toCloudRow };
});
