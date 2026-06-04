"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, FileText, LogOut, Search, ShieldCheck } from "lucide-react";
import { areas, careers, demoUsers, seedStudents } from "../lib/catalogs";

const STORAGE_KEY = "recsports_os_local_captures_next";
const SESSION_KEY = "recsports_os_session_next";
const THEME_KEY = "recsports_os_theme_next";

function readStorage(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  if (typeof window !== "undefined") localStorage.setItem(key, JSON.stringify(value));
}

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key] || "Sin dato";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

export default function RecSportsApp() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeArea, setActiveArea] = useState("general");
  const [activeView, setActiveView] = useState("dashboard");
  const [theme, setTheme] = useState("tec");
  const [captures, setCaptures] = useState([]);
  const [uniformes, setUniformes] = useState({});
  const [toast, setToast] = useState("");
  const [filters, setFilters] = useState({ nivel: "todos", carrera: "todos", genero: "todos", search: "" });
  const [collabFilters, setCollabFilters] = useState({ coordinator: "todos", shirt: "todos", firstAid: "todos" });

  useEffect(() => {
    setCurrentUser(readStorage(SESSION_KEY, null));
    setCaptures(readStorage(STORAGE_KEY, []));
    setTheme(readStorage(THEME_KEY, "tec"));
    fetch("/uniformes-data.json").then((res) => res.json()).then(setUniformes).catch(() => setUniformes({}));
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    writeStorage(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    writeStorage(STORAGE_KEY, captures);
  }, [captures]);

  const allowedAreas = useMemo(() => {
    if (!currentUser || currentUser.role === "direccion") return areas;
    if (currentUser.role === "compras") return areas.filter((area) => area.id === "compras");
    return areas.filter((area) => area.id === currentUser.area);
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) return;
    if (!allowedAreas.some((area) => area.id === activeArea)) {
      setActiveArea(currentUser.role === "direccion" ? "general" : currentUser.area);
    }
  }, [currentUser, allowedAreas, activeArea]);

  const area = areas.find((item) => item.id === activeArea) || areas[0];
  const rows = useMemo(() => [...captures, ...seedStudents], [captures]);
  const filteredRows = rows.filter((row) => {
    const areaMatch = activeArea === "general" || row.area === activeArea;
    const nivelMatch = filters.nivel === "todos" || row.nivel === filters.nivel;
    const carreraMatch = filters.carrera === "todos" || row.carrera === filters.carrera;
    const generoMatch = filters.genero === "todos" || row.genero === filters.genero;
    const text = `${row.matricula} ${row.carrera} ${row.genero} ${row.nivel} ${row.area}`.toLowerCase();
    return areaMatch && nivelMatch && carreraMatch && generoMatch && text.includes(filters.search.toLowerCase());
  });

  const collaborators = uniformes?.Uniformes?.records || [];
  const filteredCollaborators = collaborators.filter((row) => {
    const coordinator = collabFilters.coordinator === "todos" || row.Coordinador === collabFilters.coordinator;
    const shirt = collabFilters.shirt === "todos" || row["Playeras Joma"] === collabFilters.shirt;
    const aid = String(row["Primeros auxilios"]).toLowerCase() === "true" ? "si" : "no";
    return coordinator && shirt && (collabFilters.firstAid === "todos" || collabFilters.firstAid === aid);
  });

  function showToast(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  }

  function login(formData) {
    const code = String(formData.get("accessCode") || "").trim().toLowerCase();
    if (code !== "demo") {
      showToast("Codigo incorrecto para el prototipo");
      return;
    }
    const user = demoUsers.find((item) => item.id === formData.get("userId")) || demoUsers[0];
    setCurrentUser(user);
    writeStorage(SESSION_KEY, user);
    setActiveArea(user.role === "direccion" ? "general" : user.area);
    setActiveView("dashboard");
    showToast(`Sesion iniciada: ${user.name}`);
  }

  function changeUser(userId) {
    const user = demoUsers.find((item) => item.id === userId) || demoUsers[0];
    setCurrentUser(user);
    writeStorage(SESSION_KEY, user);
    setActiveArea(user.role === "direccion" ? "general" : user.area);
    setActiveView("dashboard");
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem(SESSION_KEY);
    showToast("Sesion cerrada");
  }

  function saveCapture(formData) {
    const matricula = String(formData.get("matricula") || "").trim().toUpperCase();
    if (!/^A0[0-9]{6,8}$/.test(matricula)) {
      showToast("La matricula debe iniciar con A0 y usar solo numeros");
      return;
    }
    const status = String(formData.get("estatus") || "Activo");
    setCaptures((items) => [
      {
        matricula,
        genero: String(formData.get("genero") || "No especificado"),
        carrera: String(formData.get("carrera") || ""),
        semestre: Number(formData.get("semestre") || 1),
        nivel: String(formData.get("nivel") || "Profesional"),
        periodo: String(formData.get("periodo") || "AD26"),
        area: area.id === "general" ? "clases" : area.id,
        registros: 1,
        estatus: status,
        acreditado: status !== "Baja",
        baja: status === "Baja",
        createdAt: new Date().toISOString()
      },
      ...items
    ]);
    setActiveView("dashboard");
    showToast("Captura guardada localmente");
  }

  function downloadCsv() {
    const isCollaborators = activeArea === "colaboradores";
    const downloadRows = isCollaborators ? filteredCollaborators : filteredRows;
    const headers = isCollaborators
      ? ["Nomina", "Colaboradores", "Puesto", "Coordinador", "% de cursos", "Playeras Joma", "Talla pants", "correo institucional", "Genero", "Primeros auxilios"]
      : ["matricula", "genero", "carrera", "semestre", "nivel", "area", "registros", "estatus", "periodo"];
    const csv = [headers.join(","), ...downloadRows.map((row) => headers.map((key) => csvEscape(row[key])).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${area.name.toLowerCase().replaceAll(" ", "-")}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Reporte CSV descargado");
  }

  if (!currentUser) return <LoginScreen onLogin={login} toast={toast} />;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">RS</div>
          <div>
            <strong>RecSports OS</strong>
            <span>Direccion Deportiva</span>
          </div>
        </div>
        <nav className="nav-list">
          {allowedAreas.map((item) => (
            <button key={item.id} className={`nav-item ${item.id === activeArea ? "active" : ""}`} onClick={() => { setActiveArea(item.id); setActiveView("dashboard"); }}>
              <span>{item.name}</span>
              <small>{item.id === "general" ? "Dir." : "Area"}</small>
            </button>
          ))}
        </nav>
        <div className="privacy-note">
          <strong>Privacidad por modulo</strong>
          <span>Alumnos: datos minimos. Colaboradores: informacion autorizada del archivo Uniformes.</span>
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div className="search-wrap">
            <Search size={18} />
            <input value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })} placeholder="Buscar modulo, indicador, reporte o matricula" />
          </div>
          <div className="top-actions">
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="tec">Tec deportivo</option>
              <option value="power">Power BI limpio</option>
              <option value="dark">Modo nocturno</option>
            </select>
            <select value={currentUser.id} onChange={(e) => changeUser(e.target.value)}>
              {demoUsers.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}
            </select>
            <button className="ghost-btn" onClick={downloadCsv}><Download size={16} /> Exportar Excel</button>
            <button className="primary-btn" onClick={() => window.print()}><FileText size={16} /> Exportar PDF</button>
            <button className="danger-btn" onClick={logout}><LogOut size={16} /> Salir</button>
          </div>
        </header>

        <Hero rows={rows} captures={captures} />
        <Filters filters={filters} setFilters={setFilters} />

        <section className="view-grid">
          <div className="main-panel">
            <div className="section-title">
              <div>
                <p className="eyebrow">Dashboard ejecutivo</p>
                <h2>{area.name}</h2>
              </div>
              <div className="segmented">
                {["dashboard", "capture", "reports", "system"].map((view) => (
                  <button key={view} className={activeView === view ? "active" : ""} onClick={() => setActiveView(view)}>
                    {view === "dashboard" ? "Dashboard" : view === "capture" ? "Captura" : view === "reports" ? "Reportes" : "Sistema"}
                  </button>
                ))}
              </div>
            </div>
            <ActiveView
              area={area}
              activeView={activeView}
              rows={filteredRows}
              captures={captures}
              setCaptures={setCaptures}
              collaborators={filteredCollaborators}
              allCollaborators={collaborators}
              collabFilters={collabFilters}
              setCollabFilters={setCollabFilters}
              currentUser={currentUser}
              saveCapture={saveCapture}
              showToast={showToast}
            />
          </div>
          <aside className="side-panel">
            <SystemMap />
          </aside>
        </section>
      </main>
      {toast ? <div className="toast show">{toast}</div> : null}
    </div>
  );
}

