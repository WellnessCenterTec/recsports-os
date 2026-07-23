-- WellSync - Fuentes ejecutivas compartidas
-- Guarda Booking, Gamer y Representativos en Supabase para alimentar
-- el Dashboard Ejecutivo desde cualquier computadora.
--
-- Privacidad:
-- - No guarda nombres de alumnos.
-- - Solo guarda matricula y datos agregables/operativos.
-- - Es aditivo: no elimina tablas existentes de otros modulos.

create table if not exists public.class_booking_reservations (
  id uuid primary key default gen_random_uuid(),
  source_reservation_id text,
  reservation_at timestamptz,
  status text,
  reservation_type text,
  matricula text,
  activity text not null default 'Sin actividad',
  raw_space text,
  source_name text,
  created_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists class_booking_reservations_date_idx
  on public.class_booking_reservations(reservation_at);

create index if not exists class_booking_reservations_matricula_idx
  on public.class_booking_reservations(matricula);

create index if not exists class_booking_reservations_activity_idx
  on public.class_booking_reservations(activity);

drop trigger if exists class_booking_reservations_updated_at on public.class_booking_reservations;
create trigger class_booking_reservations_updated_at
before update on public.class_booking_reservations
for each row execute function public.set_updated_at();

create table if not exists public.participation_upload_rows (
  id uuid primary key default gen_random_uuid(),
  area_key text not null check (area_key in ('gamer', 'representativos')),
  import_key text,
  matricula text not null,
  found_in_student_base boolean not null default false,
  duplicate_in_file boolean not null default false,
  clave_materia text,
  representativo text,
  coach text,
  genero text,
  carrera text,
  nivel text,
  programa text,
  semestre text,
  source_name text,
  source_row_number integer check (source_row_number is null or source_row_number > 0),
  created_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists participation_upload_rows_area_idx
  on public.participation_upload_rows(area_key);

create index if not exists participation_upload_rows_matricula_idx
  on public.participation_upload_rows(matricula);

alter table public.participation_upload_rows
drop constraint if exists participation_upload_rows_area_import_key_key;

alter table public.participation_upload_rows
add constraint participation_upload_rows_area_import_key_key unique (area_key, import_key);

create index if not exists participation_upload_rows_representativo_idx
  on public.participation_upload_rows(representativo)
  where area_key = 'representativos';

drop trigger if exists participation_upload_rows_updated_at on public.participation_upload_rows;
create trigger participation_upload_rows_updated_at
before update on public.participation_upload_rows
for each row execute function public.set_updated_at();

alter table public.class_booking_reservations enable row level security;
alter table public.participation_upload_rows enable row level security;

drop policy if exists "booking read classes and leadership" on public.class_booking_reservations;
create policy "booking read classes and leadership"
on public.class_booking_reservations
for select
to authenticated
using (public.can_read_area('clases'));

drop policy if exists "booking manage classes and leadership" on public.class_booking_reservations;
create policy "booking manage classes and leadership"
on public.class_booking_reservations
for all
to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = 'clases'
)
with check (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = 'clases'
);

drop policy if exists "participation uploads read by area" on public.participation_upload_rows;
create policy "participation uploads read by area"
on public.participation_upload_rows
for select
to authenticated
using (public.can_read_area(area_key));

drop policy if exists "participation uploads manage by area" on public.participation_upload_rows;
create policy "participation uploads manage by area"
on public.participation_upload_rows
for all
to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = area_key
)
with check (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = area_key
);

grant select, insert, update, delete on public.class_booking_reservations to authenticated;
grant select, insert, update, delete on public.participation_upload_rows to authenticated;
