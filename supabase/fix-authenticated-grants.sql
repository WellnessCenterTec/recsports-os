-- Reparacion de permisos para usuarios autenticados en WellSync.
-- Ejecutar en Supabase SQL Editor si la app muestra:
-- "No pude leer capturas de Supabase todavia".

grant usage on schema public to authenticated;

grant execute on function public.current_app_role() to authenticated;
grant execute on function public.current_area_key() to authenticated;
grant execute on function public.can_read_area(text) to authenticated;
grant execute on function public.get_my_profile() to authenticated;

grant select on public.areas to authenticated;
grant select on public.periods to authenticated;
grant select on public.app_profiles to authenticated;
grant select on public.system_catalogs to authenticated;

grant select, insert, update on public.students_minimal to authenticated;
grant select, insert, update, delete on public."Base de datos_alumnos" to authenticated;
grant select, insert, update on public.participations to authenticated;

grant select, insert, update on public.class_sections to authenticated;
grant select, insert, update on public.class_teacher_performance to authenticated;
grant select, insert, update, delete on public.class_grades to authenticated;
grant select, insert, update on public.gym_asistencias to authenticated;
grant select, insert, update on public.intramuros_participantes to authenticated;
grant select, insert, update on public.intramuros_roles_juego to authenticated;
grant select, insert, update, delete on public.class_booking_reservations to authenticated;
grant select, insert, update, delete on public.participation_upload_rows to authenticated;

grant select, insert, update, delete on public.collaborators to authenticated;
grant select, insert, update on public.purchases to authenticated;
grant select, insert, update on public.import_jobs to authenticated;
grant select, insert on public.audit_log to authenticated;
