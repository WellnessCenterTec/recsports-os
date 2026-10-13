(function initStudentDatabasePagination(root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.WellSyncStudentDatabasePagination = api;
})(typeof window !== "undefined" ? window : globalThis, function createStudentDatabasePaginationApi() {
  const DEFAULT_PAGE_SIZE = 1000;
  const DEFAULT_CONCURRENCY = 4;

  async function fetchPage(client, { table, columns, orderColumn, pageSize, offset, count = false }) {
    return client
      .from(table)
      .select(columns, count ? { count: "exact" } : undefined)
      .order(orderColumn, { ascending: true })
      .range(offset, offset + pageSize - 1);
  }

  async function loadStudentDatabasePages(client, options = {}) {
    if (!client?.from) throw new Error("A Supabase client is required");
    const table = options.table || "Base de datos_alumnos";
    const columns = options.columns || "*";
    const orderColumn = options.orderColumn || "Matricula";
    const pageSize = Math.max(1, Number(options.pageSize) || DEFAULT_PAGE_SIZE);
    const concurrency = Math.max(1, Number(options.concurrency) || DEFAULT_CONCURRENCY);
    const first = await fetchPage(client, { table, columns, orderColumn, pageSize, offset: 0, count: true });
    if (first.error) return { data: first.data || [], error: first.error };

    const rows = [...(first.data || [])];
    if (rows.length < pageSize) return { data: rows, error: null };

    const exactCount = first.count === null || first.count === undefined ? null : Number(first.count);
    if (exactCount !== null && Number.isFinite(exactCount) && exactCount >= 0) {
      const offsets = [];
      for (let offset = pageSize; offset < exactCount; offset += pageSize) offsets.push(offset);
      for (let index = 0; index < offsets.length; index += concurrency) {
        const batch = await Promise.all(offsets.slice(index, index + concurrency).map((offset) => (
          fetchPage(client, { table, columns, orderColumn, pageSize, offset })
        )));
        const failed = batch.find((page) => page.error);
        if (failed) return { data: rows, error: failed.error };
        batch.forEach((page) => rows.push(...(page.data || [])));
      }
      return { data: rows, error: null };
    }

    for (let offset = pageSize; ; offset += pageSize) {
      const page = await fetchPage(client, { table, columns, orderColumn, pageSize, offset });
      if (page.error) return { data: rows, error: page.error };
      rows.push(...(page.data || []));
      if (!page.data || page.data.length < pageSize) break;
    }
    return { data: rows, error: null };
  }

  return { DEFAULT_PAGE_SIZE, DEFAULT_CONCURRENCY, loadStudentDatabasePages };
});
