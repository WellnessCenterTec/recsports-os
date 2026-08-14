import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);

function linking() {
  return require("../site/class-dashboard-linking.js");
}

test("links different discipline names by the same CRN and block", () => {
  const disciplineKey = "PMT1\u0000fitness pmt1 body pump";
  const index = linking().createClassOfferingLinkIndex([{
    disciplineKey,
    period: "PMT1",
    crn: "5320",
    subjectCode: "XAFG3011",
    normalizedName: "fitness pmt1 body pump"
  }]);

  assert.equal(linking().resolveClassOfferingLink(index, {
    period: "PMT1",
    crn: "5320",
    subjectCode: "OTHER",
    normalizedName: "body pump pmt1"
  }), disciplineKey);
});

test("falls back to subject code only when CRN is missing", () => {
  const disciplineKey = "PMT1\u0000fitness pmt1 body pump";
  const index = linking().createClassOfferingLinkIndex([{
    disciplineKey,
    period: "PMT1",
    crn: "5320",
    subjectCode: "XAFG3011",
    normalizedName: "fitness pmt1 body pump"
  }]);

  assert.equal(linking().resolveClassOfferingLink(index, {
    period: "PMT1",
    crn: "",
    subjectCode: "xafg3011",
    normalizedName: "body pump pmt1"
  }), disciplineKey);
});

test("falls back to normalized name when CRN and subject code are missing", () => {
  const disciplineKey = "PMT1\u0000pilates";
  const index = linking().createClassOfferingLinkIndex([{
    disciplineKey,
    period: "PMT1",
    crn: "7001",
    subjectCode: "XPIL1001",
    normalizedName: "pilates"
  }]);

  assert.equal(linking().resolveClassOfferingLink(index, {
    period: "PMT1",
    crn: "",
    subjectCode: "",
    normalizedName: "PILATES"
  }), disciplineKey);
});

test("does not cross PMT blocks", () => {
  const index = linking().createClassOfferingLinkIndex([{
    disciplineKey: "PMT1\u0000body pump",
    period: "PMT1",
    crn: "5320",
    subjectCode: "XAFG3011",
    normalizedName: "body pump"
  }]);

  assert.equal(linking().resolveClassOfferingLink(index, {
    period: "PMT2",
    crn: "5320",
    subjectCode: "XAFG3011",
    normalizedName: "body pump"
  }), "");
});

test("does not resolve an ambiguous CRN", () => {
  const index = linking().createClassOfferingLinkIndex([
    { disciplineKey: "PMT1\u0000body pump", period: "PMT1", crn: "5320", subjectCode: "XBP", normalizedName: "body pump" },
    { disciplineKey: "PMT1\u0000pilates", period: "PMT1", crn: "5320", subjectCode: "XPIL", normalizedName: "pilates" }
  ]);

  assert.equal(linking().resolveClassOfferingLink(index, {
    period: "PMT1",
    crn: "5320",
    subjectCode: "XBP",
    normalizedName: "body pump"
  }), "");
});

test("does not fall back to a similar name when a different CRN is present", () => {
  const index = linking().createClassOfferingLinkIndex([{
    disciplineKey: "PMT1\u0000body pump",
    period: "PMT1",
    crn: "5320",
    subjectCode: "XBP",
    normalizedName: "body pump"
  }]);

  assert.equal(linking().resolveClassOfferingLink(index, {
    period: "PMT1",
    crn: "9999",
    subjectCode: "XBP",
    normalizedName: "body pump"
  }), "");
});

test("normalizes numeric CRN artifacts and rejects zero values", () => {
  assert.equal(linking().normalizeClassLinkIdentifier(" 5320.0 "), "5320");
  assert.equal(linking().normalizeClassLinkIdentifier("xAfg3011"), "XAFG3011");
  assert.equal(linking().normalizeClassLinkIdentifier("0"), "");
  assert.equal(linking().normalizeClassLinkIdentifier("0:00:00"), "");
});
