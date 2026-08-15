# WellSync Progressive Module Loading Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Abrir WellSync con navegación utilizable de inmediato y descargar únicamente los datos del módulo visible, reutilizando dependencias compartidas durante la sesión.

**Architecture:** Un módulo UMD independiente administrará estados `idle/loading/ready/error`, deduplicación y reintentos. `site/app.js` definirá las dependencias de cada área, solicitará la carga al entrar y renderizará estados explícitos en vez de ceros falsos; los recursos estáticos grandes dejarán de descargarse al inicio.

**Tech Stack:** JavaScript de navegador, UMD/CommonJS, Node.js `node:test`, Supabase JS, sitio estático Vercel.

## Global Constraints

- No modificar datos, permisos, RLS, cargas ni contratos de Supabase.
- No eliminar archivos estáticos ni respaldos existentes.
- Mostrar “Cargando datos…” o un error recuperable antes de mostrar métricas que todavía no se consultaron.
- Reutilizar Base Maestra y otras dependencias compartidas una sola vez por periodo y sesión.
- Conservar el commit anterior de producción como reversión.

---

### Task 1: Coordinador de carga deduplicada

**Files:**
- Create: `site/module-data-loader.js`
- Create: `tests/module-data-loader.test.mjs`

**Interfaces:**
- Consumes: `createModuleDataLoader({ onStateChange })` y tareas asincrónicas `() => Promise<unknown>`.
- Produces: `ensure(key, task)`, `status(key)`, `error(key)`, `reset(key?)`.

- [ ] **Step 1: Escribir pruebas fallidas del contrato**

Probar con promesas controladas que:

```js
const loader = createModuleDataLoader();
const first = loader.ensure("gym:AD26", task);
const second = loader.ensure("gym:AD26", task);
assert.equal(first, second);
assert.equal(loader.status("gym:AD26"), "loading");
```

Al resolver, el estado debe ser `ready`; una segunda llamada no ejecuta nuevamente `task`. Al rechazar, el estado debe ser `error` y la llamada siguiente debe reintentar.

- [ ] **Step 2: Ejecutar RED**

Run: `node --test tests/module-data-loader.test.mjs`

Expected: FAIL porque el módulo no existe.

- [ ] **Step 3: Implementar el módulo mínimo**

Mantener mapas privados de estado, errores y promesas. `ensure` devuelve la promesa existente para `loading`, una promesa resuelta para `ready`, o ejecuta la tarea para `idle/error`. `reset` limpia una clave o todas.

- [ ] **Step 4: Ejecutar GREEN y commit**

Run: `node --check site/module-data-loader.js && node --test tests/module-data-loader.test.mjs`

```bash
git add site/module-data-loader.js tests/module-data-loader.test.mjs
git commit -m "Add progressive module data loader"
```

### Task 2: Carga por área y navegación inmediata

**Files:**
- Modify: `site/index.html`
- Modify: `site/app.js:528-800`
- Modify: `site/app.js:5450-5615`
- Modify: `site/app.js:6600-6670`
- Modify: `site/app.js:18490-18645`
- Modify: `site/app.js:20045-20235`
- Test: `tests/progressive-module-loading.test.mjs`

**Interfaces:**
- Consumes: `window.WellSyncModuleDataLoader.createModuleDataLoader`.
- Produces: `ensureAreaData(areaId)`, `areaDataStatus(areaId)`, `renderAreaLoadingState(areaId)`, `rememberActiveArea(areaId)`.

- [ ] **Step 1: Escribir la prueba de integración fallida**

Crear una prueba de comportamiento con un coordinador real y cargadores espía que compruebe:

- iniciar en `gimnasio` ejecuta `student-master` y `gym`, pero no `class-grades`, `intramuros` ni `communication`;
- abrir `clases` después ejecuta solo `class-grades`, `booking` y `class-simulator`;
- volver a `gimnasio` no repite las dos consultas ya listas;
- cambiar de periodo reinicia las claves y permite una nueva carga.

- [ ] **Step 2: Ejecutar RED**

Run: `node --test tests/progressive-module-loading.test.mjs`

Expected: FAIL porque el planificador por área no existe.

- [ ] **Step 3: Implementar un planificador aislado**

Crear `site/module-data-plan.js` con:

```js
createModuleDataPlan({ coordinator, loaders, period })
```

El plan expondrá `ensureArea(areaId)`, `status(areaId)` y `reset(nextPeriod)`. Las dependencias serán claves literales por área; las compartidas usarán la misma clave para deduplicarse.

