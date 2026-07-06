create extension if not exists pgcrypto;

create table if not exists public.presentaciones (
  id uuid primary key default gen_random_uuid(),
  week_key text not null,
  presentation_type text not null default 'weekly',
  title text not null,
  status text not null default 'draft',
  created_by uuid default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (week_key, presentation_type)
);

create table if not exists public.presentacion_slides (
  id uuid primary key default gen_random_uuid(),
  presentacion_id uuid not null references public.presentaciones(id) on delete cascade,
  slide_key text not null,
  position integer not null,
  title text not null,
  config jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (presentacion_id, slide_key)
);

create table if not exists public.presentacion_notas (
  id uuid primary key default gen_random_uuid(),
  presentacion_id uuid not null references public.presentaciones(id) on delete cascade,
  section_key text not null,
  content text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (presentacion_id, section_key)
);

create table if not exists public.presentacion_pendientes (
  id uuid primary key default gen_random_uuid(),
  presentacion_id uuid not null references public.presentaciones(id) on delete cascade,
  title text not null,
  responsible text,
  status text not null default 'pendiente',
  due_date date,
  notes text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists presentacion_slides_presentation_idx on public.presentacion_slides(presentacion_id, position);
create index if not exists presentacion_notas_presentation_idx on public.presentacion_notas(presentacion_id);
create index if not exists presentacion_pendientes_presentation_idx on public.presentacion_pendientes(presentacion_id, sort_order);

alter table public.presentaciones enable row level security;
alter table public.presentacion_slides enable row level security;
alter table public.presentacion_notas enable row level security;
alter table public.presentacion_pendientes enable row level security;

drop policy if exists "presentaciones_authenticated" on public.presentaciones;
create policy "presentaciones_authenticated" on public.presentaciones for all to authenticated using (true) with check (true);
drop policy if exists "presentacion_slides_authenticated" on public.presentacion_slides;
create policy "presentacion_slides_authenticated" on public.presentacion_slides for all to authenticated using (true) with check (true);
drop policy if exists "presentacion_notas_authenticated" on public.presentacion_notas;
create policy "presentacion_notas_authenticated" on public.presentacion_notas for all to authenticated using (true) with check (true);
drop policy if exists "presentacion_pendientes_authenticated" on public.presentacion_pendientes;
create policy "presentacion_pendientes_authenticated" on public.presentacion_pendientes for all to authenticated using (true) with check (true);

grant select, insert, update, delete on public.presentaciones to authenticated;
grant select, insert, update, delete on public.presentacion_slides to authenticated;
grant select, insert, update, delete on public.presentacion_notas to authenticated;
grant select, insert, update, delete on public.presentacion_pendientes to authenticated;
