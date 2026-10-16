-- Paquete Dirección: tareas por área con marca de creación y cumplimiento.
-- Ejecutar en Supabase antes de publicar este paquete para habilitar la lista compartida.

create extension if not exists pgcrypto;

create table if not exists public.direccion_checklist_items (
  id uuid primary key default gen_random_uuid(),
  area_key text not null check (area_key in (
    'clases', 'gimnasio', 'intramuros', 'vivencia', 'semana-tec', 'comunicacion', 'diseno'
  )),
  content text not null check (char_length(trim(content)) between 1 and 240),
  completed boolean not null default false,
  completed_at timestamptz,
  created_by uuid references public.app_profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check ((completed and completed_at is not null) or (not completed and completed_at is null))
);

create index if not exists direccion_checklist_items_area_created_idx
on public.direccion_checklist_items (area_key, created_at desc);

drop trigger if exists direccion_checklist_items_updated_at on public.direccion_checklist_items;
create trigger direccion_checklist_items_updated_at
before update on public.direccion_checklist_items
for each row execute function public.set_updated_at();

alter table public.direccion_checklist_items enable row level security;

drop policy if exists "direccion_checklist_items_authenticated" on public.direccion_checklist_items;
create policy "direccion_checklist_items_authenticated"
on public.direccion_checklist_items
for all
to authenticated
using (true)
with check (true);

grant select, insert, update, delete on public.direccion_checklist_items to authenticated;
