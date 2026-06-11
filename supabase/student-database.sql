-- Configuracion de permisos para la tabla existente:
-- public."Base de datos_alumnos"
--
-- La tabla ya existe en Supabase con columnas importadas desde el CSV,
-- por ejemplo: "Matricula", "Nombre Campus", "Desc Nivel Acad Alumno",
-- "Periodo acad" y demas columnas originales.
--
-- Ejecutar este SQL si falta lectura/escritura desde WellSync.

alter table public."Base de datos_alumnos" enable row level security;

drop policy if exists "student database read authenticated" on public."Base de datos_alumnos";
create policy "student database read authenticated" on public."Base de datos_alumnos"
for select using (auth.uid() is not null);

drop policy if exists "student database manage leadership" on public."Base de datos_alumnos";
create policy "student database manage leadership" on public."Base de datos_alumnos"
for all using (public.current_app_role() in ('admin', 'direccion'))
with check (public.current_app_role() in ('admin', 'direccion'));

grant usage on schema public to authenticated;
grant select, insert, update, delete on public."Base de datos_alumnos" to authenticated;
grant select, insert, update on public.students_minimal to authenticated;
