-- Reemplaza la Base Maestra en una sola transaccion.
-- Si alguna fila no puede insertarse, PostgreSQL revierte tambien el DELETE.

create or replace function public.replace_student_master_for_authorized_upload(rows jsonb)
returns integer
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  inserted_count integer;
begin
  if not coalesce(
    public.current_app_role() in ('admin', 'direccion')
    or public.is_global_operator(),
    false
  ) then
    raise exception 'No autorizado para reemplazar la Base Maestra';
  end if;

  if rows is null or jsonb_typeof(rows) <> 'array' or jsonb_array_length(rows) = 0 then
    raise exception 'La Base Maestra debe incluir al menos un alumno';
  end if;

  delete from public."Base de datos_alumnos"
  where true;

  insert into public."Base de datos_alumnos" (
    "Matricula",
    "Nombre Campus",
    "Desc Nivel Acad Alumno",
    "Periodo acad",
    "v_Clave Major Agrupado",
    "Desc Programa Academico",
    "Desc Genero",
    "Desc Escuela Programa",
    "Ind Plan Tec21",
    "Semestre",
    carrera
  )
  select
    source."Matricula",
    source."Nombre Campus",
    source."Desc Nivel Acad Alumno",
    source."Periodo acad",
    source."v_Clave Major Agrupado",
    source."Desc Programa Academico",
    source."Desc Genero",
    source."Desc Escuela Programa",
    source."Ind Plan Tec21",
    source."Semestre",
    source.carrera
  from jsonb_to_recordset(rows) as source(
    "Matricula" text,
    "Nombre Campus" text,
    "Desc Nivel Acad Alumno" text,
    "Periodo acad" text,
    "v_Clave Major Agrupado" text,
    "Desc Programa Academico" text,
    "Desc Genero" text,
    "Desc Escuela Programa" text,
    "Ind Plan Tec21" text,
    "Semestre" text,
    carrera text
  );

  get diagnostics inserted_count = row_count;
  if inserted_count <> jsonb_array_length(rows) then
    raise exception 'Supabase inserto % de % alumnos', inserted_count, jsonb_array_length(rows);
  end if;

  return inserted_count;
end;
$function$;

revoke all on function public.replace_student_master_for_authorized_upload(jsonb) from public;
grant execute on function public.replace_student_master_for_authorized_upload(jsonb) to authenticated;
