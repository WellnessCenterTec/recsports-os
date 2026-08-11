(function initStudentDatabaseTemplate(root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.WellSyncStudentDatabaseTemplate = api;
})(typeof window !== "undefined" ? window : globalThis, function createStudentDatabaseTemplateApi() {
  const templateFileName = "plantilla-base-datos-alumnos.csv";
  const templateHeaders = [
    "Matricula",
    "Nombre Campus",
    "Desc Nivel Acad Alumno",
    "Desc Programa Acad",
    "Periodo acad",
    "Genero",
    "Semestre"
  ];

  function templateCsv() {
    return `\uFEFF${templateHeaders.join(",")}\n`;
  }

  function renderActions({ authorized, importing }) {
    return `
      <input id="studentDatabaseCsv" type="file" accept=".csv,text/csv" hidden />
      <button class="ghost-btn student-database-template-btn" id="downloadStudentDatabaseTemplate" type="button"><i data-lucide="download" aria-hidden="true"></i><span>Descargar plantilla</span></button>
      <button class="primary-btn" id="uploadStudentDatabase" type="button" ${authorized && !importing ? "" : "disabled"}>${importing ? "Cargando..." : "Cargar base de datos"}</button>
    `;
  }

  return { renderActions, templateCsv, templateFileName };
});
