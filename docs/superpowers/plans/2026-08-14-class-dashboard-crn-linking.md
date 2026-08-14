# CRN-First Class Dashboard Linking Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unir Programación Oficial y la lista de alumnos del Dashboard de Clases Deportivas por CRN, con clave de materia y nombre como respaldos seguros.

**Architecture:** Un módulo UMD aislado construirá índices únicos por bloque + CRN, bloque + clave y bloque + nombre normalizado. `site/app.js` usará el resolvedor al agregar métricas y conservará una disciplina independiente cuando no exista una coincidencia segura.

**Tech Stack:** JavaScript del navegador, CommonJS para pruebas con Node, `node:test`, sitio estático desplegado en Vercel.

## Global Constraints

- CRN es el identificador principal.
- Clave de materia es el segundo respaldo y nombre normalizado el tercero.
- El bloque PMT forma parte de cada llave.
- CRN diferentes no se combinan por similitud de nombre.
- Identificadores ambiguos no se asignan automáticamente.
- No modificar archivos del usuario, Booking, página inicial, otros módulos ni contratos de persistencia.

---

### Task 1: Resolvedor aislado de ofertas programadas

**Files:**
- Create: `site/class-dashboard-linking.js`
- Create: `tests/class-dashboard-linking.test.mjs`

**Interfaces:**
- Consumes: ofertas `{ disciplineKey, period, crn, subjectCode, normalizedName }` y filas con los mismos campos de identidad.
- Produces: `createClassOfferingLinkIndex(offerings)`, `resolveClassOfferingLink(index, candidate)` y `normalizeClassLinkIdentifier(value)`.

- [ ] **Step 1: Escribir la prueba fallida del caso CRN**

```js
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const linking = () => require("../site/class-dashboard-linking.js");

test("links different discipline names by the same CRN and block", () => {
  const index = linking().createClassOfferingLinkIndex([{
    disciplineKey: "PMT1\\0fitness pmt1 body pump",
    period: "PMT1",
    crn: "5320",
    subjectCode: "XAFG3011",
    normalizedName: "fitness pmt1 body pump"
  }]);

  assert.equal(linking().resolveClassOfferingLink(index, {
    period: "PMT1",
    crn: "5320",
    subjectCode: "OTRA",
    normalizedName: "body pump pmt1"
  }), "PMT1\\0fitness pmt1 body pump");
});
```

- [ ] **Step 2: Ejecutar la prueba y verificar RED**

Run:

```bash
RUNTIME=/Users/yankarloguerrero/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node
"$RUNTIME" --test tests/class-dashboard-linking.test.mjs
```

Expected: FAIL porque `site/class-dashboard-linking.js` no existe.

- [ ] **Step 3: Agregar pruebas de prioridad y seguridad**

Agregar casos separados que confirmen:

```js
test("falls back to subject code when CRN has no match", () => { /* espera la oferta por clave */ });
test("falls back to normalized name when CRN and subject code have no match", () => { /* espera la oferta por nombre */ });
test("does not cross PMT blocks", () => { /* espera cadena vacía */ });
test("does not resolve an ambiguous CRN", () => { /* dos disciplineKey para el mismo CRN; espera cadena vacía */ });
test("does not merge different CRNs by name", () => { /* CRN conocido pero distinto; espera cadena vacía */ });
test("normalizes numeric CRN artifacts and rejects zero values", () => {
  assert.equal(linking().normalizeClassLinkIdentifier(" 5320.0 "), "5320");
  assert.equal(linking().normalizeClassLinkIdentifier("0:00:00"), "");
});
```

- [ ] **Step 4: Implementar el módulo mínimo**

Crear un módulo UMD que exponga las tres funciones. El índice debe almacenar conjuntos de `disciplineKey` por identidad para detectar ambigüedad:

```js
function createClassOfferingLinkIndex(offerings) {
  const buckets = { crn: new Map(), subjectCode: new Map(), name: new Map() };
  // Registrar `${period}|${identificador}` -> Set(disciplineKey).
  return buckets;
}

function resolveClassOfferingLink(index, candidate) {
  // CRN presente y conocido: coincidencia única o bloqueo por ambigüedad/diferencia.
  // Sin coincidencia de CRN: intentar clave.
  // Sin coincidencia de clave: intentar nombre.
  // Devolver disciplineKey o "".
}
```

Regla adicional: si la fila trae un CRN válido que ya pertenece a otra oferta del mismo bloque, no usar el nombre para combinarla con una oferta diferente.

- [ ] **Step 5: Ejecutar las pruebas y verificar GREEN**

Run:

```bash
"$RUNTIME" --test tests/class-dashboard-linking.test.mjs
"$RUNTIME" --check site/class-dashboard-linking.js
```

Expected: todas las pruebas del resolvedor pasan y la sintaxis es válida.

- [ ] **Step 6: Commit del resolvedor**

```bash
git add site/class-dashboard-linking.js tests/class-dashboard-linking.test.mjs
git commit -m "Add CRN-first class offering resolver"
```

---

### Task 2: Integrar el resolvedor en las métricas del Dashboard

**Files:**
- Modify: `site/index.html`
- Modify: `site/app.js` en `buildClassDashboardMetrics`
- Modify: `tests/class-dashboard-linking.test.mjs`

**Interfaces:**
- Consumes: `window.WellSyncClassDashboardLinking` y las ofertas producidas por `classProgramOfferings()`.
- Produces: una sola fila de disciplina con alumnos, horario y profesores cuando CRN/clave/nombre identifican la misma oferta.

- [ ] **Step 1: Escribir la prueba fallida de integración estática**

Agregar una prueba que lea `site/index.html` y `site/app.js` y exija:

