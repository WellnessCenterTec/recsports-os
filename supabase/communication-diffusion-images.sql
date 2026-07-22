-- WellSync - Imágenes vigentes de difusión para Comunicación.
-- Migración aditiva: no modifica eventos, calendarios ni otros módulos.

create table if not exists public.communication_diffusion_images (
  slot_key text primary key check (slot_key in (
    'gym-wellness',
    'gym-emis',
    'natacion',
    'booking',
    'clases',
    'torneos-intramuros',
    'renta-locker',
    'sitio-wellness',
    'torneo-relampago',
    'extra'
  )),
  title text not null,
  storage_path text not null,
  file_name text,
  mime_type text check (mime_type is null or mime_type in ('image/jpeg', 'image/png', 'image/webp')),
  file_size bigint check (file_size is null or (file_size > 0 and file_size <= 10485760)),
  updated_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists communication_diffusion_images_updated_at on public.communication_diffusion_images;
create trigger communication_diffusion_images_updated_at
before update on public.communication_diffusion_images
for each row execute function public.set_updated_at();

alter table public.communication_diffusion_images enable row level security;

drop policy if exists "communication diffusion read" on public.communication_diffusion_images;
create policy "communication diffusion read"
on public.communication_diffusion_images for select to authenticated
using (public.can_read_area('comunicacion'));

drop policy if exists "communication diffusion insert" on public.communication_diffusion_images;
create policy "communication diffusion insert"
on public.communication_diffusion_images for insert to authenticated
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
);

drop policy if exists "communication diffusion update" on public.communication_diffusion_images;
create policy "communication diffusion update"
on public.communication_diffusion_images for update to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
)
with check (
  public.current_app_role() in ('admin', 'direccion')
  or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
);

grant select, insert, update on public.communication_diffusion_images to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'communication-diffusion',
  'communication-diffusion',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "communication diffusion storage insert" on storage.objects;
create policy "communication diffusion storage insert"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'communication-diffusion'
  and (
    public.current_app_role() in ('admin', 'direccion')
    or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
  )
);

drop policy if exists "communication diffusion storage update" on storage.objects;
create policy "communication diffusion storage update"
on storage.objects for update to authenticated
using (
  bucket_id = 'communication-diffusion'
  and (
    public.current_app_role() in ('admin', 'direccion')
    or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
  )
)
with check (
  bucket_id = 'communication-diffusion'
  and (
    public.current_app_role() in ('admin', 'direccion')
    or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
  )
);

drop policy if exists "communication diffusion storage delete" on storage.objects;
create policy "communication diffusion storage delete"
on storage.objects for delete to authenticated
using (
  bucket_id = 'communication-diffusion'
  and (
    public.current_app_role() in ('admin', 'direccion')
    or (public.current_app_role() = 'coordinador' and public.current_area_key() = 'comunicacion')
  )
);

comment on table public.communication_diffusion_images is
  'Una imagen vigente por espacio de difusión de Comunicación; reemplaza la anterior sin conservar historial.';
