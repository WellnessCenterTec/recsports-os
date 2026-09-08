(() => {
  const PENDING_STORAGE_KEY = "wellsync_executive_presentation_history_pending_v1";
  const formatter = new Intl.DateTimeFormat("es-MX", {
    timeZone: "America/Monterrey",
    dateStyle: "long",
    timeStyle: "short"
  });

  function cloneEditableContent(value) {
    return JSON.parse(JSON.stringify(value && typeof value === "object" ? value : {}));
  }

  function formatSavedAt(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? "Fecha no disponible" : formatter.format(date);
  }

  function defaultTitle(savedAt) {
    return `Presentación del ${formatSavedAt(savedAt)}`;
  }

  function isComplete(snapshot) {
    const slides = Array.isArray(snapshot?.slides) ? snapshot.slides : [];
    return slides.length === 12
      && new Set(slides.map((slide) => String(slide?.key || ""))).size === 12
      && slides.every((slide) => slide.key && typeof slide.html === "string" && slide.html.includes("<article"));
  }

  function createSnapshot({ title, weekKey, editableContent, slides, savedAt = new Date().toISOString(), id = crypto.randomUUID() }) {
    const snapshot = {
      schemaVersion: 1,
      id,
      title: String(title || "").trim() || defaultTitle(savedAt),
      weekKey: String(weekKey || ""),
      savedAt,
      editableContent: cloneEditableContent(editableContent),
      slides: cloneEditableContent(slides)
    };
    if (!isComplete(snapshot)) throw new Error("La presentación debe contener 12 diapositivas completas");
    return snapshot;
  }

  function createPendingStore(storage) {
    const read = () => {
      try {
        const value = JSON.parse(storage.getItem(PENDING_STORAGE_KEY) || "[]");
        return Array.isArray(value) ? value : [];
      } catch {
        return [];
      }
    };
    const write = (rows) => storage.setItem(PENDING_STORAGE_KEY, JSON.stringify(rows));
    return {
      list: () => cloneEditableContent(read()),
      upsert: (snapshot) => {
        const rows = read();
        const index = rows.findIndex((row) => row.id === snapshot.id);
        if (index >= 0) rows[index] = cloneEditableContent(snapshot);
        else rows.push(cloneEditableContent(snapshot));
        write(rows);
      },
      remove: (id) => write(read().filter((row) => row.id !== id))
    };
  }

  function weeklyKeys(notes) {
    return Object.keys(notes && typeof notes === "object" ? notes : {})
      .filter((key) => /^\d{4}-W\d{2}$/.test(key))
      .sort((a, b) => b.localeCompare(a));
  }

  function latestWeeklyContent(notes, currentWeekKey) {
    const source = notes && typeof notes === "object" ? notes : {};
    if (source[currentWeekKey] && typeof source[currentWeekKey] === "object") {
      return cloneEditableContent(source[currentWeekKey]);
    }
    const latestKey = weeklyKeys(source)[0];
    return latestKey ? cloneEditableContent(source[latestKey]) : {};
  }

  function compactWeeklyNotes(notes, currentWeekKey, maxWeeks = 1) {
    const source = notes && typeof notes === "object" ? notes : {};
    const keep = new Set(weeklyKeys(source).slice(0, Math.max(1, Number(maxWeeks) || 1)));
    if (source[currentWeekKey] && typeof source[currentWeekKey] === "object") keep.add(currentWeekKey);
    const compact = {};
    if (source.__feedback_tracking && typeof source.__feedback_tracking === "object") {
      compact.__feedback_tracking = cloneEditableContent(source.__feedback_tracking);
    }
    keep.forEach((key) => {
      compact[key] = cloneEditableContent(source[key]);
    });
    return compact;
  }

  window.WellSyncPresentationHistory = {
    PENDING_STORAGE_KEY,
    cloneEditableContent,
    formatSavedAt,
    defaultTitle,
    isComplete,
    createSnapshot,
    createPendingStore,
    latestWeeklyContent,
    compactWeeklyNotes
  };
})();