function LoginScreen({ onLogin, toast }) {
  return (
    <div className="login-overlay">
      <section className="login-card">
        <div className="login-visual">
          <div>
            <div className="brand-mark">RS</div>
            <p className="eyebrow">Prototipo local</p>
            <h1>RecSports OS</h1>
            <p>Entra con un perfil demo para validar permisos, captura por area y dashboards sin publicar la plataforma.</p>
          </div>
          <p>Privacidad por diseno: alumnos con datos minimos; colaboradores con archivo autorizado.</p>
        </div>
        <form action={onLogin}>
          <p className="eyebrow">Sesion de prueba</p>
          <h2>Selecciona un perfil</h2>
          <label>Perfil<select name="userId">{demoUsers.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}</select></label>
          <label>Codigo de acceso<input name="accessCode" defaultValue="demo" /></label>
          <button className="primary-btn" type="submit">Entrar al prototipo</button>
          <p className="hero-copy">Codigo temporal: demo. En produccion esto se reemplaza por Supabase Auth o SSO institucional.</p>
        </form>
      </section>
      {toast ? <div className="toast show">{toast}</div> : null}
    </div>
  );
}

function Hero({ rows, captures }) {
  const retention = Math.round(((rows.length - rows.filter((row) => row.baja).length) / rows.length) * 100);
  return (
    <section className="hero-dashboard">
      <div>
        <p className="eyebrow">Base Next.js local</p>
        <h1>Operacion deportiva en tiempo real</h1>
        <p className="hero-copy">Indicadores automaticos por area, captura controlada por coordinador y vision ejecutiva sin depender de hojas de calculo.</p>
      </div>
      <div className="hero-kpis">
        <Kpi label="Alumnos unicos" value={new Set(rows.map((row) => row.matricula)).size} hint="+12% vs periodo ant." />
        <Kpi label="Registros" value={rows.reduce((sum, row) => sum + row.registros, 0)} hint={`${captures.length} capturas locales`} />
        <Kpi label="Retencion" value={`${retention}%`} hint="sin datos sensibles" />
        <Kpi label="Areas activas" value={areas.length - 1} hint="modulos operativos" />
      </div>
    </section>
  );
}

