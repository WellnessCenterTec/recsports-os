begin;

-- Presupuesto opera sobre budget_requests. La activacion anterior del
-- coordinador global cubria purchases, que es la tabla historica.
do $$
begin
  if to_regclass('public.budget_requests') is null then
    raise exception 'Falta public.budget_requests; no se aplicaron cambios';
  end if;
  if to_regprocedure('public.current_app_role()') is null
     or to_regprocedure('public.can_read_area(text)') is null
     or to_regprocedure('public.can_operate_area(text)') is null
     or to_regprocedure('public.is_global_operator()') is null then
    raise exception 'Faltan helpers RLS de WellSync; no se aplicaron cambios';
  end if;
end
$$;

alter table public.budget_requests enable row level security;

grant select, insert, update, delete on public.budget_requests to authenticated;

drop policy if exists "budget requests read authorized" on public.budget_requests;
create policy "budget requests read authorized"
on public.budget_requests
for select
using (public.can_read_area('compras'));

drop policy if exists "budget requests insert authorized" on public.budget_requests;
create policy "budget requests insert authorized"
on public.budget_requests
for insert
with check (public.can_operate_area('compras'));

drop policy if exists "budget requests update authorized" on public.budget_requests;
create policy "budget requests update authorized"
on public.budget_requests
for update
using (public.can_operate_area('compras'))
with check (public.can_operate_area('compras'));

drop policy if exists "budget requests delete leadership and sports leader" on public.budget_requests;
create policy "budget requests delete leadership and sports leader"
on public.budget_requests
for delete
using (
  public.current_app_role() in ('admin', 'direccion')
  or public.is_global_operator()
);

commit;
