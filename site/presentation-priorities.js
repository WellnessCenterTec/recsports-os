(function initPresentationPriorities(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WellSyncPresentationPriorities = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPresentationPrioritiesApi() {
  const MAX_ITEMS = 8;
  const DEFAULT_ITEMS = [
    { title: "Planeación", detail: "Confirmar calendario y responsables del siguiente bloque." },
    { title: "Boletos de concierto", detail: "Definir entrega, control y seguimiento operativo." },
    { title: "Desalojo de casillero", detail: "Comunicar fechas clave y validar espacios liberados." },
    { title: "Indicadores", detail: "Enviar archivos y lecturas de cierre por área." },
    { title: "Evaluaciones", detail: "Compartir retroalimentación constructiva y acuerdos." }
  ];

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalizePriorityItems(items) {
    return (Array.isArray(items) ? items : [])
      .map((item) => {
        const rawTitle = String(item?.title || "").trim();
        const rawDetail = String(item?.detail || "").trim();
        return rawTitle
          ? { title: rawTitle, detail: rawDetail }
          : rawDetail
            ? { title: rawDetail, detail: "" }
            : null;
      })
      .filter(Boolean)
      .slice(0, MAX_ITEMS);
  }

  function parseLegacyPriorityItems(source) {
    return String(source || "")
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => ({ title: line, detail: "" }));
  }

  function parsePriorityItems(source) {
    if (Array.isArray(source)) return normalizePriorityItems(source);
    const text = String(source || "").trim();
    if (!text) return [];
    try {
      const parsed = JSON.parse(text);
      if (parsed && parsed.version === 2 && Array.isArray(parsed.items)) {
        return normalizePriorityItems(parsed.items);
      }
    } catch {
      // El contenido anterior se migra abajo, una línea completa por título.
    }
    return normalizePriorityItems(parseLegacyPriorityItems(text));
  }

  function serializePriorityItems(items) {
    return JSON.stringify({ version: 2, items: normalizePriorityItems(items) });
  }

  function priorityItemsFromFormEntries(entries) {
    const rows = Array.from({ length: MAX_ITEMS }, () => ({ title: "", detail: "" }));
    Array.from(entries || []).forEach(([key, value]) => {
      const match = /^priority_(title|detail)_(\d)$/.exec(String(key));
      if (!match) return;
      const index = Number(match[2]);
      if (index >= MAX_ITEMS) return;
      rows[index][match[1]] = String(value || "").trim();
    });
    return normalizePriorityItems(rows);
  }

  function renderPriorityEditor(source, escape = escapeHtml) {
    const items = parsePriorityItems(source);
    const rows = Array.from({ length: MAX_ITEMS }, (_, index) => items[index] || { title: "", detail: "" });
    return `<div class="executive-presentation-priority-editor">
      <p class="executive-presentation-priority-editor-help">Captura hasta ocho puntos. El título será el elemento principal y la información adicional aparecerá debajo.</p>
      ${rows.map((item, index) => `<fieldset data-priority-editor-item="${index}">
        <legend>Punto ${index + 1}</legend>
        <label>Título principal<input type="text" name="priority_title_${index}" maxlength="90" value="${escape(item.title)}" placeholder="PLANEACIÓN SEMESTRAL" /></label>
        <label>Información adicional<textarea name="priority_detail_${index}" rows="3" maxlength="320" placeholder="Fecha, horario, responsable o contexto">${escape(item.detail)}</textarea></label>
      </fieldset>`).join("")}
    </div>`;
  }

  function priorityColumnCount(count) {
    if (count <= 1) return 1;
    if (count <= 4) return 2;
    if (count <= 6) return 3;
    return 4;
  }

  function renderPriorityBoard(source, escape = escapeHtml) {
    const captured = parsePriorityItems(source);
    const items = captured.length ? captured : DEFAULT_ITEMS;
    const columns = priorityColumnCount(items.length);
    const tones = ["blue", "teal", "green", "purple", "navy", "blue", "teal", "green"];
    return `<div class="executive-presentation-priority-board" data-priority-count="${items.length}">
      <div class="executive-presentation-priority-intro">
        <span>Bloque operativo</span>
        <strong>Enfocados en mejorar nuestra operación y experiencia</strong>
      </div>
      <div class="executive-presentation-priority-grid priority-columns-${columns}">
        ${items.map((item, index) => `<article class="executive-presentation-priority-card ${tones[index]}">
          <h3>${escape(item.title.toLocaleUpperCase("es-MX"))}</h3>
          ${item.detail ? `<p>${escape(item.detail)}</p>` : ""}
        </article>`).join("")}
      </div>
    </div>`;
  }

  return {
    MAX_ITEMS,
    DEFAULT_ITEMS,
    escapeHtml,
    normalizePriorityItems,
    parsePriorityItems,
    priorityColumnCount,
    priorityItemsFromFormEntries,
    renderPriorityBoard,
    renderPriorityEditor,
    serializePriorityItems
  };
});
