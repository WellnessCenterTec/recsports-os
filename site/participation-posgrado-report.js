/* Tablero temporal basado solo en las matrículas verificadas del archivo. */
(function (root) {
  "use strict";
  const modules = ["Clases", "Gimnasio", "Intramuros", "Booking", "Nado libre", "Vivencia"];
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const fmt = (value) => Number(value || 0).toLocaleString("es-MX");
  const pct = (part, whole) => whole ? `${(100 * part / whole).toFixed(1)}%` : "0.0%";
  const clean = (value) => String(value ?? "").trim().toUpperCase().replace(/\s+/g, "");
  const useful = (value) => {
    const text = String(value ?? "").trim();
    return text && !["SIN IDENTIFICAR", "NO APLICA", "N/A", "NA", "-"].includes(text.toUpperCase()) ? text : "";
  };
  const gender = (value) => {
    const text = clean(value);
    return ["F", "FEMENINO", "MUJER"].includes(text) ? "Femenino" : ["M", "MASCULINO", "HOMBRE"].includes(text) ? "Masculino" : "No especificado";
  };

  async function readPages(client, table, columns, field, values) {
    const rows = [];
    for (let offset = 0; ; offset += 1000) {
      const response = await client.from(table).select(columns).in(field, values).order(field, { ascending: true }).range(offset, offset + 999);
      if (response.error) throw new Error(`${table}: ${response.error.message}`);
      rows.push(...(response.data || []));
      if (!response.data || response.data.length < 1000) break;
    }
    return rows;
  }

  async function queryAcademicRows(client, matriculas) {
    if (!client?.auth?.getSession) throw new Error("Inicia sesión con Supabase para crear el reporte.");
    const { data, error } = await client.auth.getSession();
    if (error || !data?.session) throw new Error("La sesión de Supabase venció. Vuelve a iniciar sesión para crear el reporte.");
    const academics = [];
    for (let index = 0; index < matriculas.length; index += 250) {
      academics.push(...await readPages(client, "Base de datos_alumnos", 'Matricula,"Desc Programa Academico","v_Clave Major Agrupado",carrera,"Desc Genero"', "Matricula", matriculas.slice(index, index + 250)));
    }
    return { academics };
  }

  function buildReport(batchRows, source) {
    const academicMap = new Map((source.academics || []).map((row) => [clean(row.Matricula), row]));
    const unknown = batchRows.filter((row) => !academicMap.has(clean(row.matricula))).length;
    const rows = batchRows.map((row) => {
      const academic = academicMap.get(clean(row.matricula)) || {};
      const program = useful(academic["Desc Programa Academico"]) || useful(academic.carrera) || useful(academic["v_Clave Major Agrupado"]) || "Sin programa en la fuente";
      return { ...row, program, gender: gender(academic["Desc Genero"]) };
    });
    const participating = rows.filter((row) => row.total > 0).length;
    const records = rows.reduce((sum, row) => sum + row.total, 0);
    const byModule = modules.map((name) => ({ name, records: rows.reduce((sum, row) => sum + (row.counts[name] || 0), 0), students: rows.filter((row) => row.counts[name] > 0).length }));
    const programMap = new Map();
    const activityMap = new Map();
    const genderMap = new Map();
    const monthlyMap = new Map();
    rows.forEach((row) => {
      const program = programMap.get(row.program) || { name: row.program, students: 0, participating: 0, records: 0 };
      program.students++; program.participating += Number(row.total > 0); program.records += row.total;
      programMap.set(row.program, program);
      if (row.total > 0) genderMap.set(row.gender, (genderMap.get(row.gender) || 0) + 1);
      row.details.forEach((detail) => {
        const key = `${detail.module}\u0000${detail.activity}`;
        const activity = activityMap.get(key) || { module: detail.module, name: detail.activity, records: 0, students: new Set() };
        activity.records++; activity.students.add(row.matricula); activityMap.set(key, activity);
        if (/^\d{4}-\d{2}/.test(detail.date)) {
          const month = detail.date.slice(0, 7);
          monthlyMap.set(month, (monthlyMap.get(month) || 0) + 1);
        }
      });
    });
    return { input: batchRows.length, unknown, rows, participating, records, byModule,
      programs: [...programMap.values()].sort((a, b) => b.students - a.students || a.name.localeCompare(b.name, "es")),
      activities: [...activityMap.values()].map((item) => ({ ...item, students: item.students.size })).sort((a, b) => b.records - a.records || a.name.localeCompare(b.name, "es")),
      genders: [...genderMap].map(([name, students]) => ({ name, students })).sort((a, b) => b.students - a.students),
      monthly: [...monthlyMap].sort(([a], [b]) => a.localeCompare(b)).map(([month, records]) => ({ month, records })) };
  }

  const bar = (value, max) => `<span class="pv-report-bar"><i style="width:${max ? Math.max(2, 100 * value / max) : 0}%"></i></span>`;
  function renderReport(report) {
    const students = report.rows.length;
    const maximumModule = Math.max(1, ...report.byModule.map((item) => item.records));
    const topPrograms = report.programs.slice(0, 8);
    const maximumProgram = Math.max(1, ...topPrograms.map((item) => item.students));
    const topActivities = report.activities.slice(0, 8);
    const maximumActivity = Math.max(1, ...topActivities.map((item) => item.records));
    const months = report.monthly.slice(-12);
    const maximumMonth = Math.max(1, ...months.map((item) => item.records));
    return `<section class="pv-report" id="pvPosgradoReport" aria-label="Reporte Posgrado">
      <div class="pv-report-actions"><span>Solo matrículas del archivo verificado · Consulta de solo lectura</span><button class="ghost-btn" id="pvReportExcel" type="button">Descargar Excel</button><button class="primary-btn" id="pvReportPdf" type="button">Descargar PDF</button></div>
      <div class="pv-report-page">
        <header class="pv-report-title"><div class="pv-report-logo">WS</div><div><p>WellSync · RecSports &amp; Wellness</p><h2>Reporte Posgrado</h2><span>Participación verificada en Clases, Gimnasio, Intramuros, Booking, Nado libre y Vivencia</span></div><div class="pv-report-file"><strong>${fmt(report.input)}</strong><span>matrículas en el archivo</span></div></header>
        <section class="pv-report-hero"><div class="pv-report-hero-modules">${report.byModule.map((item) => `<article><span>${esc(item.name)}</span><strong>${fmt(item.records)}</strong><small>${fmt(item.students)} alumnos únicos en el módulo</small></article>`).join("")}</div><div class="pv-report-hero-impact"><span>ALUMNOS DE POSGRADO CON PARTICIPACIÓN</span><strong>${fmt(report.participating)}</strong><div class="pv-report-donut" style="--value:${students ? 100 * report.participating / students : 0}%"><b>${pct(report.participating, students)}</b><small>del Posgrado en el archivo</small></div></div></section>
        <div class="pv-report-kpis"><article><span>Matrículas del archivo de Posgrado</span><strong>${fmt(students)}</strong></article><article><span>Sin participación verificada</span><strong>${fmt(students - report.participating)}</strong></article><article><span>Registros confirmados</span><strong>${fmt(report.records)}</strong></article><article><span>Registros por matrícula del archivo</span><strong>${students ? (report.records / students).toFixed(2) : "0.00"}</strong></article></div>
        <p class="pv-report-scope">El archivo verificado se considera el padrón de Posgrado. No se usa el campo de nivel escolar de la base para excluir matrículas, porque la carga actual puede clasificar códigos de programa como Profesional. ${fmt(report.unknown)} matrículas no aparecen en Base de datos_alumnos; permanecen en los totales con programa y género sin dato. Solo se cuentan asistencias o usos confirmados y todas las fechas disponibles.</p>
        <div class="pv-report-grid"><article class="pv-report-card"><h3>Participación por módulo</h3><p>Registros confirmados y alumnos únicos; un alumno puede aparecer en varios módulos.</p><div class="pv-report-module-list">${report.byModule.map((item) => `<div><span>${esc(item.name)}</span>${bar(item.records, maximumModule)}<strong>${fmt(item.records)}</strong><small>${fmt(item.students)} alumnos · ${pct(item.students, students)} del Posgrado</small></div>`).join("")}</div></article>
        <article class="pv-report-card"><h3>Programas con más alumnos</h3><p>Porcentaje de participación dentro de cada programa del archivo.</p>${topPrograms.length ? `<div class="pv-report-rank">${topPrograms.map((item, i) => `<div><b>${i + 1}</b><span title="${esc(item.name)}">${esc(item.name)}</span><strong>${fmt(item.students)}</strong>${bar(item.students, maximumProgram)}<small>${fmt(item.participating)} con participación · ${pct(item.participating, item.students)}</small></div>`).join("")}</div>` : `<p class="pv-report-empty">Sin programas de Posgrado en el archivo.</p>`}</article>
        <article class="pv-report-card"><h3>Actividades más registradas</h3><p>Frecuencia de registros, separada de alumnos únicos.</p>${topActivities.length ? `<div class="pv-report-rank">${topActivities.map((item, i) => `<div><b>${i + 1}</b><span title="${esc(item.name)}">${esc(item.name)} <em>· ${esc(item.module)}</em></span><strong>${fmt(item.records)}</strong>${bar(item.records, maximumActivity)}<small>${fmt(item.students)} alumnos únicos</small></div>`).join("")}</div>` : `<p class="pv-report-empty">No hay actividades con asistencia o uso confirmados.</p>`}</article>
        <article class="pv-report-card"><h3>Registros por mes</h3><p>Solo fechas reales disponibles en las fuentes; se muestran los últimos 12 meses con actividad.</p>${months.length ? `<div class="pv-report-months">${months.map((item) => `<div><strong>${fmt(item.records)}</strong><span style="height:${Math.max(6, 100 * item.records / maximumMonth)}%"></span><small>${esc(item.month)}</small></div>`).join("")}</div>` : `<p class="pv-report-empty">Las fuentes consultadas no aportaron fechas válidas.</p>`}<h4>Alumnos participantes por género</h4><div class="pv-report-genders">${report.genders.map((item) => `<div><span>${esc(item.name)}</span><strong>${fmt(item.students)}</strong><small>${pct(item.students, report.participating)}</small></div>`).join("") || "Sin participación confirmada."}</div></article></div>
        <article class="pv-report-card pv-report-table"><h3>Resumen por programa</h3><div class="table-wrap"><table><thead><tr><th>Programa</th><th>Alumnos únicos</th><th>Con participación</th><th>Sin participación</th><th>Cobertura</th><th>Registros</th></tr></thead><tbody>${report.programs.map((item) => `<tr><td>${esc(item.name)}</td><td>${fmt(item.students)}</td><td>${fmt(item.participating)}</td><td>${fmt(item.students - item.participating)}</td><td>${pct(item.participating, item.students)}</td><td>${fmt(item.records)}</td></tr>`).join("") || `<tr><td colspan="6">Sin alumnos de Posgrado identificados en el archivo.</td></tr>`}</tbody></table></div></article>
        <footer class="pv-report-footer">WellSync · Reporte Posgrado · Solo matrículas del archivo verificado · Sin nombres ni correos</footer>
      </div></section>`;
  }

  function exportWorkbook(XLSX, report) {
    if (!XLSX || !report) throw new Error("No está disponible el generador de Excel.");
    const book = XLSX.utils.book_new();
    const append = (name, rows) => XLSX.utils.book_append_sheet(book, XLSX.utils.json_to_sheet(rows), name);
    append("INDICADORES", [{ "Matrículas del archivo de Posgrado": report.input, "Con participación": report.participating, "Sin participación": report.rows.length - report.participating, "Registros": report.records, "Sin datos académicos": report.unknown }]);
    append("PROGRAMAS", report.programs.map((item) => ({ Programa: item.name, "Alumnos únicos": item.students, "Con participación": item.participating, "Sin participación": item.students - item.participating, "Porcentaje de participación": pct(item.participating, item.students), Registros: item.records })));
    append("MODULOS", report.byModule.map((item) => ({ Módulo: item.name, Registros: item.records, "Alumnos únicos": item.students, "Porcentaje de alumnos": pct(item.students, report.rows.length) })));
    append("ACTIVIDADES", report.activities.map((item) => ({ Módulo: item.module, Actividad: item.name, Registros: item.records, "Alumnos únicos": item.students })));
    append("ALUMNOS", report.rows.map((row) => ({ Matrícula: row.matricula, Programa: row.program, Género: row.gender, "Participó": row.total ? "Sí" : "No", Registros: row.total, ...Object.fromEntries(modules.map((name) => [name, row.counts[name] || 0])) })));
    XLSX.writeFile(book, "reporte-posgrado-participacion.xlsx");
  }
  root.WellSyncPosgradoReport = { queryAcademicRows, buildReport, renderReport, exportWorkbook };
})(typeof window === "undefined" ? globalThis : window);
