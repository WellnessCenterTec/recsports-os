const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1DL1GIPjzqPqXlJWlnWlAOWEiMJM9tPqknT6M4HCXEHM/gviz/tq?tqx=out:csv&sheet=Respuestas%20de%20formulario%201";
const FORM_SUBMIT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc2XKrOEilT6DDskV3zZAi0Ysn6n2j-1VsTR4U03kvcsQ0VHw/formResponse";
const formEntries = {
  specificDate: "entry.1046506641",
  area: "entry.864852996",
  month: "entry.1216259793",
  week: "entry.1237735269",
  activity: "entry.129099553",
};

function getFormAreaValue(areaKey) {
  const formAreaValues = {
    comunicacion: "comunicación",
    direccion: "dirección",
  };
  return formAreaValues[areaKey] || areaKey;
}

const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const refreshIntervalMs = 10000;
const completionStorageKey = "planeacion-actividades-completadas-v1";
const deletedStorageKey = "planeacion-actividades-ocultas-v1";
const pendingStorageKey = "planeacion-actividades-pendientes-v1";
const pendingActivityMaxAgeMs = 30 * 60 * 1000;
const deleteMarkerPrefix = "__OCULTAR_ACTIVIDAD__::";
const weekColumnWidth = 163;
const tecWeekPeriods = ["feb-jun", "ago-dic"];
const tecWeekNumbers = [6, 12];

