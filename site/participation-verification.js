/* Consulta temporal: ninguna carga ni participación se escribe en el servidor. */
(function (root) {
  "use strict";
  const modules = ["Clases", "Gimnasio", "Intramuros", "Booking", "Nado libre", "Vivencia"];
  const state = { userId: null, grid: null, headers: [], column: -1, rows: null, detail: null, filter: "todos", search: "", sort: "matricula", descending: false, loading: false, error: "" };
  function useSession(userId) {
    if (state.userId === userId) return;
    Object.assign(state, { userId, grid: null, headers: [], column: -1, rows: null, detail: null, filter: "todos", search: "", sort: "matricula", descending: false, loading: false, error: "" });
  }
  const clean = (value) => String(value ?? "").trim().toUpperCase().replace(/\s+/g, "");
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const date = (value) => value ? String(value).slice(0, 10) : "Sin fecha en la fuente";
  const inputSummary = (grid, column) => {
    const values = (grid || []).slice(1).map((row) => clean(row[column])).filter(Boolean);
    return { input: [...new Set(values)], rows: Math.max(0, (grid || []).length - 1), duplicates: values.length - new Set(values).size };
  };
  const activityForBooking = (value) => /\bnado\s*libre\b/i.test(String(value || "")) ? "Nado libre" : "Booking";
  const attended = (value) => ["ASISTIO", "ASISTIÓ", "ATTENDED", "CHECKED-IN", "COMPLETED", "REALIZADO"].includes(clean(value).replace(/_/g, "-"));
  const validBooking = (value) => ["ATTENDED", "CHECKED-IN", "COMPLETED", "ASISTIO", "ASISTIÓ"].includes(clean(value).replace(/_/g, "-"));
  function emptyRow(matricula) { return { matricula, total: 0, counts: Object.fromEntries(modules.map((name) => [name, 0])), details: [] }; }
  function add(row, record, seen) {
    const key = `${record.source}:${record.id}`;
    if (seen.has(key)) return;
    seen.add(key);
    row.details.push(record);
    row.counts[record.module]++;
    row.total++;
  }
  function consolidate(input, sources) {
    const map = new Map(input.map((matricula) => [matricula, emptyRow(matricula)]));
    const seen = new Set();
    for (const item of sources.captures || []) {
      const row = map.get(clean(item.matricula));
      const module = item.area_key === "clases" ? "Clases" : item.area_key === "intramuros" ? "Intramuros" : "";
      if (!row || !module || !attended(item.status)) continue;
      add(row, { source: "participations", id: item.id, module, activity: item.operation_label || item.metadata?.operacion || "Sin actividad en la fuente", date: date(item.record_date), category: item.status }, seen);
    }
    for (const item of sources.gym || []) {
      const row = map.get(clean(item.matricula));
      if (!row) continue;
      add(row, { source: "gym_asistencias", id: item.id, module: "Gimnasio", activity: item.sitio ? `Acceso ${item.sitio}` : "Acceso gimnasio", date: date(item.fecha), category: item.hora || "" }, seen);
    }
    for (const item of sources.booking || []) {
      const row = map.get(clean(item.matricula));
      if (!row || !validBooking(item.status)) continue;
      add(row, { source: "class_booking_reservations", id: item.source_reservation_id || item.id, module: activityForBooking(item.activity || item.raw_space), activity: item.activity || "Sin actividad en la fuente", date: date(item.reservation_at), category: item.status }, seen);
    }
    for (const item of sources.vivencia || []) {
      const row = map.get(clean(item.matricula));
      if (!row || clean(item.event_status) !== "REALIZADO") continue;
      add(row, { source: "vivencia_participant_details", id: `${item.event_id}:${clean(item.matricula)}`, module: "Vivencia", activity: item.event_name || "Sin actividad en la fuente", date: date(item.event_date), category: item.classification || "" }, seen);
    }
    return [...map.values()];
  }
  async function pages(client, table, columns, batch) {
    const result = [];
    for (let offset = 0; ; offset += 1000) {
      const response = await client.from(table).select(columns).in("matricula", batch).order("id", { ascending: true }).range(offset, offset + 999);
      if (response.error) throw new Error(`${table}: ${response.error.message}`);
      result.push(...(response.data || []));
      if (!response.data || response.data.length < 1000) break;
    }
    return result;
  }
  async function query(client, input) {
    if (!client) throw new Error("Inicia sesión con Supabase para consultar las fuentes.");
    const sources = { captures: [], gym: [], booking: [], vivencia: [] };
    for (let index = 0; index < input.length; index += 250) {
      const batch = input.slice(index, index + 250);
      const parts = await Promise.all([
        pages(client, "participations", "id,matricula,area_key,status,operation_label,metadata,record_date", batch),
        pages(client, "gym_asistencias", "id,matricula,fecha,hora,sitio", batch),
        pages(client, "class_booking_reservations", "id,source_reservation_id,matricula,reservation_at,status,activity,raw_space", batch),
        pages(client, "vivencia_participant_details", "id,event_id,matricula,event_name,event_date,event_status,classification", batch)
      ]);
      ["captures", "gym", "booking", "vivencia"].forEach((key, i) => sources[key].push(...parts[i]));
    }
    return sources;
  }
  function displayRows() {
    return (state.rows || []).filter((row) => (state.filter === "todos" || (state.filter === "si") === (row.total > 0)) && row.matricula.includes(clean(state.search)))
      .sort((a, b) => {
        const av = state.sort === "matricula" ? a.matricula : state.sort === "total" ? a.total : a.counts[state.sort];
        const bv = state.sort === "matricula" ? b.matricula : state.sort === "total" ? b.total : b.counts[state.sort];
        return (typeof av === "number" ? av - bv : av.localeCompare(bv)) * (state.descending ? -1 : 1);
      });
  }
  function renderView() {
    const summary = inputSummary(state.grid, state.column);
    const rows = state.rows || [];
    const total = rows.reduce((sum, row) => sum + row.total, 0);
    const participating = rows.filter((row) => row.total > 0).length;
    const selected = rows.find((row) => row.matricula === state.detail);
    const groups = selected ? modules.map((module) => ({ module, records: selected.details.filter((item) => item.module === module) })).filter((group) => group.records.length) : [];
    const detail = selected ? `<div class="pv-backdrop"><section class="pv-modal" role="dialog" aria-modal="true" aria-label="Detalle de ${esc(selected.matricula)}"><button class="ghost-btn" id="pvClose">Cerrar</button><h2>Matrícula: ${esc(selected.matricula)}</h2><p>Participaciones totales: <strong>${selected.total}</strong></p>${groups.length ? groups.map(({ module, records }) => {
      const activities = new Map();
      records.forEach((record) => { if (!activities.has(record.activity)) activities.set(record.activity, []); activities.get(record.activity).push(record); });
      return `<h3>${esc(module)}</h3>${[...activities].map(([activity, items]) => `<strong>${esc(activity)} — ${items.length} participación${items.length === 1 ? "" : "es"}</strong><ul>${items.map((item) => `<li>${esc(item.date)} · ${esc(item.source)} · ID ${esc(item.id)}${item.category ? ` · ${esc(item.category)}` : ""}</li>`).join("")}</ul>`).join("")}`;
    }).join("") : "Sin registros de participación verificada en las fuentes consultadas."}</section></div>` : "";
    return `<section class="pv-module"><div class="pv-heading"><div><p class="eyebrow">Consulta de solo lectura</p><h2>Verificación de participación</h2><p>Carga matrículas y consulta asistencias o usos confirmados en las fuentes disponibles.</p></div></div>
      <div class="pv-upload"><label>Archivo Excel o CSV<input id="pvFile" type="file" accept=".xlsx,.csv"></label>${state.headers.length ? `<label>Columna de matrícula<select id="pvColumn">${state.headers.map((value, i) => `<option value="${i}" ${i === state.column ? "selected" : ""}>${esc(value || `Columna ${i + 1}`)}</option>`).join("")}</select></label>` : ""}<div class="pv-upload-counts"><span>Filas cargadas <strong>${summary.rows}</strong></span><span>Matrículas únicas <strong>${summary.input.length}</strong></span><span>Duplicados <strong>${summary.duplicates}</strong></span></div><button class="primary-btn" id="pvVerify" ${summary.input.length && !state.loading ? "" : "disabled"}>${state.loading ? "Verificando participación…" : "Verificar participación"}</button></div>
      <p class="pv-note">Clases e Intramuros: solo capturas con estatus de asistencia. Booking y Nado libre: solo reservaciones con estatus de asistencia o uso; una reserva APPROVED no prueba asistencia. Vivencia: participantes de eventos realizados. Las listas de clase, torneos y alumnos no se cuentan.</p>
      ${state.error ? `<div class="permission-strip" role="alert">Consulta incompleta: ${esc(state.error)}. No se muestran resultados para evitar falsos ceros.</div>` : ""}
      ${state.rows ? `<div class="pv-kpis">${[["Matrículas analizadas", rows.length], ["Con participación", participating], ["Sin participación verificada", rows.length - participating], ["Participaciones totales", total], ["Promedio de participaciones", rows.length ? (total / rows.length).toFixed(2) : "0"]].map(([label, value]) => `<article class="kpi"><span>${label}</span><strong>${value}</strong></article>`).join("")}</div><div class="pv-tools"><label>Filtrar<select id="pvFilter"><option value="todos" ${state.filter === "todos" ? "selected" : ""}>Todos</option><option value="si" ${state.filter === "si" ? "selected" : ""}>Con participación</option><option value="no" ${state.filter === "no" ? "selected" : ""}>Sin participación</option></select></label><label>Buscar matrícula<input id="pvSearch" type="search" value="${esc(state.search)}"></label><button class="ghost-btn" id="pvExport">Descargar resultados</button></div><div class="table-wrap"><table><thead><tr>${["Matrícula", "Participó", "Total", ...modules, "Detalle"].map((label) => `<th>${label === "Participó" || label === "Detalle" ? esc(label) : `<button class="pv-sort" data-sort="${esc(label === "Matrícula" ? "matricula" : label === "Total" ? "total" : label)}">${esc(label)}</button>`}</th>`).join("")}</tr></thead><tbody>${displayRows().map((row) => `<tr><td>${esc(row.matricula)}</td><td>${row.total ? "Sí" : "No"}</td><td>${row.total}</td>${modules.map((module) => `<td>${row.counts[module]}</td>`).join("")}<td><button class="ghost-btn pv-detail" data-matricula="${esc(row.matricula)}">Ver detalle</button></td></tr>`).join("") || `<tr><td colspan="10">Sin resultados para estos filtros.</td></tr>`}</tbody></table></div>${detail}` : ""}</section>`;
  }
  function exportWorkbook(XLSX) {
    if (!XLSX || !state.rows) throw new Error("No está disponible el generador de Excel.");
    const book = XLSX.utils.book_new();
    const summary = state.rows.map((row) => ({ "Matrícula": row.matricula, "Participó": row.total ? "Sí" : "No", "Total participaciones": row.total, ...Object.fromEntries(modules.map((module) => [module, row.counts[module]])) }));
    const detail = state.rows.flatMap((row) => row.details.map((item) => ({ "Matrícula": row.matricula, "Módulo": item.module, "Actividad": item.activity, "Fecha": item.date, "Fuente": item.source, "ID origen": item.id, "Categoría": item.category })));
    XLSX.utils.book_append_sheet(book, XLSX.utils.json_to_sheet(summary), "RESUMEN");
    XLSX.utils.book_append_sheet(book, XLSX.utils.json_to_sheet(detail, { header: ["Matrícula", "Módulo", "Actividad", "Fecha", "Fuente", "ID origen", "Categoría"] }), "DETALLE");
    XLSX.writeFile(book, "verificacion-participacion.xlsx");
  }
  function bindView(container, client, XLSX) {
    const refresh = () => { container.innerHTML = renderView(); bindView(container, client, XLSX); };
    container.querySelector("#pvFile")?.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      state.error = ""; state.rows = null; state.detail = null;
      try {
        if (!/\.(xlsx|csv)$/i.test(file.name)) throw new Error("Usa un archivo .xlsx o .csv.");
        const workbook = XLSX.read(await file.arrayBuffer(), { type: "array" });
        const grid = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1, defval: "" });
        if (!grid.length) throw new Error("El archivo está vacío.");
        state.grid = grid; state.headers = grid[0].map((value, i) => String(value || `Columna ${i + 1}`));
        state.column = state.headers.findIndex((value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase() === "matricula");
        if (state.column < 0) state.column = 0;
      } catch (error) { state.grid = null; state.headers = []; state.column = -1; state.error = error.message; }
      refresh();
    });
    container.querySelector("#pvColumn")?.addEventListener("change", (event) => { state.column = Number(event.target.value); state.rows = null; refresh(); });
    container.querySelector("#pvVerify")?.addEventListener("click", async () => {
      if (state.loading) return;
      state.loading = true; state.error = ""; state.rows = null; refresh();
      try { const input = inputSummary(state.grid, state.column).input; state.rows = consolidate(input, await query(client, input)); }
      catch (error) { state.error = error.message; }
      finally { state.loading = false; refresh(); }
    });
    container.querySelector("#pvFilter")?.addEventListener("change", (event) => { state.filter = event.target.value; refresh(); });
    container.querySelector("#pvSearch")?.addEventListener("input", (event) => { const position = event.target.selectionStart; state.search = event.target.value; refresh(); const field = container.querySelector("#pvSearch"); field.focus(); field.setSelectionRange(position, position); });
    container.querySelectorAll(".pv-sort").forEach((button) => button.addEventListener("click", () => { state.descending = state.sort === button.dataset.sort ? !state.descending : false; state.sort = button.dataset.sort; refresh(); }));
    container.querySelectorAll(".pv-detail").forEach((button) => button.addEventListener("click", () => { state.detail = button.dataset.matricula; refresh(); }));
    container.querySelector("#pvClose")?.addEventListener("click", () => { state.detail = null; refresh(); });
    container.querySelector("#pvExport")?.addEventListener("click", () => { try { exportWorkbook(XLSX); } catch (error) { state.error = error.message; refresh(); } });
  }
  root.WellSyncParticipationVerification = { renderView, bindView, inputSummary, consolidate, activityForBooking, validBooking, query, exportWorkbook, useSession, state };
})(typeof window === "undefined" ? globalThis : window);
