# Historial de presentaciones ejecutivas

**Fecha:** 22 de julio de 2026  
**Estado:** Diseño autorizado para revisión final  
**Módulo:** Presentación Ejecutiva de WellSync

## Objetivo

Permitir que la persona usuaria guarde copias permanentes de las 12 diapositivas tal como se ven en un momento determinado, sin alterar la presentación principal ni la vista preliminar existente. La presentación principal seguirá siendo el espacio de trabajo activo y conservará siempre el último contenido editado.

## Reglas aprobadas

- La vista preliminar navegable actual no cambia.
- La presentación principal nunca se reinicia después de guardar.
- Cada pulsación de **Guardar presentación** crea una versión histórica nueva; nunca actualiza ni sobrescribe una anterior.
- El nombre es opcional. Si queda vacío, WellSync asigna `Presentación del <fecha y hora>`.
- Cada versión muestra nombre, fecha y hora de guardado.
- **Ver** abre las 12 diapositivas congeladas como se guardaron.
- **Editar / Reutilizar** conserva intacta la versión histórica y copia solamente el contenido editable a la presentación principal.
- Después de reutilizar, los datos automáticos se obtienen de la información actual de WellSync.
- El siguiente guardado vuelve a crear otra versión histórica independiente.

## Experiencia de uso

### Presentación principal

Se conserva el encabezado, las acciones existentes, el visor 16:9, las flechas, el contador y la tira de 12 miniaturas. Se agrega un botón primario o destacado **Guardar presentación** junto a las acciones actuales.

### Guardar una versión

1. La persona pulsa **Guardar presentación**.
2. WellSync abre un cuadro compacto con un campo `Nombre de la presentación (opcional)`.
3. El cuadro muestra la fecha y hora que se registrarán.
4. Al confirmar, el botón cambia temporalmente a `Guardando...` para impedir duplicados por doble clic.
5. WellSync crea la copia histórica y confirma `Presentación guardada en el historial`.
6. La presentación principal permanece visible y conserva el último ajuste.

### Historial

Debajo del visor actual y antes de los módulos `Próximamente`, aparece la sección **Historial de presentaciones**. Los registros se ordenan de la fecha más reciente a la más antigua.

Cada registro muestra:

- nombre asignado o nombre automático;
- fecha y hora en la zona `America/Monterrey`;
- semana de origen;
- indicador `12 diapositivas`;
- botón **Ver**;
- botón **Editar / Reutilizar**.

La lista usa tarjetas compactas y adaptables para no competir visualmente con la vista preliminar. Cuando no existen versiones, muestra un estado vacío explicando que el primer registro se creará con **Guardar presentación**.

### Ver una versión histórica

**Ver** abre un visor de solo lectura con el mismo formato 16:9, contador, flechas y miniaturas. El visor usa la copia congelada y no consulta de nuevo los datos automáticos. No ofrece controles de edición dentro de esta vista.

### Editar o reutilizar

Antes de reemplazar el contenido editable de la presentación principal, WellSync muestra una confirmación clara. Al aceptar:

1. copia las notas, prioridades, acuerdos, comentarios, selecciones e imágenes editables de la versión elegida;
2. mantiene sin cambios el registro histórico;
3. combina el contenido recuperado con los datos automáticos actuales;
4. regresa a la presentación principal y abre el editor para continuar trabajando.

La acción se registra como carga de contenido para edición; no crea una nueva versión hasta pulsar **Guardar presentación**.

## Modelo de almacenamiento

Se reutilizan las tablas actuales `presentaciones` y `presentacion_notas`, sin crear una tabla nueva.

Cada guardado inserta una cabecera independiente en `presentaciones` con:

- `presentation_type = history`;
- `week_key` único formado con fecha, hora y un identificador aleatorio;
- `title` con el nombre elegido o el nombre automático;
- `status = saved`;
- `updated_at` como fecha real del guardado.

