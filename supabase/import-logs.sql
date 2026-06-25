-- WellSync - Centro de Cargas, fase 1
-- Historial compartido de cargas/importaciones en Supabase.
--
-- Esta migracion es aditiva:
-- - No elimina tablas ni registros existentes.
-- - No modifica datos de otros modulos.
-- - Permite que Direccion vea el historial general y coordinadores vean su area.

create table if not exists public.import_logs (
  id uuid primary key default gen_random_uuid(),
  module_key text not null,
  module_name text not null,
  source_name text,
  file_name text,
  status text not null default 'completed'
    check (status in ('completed', 'completed_with_warnings', 'failed')),
  loaded_count integer not null default 0
    check (loaded_count >= 0),
  omitted_count integer not null default 0
    check (omitted_count >= 0),
  warning_count integer not null default 0
    check (warning_count >= 0),
  error_message text,
  uploaded_by uuid references public.app_profiles(id),
  created_at timestamptz not null default now()
);

create index if not exists import_logs_module_created_idx
  on public.import_logs(module_key, created_at desc);

create index if not exists import_logs_status_created_idx
  on public.import_logs(status, created_at desc);

alter table public.import_logs enable row level security;

drop policy if exists "import logs read by authorized users" on public.import_logs;
create policy "import logs read by authorized users"
on public.import_logs
for select
to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = module_key
);

drop policy if exists "import logs insert by authorized users" on public.import_logs;
create policy "import logs insert by authorized users"
on public.import_logs
for insert
to authenticated
with check (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = module_key
);

grant select, insert on public.import_logs to authenticated;

comment on table public.import_logs is
  'Historial compartido de cargas del Centro de Cargas de WellSync.';

comment on column public.import_logs.module_key is
  'Clave del modulo afectado: general, gimnasio, vivencia, clases, colaboradores, etc.';

comment on column public.import_logs.status is
  'Resultado operativo de la carga: completed, completed_with_warnings o failed.';
