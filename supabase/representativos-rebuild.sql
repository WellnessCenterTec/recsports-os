-- WellSync - reconstruccion de Representativos
-- Privacidad: participation_upload_rows no contiene nombres ni apellidos de alumnos.

alter table public.participation_upload_rows
  add column if not exists semestre text;

create index if not exists participation_upload_rows_representativos_upload_idx
  on public.participation_upload_rows(area_key, upload_id, updated_at desc)
  where area_key = 'representativos';

grant select, insert, update, delete on public.participation_upload_rows to authenticated;

notify pgrst, 'reload schema';

select
  'representativos_rebuild_ready' as status,
  exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'participation_upload_rows'
      and column_name = 'semestre'
  ) as semestre_ready;
