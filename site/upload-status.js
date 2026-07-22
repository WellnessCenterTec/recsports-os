function uploadStatusDateParts(value) {
  const date = new Date(value);
  if (!value || Number.isNaN(date.getTime())) return null;
  const parts = new Intl.DateTimeFormat("es-MX", {
    timeZone: "America/Monterrey",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(date);
  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

function formatUploadSuccess(value) {
  const parts = uploadStatusDateParts(value);
  if (!parts) return "Última carga exitosa: sin registros";
  const month = String(parts.month || "").replace(".", "").toLowerCase();
  return `Última carga exitosa: ${parts.day} ${month} ${parts.year}, ${parts.hour}:${parts.minute}`;
}

function createUploadStatusStore(storage) {
  const storageKey = "wellsync_upload_success_v1";
  const read = () => {
    try {
      return JSON.parse(storage?.getItem(storageKey) || "{}");
    } catch {
      return {};
    }
  };
  return {
    get(key) {
      return read()[key] || "";
    },
    record(key, value = new Date().toISOString()) {
      const date = new Date(value);
      if (!key || Number.isNaN(date.getTime())) return "";
      const normalized = date.toISOString();
      const values = read();
      values[key] = normalized;
      try {
        storage?.setItem(storageKey, JSON.stringify(values));
      } catch {
        return "";
      }
      return normalized;
    }
  };
}

if (typeof window !== "undefined") {
  window.WellSyncUploadStatus = { formatUploadSuccess, createUploadStatusStore };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports.formatUploadSuccess = formatUploadSuccess;
  module.exports.createUploadStatusStore = createUploadStatusStore;
}
