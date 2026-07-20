-- WellSync - Eventos y meta institucional de Comunicacion.
-- Migracion aditiva: no modifica ni elimina datos de Vivencia.

create table if not exists public.communication_events (
  id uuid primary key default gen_random_uuid(),
  campus text not null default 'Monterrey',
  event_name text not null,
  discipline text,
  classification text,
  event_date date not null,
  end_date date,
  branch text,
  target_population text,
  participation_goal integer check (participation_goal is null or participation_goal >= 0),
  responsible_name text,
  description text,
  status text not null default 'planeado'
    check (status in ('planeado', 'realizado', 'cancelado', 'pospuesto')),
  reported_total_participants integer check (reported_total_participants is null or reported_total_participants >= 0),
  reported_men integer check (reported_men is null or reported_men >= 0),
  reported_women integer check (reported_women is null or reported_women >= 0),
  source_name text,
  source_row_key text,
  planning_activity_id text,
  created_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  archived_at timestamptz,
  constraint communication_events_date_range_check check (end_date is null or end_date >= event_date)
);

create unique index if not exists communication_events_source_row_uidx
  on public.communication_events(source_name, source_row_key);
create unique index if not exists communication_events_planning_uidx
  on public.communication_events(planning_activity_id);
create index if not exists communication_events_date_idx
  on public.communication_events(event_date);

drop trigger if exists communication_events_updated_at on public.communication_events;
create trigger communication_events_updated_at
before update on public.communication_events
for each row execute function public.set_updated_at();

create table if not exists public.communication_dashboard_settings (
  id smallint primary key default 1 check (id = 1),
  impact_goal integer not null default 3800 check (impact_goal > 0),
  updated_by uuid references public.app_profiles(id),
  updated_at timestamptz not null default now()
);

insert into public.communication_dashboard_settings (id, impact_goal)
values (1, 3800)
on conflict (id) do nothing;

alter table public.communication_events enable row level security;
alter table public.communication_dashboard_settings enable row level security;

drop policy if exists "communication events read" on public.communication_events;
create policy "communication events read"
on public.communication_events for select to authenticated
using (public.can_read_area('comunicacion'));

drop policy if exists "communication events insert" on public.communication_events;
create policy "communication events insert"
on public.communication_events for insert to authenticated
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
);

drop policy if exists "communication events update" on public.communication_events;
create policy "communication events update"
on public.communication_events for update to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
)
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
);

drop policy if exists "communication settings read" on public.communication_dashboard_settings;
create policy "communication settings read"
on public.communication_dashboard_settings for select to authenticated
using (public.can_read_area('comunicacion'));

drop policy if exists "communication settings insert" on public.communication_dashboard_settings;
create policy "communication settings insert"
on public.communication_dashboard_settings for insert to authenticated
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
);

drop policy if exists "communication settings update" on public.communication_dashboard_settings;
create policy "communication settings update"
on public.communication_dashboard_settings for update to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
)
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
);

grant select, insert, update on public.communication_events to authenticated;
grant select, insert, update on public.communication_dashboard_settings to authenticated;

comment on table public.communication_events is
  'Eventos exclusivos de Comunicacion cargados desde WellSync o sincronizados desde Planeacion.';
