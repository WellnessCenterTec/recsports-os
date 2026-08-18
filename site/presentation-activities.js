(function initPresentationActivities(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WellSyncPresentationActivities = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPresentationActivitiesApi() {
  const DEFAULT_LIMIT = 10;

  function localDateKey(value = new Date()) {
    const date = new Date(value);
    date.setHours(0, 0, 0, 0);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  function upcomingActivities(rows, referenceDate = new Date(), limit = DEFAULT_LIMIT) {
    const startKey = localDateKey(referenceDate);
    return (Array.isArray(rows) ? rows : [])
      .filter((row) => row?.activity && row?.date && String(row.date) >= startKey)
      .sort((a, b) => String(a.date).localeCompare(String(b.date)) || String(a.activity).localeCompare(String(b.activity), "es-MX"))
      .slice(0, Math.max(0, Number(limit) || DEFAULT_LIMIT));
  }

  function activityDateParts(value) {
    const raw = String(value || "").trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) return { date: raw || "Sin fecha", weekday: "" };
    const date = new Date(`${raw}T12:00:00`);
    return {
      date: raw,
      weekday: date.toLocaleDateString("es-MX", { weekday: "long" })
    };
  }

  return { DEFAULT_LIMIT, localDateKey, upcomingActivities, activityDateParts };
});
