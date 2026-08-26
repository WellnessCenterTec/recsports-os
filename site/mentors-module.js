(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WellSyncMentors = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function clean(value) {
    return String(value ?? "").trim();
  }

  function headerKey(value) {
    return clean(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
  }

  function normalizedMatricula(value) {
    return clean(value).toUpperCase().replace(/[^A-Z0-9]/g, "");
  }

  function valueFor(row, aliases) {
    const accepted = new Set(aliases.map(headerKey));
    const key = Object.keys(row || {}).find((candidate) => accepted.has(headerKey(candidate)));
    return key ? row[key] : "";
  }

  function normalizeMentorshipRows(rows) {
    const normalized = [];
    const seen = new Set();
    let invalid = 0;
    let duplicates = 0;
    (Array.isArray(rows) ? rows : []).forEach((row) => {
      const matricula = normalizedMatricula(valueFor(row, ["Matrícula", "Matricula", "matricula"]));
      const mentor = clean(valueFor(row, ["Mentor(a)", "Mentor", "Mentora"]));
      const community = clean(valueFor(row, ["Comunidad", "Community"]));
      if (!matricula || !mentor || !community) {
        invalid += 1;
        return;
      }
      const key = `${mentor}\u0000${community}\u0000${matricula}`;
      if (seen.has(key)) {
        duplicates += 1;
        return;
      }
      seen.add(key);
      normalized.push({ matricula, mentor, community });
    });
    return { rows: normalized, invalid, duplicates };
  }

  function normalizeActivityRows(rows) {
    const unique = new Map();
    (Array.isArray(rows) ? rows : []).forEach((row) => {
      const matricula = normalizedMatricula(row?.matricula ?? row?.student);
      const area = clean(row?.area);
      if (!matricula || !area) return;
      const key = `${matricula}\u0000${area}`;
      if (!unique.has(key)) unique.set(key, { matricula, area });
    });
    return Array.from(unique.values());
  }

  function buildMentorReport(assignments, activityRows) {
    const activities = normalizeActivityRows(activityRows);
    const activityByStudent = new Map();
    activities.forEach(({ matricula, area }) => {
      if (!activityByStudent.has(matricula)) activityByStudent.set(matricula, new Set());
      activityByStudent.get(matricula).add(area);
    });

    const mentorGroups = new Map();
    const assignedStudents = new Set();
    (Array.isArray(assignments) ? assignments : []).forEach((row) => {
      const matricula = normalizedMatricula(row?.matricula);
      const mentor = clean(row?.mentor);
      const community = clean(row?.community);
      if (!matricula || !mentor || !community) return;
      assignedStudents.add(matricula);
      const key = `${mentor}\u0000${community}`;
      if (!mentorGroups.has(key)) mentorGroups.set(key, { key, mentor, community, students: new Set() });
      mentorGroups.get(key).students.add(matricula);
    });

    const mentors = Array.from(mentorGroups.values()).map((group) => {
      const students = Array.from(group.students).sort().map((matricula) => {
        const areas = Array.from(activityByStudent.get(matricula) || []).sort((a, b) => a.localeCompare(b, "es"));
        return { matricula, participates: areas.length > 0, areas, areaCount: areas.length };
      });
      const participating = students.filter((student) => student.participates).length;
      const total = students.length;
      const areaCounts = new Map();
      students.forEach((student) => student.areas.forEach((area) => areaCounts.set(area, (areaCounts.get(area) || 0) + 1)));
      const areaSummary = Array.from(areaCounts, ([area, count]) => ({ area, count }))
        .sort((a, b) => b.count - a.count || a.area.localeCompare(b.area, "es"));
      return {
        key: group.key,
        mentor: group.mentor,
        community: group.community,
        total,
        participating,
        withoutActivity: total - participating,
        percentage: total ? (participating / total) * 100 : 0,
        students,
        areaSummary
      };
    });

    const participatingStudents = new Set(Array.from(assignedStudents).filter((matricula) => activityByStudent.has(matricula)));
    return {
      mentors,
      totalAssignments: (Array.isArray(assignments) ? assignments : []).length,
      uniqueStudents: assignedStudents.size,
      participating: participatingStudents.size,
      withoutActivity: assignedStudents.size - participatingStudents.size,
      percentage: assignedStudents.size ? (participatingStudents.size / assignedStudents.size) * 100 : 0,
      activityAreas: Array.from(new Set(activities.map((row) => row.area))).sort((a, b) => a.localeCompare(b, "es"))
    };
  }

  function sortMentors(mentors, direction = "desc") {
    const multiplier = direction === "asc" ? 1 : -1;
    return [...(mentors || [])].sort((a, b) => (
      multiplier * (a.percentage - b.percentage)
      || b.total - a.total
      || a.mentor.localeCompare(b.mentor, "es")
      || a.community.localeCompare(b.community, "es")
    ));
  }

  function rankCommunities(mentors, limit = 5) {
    const communityStudents = new Map();
    (Array.isArray(mentors) ? mentors : []).forEach((mentor) => {
      const community = clean(mentor?.community);
      if (!community) return;
      if (!communityStudents.has(community)) communityStudents.set(community, new Set());
      (Array.isArray(mentor?.students) ? mentor.students : []).forEach((student) => {
        const matricula = normalizedMatricula(student?.matricula);
        if (matricula && student?.participates) communityStudents.get(community).add(matricula);
      });
    });
    return Array.from(communityStudents, ([label, students]) => ({ label, value: students.size }))
      .filter((row) => row.value > 0)
      .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label, "es"))
      .slice(0, Math.max(0, Number(limit) || 0));
  }

  return { normalizedMatricula, normalizeMentorshipRows, normalizeActivityRows, buildMentorReport, sortMentors, rankCommunities };
});
