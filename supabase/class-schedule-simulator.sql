-- WellSync - Simulador visual Spinning/Fitness
-- Ejecutar una vez en Supabase SQL Editor.

create table if not exists public.class_schedule_simulator (
  id uuid primary key default gen_random_uuid(),
  area text not null check (area in ('Spinning', 'Fitness')),
  discipline text not null,
  teacher_id text,
  teacher_name text,
  day text not null check (day in ('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes')),
  start_time text not null,
  end_time text not null,
  created_at timestamptz not null default now()
);

alter table public.class_schedule_simulator enable row level security;

drop policy if exists "class simulator read authenticated" on public.class_schedule_simulator;
create policy "class simulator read authenticated"
on public.class_schedule_simulator
for select
to authenticated
using (true);

drop policy if exists "class simulator insert clases leadership" on public.class_schedule_simulator;
create policy "class simulator insert clases leadership"
on public.class_schedule_simulator
for insert
to authenticated
with check (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = 'clases'
);

drop policy if exists "class simulator delete clases leadership" on public.class_schedule_simulator;
create policy "class simulator delete clases leadership"
on public.class_schedule_simulator
for delete
to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = 'clases'
);
