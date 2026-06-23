# Supabase para RecSports OS

Esta carpeta deja lista la base inicial para una prueba gratuita en Supabase. La idea es guardar solo la informacion permitida de alumnos: matricula, genero, carrera, semestre y nivel escolar. El modulo de colaboradores si queda preparado para usar la informacion completa del archivo de uniformes.

## 1. Crear el proyecto gratis

1. Entra a [Supabase](https://supabase.com/).
2. Crea una cuenta o inicia sesion.
3. Selecciona **New project**.
4. Usa un nombre como `recsports-os`.
5. Guarda bien la contrasena de base de datos.
6. Elige la region mas cercana disponible.
7. Espera a que el proyecto quede listo.

## 2. Crear la estructura

En Supabase abre **SQL Editor** y ejecuta estos archivos en este orden:

1. `supabase/schema.sql`
2. `supabase/seed.sql`
3. `supabase/vivencia.sql` para activar la fase 1 del modulo Vivencia.

Con eso se crean:

- Areas principales del sistema.
- Periodos base.
- Usuarios y roles del sistema.
- Alumnos con datos minimos.
- Capturas por area.
- Indicadores de Clases Deportivas.
- Colaboradores / uniformes.
- Compras y presupuesto.
- Bitacora de auditoria.
- Reglas de seguridad para que cada coordinador vea solo lo que le toca.

La migracion de Vivencia agrega:

- `vivencia_events`: catalogo operativo e historico de eventos.
- `vivencia_participants`: matriculas asociadas a cada evento sin duplicados.
- `vivencia_participant_details`: cruce de participantes con datos academicos permitidos.
- `vivencia_event_metrics`: conteos y cumplimiento de meta calculados automaticamente.
- Permisos para Direccion, administradores y Coordinacion de Vivencia.
- Archivado logico de eventos, sin permiso de eliminacion desde la aplicacion.

Al terminar, Supabase debe mostrar una fila con el estado
`vivencia_phase_1_ready` y cuatro columnas con valor `true`.

## 3. Crear usuarios coordinadores

Primero crea los usuarios en **Authentication > Users**. Despues registra su perfil en SQL Editor con este formato, cambiando el correo, nombre, rol y area:

```sql
insert into public.app_profiles (id, email, display_name, role, area_key)
select id, email, 'Nombre del coordinador', 'coordinador', 'clases'
from auth.users
where email = 'correo@ejemplo.com'
on conflict (id) do update set
  display_name = excluded.display_name,
  role = excluded.role,
  area_key = excluded.area_key,
  active = true;
```

Para Direccion Deportiva:

```sql
insert into public.app_profiles (id, email, display_name, role, area_key)
select id, email, 'Direccion Deportiva', 'direccion', null
from auth.users
where email = 'direccion@ejemplo.com'
on conflict (id) do update set
  display_name = excluded.display_name,
  role = excluded.role,
  area_key = excluded.area_key,
  active = true;
```

## 4. Llaves para Vercel

Cuando conectemos la web a Supabase, las llaves se pondran en Vercel como variables de entorno. No se deben subir al repositorio.

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

La llave `service_role` no debe ir en el navegador ni en GitHub.

## 5. Siguiente paso del proyecto

La web actual sigue funcionando como prototipo visual. El siguiente paso es conectar los formularios y dashboards a Supabase para que las capturas se guarden en la nube y todos vean la misma informacion.
