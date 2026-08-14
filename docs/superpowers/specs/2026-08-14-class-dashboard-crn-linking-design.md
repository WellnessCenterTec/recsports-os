# Enlace por CRN del Dashboard de Clases Deportivas

## Objetivo

Relacionar la Programación Oficial con la lista de alumnos de Clases Deportivas usando el identificador más preciso disponible, para que los inscritos aparezcan en la misma fila que su horario y profesor.

## Problema confirmado

La lista de alumnos de AD26 está cargada, pero el Dashboard intenta unir algunos registros por el nombre normalizado de la materia. Los nombres no siempre coinciden entre fuentes. Por ejemplo, `Fitness PMT1 (Body pump)` en Programación y `Body Pump PMT1` en la lista de alumnos terminan como dos disciplinas separadas: una con horario y cero alumnos, y otra con alumnos y sin horario.

La revisión de archivos confirmó además que la programación antigua usada en la captura contiene 297 filas y cero CRN válidos. `Propuesta_programación AD2026.xlsx` contiene 300 ofertas activas con CRN válidos; 294 de sus CRN coinciden con los 295 CRN distintos de la lista de 7,992 alumnos. La unión por CRN requiere cargar esta programación vigente o cualquier archivo equivalente que conserve esos identificadores.

## Alcance

- Cambiar únicamente la asociación de Programación Oficial con la lista de alumnos dentro del Dashboard de Clases Deportivas.
- No modificar los archivos que carga el usuario.
- No modificar la carga de Booking, la página inicial ni otros módulos.
- No cambiar el almacenamiento de Programación o Calificaciones en Supabase/localStorage.

## Diseño aprobado

### Prioridad de asociación

Cada fila de alumnos buscará su oferta programada del mismo bloque en este orden:

1. CRN exacto normalizado.
2. Clave de materia exacta normalizada cuando el CRN no esté presente en Programación o no produzca una coincidencia.
3. Nombre base normalizado cuando CRN y clave no produzcan una coincidencia única.

El bloque académico (`PMT1`, `PMT2` o `PMT3`) forma parte de todas las llaves. Un registro de PMT1 no puede asociarse con una oferta de otro bloque.

### Normalización de identificadores

- Quitar espacios exteriores.
- Comparar CRN y clave sin distinguir mayúsculas/minúsculas.
- Considerar vacíos los valores de CRN que representan cero o una hora cero, como `0` y `0:00:00`.
- No eliminar dígitos ni combinar CRN distintos.

### Conflictos y seguridad de la unión

- Si un CRN del mismo bloque aparece vinculado a más de una disciplina programada, se considera ambiguo y no se usa para unir automáticamente.
- La misma regla aplica a una clave de materia ambigua.
- La coincidencia por nombre conserva el comportamiento actual como último respaldo.
- Una coincidencia válida reutiliza la disciplina, el horario y los profesores de Programación; el conteo de alumnos sigue proviniendo de la lista de alumnos.
- Las calificaciones vacías cuentan como alumnos inscritos, pero no como acreditados, bajas o NP.
- Un archivo de Programación sin CRN válidos conserva los respaldos actuales por clave y nombre, pero no puede beneficiarse de la unión exacta por CRN.

## Arquitectura

La lógica de selección de identidad se aislará en un módulo pequeño y comprobable. El módulo construirá índices de ofertas por bloque + CRN, bloque + clave y bloque + nombre. Devolverá la llave de disciplina programada solamente cuando la coincidencia sea única.

`site/app.js` seguirá siendo responsable de agregar las métricas del Dashboard, pero delegará al módulo la resolución de la oferta correspondiente. Si el módulo no encuentra una coincidencia segura, la fila de alumnos conservará su disciplina independiente actual.

## Casos que deben funcionar

- Una oferta `Fitness PMT1 (Body pump)` y alumnos `Body Pump PMT1` con el mismo CRN aparecen en una sola fila con horario y alumnos.
- Dos nombres distintos con la misma clave, sin CRN utilizable, se unen por clave.
- Una fila sin CRN ni clave puede unirse por el nombre normalizado existente.
- Dos ofertas con CRN diferentes nunca se combinan por parecerse en el nombre.
- Un CRN ambiguo no asigna alumnos a una oferta arbitraria.
- Las materias sin alumnos, como una oferta realmente vacía, permanecen con cero.

## Pruebas

- Pruebas unitarias del resolvedor para prioridad CRN → clave → nombre.
- Prueba de regresión con el caso `Fitness PMT1 (Body pump)` / `Body Pump PMT1`.
- Pruebas de aislamiento por bloque y de CRN ambiguo.
- Prueba de integración del Dashboard que confirme una sola disciplina con el total de inscritos y el horario programado.
- Suite completa, comprobación de sintaxis y verificación visual local antes de publicar.

## Publicación y verificación

El cambio se integrará en `main`, se desplegará en el proyecto Vercel `recsports-wellness` con raíz `site/` y se comprobará en el dominio público. La condición de éxito es que las materias enlazadas por CRN muestren alumnos, horario y profesor en una sola fila, sin alterar las disciplinas que ya se relacionaban correctamente.