const periods = {
  invierno: {
    label: "Invierno",
    months: ["enero", "febrero"],
    start: new Date(2027, 0, 4),
    weekCount: 6,
    firstWeekNumber: 1,
  },
  "feb-jun": {
    label: "Feb-Jun",
    months: ["febrero", "marzo", "abril", "mayo", "junio"],
    start: new Date(2027, 1, 8),
    customWeeks: [
      { number: 1, start: new Date(2027, 1, 8) },
      { number: 2, start: new Date(2027, 1, 15) },
      { number: 3, start: new Date(2027, 1, 22) },
      { number: 4, start: new Date(2027, 2, 1) },
      { number: 5, start: new Date(2027, 2, 8) },
      { number: 6, start: new Date(2027, 2, 15) },
      { key: "vacaciones-marzo", label: "Vacaciones", start: new Date(2027, 2, 22) },
      { number: 7, start: new Date(2027, 2, 29) },
      { number: 8, start: new Date(2027, 3, 5) },
      { number: 9, start: new Date(2027, 3, 12) },
      { number: 10, start: new Date(2027, 3, 19) },
      { number: 11, start: new Date(2027, 3, 26) },
      { number: 12, start: new Date(2027, 4, 3) },
      { number: 13, start: new Date(2027, 4, 10) },
      { number: 14, start: new Date(2027, 4, 17) },
      { number: 15, start: new Date(2027, 4, 24) },
      { number: 16, start: new Date(2027, 4, 31) },
      { number: 17, start: new Date(2027, 5, 7) },
      { number: 18, start: new Date(2027, 5, 14) },
      { number: 19, start: new Date(2027, 5, 21) },
    ],
  },
  verano: {
    label: "Verano",
    months: ["junio", "julio"],
    start: new Date(2027, 5, 28),
    weekCount: 5,
    firstWeekNumber: 1,
  },
  "ago-dic": {
    label: "Ago-Dic",
    months: ["agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    start: new Date(2026, 7, 3),
    weekCount: 20,
  },
};

const areas = [
  { key: "direccion", label: "Dirección", icon: "DIR", image: "assets/planeacion-direccion.jpg", className: "area-direccion" },
  { key: "clases", label: "Clases", icon: "CLS", image: "assets/planeacion-clases.jpg", className: "area-clases" },
  { key: "comunicacion", label: "Comunicación", icon: "COM", image: "assets/planeacion-comunicacion.jpg", className: "area-comunicacion" },
  { key: "intramuros", label: "Intramuros", icon: "INT", image: "assets/planeacion-intramuros.jpg", className: "area-intramuros" },
  { key: "gimnasio", label: "Gimnasio", icon: "GYM", image: "assets/planeacion-gimnasio.jpg", className: "area-gimnasio" },
  { key: "vivencia", label: "Vivencia", icon: "VIV", image: "assets/planeacion-vivencia.jpg", className: "area-vivencia" },
];

const fallbackRows = [
  {
    timestamp: "3/6/2026 14:11:35",
    area: "intramuros",
    month: "septiembre",
    activity: "Inscripciones nuevas",
  },
  {
    timestamp: "3/6/2026 14:11:56",
    area: "intramuros",
    month: "septiembre",
    activity: "Juntas previas de todos los torneos",
  },
  {
    timestamp: "3/6/2026 14:12:21",
    area: "intramuros",
    month: "septiembre",
    activity: "Reunión de equipo 3 veces al mes",
  },
];

const state = {
  rows: [],
  period: "ago-dic",
  area: "todas",
  month: "todos",
  selectedWeekKey: "",
  isRefreshing: false,
  completedActivities: new Set(readCompletedActivities()),
  deletedActivities: new Set(readDeletedActivities()),
  pendingActivities: readPendingActivities(),
};

const boardEl = document.querySelector("#planningBoard");
const listEl = document.querySelector("#activityList");
const areaFilter = document.querySelector("#areaFilter");
const monthFilter = document.querySelector("#monthFilter");
const periodTabs = [...document.querySelectorAll("[data-period]")];
const importButton = document.querySelector("#importButton");
const importFile = document.querySelector("#importFile");
const importStatus = document.querySelector("#importStatus");
const templateButton = document.querySelector("#templateButton");
const captureButton = document.querySelector("#captureButton");
const capturePanel = document.querySelector("#capturePanel");
const captureForm = document.querySelector("#captureForm");
const captureDate = document.querySelector("#captureDate");
const captureArea = document.querySelector("#captureArea");
const captureActivity = document.querySelector("#captureActivity");
const captureClose = document.querySelector("#captureClose");
const captureCancel = document.querySelector("#captureCancel");
const captureStatus = document.querySelector("#captureStatus");

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function titleCase(value) {
  const clean = String(value || "").trim();
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatShortDate(date) {
  return date.toLocaleDateString("es-MX", { day: "numeric", month: "short" }).replace(".", "");
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseSpecificDateValue(value) {
  const normalizedValue = normalize(value);
  const isoDate = normalizedValue.match(/\b(\d{4})-(\d{1,2})-(\d{1,2})\b/);
  const numericDate = normalizedValue.match(/\b([0-3]?\d)[/-]([0-3]?\d)[/-](\d{2,4})\b/);

  if (isoDate) {
    const date = new Date(Number(isoDate[1]), Number(isoDate[2]) - 1, Number(isoDate[3]));
    return Number.isNaN(date.getTime()) ? null : startOfDay(date);
  }

  if (numericDate) {
    const firstValue = Number(numericDate[1]);
    const secondValue = Number(numericDate[2]);
    const day = secondValue > 12 ? secondValue : firstValue;
    const month = (secondValue > 12 ? firstValue : secondValue) - 1;
    const yearValue = numericDate[3];
    const year = Number(yearValue.length === 2 ? `20${yearValue}` : yearValue);
    const date = new Date(year, month, day);
    return Number.isNaN(date.getTime()) ? null : startOfDay(date);
  }

  return null;
}

function readCompletedActivities() {
  try {
    return JSON.parse(localStorage.getItem(completionStorageKey) || "[]");
  } catch {
    return [];
  }
}

function saveCompletedActivities() {
  localStorage.setItem(completionStorageKey, JSON.stringify([...state.completedActivities]));
}

function readDeletedActivities() {
  try {
    return JSON.parse(localStorage.getItem(deletedStorageKey) || "[]");
  } catch {
    return [];
  }
}

function saveDeletedActivities() {
  localStorage.setItem(deletedStorageKey, JSON.stringify([...state.deletedActivities]));
}

function readPendingActivities() {
  try {
    return JSON.parse(localStorage.getItem(pendingStorageKey) || "[]");
  } catch {
    return [];
  }
}

function savePendingActivities() {
  localStorage.setItem(pendingStorageKey, JSON.stringify(state.pendingActivities));
}

function getPendingActivityKey(row) {
  const date = parseSpecificDateValue(row.specificDate);
  const dateKey = date
    ? [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("-")
    : normalize(row.specificDate);
  return [normalize(row.area), dateKey, normalize(row.activity)].join("|");
}

function mergeRowsWithPending(remoteRows, pendingRows, now = Date.now()) {
  const confirmedKeys = new Set(remoteRows.map(getPendingActivityKey));
  const activePendingRows = pendingRows.filter((row) => now - Number(row.pendingAt || 0) <= pendingActivityMaxAgeMs);
  const unconfirmedPendingRows = activePendingRows.filter((row) => !confirmedKeys.has(getPendingActivityKey(row)));
  return { rows: [...remoteRows, ...unconfirmedPendingRows], pendingRows: unconfirmedPendingRows };
}

function addPendingActivity(row) {
  const pendingRow = {
    ...row,
    timestamp: row.timestamp || new Date().toLocaleString("es-MX"),
    pendingAt: Date.now(),
  };
  state.pendingActivities = [...state.pendingActivities, pendingRow];
  state.rows = [...state.rows, pendingRow];
  savePendingActivities();
}

function isDeleteMarker(row) {
  return row.activity.startsWith(deleteMarkerPrefix);
}

function getMarkedDeleteId(row) {
  return isDeleteMarker(row) ? row.activity.slice(deleteMarkerPrefix.length).trim() : "";
}

function getGlobalDeletedActivities() {
  return new Set(state.rows.map(getMarkedDeleteId).filter(Boolean));
}

function getActivityId(row) {
  const rawId = [
    row.timestamp,
    row.area,
    row.month,
    row.week,
    row.specificDate,
    row.activity,
  ].map((value) => normalize(value)).join("|");
  return btoa(unescape(encodeURIComponent(rawId)));
}

function renderActivityControl(row, className) {
  const id = getActivityId(row);
  const activity = escapeHtml(row.activity);
  const isCompleted = state.completedActivities.has(id);
  return `
    <label class="${className} ${isCompleted ? "is-completed" : ""}">
      <input type="checkbox" data-completion-id="${id}" ${isCompleted ? "checked" : ""} aria-label="Marcar actividad como realizada">
      <span class="check-mark" aria-hidden="true"></span>
      <span class="activity-copy" title="${activity}" data-full-text="${activity}">${activity}</span>
      <button
        class="delete-activity"
        type="button"
        data-delete-id="${id}"
        data-delete-area="${escapeHtml(row.area)}"
        data-delete-month="${escapeHtml(getRowMonth(row))}"
        data-delete-week="${escapeHtml(getRowWeekLabel(row))}"
        aria-label="Ocultar actividad"
      >×</button>
    </label>
  `;
}

function getCurrentPeriod() {
  return periods[state.period] || periods["ago-dic"];
}

function buildPeriodWeeks(period, periodKey = state.period) {
  if (period.customWeeks) {
    return period.customWeeks.map((item) => {
      const start = new Date(item.start);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      const key = item.key || `s${item.number}`;
      const label = item.label || `Semana ${item.number}`;

      return {
        key,
        number: item.number ?? null,
        month: normalize(start.toLocaleDateString("es-MX", { month: "long" })),
        start,
        end,
        label,
        isBreak: Boolean(item.isBreak || normalize(label).includes("vacacion")),
        isTecWeek: tecWeekPeriods.includes(periodKey) && tecWeekNumbers.includes(item.number),
        range: `${formatShortDate(start)}-${formatShortDate(end)}`,
      };
    });
  }

  return Array.from({ length: period.weekCount }, (_, index) => {
    const weekNumber = index + (period.firstWeekNumber ?? 0);
    const start = new Date(period.start);
    start.setDate(period.start.getDate() + (index * 7));
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return {
      key: `s${weekNumber}`,
      number: weekNumber,
      month: normalize(start.toLocaleDateString("es-MX", { month: "long" })),
      start,
      end,
      label: `Semana ${weekNumber}`,
      isBreak: false,
      isTecWeek: tecWeekPeriods.includes(periodKey) && tecWeekNumbers.includes(weekNumber),
      range: `${formatShortDate(start)}-${formatShortDate(end)}`,
    };
  });
}

function getPeriodWeeks() {
  return buildPeriodWeeks(getCurrentPeriod(), state.period);
}

function getCurrentWeekKey() {
  const today = startOfDay(new Date());
  const currentWeek = getPeriodWeeks().find((week) => (
    today >= startOfDay(week.start) && today <= startOfDay(week.end)
  ));

  return currentWeek ? currentWeek.key : "";
}

function getMonthColumns() {
  const period = getCurrentPeriod();
  const periodWeeks = getPeriodWeeks();
  return period.months.map((month) => ({
    key: month,
    weeks: periodWeeks.filter((week) => week.month === month),
  })).filter((month) => month.weeks.length);
}

function getVisibleMonthColumns() {
  const monthColumns = getMonthColumns();
  return state.month === "todos"
    ? monthColumns
    : monthColumns.filter((month) => month.key === state.month);
}

function getPlanningColumns(visibleMonths) {
  return visibleMonths.flatMap((month) => month.weeks.map((week) => ({
    key: `${month.key}-${week.key}`,
    month: month.key,
    type: "week",
    weekKey: week.key,
    weekNumber: week.number,
    label: week.label,
    isBreak: week.isBreak,
    isTecWeek: week.isTecWeek,
    range: week.range,
  })));
}

function getWeeksForPeriod(periodKey = state.period) {
  const period = periods[periodKey] || getCurrentPeriod();
  return buildPeriodWeeks(period, periodKey);
}

function getWeekByKey(weekKey, periodKey = state.period) {
  return getWeeksForPeriod(periodKey).find((week) => week.key === weekKey);
}

function getRowSpecificDate(row) {
  return parseSpecificDateValue(row.specificDate);
}

function getWeekKeyFromDate(date, periodKey = state.period) {
  if (!date) return "";
  const target = startOfDay(date);
  const matchingWeek = getWeeksForPeriod(periodKey).find((week) => (
    target >= startOfDay(week.start) && target <= startOfDay(week.end)
  ));
  return matchingWeek ? matchingWeek.key : "";
}

function getPeriodKeyFromDate(date) {
  if (!date) return "";
  const target = startOfDay(date);
  const match = Object.entries(periods).find(([periodKey]) => (
    getWeeksForPeriod(periodKey).some((week) => (
      target >= startOfDay(week.start) && target <= startOfDay(week.end)
    ))
  ));
  return match ? match[0] : "";
}

function getRowMonth(row) {
  const specificDate = getRowSpecificDate(row);
  if (specificDate) {
    return normalize(specificDate.toLocaleDateString("es-MX", { month: "long" }));
  }
  return normalize(row.month);
}

function getRowWeekLabel(row, periodKey = state.period) {
  const week = getWeekByKey(getRowWeekKey(row, periodKey), periodKey);
  return week ? week.label : row.week || "Semana 0";
}

function getRowDayLabel(row) {
  const specificDate = getRowSpecificDate(row);
  if (!specificDate) return "";
  return titleCase(specificDate.toLocaleDateString("es-MX", { weekday: "long" }));
}

function getSelectedWeek() {
  const periodWeeks = getPeriodWeeks();
  const selectedWeek = periodWeeks.find((week) => week.key === state.selectedWeekKey);
  if (selectedWeek) return selectedWeek;

  const currentWeek = periodWeeks.find((week) => week.key === getCurrentWeekKey());
  if (currentWeek) {
    state.selectedWeekKey = currentWeek.key;
    return currentWeek;
  }

  const visibleWeek = getPlanningColumns(getVisibleMonthColumns())[0];
  const fallbackWeek = visibleWeek ? getWeekByKey(visibleWeek.weekKey) : periodWeeks[0];
  state.selectedWeekKey = fallbackWeek?.key || "";
  return fallbackWeek || null;
}

function getRowWeekKey(row, periodKey = state.period) {
  const specificDateWeekKey = getWeekKeyFromDate(getRowSpecificDate(row), periodKey);
  if (specificDateWeekKey) return specificDateWeekKey;

  const raw = normalize(row.week);
  if (!raw) return "";
  const periodWeeks = getWeeksForPeriod(periodKey);

  if (raw.includes("vacacion")) {
    const breakWeek = periodWeeks.find((week) => week.isBreak);
    return breakWeek ? breakWeek.key : "";
  }

  if (raw.includes("semana tec")) {
    const explicitTecWeek = raw.match(/\b(6|12)\b/);
    if (explicitTecWeek) {
      const weekKey = `s${explicitTecWeek[1]}`;
      return periodWeeks.some((week) => week.key === weekKey && week.isTecWeek) ? weekKey : "";
    }
  }

  const explicitWeek = raw.match(/(?:semana|s)?\s*(1[0-9]|2[0-9]|[0-9])\b/);
  if (explicitWeek) {
    const weekKey = `s${explicitWeek[1]}`;
    return periodWeeks.some((week) => week.key === weekKey) ? weekKey : "";
  }

  const parsedDate = new Date(row.week);
  if (!Number.isNaN(parsedDate.getTime())) {
    const matchingWeek = periodWeeks.find((week) => parsedDate >= week.start && parsedDate <= week.end);
    return matchingWeek ? matchingWeek.key : "";
  }

  return "";
}

function rowMatchesPlanningColumn(row, column, areaKey, periodKey = state.period) {
  return row.area === areaKey && getRowWeekKey(row, periodKey) === column.weekKey;
}

function parseActivitySchedule(activity, fallbackWeek, specificDate = "") {
  const text = String(activity || "");
  const normalizedText = normalize(text);
  const monthIndexes = {
    ene: 0,
    enero: 0,
    feb: 1,
    febrero: 1,
    mar: 2,
    marzo: 2,
    abr: 3,
    abril: 3,
    may: 4,
    mayo: 4,
    jun: 5,
    junio: 5,
    jul: 6,
    julio: 6,
    ago: 7,
    agosto: 7,
    sep: 8,
    septiembre: 8,
    oct: 9,
    octubre: 9,
    nov: 10,
    noviembre: 10,
    dic: 11,
    diciembre: 11,
  };
  let date = null;
  let dateLabel = "";
  let timeLabel = "";

  const normalizedSpecificDate = normalize(specificDate);
  const specificIsoDate = normalizedSpecificDate.match(/\b(\d{4})-(\d{1,2})-(\d{1,2})\b/);
  const specificNumericDate = normalizedSpecificDate.match(/\b([0-3]?\d)[/-]([0-3]?\d)[/-](\d{2,4})\b/);
  const numericDate = normalizedText.match(/\b([0-3]?\d)[/-]([0-1]?\d)(?:[/-](\d{2,4}))?\b/);
  const namedDate = normalizedText.match(/\b([0-3]?\d)\s*(?:de\s*)?(ene(?:ro)?|feb(?:rero)?|mar(?:zo)?|abr(?:il)?|may(?:o)?|jun(?:io)?|jul(?:io)?|ago(?:sto)?|sep(?:tiembre)?|oct(?:ubre)?|nov(?:iembre)?|dic(?:iembre)?)\b/);
  const timeMatch = normalizedText.match(/\b([01]?\d|2[0-3])(?::|\.)([0-5]\d)\s*(am|pm)?\b|\b([1-9]|1[0-2])\s*(am|pm)\b/);

  if (specificIsoDate) {
    const year = Number(specificIsoDate[1]);
    const month = Number(specificIsoDate[2]) - 1;
    const day = Number(specificIsoDate[3]);
    date = new Date(year, month, day);
    dateLabel = date.toLocaleDateString("es-MX", { day: "numeric", month: "short" }).replace(".", "");
  } else if (specificNumericDate) {
    const firstValue = Number(specificNumericDate[1]);
    const secondValue = Number(specificNumericDate[2]);
    const day = secondValue > 12 ? secondValue : firstValue;
    const month = (secondValue > 12 ? firstValue : secondValue) - 1;
    const yearValue = specificNumericDate[3];
    const year = Number(yearValue.length === 2 ? `20${yearValue}` : yearValue);
    date = new Date(year, month, day);
    dateLabel = date.toLocaleDateString("es-MX", { day: "numeric", month: "short" }).replace(".", "");
  } else if (numericDate) {
    const day = Number(numericDate[1]);
    const month = Number(numericDate[2]) - 1;
    const year = numericDate[3]
      ? Number(numericDate[3].length === 2 ? `20${numericDate[3]}` : numericDate[3])
      : fallbackWeek.start.getFullYear();
    date = new Date(year, month, day);
    dateLabel = date.toLocaleDateString("es-MX", { day: "numeric", month: "short" }).replace(".", "");
  } else if (namedDate) {
    const day = Number(namedDate[1]);
    const month = monthIndexes[namedDate[2]];
    date = new Date(fallbackWeek.start.getFullYear(), month, day);
    dateLabel = date.toLocaleDateString("es-MX", { day: "numeric", month: "short" }).replace(".", "");
  }

  if (!date) {
    date = new Date(fallbackWeek.start);
  }

  if (timeMatch) {
    let hour = Number(timeMatch[1] || timeMatch[4]);
    const minutes = Number(timeMatch[2] || 0);
    const meridiem = timeMatch[3] || timeMatch[5] || "";
    if (meridiem === "pm" && hour < 12) hour += 12;
    if (meridiem === "am" && hour === 12) hour = 0;
    date.setHours(hour, minutes, 0, 0);
    timeLabel = `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  }

  return {
    date,
    dateLabel,
    timeLabel,
    sortValue: date.getTime(),
  };
}

function parseCsv(text) {
  const rows = [];
  let current = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      field += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      current.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (field || current.length) {
        current.push(field);
        rows.push(current);
      }
      field = "";
      current = [];
      if (char === "\r" && next === "\n") index += 1;
    } else {
      field += char;
    }
  }

  if (field || current.length) {
    current.push(field);
    rows.push(current);
  }

  return rows;
}

function setImportStatus(message, type = "info") {
  importStatus.textContent = message;
  importStatus.className = `import-status ${message ? "is-visible" : ""} is-${type}`;
}

function setCaptureStatus(message, type = "info") {
  captureStatus.textContent = message;
  captureStatus.className = `capture-status ${message ? "is-visible" : ""} is-${type}`;
}

function normalizeHeader(header) {
  return normalize(header).replace(/\s+/g, "");
}

function getImportValue(row, headers, names) {
  const key = names.map(normalizeHeader).find((name) => headers[name] !== undefined);
  return key ? String(row[headers[key]] || "").trim() : "";
}

function mapImportedRows(rawRows) {
  const headers = (rawRows[0] || []).reduce((acc, header, index) => {
    acc[normalizeHeader(header)] = index;
    return acc;
  }, {});
  const hasSpecificDate = ["fechaespecifica", "fecha", "dia", "día"].some((header) => headers[normalizeHeader(header)] !== undefined);
  const required = ["area", "actividad"];
  const missing = required.filter((header) => headers[header] === undefined);
  if (!hasSpecificDate) missing.unshift("fecha específica");

  if (missing.length) {
    throw new Error(`Faltan columnas: ${missing.map(titleCase).join(", ")}`);
  }

  return rawRows.slice(1).map((row, index) => {
    const area = normalize(getImportValue(row, headers, ["area"]));
    const specificDate = getImportValue(row, headers, ["fecha específica", "fecha especifica", "fecha", "dia", "día"]);
    const parsedDate = parseSpecificDateValue(specificDate);
    const month = parsedDate
      ? normalize(parsedDate.toLocaleDateString("es-MX", { month: "long" }))
      : normalize(getImportValue(row, headers, ["mes"]));
    const periodKey = getPeriodKeyFromDate(parsedDate);
    const weekRaw = parsedDate
      ? getRowWeekLabel({ specificDate, week: getImportValue(row, headers, ["semana"]) }, periodKey || state.period)
      : getImportValue(row, headers, ["semana"]);
    const activity = getImportValue(row, headers, ["actividad"]);
    const time = getImportValue(row, headers, ["hora", "horario"]);
    const parts = [
      time ? `Hora: ${time}` : "",
      activity,
    ].filter(Boolean);

    return {
      rowNumber: index + 2,
      area,
      month,
      week: weekRaw,
      specificDate,
      activity: parts.join(" | "),
      responsible: getImportValue(row, headers, ["responsable"]),
      status: getImportValue(row, headers, ["estatus", "estado", "status"]),
    };
  }).filter((row) => row.area || row.specificDate || row.activity);
}

function validateImportedRows(rows) {
  const areaKeys = new Set(areas.map((area) => area.key));
  const errors = [];

  rows.forEach((row) => {
    if (!areaKeys.has(row.area)) errors.push(`Fila ${row.rowNumber}: área no válida`);
    if (!parseSpecificDateValue(row.specificDate)) errors.push(`Fila ${row.rowNumber}: fecha específica no válida`);
    if (!row.activity) errors.push(`Fila ${row.rowNumber}: falta actividad`);
  });

  if (errors.length) {
    throw new Error(errors.slice(0, 6).join(". "));
  }
}

async function submitImportedRow(row) {
  const periodKey = getPeriodKeyFromDate(getRowSpecificDate(row)) || state.period;
  const formData = new URLSearchParams();
  formData.set(formEntries.specificDate, row.specificDate);
  formData.set(formEntries.area, getFormAreaValue(row.area));
  formData.set(formEntries.month, getRowMonth(row));
  formData.set(formEntries.week, getRowWeekLabel(row, periodKey));
  formData.set(formEntries.activity, row.activity);

  await fetch(FORM_SUBMIT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });
}

async function parseImportFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();

  if (extension === "csv") {
    return mapImportedRows(parseCsv(await file.text()));
  }

  const xlsx = globalThis.XLSX;
  if (!xlsx) {
    throw new Error("No se pudo cargar el lector de Excel. Intenta con archivo CSV.");
  }

  const workbook = xlsx.read(await file.arrayBuffer(), { type: "array" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  return mapImportedRows(rows);
}

async function handleImportFile(file) {
  if (!file) return;

  try {
    setImportStatus("Revisando archivo...", "info");
    const importedRows = await parseImportFile(file);
    validateImportedRows(importedRows);

    if (!importedRows.length) {
      throw new Error("El archivo no trae actividades para importar.");
    }

    setImportStatus(`Importando ${importedRows.length} actividades...`, "info");
    for (let index = 0; index < importedRows.length; index += 1) {
      const importedRow = importedRows[index];
      await submitImportedRow(importedRow);
      const periodKey = getPeriodKeyFromDate(getRowSpecificDate(importedRow)) || state.period;
      addPendingActivity({
        ...importedRow,
        month: getRowMonth(importedRow),
        week: getRowWeekLabel(importedRow, periodKey),
      });
      setImportStatus(`Importando ${index + 1} de ${importedRows.length} actividades...`, "info");
      await new Promise((resolve) => setTimeout(resolve, 180));
    }

    render();
    setImportStatus(`Listo: ${importedRows.length} actividades enviadas al tablero.`, "success");
    await refreshRows();
    window.setTimeout(refreshRows, 3500);
  } catch (error) {
    setImportStatus(error.message || "No se pudo importar el archivo.", "error");
  } finally {
    importFile.value = "";
  }
}

function downloadImportTemplate() {
  const rows = [
    ["Fecha específica", "Área", "Actividad"],
    ["10/08/2026", "direccion", "Reunión de seguimiento"],
    ["10/08/2026", "clases", "Bienvenida de alumnos"],
    ["14/09/2026", "comunicacion", "Semana Tec"],
    ["22/03/2027", "intramuros", "Pausa de actividades"],
  ];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "plantilla_planeacion.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function mapCsvRows(csvRows) {
  const headers = csvRows[0] || [];
  const indexByHeader = headers.reduce((acc, header, index) => {
    acc[normalize(header)] = index;
    return acc;
  }, {});
  const timestampIndex = indexByHeader["marca temporal"] ?? 0;
  const areaIndex = indexByHeader.area ?? 1;
  const monthIndex = indexByHeader.mes;
  const weekIndex = indexByHeader.semana;
  const activityIndex = indexByHeader.actividad ?? (indexByHeader.semana === undefined ? 3 : 4);
  const specificDateIndex = indexByHeader["fecha especifica"] ?? indexByHeader.fecha;
  const responsibleIndex = indexByHeader.responsable;
  const statusIndex = indexByHeader.estatus ?? indexByHeader.estado ?? indexByHeader.status;

  return csvRows.slice(1).map((row) => {
    const specificDate = specificDateIndex === undefined ? "" : String(row[specificDateIndex] || "").trim();
    const parsedDate = parseSpecificDateValue(specificDate);
    const month = monthIndex === undefined
      ? (parsedDate ? normalize(parsedDate.toLocaleDateString("es-MX", { month: "long" })) : "")
      : normalize(row[monthIndex]);

    return {
      timestamp: row[timestampIndex] || "",
      area: normalize(row[areaIndex]),
      month,
      activity: String(row[activityIndex] || "").trim(),
      week: weekIndex === undefined ? "" : String(row[weekIndex] || "").trim(),
      specificDate,
      responsible: responsibleIndex === undefined ? "" : String(row[responsibleIndex] || "").trim(),
      status: statusIndex === undefined ? "" : String(row[statusIndex] || "").trim(),
    };
  }).filter((row) => row.area && getRowMonth(row) && row.activity);
}

async function loadRows() {
  if (!SHEET_CSV_URL) {
    return fallbackRows;
  }

  try {
    const separator = SHEET_CSV_URL.includes("?") ? "&" : "?";
    const freshUrl = `${SHEET_CSV_URL}${separator}_=${Date.now()}`;
    const response = await fetch(freshUrl, { cache: "no-store" });
    if (!response.ok) throw new Error("No se pudo leer la hoja");
    const rows = mapCsvRows(parseCsv(await response.text()));
    return rows.length ? rows : fallbackRows;
  } catch (error) {
    return fallbackRows;
  }
}

function renderPeriodTabs() {
  periodTabs.forEach((button) => {
    const isActive = button.dataset.period === state.period;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderMonthFilter() {
  const period = getCurrentPeriod();
  monthFilter.innerHTML = [
    '<option value="todos">Todos los meses</option>',
    ...period.months.map((month) => `<option value="${month}">${titleCase(month)}</option>`),
  ].join("");

  if (state.month !== "todos" && !period.months.includes(state.month)) {
    state.month = "todos";
  }

  monthFilter.value = state.month;
}

function setupFilters() {
  areaFilter.innerHTML = [
    '<option value="todas">Todas las áreas</option>',
    ...areas.map((area) => `<option value="${area.key}">${area.label}</option>`),
  ].join("");

  renderPeriodTabs();
  renderMonthFilter();

  periodTabs.forEach((button) => {
    button.addEventListener("click", () => {
      state.period = button.dataset.period;
      state.month = "todos";
      state.selectedWeekKey = "";
      renderPeriodTabs();
      renderMonthFilter();
      render();
    });
  });

  areaFilter.addEventListener("change", () => {
    state.area = areaFilter.value;
    render();
  });

  monthFilter.addEventListener("change", () => {
    state.month = monthFilter.value;
    const selectedWeek = getWeekByKey(state.selectedWeekKey);
    if (state.month !== "todos" && selectedWeek?.month !== state.month) {
      state.selectedWeekKey = "";
    }
    render();
  });

  document.querySelector("#resetFilters").addEventListener("click", () => {
    state.area = "todas";
    state.month = "todos";
    state.selectedWeekKey = "";
    areaFilter.value = state.area;
    renderMonthFilter();
    render();
  });
}

function setupImporter() {
  importButton.addEventListener("click", () => importFile.click());
  importFile.addEventListener("change", () => handleImportFile(importFile.files[0]));
  templateButton.addEventListener("click", downloadImportTemplate);
}

function openCapturePanel() {
  capturePanel.hidden = false;
  setCaptureStatus("");
  captureDate.focus();
}

function closeCapturePanel() {
  capturePanel.hidden = true;
  setCaptureStatus("");
}

function setupCaptureForm() {
  captureArea.innerHTML = areas.map((area) => (
    `<option value="${area.key}">${area.label}</option>`
  )).join("");

  captureButton.addEventListener("click", openCapturePanel);
  captureClose.addEventListener("click", closeCapturePanel);
  captureCancel.addEventListener("click", closeCapturePanel);

  captureForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const row = {
      timestamp: new Date().toLocaleString("es-MX"),
      area: normalize(captureArea.value),
      month: "",
      week: "",
      specificDate: captureDate.value,
      activity: captureActivity.value.trim(),
      responsible: "",
      status: "",
    };

    if (!parseSpecificDateValue(row.specificDate)) {
      setCaptureStatus("Selecciona una fecha válida.", "error");
      return;
    }

    if (!row.area || !row.activity) {
      setCaptureStatus("Completa área y actividad.", "error");
      return;
    }

    const targetPeriod = getPeriodKeyFromDate(getRowSpecificDate(row));

    if (!targetPeriod) {
      setCaptureStatus("La fecha seleccionada no cae dentro de un periodo configurado.", "error");
      return;
    }

    try {
      setCaptureStatus("Guardando actividad...", "info");
      await submitImportedRow(row);
      state.period = targetPeriod;
      state.month = "todos";
      state.selectedWeekKey = getRowWeekKey(row, targetPeriod);
      renderPeriodTabs();
      renderMonthFilter();
      addPendingActivity({
        ...row,
        month: getRowMonth(row),
        week: getRowWeekLabel(row, targetPeriod),
      });
      captureForm.reset();
      render();
      setCaptureStatus("Actividad guardada y colocada en el calendario.", "success");
      window.setTimeout(refreshRows, 3500);
    } catch {
      setCaptureStatus("No se pudo guardar la actividad. Intenta de nuevo.", "error");
    }
  });
}

function getFilteredRows() {
  const periodMonths = getCurrentPeriod().months;
  const globalDeletedActivities = getGlobalDeletedActivities();
  return state.rows.filter((row) => {
    if (isDeleteMarker(row)) return false;

    const id = getActivityId(row);
    const deleteMatch = !state.deletedActivities.has(id) && !globalDeletedActivities.has(id);
    const rowMonth = getRowMonth(row);
    const periodMatch = periodMonths.includes(rowMonth);
    const weekMatch = Boolean(getRowWeekKey(row));
    const areaMatch = state.area === "todas" || row.area === state.area;
    const monthMatch = state.month === "todos" || rowMonth === state.month;
    return deleteMatch && periodMatch && weekMatch && areaMatch && monthMatch;
  });
}

function getSummaryRows() {
  const periodMonths = getCurrentPeriod().months;
  const globalDeletedActivities = getGlobalDeletedActivities();
  return state.rows.filter((row) => {
    if (isDeleteMarker(row)) return false;
    const id = getActivityId(row);
    const rowMonth = getRowMonth(row);
    return !state.deletedActivities.has(id)
      && !globalDeletedActivities.has(id)
      && periodMonths.includes(rowMonth)
      && Boolean(getRowWeekKey(row));
  });
}

function renderLastUpdated() {
  document.querySelector("#lastUpdated").textContent = `Actualizado: ${new Date().toLocaleString("es-MX", { dateStyle: "medium", timeStyle: "short" })}`;
}

function renderBoard(rows) {
  const visibleAreas = state.area === "todas" ? areas : areas.filter((area) => area.key === state.area);
  const visibleMonths = getVisibleMonthColumns();
  const planningColumns = getPlanningColumns(visibleMonths);
  const currentWeekKey = getCurrentWeekKey();
  const selectedWeek = getSelectedWeek();
  const selectedWeekKey = selectedWeek?.key || "";

  boardEl.style.gridTemplateColumns = `190px repeat(${planningColumns.length}, minmax(${weekColumnWidth}px, 1fr))`;
  boardEl.style.minWidth = `${190 + (planningColumns.length * weekColumnWidth)}px`;

  const monthHeader = [
    '<div class="cell head-cell area-head">Área</div>',
    ...visibleMonths.map((month, index) => (
      `<div class="cell head-cell month-head month-${index % 6}" style="grid-column: span ${month.weeks.length};">${titleCase(month.key)}</div>`
    )),
  ];

  const weekHeader = planningColumns.map((column) => `
    <button class="cell head-cell week-head ${column.isBreak ? "is-break-week" : ""} ${column.isTecWeek ? "is-tec-week" : ""} ${column.weekKey === currentWeekKey ? "is-current-week" : ""} ${column.weekKey === selectedWeekKey ? "is-selected-week" : ""}" type="button" data-week-key="${column.weekKey}" aria-pressed="${column.weekKey === selectedWeekKey}">
      <span>${column.label}</span>
      <small>${column.range}</small>
      ${column.isTecWeek ? '<em class="tec-week-badge">Semana Tec</em>' : ""}
      ${column.weekKey === currentWeekKey ? '<em class="current-week-badge">Actual</em>' : ""}
    </button>
  `);

  const body = visibleAreas.flatMap((area) => [
    `<div class="cell area-cell ${area.className}">
      ${area.image
        ? `<img class="area-photo" src="${area.image}" alt="${area.label}">`
        : `<span class="area-icon">${area.icon}</span>`}
      <span>${area.label}</span>
    </div>`,
    ...planningColumns.map((column) => {
      const activities = rows.filter((row) => (
        rowMatchesPlanningColumn(row, column, area.key)
      ));
      const content = activities.length
        ? activities.map((row) => renderActivityControl(row, "activity-chip")).join("")
        : "";
      return `<div class="cell plan-cell ${column.isBreak ? "is-break-week" : ""} ${column.isTecWeek ? "is-tec-week" : ""} ${column.weekKey === currentWeekKey ? "is-current-week" : ""} ${column.weekKey === selectedWeekKey ? "is-selected-week" : ""}" data-week-key="${column.weekKey}" role="button" tabindex="0" aria-label="Ver resumen de ${column.label}, ${column.range}">${content}</div>`;
    }),
  ]);

  boardEl.innerHTML = [...monthHeader, ...weekHeader, ...body].join("");
}

function renderList(rows) {
  const selectedWeek = getSelectedWeek();
  const titleEl = document.querySelector("#summaryTitle");
  const eyebrowEl = document.querySelector("#summaryEyebrow");

  if (!selectedWeek) {
    eyebrowEl.textContent = "Resumen semanal";
    titleEl.textContent = "Selecciona una semana";
    listEl.innerHTML = `
      <div class="summary-empty">
        Selecciona una semana en el calendario para consultar sus actividades.
      </div>
    `;
    return;
  }

  const selectedRows = rows
    .filter((row) => getRowWeekKey(row) === selectedWeek.key)
    .map((row) => ({
      ...row,
      dayLabel: getRowDayLabel(row),
      schedule: parseActivitySchedule(row.activity, selectedWeek, row.specificDate),
    }))
    .sort((a, b) => a.schedule.sortValue - b.schedule.sortValue || a.area.localeCompare(b.area));

  eyebrowEl.textContent = `Resumen ${selectedWeek.label}`;
  titleEl.textContent = `${selectedWeek.range} · ${selectedRows.length} ${selectedRows.length === 1 ? "actividad planeada" : "actividades planeadas"}`;

  if (!selectedRows.length) {
    listEl.innerHTML = `
      <div class="summary-empty">
        No hay actividades registradas para esta semana.
      </div>
    `;
    return;
  }

  listEl.innerHTML = areas.map((area) => {
    const areaRows = selectedRows.filter((row) => row.area === area.key);
    if (!areaRows.length) return "";

    return `
      <section class="week-summary-group ${area.className}">
        <div class="week-summary-area">
          ${area.image ? `<img src="${area.image}" alt="${area.label}">` : ""}
          <h3>${area.label}</h3>
        </div>
        <div class="week-summary-items">
          ${areaRows.map((row) => `
            <article class="week-summary-item">
              <div class="week-summary-time">
                ${row.dayLabel ? `<span>${escapeHtml(row.dayLabel)}</span>` : ""}
                ${row.schedule.dateLabel ? `<span>${escapeHtml(row.schedule.dateLabel)}</span>` : ""}
                ${row.schedule.timeLabel ? `<strong>${escapeHtml(row.schedule.timeLabel)}</strong>` : ""}
                ${!row.schedule.dateLabel && !row.schedule.timeLabel ? "<span>Sin fecha</span>" : ""}
              </div>
              <div class="week-summary-detail">
                ${renderActivityControl(row, "activity-text week-summary-activity")}
                ${row.responsible || row.status ? `
                  <div class="week-summary-meta">
                    ${row.responsible ? `<span><strong>Responsable:</strong> ${escapeHtml(row.responsible)}</span>` : ""}
                    ${row.status ? `<span><strong>Estatus:</strong> ${escapeHtml(row.status)}</span>` : ""}
                  </div>
                ` : ""}
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function setupWeekSelection() {
  boardEl.addEventListener("click", (event) => {
    if (event.target.closest(".activity-chip, [data-delete-id]")) return;
    const weekTarget = event.target.closest("[data-week-key]");
    if (!weekTarget) return;
    state.selectedWeekKey = weekTarget.dataset.weekKey;
    render();
    document.querySelector(".activity-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  boardEl.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const weekTarget = event.target.closest(".plan-cell[data-week-key]");
    if (!weekTarget) return;
    event.preventDefault();
    state.selectedWeekKey = weekTarget.dataset.weekKey;
    render();
  });
}

function setupCompletionToggles() {
  document.addEventListener("change", (event) => {
    const input = event.target.closest("[data-completion-id]");
    if (!input) return;

    if (input.checked) {
      state.completedActivities.add(input.dataset.completionId);
    } else {
      state.completedActivities.delete(input.dataset.completionId);
    }

    saveCompletedActivities();
    render();
  });
}

async function submitDeleteMarker(button) {
  const formData = new URLSearchParams();
  formData.set(
    formEntries.area,
    getFormAreaValue(button.dataset.deleteArea || "clases"),
  );
  formData.set(formEntries.month, button.dataset.deleteMonth || "agosto");
  formData.set(formEntries.week, button.dataset.deleteWeek || "Semana 0");
  formData.set(formEntries.activity, `${deleteMarkerPrefix}${button.dataset.deleteId}`);

  await fetch(FORM_SUBMIT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });
}

function setupDeleteButtons() {
  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-delete-id]");
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();
    state.deletedActivities.add(button.dataset.deleteId);
    state.completedActivities.delete(button.dataset.deleteId);
    saveDeletedActivities();
    saveCompletedActivities();
    render();

    button.disabled = true;
    try {
      await submitDeleteMarker(button);
      window.setTimeout(refreshRows, 1800);
    } catch {
      // La actividad ya se oculto localmente; se reintentara si se vuelve a cargar.
    }
  });
}

function setupActivityTooltip() {
  const tooltip = document.createElement("div");
  tooltip.className = "activity-tooltip";
  tooltip.setAttribute("role", "tooltip");
  document.body.appendChild(tooltip);

  function positionTooltip(target) {
    const rect = target.getBoundingClientRect();
    const gap = 10;
    const width = Math.min(360, window.innerWidth - 28);
    const left = Math.min(
      Math.max(14, rect.left),
      window.innerWidth - width - 14,
    );
    const top = rect.bottom + gap;

    tooltip.style.width = `${width}px`;
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }

  function showTooltip(target) {
    if (!target) return;

    tooltip.textContent = target.dataset.fullText;
    tooltip.classList.add("is-visible");
    positionTooltip(target);
  }

  document.addEventListener("mouseover", (event) => {
    showTooltip(event.target.closest("[data-full-text]"));
  });

  document.addEventListener("mousemove", (event) => {
    const target = event.target.closest("[data-full-text]");
    if (target) showTooltip(target);
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".activity-chip, .activity-text, [data-delete-id]")) return;
    showTooltip(event.target.closest("[data-full-text]"));
  });

  document.addEventListener("mouseout", (event) => {
    const target = event.target.closest("[data-full-text]");
    if (!target || target.contains(event.relatedTarget)) return;
    tooltip.classList.remove("is-visible");
  });

  window.addEventListener("scroll", () => tooltip.classList.remove("is-visible"), true);
  window.addEventListener("resize", () => tooltip.classList.remove("is-visible"));
}

function render() {
  const rows = getFilteredRows();
  renderLastUpdated();
  renderBoard(rows);
  renderList(getSummaryRows());
}

async function refreshRows() {
  if (state.isRefreshing) return;

  state.isRefreshing = true;
  const remoteRows = await loadRows();
  const mergedRows = mergeRowsWithPending(remoteRows, state.pendingActivities);
  state.rows = mergedRows.rows;
  state.pendingActivities = mergedRows.pendingRows;
  savePendingActivities();
  render();
  state.isRefreshing = false;
}

async function init() {
  setupFilters();
  setupImporter();
  setupCaptureForm();
  setupCompletionToggles();
  setupDeleteButtons();
  setupActivityTooltip();
  setupWeekSelection();
  await refreshRows();
  window.setInterval(refreshRows, refreshIntervalMs);
}

init();