function Filters({ filters, setFilters }) {
  return (
    <section className="filters-band">
      <label>Periodo<select><option>AD26</option><option>FJ26</option><option>IN26</option></select></label>
      <label>Nivel<select value={filters.nivel} onChange={(e) => setFilters({ ...filters, nivel: e.target.value })}><option value="todos">Todos</option><option>Profesional</option><option>Posgrado</option></select></label>
      <label>Carrera<select value={filters.carrera} onChange={(e) => setFilters({ ...filters, carrera: e.target.value })}><option value="todos">Todas</option>{careers.map((career) => <option key={career}>{career}</option>)}</select></label>
      <label>Genero<select value={filters.genero} onChange={(e) => setFilters({ ...filters, genero: e.target.value })}><option value="todos">Todos</option><option>Femenino</option><option>Masculino</option><option>No especificado</option></select></label>
    </section>
  );
}

function ActiveView(props) {
  if (props.area.id === "colaboradores") return <CollaboratorsView {...props} />;
  if (props.activeView === "capture") return <CaptureView {...props} />;
  if (props.activeView === "reports") return <ReportsView area={props.area} />;
  if (props.activeView === "system") return <Blueprint area={props.area} />;
  return <DashboardView {...props} />;
}

function DashboardView({ area, rows, captures, setCaptures }) {
  const metrics = {
    unique: new Set(rows.map((row) => row.matricula)).size,
    registers: rows.reduce((sum, row) => sum + row.registros, 0),
    accredited: rows.filter((row) => row.acreditado).length,
    retention: rows.length ? Math.round(((rows.length - rows.filter((row) => row.baja).length) / rows.length) * 100) : 0
  };
  const byArea = areas.filter((item) => !["general", "colaboradores", "compras"].includes(item.id)).map((item) => ({
    name: item.name,
    value: seedStudents.filter((row) => row.area === item.id).reduce((sum, row) => sum + row.registros, 0)
  }));
  const max = Math.max(...byArea.map((item) => item.value), 1);
  return (
    <>
      <div className="permission-strip">
        Alumnos usa solo matricula, genero, carrera, semestre y nivel escolar. Capturas guardadas: {captures.length}.
        {captures.length ? <button className="ghost-btn inline-action" onClick={() => setCaptures([])}>Limpiar capturas locales</button> : null}
      </div>
      <div className="kpi-grid">
        <Kpi label="Alumnos unicos" value={metrics.unique} hint="por matricula" />
        <Kpi label="Registros" value={metrics.registers} hint="asistencias o inscripciones" />
        <Kpi label="Acreditados / activos" value={metrics.accredited} hint="segun area" />
        <Kpi label="Retencion" value={`${metrics.retention}%`} hint="bajas excluidas" />
      </div>
      <div className="charts-grid">
        <BarChart title="Participacion por area" rows={byArea} max={max} />
        <div className="chart-panel"><h3>Perfil academico</h3><div className="donut" data-label={`${metrics.unique} unicos`} /><p className="hero-copy">Segmentacion: genero, carrera, semestre, nivel escolar, periodo, area y estatus.</p></div>
      </div>
      <DataTable rows={rows.slice(0, 14)} />
    </>
  );
}

