(function attachBookingScheduleImport(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WellSyncBookingScheduleImport = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function createBookingScheduleImport() {
  const aliases = {
    professor: ["profesor", "professor", "docente", "nombredocente"],
    activity: ["actividad", "disciplina", "nombreasignatura"],
    day: ["dia", "day"],
    start: ["horainicio", "inicio", "start", "horainicial"],
    end: ["horafin", "fin", "end", "horafinal"],
    schedule: ["horario"],
    installation: ["instalacion", "espacio", "cancha", "salon", "lugar"],
    frequency: ["frecuencia", "frequency", "lun"],
    total: ["horastotales", "horasbooking"]
  };

  function normalizeKey(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "");
  }

  function normalizeBookingFrequency(value) {
    return String(value || "").replace(/\bjuves\b/gi, "Jueves").trim();
  }

  function hasValue(value) {
    return value !== null && value !== undefined && String(value).trim() !== "";
  }

  function findColumn(headers, group) {
    return headers.findIndex((header) => aliases[group].includes(header));
  }

  function headerMap(row) {
    const headers = row.map(normalizeKey);
    return Object.fromEntries(Object.keys(aliases).map((group) => [group, findColumn(headers, group)]));
  }

  function isBookingHeader(map) {
    return map.professor >= 0
      && map.activity >= 0
      && (map.day >= 0 || map.frequency >= 0)
      && (map.start >= 0 || map.schedule >= 0)
      && map.installation >= 0;
  }

  function valueAt(row, index) {
    return index >= 0 ? row[index] ?? "" : "";
  }

  function bookingRowsFromGrid(grid) {
    const rows = Array.isArray(grid) ? grid : [];
    let headerIndex = -1;
    let columns = null;
    const scanLimit = Math.min(rows.length, 20);
    for (let index = 0; index < scanLimit; index += 1) {
      const candidate = headerMap(Array.isArray(rows[index]) ? rows[index] : []);
      if (isBookingHeader(candidate)) {
        headerIndex = index;
        columns = candidate;
        break;
      }
    }
    if (headerIndex < 0 || !columns) {
      throw new Error("No pude localizar los encabezados de Booking");
    }

    return rows.slice(headerIndex + 1).flatMap((sourceRow, relativeIndex) => {
      const row = Array.isArray(sourceRow) ? sourceRow : [];
      const dayValue = valueAt(row, columns.day);
      const frequencyValue = valueAt(row, columns.frequency);
      const day = normalizeBookingFrequency(hasValue(dayValue) ? dayValue : frequencyValue);
      const frequency = normalizeBookingFrequency(hasValue(frequencyValue) ? frequencyValue : dayValue);
      const record = {
        Profesor: valueAt(row, columns.professor),
        Actividad: valueAt(row, columns.activity),
        Dia: day,
        "Hora inicio": valueAt(row, columns.start),
        "Hora fin": valueAt(row, columns.end),
        Instalacion: valueAt(row, columns.installation),
        Frecuencia: frequency,
        "Horas totales": valueAt(row, columns.total),
        __rowNumber: headerIndex + relativeIndex + 2
      };
      if (columns.schedule >= 0) record.Horario = valueAt(row, columns.schedule);
      const sessionFields = [
        record.Profesor,
        record.Actividad,
        record.Dia,
        record["Hora inicio"],
        record["Hora fin"],
        record.Horario,
        record.Instalacion,
        record.Frecuencia
      ];
      return sessionFields.some(hasValue) ? [record] : [];
    });
  }

  async function bookingRowsFromFile(file, XLSX) {
    if (!file || typeof file.arrayBuffer !== "function" || !XLSX?.read || !XLSX?.utils?.sheet_to_json) {
      throw new Error("No está disponible el lector de Booking");
    }
    const workbook = XLSX.read(await file.arrayBuffer(), { type: "array" });
    const firstSheetName = workbook.SheetNames?.[0];
    const sheet = firstSheetName ? workbook.Sheets[firstSheetName] : null;
    if (!sheet) throw new Error("El archivo de Booking no contiene hojas");
    const grid = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "", raw: false });
    return bookingRowsFromGrid(grid);
  }

  return { bookingRowsFromFile, bookingRowsFromGrid, normalizeBookingFrequency, normalizeKey };
});
