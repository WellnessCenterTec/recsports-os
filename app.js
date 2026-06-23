  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${name.toLowerCase().replaceAll(" ", "-")}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  addAudit("exportacion", "Reporte de colaboradores");
  toast("Reporte de colaboradores descargado");
}

function renderBlueprint(area) {
  const selected = area.id === "general" ? areas[0] : area;
  return `
    <div class="blueprint-grid">
      <section class="blueprint-card">
        <h3>Mapa de modulos</h3>
        <p>El menu principal queda organizado por las ocho areas operativas y una vista ejecutiva. Cada modulo comparte el mismo patron para que los coordinadores no aprendan ocho sistemas distintos.</p>
        <div class="chip-list">${areas.map((a) => `<span class="chip">${a.name}</span>`).join("")}</div>
      </section>
      <section class="blueprint-card">
        <h3>Submenus por modulo</h3>
        <p>La navegacion interna recomendada separa captura, seguimiento, indicadores, reportes y configuracion de catalogos.</p>
        <div class="chip-list">${submenus.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
      </section>
      <section class="blueprint-card">
        <h3>Base de datos recomendada</h3>
        <p>PostgreSQL administrado en Supabase. Se mantiene una tabla minima de estudiantes y tablas transaccionales por operacion.</p>
        <ul>${dbTables.map((t) => `<li>${t}</li>`).join("")}</ul>
      </section>
      <section class="blueprint-card">
        <h3>Arquitectura tecnologica</h3>
        <p>Next.js en Vercel para la app, Supabase para base de datos y autenticacion, almacenamiento para archivos, funciones serverless para PDF/Excel y politicas por rol en la base.</p>
        <div class="chip-list">
          <span class="chip">Vercel</span><span class="chip">Next.js</span><span class="chip">Supabase</span><span class="chip">PostgreSQL</span><span class="chip">PDF</span><span class="chip">Excel</span>
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Permisos por rol</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Rol</th><th>Alcance</th><th>Permisos</th></tr></thead>
            <tbody>${roleMatrix.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Definicion del modulo activo: ${selected.name}</h3>
        <div class="module-grid">
          <article class="module-card" data-tone="${selected.tone}">
            <h3>Captura</h3>
            <p>${selected.capture.join(", ")}.</p>
          </article>
          <article class="module-card" data-tone="${selected.tone}">
            <h3>Indicadores automaticos</h3>
            <p>${selected.indicators.join(", ")}.</p>
          </article>
          <article class="module-card" data-tone="${selected.tone}">
            <h3>Graficas sugeridas</h3>
            <p>${selected.charts.join(", ")}.</p>
          </article>
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Wireframes funcionales</h3>
        <div class="wireframes">
          <div class="wireframe">
            <strong>Computadora</strong>
            <div class="wire-top"></div>
            <div class="wire-body"><div class="wire-side"></div><div class="wire-main"><div class="wire-kpis"><div class="wire-kpi"></div><div class="wire-kpi"></div><div class="wire-kpi"></div><div class="wire-kpi"></div></div><div class="wire-row"></div><div class="wire-row"></div><div class="wire-row"></div></div></div>
          </div>
          <div class="wireframe">
            <strong>Celular</strong>
            <div class="wire-top"></div>
            <div class="wire-main"><div class="wire-row"></div><div class="wire-row"></div><div class="wire-kpi"></div><div class="wire-kpi"></div><div class="wire-row"></div></div>
          </div>
          <div class="wireframe">
            <strong>Formulario</strong>
            <div class="wire-top"></div>
            <div class="wire-main"><div class="wire-row"></div><div class="wire-row"></div><div class="wire-row"></div><div class="wire-row"></div><div class="wire-kpi"></div></div>
          </div>
        </div>
      </section>
    </div>
  `;
}

renderCareers();
render();
loadSupabaseSession().then(() => render());

$$(".segmented button").forEach((button) => button.addEventListener("click", () => {
  activeView = button.dataset.view;
  render();
}));

["periodFilter", "levelFilter", "careerFilter", "genderFilter", "globalSearch", "roleSelect"].forEach((id) => {
  $(`#${id}`).addEventListener("input", (event) => {
    if (id === "roleSelect") {
      const user = demoUsers.find((item) => item.id === event.target.value) || demoUsers[0];
      saveSession(user);
      addAudit("cambio_rol", `Cambio a ${user.name}`);
      activeArea = user.role === "direccion" ? "general" : user.area;
      activeView = "dashboard";
    }
    render();
  });
});

$("#themeSelect").addEventListener("input", (event) => {
  activeTheme = event.target.value;
  localStorage.setItem(THEME_KEY, activeTheme);
  addAudit("tema", `Tema visual: ${activeTheme}`);
  applyTheme();
  toast("Tema visual actualizado");
});

$("#exportExcel").addEventListener("click", () => downloadCsv("recsports-export"));
$("#exportPdf").addEventListener("click", () => {
  addAudit("exportacion", `PDF/impresion de ${labelArea(activeArea)}`);
  toast("Abriendo impresion para guardar como PDF");
  setTimeout(() => window.print(), 350);
});

$("#logoutButton").addEventListener("click", () => {
  addAudit("logout", "Sesion cerrada");
  if (currentUser?.auth === "supabase") {
    supabaseClient?.auth.signOut();
    cloudCaptures = [];
    cloudCollaborators = [];
    physicalEvaluations = [];
    physicalEvaluationsLoaded = false;
    classGrades = [];
    classGradesLoaded = false;
    gymAttendanceRecords = [];
    gymManualAttendanceRows = [];
    gymAsistencias = [];
    gymAsistenciasLoadedCount = 0;
    gymStudentRegistrations = [];
    gymDataLoaded = false;
    gymMasterStudent = null;
    vivenciaEvents = [];
    vivenciaEventsLoaded = false;
    vivenciaEventsAvailable = true;
    vivenciaEventImportResult = null;
    classScheduleSimulatorRows = loadClassScheduleSimulatorLocal();
    classScheduleSimulatorCloudReady = false;
    collaboratorsCloudLoaded = false;
    collaboratorColumnOrder = [];
    collaboratorSettingsLoaded = false;
    cloudStatus = "Supabase listo";
  }
  clearSession();
  render();
  toast("Sesion cerrada");
});

document.addEventListener("mock-colab-save", () => {
  addAudit("colaboradores", "Guardado simulado de colaborador");
  toast("Guardado simulado. En produccion actualizara la tabla de colaboradores.");
});

document.addEventListener("mock-config-save", () => {
  addAudit("configuracion", "Guardado simulado de usuario/catalogo");
  toast("Configuracion simulada guardada localmente");
});

loadUniformesData();
loadClassGradeSeedData().then(() => render());