function CaptureView({ area, currentUser, saveCapture }) {
  const editable = currentUser.role === "direccion" || currentUser.area === area.id;
  return (
    <div className="form-grid">
      <div className="permission-strip full-width">Rol activo: {currentUser.name}. {editable ? "Puedes capturar en este modulo." : "Este perfil solo puede consultar esta vista."}</div>
      <div className="form-panel">
        <h3>Formulario de captura: {area.name}</h3>
        <form action={saveCapture}>
          <label>Matricula<input name="matricula" defaultValue="A0841027" disabled={!editable} /></label>
          <label>Genero<select name="genero" disabled={!editable}><option>Femenino</option><option>Masculino</option><option>No especificado</option></select></label>
          <label>Carrera<select name="carrera" disabled={!editable}>{careers.map((career) => <option key={career}>{career}</option>)}</select></label>
          <label>Semestre<input name="semestre" type="number" min="1" max="12" defaultValue="4" disabled={!editable} /></label>
          <label>Nivel escolar<select name="nivel" disabled={!editable}><option>Profesional</option><option>Posgrado</option></select></label>
          <label>Periodo<select name="periodo" disabled={!editable}><option>AD26</option><option>FJ26</option><option>IN26</option></select></label>
          <label className="full">Estatus<select name="estatus" disabled={!editable}><option>Activo</option><option>Asistio</option><option>No asistio</option><option>Baja</option><option>Acreditado</option></select></label>
          <button className="primary-btn full" disabled={!editable}>Guardar captura</button>
        </form>
      </div>
      <FieldsPanel area={area} />
    </div>
  );
}

