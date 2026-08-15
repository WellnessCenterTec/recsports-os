# Eliminar el calendario del Dashboard de Intramuros

## Objetivo

Eliminar por completo el calendario operativo que actualmente aparece al inicio del Dashboard de Intramuros, sin alterar los demás componentes ni la navegación del módulo.

## Alcance

- Retirar del resultado de `renderIntramurosDashboard()` la llamada a `renderPlanningAreaDashboard(...)`.
- Mantener intactos los filtros, indicadores, gráficas ejecutivas, tarjetas de torneos, expediente y tabla de participantes.
- Mantener intactas las pestañas y rutas de navegación del módulo de Intramuros.
- No modificar el calendario compartido, sus datos ni su uso en otros módulos.
- No cambiar las pantallas de carga de participantes, Roles de Juego ni reportes de Intramuros.

## Diseño

El cambio será localizado en `site/app.js`. El Dashboard de Intramuros dejará de componer el bloque de calendario, pero conservará la misma sección contenedora y todos los bloques posteriores en el mismo orden.

No se ocultará mediante CSS y no se introducirá una bandera de configuración: el calendario dejará de formar parte del HTML generado para este Dashboard, evitando tanto su visualización como trabajo de renderizado innecesario.

## Comportamiento esperado

Al abrir Intramuros en la vista Dashboard:

1. No aparece el encabezado, selector de capas, cuadrícula mensual ni estado de carga del calendario operativo.
2. Los filtros aparecen como el primer bloque funcional del Dashboard.
3. Los indicadores, gráficas, torneos, expediente y tabla siguen disponibles.
4. La navegación hacia las demás vistas del módulo continúa funcionando sin cambios.

## Pruebas y verificación

- Agregar una prueba de regresión de código fuente que extraiga `renderIntramurosDashboard()` y confirme que no llama a `renderPlanningAreaDashboard` ni genera el calendario.
- Confirmar en la misma prueba que el Dashboard conserva marcadores representativos de filtros, indicadores, gráficas, torneos y tabla.
- Ejecutar la suite completa de pruebas disponible.
- Ejecutar el proceso de build del sitio.
- Realizar una revisión local del Dashboard de Intramuros para comprobar que carga sin el calendario y conserva los demás componentes y navegación.

## Fuera de alcance

- Eliminar funciones, estilos o datos compartidos del calendario.
- Cambiar calendarios de otros módulos.
- Rediseñar el Dashboard de Intramuros.
- Publicar o desplegar el cambio.
