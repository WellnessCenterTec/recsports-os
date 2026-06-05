-- RecSports OS - Supabase schema inicial
-- Datos de alumnos permitidos: matricula, genero, carrera, semestre, nivel escolar.
-- No guardar nombres, correos, telefonos, historial clinico ni datos sensibles de alumnos.

create extension if not exists pgcrypto;

do $$ begin
  create type app_role as enum ('admin', 'direccion', 'coordinador', 'compras', 'consulta');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type record_status as enum ('activo', 'asistio', 'no_asistio', 'baja', 'acreditado', 'np');
exception when duplicate_object then null;
end $$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.areas (
  area_key text primary key,
  name text not null,
  sort_order int not null default 0,
  active boolean not null default true
);

create table if not exists public.periods (
  period_key text primary key,
  name text not null,
  starts_on date,
  ends_on date,
  active boolean not null default true
);

create table if not exists public.app_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  display_name text,
  role app_role not null default 'consulta',
  area_key text references public.areas(area_key),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists app_profiles_updated_at on public.app_profiles;
create trigger app_profiles_updated_at
before update on public.app_profiles
for each row execute function public.set_updated_at();

create or replace function public.current_app_role()
returns app_role
language sql
stable
security definer
set search_path = public
as $$
  select role from public.app_profiles where id = auth.uid() and active = true;
$$;

create or replace function public.current_area_key()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select area_key from public.app_profiles where id = auth.uid() and active = true;
$$;

create or replace function public.can_read_area(target_area text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    public.current_app_role() in ('admin', 'direccion')
    or public.current_area_key() = target_area
    or (public.current_app_role() = 'compras' and target_area in ('compras', 'colaboradores')),
    false
  );
$$;

