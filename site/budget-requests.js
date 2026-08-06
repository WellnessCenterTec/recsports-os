(function initWellSyncBudgetRequests(global) {
  "use strict";

  function parseAmount(value) {
    const raw = String(value ?? "").trim();
    if (!/^\d+(?:\.\d{1,2})?$/.test(raw)) return null;
    const amount = Number(raw);
    if (!Number.isFinite(amount) || amount < 0.01) return null;
    return Math.round((amount + Number.EPSILON) * 100) / 100;
  }

  function canDelete(user) {
    return Boolean(
      user
      && (["admin", "direccion"].includes(user.role) || user.globalAccess === true)
    );
  }

  function fractionDigits(value) {
    const cents = Math.round(Math.abs(Number(value || 0)) * 100) % 100;
    return cents === 0 ? 0 : 2;
  }

  function markPending(row) {
    return { ...row, pendingSync: true };
  }

  function clearPending(row) {
    return { ...row, pendingSync: false };
  }

  function toCloud(request, userId) {
    return {
      ...(request.id ? { id: request.id } : {}),
      period_key: request.period,
      request_date: request.date,
      area_key: request.area,
      concept: request.concept,
      provider: request.provider,
      amount: request.amount,
      status: request.status,
      priority: request.priority,
      request_type: request.type,
      created_by: userId
    };
  }

  function fromCloud(row) {
    return clearPending({
      id: row.id,
      period: row.period_key,
      date: row.request_date,
      area: row.area_key,
      concept: row.concept,
      provider: row.provider,
      amount: row.amount,
      status: row.status,
      priority: row.priority,
      type: row.request_type
    });
  }

  function reconcile(cloudRows = [], localRows = []) {
    const normalizedCloud = cloudRows.map(clearPending);
    const cloudIds = new Set();
    normalizedCloud.forEach((row) => {
      cloudIds.add(String(row.id || ""));
      if (row.clientRequestId) cloudIds.add(String(row.clientRequestId));
    });
    const pendingOnly = localRows
      .filter((row) => row?.pendingSync === true)
      .filter((row) => !cloudIds.has(String(row.id || "")))
      .map(markPending);
    return [...normalizedCloud, ...pendingOnly];
  }

  function createPendingStore(storage, key) {
    function load() {
      try {
        const parsed = JSON.parse(storage.getItem(key) || "[]");
        return Array.isArray(parsed) ? parsed.filter(Boolean).map(markPending) : [];
      } catch {
        return [];
      }
    }

    function save(rows) {
      const pending = rows.filter(Boolean).map(markPending);
      storage.setItem(key, JSON.stringify(pending));
      return pending;
    }

    function upsert(row) {
      const pending = markPending(row);
      const rows = load();
      const next = rows.some((item) => item.id === pending.id)
        ? rows.map((item) => item.id === pending.id ? pending : item)
        : [...rows, pending];
      save(next);
      return pending;
    }

    function remove(id) {
      return save(load().filter((row) => row.id !== id));
    }

    return { load, save, upsert, remove };
  }

  global.WellSyncBudgetRequests = Object.freeze({
    canDelete,
    clearPending,
    createPendingStore,
    fractionDigits,
    fromCloud,
    markPending,
    parseAmount,
    reconcile,
    toCloud
  });
})(window);
