# Diseño: reporte ejecutivo semanal conectado a los módulos de WellSync

## Objetivo

Rediseñar el Dashboard del Reporte General para producir un reporte ejecutivo semanal de una sola hoja vertical. El reporte conservará la identidad visual azul de WellSync aprobada en la vista previa y utilizará exclusivamente información vigente obtenida de los módulos de WellSync. Las cifras del PDF histórico sirven únicamente como referencia de tipos de gráfica; no serán copiadas ni usadas como datos.

El usuario aprobó publicar el avance descrito en la sección **Alcance aprobado para esta publicación**. El resto del rediseño permanece documentado para iteraciones posteriores.

## Alcance aprobado para esta publicación

Esta publicación se limita a dos cambios dentro del Reporte Ejecutivo Semanal existente:

1. **Gimnasio acumulado por semana seleccionada.** Semana 1 mostrará únicamente S1; Semana 8 mostrará S1 a S8. La fila superior será Wellness en azul y la inferior EMIS en naranja. No se mostrarán semanas posteriores a la elegida.
2. **Intramuros en cuadrícula.** El mismo panel conservará el resumen de torneos y registros, pero sustituirá las barras por ocho tarjetas compactas organizadas en dos columnas y cuatro filas, cada una con el torneo y su cantidad.

No se modifican en esta publicación las demás gráficas, indicadores, fuentes, navegación, permisos ni módulos.

## Audiencia y uso

El reporte está dirigido a jefaturas y dirección. Debe permitir identificar rápidamente:

1. Cuántos servicios se han brindado en total.
2. Cuántos alumnos diferentes han sido impactados.
3. Qué áreas y actividades concentran la participación.
4. Cómo cambia la asistencia de una semana a otra.
5. Qué módulos todavía necesitan una carga de información.

## Formato aprobado

- Una sola hoja vertical.
- Colores azul marino, azul, turquesa, verde y acentos deportivos de WellSync.
- Encabezado compacto con periodo, semana y fecha de corte.
- Jerarquía visual de resumen a detalle.
- Gráficas de barras y columnas sencillas, con valores visibles.
- Sin nombres de alumnos ni matrículas visibles.
- La navegación y los demás módulos permanecen intactos.

## Controles

- El selector del reporte comenzará en **Semana 1** por defecto.
- El usuario podrá cambiar manualmente de la Semana 1 a la Semana 20.
- La semana seleccionada controlará las gráficas semanales y el corte acumulado cuando la fuente incluya fecha.
- El periodo continuará utilizando el periodo maestro de WellSync.
- Descargar PDF generará la misma hoja que se muestra en pantalla.

## Modelo de indicadores

### 1. Atenciones acumuladas

Será la cifra principal y de mayor tamaño. Representa servicios, asistencias o participaciones, no alumnos únicos. Una misma matrícula puede contribuir varias veces si recibió varios servicios o asistió en distintas ocasiones.

El total debe reconciliarse con la suma de los módulos incluidos:

- Gimnasio: cada ingreso registrado cuenta como una atención.
- Intramuros: cada combinación de matrícula y torneo cuenta como una participación; una matrícula en dos torneos puede aportar dos atenciones.
- Booking: únicamente las reservaciones con estatus `APPROVED` cuentan como servicio. `PENDING` y `CANCELLED` se muestran como seguimiento, pero no incrementan el total.
- Vivencia: cada participación reportada cuenta como una atención.
- Clases deportivas: se incorporarán atenciones solamente cuando WellSync disponga de una fuente de asistencia por sesión. Las inscripciones y calificaciones actuales no se convertirán artificialmente en asistencias.

La interfaz mostrará el total y un desglose compacto por área. No se sumarán ofertas, eventos programados o metas como si fueran atenciones realizadas.

### 2. Matrículas únicas impactadas

Será el segundo indicador principal y aparecerá en el cierre de la hoja. Se obtendrá normalizando y deduplicando las matrículas de todos los módulos incluidos. Si un alumno aparece en Gimnasio, Booking y Clases, contará una sola vez en el total general.

El porcentaje se calculará con la fórmula:

`matrículas únicas impactadas / 17,173 * 100`

El universo institucional permanecerá fijo en **17,173** hasta que el usuario autorice expresamente cambiarlo.

## Gráficas y fuentes

### Gimnasio

Fuentes actuales:

- `gym_asistencias`
- `gym_attendance_records`

Gráficas:

- Dos series independientes de ingresos por semana: Wellness arriba en azul y EMIS abajo en naranja.
- Cada serie mostrará únicamente desde Semana 1 hasta la semana seleccionada; nunca dibujará semanas futuras vacías.
- Promedio de asistentes por día de la semana.
- La información puede consolidar Wellness y EMIS, respetando las reglas actuales de normalización y evitando duplicar un mismo día cuando existe tanto resumen manual como asistencia importada.

Estado sin información: mostrar "Sin registros de asistencia" y cero; no fabricar columnas ni reutilizar valores de otro periodo.

### Booking

Fuente actual de resultados:

- `class_booking_reservations`

Fuente complementaria de oferta:

- Programación Booking ya cargada en Horarios.

Gráficas:

- Actividades con mayor número de reservaciones.
- Reservaciones totales.
- Alumnos únicos por matrícula.
- Distribución por estatus cuando exista información suficiente.

Los servicios ofertados se mostrarán como contexto operativo, separados de las reservaciones realizadas. No incrementarán las atenciones acumuladas.

Las reservaciones `APPROVED` alimentarán el indicador de servicios de Booking. Los demás estatus aparecerán en la gráfica de distribución sin sumarse como atenciones realizadas.