Los detalles se guardan en `presentacion_notas` con secciones reservadas:

- `__snapshot_meta`: versión del formato, fecha, semana y títulos de las diapositivas;
- `__editable_content`: copia de los campos que pueden reutilizarse;
- `snapshot:<slide_key>`: contenido interno congelado de cada una de las 12 diapositivas.

La presentación activa continúa usando `presentation_type = weekly`. Como el historial usa inserciones con claves únicas y un tipo distinto, guardar una versión nunca ejecuta el `upsert` del borrador semanal ni lo sobrescribe.

## Seguridad del contenido congelado

El contenido histórico se genera únicamente con el renderizador interno de WellSync. Al leerlo, se validará cada diapositiva y se eliminarán etiquetas ejecutables, atributos de eventos y URL peligrosas antes de insertarlo en pantalla. Las versiones históricas son de solo lectura.

## Disponibilidad entre computadoras

Cuando Supabase está disponible y la sesión tiene permisos, el registro se guarda de manera permanente y aparece en las demás computadoras.

Si la conexión falla durante el guardado:

- WellSync conserva una copia local marcada **Pendiente de sincronizar**;
- no muestra un mensaje falso de guardado permanente;
- intenta sincronizarla de nuevo al actualizar el módulo o recuperar la sesión;
- elimina la copia pendiente solamente después de confirmar que la versión existe en Supabase.

La lista combina versiones permanentes y pendientes, evitando duplicados mediante el identificador único del guardado.

## Manejo de errores

- Un doble clic no puede crear dos versiones mientras el guardado está en curso.
- Si se crea la cabecera pero falla una diapositiva, el registro no se considera completo y se conserva la copia local pendiente para reintento.
- Una versión incompleta no aparece como presentación disponible.
- Si un registro histórico no contiene las 12 diapositivas, **Ver** muestra un aviso y no intenta abrirlo como completo.
- La acción **Editar / Reutilizar** requiere confirmación antes de reemplazar el contenido editable activo.
- El historial no incluye eliminación en esta fase, para evitar pérdida accidental.

## Accesibilidad y adaptación

- Todos los botones conservan texto visible y etiquetas accesibles.
- Los cuadros de guardado, confirmación y visor permiten cerrarse con `Escape`.
- El foco regresa al botón que abrió cada cuadro.
- En pantallas pequeñas, las acciones se apilan y el historial ocupa una sola columna.
- La tira de miniaturas mantiene desplazamiento horizontal sin provocar desplazamiento de toda la página.

## Pruebas de aceptación

1. Guardar tres veces crea tres registros con identificadores y horas independientes.
2. Después de guardar, la presentación principal conserva el contenido más reciente.
3. Modificar la principal después del guardado no cambia ninguna versión anterior.
4. **Ver** muestra exactamente las 12 diapositivas congeladas y no datos posteriores.
5. **Editar / Reutilizar** recupera el contenido editable y mantiene actuales los datos automáticos.
6. Reutilizar y guardar crea una cuarta versión sin alterar la original.
7. El nombre puede quedar vacío y recibe un nombre automático legible.
8. Dos guardados durante el mismo minuto se conservan como versiones distintas.
9. Un fallo de conexión produce un registro local `Pendiente de sincronizar`, no una confirmación permanente falsa.
10. Al recuperar la conexión, el pendiente se sincroniza una sola vez.
11. La vista preliminar actual, la edición por diapositiva, la pantalla completa, PDF y las demás acciones continúan funcionando.
12. El diseño funciona en escritorio y celular sin desbordamiento horizontal de la página.

## Fuera de alcance

- Eliminar versiones históricas.
- Comparar dos versiones lado a lado.
- Cambiar el número o contenido base de las 12 diapositivas.
- Modificar las fuentes automáticas de WellSync.
- Cambiar el flujo actual de exportación PDF o la futura exportación PowerPoint.
