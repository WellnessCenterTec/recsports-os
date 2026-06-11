-- Base central de alumnos para WellSync.
-- Ejecutar una vez en Supabase SQL Editor antes de usar el boton:
-- "Cargar Base de Datos de Alumnos".

create table if not exists public."Base de datos_alumnos" (
  matricula text primary key check (matricula ~ '^A0[0-9]{6,8}$'),
  genero text not null check (genero in ('Femenino', 'Masculino', 'No especificado')),
  carrera text not null,
  semestre int not null check (semestre between 1 and 12),
  nivel_escolar text not null check (nivel_escolar in ('Profesional', 'Posgrado')),
  grado_escolar text,
  source_name text not null default 'CSV alumnos',
  imported_by uuid references public.app_profiles(id),
  imported_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists base_datos_alumnos_updated_at on public."Base de datos_alumnos";
create trigger base_datos_alumnos_updated_at
before update on public."Base de datos_alumnos"
for each row execute function public.set_updated_at();

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