```js
assert.match(indexHtml, /class-dashboard-linking\.js\?v=20260814-class-crn-v1/);
assert.ok(indexHtml.indexOf("class-dashboard-linking.js") < indexHtml.indexOf("app.js"));
assert.match(appSource, /createClassOfferingLinkIndex/);
assert.match(appSource, /resolveClassOfferingLink/);
```

- [ ] **Step 2: Ejecutar la prueba y verificar RED**

Run:

```bash
"$RUNTIME" --test tests/class-dashboard-linking.test.mjs
```

Expected: FAIL porque el módulo todavía no está cargado ni conectado al agregador.

- [ ] **Step 3: Cargar el módulo antes de la aplicación**

En `site/index.html`, agregar:

```html
<script src="./class-dashboard-linking.js?v=20260814-class-crn-v1"></script>
```

antes de `app.js`, y actualizar únicamente el parámetro de versión de `app.js` a `20260814-class-crn-v1`.

- [ ] **Step 4: Construir el índice dentro del agregador**

En `buildClassDashboardMetrics`, recopilar por cada oferta:

```js
offeringLinks.push({
  disciplineKey,
  period,
  crn: offering.crn,
  subjectCode: offering.subjectCode,
  normalizedName: normalizeText(offering.disciplineBase || offering.discipline)
});
```

Después de registrar ofertas:

```js
const offeringLinkIndex = window.WellSyncClassDashboardLinking
  .createClassOfferingLinkIndex(offeringLinks);
```

- [ ] **Step 5: Resolver cada fila de alumnos antes de crear una disciplina nueva**

Para cada fila de Calificaciones construir el candidato con bloque, `row.crn`, `row.subject_code` y nombre base normalizado. Usar:

```js
const linkedDisciplineKey = window.WellSyncClassDashboardLinking
  .resolveClassOfferingLink(offeringLinkIndex, candidate);
const disciplineKey = linkedDisciplineKey
  || `${period}\u0000${normalizeText(disciplineBase || discipline)}`;
```

Obtener los profesores programados desde `disciplineMap.get(disciplineKey)?.teacherGroups`, de modo que el mismo enlace por CRN también permita inferir el profesor cuando la lista no lo incluya.

- [ ] **Step 6: Ejecutar pruebas y comprobaciones**

Run:

```bash
"$RUNTIME" --test tests/class-dashboard-linking.test.mjs
"$RUNTIME" --check site/app.js
git diff --check
```

Expected: pruebas y sintaxis aprobadas.

- [ ] **Step 7: Commit de integración**

```bash
git add site/index.html site/app.js tests/class-dashboard-linking.test.mjs
git commit -m "Link class dashboard students by CRN"
```

---

### Task 3: Verificación local y regresión completa

**Files:**
- No production file changes expected.

**Interfaces:**
- Consumes: la versión integrada y los datos ya cargados en la sesión de WellSync.
- Produces: evidencia automática y visual antes de publicar.

- [ ] **Step 1: Ejecutar la suite completa**

```bash
"$RUNTIME" --test tests/*.test.mjs
"$RUNTIME" --check site/app.js
"$RUNTIME" --check site/class-dashboard-linking.js
git diff --check
git status -sb
```

Expected: suite completa verde, sintaxis válida y árbol limpio.

- [ ] **Step 2: Servir la versión local desde `site/`**

```bash
python3 -m http.server 8765 --directory site
```

- [ ] **Step 3: Reproducir el Dashboard AD26 / PMT1**

Abrir la versión local, conservar la Programación y la lista de alumnos de prueba, y verificar:

- `Fitness PMT1 (Body pump)` / `Body Pump PMT1` aparecen como una sola disciplina cuando comparten CRN.
- La fila unida muestra horario, profesor y 30 inscritos.
- Pilates, GAP y HIIT siguen la misma regla cuando sus CRN coinciden.
- Las materias realmente sin alumnos permanecen en cero.
- Las materias ya correctas, como Natación y Tenis, conservan sus conteos.

- [ ] **Step 4: Registrar evidencia compacta**

Guardar únicamente conteos y nombres de disciplina necesarios para comprobar la unión; no copiar matrículas ni datos personales a pruebas o commits.

---

### Task 4: Publicar y comprobar producción

**Files:**
- No additional code changes expected.

**Interfaces:**
- Consumes: rama verificada y proyecto Vercel `recsports-wellness`.
- Produces: `main` actualizado y Dashboard público comprobado.

- [ ] **Step 1: Revisar el cambio final**

```bash
git log --oneline main..HEAD
git diff --stat main...HEAD
git status -sb
```

- [ ] **Step 2: Integrar y subir con avance seguro**

Confirmar que `origin/main` no cambió, integrar la rama en `main` sin reescritura y subirla mediante el checkout autenticado.

- [ ] **Step 3: Desplegar Vercel desde la raíz correcta**

Ejecutar `vercel deploy --prod --yes` desde la raíz del repositorio cuya configuración selecciona `site/`. Confirmar estado `Ready` y alias `https://recsports-wellness.vercel.app/`.

- [ ] **Step 4: Verificar archivos públicos**

Confirmar que el HTML público carga `class-dashboard-linking.js?v=20260814-class-crn-v1` y comparar SHA-256 de `index.html`, `class-dashboard-linking.js` y `app.js` contra los archivos locales probados.

- [ ] **Step 5: Verificar el Dashboard público**

En la sesión autorizada, abrir AD26 / PMT1 y confirmar que las disciplinas enlazadas por CRN muestran alumnos, horario y profesor en una sola fila. Comprobar también una disciplina previamente correcta y una oferta realmente sin alumnos.

- [ ] **Step 6: Entregar estados separados**

Reportar implementación, GitHub, Vercel y verificación pública con enlaces directos y los conteos observados.
