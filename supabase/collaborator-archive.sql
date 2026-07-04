alter table public.collaborators
add column if not exists archived_at timestamptz,
add column if not exists archived_by uuid,
add column if not exists archive_reason text;

grant select, insert, update, delete on public.collaborators to authenticated;

notify pgrst, 'reload schema';
