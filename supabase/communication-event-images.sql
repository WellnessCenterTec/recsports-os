-- WellSync: una imagen visible por evento registrado de Comunicación.
-- Migración aditiva; no altera matrículas, eventos ni imágenes de difusión.

create table if not exists public.communication_event_images (
  event_id uuid primary key references public.communication_events(id) on delete restrict,
  storage_path text not null,
  file_name text,
  mime_type text not null check (mime_type in ('image/jpeg', 'image/png', 'image/webp')),
  file_size bigint not null check (file_size > 0 and file_size <= 10485760),
  updated_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists communication_event_images_updated_at on public.communication_event_images;
create trigger communication_event_images_updated_at
before update on public.communication_event_images
for each row execute function public.set_updated_at();

alter table public.communication_event_images enable row level security;

drop policy if exists "communication event images read" on public.communication_event_images;
create policy "communication event images read"
on public.communication_event_images for select to authenticated
using (public.can_read_area('comunicacion'));

drop policy if exists "communication event images insert" on public.communication_event_images;
create policy "communication event images insert"
on public.communication_event_images for insert to authenticated
with check (
  (
    public.current_app_role() in ('admin', 'direccion')
    or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
  )
  and exists (
    select 1 from public.communication_events event
    where event.id = communication_event_images.event_id and event.archived_at is null
  )
);

drop policy if exists "communication event images update" on public.communication_event_images;
create policy "communication event images update"
on public.communication_event_images for update to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
)
with check (
  (
    public.current_app_role() in ('admin', 'direccion')
    or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
  )
  and exists (
    select 1 from public.communication_events event
    where event.id = communication_event_images.event_id and event.archived_at is null
  )
);

grant select, insert, update on public.communication_event_images to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'communication-event-images', 'communication-event-images', false, 10485760,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = false,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "communication event image storage read" on storage.objects;
create policy "communication event image storage read"
on storage.objects for select to authenticated
using (bucket_id = 'communication-event-images' and public.can_read_area('comunicacion'));

drop policy if exists "communication event image storage insert" on storage.objects;
create policy "communication event image storage insert"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'communication-event-images'
  and (
    public.current_app_role() in ('admin', 'direccion')
    or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
  )
);

drop policy if exists "communication event image storage delete" on storage.objects;
create policy "communication event image storage delete"
on storage.objects for delete to authenticated
using (
  bucket_id = 'communication-event-images'
  and (
    public.current_app_role() in ('admin', 'direccion')
    or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
  )
);

comment on table public.communication_event_images is
  'Una imagen de portada por evento de Comunicación; fotos en bucket privado con acceso solo para usuarios autorizados.';
