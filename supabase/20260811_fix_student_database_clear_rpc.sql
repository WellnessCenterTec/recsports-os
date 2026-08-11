-- Permite reemplazar la Base Maestra cuando pg_safeupdate esta habilitado.
-- Mantiene sin cambios la autorizacion, SECURITY DEFINER y search_path.

create or replace function public.clear_student_master_for_authorized_upload()
returns void
language plpgsql
security definer
set search_path to 'public'
as $function$
begin
  if not coalesce(
    public.current_app_role() in ('admin', 'direccion')
    or public.is_global_operator(),
    false
  ) then
    raise exception 'No autorizado para reemplazar la Base Maestra';
  end if;

  delete from public."Base de datos_alumnos"
  where true;
end;
$function$;
