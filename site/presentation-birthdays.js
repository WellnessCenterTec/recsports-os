(function initPresentationBirthdays(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WellSyncPresentationBirthdays = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPresentationBirthdaysApi() {
  const CALENDAR_WIDTH = 1078;
  const CALENDAR_HEIGHT = 732;
  const CALENDAR_ROW_HEIGHT = 24.7;
  const ACADEMIC_MONTHS = [
    [2026, 5, 20, 197, 156], [2026, 6, 228, 206, 156], [2026, 7, 446, 217, 156],
    [2026, 8, 674, 185, 156], [2026, 9, 871, 192, 156], [2026, 10, 20, 197, 341],
    [2026, 11, 228, 206, 341], [2027, 0, 446, 217, 341], [2027, 1, 674, 185, 341],
    [2027, 2, 871, 192, 341], [2027, 3, 20, 197, 527], [2027, 4, 228, 206, 527],
    [2027, 5, 446, 217, 527], [2027, 6, 674, 185, 527]
  ];

  function validMonthDay(month, day) {
    if (!Number.isInteger(month) || !Number.isInteger(day) || month < 0 || month > 11 || day < 1) return null;
    const maxDay = new Date(2000, month + 1, 0).getDate();
    return day <= maxDay ? { month, day } : null;
  }

  function parseBirthday(value) {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
      return validMonthDay(value.getMonth(), value.getDate());
    }
    const text = String(value ?? "").trim();
    if (!text) return null;

    if (/^\d+(?:\.0+)?$/.test(text)) {
      const serial = Number(text);
      if (serial >= 1 && serial <= 2958465) {
        const excelDate = new Date(Date.UTC(1899, 11, 30) + Math.floor(serial) * 86400000);
        return validMonthDay(excelDate.getUTCMonth(), excelDate.getUTCDate());
      }
    }

    const iso = /^(\d{4})-(\d{1,2})-(\d{1,2})(?:T|$)/.exec(text);
    if (iso) return validMonthDay(Number(iso[2]) - 1, Number(iso[3]));

    const dayFirst = /^(\d{1,2})[\/-](\d{1,2})(?:[\/-]\d{2,4})?$/.exec(text);
    if (dayFirst) return validMonthDay(Number(dayFirst[2]) - 1, Number(dayFirst[1]));
    return null;
  }

  function firstName(value) {
    return String(value ?? "").trim().split(/\s+/u)[0] || "";
  }

  function collaboratorBirthdays(rows) {
    return (Array.isArray(rows) ? rows : [])
      .map((row) => {
        const date = parseBirthday(row?.["Fecha cumpleaños"] ?? row?.birthdate_label);
        const name = firstName(row?.Colaboradores ?? row?.full_name);
        return date && name ? { ...date, name } : null;
      })
      .filter(Boolean)
      .sort((left, right) => left.month - right.month || left.day - right.day || left.name.localeCompare(right.name, "es"));
  }

  function birthdaysForMonth(rows, month) {
    const grouped = new Map();
    collaboratorBirthdays(rows).forEach((birthday) => {
      if (birthday.month !== month) return;
      if (!grouped.has(birthday.day)) grouped.set(birthday.day, []);
      grouped.get(birthday.day).push(birthday.name);
    });
    return [...grouped.entries()].map(([day, names]) => ({ day, names }));
  }

  function schoolCalendarBirthdayMarkers(rows) {
    const birthdays = collaboratorBirthdays(rows);
    const byMonthDay = new Map();
    birthdays.forEach((birthday) => {
      const key = `${birthday.month}-${birthday.day}`;
      if (!byMonthDay.has(key)) byMonthDay.set(key, []);
      byMonthDay.get(key).push(birthday.name);
    });

    const markers = [];
    ACADEMIC_MONTHS.forEach(([year, month, x, width, y]) => {
      const monthStart = new Date(year, month, 1);
      const firstColumn = (monthStart.getDay() + 6) % 7;
      byMonthDay.forEach((names, key) => {
        const [birthdayMonth, day] = key.split("-").map(Number);
        if (birthdayMonth !== month || day > new Date(year, month + 1, 0).getDate()) return;
        const cellIndex = firstColumn + day - 1;
        const row = Math.floor(cellIndex / 7);
        const column = cellIndex % 7;
        const columnWidth = width / 7;
        markers.push({
          year,
          month,
          day,
          names: [...names],
          left: (x + (column + 0.78) * columnWidth) / CALENDAR_WIDTH * 100,
          top: (y + (row + 0.3) * CALENDAR_ROW_HEIGHT) / CALENDAR_HEIGHT * 100
        });
      });
    });
    return markers;
  }

  function schoolCalendarDateMarker(value = new Date()) {
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const definition = ACADEMIC_MONTHS.find(([calendarYear, calendarMonth]) => calendarYear === year && calendarMonth === month);
    if (!definition) return null;
    const [, , x, width, y] = definition;
    const firstColumn = (new Date(year, month, 1).getDay() + 6) % 7;
    const cellIndex = firstColumn + day - 1;
    const row = Math.floor(cellIndex / 7);
    const column = cellIndex % 7;
    const columnWidth = width / 7;
    return {
      year,
      month,
      day,
      left: (x + column * columnWidth) / CALENDAR_WIDTH * 100,
      top: (y + row * CALENDAR_ROW_HEIGHT) / CALENDAR_HEIGHT * 100,
      width: columnWidth / CALENDAR_WIDTH * 100,
      height: CALENDAR_ROW_HEIGHT / CALENDAR_HEIGHT * 100
    };
  }

  return {
    ACADEMIC_MONTHS,
    birthdaysForMonth,
    collaboratorBirthdays,
    firstName,
    parseBirthday,
    schoolCalendarDateMarker,
    schoolCalendarBirthdayMarkers
  };
});
