# Integración Booking: Reservaciones → WellSync

## Fuentes y alcance

- WellSync: `WellnessCenterTec/recsports-os`, despliegue canónico `recsports-wellness`.
- Cliente público de reservaciones: `WellnessCenterTec/wellness_usuario`.
- Administrador observado: `https://wellness-reservaciones-admin.vercel.app/datos`.
- API observada en los clientes públicos: `https://wellness-94dd0b1a4748.herokuapp.com/api`.
- Exportación autenticada observada: `POST /reservation/downloadReservations` con `startDate` y `endDate`.

No se localizó un repositorio público del administrador ni del backend. Por ello, WellSync incluye el receptor de webhook y el adaptador de exportación, pero activar tiempo real requiere que el equipo dueño del backend agregue el envío del webhook o entregue una credencial de servicio para la API. No se debe copiar un token personal temporal del navegador.

Durante la revisión, `wellness_usuario` mostró archivos versionados llamados `.env` y `cuentasTest.txt`. Sus contenidos no se leyeron, copiaron ni incorporaron. El equipo propietario debe auditar esos archivos y rotar cualquier credencial real que hayan contenido; este trabajo debe hacerse en el repositorio origen, separado de la integración de WellSync.

## Flujo implementado

1. Un usuario autorizado de Clases puede ejecutar `POST /api/booking-sync` desde el módulo Booking.
2. La función de servidor consulta la API con una credencial que sólo existe en Vercel.
3. Sólo se conservan: identificador, fecha, estatus, tipo, matrícula y espacio/actividad. Nombres, correos y demás columnas se descartan.
4. `replace_booking_automatic` hace el reemplazo por periodo en una transacción e informa filas recibidas, actualizadas y retiradas.
5. `POST /api/booking-webhook` permite altas, cambios y bajas inmediatas cuando el backend origen lo invoque.
6. El CSV manual sigue disponible como respaldo.

## Duplicados y prioridad

- Identidad primaria: `source_reservation_id`.
- Respaldo si falta el ID: huella de fecha, matrícula, actividad y espacio.
- Dos filas de la fuente automática con la misma identidad se consolidan y se conserva la actualización más reciente.
- La sincronización automática sólo reemplaza filas `source_kind = automatic` del periodo consultado.
- El CSV sólo reemplaza filas `source_kind = manual` del periodo activo.
- Si ambas fuentes contienen la misma identidad, la vista efectiva muestra la automática. Las filas manuales únicas permanecen visibles.

## Variables privadas requeridas

Configurar únicamente en Vercel, nunca en `env.js`, el navegador ni Git:

- `SUPABASE_SERVICE_ROLE_KEY`
- `BOOKING_SOURCE_API_TOKEN` (credencial de servicio, no sesión personal)
- `BOOKING_SOURCE_API_URL` (opcional; usa el endpoint observado por defecto)
- `BOOKING_WEBHOOK_SECRET`
- `CRON_SECRET` si se conecta un programador periódico
- `BOOKING_SYNC_START` y `BOOKING_SYNC_END` son opcionales para ejecuciones programadas

Las variables públicas existentes de Supabase continúan iguales.

## Contrato del webhook

Solicitud:

```http
POST /api/booking-webhook
Authorization: Bearer <BOOKING_WEBHOOK_SECRET>
Content-Type: application/json
```

```json
{
  "action": "upsert",
  "reservation": {
    "id": 123,
    "reservation_date": "2026-11-09T18:00:00Z",
    "status": "APPROVED",
    "type": "ONLINE",
    "alumno": "A00123456",
    "espacio": "Yoga"
  }
}
```

Para una baja, usar `action: "delete"` y enviar la misma reserva (incluyendo ID y fecha). El secreto se compara en tiempo constante y nunca se devuelve en respuestas o bitácoras.

## Activación

1. Ejecutar `supabase/20261109_booking_automatic_sync.sql` en el proyecto Supabase de WellSync.
2. Crear las variables privadas anteriores en Vercel para Producción y, si aplica, Preview.
3. Hacer una sincronización manual de un periodo corto y comparar conteos contra el CSV descargado desde `/datos`.
4. Configurar el backend para emitir el webhook después de cada alta, cambio o cancelación.
5. Opcionalmente programar `POST /api/booking-sync` como reconciliación periódica. El webhook da inmediatez; la conciliación corrige eventos perdidos.

## Errores visibles

- Sin variables: `Activación pendiente` y respuesta `503 configuration_pending`.
- Sin sesión o área: `401/403`, sin consultar la fuente.
- Error de origen o Supabase: `502 sync_failed`; no se borran filas manuales.
- CSV con filas inválidas: la importación conserva el comportamiento actual y muestra sus validaciones.
