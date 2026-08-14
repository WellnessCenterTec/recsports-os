# Diseño: aceptar el formato real de Programación Booking

## Objetivo

Permitir que el control **Subir programación Booking** cargue directamente el archivo `booking (1).xlsx` sin modificarlo previamente, manteniendo compatibilidad con los archivos planos de Booking que WellSync ya acepta.

El cambio se limita al importador de Programación Booking. No modifica Programación Oficial, Archivo Maestro, Calificaciones, reservaciones de Booking ni otros cargadores.

## Evidencia y causa raíz

El archivo real contiene una sola hoja llamada `Booking ofertados` y presenta estas características:

- La fila 1 está vacía.
- Los encabezados están en la fila 2: `profesor`, `actividad`, `dia`, `hora_inicio`, `hora_fin`, `instalacion`, `frecuencia` y `Horas totales`.
- Las horas son celdas de Excel con formato horario.
- Dos frecuencias contienen el error tipográfico `Lunes y Juves`.
- La fila final solo contiene el total `29` en `Horas totales`.

El lector actual convierte la primera hoja directamente con `sheet_to_json`, por lo que toma la fila 1 vacía como encabezado. Después, el validador no encuentra las columnas requeridas. Aun detectando la fila 2, `hora_inicio` y `hora_fin` no coinciden con los alias actuales; `Juves` pierde el jueves; y la fila del total produce errores falsos de actividad, día, horario e instalación.

## Enfoque elegido

Se añadirá un lector específico para archivos separados de Programación Booking. El lector general seguirá atendiendo los demás flujos sin cambios de comportamiento.

La lógica pura de normalización vivirá en un archivo independiente y comprobable. El adaptador del navegador convertirá la primera hoja de Excel a una cuadrícula con `XLSX`, pasará esa cuadrícula al normalizador y entregará las filas resultantes al validador existente.

## Flujo de datos

1. El usuario selecciona un archivo en **Subir programación Booking**.
2. WellSync abre la primera hoja del Excel.
3. El lector busca, dentro de las primeras filas no vacías, una fila que contenga los campos esenciales de Booking.
4. Los encabezados se comparan sin distinguir mayúsculas, acentos, espacios, guiones ni guiones bajos.
5. Se asignan los alias del archivo a los campos que entiende WellSync:
   - `profesor` → Profesor
   - `actividad` → Actividad
   - `dia` o `frecuencia` → Día/frecuencia
   - `hora_inicio` → Hora inicio
   - `hora_fin` → Hora fin
   - `instalacion` → Instalación
6. Se eliminan las filas totalmente vacías y las filas de resumen que no contienen identidad de una sesión, aunque tengan un valor en `Horas totales`.
7. El validador existente genera una sesión por combinación de día y horario.
8. WellSync guarda y muestra únicamente las sesiones válidas, conservando los números de fila originales en cualquier error.

## Normalización de días y horarios

- Se aceptan nombres completos, abreviaturas, comas y la conjunción `y`.
- `Juves` se reconoce explícitamente como `Jueves`.
- Cuando `dia` esté vacío, se usará `frecuencia` como respaldo; si ambos existen, `dia` conserva prioridad.
- Las horas formateadas por Excel se aceptan en `hora_inicio` y `hora_fin`.
- La hora final debe ser posterior a la inicial; un horario realmente inválido seguirá reportándose como error.

## Compatibilidad y límites

- Los archivos planos con encabezados en la primera fila seguirán funcionando.
- Los alias actuales (`Profesor`, `Actividad`, `Disciplina`, `Día`, `Horario`, `Lugar`) seguirán aceptándose.
- La detección de encabezados será exclusiva del flujo Booking para evitar regresiones en otros cargadores.
- No se corregirán nombres de profesores, actividades o instalaciones: se cargarán exactamente como aparecen en el archivo.
- No se utilizará `Horas totales` para fabricar horas de inicio o fin.

## Errores y experiencia de usuario

Si no se encuentra una fila de encabezados compatible, WellSync mostrará un error único que indique que no pudo localizar los encabezados de Booking. Las filas de datos incompletas conservarán los errores actuales de actividad, día/frecuencia, horario o instalación, con el número de fila correspondiente al Excel.

Una fila de total o pie de página no se contará como error ni como sesión.

## Pruebas

Se aplicará desarrollo guiado por pruebas:

1. Una prueba fallida reproducirá la cuadrícula exacta del archivo: fila 1 vacía, encabezados en fila 2, encabezados con guion bajo, horas de Excel formateadas, `Juves` y fila final de total.
2. La implementación mínima hará pasar esa prueba.
3. Una prueba de regresión confirmará que el formato plano existente continúa funcionando.
4. Pruebas específicas comprobarán la detección de encabezados, alias, respaldo `dia`/`frecuencia`, `Juves`, exclusión del total y conservación del número de fila.
5. Se ejecutará la suite completa del repositorio.
6. Se probará manualmente `booking (1).xlsx` en el flujo real. El resultado esperado es 16 filas de oferta convertidas en 24 sesiones válidas, sin errores activos.

## Publicación y verificación

Después de que las pruebas locales pasen:

1. Se confirmarán únicamente los archivos del importador, sus pruebas, la referencia del script y esta especificación.
2. Se publicará el cambio en el repositorio `gugyguerrero17-cpu/recsports-os`.
3. Se verificará el despliegue de Vercel asociado a la carpeta `site`.
4. Se abrirá el WellSync público, se reproducirá el flujo **Subir programación Booking** con el archivo real y se comprobarán el conteo y la ausencia de errores.

La tarea se considerará completa solo cuando implementación local, GitHub, Vercel y verificación pública estén reportados por separado.
