-- WellSync - Semana Tec
-- Ejecutar una sola vez en Supabase SQL Editor.
-- Privacidad: esta tabla no contiene columnas para nombres ni apellidos.

create table if not exists public.semana_tec_participantes (
  id uuid primary key default gen_random_uuid(),
  matricula text not null check (matricula ~ '^A[0-9]{7,9}$'),
  clave_materia text,
  nombre_materia text,
  crn text,
  numero_grupo integer not null check (numero_grupo between 100 and 299),
  profesor text not null default 'Sin profesor',
  horario text,
  frecuencia text,
  calificacion text,
  programa text,
  genero text,
  semestre text,
  semana integer not null check (semana in (6, 12)),
  periodo text not null default 'Sin periodo',
  fecha_carga timestamptz not null default now(),
  archivo_origen text,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (periodo, matricula, numero_grupo)
);

alter table public.semana_tec_participantes add column if not exists horario text;
alter table public.semana_tec_participantes add column if not exists frecuencia text;

create index if not exists semana_tec_periodo_idx on public.semana_tec_participantes(periodo);
create index if not exists semana_tec_semana_idx on public.semana_tec_participantes(semana);
create index if not exists semana_tec_grupo_idx on public.semana_tec_participantes(numero_grupo);
create index if not exists semana_tec_profesor_idx on public.semana_tec_participantes(profesor);
create index if not exists semana_tec_matricula_idx on public.semana_tec_participantes(matricula);

drop trigger if exists semana_tec_participantes_updated_at on public.semana_tec_participantes;
create trigger semana_tec_participantes_updated_at
before update on public.semana_tec_participantes
for each row execute function public.set_updated_at();

alter table public.semana_tec_participantes enable row level security;

drop policy if exists semana_tec_select_operativo on public.semana_tec_participantes;
create policy semana_tec_select_operativo
on public.semana_tec_participantes
for select
to authenticated
using (
  exists (
    select 1 from public.app_profiles profile
    where profile.id = auth.uid()
      and profile.active = true
      and profile.role::text in ('admin', 'direccion', 'coordinador')
  )
);

drop policy if exists semana_tec_insert_operativo on public.semana_tec_participantes;
create policy semana_tec_insert_operativo
on public.semana_tec_participantes
for insert
to authenticated
with check (
  updated_by = auth.uid()
  and exists (
    select 1 from public.app_profiles profile
    where profile.id = auth.uid()
      and profile.active = true
      and profile.role::text in ('admin', 'direccion', 'coordinador')
  )
);

drop policy if exists semana_tec_update_operativo on public.semana_tec_participantes;
create policy semana_tec_update_operativo
on public.semana_tec_participantes
for update
to authenticated
using (
  exists (
    select 1 from public.app_profiles profile
    where profile.id = auth.uid()
      and profile.active = true
      and profile.role::text in ('admin', 'direccion', 'coordinador')
  )
)
with check (
  updated_by = auth.uid()
  and exists (
    select 1 from public.app_profiles profile
    where profile.id = auth.uid()
      and profile.active = true
      and profile.role::text in ('admin', 'direccion', 'coordinador')
  )
);

grant select, insert, update on public.semana_tec_participantes to authenticated;

select
  'semana_tec_ready' as status,
  to_regclass('public.semana_tec_participantes') is not null as participantes_ready;
