-- Los perfiles autenticados de WellSync necesitan leer el directorio para
-- mostrar la ficha y resolver la ruta privada de la fotografia.
-- La edicion permanece restringida por las politicas de administracion.
drop policy if exists "collaborators read authenticated" on public.collaborators;

create policy "collaborators read authenticated"
on public.collaborators
for select
to authenticated
using (true);
