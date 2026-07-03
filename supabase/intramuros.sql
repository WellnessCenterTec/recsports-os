-- WellSync - Intramuros Fase 1 y Fase 2
-- Ejecutar una vez en Supabase SQL Editor.
-- No guarda nombres ni apellidos de alumnos.

create table if not exists public.intramuros_participantes (
  id uuid primary key default gen_random_uuid(),
  matricula text not null check (matricula ~ '^A0[0-9]{6,8}$'),
  genero text,
  programa text,
  modalidad text,
  escuela text,
  tipo_actividad text,
  torneo text not null default 'Sin torneo',
  rama text,
  equipo text not null default 'Sin equipo',
  periodo text not null default 'Sin periodo',
  fecha_carga timestamptz not null default now(),
  archivo_origen text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (matricula, torneo, equipo, periodo)
);

create index if not exists intramuros_participantes_periodo_idx on public.intramuros_participantes(periodo);
create index if not exists intramuros_participantes_torneo_idx on public.intramuros_participantes(torneo);
create index if not exists intramuros_participantes_matricula_idx on public.intramuros_participantes(matricula);

drop trigger if exists intramuros_participantes_updated_at on public.intramuros_participantes;
create trigger intramuros_participantes_updated_at
before update on public.intramuros_participantes
for each row execute function public.set_updated_at();

alter table public.intramuros_participantes enable row level security;

drop policy if exists "intramuros participantes read intramuros leadership" on public.intramuros_participantes;
create policy "intramuros participantes read intramuros leadership" on public.intramuros_participantes
for select using (public.can_read_area('intramuros'));

drop policy if exists "intramuros participantes manage intramuros" on public.intramuros_participantes;
create policy "intramuros participantes manage intramuros" on public.intramuros_participantes
for all using (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = 'intramuros'
)
with check (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = 'intramuros'
);

grant select, insert, update on public.intramuros_participantes to authenticated;

create table if not exists public.intramuros_roles_juego (
  id uuid primary key default gen_random_uuid(),
  torneo text not null default 'Sin torneo',
  semana text,
  fecha text,
  hora text,
  cancha text,
  grupo text,
  rama text,
  equipo_local text,
  equipo_visitante text,
  resultado text,
  observaciones text,
  estatus_partido text not null default 'Pendiente',
  periodo text not null default 'Sin periodo',
  fecha_carga timestamptz not null default now(),
  archivo_origen text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (torneo, fecha, hora, cancha, equipo_local, equipo_visitante)
);

create index if not exists intramuros_roles_juego_torneo_idx on public.intramuros_roles_juego(torneo);
create index if not exists intramuros_roles_juego_fecha_idx on public.intramuros_roles_juego(fecha);
create index if not exists intramuros_roles_juego_periodo_idx on public.intramuros_roles_juego(periodo);

drop trigger if exists intramuros_roles_juego_updated_at on public.intramuros_roles_juego;
create trigger intramuros_roles_juego_updated_at
before update on public.intramuros_roles_juego
for each row execute function public.set_updated_at();

alter table public.intramuros_roles_juego enable row level security;

drop policy if exists "intramuros roles read intramuros leadership" on public.intramuros_roles_juego;
create policy "intramuros roles read intramuros leadership" on public.intramuros_roles_juego
for select using (public.can_read_area('intramuros'));

drop policy if exists "intramuros roles manage intramuros" on public.intramuros_roles_juego;
create policy "intramuros roles manage intramuros" on public.intramuros_roles_juego
for all using (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = 'intramuros'
)
with check (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = 'intramuros'
);

grant select, insert, update on public.intramuros_roles_juego to authenticated;

select
  'intramuros_phase_1_4_ready' as status,
  to_regclass('public.intramuros_participantes') is not null as participantes_ready,
  to_regclass('public.intramuros_roles_juego') is not null as roles_ready;
