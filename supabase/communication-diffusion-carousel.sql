-- WellSync - Segunda imagen para Booking y Sitio Wellness.
-- Migracion aditiva: las imagenes existentes conservan image_index = 1.

alter table public.communication_diffusion_images
  add column if not exists image_index smallint not null default 1;

alter table public.communication_diffusion_images
  drop constraint if exists communication_diffusion_images_image_index_check;

alter table public.communication_diffusion_images
  add constraint communication_diffusion_images_image_index_check
  check (
    image_index = 1
    or (image_index = 2 and slot_key in ('booking', 'sitio-wellness'))
  );

alter table public.communication_diffusion_images
  drop constraint if exists communication_diffusion_images_pkey;

alter table public.communication_diffusion_images
  add constraint communication_diffusion_images_pkey primary key (slot_key, image_index);

comment on column public.communication_diffusion_images.image_index is
  'Posicion de la imagen. Booking y Sitio Wellness admiten posiciones 1 y 2; los demas espacios solo posicion 1.';

comment on table public.communication_diffusion_images is
  'Imagenes vigentes por espacio de difusion. Booking y Sitio Wellness admiten dos imagenes; las demas categorias una.';
