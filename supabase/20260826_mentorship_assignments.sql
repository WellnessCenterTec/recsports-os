-- WellSync - Mentoría AD26
-- Privacidad: guarda únicamente matrícula, mentor y comunidad.
-- No existen columnas para nombres, correos ni otros datos del alumno.

create table if not exists public.mentorship_assignments (
  id uuid primary key default gen_random_uuid(),
  period_key text not null,
  matricula text not null check (matricula ~ '^A[0-9]{7,9}$'),
  mentor text not null,
  community text not null,
  source_name text,
  upload_id uuid not null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (period_key, mentor, community, matricula)
);

create index if not exists mentorship_assignments_period_idx
  on public.mentorship_assignments(period_key);
create index if not exists mentorship_assignments_matricula_idx
  on public.mentorship_assignments(matricula);
create index if not exists mentorship_assignments_mentor_idx
  on public.mentorship_assignments(mentor, community);
create index if not exists mentorship_assignments_upload_idx
  on public.mentorship_assignments(upload_id);

drop trigger if exists mentorship_assignments_updated_at on public.mentorship_assignments;
create trigger mentorship_assignments_updated_at
before update on public.mentorship_assignments
for each row execute function public.set_updated_at();

alter table public.mentorship_assignments enable row level security;

drop policy if exists mentorship_assignments_select_leadership on public.mentorship_assignments;
create policy mentorship_assignments_select_leadership
on public.mentorship_assignments
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

drop policy if exists mentorship_assignments_insert_leadership on public.mentorship_assignments;
create policy mentorship_assignments_insert_leadership
on public.mentorship_assignments
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

drop policy if exists mentorship_assignments_update_leadership on public.mentorship_assignments;
create policy mentorship_assignments_update_leadership
on public.mentorship_assignments
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

drop policy if exists mentorship_assignments_delete_leadership on public.mentorship_assignments;
create policy mentorship_assignments_delete_leadership
on public.mentorship_assignments
for delete
to authenticated
using (
  exists (
    select 1 from public.app_profiles profile
    where profile.id = auth.uid()
      and profile.active = true
      and profile.role::text in ('admin', 'direccion', 'coordinador')
  )
);

grant select, insert, update, delete on public.mentorship_assignments to authenticated;

select
  'mentorship_assignments_ready' as status,
  to_regclass('public.mentorship_assignments') is not null as table_ready;
