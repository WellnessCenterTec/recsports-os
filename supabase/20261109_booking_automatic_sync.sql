-- WellSync - Booking con fuente automática y CSV de respaldo.
-- La fuente automática es autoritativa cuando coincide la misma source_key;
-- los registros manuales únicos se conservan y nunca son borrados por el sync.

alter table public.class_booking_reservations
  add column if not exists source_kind text not null default 'manual',
  add column if not exists source_key text,
  add column if not exists source_updated_at timestamptz,
  add column if not exists last_synced_at timestamptz;

alter table public.class_booking_reservations
  drop constraint if exists class_booking_reservations_source_kind_check;

alter table public.class_booking_reservations
  add constraint class_booking_reservations_source_kind_check
  check (source_kind in ('automatic', 'manual'));

create unique index if not exists class_booking_reservations_source_identity_idx
  on public.class_booking_reservations(source_kind, source_key)
  where source_key is not null;

create index if not exists class_booking_reservations_source_kind_date_idx
  on public.class_booking_reservations(source_kind, reservation_at);

drop policy if exists "booking manage classes and leadership" on public.class_booking_reservations;
create policy "booking manage classes and leadership"
on public.class_booking_reservations
for all
to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'clases')
)
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'clases')
);

create table if not exists public.booking_sync_runs (
  id uuid primary key default gen_random_uuid(),
  status text not null check (status in ('running', 'success', 'error')),
  trigger_kind text not null check (trigger_kind in ('manual', 'cron', 'webhook')),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  rows_received integer not null default 0,
  rows_upserted integer not null default 0,
  rows_removed integer not null default 0,
  issue_count integer not null default 0,
  error_code text
);

create index if not exists booking_sync_runs_started_at_idx
  on public.booking_sync_runs(started_at desc);

alter table public.booking_sync_runs enable row level security;

drop policy if exists "booking sync runs read classes and leadership" on public.booking_sync_runs;
create policy "booking sync runs read classes and leadership"
on public.booking_sync_runs
for select
to authenticated
using (public.can_read_area('clases'));

grant select on public.booking_sync_runs to authenticated;

create or replace function public.replace_booking_automatic(
  p_start date,
  p_end date,
  p_rows jsonb,
  p_trigger text default 'manual',
  p_issue_count integer default 0
)
returns table(run_id uuid, rows_upserted integer, rows_removed integer)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_run_id uuid := gen_random_uuid();
  v_upserted integer := 0;
  v_removed integer := 0;
begin
  if p_start is null or p_end is null or p_end < p_start or p_end - p_start > 370 then
    raise exception 'invalid booking sync range';
  end if;
  if jsonb_typeof(coalesce(p_rows, '[]'::jsonb)) <> 'array' or jsonb_array_length(coalesce(p_rows, '[]'::jsonb)) > 50000 then
    raise exception 'invalid booking sync payload';
  end if;
  if p_trigger not in ('manual', 'cron', 'webhook') then
    raise exception 'invalid booking sync trigger';
  end if;

  insert into public.booking_sync_runs (
    id, status, trigger_kind, rows_received, issue_count
  ) values (
    v_run_id, 'running', p_trigger, jsonb_array_length(coalesce(p_rows, '[]'::jsonb)), greatest(coalesce(p_issue_count, 0), 0)
  );

  insert into public.class_booking_reservations (
    source_reservation_id,
    reservation_at,
    status,
    reservation_type,
    matricula,
    activity,
    raw_space,
    source_name,
    source_kind,
    source_key,
    source_updated_at,
    last_synced_at
  )
  select
    nullif(x.source_reservation_id, ''),
    x.reservation_at,
    nullif(x.status, ''),
    nullif(x.reservation_type, ''),
    nullif(upper(regexp_replace(x.matricula, '\s+', '', 'g')), ''),
    coalesce(nullif(x.activity, ''), 'Sin actividad'),
    nullif(x.raw_space, ''),
    'Wellness Reservaciones API',
    'automatic',
    x.source_key,
    x.source_updated_at,
    now()
  from jsonb_to_recordset(coalesce(p_rows, '[]'::jsonb)) as x(
    source_reservation_id text,
    reservation_at timestamptz,
    status text,
    reservation_type text,
    matricula text,
    activity text,
    raw_space text,
    source_key text,
    source_updated_at timestamptz
  )
  where x.source_key is not null
    and x.reservation_at >= p_start::timestamptz
    and x.reservation_at < (p_end + 1)::timestamptz
  on conflict (source_kind, source_key) where source_key is not null
  do update set
    source_reservation_id = excluded.source_reservation_id,
    reservation_at = excluded.reservation_at,
    status = excluded.status,
    reservation_type = excluded.reservation_type,
    matricula = excluded.matricula,
    activity = excluded.activity,
    raw_space = excluded.raw_space,
    source_name = excluded.source_name,
    source_updated_at = excluded.source_updated_at,
    last_synced_at = now();
  get diagnostics v_upserted = row_count;

  delete from public.class_booking_reservations existing
  where existing.source_kind = 'automatic'
    and existing.reservation_at >= p_start::timestamptz
    and existing.reservation_at < (p_end + 1)::timestamptz
    and not exists (
      select 1
      from jsonb_to_recordset(coalesce(p_rows, '[]'::jsonb)) as incoming(source_key text)
      where incoming.source_key = existing.source_key
    );
  get diagnostics v_removed = row_count;

  update public.booking_sync_runs
  set status = 'success',
      finished_at = now(),
      rows_upserted = v_upserted,
      rows_removed = v_removed
  where id = v_run_id;

  return query select v_run_id, v_upserted, v_removed;
end;
$$;

revoke all on function public.replace_booking_automatic(date, date, jsonb, text, integer) from public, anon, authenticated;
grant execute on function public.replace_booking_automatic(date, date, jsonb, text, integer) to service_role;
