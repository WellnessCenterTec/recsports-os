-- WellSync - Vivencia, fase 1
-- Estructura de eventos, participantes, indicadores y permisos.
-- Requiere haber ejecutado previamente:
--   1. supabase/schema.sql
--   2. supabase/seed.sql
--
-- Esta migracion es aditiva:
-- - No elimina tablas ni registros existentes.
-- - No modifica otros modulos.
-- - No concede DELETE desde la aplicacion.

create table if not exists public.vivencia_events (
  id uuid primary key default gen_random_uuid(),
  campus text not null,
  event_name text not null,
  discipline text,
  classification text,
  event_date date not null,
  end_date date,
  branch text,
  target_population text,
  participation_goal integer check (participation_goal is null or participation_goal >= 0),
  has_fee boolean not null default false,
  fee_amount numeric(12,2) check (fee_amount is null or fee_amount >= 0),
  responsible_name text,
  description text,
  is_signature_event boolean not null default false,
  status text not null default 'planeado'
    check (status in ('planeado', 'realizado', 'cancelado', 'pospuesto')),
  reported_total_participants integer
    check (reported_total_participants is null or reported_total_participants >= 0),
  reported_men integer
    check (reported_men is null or reported_men >= 0),
  reported_women integer
    check (reported_women is null or reported_women >= 0),
  source_name text,
  source_row_key text,
  created_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  archived_at timestamptz,
  constraint vivencia_events_date_range_check
    check (end_date is null or end_date >= event_date),
  constraint vivencia_events_fee_check
    check (
      (has_fee = false and coalesce(fee_amount, 0) = 0)
      or (has_fee = true and fee_amount is not null)
    )
);

create unique index if not exists vivencia_events_source_row_uidx
  on public.vivencia_events(source_name, source_row_key)
  where source_name is not null and source_row_key is not null;

create index if not exists vivencia_events_date_idx
  on public.vivencia_events(event_date);

create index if not exists vivencia_events_status_date_idx
  on public.vivencia_events(status, event_date);

create index if not exists vivencia_events_campus_date_idx
  on public.vivencia_events(campus, event_date);

create index if not exists vivencia_events_signature_idx
  on public.vivencia_events(is_signature_event, event_date)
  where archived_at is null;

drop trigger if exists vivencia_events_updated_at on public.vivencia_events;
create trigger vivencia_events_updated_at
before update on public.vivencia_events
for each row execute function public.set_updated_at();

create table if not exists public.vivencia_participants (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.vivencia_events(id) on delete restrict,
  matricula text not null references public.students_minimal(matricula) on update cascade,
  source_name text,
  source_row_number integer
    check (source_row_number is null or source_row_number > 0),
  created_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  unique (event_id, matricula)
);

create index if not exists vivencia_participants_event_idx
  on public.vivencia_participants(event_id);

create index if not exists vivencia_participants_matricula_idx
  on public.vivencia_participants(matricula);

create index if not exists vivencia_participants_created_at_idx
  on public.vivencia_participants(created_at);

alter table public.vivencia_events enable row level security;
alter table public.vivencia_participants enable row level security;

drop policy if exists "vivencia events read by area" on public.vivencia_events;
create policy "vivencia events read by area"
on public.vivencia_events
for select
to authenticated
using (public.can_read_area('vivencia'));

drop policy if exists "vivencia events insert by area" on public.vivencia_events;
create policy "vivencia events insert by area"
on public.vivencia_events
for insert
to authenticated
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (
    public.current_app_role() = 'coordinador'
    and public.current_area_key() = 'vivencia'
  )
);

drop policy if exists "vivencia events update by area" on public.vivencia_events;
create policy "vivencia events update by area"
on public.vivencia_events
for update
to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or (
    public.current_app_role() = 'coordinador'
    and public.current_area_key() = 'vivencia'
  )
)
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (
    public.current_app_role() = 'coordinador'
    and public.current_area_key() = 'vivencia'
  )
);

drop policy if exists "vivencia participants read by area" on public.vivencia_participants;
create policy "vivencia participants read by area"
on public.vivencia_participants
for select
to authenticated
using (public.can_read_area('vivencia'));

