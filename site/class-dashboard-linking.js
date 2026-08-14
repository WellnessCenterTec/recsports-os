(function attachClassDashboardLinking(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WellSyncClassDashboardLinking = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function createClassDashboardLinking() {
  function normalizeClassLinkIdentifier(value) {
    const clean = String(value ?? "").trim().toUpperCase();
    if (!clean || /^(?:0+(?:\.0+)?|0{1,2}:0{2}(?::0{2})?)$/.test(clean)) return "";
    return clean.replace(/^(\d+)\.0+$/, "$1");
  }

  function normalizePeriod(value) {
    return normalizeClassLinkIdentifier(value).replace(/\s+/g, "");
  }

  function normalizeName(value) {
    return String(value ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim()
      .replace(/\s+/g, " ");
  }

  function addBucketValue(bucket, key, disciplineKey) {
    if (!key || !disciplineKey) return;
    if (!bucket.has(key)) bucket.set(key, new Set());
    bucket.get(key).add(disciplineKey);
  }

  function createClassOfferingLinkIndex(offerings) {
    const index = {
      crn: new Map(),
      subjectCode: new Map(),
      name: new Map()
    };
    (Array.isArray(offerings) ? offerings : []).forEach((offering) => {
      const disciplineKey = String(offering?.disciplineKey || "");
      const period = normalizePeriod(offering?.period);
      if (!disciplineKey || !period) return;
      const crn = normalizeClassLinkIdentifier(offering?.crn);
      const subjectCode = normalizeClassLinkIdentifier(offering?.subjectCode);
      const name = normalizeName(offering?.normalizedName);
      addBucketValue(index.crn, crn ? `${period}|${crn}` : "", disciplineKey);
      addBucketValue(index.subjectCode, subjectCode ? `${period}|${subjectCode}` : "", disciplineKey);
      addBucketValue(index.name, name ? `${period}|${name}` : "", disciplineKey);
    });
    return index;
  }

  function uniqueBucketValue(bucket, key) {
    const matches = bucket?.get(key);
    return matches?.size === 1 ? [...matches][0] : "";
  }

  function resolveClassOfferingLink(index, candidate) {
    const period = normalizePeriod(candidate?.period);
    if (!period || !index) return "";

    const crn = normalizeClassLinkIdentifier(candidate?.crn);
    if (crn) return uniqueBucketValue(index.crn, `${period}|${crn}`);

    const subjectCode = normalizeClassLinkIdentifier(candidate?.subjectCode);
    if (subjectCode) return uniqueBucketValue(index.subjectCode, `${period}|${subjectCode}`);

    const name = normalizeName(candidate?.normalizedName);
    return name ? uniqueBucketValue(index.name, `${period}|${name}`) : "";
  }

  return {
    createClassOfferingLinkIndex,
    normalizeClassLinkIdentifier,
    resolveClassOfferingLink
  };
});
