# Normalización de semestres para el Dashboard de Gimnasio

## Objetivo

Corregir la distribución **Gimnasio → Dashboard → Por semestre** para que los alumnos cuya matrícula ya cruza con Base Maestra se agrupen por semestre aunque el campo esté guardado como número o como texto en español.

## Diagnóstico confirmado

La matrícula se normaliza y se encuentra correctamente en Base Maestra. El fallo ocurre después del cruce: `studentDatabaseFromCloud` convierte `Semestre` mediante `Number(...)`. Los valores textuales como `Primer Semestre` o `Séptimo Semestre` producen `NaN`, y el Dashboard los muestra como `Sin identificar`.

La corrección de Clases Deportivas por CRN no participa en esta ruta de datos.

## Diseño aprobado

Se añadirá un normalizador aislado de semestre académico con estas reglas:

- Aceptar números del 1 al 12, incluyendo texto numérico y artefactos como `7.0`.
- Aceptar ordinales en español del primero al duodécimo, con o sin acentos, y expresiones como `Séptimo Semestre`.
- Rechazar valores vacíos, fuera de rango o desconocidos sin inventar un semestre.
- Usar el mismo normalizador al leer Base Maestra y al preparar la carga de alumnos.
- Conservar `Sin identificar` únicamente cuando el semestre sea realmente vacío o inválido.
- Conservar por separado las matrículas que no existen en Base Maestra.

## Alternativas descartadas

1. **Reescribir los registros de Supabase.** No es necesario porque el valor textual original ya existe y se puede interpretar al leerlo. Aumentaría el riesgo de alterar la Base Maestra.
2. **Corregir solamente la gráfica.** Duplicaría reglas y permitiría que otros módulos siguieran recibiendo semestres inválidos.

## Componentes

- Un módulo pequeño y comprobable expondrá `normalizeAcademicSemester(value)`.
- `site/app.js` lo utilizará en `studentDatabaseFromCloud` y `parseOptionalSemester`.
- `site/index.html` cargará el módulo antes de `app.js` y actualizará la versión pública para refrescar pestañas abiertas.

## Pruebas

Las pruebas deberán cubrir:

- números y texto numérico del 1 al 12;
- ordinales con y sin acento;
- sufijo `Semestre` y espacios adicionales;
- vacíos, texto desconocido y números fuera de rango;
- uso efectivo del normalizador en la carga de Base Maestra y en el Dashboard de Gimnasio.

La prueba de regresión se ejecutará primero y deberá fallar antes de implementar el módulo.

## Verificación de producción

Después de publicar se comprobarán por separado:

- pruebas automatizadas y sintaxis;
- commit disponible en `main`;
- despliegue Vercel en estado `Ready`;
- coincidencia de archivos locales y públicos;
- reducción de `Sin identificar` en la gráfica pública, manteniendo visibles las matrículas que realmente no cruzan con Base Maestra.

No se volverán a cargar ni las asistencias ni la Base Maestra como parte de este cambio.
