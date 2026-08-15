# Fuente de las tarjetas de calificaciones de Semana Tec

## Objetivo

Corregir las tarjetas de grupos de `Calificaciones Semana Tec` para que matrícula, género, promedio, aprobados, reprobados y pendientes provengan exclusivamente de las filas estructuradas de calificaciones. La Programación de Semana Tec aportará solamente la identidad operativa del grupo: periodo, número de grupo, CRN, profesor y semana.

## Alcance

- Ajustar únicamente las tarjetas y la protección de calificaciones de Semana Tec.
- Mantener separados los grupos 215 y 216.
- No modificar el dashboard ordinario de Clases Deportivas ni la tabla `class_grades`.
- No interpretar automáticamente los PDF; seguirán siendo evidencia documental descargable.
- No crear ni migrar tablas de Supabase.
- No modificar otros módulos ni publicar hasta completar las pruebas locales.

## Fuentes de verdad

### Calificaciones estructuradas

`semana_tec_participantes` seguirá siendo la fuente estructurada de:

- matrícula;
- calificación o estatus;
- género cuando exista;
- pertenencia del alumno al grupo.

Una carga de alumnos con calificación vacía conservará una calificación existente para la misma llave `periodo + matrícula normalizada + número de grupo`. La eliminación intencional de una calificación continuará realizándose desde el campo de captura individual, no mediante una recarga masiva de alumnos.

### Programación

La programación compartida `programacion/{periodo}/programacion.json`, o su respaldo autorizado, aportará:

- periodo;
- número de grupo;
- CRN;
- profesor;
- semana 6 o 12.

La unión será por `periodo + número de grupo`. El CRN se conservará como dato de la oferta y validación diagnóstica, pero no combinará grupos distintos. Si no existe una oferta programada, la tarjeta utilizará como respaldo el grupo, profesor y semana presentes en la fila estructurada, sin inventar valores.

## Reglas de cálculo

Cada tarjeta agrupará por `periodo + número de grupo` y deduplicará por matrícula normalizada.

- `alumnos`: número de matrículas únicas presentes en Calificaciones.
- `mujeres`: matrículas únicas con género normalizado `Femenino`.
- `hombres`: matrículas únicas con género normalizado `Masculino`.
- `sin especificar`: matrículas sin género reconocido; no se inferirá por nombre.
- `promedio`: promedio de calificaciones numéricas válidas entre 0 y 100.
- `aprobados`: número entre 70 y 100, o estatus explícito `APROBADO`/`ACREDITADO`.
- `reprobados`: número entre 0 y 69.99, o estatus explícito `REPROBADO`, `NO ACREDITADO`, `NA` o `NP`.
- `pendientes`: valor vacío, nulo o texto no reconocido.

`BAJA` no se contará como aprobado ni reprobado. Se conservará como baja separada para evitar distorsionar los resultados académicos. La tarjeta mostrará ese conteo solamente cuando sea mayor que cero.

`Sin promedio` aparecerá únicamente cuando el grupo no tenga ninguna calificación numérica válida. Los estados textuales sí afectarán aprobados, reprobados, bajas o pendientes, pero no el promedio.

## Arquitectura

Se añadirá un módulo pequeño y comprobable para:

1. normalizar y clasificar resultados académicos;
2. preservar calificaciones existentes durante una recarga;
3. construir resúmenes por grupo a partir de filas de Calificaciones y ofertas de Programación.

`site/app.js` seguirá realizando las consultas a Supabase y el render, pero delegará esas tres responsabilidades al módulo. El módulo no accederá a red, DOM, almacenamiento ni estado global.

## Interfaz y presentación

La tarjeta conservará su diseño actual y mostrará grupo, semana, profesor, total de alumnos, mujeres, hombres, promedio, aprobados, reprobados y pendientes. Añadirá `sin especificar` y `bajas` solo cuando sus valores sean mayores que cero.

Los PDF continuarán mostrando su estado de carga y descarga, sin intervenir en los cálculos.

## Manejo de errores

- Una calificación numérica fuera de 0–100 será pendiente.
- Un estatus desconocido será pendiente, no reprobado.
- Una fila sin matrícula no participará en los cálculos.
- Si hay filas duplicadas para una matrícula y grupo, prevalecerá la última fila recibida.
- Si la programación no contiene el grupo, se conservará el respaldo estructurado y la tarjeta seguirá visible.

## Pruebas y aceptación

- Grupo 215 y grupo 216 permanecen separados aunque compartan profesor y materia.
- Programación define Semana 12 y profesor para ambos grupos.
- Alumnos y resultados se cuentan solamente desde Calificaciones.
- Matrículas duplicadas no inflan alumnos ni género.
- Los estados textuales reconocidos se clasifican correctamente.
- Un texto desconocido queda pendiente.
- Una carga nueva con nota vacía conserva la nota existente.
- Una nota explícita nueva reemplaza la anterior.
- Los PDF no participan en ninguna métrica.
- La suite completa y la validación de sintaxis permanecen en verde.
