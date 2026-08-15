(function attachSemanaTecGradeCards(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WellSyncSemanaTecGradeCards = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function createSemanaTecGradeCards() {
  function normalizeText(value) {
    return String(value ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toUpperCase()
      .replace(/\s+/g, " ");
  }

  function classifySemanaTecGrade(value) {
    const raw = String(value ?? "").trim();
    if (!raw) return { outcome: "pending", numeric: null };

    const numeric = Number(raw.replace(",", "."));
    if (Number.isFinite(numeric)) {
      if (numeric < 0 || numeric > 100) return { outcome: "pending", numeric: null };
      return { outcome: numeric >= 70 ? "approved" : "failed", numeric };
    }

    const normalized = normalizeText(raw);
    if (["APROBADO", "ACREDITADO"].includes(normalized)) return { outcome: "approved", numeric: null };
    if (["REPROBADO", "NO ACREDITADO", "NA", "NP"].includes(normalized)) return { outcome: "failed", numeric: null };
    if (normalized === "BAJA") return { outcome: "baja", numeric: null };
    return { outcome: "pending", numeric: null };
  }

  function normalizeSemanaTecGradeValue(value) {
    const raw = String(value ?? "").trim();
    if (!raw) return "";
    const numeric = Number(raw.replace(",", "."));
    if (Number.isFinite(numeric) && numeric >= 0 && numeric <= 100) return String(numeric);
    return raw.toUpperCase();
  }

  function normalizedPeriod(value) {
    return String(value ?? "").trim().toUpperCase() || "SIN PERIODO";
  }

  function normalizedMatricula(value) {
    return String(value ?? "").trim().toUpperCase();
  }

  function numericGroup(value) {
    const group = Number(String(value ?? "").trim());
    return Number.isInteger(group) && group > 0 ? group : 0;
  }

  function groupKey(period, group) {
    return `${normalizedPeriod(period)}|${numericGroup(group)}`;
  }

  function gradeRowKey(row) {
    const matricula = normalizedMatricula(row?.matricula);
    const group = numericGroup(row?.numero_grupo);
    if (!matricula || !group) return "";
    return `${groupKey(row?.periodo, group)}|${matricula}`;
  }

  function genderOutcome(value) {
    const normalized = normalizeText(value);
    if (normalized === "FEMENINO") return "female";
    if (normalized === "MASCULINO") return "male";
    return "unspecified";
  }

  function buildSemanaTecGroupSummaries(gradeRows, programRows) {
    const programByGroup = new Map();
    (Array.isArray(programRows) ? programRows : []).forEach((row) => {
      const group = numericGroup(row?.grupo ?? row?.numero_grupo);
      if (!group) return;
      programByGroup.set(groupKey(row?.periodo, group), row);
    });

    const uniqueGradeRows = new Map();
    (Array.isArray(gradeRows) ? gradeRows : []).forEach((row) => {
      const key = gradeRowKey(row);
      if (key) uniqueGradeRows.set(key, row);
    });

    const groups = new Map();
    uniqueGradeRows.forEach((row) => {
      const group = numericGroup(row.numero_grupo);
      const periodo = normalizedPeriod(row.periodo);
      const key = groupKey(periodo, group);
      const program = programByGroup.get(key);
      if (!groups.has(key)) {
        groups.set(key, {
          group,
          week: Number(program?.semana || row.semana || 0),
          periodo,
          crn: String(program?.crn || "").trim(),
          professor: String(program?.profesor || row.profesor || "Sin profesor").trim() || "Sin profesor",
          horario: String(program?.horario || row.horario || "").trim(),
          frecuencia: String(program?.frecuencia || row.frecuencia || "").trim(),
          total: 0,
          female: 0,
          male: 0,
          unspecified: 0,
          average: null,
          approved: 0,
          failed: 0,
          bajas: 0,
          pending: 0,
          numericGrades: []
        });
      }
      const summary = groups.get(key);
      summary.total += 1;
      summary[genderOutcome(row.genero)] += 1;
      const classification = classifySemanaTecGrade(row.calificacion);
      if (classification.numeric !== null) summary.numericGrades.push(classification.numeric);
      if (classification.outcome === "baja") summary.bajas += 1;
      else summary[classification.outcome] += 1;
    });

    return [...groups.values()].map((summary) => {
      const { numericGrades, ...result } = summary;
      result.average = numericGrades.length
        ? numericGrades.reduce((sum, value) => sum + value, 0) / numericGrades.length
        : null;
      return result;
    }).sort((a, b) => a.group - b.group);
  }

  function preserveSemanaTecGrades(incomingRows, existingRows) {
    const existingGrades = new Map();
    (Array.isArray(existingRows) ? existingRows : []).forEach((row) => {
      const key = gradeRowKey(row);
      const grade = String(row?.calificacion ?? "").trim();
      if (key && grade) existingGrades.set(key, row.calificacion);
    });
    return (Array.isArray(incomingRows) ? incomingRows : []).map((row) => {
      const clone = { ...row };
      const key = gradeRowKey(row);
      if (!String(row?.calificacion ?? "").trim() && existingGrades.has(key)) {
        clone.calificacion = existingGrades.get(key);
      }
      return clone;
    });
  }

  return {
    buildSemanaTecGroupSummaries,
    classifySemanaTecGrade,
    normalizeSemanaTecGradeValue,
    preserveSemanaTecGrades
  };
});