function CollaboratorsView({ activeView, area, collaborators, allCollaborators, collabFilters, setCollabFilters, currentUser, showToast }) {
  if (activeView === "capture") return <CollaboratorCapture currentUser={currentUser} showToast={showToast} />;
  if (activeView === "reports") return <ReportsView area={area} />;
  if (activeView === "system") return <Blueprint area={area} />;
  const shirtSizes = countBy(collaborators, "Playeras Joma");
  const coordinators = countBy(collaborators, "Coordinador");
  const metrics = {
    collaborators: collaborators.length,
    firstAid: collaborators.filter((row) => String(row["Primeros auxilios"]).toLowerCase() === "true").length,
    courseAvg: collaborators.length ? Math.round(collaborators.reduce((sum, row) => sum + toNumber(row["% de cursos"]), 0) / collaborators.length) : 0,
    contracts: allCollaborators.length
  };
  const coordinatorOptions = [...new Set(allCollaborators.map((row) => row.Coordinador).filter(Boolean))].sort();
  const shirtOptions = [...new Set(allCollaborators.map((row) => row["Playeras Joma"]).filter(Boolean))].sort();
  return (
    <>
      <div className="permission-strip">Este modulo usa la informacion completa autorizada del archivo Uniformes de Equipo RecSports 26.xlsx.</div>
      <section className="filters-band">
        <label>Coordinador<select value={collabFilters.coordinator} onChange={(e) => setCollabFilters({ ...collabFilters, coordinator: e.target.value })}><option value="todos">Todos</option>{coordinatorOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>Playera<select value={collabFilters.shirt} onChange={(e) => setCollabFilters({ ...collabFilters, shirt: e.target.value })}><option value="todos">Todas</option>{shirtOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>Primeros auxilios<select value={collabFilters.firstAid} onChange={(e) => setCollabFilters({ ...collabFilters, firstAid: e.target.value })}><option value="todos">Todos</option><option value="si">Si</option><option value="no">No</option></select></label>
        <label>Registros filtrados<input value={`${collaborators.length} de ${allCollaborators.length}`} disabled readOnly /></label>
      </section>
      <div className="kpi-grid">
        <Kpi label="Colaboradores" value={metrics.collaborators} hint="registros de uniformes" />
        <Kpi label="Primeros auxilios" value={metrics.firstAid} hint="colaboradores marcados" />
        <Kpi label="Promedio cursos" value={`${metrics.courseAvg}%`} hint="avance promedio" />
        <Kpi label="Fuente autorizada" value="Uniformes" hint="datos completos" />
      </div>
      <div className="charts-grid">
        <BarChart title="Playeras Joma por talla" rows={Object.entries(shirtSizes).map(([name, value]) => ({ name, value }))} />
        <BarChart title="Colaboradores por coordinador" rows={Object.entries(coordinators).map(([name, value]) => ({ name, value })).slice(0, 8)} />
      </div>
      <CollaboratorsTable rows={collaborators.slice(0, 35)} />
    </>
  );
}

function CollaboratorCapture({ currentUser, showToast }) {
  const editable = currentUser.role === "direccion" || currentUser.area === "colaboradores";
  return (
    <div className="form-grid">
      <div className="permission-strip full-width">Rol activo: {currentUser.name}. {editable ? "Puedes registrar o actualizar colaboradores." : "Este perfil solo puede consultar."}</div>
      <div className="form-panel">
        <h3>Formulario de colaborador</h3>
        <form action={() => showToast("Guardado simulado. En produccion actualizara Supabase.")}>
          <label>Nomina<input defaultValue="L03500000" disabled={!editable} /></label>
          <label>Nombre completo<input defaultValue="Nuevo colaborador" disabled={!editable} /></label>
          <label>Puesto<select disabled={!editable}><option>Instructor</option><option>Profesor</option><option>Coordinador</option></select></label>
          <label>Coordinador<input defaultValue="Pamela" disabled={!editable} /></label>
          <label>Playera Joma<select disabled={!editable}><option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option></select></label>
          <label>Talla pants<select disabled={!editable}><option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option></select></label>
          <label className="full">Correo institucional<input defaultValue="colaborador@tec.mx" disabled={!editable} /></label>
          <button className="primary-btn full" disabled={!editable}>Guardar colaborador</button>
        </form>
      </div>
      <FieldsPanel area={areas.find((item) => item.id === "colaboradores")} />
    </div>
  );
}

function ReportsView({ area }) {
  return <div className="reports-list">{area.reports.map((report) => <div className="report-row" key={report}><div><strong>{report}</strong><br /><span>PDF para lectura y Excel para auditoria operativa.</span></div><button className="ghost-btn">Preparar descarga</button></div>)}</div>;
}

function Blueprint({ area }) {
  return (
    <div className="blueprint-grid">
      <section className="blueprint-card"><h3>Mapa de modulos</h3><p>Las areas comparten el mismo patron de captura, indicadores y reportes.</p><div className="chip-list">{areas.map((item) => <span className="chip" key={item.id}>{item.name}</span>)}</div></section>
      <section className="blueprint-card"><h3>Base de datos</h3><p>PostgreSQL en Supabase con tablas para alumnos minimos, participaciones, colaboradores, contratos, eventos, torneos, compras y auditoria.</p></section>
      <section className="blueprint-card wide"><h3>Modulo activo: {area.name}</h3><div className="module-grid"><InfoCard title="Captura" text={area.capture.join(", ")} /><InfoCard title="Indicadores" text={area.indicators.join(", ")} /><InfoCard title="Graficas" text={area.charts.join(", ")} /></div></section>
    </div>
  );
}

function SystemMap() {
  const nodes = [
    ["Base de datos", "PostgreSQL en Supabase con politicas por rol."],
    ["Autenticacion", "Supabase Auth o SSO institucional en produccion."],
    ["Privacidad", "Alumnos con datos minimos; colaboradores con archivo autorizado."],
    ["Exportacion", "CSV local hoy; Excel/PDF formal en backend."],
    ["Auditoria", "Bitacora por usuario y accion."]
  ];
  return <><div className="section-title compact"><div><p className="eyebrow">Arquitectura</p><h2>Mapa del sistema</h2></div></div><div className="system-map">{nodes.map(([title, text]) => <div className="map-node" key={title}><strong>{title}</strong><span>{text}</span></div>)}</div></>;
}

function Kpi({ label, value, hint }) {
  return <div className="kpi"><span>{label}</span><strong>{value}</strong><em>{hint}</em></div>;
}

function BarChart({ title, rows, max = Math.max(...rows.map((row) => row.value), 1) }) {
  return <div className="chart-panel"><h3>{title}</h3>{rows.map((row) => <div className="bar-row" key={row.name}><span>{row.name}</span><div className="bar-track"><div className="bar-fill" style={{ width: `${Math.round((row.value / max) * 100)}%` }} /></div><strong>{row.value}</strong></div>)}</div>;
}

function DataTable({ rows }) {
  return <div className="table-wrap"><table><thead><tr><th>Matricula</th><th>Genero</th><th>Carrera</th><th>Semestre</th><th>Nivel</th><th>Area</th><th>Registros</th></tr></thead><tbody>{rows.map((row, index) => <tr key={`${row.matricula}-${index}`}><td>{row.matricula}</td><td>{row.genero}</td><td>{row.carrera}</td><td>{row.semestre}</td><td>{row.nivel}</td><td>{areas.find((item) => item.id === row.area)?.name || row.area}</td><td>{row.registros}</td></tr>)}</tbody></table></div>;
}

function CollaboratorsTable({ rows }) {
  return <div className="table-wrap"><table><thead><tr><th>Nomina</th><th>Colaborador</th><th>Puesto</th><th>Coordinador</th><th>% cursos</th><th>Playera</th><th>Pants</th><th>Correo</th><th>Genero</th><th>Primeros auxilios</th></tr></thead><tbody>{rows.map((row, index) => <tr key={`${row.Nomina}-${index}`}><td>{row.Nomina}</td><td>{row.Colaboradores}</td><td>{row.Puesto}</td><td>{row.Coordinador}</td><td>{row["% de cursos"]}</td><td>{row["Playeras Joma"]}</td><td>{row["Talla pants"]}</td><td>{row["correo institucional"]}</td><td>{row.Genero}</td><td>{row["Primeros auxilios"]}</td></tr>)}</tbody></table></div>;
}

function FieldsPanel({ area }) {
  return <div className="form-panel"><h3>Campos por area</h3><table><thead><tr><th>Campo</th><th>Uso</th></tr></thead><tbody>{area.capture.map((field) => <tr key={field}><td>{field}</td><td>Operacion del modulo</td></tr>)}</tbody></table></div>;
}

function InfoCard({ title, text }) {
  return <article className="module-card"><h3>{title}</h3><p>{text}.</p></article>;
}
