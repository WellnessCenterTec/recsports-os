alter table public.participation_upload_rows
add column if not exists import_key text;

update public.participation_upload_rows
set import_key = case
  when area_key = 'representativos' then
    lower(regexp_replace(coalesce(matricula, '') || '|' || coalesce(clave_materia, '') || '|' || coalesce(representativo, '') || '|' || coalesce(coach, ''), '\s+', ' ', 'g'))
  else lower(regexp_replace(coalesce(matricula, ''), '\s+', ' ', 'g'))
end
where import_key is null;

delete from public.participation_upload_rows a
using public.participation_upload_rows b
where a.id > b.id
  and a.area_key = b.area_key
  and a.import_key = b.import_key
  and a.import_key is not null;

drop index if exists public.participation_upload_rows_area_import_key_uidx;

alter table public.participation_upload_rows
drop constraint if exists participation_upload_rows_area_import_key_key;

alter table public.participation_upload_rows
add constraint participation_upload_rows_area_import_key_key unique (area_key, import_key);

grant select, insert, update, delete on public.participation_upload_rows to authenticated;

notify pgrst, 'reload schema';
