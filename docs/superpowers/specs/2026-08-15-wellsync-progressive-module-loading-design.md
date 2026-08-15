# Carga progresiva de módulos en WellSync

## Objetivo

Reducir el tiempo de apertura y evitar bloqueos de la interfaz cargando primero la estructura de WellSync y únicamente los datos necesarios para el módulo visible. Los demás módulos se consultarán cuando el usuario los abra.

## Evidencia actual

- La estructura visual de la página aparece en aproximadamente 0.7 segundos.
- En una medición real, los datos no estuvieron disponibles después de 40 segundos.
- Durante la carga completa, acciones visibles agotaron el tiempo de respuesta del navegador.
- El arranque actual espera la Base Maestra completa antes de iniciar 16 familias adicionales de consultas.
- También descarga de inmediato recursos que no pertenecen al módulo visible, incluido `class-grades-data.json` de aproximadamente 2.47 MB.
- Cada finalización de carga puede solicitar un renderizado completo de la aplicación.

## Diseño aprobado

### 1. Apertura inmediata

WellSync renderizará primero:

- encabezado, navegación y sesión del usuario;
- último módulo visible o módulo predeterminado;
- indicadores de carga explícitos en lugar de métricas en cero.

La página no esperará la Base Maestra ni las tablas de otros módulos para aceptar navegación.

### 2. Coordinador de carga por módulo

Un módulo aislado administrará el estado de cada grupo de datos:

- `idle`: todavía no solicitado;
- `loading`: consulta en curso;
- `ready`: datos disponibles;
- `error`: falló y puede reintentarse.

El coordinador deduplicará solicitudes simultáneas. Abrir varias veces el mismo módulo no repetirá una consulta que ya está cargando o terminó correctamente.

### 3. Dependencias por módulo

- **Gimnasio:** Base Maestra + asistencias y registros de Gimnasio.
- **Clases Deportivas:** calificaciones, simulador y Booking solo cuando la vista correspondiente lo necesite. El archivo inicial de calificaciones se usará únicamente si la nube está vacía.
- **Reporte General:** Base Maestra + capturas generales.
- **Colaboradores:** colaboradores, configuraciones y directorio/fotos necesarios.
- **Vivencia:** eventos, participantes e imágenes de Vivencia.
- **Semana Tec:** participantes, archivos de calificaciones y programación.
- **Representativos/Gamer:** carga correspondiente del área.
- **Comunicación:** eventos, participantes, difusión y calendario.
- **Intramuros:** participantes, roles y operación de torneos.
- **Compras y Presupuesto:** presupuesto y calendario requerido por esa vista.
- **Presentación Ejecutiva y Configuración:** solo sus fuentes específicas.

Las dependencias compartidas, como Base Maestra, se descargarán una sola vez y se reutilizarán.

### 4. Navegación y renderizado

Al seleccionar un módulo:

1. WellSync cambia la vista inmediatamente.
2. Si los datos están `idle` o `error`, inicia su carga.
3. La vista muestra “Cargando datos…” mientras espera.
4. Al terminar, se actualiza únicamente en un punto coordinado, evitando múltiples renderizados consecutivos.

Los datos ya cargados permanecerán disponibles durante la sesión.

### 5. Recursos iniciales

Se retirarán del arranque automático las descargas de:

- calificaciones iniciales;
- Uniformes/colaboradores;
- programación de Semana Tec;
- calendario de planeación;
- tablas Supabase de módulos no visibles.

Cada recurso se solicitará desde el módulo que lo consume. No se eliminarán archivos ni respaldos.

### 6. Errores y sesiones

- Un fallo en un módulo no impedirá abrir WellSync ni utilizar otros módulos.
- La vista mostrará un mensaje de error y permitirá reintentar al volver a abrirla.
- Una sesión Supabase vencida conservará la distinción entre “sin conexión” y “sin datos”; no mostrará ceros como si fueran resultados válidos.
- No se cambiarán permisos, RLS, cargas, escrituras ni contratos de Supabase.

## Alternativas descartadas

1. **Mantener la carga total y solo paralelizarla.** Seguiría descargando información innecesaria y compitiendo por CPU/red.
2. **Guardar una copia completa y mostrarla siempre.** Acelera aperturas posteriores, pero puede presentar datos desactualizados y complica la invalidación.
3. **Separar completamente el monolito en esta etapa.** Tiene mayor riesgo y alcance; la carga progresiva puede implementarse con un coordinador aislado sin una reestructuración general.

## Pruebas y criterios de aceptación

- Prueba unitaria del coordinador: deduplicación, caché de sesión, error y reintento.
- Pruebas de integración: al iniciar solo se solicita el módulo activo; abrir otro inicia únicamente sus dependencias.
- El recurso `class-grades-data.json` no se solicita al abrir un módulo ajeno a Clases Deportivas.
- La interfaz permanece navegable mientras los datos se consultan.
- Una métrica no muestra `0` mientras su módulo siga en estado `loading`.
- Las pruebas existentes de Booking, Clases Deportivas, Base Maestra, Gimnasio y permisos continúan pasando.
- Verificación pública comparando tiempo de estructura visible, tiempo del módulo activo y respuesta de navegación antes y después.

## Seguridad y reversión

El cambio será exclusivamente de lectura y coordinación de carga. Antes de publicar se conservará el commit anterior de producción como punto de reversión. Si la verificación pública detecta datos faltantes o una vista que no carga, se restaurará la versión previa sin modificar Supabase.
