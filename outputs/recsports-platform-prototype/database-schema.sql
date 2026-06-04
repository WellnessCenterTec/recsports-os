-- Esquema inicial propuesto para RecSports OS
-- Solo considera datos minimos autorizados.

create table students_minimal (
  matricula text primary key,
  genero text not null check (genero in ('Femenino', 'Masculino', 'No especificado')),
  carrera text not null,
  semestre int check (semestre between 1 and 12),
  nivel_escolar text not null check (nivel_escolar in ('Profesional', 'Posgrado')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table app_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  nombre_operativo text,
  rol text not null check (rol in ('direccion', 'coordinador_area', 'compras', 'consulta', 'admin')),
  area text,
  activo boolean default true,
  created_at timestamptz default now()
);

create table participations (
  id uuid primary key default gen_random_uuid(),
  matricula text not null references students_minimal(matricula),
  area text not null,
  periodo text not null,
  fecha date,
  estatus text not null,
  operacion text,
  source_module text,
  created_by uuid references app_users(id),
  created_at timestamptz default now()
);

create table classes (
  id uuid primary key default gen_random_uuid(),
  periodo text not null,
  disciplina text not null,
  crn text,
  grupo text,
  cupo int,
  horario text,
  profesor_operativo text,
  activo boolean default true
);

create table events (
  id uuid primary key default gen_random_uuid(),
  area text not null,
  nombre text not null,
  clasificacion text,
  fecha date,
  meta int,
  evento_insignia boolean default false
);

create table tournaments (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  tipo text,
  rama text,
  periodo text not null,
  estatus text default 'Activo'
);

create table teams (
  id uuid primary key default gen_random_uuid(),
  tournament_id uuid references tournaments(id),
  nombre text not null,
  rama text
);

create table purchases (
  id uuid primary key default gen_random_uuid(),
  area text not null,
  concepto text not null,
  proveedor text,
  monto numeric(12,2) not null,
  estatus text not null,
  fecha_requerida date,
  created_at timestamptz default now()
);

create table collaborators (
  nomina text primary key,
  nombre_completo text not null,
  puesto text,
  coordinador text,
  porcentaje_cursos numeric(5,2),
  meta_porcentaje numeric(5,2),
  playera_joma text,
  talla_pants text,
  correo_institucional text,
  fecha_cumpleanos text,
  genero text,
  evento_chipinque boolean,
  evento_cozumelito boolean,
  primeros_auxilios boolean,
  asistencia_gimnasio numeric(8,4),
  contacto_emergencia_1 text,
  numero_emergencia_1 text,
  contacto_emergencia_2 text,
  numero_emergencia_2 text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table collaborator_physical_tests (
  id uuid primary key default gen_random_uuid(),
  nomina text,
  correo text,
  nombre_registro text,
  fecha timestamptz,
  cooper numeric(8,2),
  abdominales numeric(8,2),
  lagartijas numeric(8,2),
  saltos_cuerda numeric(8,2),
  wall_ball numeric(8,2),
  row_cal numeric(8,2),
  remo_suspendido numeric(8,2)
);

create table collaborator_contract_layouts (
  id uuid primary key default gen_random_uuid(),
  periodo text,
  tipo_movimiento text,
  nivel_materia text,
  campus text,
  departamento text,
  clave_materia text,
  nombre_materia text,
  nomina_lider text,
  nombre_lider text,
  horas_semana numeric(8,2),
  semanas_duracion numeric(8,2),
  nomina text,
  nombre_profesor text,
  fecha_inicio text,
  fecha_termino text,
  crn text,
  pago_por_hora numeric(12,2),
  sueldo_total numeric(12,2),
  sueldo_mensual numeric(12,2)
);

create table audit_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references app_users(id),
  accion text not null,
  entidad text not null,
  entidad_id text,
  area text,
  detalle text,
  ip_address text,
  created_at timestamptz default now()
);

create table import_jobs (
  id uuid primary key default gen_random_uuid(),
  source_name text not null,
  module text not null,
  status text not null check (status in ('pendiente', 'validando', 'aprobado', 'importado', 'rechazado')),
  allowed_fields text[],
  total_rows int default 0,
  valid_rows int default 0,
  invalid_rows int default 0,
  created_by uuid references app_users(id),
  created_at timestamptz default now(),
  completed_at timestamptz
);

create table import_errors (
  id uuid primary key default gen_random_uuid(),
  import_job_id uuid references import_jobs(id),
  row_number int,
  field_name text,
  error_message text not null,
  created_at timestamptz default now()
);

create table data_validation_rules (
  id uuid primary key default gen_random_uuid(),
  module text not null,
  field_name text not null,
  rule_description text not null,
  active boolean default true,
  created_at timestamptz default now()
);

create table system_alerts (
  id uuid primary key default gen_random_uuid(),
  priority text not null check (priority in ('alta', 'media', 'baja')),
  module text not null,
  message text not null,
  status text not null default 'abierta',
  responsible_user_id uuid references app_users(id),
  created_at timestamptz default now(),
  closed_at timestamptz
);

create index idx_participations_area_periodo on participations(area, periodo);
create index idx_participations_matricula on participations(matricula);
create index idx_participations_fecha on participations(fecha);
create index idx_collaborators_coordinador on collaborators(coordinador);
create index idx_contract_layouts_nomina on collaborator_contract_layouts(nomina);
create index idx_import_jobs_status on import_jobs(status);
create index idx_import_errors_job on import_errors(import_job_id);
create index idx_system_alerts_status on system_alerts(status, priority);
