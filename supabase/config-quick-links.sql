create table if not exists public.config_quick_links (
  id text primary key default gen_random_uuid()::text,
  name text not null,
  url text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.config_quick_links enable row level security;

drop policy if exists "config_quick_links_select_authenticated" on public.config_quick_links;
create policy "config_quick_links_select_authenticated"
on public.config_quick_links
for select
to authenticated
using (true);

drop policy if exists "config_quick_links_insert_authenticated" on public.config_quick_links;
create policy "config_quick_links_insert_authenticated"
on public.config_quick_links
for insert
to authenticated
with check (true);

drop policy if exists "config_quick_links_update_authenticated" on public.config_quick_links;
create policy "config_quick_links_update_authenticated"
on public.config_quick_links
for update
to authenticated
using (true)
with check (true);

drop policy if exists "config_quick_links_delete_authenticated" on public.config_quick_links;
create policy "config_quick_links_delete_authenticated"
on public.config_quick_links
for delete
to authenticated
using (true);

grant select, insert, update, delete on public.config_quick_links to authenticated;
