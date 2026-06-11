-- Historico fila por fila de asistencias reales al gimnasio.
-- Ejecutar una vez en Supabase SQL Editor.

create table if not exists public.gym_asistencias (
  id uuid primary key default gen_random_uuid(),
  id_origen text not null,
  matricula text not null,
  nombre_completo text,
  fecha date not null,
  hora text,
  sitio text not null check (sitio in ('Wellness', 'EMIS')),
  observaciones text,
  created_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  unique (id_origen, matricula, fecha, hora, sitio)
);

create index if not exists gym_asistencias_fecha_idx
  on public.gym_asistencias(fecha);

create index if not exists gym_asistencias_matricula_idx
  on public.gym_asistencias(matricula);

create index if not exists gym_asistencias_sitio_fecha_idx
  on public.gym_asistencias(sitio, fecha);

alter table public.gym_asistencias enable row level security;

drop policy if exists "gym_asistencias read authenticated" on public.gym_asistencias;
create policy "gym_asistencias read authenticated" on public.gym_asistencias
for select using (auth.uid() is not null);

drop policy if exists "gym_asistencias manage gym leadership" on public.gym_asistencias;
create policy "gym_asistencias manage gym leadership" on public.gym_asistencias
for all using (public.current_app_role() in ('admin', 'direccion') or public.current_area_key() = 'gimnasio')
with check (public.current_app_role() in ('admin', 'direccion') or public.current_area_key() = 'gimnasio');

grant select, insert, update on public.gym_asistencias to authenticated;
