import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const appSource = await readFile(new URL("../site/app.js", import.meta.url), "utf8");
const stylesSource = await readFile(new URL("../site/styles.css", import.meta.url), "utf8");
const cardsMarkup = appSource.slice(
  appSource.indexOf('<div class="config-link-list">'),
  appSource.indexOf('</section>', appSource.indexOf('<div class="config-link-list">'))
);
const configurationMarkup = appSource.slice(
  appSource.indexOf("function renderConfigurationDashboard()"),
  appSource.indexOf("function collaboratorPhotoMarkup", appSource.indexOf("function renderConfigurationDashboard()"))
);

test("configuration starts with the quick-links workspace without the old summary", () => {
  assert.doesNotMatch(configurationMarkup, /Panel exclusivo para Direccion Deportiva/);
  assert.doesNotMatch(configurationMarkup, /Usuarios demo|perfiles base|areas operativas|politica por modulo/);
  assert.match(configurationMarkup, /<div class="blueprint-grid">\s*<section class="blueprint-card wide config-links-panel">/);
});

test("configuration hides the Horarios, Reportes and Sistema navigation group", () => {
  assert.match(appSource, /const isConfiguration = activeArea === "configuracion"/);
  assert.match(appSource, /segmentedNav\.hidden = isPresentation \|\| isMentors \|\| isGamer \|\| isConfiguration/);
  assert.match(appSource, /if \(isConfiguration && activeView !== "dashboard"\) activeView = "dashboard"/);
});

test("quick-link cards keep every stored link and its existing actions", () => {
  assert.match(cardsMarkup, /configLinks\.map\(\(link\) =>/);
  assert.match(cardsMarkup, /href="\$\{escapeHtml\(link\.url\)\}"/);
  assert.match(cardsMarkup, /data-edit-config-link="\$\{escapeHtml\(link\.id\)\}"/);
  assert.match(cardsMarkup, /data-delete-config-link="\$\{escapeHtml\(link\.id\)\}"/);
});

test("quick-link cards expose only the clickable title, not the URL text", () => {
  assert.match(cardsMarkup, /<strong>\$\{escapeHtml\(link\.name\)\}<\/strong>/);
  assert.doesNotMatch(cardsMarkup, /<span>\$\{escapeHtml\(link\.url\)\}<\/span>/);
  assert.match(cardsMarkup, /aria-label="Abrir \$\{escapeHtml\(link\.name\)\} en una pestaña nueva"/);
});

test("quick-link cards use a four-column blue layout with responsive fallback", () => {
  assert.match(stylesSource, /\.config-link-list\s*\{[^}]*grid-template-columns:\s*repeat\(4, minmax\(0, 1fr\)\)/s);
  assert.match(stylesSource, /\.config-link-item::before\s*\{[^}]*linear-gradient\(90deg, #004f91, #168bd2 62%, #6ec8f3\)/s);
  assert.match(stylesSource, /@media \(max-width: 1100px\)\s*\{\s*\.config-link-list\s*\{\s*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(stylesSource, /@media \(max-width: 760px\)[\s\S]*?\.config-link-list\s*\{\s*grid-template-columns:\s*1fr;/);
});