### Clases deportivas

Fuentes actuales:

- `class_grades`
- Programación oficial de Clases en Horarios.

Gráficas:

- Clases o disciplinas con mayor número de alumnos inscritos.
- Retención por clase.
- Clases que requieren seguimiento cuando existan bajas, NP o captura pendiente.

Los porcentajes se calcularán con las reglas vigentes de Clases. Cuando el bloque activo no tenga información, el reporte lo señalará explícitamente. La gráfica se etiquetará como alumnos inscritos, no como frecuencia de asistencias. Hasta que exista una fuente de asistencia por sesión, Clases no aportará servicios repetidos al total de atenciones.

### Intramuros

Fuentes actuales:

- `intramuros_participantes`
- `intramuros_roles_juego`
- `intramuros_operacion_torneos` cuando se necesite contexto operativo.

Gráficas:

- Los ocho torneos se mostrarán como tarjetas en una cuadrícula de dos columnas por cuatro filas, sin barras, dentro del panel actual.
- El encabezado conservará el total de torneos y el total de registros; cada tarjeta mostrará nombre y cantidad.
- Equipos por torneo.
- Juegos programados como indicador complementario.

La clasificación "más cotizados" se interpretará como mayor número de participantes únicos. Los juegos programados no se sumarán como atenciones a alumnos.

### Vivencia

Fuentes actuales:

- `vivencia_events`
- `vivencia_event_metrics`
- `vivencia_participant_details`

Gráficas:

- Eventos con mayor número de participantes.
- Participaciones totales y matrículas identificadas.
- Eventos programados por mes como contexto de planeación.

Los eventos planeados sin participantes podrán aparecer como contexto, pero no contarán como atenciones realizadas.

## Distribución de la hoja

1. Encabezado: periodo, Semana 1 por defecto y fecha de corte.
2. Bloque principal azul: atenciones acumuladas y desglose por área.
3. Gimnasio: ingresos por semana y promedio por día.
4. Tres bloques compactos: Booking, Clases deportivas e Intramuros.
5. Vivencia: participación y, cuando sea útil, eventos programados por mes.
6. Pie ejecutivo: matrículas únicas, universo de 17,173 y porcentaje de impacto.

Cuando el espacio sea limitado, se dará prioridad a resultados realizados sobre información de planeación.

## Estados sin datos y confiabilidad

- Cada gráfica consultará únicamente su módulo de origen.
- Un módulo sin carga mostrará cero y un aviso "Pendiente de carga" o "Sin datos".
- No se copiarán cifras del PDF histórico.
- No se sustituirán datos faltantes con demostraciones, semillas o información de otro periodo.
- La suma de atenciones por área deberá reconciliarse con el total principal.
- El total de matrículas únicas deberá ser igual o menor que la suma de matrículas únicas por área.
- La fecha de corte y el periodo serán visibles para evitar confundir datos históricos con datos actuales.

## Estado observado el 17 de agosto de 2026

La revisión del periodo AD26 encontró:

- Gimnasio: 11,397 ingresos en Semana 1; 11,331 corresponden a Wellness y 66 a EMIS. El módulo identifica 4,492 matrículas únicas con asistencia.
- Booking: 16 servicios ofertados, 785 reservaciones y 520 matrículas únicas. De las reservaciones, 561 están aprobadas y 224 pendientes.
- Clases deportivas: 2,591 alumnos inscritos y 98 grupos programados en PMT3. Las disciplinas con mayor inscripción son Natación, Tenis, Box, Ciclismo indoor y Yoga.
- Intramuros: 1,256 registros distribuidos en 8 torneos. Los torneos con más participantes son Fútbol soccer, Fútbol rápido, Fútbol 7, Tenis singles y Tocho.
- Vivencia: 44 eventos programados y 0 participaciones cargadas.

La primera revisión se hizo en una sesión distinta que no contenía las cargas locales visibles en la sesión de trabajo del usuario. La fuente visual correcta para esta validación es la sesión activa de WellSync en Chrome con periodo AD26.

El Reporte General actual no reconcilia estos módulos: muestra 785 atenciones y 520 matrículas únicas, que corresponden únicamente a Booking, aunque Gimnasio e Intramuros sí tienen información. El rediseño debe leer cada módulo directamente y comprobar que las cifras coincidan antes de generar el PDF.

Estos valores describen la disponibilidad actual y no deben quedar escritos permanentemente en el diseño. El reporte debe recalcularlos desde WellSync en cada actualización.

## Validación prevista

Antes de aprobar una publicación se verificará:

1. Que la Semana 1 aparezca seleccionada al abrir el reporte.
2. Que al seleccionar Semana 8, Gimnasio muestre exactamente S1 a S8 para Wellness y EMIS, sin S9 a S20.
3. Que Intramuros conserve el panel actual y muestre ocho tarjetas en una cuadrícula 2 × 4 sin barras.
4. Que cada gráfica coincida con el módulo que la alimenta.
5. Que los filtros de periodo y semana no mezclen periodos.
6. Que atenciones y matrículas únicas no se confundan.
7. Que el porcentaje utilice 17,173 como denominador.
8. Que los módulos sin datos muestren un estado vacío claro.
9. Que la hoja se descargue completa en PDF sin cortes, traslapes ni texto ilegible.
10. Que la navegación y los demás componentes de WellSync permanezcan intactos.

## Fuera de alcance de esta publicación

- Cargar archivos faltantes en nombre de las áreas.
- Alterar la estructura de datos de los módulos.
- Cambiar permisos o roles.
- Modificar otros dashboards o reportes.
