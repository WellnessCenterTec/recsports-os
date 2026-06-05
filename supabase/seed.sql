-- RecSports OS - datos base iniciales
-- Ejecutar despues de schema.sql en Supabase SQL Editor.

insert into public.areas (area_key, name, sort_order, active) values
  ('general', 'Ejecutivo general', 10, true),
  ('clases', 'Clases Deportivas', 20, true),
  ('gimnasio', 'Gimnasio', 30, true),
  ('intramuros', 'Intramuros', 40, true),
  ('vivencia', 'Vivencia', 50, true),
  ('comunicacion', 'Comunicacion', 60, true),
  ('representativos', 'Representativos', 70, true),
  ('gamer', 'Gamer', 80, true),
  ('colaboradores', 'Colaboradores', 90, true),
  ('compras', 'Compras y Presupuesto', 100, true),
  ('configuracion', 'Configuracion', 110, true)
on conflict (area_key) do update set
  name = excluded.name,
  sort_order = excluded.sort_order,
  active = excluded.active;

insert into public.periods (period_key, name, starts_on, ends_on, active) values
  ('AD26', 'Agosto-Diciembre 2026', null, null, true),
  ('PMT1', 'Periodo 1', null, null, true),
  ('PMT2', 'Periodo 2', null, null, true),
  ('FJ26', 'Febrero-Junio 2026', null, null, false),
  ('IN26', 'Invierno 2026', null, null, false)
on conflict (period_key) do update set
  name = excluded.name,
  starts_on = excluded.starts_on,
  ends_on = excluded.ends_on,
  active = excluded.active;

insert into public.system_catalogs (catalog_type, value, description, sort_order, active) values
  ('genero_alumno', 'Femenino', 'Valor permitido para alumnos', 10, true),
  ('genero_alumno', 'Masculino', 'Valor permitido para alumnos', 20, true),
  ('genero_alumno', 'No especificado', 'Valor permitido para alumnos', 30, true),
  ('nivel_escolar', 'Profesional', 'Valor permitido para alumnos', 10, true),
  ('nivel_escolar', 'Posgrado', 'Valor permitido para alumnos', 20, true),
  ('estatus_participacion', 'activo', 'Registro activo o inscrito', 10, true),
  ('estatus_participacion', 'asistio', 'Asistencia confirmada', 20, true),
  ('estatus_participacion', 'no_asistio', 'Ausencia confirmada', 30, true),
  ('estatus_participacion', 'baja', 'Baja del programa', 40, true),
  ('estatus_participacion', 'acreditado', 'Alumno acreditado', 50, true),
  ('estatus_participacion', 'np', 'No presento o no participo', 60, true),
  ('rol_sistema', 'admin', 'Configuracion total del sistema', 10, true),
  ('rol_sistema', 'direccion', 'Vista ejecutiva y aprobaciones generales', 20, true),
  ('rol_sistema', 'coordinador', 'Captura y consulta de su area', 30, true),
  ('rol_sistema', 'compras', 'Compras, presupuesto y colaboradores', 40, true),
  ('rol_sistema', 'consulta', 'Solo lectura autorizada', 50, true)
on conflict (catalog_type, value) do update set
  description = excluded.description,
  sort_order = excluded.sort_order,
  active = excluded.active;
