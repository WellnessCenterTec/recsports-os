# Vista preliminar navegable de Presentación Ejecutiva

Fecha: 22 de julio de 2026

## Objetivo

Permitir que la persona usuaria revise el contenido real de las 12 diapositivas desde el módulo Presentación Ejecutiva antes de abrir el modo de pantalla completa.

## Alternativas consideradas

1. Visor principal con tira de miniaturas. Mantiene una diapositiva legible, permite recorrer las 12 y conserva una acción explícita para abrir pantalla completa. Es la alternativa seleccionada.
2. Cuadrícula de 12 miniaturas. Facilita comparar todas a la vez, pero el contenido queda demasiado pequeño para revisarlo.
3. Lista lateral de diapositivas. Funciona bien en escritorio, pero reduce demasiado el ancho útil del visor y se adapta peor a pantallas medianas.

## Diseño aprobado

- Sustituir la portada diminuta y el espacio vacío por un visor preliminar 16:9 que utilice el mismo contenido real generado por `renderExecutivePresentationSlide`.
- Mostrar la diapositiva seleccionada dentro del módulo, sin modal y sin activar el modo presentación.
- Incorporar controles Anterior y Siguiente, además del contador `1 / 12`.
- Mostrar las 12 diapositivas como miniaturas con contenido real, número y título.
- Una miniatura seleccionada tendrá un estado visual claro.
- Al pulsar una miniatura solamente cambiará la diapositiva del visor preliminar.
- El botón `Abrir en pantalla completa` será la única acción del visor que active el modo presentación y deberá abrir la diapositiva actualmente seleccionada.
- Mantener sin cambios `Editar contenido`, `Actualizar datos`, `Exportar PDF` y `PowerPoint`.
- Mantener sin cambios el contenido, fuentes de datos, Supabase y edición semanal de cada diapositiva.

## Comportamiento adaptable

- En escritorio, el visor ocupará el ancho principal y debajo aparecerá una tira horizontal con varias miniaturas visibles.
- La tira de miniaturas será desplazable horizontalmente en todos los tamaños para conservar la legibilidad y permitir recorrer las 12.
- El visor conservará la proporción 16:9 y no generará el espacio vertical vacío que aparece actualmente.

## Estado y flujo

- Se reutilizará `executivePresentationIndex` como índice único de la diapositiva seleccionada.
- Cambiar de miniatura o usar las flechas actualizará únicamente el visor preliminar y su contador.
- Abrir pantalla completa conservará el índice seleccionado.
- Cerrar pantalla completa devolverá al mismo visor y a la misma diapositiva.
- Al actualizar datos, la vista preliminar se volverá a renderizar con la información más reciente.

## Límites

- No se agregarán nuevas tablas ni campos en Supabase.
- No se modificarán los datos ni el diseño interno de las diapositivas.
- No se cambiarán las funciones de edición o exportación.
- No se agregarán transiciones pesadas ni generación de imágenes independientes; las miniaturas reutilizarán el render actual.

## Manejo de estados

- Si una diapositiva no tiene información, su miniatura y vista previa mostrarán el mismo estado vacío que ya usa el modo presentación.
- Los botones Anterior y Siguiente se desactivarán al llegar a la primera o última diapositiva.
- Si el índice estuviera fuera del rango, se normalizará a la primera diapositiva.

## Verificación

- Confirmar que se rendericen exactamente 12 miniaturas y que cada una corresponda a su diapositiva.
- Confirmar navegación completa con flechas y miniaturas sin abrir el modal.
- Confirmar que `Abrir en pantalla completa` abra la diapositiva seleccionada.
- Confirmar que cerrar el modo presentación conserve la selección.
- Probar escritorio y pantalla móvil sin desbordamientos ni espacio vacío excesivo.
- Confirmar que edición, actualización, PDF y PowerPoint continúen funcionando.
