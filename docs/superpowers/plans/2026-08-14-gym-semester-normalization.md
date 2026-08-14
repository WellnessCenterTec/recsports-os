# Gym Semester Normalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mostrar correctamente por semestre a los alumnos de Gimnasio que ya cruzan con Base Maestra, aunque el semestre esté guardado como número o texto en español.

**Architecture:** Un módulo UMD aislado normalizará cualquier valor de semestre a un entero del 1 al 12 o `null`. `site/app.js` consumirá esa misma función tanto al leer Base Maestra como al validar cargas, evitando reglas duplicadas.

**Tech Stack:** JavaScript de navegador, módulos UMD/CommonJS, Node.js `node:test`, sitio estático en Vercel.

## Global Constraints

- No modificar registros de asistencias ni Base Maestra.
- Conservar separados los alumnos cuyo semestre es inválido y las matrículas sin cruce.
- Aceptar números, texto numérico y ordinales españoles con o sin acento.
- Rechazar valores vacíos, desconocidos o fuera del intervalo 1 a 12.

---

### Task 1: Normalizador comprobable de semestre

**Files:**
- Create: `site/student-semester.js`
- Create: `tests/student-semester.test.mjs`

**Interfaces:**
- Consumes: cualquier valor recibido desde la columna `Semestre`.
- Produces: `normalizeAcademicSemester(value): number | null` mediante CommonJS y `window.WellSyncStudentSemester`.

- [ ] **Step 1: Escribir la prueba fallida**

Probar que `normalizeAcademicSemester` devuelve `1` para `1` y `Primer Semestre`, `7` para `7.0`, `Septimo Semestre` y `Séptimo Semestre`, `12` para `Duodécimo Semestre`, y `null` para vacío, desconocido, `0` y `13`.

- [ ] **Step 2: Ejecutar la prueba y confirmar RED**

Run: `node --test tests/student-semester.test.mjs`

Expected: FAIL porque `site/student-semester.js` todavía no existe.

- [ ] **Step 3: Implementar el módulo mínimo**

Crear un diccionario normalizado de ordinales españoles y validar siempre el rango 1 a 12 antes de devolver el resultado.

- [ ] **Step 4: Ejecutar la prueba y confirmar GREEN**

Run: `node --test tests/student-semester.test.mjs`

Expected: todas las pruebas del módulo pasan.

- [ ] **Step 5: Commit**

```bash
git add site/student-semester.js tests/student-semester.test.mjs
git commit -m "Add academic semester normalizer"
```

### Task 2: Integración en Base Maestra y Gimnasio

**Files:**
- Modify: `site/index.html`
- Modify: `site/app.js:1607-1628`
- Modify: `site/app.js:2368-2380`
- Test: `tests/student-semester.test.mjs`

**Interfaces:**
- Consumes: `window.WellSyncStudentSemester.normalizeAcademicSemester`.
- Produces: `cloudStudentDatabase[].semestre` como entero válido o `null`; `parseOptionalSemester(value)` con la misma regla.

- [ ] **Step 1: Escribir la prueba de integración fallida**

Comprobar que `index.html` carga `student-semester.js` antes de `app.js`, que `studentDatabaseFromCloud` usa el normalizador y que `parseOptionalSemester` delega en él.

- [ ] **Step 2: Ejecutar la prueba y confirmar RED**

Run: `node --test tests/student-semester.test.mjs`

Expected: FAIL porque el sitio aún no carga ni utiliza el módulo.

- [ ] **Step 3: Integrar el módulo**

Cargar el script en `index.html`, obtener su API una sola vez en `app.js`, sustituir `Number(row.Semestre || row.semestre || 1)` y reutilizarla dentro de `parseOptionalSemester`.

- [ ] **Step 4: Actualizar versión pública**

Cambiar la versión de caché a `20260814-gym-semester-v1` en el meta y los scripts afectados para refrescar pestañas abiertas.

- [ ] **Step 5: Ejecutar todas las pruebas**

Run: `node --check site/app.js && node --check site/student-semester.js && node --test tests/*.test.mjs`

Expected: 0 fallos.

- [ ] **Step 6: Commit**

```bash
git add site/index.html site/app.js tests/student-semester.test.mjs
git commit -m "Normalize gym semesters from student master"
```

### Task 3: Publicación y verificación

**Files:**
- No source changes expected.

**Interfaces:**
- Consumes: commits verificados de Tasks 1 y 2.
- Produces: `main` actualizado y despliegue de producción verificable.

- [ ] **Step 1: Integrar la rama en `main` y repetir la suite completa**

- [ ] **Step 2: Publicar `main` en GitHub**

- [ ] **Step 3: Desplegar producción en Vercel y confirmar estado `Ready`**

- [ ] **Step 4: Comparar SHA-256 de `index.html`, `app.js` y `student-semester.js` entre local y producción**

- [ ] **Step 5: Abrir Gimnasio → Dashboard y verificar la gráfica `Por semestre`**

El resultado esperado es que los semestres textuales se distribuyan entre 1 y 12; `Sin identificar` debe quedar solo para semestre realmente inválido o vacío, y el indicador separado de matrículas sin cruce debe conservarse.
