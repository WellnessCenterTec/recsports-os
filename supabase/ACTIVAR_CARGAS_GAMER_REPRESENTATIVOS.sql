-- Permite que Dirección y Coordinadores activos consulten y guarden
-- las cargas consolidadas de Gamer y Representativos.
-- No elimina ni modifica filas existentes.

grant usage on schema public to authenticated;
grant select, insert, update on table public.participation_upload_rows to authenticated;

alter table public.participation_upload_rows enable row level security;

drop policy if exists participation_upload_rows_select_operativo on public.participation_upload_rows;
create policy participation_upload_rows_select_operativo
on public.participation_upload_rows
for select
to authenticated
using (
  exists (
    select 1
    from public.app_profiles profile
    where profile.id = auth.uid()
      and profile.active = true
      and profile.role::text in ('direccion', 'coordinador')
  )
);

drop policy if exists participation_upload_rows_insert_operativo on public.participation_upload_rows;
create policy participation_upload_rows_insert_operativo
on public.participation_upload_rows
for insert
to authenticated
with check (
  created_by = auth.uid()
  and exists (
    select 1
    from public.app_profiles profile
    where profile.id = auth.uid()
      and profile.active = true
      and profile.role::text in ('direccion', 'coordinador')
  )
);

drop policy if exists participation_upload_rows_update_operativo on public.participation_upload_rows;
create policy participation_upload_rows_update_operativo
on public.participation_upload_rows
for update
to authenticated
using (
  exists (
    select 1
    from public.app_profiles profile
    where profile.id = auth.uid()
      and profile.active = true
      and profile.role::text in ('direccion', 'coordinador')
  )
)
with check (
  exists (
    select 1
    from public.app_profiles profile
    where profile.id = auth.uid()
      and profile.active = true
      and profile.role::text in ('direccion', 'coordinador')
  )
);