drop policy if exists "vivencia participants insert by area" on public.vivencia_participants;
create policy "vivencia participants insert by area"
on public.vivencia_participants
for insert
to authenticated
with check (
  (
    public.current_app_role() in ('admin', 'direccion')
    or (
      public.current_app_role() = 'coordinador'
      and public.current_area_key() = 'vivencia'
    )
  )
  and exists (
    select 1
    from public.vivencia_events event
    where event.id = public.vivencia_participants.event_id
      and event.archived_at is null
  )
);

drop policy if exists "vivencia participants update by area" on public.vivencia_participants;
create policy "vivencia participants update by area"
on public.vivencia_participants
for update
to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or (
    public.current_app_role() = 'coordinador'
    and public.current_area_key() = 'vivencia'
  )
)
with check (
  (
    public.current_app_role() in ('admin', 'direccion')
    or (
      public.current_app_role() = 'coordinador'
      and public.current_area_key() = 'vivencia'
    )
  )
  and exists (
    select 1
    from public.vivencia_events event
    where event.id = public.vivencia_participants.event_id
      and event.archived_at is null
  )
);

create or replace view public.vivencia_participant_details
with (security_invoker = true)
as
select
  participant.id,
  participant.event_id,
  participant.matricula,
  participant.source_name,
  participant.source_row_number,
  participant.created_by,
  participant.created_at,
  event.campus,
  event.event_name,
  event.event_date,
  event.classification,
  event.branch,
  event.status as event_status,
  event.is_signature_event,
  student.genero,
  student.carrera,
  student.semestre,
  student.nivel_escolar
from public.vivencia_participants participant
join public.vivencia_events event
  on event.id = participant.event_id
left join public.students_minimal student
  on student.matricula = participant.matricula
where event.archived_at is null;

create or replace view public.vivencia_event_metrics
with (security_invoker = true)
as
select
  event.id as event_id,
  event.campus,
  event.event_name,
  event.discipline,
  event.classification,
  event.event_date,
  event.end_date,
  event.branch,
  event.target_population,
  event.participation_goal,
  event.has_fee,
  event.fee_amount,
  event.responsible_name,
  event.is_signature_event,
  event.status,
  event.reported_total_participants,
  event.reported_men,
  event.reported_women,
  count(participant.id)::integer as participant_records,
  count(distinct participant.matricula)::integer as unique_participants,
  (
    count(distinct participant.matricula)
      filter (where student.genero = 'Masculino')
  )::integer as men,
  (
    count(distinct participant.matricula)
      filter (where student.genero = 'Femenino')
  )::integer as women,
  (
    count(distinct participant.matricula)
      filter (
      where student.genero is null
         or student.genero = 'No especificado'
      )
  )::integer as unspecified_gender,
  case
    when coalesce(event.participation_goal, 0) = 0 then null
    else round(
      count(distinct participant.matricula)::numeric
      * 100
      / event.participation_goal,
      2
    )
  end as goal_completion_percent
from public.vivencia_events event
left join public.vivencia_participants participant
  on participant.event_id = event.id
left join public.students_minimal student
  on student.matricula = participant.matricula
where event.archived_at is null
group by event.id;

grant select, insert, update on public.vivencia_events to authenticated;
grant select, insert, update on public.vivencia_participants to authenticated;
grant select on public.vivencia_participant_details to authenticated;
grant select on public.vivencia_event_metrics to authenticated;

comment on table public.vivencia_events is
  'Eventos de Vivencia. Excel/CSV es solo fuente de carga; Supabase es la fuente operativa.';

comment on table public.vivencia_participants is
  'Relacion unica entre un evento de Vivencia y una matricula participante.';

comment on column public.vivencia_events.reported_total_participants is
  'Total historico reportado en Excel; no sustituye el conteo calculado por matriculas.';

comment on column public.vivencia_events.archived_at is
  'Archivado logico. La aplicacion no recibe permiso DELETE para conservar el historico.';

select
  'vivencia_phase_1_ready' as status,
  to_regclass('public.vivencia_events') is not null as events_table_ready,
  to_regclass('public.vivencia_participants') is not null as participants_table_ready,
  to_regclass('public.vivencia_participant_details') is not null as participant_view_ready,
  to_regclass('public.vivencia_event_metrics') is not null as metrics_view_ready;
