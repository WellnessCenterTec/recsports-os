-- Fotografias privadas de colaboradores visibles para perfiles autenticados.
insert into storage.buckets (id, name, public)
values ('collaborator-photos', 'collaborator-photos', false)
on conflict (id) do update
set public = false;

drop policy if exists "collaborator photos read authenticated" on storage.objects;

create policy "collaborator photos read authenticated"
on storage.objects
for select
to authenticated
using (bucket_id = 'collaborator-photos');