- [ ] **Step 4: Conectar el planificador en `app.js`**

Después de validar la sesión, renderizar la estructura y llamar `ensureAreaData(activeArea)` sin esperar toda la aplicación. Los botones `.nav-item`, `[data-jump]` y las vistas internas que requieren fuentes adicionales deben iniciar su carga después del cambio visual.

- [ ] **Step 5: Implementar estados visibles**

Antes de construir el contenido de un área, si su estado es `idle/loading`, renderizar una tarjeta `Cargando datos de <módulo>…`; si es `error`, mostrar `No se pudieron cargar los datos` con botón `Reintentar`.

- [ ] **Step 6: Recordar el último módulo**

Guardar únicamente el identificador de área en `localStorage` y restaurarlo si el perfil actual tiene permiso de verlo. No guardar datos académicos en esta clave.

- [ ] **Step 7: Reiniciar al cambiar periodo**

En `switchMasterPeriod`, limpiar el coordinador y solicitar únicamente el área activa, en vez de disparar todos los módulos.

- [ ] **Step 8: Ejecutar pruebas y commit**

Run: `node --check site/app.js && node --check site/module-data-plan.js && node --test tests/module-data-loader.test.mjs tests/progressive-module-loading.test.mjs`

```bash
git add site/index.html site/app.js site/module-data-plan.js tests/progressive-module-loading.test.mjs
git commit -m "Load WellSync data by active module"
```

### Task 3: Recursos grandes solo cuando se necesitan

**Files:**
- Modify: `site/app.js:4686-4805`
- Modify: `site/app.js:20045-20235`
- Test: `tests/progressive-module-loading.test.mjs`

**Interfaces:**
- Consumes: planificador de Task 2.
- Produces: carga diferida de `class-grades-data.json`, Uniformes, programación de Semana Tec y calendario.

- [ ] **Step 1: Añadir prueba fallida del recurso de calificaciones**

El cargador de Clases debe consultar primero `class_grades`. Solo si el resultado está vacío y `seedIfEmpty` es verdadero puede solicitar `class-grades-data.json`.

- [ ] **Step 2: Ejecutar RED**

Run: `node --test tests/progressive-module-loading.test.mjs`

Expected: FAIL porque el arranque y `loadClassGrades` todavía llaman el recurso inicial sin condición.

- [ ] **Step 3: Retirar precargas globales**

Eliminar las llamadas de arranque a `loadPlanningCalendarRows`, `loadUniformesData`, `loadClassGradeSeedData` y `loadSemanaTecProgramSeed`. Invocarlas desde las dependencias de sus áreas.

- [ ] **Step 4: Consultar semilla de Clases solo como respaldo**

Mover `loadClassGradeSeedData()` después de la consulta Supabase y ejecutarlo exclusivamente en la rama sin filas que autoriza `importInitialClassGrades()`.

- [ ] **Step 5: Ejecutar suite completa y commit**

Run: `node --check site/app.js && node --test tests/*.test.mjs && git diff --check`

```bash
git add site/app.js tests/progressive-module-loading.test.mjs
git commit -m "Defer unused WellSync startup resources"
```

### Task 4: Publicación y medición comparativa

**Files:**
- Modify: `site/index.html` para versión de caché final.

**Interfaces:**
- Consumes: implementación verificada de Tasks 1–3.
- Produces: `main`, Vercel `Ready` y evidencia pública antes/después.

- [ ] **Step 1: Ejecutar verificación final local**

Run: `node --check site/app.js && node --check site/module-data-loader.js && node --check site/module-data-plan.js && node --test tests/*.test.mjs && git diff --check`

- [ ] **Step 2: Integrar en `main` y repetir la suite**

- [ ] **Step 3: Publicar GitHub y Vercel**

- [ ] **Step 4: Comparar SHA-256 de `index.html`, `app.js`, `module-data-loader.js` y `module-data-plan.js`**

- [ ] **Step 5: Medir producción**

Registrar:

- tiempo hasta estructura navegable;
- tiempo hasta datos del último módulo;
- capacidad de cambiar de módulo durante la carga;
- ausencia de consultas/datos de módulos no abiertos;
- exactitud de Gimnasio y Clases Deportivas después de la carga.

- [ ] **Step 6: Revertir si falta algún dato o la navegación sigue bloqueada**

Usar el commit de producción anterior `64fffc68b8577ce140aaca8cf7fad8564abad9f2` como referencia de reversión, sin tocar Supabase.
