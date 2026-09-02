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

  function priorityDetailItems(detail) {
    return String(detail || "")
      .split(/(?:\r?\n)+|(?:^|\s+)[•·]\s+|(?:^|\s+)-\s+/u)
      .map((item) => item.trim().replace(/^[-•·]\s*/u, ""))
      .filter(Boolean);
  }

  function priorityDetailIcon(detail, title = "") {
    const text = String(detail || "").toLocaleLowerCase("es-MX");
    if (/indicador|reporte|medici[oó]n|avance/.test(text)) return "📊";
    if (/playera|uniforme|ropa/.test(text)) return "👕";
    if (/equipo de apoyo|material|herramienta/.test(text)) return "🧰";
    if (/pantalla|sitio|archivo|l[ií]nea|digital/.test(text)) return "💻";
    if (/comunicaci[oó]n|difundir|publicar|anuncio/.test(text)) return "📣";
    if (/carrera|correr|gimnasio|recorrido/.test(text)) return "🏃";
    if (/ceremonia|talento|copa|premio/.test(text)) return "🏆";
    if (/personal|profesor|staff|reuni[oó]n|pl[aá]tica|omar|wendy|ivonne|anabel|ram[oó]n/.test(text)) return "👥";
    if (/vale|despensa|pago|pagado/.test(text)) return "🎫";
    if (/fecha|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo|lunes|martes|hora|agenda|\d{1,2}:\d{2}/.test(text)) return "📅";
    const context = String(title || "").toLocaleLowerCase("es-MX");
    if (/indicador/.test(context)) return "📊";
    if (/comunicaci[oó]n/.test(context)) return "📣";
    if (/carrera|recorrido/.test(context)) return "🏃";
    if (/ceremonia|talento|copa/.test(context)) return "🏆";
    if (/vale|despensa/.test(context)) return "🎫";
    return "✨";
  }

  function renderPriorityBoard(source, escape = escapeHtml) {
    const captured = parsePriorityItems(source);
    const items = captured.length ? captured : DEFAULT_ITEMS;
    const tones = ["lime", "teal", "cyan", "blue", "navy", "purple", "coral", "slate"];
    const positionMaps = {
      1: [1],
      2: [8, 2],
      3: [1, 4, 6],
      4: [8, 2, 4, 6],
      5: [1, 2, 4, 6, 8],
      6: [1, 2, 3, 5, 6, 7],
      7: [1, 2, 3, 4, 6, 7, 8],
      8: [1, 2, 3, 4, 5, 6, 7, 8]
    };
    const positions = positionMaps[items.length] || positionMaps[8];
    return `<div class="executive-presentation-priority-board radial" data-priority-count="${items.length}">
      <div class="executive-presentation-priority-orbit">
        <div class="executive-presentation-priority-hub"><span>Bloque operativo</span><strong>Enfocados en mejorar nuestra operación y experiencia</strong></div>
        ${items.map((item, index) => {
          const details = priorityDetailItems(item.detail);
          const icon = priorityDetailIcon(details[0] || item.title, item.title);
          return `<article class="executive-presentation-priority-card radial-card radial-position-${positions[index]} ${tones[index]}${details.length ? "" : " title-only"}">
            <div class="executive-presentation-priority-petal"><span aria-hidden="true">${icon}</span></div>
            <div class="executive-presentation-priority-copy"><h3>${escape(item.title.toLocaleUpperCase("es-MX"))}</h3>${details.length ? `<ul class="executive-presentation-priority-radial-details">${details.map((detail) => `<li>${escape(detail)}</li>`).join("")}</ul>` : ""}</div>
          </article>`;
        }).join("")}
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
    priorityDetailIcon,
    priorityDetailItems,
    priorityItemsFromFormEntries,
    renderPriorityBoard,
    renderPriorityEditor,
    serializePriorityItems
  };
});
