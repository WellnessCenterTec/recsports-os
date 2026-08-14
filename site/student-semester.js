(function initStudentSemester(root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.WellSyncStudentSemester = api;
})(typeof window !== "undefined" ? window : globalThis, function createStudentSemesterApi() {
  const semesterByOrdinal = new Map([
    ["primer", 1],
    ["primero", 1],
    ["primera", 1],
    ["segundo", 2],
    ["segunda", 2],
    ["tercer", 3],
    ["tercero", 3],
    ["tercera", 3],
    ["cuarto", 4],
    ["cuarta", 4],
    ["quinto", 5],
    ["quinta", 5],
    ["sexto", 6],
    ["sexta", 6],
    ["septimo", 7],
    ["septima", 7],
    ["octavo", 8],
    ["octava", 8],
    ["noveno", 9],
    ["novena", 9],
    ["decimo", 10],
    ["decima", 10],
    ["undecimo", 11],
    ["undecima", 11],
    ["decimoprimero", 11],
    ["decimoprimera", 11],
    ["duodecimo", 12],
    ["duodecima", 12],
    ["decimosegundo", 12],
    ["decimosegunda", 12]
  ]);

  function normalizeAcademicSemester(value) {
    const raw = String(value ?? "").trim();
    if (!raw) return null;

    const numeric = Number(raw);
    if (Number.isInteger(numeric) && numeric >= 1 && numeric <= 12) return numeric;

    const ordinal = raw
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\bsemestre\b/g, "")
      .replace(/[^a-z]/g, "");
    return semesterByOrdinal.get(ordinal) || null;
  }

  function studentSemesterFromRow(row = {}) {
    return normalizeAcademicSemester(row.Semestre) ?? normalizeAcademicSemester(row.semestre);
  }

  return { normalizeAcademicSemester, studentSemesterFromRow };
});
