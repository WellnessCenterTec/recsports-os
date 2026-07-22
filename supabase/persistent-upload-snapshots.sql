-- WellSync - cargas permanentes y reemplazables
-- Semana Tec, Gamer y Representativos conservan solo la ultima carga completa.

alter table public.semana_tec_participantes
  add column if not exists upload_id text;

alter table public.participation_upload_rows
  add column if not exists upload_id text;

create index if not exists semana_tec_upload_id_idx
  on public.semana_tec_participantes(upload_id);

create index if not exists participation_upload_rows_upload_id_idx
  on public.participation_upload_rows(area_key, upload_id);

grant select, insert, update, delete on public.semana_tec_participantes to authenticated;
grant select, insert, update, delete on public.participation_upload_rows to authenticated;

drop policy if exists semana_tec_delete_operativo on public.semana_tec_participantes;
create policy semana_tec_delete_operativo
on public.semana_tec_participantes
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

drop policy if exists participation_upload_rows_delete_operativo on public.participation_upload_rows;
create policy participation_upload_rows_delete_operativo
on public.participation_upload_rows
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

select
  'persistent_uploads_ready' as status,
  exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name = 'semana_tec_participantes'
      and column_name = 'upload_id'
  ) as semana_tec_ready,
  exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name = 'participation_upload_rows'
      and column_name = 'upload_id'
  ) as gamer_representativos_ready;
