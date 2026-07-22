-- WellSync - respaldo PDF de calificaciones por grupo de Semana Tec.
-- Migracion aditiva: no modifica alumnos ni cargas existentes.

create table if not exists public.semana_tec_group_grade_files (
  group_key text primary key,
  periodo text not null,
  semana integer not null check (semana in (6, 12)),
  numero_grupo integer not null check (numero_grupo between 100 and 299),
  profesor text,
  storage_path text not null,
  file_name text not null,
  mime_type text not null default 'application/pdf' check (mime_type = 'application/pdf'),
  file_size bigint not null check (file_size > 0 and file_size <= 15728640),
  updated_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (periodo, numero_grupo)
);

drop trigger if exists semana_tec_group_grade_files_updated_at on public.semana_tec_group_grade_files;
create trigger semana_tec_group_grade_files_updated_at
before update on public.semana_tec_group_grade_files
for each row execute function public.set_updated_at();

alter table public.semana_tec_group_grade_files enable row level security;

drop policy if exists "semana tec group grades read" on public.semana_tec_group_grade_files;
create policy "semana tec group grades read"
on public.semana_tec_group_grade_files for select to authenticated
using (public.can_read_area('semana-tec'));

drop policy if exists "semana tec group grades insert" on public.semana_tec_group_grade_files;
create policy "semana tec group grades insert"
on public.semana_tec_group_grade_files for insert to authenticated
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'semana-tec')
);

drop policy if exists "semana tec group grades update" on public.semana_tec_group_grade_files;
create policy "semana tec group grades update"
on public.semana_tec_group_grade_files for update to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'semana-tec')
)
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'semana-tec')
);

grant select, insert, update on public.semana_tec_group_grade_files to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('semana-tec-calificaciones', 'semana-tec-calificaciones', false, 15728640, array['application/pdf'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "semana tec grade files read" on storage.objects;
create policy "semana tec grade files read"
on storage.objects for select to authenticated
using (bucket_id = 'semana-tec-calificaciones' and public.can_read_area('semana-tec'));

drop policy if exists "semana tec grade files insert" on storage.objects;
create policy "semana tec grade files insert"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'semana-tec-calificaciones'
  and (
    public.current_app_role() in ('admin', 'direccion')
    or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'semana-tec')
  )
);

drop policy if exists "semana tec grade files delete" on storage.objects;
create policy "semana tec grade files delete"
on storage.objects for delete to authenticated
using (
  bucket_id = 'semana-tec-calificaciones'
  and (
    public.current_app_role() in ('admin', 'direccion')
    or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'semana-tec')
  )
);

comment on table public.semana_tec_group_grade_files is
  'Mantiene un unico PDF vigente de calificaciones por periodo y grupo de Semana Tec.';
