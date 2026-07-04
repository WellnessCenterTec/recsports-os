create table if not exists public.planning_event_overrides (
  id uuid primary key default gen_random_uuid(),
  area text not null,
  planning_activity_id text not null,
  event_name text,
  event_date date,
  responsible_name text,
  status text,
  notes text,
  updated_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (area, planning_activity_id)
);

alter table public.planning_event_overrides enable row level security;

drop policy if exists "planning_event_overrides_select" on public.planning_event_overrides;
create policy "planning_event_overrides_select"
on public.planning_event_overrides
for select
to authenticated
using (true);

drop policy if exists "planning_event_overrides_insert" on public.planning_event_overrides;
create policy "planning_event_overrides_insert"
on public.planning_event_overrides
for insert
to authenticated
with check (true);

drop policy if exists "planning_event_overrides_update" on public.planning_event_overrides;
create policy "planning_event_overrides_update"
on public.planning_event_overrides
for update
to authenticated
using (true)
with check (true);