create table if not exists public.students_minimal (
  matricula text primary key check (matricula ~ '^A0[0-9]{6,8}$'),
  genero text not null check (genero in ('Femenino', 'Masculino', 'No especificado')),
  carrera text not null,
  semestre int not null check (semestre between 1 and 12),
  nivel_escolar text not null check (nivel_escolar in ('Profesional', 'Posgrado')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists students_minimal_updated_at on public.students_minimal;
create trigger students_minimal_updated_at
before update on public.students_minimal
for each row execute function public.set_updated_at();

create table if not exists public.participations (
  id uuid primary key default gen_random_uuid(),
  matricula text not null references public.students_minimal(matricula),
  area_key text not null references public.areas(area_key),
  period_key text not null references public.periods(period_key),
  record_date date,
  status record_status not null default 'activo',
  operation_label text,
  source_name text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists participations_area_period_idx on public.participations(area_key, period_key);
create index if not exists participations_matricula_idx on public.participations(matricula);

drop trigger if exists participations_updated_at on public.participations;
create trigger participations_updated_at
before update on public.participations
for each row execute function public.set_updated_at();

create table if not exists public.class_sections (
  id uuid primary key default gen_random_uuid(),
  period_key text not null references public.periods(period_key),
  discipline text not null,
  crn text,
  group_number text,
  teacher_name text,
  banner_enrolled int not null default 0,
  bajas int not null default 0,
  np int not null default 0,
  finished_accredited int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists class_sections_period_idx on public.class_sections(period_key);
create index if not exists class_sections_teacher_idx on public.class_sections(teacher_name);

drop trigger if exists class_sections_updated_at on public.class_sections;
create trigger class_sections_updated_at
before update on public.class_sections
for each row execute function public.set_updated_at();

create table if not exists public.class_teacher_performance (
  id uuid primary key default gen_random_uuid(),
  period_key text references public.periods(period_key),
  teacher_name text not null,
  total_students int not null default 0,
  approved_students int not null default 0,
  failed_students int not null default 0,
  source_name text not null default 'CD Lista de Alumnos',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (period_key, teacher_name)
);

drop trigger if exists class_teacher_performance_updated_at on public.class_teacher_performance;
create trigger class_teacher_performance_updated_at
before update on public.class_teacher_performance
for each row execute function public.set_updated_at();

create table if not exists public.collaborators (
  nomina text primary key,
  full_name text not null,
  puesto text,
  coordinador text,
  course_percent numeric(5,2),
  playera_joma text,
  talla_pants text,
  institutional_email text,
  birthdate_label text,
  genero text,
  first_aid boolean,
  gym_attendance numeric(10,4),
  emergency_contact_1 text,
  emergency_phone_1 text,
  emergency_contact_2 text,
  emergency_phone_2 text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists collaborators_updated_at on public.collaborators;
create trigger collaborators_updated_at
before update on public.collaborators
for each row execute function public.set_updated_at();

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  area_key text not null references public.areas(area_key),
  concept text not null,
  provider text,
  amount numeric(12,2) not null check (amount >= 0),
  status text not null default 'pendiente',
  required_on date,
  created_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists purchases_updated_at on public.purchases;
create trigger purchases_updated_at
before update on public.purchases
for each row execute function public.set_updated_at();

create table if not exists public.system_catalogs (
  id uuid primary key default gen_random_uuid(),
  catalog_type text not null,
  value text not null,
  description text,
  active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (catalog_type, value)
);

create table if not exists public.import_jobs (
  id uuid primary key default gen_random_uuid(),
  source_name text not null,
  module_key text not null,
  status text not null default 'pendiente',
  total_rows int not null default 0,
  valid_rows int not null default 0,
  invalid_rows int not null default 0,
  notes text,
  created_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.audit_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.app_profiles(id),
  action text not null,
  entity text not null,
  entity_id text,
  area_key text,
  detail text,
  created_at timestamptz not null default now()
);

alter table public.areas enable row level security;
alter table public.periods enable row level security;
alter table public.app_profiles enable row level security;
alter table public.students_minimal enable row level security;
alter table public.participations enable row level security;
alter table public.class_sections enable row level security;
alter table public.class_teacher_performance enable row level security;
alter table public.collaborators enable row level security;
alter table public.purchases enable row level security;
alter table public.system_catalogs enable row level security;
alter table public.import_jobs enable row level security;
alter table public.audit_log enable row level security;

drop policy if exists "read shared catalogs" on public.areas;
create policy "read shared catalogs" on public.areas for select using (auth.uid() is not null);

drop policy if exists "read periods" on public.periods;
create policy "read periods" on public.periods for select using (auth.uid() is not null);

drop policy if exists "read system catalogs" on public.system_catalogs;
create policy "read system catalogs" on public.system_catalogs for select using (auth.uid() is not null);

drop policy if exists "profiles read own or leadership" on public.app_profiles;
create policy "profiles read own or leadership" on public.app_profiles
for select using (id = auth.uid() or public.current_app_role() in ('admin', 'direccion'));

drop policy if exists "profiles admin manage" on public.app_profiles;
create policy "profiles admin manage" on public.app_profiles
for all using (public.current_app_role() = 'admin')
with check (public.current_app_role() = 'admin');

drop policy if exists "students read authenticated" on public.students_minimal;
create policy "students read authenticated" on public.students_minimal
for select using (auth.uid() is not null);

drop policy if exists "students write coordinators" on public.students_minimal;
create policy "students write coordinators" on public.students_minimal
for all using (public.current_app_role() in ('admin', 'direccion', 'coordinador'))
with check (public.current_app_role() in ('admin', 'direccion', 'coordinador'));

drop policy if exists "participations read by area" on public.participations;
create policy "participations read by area" on public.participations
for select using (public.can_read_area(area_key));

drop policy if exists "participations insert by area" on public.participations;
create policy "participations insert by area" on public.participations
for insert with check (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = area_key)
);

drop policy if exists "participations update by area" on public.participations;
create policy "participations update by area" on public.participations
for update using (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = area_key)
)
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = area_key)
);

drop policy if exists "class data read classes and leadership" on public.class_sections;
create policy "class data read classes and leadership" on public.class_sections
for select using (public.can_read_area('clases'));

drop policy if exists "class data manage classes" on public.class_sections;
create policy "class data manage classes" on public.class_sections
for all using (public.current_app_role() in ('admin', 'direccion') or public.current_area_key() = 'clases')
with check (public.current_app_role() in ('admin', 'direccion') or public.current_area_key() = 'clases');

drop policy if exists "teacher performance read classes and leadership" on public.class_teacher_performance;
create policy "teacher performance read classes and leadership" on public.class_teacher_performance
for select using (public.can_read_area('clases'));

drop policy if exists "teacher performance manage classes" on public.class_teacher_performance;
create policy "teacher performance manage classes" on public.class_teacher_performance
for all using (public.current_app_role() in ('admin', 'direccion') or public.current_area_key() = 'clases')
with check (public.current_app_role() in ('admin', 'direccion') or public.current_area_key() = 'clases');

drop policy if exists "collaborators read collaborators compras leadership" on public.collaborators;
create policy "collaborators read collaborators compras leadership" on public.collaborators
for select using (
  public.current_app_role() in ('admin', 'direccion', 'compras')
  or public.current_area_key() = 'colaboradores'
);

drop policy if exists "collaborators manage collaborators leadership" on public.collaborators;
create policy "collaborators manage collaborators leadership" on public.collaborators
for all using (public.current_app_role() in ('admin', 'direccion') or public.current_area_key() = 'colaboradores')
with check (public.current_app_role() in ('admin', 'direccion') or public.current_area_key() = 'colaboradores');

drop policy if exists "purchases read compras leadership" on public.purchases;
create policy "purchases read compras leadership" on public.purchases
for select using (public.current_app_role() in ('admin', 'direccion', 'compras'));

drop policy if exists "purchases manage compras leadership" on public.purchases;
create policy "purchases manage compras leadership" on public.purchases
for all using (public.current_app_role() in ('admin', 'direccion', 'compras'))
with check (public.current_app_role() in ('admin', 'direccion', 'compras'));

drop policy if exists "imports read leadership" on public.import_jobs;
create policy "imports read leadership" on public.import_jobs
for select using (public.current_app_role() in ('admin', 'direccion'));

drop policy if exists "imports manage leadership" on public.import_jobs;
create policy "imports manage leadership" on public.import_jobs
for all using (public.current_app_role() in ('admin', 'direccion'))
with check (public.current_app_role() in ('admin', 'direccion'));

drop policy if exists "audit read leadership" on public.audit_log;
create policy "audit read leadership" on public.audit_log
for select using (public.current_app_role() in ('admin', 'direccion'));

drop policy if exists "audit insert authenticated" on public.audit_log;
create policy "audit insert authenticated" on public.audit_log
for insert with check (auth.uid() is not null);
