const areas = [
  {
    id: "general",
    name: "Reporte General",
    tone: "blue",
    source: "Reporte final, Reporte Automatizado, Sofi 2",
    capture: ["Periodo", "Matrícula", "Género", "Carrera", "Semestre", "Nivel escolar", "Área de participación"],
    indicators: ["Alumnos únicos impactados", "Registros por servicio", "Participación cruzada", "Distribución por carrera", "Distribución por nivel", "Retención global"],
    charts: ["Embudo de participación", "Participación por área", "Mapa de calor por semana", "Distribución por perfil académico"],
    reports: ["Resumen ejecutivo PDF", "Base agregada Excel", "Cruce de participación por área"]
  },
  {
    id: "clases",
    name: "Clases Deportivas",
    tone: "green",
    source: "Programacion Clases, CD Lista de Alumnos, CD Indicadores clases",
    capture: ["Matrícula", "Disciplina", "CRN", "Grupo", "Calificación/estatus", "Periodo"],
    indicators: ["Inscritos Banner", "Bajas", "NP", "Acreditados", "Ocupación", "Alumnos únicos"],
    charts: ["Acreditados vs bajas", "Ocupación por disciplina", "Género por disciplina"],
    reports: ["Lista por disciplina", "Reporte de acreditación", "Ocupación por horario"]
  },
  {
    id: "gimnasio",
    name: "Gimnasio",
    tone: "gold",
    source: "Gym Indicadores, Gym Lista de Alumnos",
    capture: ["Matrícula", "Fecha de acceso", "Sede", "Tipo de servicio", "Periodo"],
    indicators: ["Accesos diarios", "Accesos semanales", "Matrículas únicas", "Frecuencia promedio", "EMIS"],
    charts: ["Trafico por dia", "Semanas con mayor uso", "Profesional vs Posgrado"],
    reports: ["Bitacora de accesos", "Reporte semanal de asistencia", "Export de usuarios unicos"]
  },
  {
    id: "intramuros",
    name: "Intramuros",
    tone: "red",
    source: "Intra Indicadores LiFE, Intra Lista de Alumnos, Intra Jornadas",
    capture: ["Matrícula", "Torneo", "Equipo", "Rama", "Jornada", "Estatus"],
    indicators: ["Equipos inscritos", "Alumnos por torneo", "Juegos programados", "Juegos por default", "Retencion", "Bajas"],
    charts: ["Retencion por torneo", "Equipos por rama", "Juegos realizados vs default"],
    reports: ["Rol de jornadas", "Cedula de equipos", "Reporte de retencion"]
  },
  {
    id: "vivencia",
    name: "Vivencia",
    tone: "lav",
    source: "Vivencia Fechas, Vivencia Lista de Alumnos",
    capture: ["Matrícula", "Evento", "Fecha", "Clasificación", "Meta", "Asistencia"],
    indicators: ["Eventos realizados", "Participantes", "Cumplimiento de meta", "Hombres/Mujeres", "Eventos insignia"],
    charts: ["Meta vs asistencia", "Eventos por clasificacion", "Participacion por semestre"],
    reports: ["Calendario de eventos", "Reporte de cumplimiento", "Lista agregada por evento"]
  },
  {
    id: "semana-tec",
    name: "Semana Tec",
    tone: "blue",
    source: "Lista de alumnos Semana Tec",
    capture: ["Matrícula", "Clave de materia", "Materia", "CRN", "Grupo", "Profesor", "Calificación", "Programa", "Género", "Semestre"],
    indicators: ["Alumnos únicos", "Grupos", "Profesores", "Carga por profesor", "Distribución por género", "Calificaciones capturadas"],
    charts: ["Alumnos por profesor", "Alumnos por grupo", "Distribución por programa", "Distribución por semestre"],
    reports: ["Resumen Semana 6", "Resumen Semana 12", "Calificaciones por grupo"]
  },
  {
    id: "comunicacion",
    name: "Comunicación",
    tone: "blue",
    source: "Infografia Wellness LIVE, Servicios e inscritos",
    capture: ["Campaña", "Canal", "Área", "Periodo", "Alcance", "Clics", "Conversiones"],
    indicators: ["Alcance", "Conversión a registro", "Servicios promovidos", "Participación atribuida"],
    charts: ["Conversión por canal", "Impacto por área", "Tendencia de campañas"],
    reports: ["Reporte de campañas", "Conversión por área", "Resumen para dirección"]
  },
  {
    id: "representativos",
    name: "Representativos",
    tone: "green",
    source: "Lista vigente de alumnos de Representativos",
    capture: ["Matrícula", "Clave de la materia", "Representativo", "Coach", "Programa", "Género", "Semestre"],
    indicators: ["Alumnos únicos", "Representativos", "Coaches", "Distribución por programa", "Distribución por semestre"],
    charts: ["Alumnos por coach", "Top de programas", "Participación por semestre"],
    reports: ["Resumen por representativo", "Cobertura por coach", "Matrículas no encontradas"]
  },
  {
    id: "colaboradores",
    name: "Colaboradores",
    tone: "blue",
    source: "Uniformes, Evaluaciones Físicas, Gimnasio, Historial de profesores, layouts AD26 y Verano26",
    capture: ["Nómina", "Colaborador", "Puesto", "Coordinador", "Talla playera", "Talla pants", "Correo", "Cumpleaños", "Género", "Primeros auxilios", "Contacto de emergencia"],
    indicators: ["Colaboradores registrados", "Uniformes por talla", "Cursos completados", "Primeros auxilios", "Asistencia a gimnasio", "Contratos por layout"],
    charts: ["Tallas de playera", "Cursos por coordinador", "Primeros auxilios", "Asistencia a gimnasio", "Costo de contratos"],
    reports: ["Directorio de colaboradores", "Reporte de uniformes", "Evaluaciones Físicas", "Layouts de contratacion"]
  },
  {
    id: "compras",
    name: "Compras y Presupuesto",
    tone: "gold",
    source: "Uniformes, Elisa, controles presupuestales propuestos",
    capture: ["Solicitud", "Area", "Proveedor", "Monto", "Estatus", "Fecha requerida"],
    indicators: ["Presupuesto ejercido", "Comprometido", "Disponible", "Ordenes pendientes", "Costo por participante"],
    charts: ["Gasto por area", "Presupuesto vs real", "Estatus de compras"],
    reports: ["Solicitudes por area", "Presupuesto mensual", "Ordenes de compra"]
  },
  {
    id: "presentacion",
    name: "Presentación Ejecutiva",
    tone: "blue",
    source: "Indicadores y módulos activos de WellSync",
    capture: ["Semana", "Puntos prioritarios", "Temas", "Acuerdos", "Observaciones", "Pendientes"],
    indicators: ["Resumen ejecutivo", "Planeación", "Presupuesto", "Equipo", "Horarios"],
    charts: ["Indicadores generales", "Evolución operativa", "Agenda semanal"],
    reports: ["Junta semanal", "PDF ejecutivo", "PowerPoint preparado"]
  },
  {
    id: "configuracion",
    name: "Configuración",
    tone: "blue",
    source: "Administracion del sistema",
    capture: ["Usuario", "Rol", "Area", "Permiso", "Catalogo", "Estado"],
    indicators: ["Usuarios activos", "Roles configurados", "Catalogos activos", "Importaciones pendientes", "Politicas de datos"],
    charts: ["Usuarios por rol", "Permisos por modulo", "Estado de importaciones"],
    reports: ["Matriz de permisos", "Catalogos del sistema", "Bitacora de auditoria"]
  }
];

const classTeacherPerformance = [
  { teacher: "Adrian Guadalupe Torres Sandoval", total: 312, approved: 251, failed: 61, approvedRate: 80, failedRate: 20 },
  { teacher: "Arturo Yared Nájera Núñez", total: 60, approved: 46, failed: 14, approvedRate: 77, failedRate: 23 },
  { teacher: "Esteban Pérez Martínez", total: 360, approved: 264, failed: 96, approvedRate: 73, failedRate: 27 },
  { teacher: "Ventura Guadalupe Vázquez González", total: 359, approved: 257, failed: 102, approvedRate: 72, failedRate: 28 },
  { teacher: "Hugo Sánchez Medina", total: 304, approved: 216, failed: 88, approvedRate: 71, failedRate: 29 },
  { teacher: "Perla Limón Moreno", total: 240, approved: 171, failed: 69, approvedRate: 71, failedRate: 29 },
  { teacher: "Milton Andres Páez Navarro", total: 160, approved: 114, failed: 46, approvedRate: 71, failedRate: 29 },
  { teacher: "Kevin Antonio Ruíz García", total: 208, approved: 145, failed: 63, approvedRate: 70, failedRate: 30 },
  { teacher: "Omar Alejandro Ruiz Garibay", total: 61, approved: 43, failed: 18, approvedRate: 70, failedRate: 30 },
  { teacher: "Miguel Angel Carranza Sauceda", total: 207, approved: 137, failed: 70, approvedRate: 66, failedRate: 34 },
  { teacher: "Carolina Esquivel Morales", total: 341, approved: 220, failed: 121, approvedRate: 65, failedRate: 35 },
  { teacher: "Ameyalli Rocha Espinoza", total: 359, approved: 222, failed: 137, approvedRate: 62, failedRate: 38 },
  { teacher: "Arturo Mario Najera Balleza", total: 239, approved: 149, failed: 90, approvedRate: 62, failedRate: 38 },
  { teacher: "Jose de Jesus Castillo Ortiz", total: 160, approved: 100, failed: 60, approvedRate: 62, failedRate: 38 },
  { teacher: "Víctor Antonio Paz Villalobos", total: 120, approved: 73, failed: 47, approvedRate: 61, failedRate: 39 },
  { teacher: "Alicia Domínguez Rodríguez", total: 208, approved: 125, failed: 83, approvedRate: 60, failedRate: 40 },
  { teacher: "Yara Lisania Lira Martínez", total: 329, approved: 195, failed: 134, approvedRate: 59, failedRate: 41 },
  { teacher: "María Teresa Medrano Reyes", total: 199, approved: 114, failed: 85, approvedRate: 57, failedRate: 43 },
  { teacher: "Yulian Valdez Ramírez", total: 209, approved: 114, failed: 95, approvedRate: 55, failedRate: 45 },
  { teacher: "Yveth Marion González Eguren", total: 260, approved: 140, failed: 120, approvedRate: 54, failedRate: 46 },
  { teacher: "Narda Dominick Lopez Copado", total: 110, approved: 57, failed: 53, approvedRate: 52, failedRate: 48 },
  { teacher: "Martha Hernández Hernández", total: 64, approved: 31, failed: 33, approvedRate: 48, failedRate: 52 },
  { teacher: "Cecilia Estefanía Valdez Palacios", total: 37, approved: 17, failed: 20, approvedRate: 46, failedRate: 54 },
  { teacher: "Josue Fernando Silguero Urquiza", total: 360, approved: 161, failed: 199, approvedRate: 45, failedRate: 55 }
];

const classDisciplineIndicators = [
  { period: "PMT1", discipline: "Acondicionamiento físico PMT1", banner: 30, bajas: 5, np: 7, finished: 18 },
  { period: "PMT1", discipline: "Artes Marciales PMT1", banner: 30, bajas: 4, np: 6, finished: 20 },
  { period: "PMT1", discipline: "Basquetbol Femenil PMT1", banner: 27, bajas: 4, np: 0, finished: 23 },
  { period: "PMT1", discipline: "Basquetbol Varonil PMT1", banner: 28, bajas: 4, np: 0, finished: 24 },
  { period: "PMT1", discipline: "Box PMT1", banner: 329, bajas: 40, np: 41, finished: 248 },
  { period: "PMT1", discipline: "Ciclismo PMT1", banner: 244, bajas: 45, np: 20, finished: 179 },
  { period: "PMT1", discipline: "Cross training PMT1", banner: 180, bajas: 15, np: 16, finished: 149 },
  { period: "PMT1", discipline: "Escala Deportiva PMT1", banner: 192, bajas: 20, np: 21, finished: 151 },
  { period: "PMT1", discipline: "Fitness PMT1", banner: 130, bajas: 18, np: 16, finished: 96 },
  { period: "PMT1", discipline: "Fútbol rápido femenil PMT1", banner: 30, bajas: 2, np: 0, finished: 28 },
  { period: "PMT1", discipline: "Fútbol rápido varonil PMT1", banner: 30, bajas: 4, np: 0, finished: 26 },
  { period: "PMT1", discipline: "Fútbol soccer femenil PMT1", banner: 32, bajas: 6, np: 1, finished: 25 },
  { period: "PMT1", discipline: "Fútbol soccer varonil PMT1", banner: 32, bajas: 6, np: 0, finished: 26 },
  { period: "PMT1", discipline: "Natación PMT1", banner: 547, bajas: 41, np: 42, finished: 464 },
  { period: "PMT1", discipline: "Tenis PMT1", banner: 417, bajas: 37, np: 36, finished: 344 },
  { period: "PMT1", discipline: "Voleibol femenil PMT1", banner: 30, bajas: 1, np: 0, finished: 29 },
  { period: "PMT1", discipline: "Voleibol varonil PMT1", banner: 30, bajas: 0, np: 0, finished: 30 },
  { period: "PMT1", discipline: "Yoga PMT1", banner: 247, bajas: 28, np: 22, finished: 197 },
  { period: "PMT1", discipline: "Totales Periodo 1", banner: 2585, bajas: 280, np: 228, finished: 2077, total: true },
  { period: "PMT2", discipline: "Acondicionamiento físico PMT2", banner: 30, bajas: 4, np: 9, finished: 17 },
  { period: "PMT2", discipline: "Artes Marciales PMT2", banner: 30, bajas: 6, np: 7, finished: 17 },
  { period: "PMT2", discipline: "Basquetbol Femenil PMT2", banner: 27, bajas: 7, np: 7, finished: 13 },
  { period: "PMT2", discipline: "Basquetbol Varonil PMT2", banner: 28, bajas: 5, np: 4, finished: 19 },
  { period: "PMT2", discipline: "Box PMT2", banner: 330, bajas: 62, np: 68, finished: 200 },
  { period: "PMT2", discipline: "Ciclismo PMT2", banner: 244, bajas: 53, np: 43, finished: 148 },
  { period: "PMT2", discipline: "Cross training PMT2", banner: 180, bajas: 32, np: 33, finished: 115 },
  { period: "PMT2", discipline: "Escala Deportiva PMT2", banner: 131, bajas: 34, np: 18, finished: 79 },
  { period: "PMT2", discipline: "Fitness PMT2", banner: 192, bajas: 27, np: 28, finished: 137 },
  { period: "PMT2", discipline: "Fútbol rápido femenil PMT2", banner: 30, bajas: 10, np: 3, finished: 17 },
  { period: "PMT2", discipline: "Fútbol rápido varonil PMT2", banner: 30, bajas: 6, np: 5, finished: 19 },
  { period: "PMT2", discipline: "Fútbol soccer varonil PMT2", banner: 64, bajas: 7, np: 0, finished: 57 },
  { period: "PMT2", discipline: "Fútbol soccer femenil PMT2", banner: 32, bajas: 4, np: 7, finished: 21 },
  { period: "PMT2", discipline: "Natación PMT2", banner: 577, bajas: 89, np: 80, finished: 408 },
  { period: "PMT2", discipline: "Tenis PMT2", banner: 415, bajas: 69, np: 81, finished: 265 },
  { period: "PMT2", discipline: "Voleibol femenil PMT2", banner: 31, bajas: 6, np: 4, finished: 21 },
  { period: "PMT2", discipline: "Voleibol varonil PMT2", banner: 30, bajas: 4, np: 4, finished: 22 },
  { period: "PMT2", discipline: "Yoga PMT2", banner: 248, bajas: 48, np: 39, finished: 161 },
  { period: "PMT2", discipline: "Totales Periodo 2", banner: 2649, bajas: 473, np: 440, finished: 1736, total: true }
];

const careers = ["ITC", "LAF", "LIN", "MC", "LNB", "ARQ", "IMT", "LAE", "MNA", "DCA"];
const genders = ["Femenino", "Masculino", "No especificado"];
const levels = ["Profesional", "Posgrado"];
const activities = ["clases", "gimnasio", "intramuros", "vivencia"];
const STORAGE_KEY = "recsports_os_local_captures";
const SCHEDULE_KEY = "recsports_os_class_schedules";
const CLASS_BOOKING_RESERVATIONS_KEY = "wellsync_class_booking_reservations";
const SIMULATOR_KEY = "recsports_os_schedule_simulator";
const CLASS_SIMULATOR_KEY = "wellsync_spinning_fitness_simulator";
const CLASS_SCHEDULE_SNAPSHOT_KEY = "wellsync_class_schedule_snapshot";
const BUDGET_AREAS_KEY = "wellsync_budget_areas";
const BUDGET_REQUESTS_KEY = "wellsync_budget_requests";
const INTRAMUROS_OPERATION_KEY = "wellsync_intramuros_omar_workspace";
const THEME_KEY = "recsports_os_theme";
const SESSION_KEY = "recsports_os_session";
const AUDIT_KEY = "recsports_os_audit_log";
const UNIFORMES_DATA_URL = "./uniformes-data.json";
const CLASS_GRADES_DATA_URL = "./class-grades-data.json";
const PLANNING_SEMESTRAL_CSV_URL = "https://docs.google.com/spreadsheets/d/1DL1GIPjzqPqXlJWlnWlAOWEiMJM9tPqknT6M4HCXEHM/gviz/tq?tqx=out:csv&sheet=Respuestas%20de%20formulario%201";
const PLANNING_SEMESTRAL_DATA_URL = "./planning-semestral-data.json";
const BASE_COLLABORATOR_COLUMNS = [
  "Nomina",
  "Colaboradores",
  "Puesto",
  "Coordinador",
  "% de cursos",
  "Playeras Joma",
  "Talla pants",
  "correo institucional",
  "Fecha cumpleaños",
  "Genero",
  "Disciplina",
  "Primeros auxilios"
];
const COLLABORATOR_WEEK_COLUMNS = ["Destacados", "En Desarrollo"];
const SEMESTER_WEEK_OPTIONS = Array.from({ length: 20 }, (_, index) => `S${index + 1}`);
const SUPABASE_ENV = window.RECSPORTS_ENV || {};
const supabaseClient = window.supabase && SUPABASE_ENV.SUPABASE_URL && SUPABASE_ENV.SUPABASE_ANON_KEY
  ? window.supabase.createClient(SUPABASE_ENV.SUPABASE_URL, SUPABASE_ENV.SUPABASE_ANON_KEY)
  : null;
const scheduleDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const scheduleHours = Array.from({ length: 16 }, (_, index) => `${String(6 + index).padStart(2, "0")}:00`);
const classSimulatorDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
const classSimulatorAreas = ["Spinning", "Fitness"];
const classSimulatorTimes = Array.from({ length: 25 }, (_, index) => {
  const totalMinutes = 8 * 60 + index * 30;
  return minutesToTime(totalMinutes);
});
const knownInstallations = [
  "Sala Fitness", "Arena Wellness 2", "Artes Marciales", "Sala de Spinning", "Sala CrossFit",
  "Muro de Escalada", "Cancha de Soccer", "Alberca", "Canchas de Tenis", "Sala Yoga",
  "Sala Multiusos EMIS", "Fitness", "Ciclismo", "Yoga", "Taekwondo", "Croata",
  "Box", "Wellness", "CrossFit", "Muro", "Sala Wellness"
];
const sampleOfficialSchedule = [
  { source: "official", professor: "Josue Fernando Silguero Urquiza", discipline: "Natacion PMT1", day: "Lunes", start: "07:00", end: "09:00", installation: "Alberca", frequency: "Semanal", group: "101", rowNumber: 2 },
  { source: "official", professor: "Carolina Esquivel Morales", discipline: "Yoga PMT1", day: "Martes", start: "09:00", end: "11:00", installation: "Sala Yoga", frequency: "Semanal", group: "204", rowNumber: 3 },
  { source: "official", professor: "Adrian Guadalupe Torres Sandoval", discipline: "Fitness PMT1", day: "Miercoles", start: "12:00", end: "14:00", installation: "Sala Fitness", frequency: "Semanal", group: "305", rowNumber: 4 },
  { source: "official", professor: "Perla Limon Moreno", discipline: "Ciclismo indoor PMT1", day: "Jueves", start: "16:00", end: "18:00", installation: "Sala de Spinning", frequency: "Semanal", group: "107", rowNumber: 5 }
];
const sampleBookingSchedule = [
  { source: "booking", professor: "Josue Fernando Silguero Urquiza", discipline: "Entrenamiento libre PMT1", day: "Lunes", start: "10:00", end: "12:00", installation: "Sala Fitness", frequency: "Semanal", group: "", rowNumber: 2 },
  { source: "booking", professor: "Carolina Esquivel Morales", discipline: "Sesion bienestar PMT1", day: "Martes", start: "11:00", end: "12:00", installation: "Sala Yoga", frequency: "Semanal", group: "", rowNumber: 3 },
  { source: "booking", professor: "Adrian Guadalupe Torres Sandoval", discipline: "Reserva equipo PMT1", day: "Miercoles", start: "13:00", end: "15:00", installation: "Sala Fitness", frequency: "Semanal", group: "", rowNumber: 4 },
  { source: "booking", professor: "Perla Limon Moreno", discipline: "Clase especial PMT1", day: "Sabado", start: "08:00", end: "10:00", installation: "Croata", frequency: "Semanal", group: "", rowNumber: 5 }
];
const submenus = ["Dashboard", "Captura", "Participantes", "Calendario", "Indicadores", "Reportes", "Configuración"];
const roleMatrix = [
  ["Dirección Deportiva", "Todo el sistema", "Lectura global, descarga ejecutiva, aprobaciones y auditoría"],
  ["Coordinador de área", "Su área", "Alta, edición y consulta de capturas propias"],
  ["Compras y Presupuesto", "Compras, uniformes y presupuesto", "Gestión financiera y lectura de necesidades por área"],
  ["Consulta", "Dashboards agregados", "Solo lectura sin descargas nominales"]
];
const importPlan = [
  ["Indicadores", "Solo datos permitidos de alumnos", "Pendiente depuracion"],
  ["Uniformes", "Informacion completa autorizada", "Cargado en prototipo"],
  ["Catalogos", "Areas, carreras, periodos, disciplinas", "Base inicial"],
  ["Compras", "Presupuesto y solicitudes", "Pendiente definicion"]
];
const validationRules = [
  ["Alumnos", "Matricula", "Debe iniciar con A0 y no contener nombre ni correo"],
  ["Alumnos", "Genero", "Solo valores normalizados: Femenino, Masculino, No especificado"],
  ["Alumnos", "Carrera", "Debe existir en catalogo de carreras"],
  ["Alumnos", "Semestre", "Numero entre 1 y 12"],
  ["Alumnos", "Nivel escolar", "Profesional o Posgrado"],
  ["Colaboradores", "Nómina", "Debe iniciar con L0 o registrar excepción operativa"],
  ["Colaboradores", "Uniforme", "Tallas normalizadas para playera y pants"],
  ["Compras", "Monto", "Numero positivo y asociado a area"]
];
const migrationBacklog = [
  ["Alta", "Separar datos sensibles de Historial Clínico antes de cualquier importación", "Pendiente"],
  ["Alta", "Definir catálogo oficial de disciplinas, torneos y eventos", "Pendiente"],
  ["Media", "Homologar nombres de estatus: activo, baja, NP, acreditado", "En diseño"],
  ["Media", "Revisar duplicados por matrícula y periodo", "Pendiente"],
  ["Baja", "Definir etiquetas visuales por módulo", "Base creada"]
];
const alertRules = [
  ["Alta", "Migración", "Historial clínico no debe importarse hasta separar datos sensibles"],
  ["Alta", "Catálogos", "Falta cerrar catálogo oficial de disciplinas, torneos y eventos"],
  ["Media", "Colaboradores", "Revisar colaboradores sin primeros auxilios"],
  ["Media", "Importación", "Normalizar estatus antes de carga masiva"],
  ["Baja", "Diseño", "Definir iconos finales por módulo"]
];
const roadmapItems = [
  ["Fase 1", "Piloto web inicial", "Dirección Deportiva", "Completado", "Validar módulos, permisos, colaboradores, configuración y alertas"],
  ["Fase 2", "Base técnica Next.js", "Producto / TI", "En progreso", "Instalar dependencias, ejecutar app Next y ordenar componentes"],
  ["Fase 3", "Supabase", "TI / Administrador", "Pendiente", "Crear proyecto, tablas, roles, RLS y variables de entorno"],
  ["Fase 4", "Migración controlada", "Dirección / Coordinadores", "Pendiente", "Depurar Indicadores, importar Uniformes, cerrar catálogos"],
  ["Fase 5", "Dashboards reales", "Producto", "Pendiente", "Reemplazar datos simulados por consultas a PostgreSQL"],
  ["Fase 6", "Piloto operativo", "Coordinadores", "Pendiente", "Probar captura real por área durante un periodo corto"],
  ["Fase 7", "Vercel privado", "TI", "Pendiente", "Publicar entorno protegido para pruebas internas"],
  ["Fase 8", "Liberación", "Dirección Deportiva", "Pendiente", "Capacitación, soporte y gobierno de datos"]
];
const scheduledReports = [
  ["Ejecutivo general", "Resumen ejecutivo direccion", "PDF", "Semanal", "Direccion Deportiva", "Disenado"],
  ["Ejecutivo general", "Base agregada de participacion", "Excel", "Mensual", "Direccion Deportiva", "Disenado"],
  ["Clases Deportivas", "Acreditacion por disciplina", "Excel", "Por periodo", "Coord. Clases Deportivas", "Pendiente"],
  ["Gimnasio", "Asistencia semanal", "PDF/Excel", "Semanal", "Coord. Gimnasio", "Pendiente"],
  ["Intramuros", "Retencion y jornadas", "PDF", "Quincenal", "Coord. Intramuros", "Pendiente"],
  ["Vivencia", "Cumplimiento de eventos", "PDF", "Mensual", "Coord. Vivencia", "Pendiente"],
  ["Colaboradores", "Uniformes y cursos", "Excel", "Mensual", "Coord. Colaboradores", "En prototipo"],
  ["Compras y Presupuesto", "Presupuesto ejercido", "PDF/Excel", "Mensual", "Compras", "Pendiente"],
  ["Configuracion", "Matriz de permisos y auditoria", "Excel", "Bajo demanda", "Direccion Deportiva", "En prototipo"]
];
const CONFIG_LINKS_KEY = "wellsync_config_links";
let configLinkEditingId = "";
const dataModelEntities = [
  ["students_minimal", "Alumnos", "Matricula, genero, carrera, semestre, nivel escolar", "Media", "Base de segmentacion permitida"],
  ["participations", "Todos los modulos de alumnos", "Matricula, area, periodo, fecha, estatus, operacion", "Media", "Registro transaccional de participacion"],
  ["classes", "Clases Deportivas", "Disciplina, CRN, grupo, cupo, horario", "Baja", "Oferta academico-deportiva"],
  ["events", "Vivencia / Comunicacion", "Evento, fecha, meta, clasificacion", "Baja", "Eventos y activaciones"],
  ["tournaments", "Intramuros", "Torneo, tipo, rama, periodo, estatus", "Baja", "Competencias internas"],
  ["collaborators", "Colaboradores", "Nomina, nombre, contacto, uniformes, cursos", "Alta", "Informacion completa autorizada"],
  ["collaborator_physical_tests", "Colaboradores", "Evaluaciones Físicas y asistencia", "Alta", "Seguimiento interno autorizado"],
  ["purchases", "Compras y Presupuesto", "Area, concepto, proveedor, monto, estatus", "Media", "Gestion financiera"],
  ["app_users", "Sistema", "Usuario, rol, area, activo", "Alta", "Control de acceso"],
  ["audit_log", "Sistema", "Usuario, accion, entidad, fecha", "Media", "Trazabilidad"],
  ["import_jobs", "Sistema", "Fuente, modulo, estado, filas validas", "Media", "Control de migraciones"],
  ["system_alerts", "Direccion", "Prioridad, modulo, mensaje, estado", "Baja", "Seguimiento ejecutivo"],
  ["system_catalogs", "Sistema", "Tipo, valor, descripcion, activo", "Baja", "Normalizacion de captura"],
  ["scheduled_reports", "Sistema", "Reporte, formato, frecuencia, responsable", "Baja", "Gobierno de reportes"]
];
const dataRelationships = [
  ["students_minimal", "participations", "matricula"],
  ["app_users", "audit_log", "user_id"],
  ["app_users", "import_jobs", "created_by"],
  ["import_jobs", "import_errors", "import_job_id"],
  ["tournaments", "teams", "tournament_id"],
  ["collaborators", "collaborator_contract_layouts", "nomina"],
  ["system_catalogs", "formularios", "catalog_type/value"],
  ["scheduled_reports", "exports", "report_id"]
];
const dbTables = [
  "students_minimal(matricula, genero, carrera, semestre, nivel)",
  "participations(id, matricula, area, periodo, estatus, fecha)",
  "classes(id, disciplina, crn, grupo, cupo, horario)",
  "events(id, area, nombre, fecha, meta, clasificacion)",
  "tournaments(id, torneo, rama, equipo, jornada, resultado)",
  "purchases(id, area, proveedor, monto, estatus)",
  "audit_log(id, usuario, accion, fecha)"
];

const demoUsers = [
  { id: "dir", name: "Direccion Deportiva", role: "direccion", area: "general", label: "Direccion Deportiva" },
  { id: "maestro-clases", name: "Maestro de Clases Deportivas", role: "maestro", area: "clases", label: "Clases Deportivas" }
];

function getSystemCatalogs() {
  return {
    Periodos: ["AD26", "FJ26", "IN26"],
    Areas: areas.filter((area) => !["general", "configuracion"].includes(area.id)).map((area) => area.name),
    Carreras: careers,
    "Estatus alumnos": ["Activo", "Asistio", "No asistio", "Baja", "Acreditado", "NP"],
    "Estatus sistema": ["Pendiente", "En progreso", "Completado", "Rechazado", "Archivado"],
    Generos: ["Femenino", "Masculino", "No especificado"],
    "Nivel escolar": ["Profesional", "Posgrado"],
    "Tallas uniforme": ["XS", "S", "M", "L", "XL", "XXL", "Sin dato"],
    Roles: demoUsers.map((user) => user.name),
    "Tipos de fuente": ["Indicadores", "Uniformes", "Catalogos", "Compras", "Captura manual"]
  };
}

const students = Array.from({ length: 180 }, (_, i) => ({
  matricula: `A0${String(840000 + i * 37).slice(0, 7)}`,
  genero: genders[i % genders.length],
  carrera: careers[i % careers.length],
  semestre: (i % 10) + 1,
  nivel: i % 7 === 0 ? "Posgrado" : "Profesional",
  area: activities[i % activities.length],
  registros: 1 + (i % 5),
  acreditado: i % 6 !== 0,
  baja: i % 11 === 0
}));

const GYM_DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const budgetFilters = { period: "AD26", area: "todos", status: "todos" };
let budgetPeriods = ["AD26"];
let budgetPeriodFormOpen = false;

const BUDGET_VISIBLE_AREAS = [
  { key: "clases", label: "Clases Deportivas", owner: "Coordinación Clases", icon: "activity" },
  { key: "gimnasio", label: "Gimnasio", owner: "Coordinación Gimnasio", icon: "dumbbell" },
  { key: "intramuros", label: "Intramuros", owner: "Coordinación Intramuros", icon: "trophy" },
  { key: "vivencia", label: "Vivencia", owner: "Coordinación Vivencia", icon: "users" },
  { key: "comunicacion", label: "Comunicación", owner: "Coordinación Comunicación", icon: "megaphone" },
  { key: "direccion", label: "Dirección", owner: "Dirección Deportiva", icon: "briefcase-business" }
];

const defaultBudgetAreas = [
  { area: "clases", assigned: 820000, owner: "Coordinación Clases", threshold: 78 },
  { area: "gimnasio", assigned: 1180000, owner: "Coordinación Gimnasio", threshold: 82 },
  { area: "intramuros", assigned: 640000, owner: "Coordinación Intramuros", threshold: 76 },
  { area: "vivencia", assigned: 520000, owner: "Coordinación Vivencia", threshold: 70 },
  { area: "comunicacion", assigned: 0, owner: "Coordinación Comunicación", threshold: 80 },
  { area: "direccion", assigned: 0, owner: "Dirección Deportiva", threshold: 80 }
];

const defaultBudgetRequests = [
  { id: "P-001", period: "AD26", date: "2026-08-05", area: "clases", concept: "Material funcional para clases PMT1", provider: "Deportes MX", amount: 118500, status: "autorizado", priority: "Alta", type: "Equipamiento" },
  { id: "P-002", period: "AD26", date: "2026-08-09", area: "gimnasio", concept: "Mantenimiento preventivo de caminadoras", provider: "Fitness Service", amount: 215000, status: "comprometido", priority: "Alta", type: "Mantenimiento" },
  { id: "P-003", period: "AD26", date: "2026-08-12", area: "intramuros", concept: "Arbitraje y operación de torneos", provider: "Liga Operativa", amount: 146000, status: "pendiente", priority: "Media", type: "Servicio" },
  { id: "P-004", period: "AD26", date: "2026-08-14", area: "vivencia", concept: "Activación de bienvenida", provider: "Eventos Campus", amount: 98500, status: "ejercido", priority: "Media", type: "Evento" },
  { id: "P-005", period: "AD26", date: "2026-08-18", area: "representativos", concept: "Uniformes competencia nacional", provider: "Uniformes Norte", amount: 330000, status: "comprometido", priority: "Alta", type: "Uniformes" },
  { id: "P-006", period: "AD26", date: "2026-08-21", area: "gamer", concept: "Periféricos para torneo interno", provider: "Tech Arena", amount: 64000, status: "pendiente", priority: "Baja", type: "Equipamiento" },
  { id: "P-007", period: "AD26", date: "2026-08-25", area: "colaboradores", concept: "Capacitación primeros auxilios", provider: "Safety Pro", amount: 72500, status: "ejercido", priority: "Alta", type: "Capacitación" },
  { id: "P-008", period: "AD26", date: "2026-09-02", area: "clases", concept: "Reposición de material de yoga", provider: "Wellness Supply", amount: 46000, status: "rechazado", priority: "Baja", type: "Material" },
  { id: "P-009", period: "AD26", date: "2026-09-06", area: "gimnasio", concept: "Kit de limpieza especializada", provider: "Facility Clean", amount: 38500, status: "ejercido", priority: "Media", type: "Insumos" },
  { id: "P-010", period: "AD26", date: "2026-09-10", area: "vivencia", concept: "Premiación eventos insignia", provider: "Reconocimientos MTY", amount: 54500, status: "autorizado", priority: "Media", type: "Reconocimientos" }
];

const PHYSICAL_HALL_TESTS = [
  {
    id: "cooper_12m",
    icon: "🏃",
    test: "Cooper 12 min",
    capacity: "Resistencia cardiovascular"
  },
  {
    id: "abdominales",
    icon: "💪",
    test: "Abdominales",
    capacity: "Fuerza y resistencia del core"
  },
  {
    id: "lagartijas",
    icon: "⬆",
    test: "Lagartijas",
    capacity: "Fuerza de tren superior"
  },
  {
    id: "saltos_cuerda",
    icon: "⤴",
    test: "Saltos con cuerda",
    capacity: "Coordinación y resistencia"
  },
  {
    id: "wall_ball",
    icon: "●",
    test: "Wall Ball",
    capacity: "Potencia funcional"
  },
  {
    id: "remo_distancia",
    icon: "↔",
    test: "Remo distancia",
    capacity: "Potencia y resistencia"
  }
];

let activeArea = "general";
let activeView = "dashboard";
const EXECUTIVE_PRESENTATION_STORAGE_KEY = "wellsync_executive_presentation_notes";
const EXECUTIVE_PRESENTATION_SLIDES = [
  { key: "cover", title: "Portada", icon: "presentation" },
  { key: "general-indicators", title: "Calendario escolar", icon: "calendar-days" },
  { key: "priorities", title: "Puntos prioritarios", icon: "list-checks" },
  { key: "performance", title: "Evaluación de desempeño", icon: "badge-check" },
  { key: "budget", title: "Presupuesto", icon: "wallet-cards" },
  { key: "block-activities", title: "Actividades del bloque", icon: "calendar-days" },
  { key: "inventory", title: "Bodegas / inventario", icon: "warehouse" },
  { key: "feedback", title: "Retroalimentación personal", icon: "messages-square" },
  { key: "weekly-topics", title: "Temas semanales", icon: "notebook-tabs" },
  { key: "team", title: "Equipo", icon: "users" },
  { key: "detailed-schedules", title: "Horarios detallados", icon: "calendar-clock" },
  { key: "map", title: "Mapa / distribución de espacios", icon: "map" }
];
const EXECUTIVE_PRESENTATION_EDIT_FIELDS = {
  cover: [],
  "general-indicators": [],
  priorities: [["priorities", "Puntos prioritarios", "Un punto por línea"]],
  performance: [["highlight_nominas", "Destacados", ""], ["improving_nominas", "En mejora", ""]],
  budget: [["comment_budget", "Comentario de presupuesto", "Riesgos, decisiones o contexto financiero"]],
  "block-activities": [["comment_block-activities", "Comentario del calendario", "Prioridades o cambios relevantes"]],
  inventory: [["inventory", "Bodegas e inventario", "Estado, alertas y pendientes; un punto por línea"]],
  feedback: [["feedback_deadline", "Fecha límite de retroalimentación", ""], ["feedback_records", "Seguimiento de colaboradores", ""]],
  "weekly-topics": [
    ["area_topics", "Temas por área", "Área: tema, un punto por línea"],
    ["topics", "Temas semanales", "Un tema por línea"],
    ["agreements", "Acuerdos", "Un acuerdo por línea"],
    ["pending", "Pendientes", "Un pendiente por línea"],
    ["observations", "Observaciones", "Notas generales para la junta"]
  ],
  team: [["comment_team", "Comentario del equipo", "Movimientos, reconocimientos o seguimiento"]],
  "detailed-schedules": [["comment_detailed-schedules", "Comentario de horarios detallados", "Incidencias o ajustes"]],
  map: [["map_notes", "Mapa y distribución de espacios", "Cambios, bloqueos o necesidades de espacio"]]
};
const MAX_PRESENTATION_SELECTION = 3;
let executivePresentationIndex = 0;
let executivePresentationMode = false;
let executivePresentationEditorOpen = false;
let executivePresentationEditingSlide = "priorities";
let executivePresentationCloudAvailable = true;
let executivePresentationSaving = false;
let executivePresentationNotes = loadExecutivePresentationLocalNotes();
const presentationHistoryApi = window.WellSyncPresentationHistory;
const presentationHistoryPendingStore = presentationHistoryApi.createPendingStore(localStorage);
let executivePresentationHistory = [];
let executivePresentationHistoryLoading = false;
let executivePresentationHistorySaving = false;
let executivePresentationHistoryCloudAvailable = true;
let executivePresentationHistorySaveOpen = false;
let executivePresentationHistoryViewer = null;
let executivePresentationHistoryViewerIndex = 0;
let executivePresentationHistoryReuseTarget = null;
let executivePresentationHistoryReturnFocus = null;
let presentationInventoryDraft = null;
let presentationFeedbackDraft = null;
let presentationInventoryPendingUploadKeys = new Set();
let physicalHallOfFameOpen = false;
let physicalHallOfFameGender = "todos";
let physicalHallOfFameTopTest = "";
let localCaptures = loadCaptures();
let scheduleState = loadSchedules();
let scheduleFilters = { professor: "todos", day: "todos", discipline: "todos", installation: "todos", mode: "professors", timeDay: "Lunes", time: "09:00", reportProfessor: "todos" };
let classBookingReservations = loadClassBookingReservations();
let classBookingCloudAvailable = true;
let classBookingFilters = { status: "todos", type: "todos", activity: "todos", search: "" };
let intramurosParticipants = [];
let intramurosGameRoles = [];
let intramurosCloudAvailable = true;
let intramurosImporting = false;
let intramurosRolesImporting = false;
let intramurosUploadSummary = null;
let intramurosRolesUploadSummary = null;
let selectedIntramurosTournament = "";
let intramurosCalendarLayer = "all";
let intramurosFilters = { period: "todos", tournament: "todos", branch: "todos", school: "todos", gender: "todos", program: "todos", search: "" };
let intramurosOperationRows = loadIntramurosOperationRows();
let intramurosOperationCloudAvailable = true;
const PARTICIPATION_UPLOAD_STORAGE_KEY = "wellsync_participation_uploads_v1";
let participationUploadState = {
  gamer: { fileName: "", draft: null, imported: null, source: "" },
  representativos: { fileName: "", draft: null, imported: null, source: "" }
};
let participationUploadCloudAvailable = true;
let participationUploadLoading = { gamer: false, representativos: false };
let representativosFilters = { coach: "todos", representativo: "todos", search: "" };
const SEMANA_TEC_STORAGE_KEY = "wellsync_semana_tec_v1";
let semanaTecRows = [];
let semanaTecDraft = null;
let semanaTecLoading = false;
let semanaTecSaving = false;
let semanaTecCloudAvailable = true;
let semanaTecLastUpload = null;
let semanaTecFilters = { week: "todas", professor: "todos", group: "todos", search: "" };
let semanaTecGroupGradeFiles = [];
let semanaTecGroupFilesAvailable = true;
let semanaTecGroupFilesLoading = false;
let semanaTecGroupFileUploading = "";
let executiveReportState = { week: 15, period: "FJ26", title: "Reporte Ejecutivo Semana 15" };
let executivePlanningFilters = { area: "todos", status: "todos", days: "30" };
let simulatorState = loadSimulator();
let simulatorFilters = { selectedId: "", day: "todos", professor: "todos", installation: "todos", availabilityDay: "Lunes", availabilityTime: "09:00", installationView: "todos" };
let classScheduleComparison = null;
let classScheduleSimulatorRows = loadClassScheduleSimulatorLocal();
let classScheduleSimulatorCloudReady = false;
let classSimulatorTeacherConflictIds = new Set();
let classSimulatorTeacherConflictMessage = "";
let activeTheme = localStorage.getItem(THEME_KEY) || "tec";
let currentUser = loadSession();
let cloudCaptures = [];
let cloudStudentDatabase = [];
let studentDatabaseLoaded = false;
let studentDatabaseImporting = false;
let cloudCollaborators = [];
let collaboratorsCloudLoaded = false;
let physicalEvaluations = [];
let physicalEvaluationsLoaded = false;
let classGradeSeedRows = [];
let classGrades = [];
let classGradesLoaded = false;
let classGradesAvailable = true;
let classGradesImporting = false;
let classGradesUploadSummary = null;
let classStudentSearch = "";
let expandedClassTeacherRows = new Set();
let gymAttendanceRecords = [];
let gymAsistencias = [];
let gymManualAttendanceRows = [];
let gymStudentRegistrations = [];
let gymDataLoaded = false;
let gymAsistenciasLoadedCount = 0;
let gymAttendanceImporting = false;
let gymMasterStudent = null;
let gymWeekSelection = { Wellness: 20, EMIS: 20, Ambas: 20 };
let gymDashboardFacility = "Ambas";
let gymHeatmapMode = "average";
let vivenciaEvents = [];
let vivenciaEventMetrics = [];
let vivenciaParticipants = [];
let vivenciaParticipantDetailsCount = 0;
let vivenciaParticipantUploads = [];
let vivenciaEventImages = [];
let vivenciaDashboardSettings = { impact_goal: 3800 };
let vivenciaEventsLoaded = false;
let vivenciaEventsAvailable = true;
let planningCalendarRows = [];
let planningCalendarLoaded = false;
let planningCalendarError = "";
let planningCalendarRequestSequence = 0;
let planningCalendarMonthByArea = { comunicacion: "", intramuros: "" };
let vivenciaCalendarMonth = "";
let planningEventOverrides = [];
let planningEventOverridesLoaded = false;
let planningEventOverridesAvailable = true;
let selectedPlanningActivityId = "";
let planningDetailTrigger = null;
let planningDetailTriggerInstance = "";
let planningModalBackgroundState = [];
let vivenciaEventImporting = false;
let vivenciaEventImportResult = null;
let vivenciaPlanningSyncing = false;
let vivenciaParticipantImporting = false;
let vivenciaParticipantImportResult = null;
let selectedVivenciaEventForParticipants = "";
let selectedVivenciaEventForDetail = "";
let vivenciaParticipantsModalOpen = false;
let vivenciaEventImagesUploading = false;
let communicationEvents = [];
let communicationEventsLoaded = false;
let communicationEventsAvailable = true;
let communicationDashboardSettings = { impact_goal: 3800 };
let communicationEventImporting = false;
let communicationEventImportResult = null;
let communicationPlanningSyncing = false;
let selectedCommunicationEventForDetail = "";
let communicationParticipants = [];
let communicationParticipantUploads = [];
let communicationParticipantsAvailable = true;
let communicationParticipantImporting = false;
let communicationParticipantImportResult = null;
let selectedCommunicationEventForParticipants = "";
let communicationParticipantsModalOpen = false;
const COMMUNICATION_DIFFUSION_SLOTS = [
  { key: "gym-wellness", title: "Horario de Gimnasio Wellness" },
  { key: "gym-emis", title: "Horario de Gimnasio EMIS" },
  { key: "natacion", title: "Horario de Natación" },
  { key: "booking", title: "Horario de Booking", maxImages: 2 },
  { key: "clases", title: "Clases" },
  { key: "torneos-intramuros", title: "Torneos Intramuros" },
  { key: "renta-locker", title: "Renta de Locker" },
  { key: "sitio-wellness", title: "Sitio Wellness", maxImages: 2 },
  { key: "torneo-relampago", title: "Torneo Relámpago" },
  { key: "extra", title: "Extra" }
];
let communicationDiffusionImages = [];
let communicationDiffusionAvailable = true;
let communicationDiffusionLoading = false;
let communicationDiffusionUploadingSlot = "";
let communicationDiffusionActiveImage = {};
let classGradePage = 1;
let classGradeFilter = {
  search: "",
  period: "todos",
  block: "todos",
  teacher: "todos",
  subject: "todos",
  career: "todos",
  status: "todos"
};
let classDashboardBlock = "auto";
let physicalEvaluationFilter = {
  period: "todos",
  stage: "todos",
  discipline: "todos",
  collaborator: "todos",
  gender: "todos",
  classification: "todos",
  test: "cooper_12m"
};
let budgetAreaPlans = loadBudgetAreaPlans();
let budgetRequestRows = loadBudgetRequestRows();
let budgetCloudReady = false;
let budgetCloudMessage = "Modo local";
let budgetPeriodTouched = false;
let selectedBudgetRequestEditId = "";
let collaboratorColumnOrder = [];
let collaboratorSettingsLoaded = false;
let photoUploaderOpen = false;
let selectedPhotoNomina = "";
let selectedCollaboratorInfographicId = "";
let cloudStatus = supabaseClient ? "Conectando Supabase" : "Demo local";
let uniformesData = {};
let uniformesLoaded = false;
let collaboratorFilter = { coordinator: "todos", shirt: "todos", firstAid: "todos" };
let auditLog = loadAuditLog();
let configQuickLinks = [];
let configQuickLinksLoaded = false;
let configQuickLinksCloudAvailable = true;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function allowedDataText() {
  return "La captura operativa solo usa matrícula, género, carrera, semestre y nivel escolar. Los campos de salud, nombre, correo y teléfono quedan fuera del sistema.";
}

function loadCaptures() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCaptures() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localCaptures));
}

function normalizeBudgetAreaPlan(row) {
  const area = String(row?.area || "").trim();
  if (!area) return null;
  return {
    period: String(row?.period || "AD26").trim().toUpperCase(),
    area,
    assigned: Math.max(0, Number(row.assigned || 0)),
    owner: String(row.owner || "").trim() || "Responsable de área",
    threshold: Math.min(100, Math.max(1, Number(row.threshold || 80)))
  };
}

function normalizeBudgetRequest(row) {
  const area = String(row?.area || "").trim();
  const concept = String(row?.concept || "").trim();
  if (!area || !concept) return null;
  return {
    id: String(row.id || `P-${Date.now()}`),
    period: String(row.period || "AD26").trim(),
    date: String(row.date || new Date().toISOString().slice(0, 10)).slice(0, 10),
    area,
    concept,
    provider: String(row.provider || "").trim() || "Sin proveedor",
    amount: Math.max(0, Number(row.amount || 0)),
    status: String(row.status || "pendiente").trim(),
    priority: String(row.priority || "Media").trim(),
    type: String(row.type || "General").trim()
  };
}

function loadBudgetAreaPlans() {
  try {
    const saved = JSON.parse(localStorage.getItem(BUDGET_AREAS_KEY) || "[]");
    const rows = Array.isArray(saved) ? saved.map(normalizeBudgetAreaPlan).filter(Boolean) : [];
    return rows.length ? rows : defaultBudgetAreas.map(normalizeBudgetAreaPlan);
  } catch {
    return defaultBudgetAreas.map(normalizeBudgetAreaPlan);
  }
}

function saveBudgetAreaPlans() {
  localStorage.setItem(BUDGET_AREAS_KEY, JSON.stringify(budgetAreaPlans));
}

function loadBudgetRequestRows() {
  try {
    const saved = JSON.parse(localStorage.getItem(BUDGET_REQUESTS_KEY) || "[]");
    const rows = Array.isArray(saved) ? saved.map(normalizeBudgetRequest).filter(Boolean) : [];
    return rows.length ? rows : defaultBudgetRequests.map(normalizeBudgetRequest);
  } catch {
    return defaultBudgetRequests.map(normalizeBudgetRequest);
  }
}

function saveBudgetRequestRows() {
  localStorage.setItem(BUDGET_REQUESTS_KEY, JSON.stringify(budgetRequestRows));
}

function normalizeIntramurosOperationRow(row = {}) {
  const id = String(row.id || `INTRA-${Date.now()}-${Math.random().toString(16).slice(2)}`);
  const numberValue = (value) => Math.max(0, Number(value) || 0);
  return {
    id,
    tipo: String(row.tipo || "").trim(),
    torneo: String(row.torneo || "").trim(),
    periodo: String(row.periodo || "").trim(),
    equipos_varoniles: numberValue(row.equipos_varoniles),
    equipos_femeniles: numberValue(row.equipos_femeniles),
    equipos_mixtos: numberValue(row.equipos_mixtos),
    alumnos_varonil: numberValue(row.alumnos_varonil),
    alumnos_femenil: numberValue(row.alumnos_femenil),
    juegos_programados: numberValue(row.juegos_programados),
    juegos_realizados: numberValue(row.juegos_realizados),
    bajas: numberValue(row.bajas),
    estatus: String(row.estatus || "En captura").trim()
  };
}

function loadIntramurosOperationRows() {
  try {
    const saved = JSON.parse(localStorage.getItem(INTRAMUROS_OPERATION_KEY) || "[]");
    return Array.isArray(saved) ? saved.map(normalizeIntramurosOperationRow).filter((row) => row.torneo) : [];
  } catch {
    return [];
  }
}

function saveIntramurosOperationRows() {
  intramurosOperationRows = intramurosOperationRows.map(normalizeIntramurosOperationRow).filter((row) => row.torneo);
  localStorage.setItem(INTRAMUROS_OPERATION_KEY, JSON.stringify(intramurosOperationRows));
}

function intramurosOperationCloudRow(row = {}) {
  return normalizeIntramurosOperationRow({
    id: row.id,
    tipo: row.tipo,
    torneo: row.torneo,
    periodo: row.periodo,
    equipos_varoniles: row.equipos_varoniles,
    equipos_femeniles: row.equipos_femeniles,
    equipos_mixtos: row.equipos_mixtos,
    alumnos_varonil: row.alumnos_varonil,
    alumnos_femenil: row.alumnos_femenil,
    juegos_programados: row.juegos_programados,
    juegos_realizados: row.juegos_realizados,
    bajas: row.bajas,
    estatus: row.estatus
  });
}

function intramurosOperationToCloud(row) {
  const normalized = normalizeIntramurosOperationRow(row);
  return {
    id: normalized.id,
    tipo: normalized.tipo,
    torneo: normalized.torneo,
    periodo: normalized.periodo,
    equipos_varoniles: normalized.equipos_varoniles,
    equipos_femeniles: normalized.equipos_femeniles,
    equipos_mixtos: normalized.equipos_mixtos,
    alumnos_varonil: normalized.alumnos_varonil,
    alumnos_femenil: normalized.alumnos_femenil,
    juegos_programados: normalized.juegos_programados,
    juegos_realizados: normalized.juegos_realizados,
    bajas: normalized.bajas,
    estatus: normalized.estatus
  };
}

async function saveIntramurosOperationRowCloud(row) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("intramuros") || !intramurosOperationCloudAvailable) return null;
  const { data, error } = await supabaseClient
    .from("intramuros_operacion_torneos")
    .upsert(intramurosOperationToCloud(row), { onConflict: "id" })
    .select("*")
    .single();
  if (error) {
    intramurosOperationCloudAvailable = false;
    console.warn("No se pudo guardar mesa de Omar", error);
    toast(`No se pudo guardar en Supabase: ${supabaseErrorDetail(error) || error.message}`);
    return null;
  }
  intramurosOperationCloudAvailable = true;
  return intramurosOperationCloudRow(data);
}

async function deleteIntramurosOperationRowCloud(id) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("intramuros") || !intramurosOperationCloudAvailable) return false;
  const { error } = await supabaseClient
    .from("intramuros_operacion_torneos")
    .delete()
    .eq("id", id);
  if (error) {
    intramurosOperationCloudAvailable = false;
    console.warn("No se pudo borrar mesa de Omar", error);
    toast(`No se pudo borrar en Supabase: ${supabaseErrorDetail(error) || error.message}`);
    return false;
  }
  return true;
}

function budgetPlanFromCloud(row) {
  return normalizeBudgetAreaPlan({
    period: row.period_key,
    area: row.area_key,
    assigned: row.assigned_amount,
    owner: row.owner_name,
    threshold: row.alert_threshold
  });
}

function budgetRequestFromCloud(row) {
  return normalizeBudgetRequest({
    id: row.id,
    period: row.period_key,
    date: row.request_date,
    area: row.area_key,
    concept: row.concept,
    provider: row.provider,
    amount: row.amount,
    status: row.status,
    priority: row.priority,
    type: row.request_type
  });
}

function budgetPeriodRank(period) {
  const value = String(period || "").trim().toUpperCase();
  const match = value.match(/^([A-Z]{2})(\d{2})$/);
  if (!match) return 0;
  const year = Number(match[2]) || 0;
  const termOrder = { FJ: 1, AD: 2, AG: 2, IN: 3 };
  return year * 10 + (termOrder[match[1]] || 0);
}

function latestBudgetPeriodKey(periodRows = [], fallbackPeriods = []) {
  const rowsWithDate = periodRows
    .map((row) => ({
      key: String(row.period_key || "").trim(),
      date: Date.parse(row.created_at || row.fecha_fin || row.fecha_inicio || "")
    }))
    .filter((row) => row.key && Number.isFinite(row.date))
    .sort((a, b) => b.date - a.date);
  if (rowsWithDate[0]?.key) return rowsWithDate[0].key;
  return [...fallbackPeriods]
    .filter(Boolean)
    .sort((a, b) => budgetPeriodRank(b) - budgetPeriodRank(a) || String(b).localeCompare(String(a), "es-MX"))[0] || "AD26";
}

async function loadBudgetData() {
  budgetCloudReady = false;
  budgetCloudMessage = "Modo local";
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const [periodsResult, plansResult, requestsResult] = await Promise.all([
    supabaseClient
      .from("budget_periods")
      .select("period_key, created_at")
      .eq("active", true)
      .order("created_at", { ascending: false }),
    supabaseClient
      .from("budget_area_plans")
      .select("period_key, area_key, assigned_amount, owner_name, alert_threshold")
      .order("area_key", { ascending: true }),
    supabaseClient
      .from("budget_requests")
      .select("id, period_key, request_date, area_key, concept, provider, amount, status, priority, request_type")
      .order("request_date", { ascending: false })
  ]);
  if (periodsResult.error || plansResult.error || requestsResult.error) {
    console.warn(periodsResult.error || plansResult.error || requestsResult.error);
    budgetCloudMessage = "Activa las tablas de Presupuesto en Supabase";
    return;
  }
  const cloudPlans = (plansResult.data || []).map(budgetPlanFromCloud).filter(Boolean);
  const cloudRequests = (requestsResult.data || []).map(budgetRequestFromCloud).filter(Boolean);
  const cloudPeriods = (periodsResult.data || []).map((row) => String(row.period_key || "").trim()).filter(Boolean);
  budgetPeriods = [...new Set([...cloudPeriods, ...cloudPlans.map((row) => row.period), ...cloudRequests.map((row) => row.period)])]
    .sort((a, b) => budgetPeriodRank(b) - budgetPeriodRank(a) || String(b).localeCompare(String(a), "es-MX"));
  if (!budgetPeriods.length) budgetPeriods = ["AD26"];
  const latestPeriod = latestBudgetPeriodKey(periodsResult.data || [], budgetPeriods);
  if (!budgetPeriodTouched || !budgetPeriods.includes(budgetFilters.period)) budgetFilters.period = latestPeriod;
  if (cloudPlans.length) budgetAreaPlans = cloudPlans;
  if (cloudRequests.length) budgetRequestRows = cloudRequests;
  budgetCloudReady = true;
  budgetCloudMessage = "Supabase activo";
}

async function saveBudgetAllocationToCloud(plan) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !budgetCloudReady) return false;
  const { error } = await supabaseClient.from("budget_area_plans").upsert({
    period_key: plan.period,
    area_key: plan.area,
    assigned_amount: plan.assigned,
    owner_name: plan.owner,
    alert_threshold: plan.threshold,
    updated_by: currentUser.id
  }, { onConflict: "period_key,area_key" });
  if (error) {
    console.warn(error);
    toast("No se pudo guardar en Supabase; se conserva local");
    return false;
  }
  return true;
}

async function saveBudgetRequestToCloud(request) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !budgetCloudReady) return null;
  const { data, error } = await supabaseClient.from("budget_requests").insert({
    period_key: request.period,
    request_date: request.date,
    area_key: request.area,
    concept: request.concept,
    provider: request.provider,
    amount: request.amount,
    status: request.status,
    priority: request.priority,
    request_type: request.type,
    created_by: currentUser.id
  }).select("id").single();
  if (error) {
    console.warn(error);
    toast("No se pudo guardar en Supabase; se conserva local");
    return null;
  }
  return data?.id || request.id;
}

function loadSchedules() {
  try {
    const saved = JSON.parse(localStorage.getItem(SCHEDULE_KEY) || "null");
    if (saved && Array.isArray(saved.official) && Array.isArray(saved.booking)) {
      return {
        official: saved.official,
        booking: saved.booking,
        errors: saved.errors || { master: [], official: [], booking: [] },
        sourceMode: saved.sourceMode || "demo",
        updatedAt: saved.updatedAt || null
      };
    }
  } catch {
    // Continue with demo data.
  }
  return {
    official: sampleOfficialSchedule,
    booking: sampleBookingSchedule,
    errors: { master: [], official: [], booking: [] },
    sourceMode: "demo",
    updatedAt: null
  };
}

function saveSchedules() {
  localStorage.setItem(SCHEDULE_KEY, JSON.stringify(scheduleState));
}

function loadClassBookingReservations() {
  try {
    const saved = JSON.parse(localStorage.getItem(CLASS_BOOKING_RESERVATIONS_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveClassBookingReservations() {
  localStorage.setItem(CLASS_BOOKING_RESERVATIONS_KEY, JSON.stringify(classBookingReservations));
}

function bookingReservationFromCloud(row) {
  const parts = bookingDateParts(row.reservation_at || "");
  return {
    id: row.source_reservation_id || row.id,
    reservationDate: row.reservation_at || "",
    status: row.status || "Sin estatus",
    type: row.reservation_type || "Sin tipo",
    student: normalizeMatricula(row.matricula),
    activity: row.activity || "Sin actividad",
    rawSpace: row.raw_space || row.activity || "",
    dateLabel: parts.date,
    day: parts.day,
    hour: parts.hour,
    month: parts.month
  };
}

function bookingReservationToCloud(row, fileName = "") {
  return {
    source_reservation_id: String(row.id || "").trim() || null,
    reservation_at: row.reservationDate || null,
    status: row.status || null,
    reservation_type: row.type || null,
    matricula: normalizeMatricula(row.student) || null,
    activity: row.activity || "Sin actividad",
    raw_space: row.rawSpace || null,
    source_name: fileName || "Booking",
    created_by: currentUser?.auth === "supabase" ? currentUser.id : null
  };
}

async function loadClassBookingReservationsCloud() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const { data, error } = await supabaseClient
    .from("class_booking_reservations")
    .select("*")
    .order("reservation_at", { ascending: false })
    .limit(20000);
  if (error) {
    classBookingCloudAvailable = false;
    console.warn("Booking Supabase no disponible", error);
    return;
  }
  classBookingCloudAvailable = true;
  classBookingReservations = (data || []).map(bookingReservationFromCloud);
  saveClassBookingReservations();
}

async function saveClassBookingReservationsCloud(rows, fileName = "") {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("clases")) return false;
  const { error: deleteError } = await supabaseClient
    .from("class_booking_reservations")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");
  if (deleteError) {
    classBookingCloudAvailable = false;
    toast(`Booking quedó local; falta activar Supabase: ${supabaseErrorDetail(deleteError) || deleteError.message}`);
    return false;
  }
  const payload = rows.map((row) => bookingReservationToCloud(row, fileName));
  for (let index = 0; index < payload.length; index += 500) {
    const chunk = payload.slice(index, index + 500);
    const { error } = await supabaseClient.from("class_booking_reservations").insert(chunk);
    if (error) {
      classBookingCloudAvailable = false;
      toast(`Booking quedó local; no pude guardar en Supabase: ${supabaseErrorDetail(error) || error.message}`);
      return false;
    }
  }
  classBookingCloudAvailable = true;
  return true;
}

function loadSimulator() {
  try {
    const saved = JSON.parse(localStorage.getItem(SIMULATOR_KEY) || "null");
    if (Array.isArray(saved?.rows)) {
      return {
        rows: saved.rows,
        scenarioName: saved.scenarioName || "Escenario base",
        updatedAt: saved.updatedAt || null
      };
    }
  } catch {
    // Continue with a fresh draft.
  }
  return { rows: [], scenarioName: "Escenario base", updatedAt: null };
}

function saveSimulator() {
  localStorage.setItem(SIMULATOR_KEY, JSON.stringify(simulatorState));
}

function loadClassScheduleSimulatorLocal() {
  try {
    const saved = JSON.parse(localStorage.getItem(CLASS_SIMULATOR_KEY) || "[]");
    return Array.isArray(saved) ? saved.map(normalizeClassSimulatorRow).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function saveClassScheduleSimulatorLocal() {
  localStorage.setItem(CLASS_SIMULATOR_KEY, JSON.stringify(classScheduleSimulatorRows));
}

function normalizeClassSimulatorRow(row) {
  if (!row) return null;
  const day = normalizeDay(row.day || row.day_label);
  const area = classSimulatorAreas.find((item) => normalizeText(item) === normalizeText(row.area)) || "";
  const start = normalizeTimeToken(row.start_time || row.start || "");
  const end = normalizeTimeToken(row.end_time || row.end || "");
  if (!area || !day || !start || !end) return null;
  return {
    id: String(row.id || crypto.randomUUID()),
    area,
    discipline: String(row.discipline || "").trim(),
    teacher_id: row.teacher_id ? String(row.teacher_id) : "",
    teacher_name: String(row.teacher_name || row.professor || "").trim(),
    day,
    start_time: start,
    end_time: end,
    created_at: row.created_at || new Date().toISOString()
  };
}

async function loadClassScheduleSimulatorCloud() {
  if (!supabaseClient || currentUser?.auth !== "supabase") {
    classScheduleSimulatorCloudReady = false;
    return;
  }
  const { data, error } = await supabaseClient
    .from("class_schedule_simulator")
    .select("id, area, discipline, teacher_id, teacher_name, day, start_time, end_time, created_at")
    .order("day")
    .order("start_time");
  if (error) {
    classScheduleSimulatorCloudReady = false;
    return;
  }
  classScheduleSimulatorRows = (data || []).map(normalizeClassSimulatorRow).filter(Boolean);
  classScheduleSimulatorCloudReady = true;
  saveClassScheduleSimulatorLocal();
}

async function saveClassSimulatorRows(rows) {
  classScheduleSimulatorRows = [...classScheduleSimulatorRows, ...rows];
  saveClassScheduleSimulatorLocal();
  if (!supabaseClient || currentUser?.auth !== "supabase") return { cloud: false };
  const payload = rows.map((row) => ({
    id: row.id,
    area: row.area,
    discipline: row.discipline,
    teacher_id: row.teacher_id || null,
    teacher_name: row.teacher_name || null,
    day: row.day,
    start_time: row.start_time,
    end_time: row.end_time,
    created_at: row.created_at
  }));
  const { error } = await supabaseClient.from("class_schedule_simulator").insert(payload);
  if (error) {
    classScheduleSimulatorCloudReady = false;
    return { cloud: false, error };
  }
  classScheduleSimulatorCloudReady = true;
  return { cloud: true };
}

async function deleteClassSimulatorRow(id) {
  const row = classScheduleSimulatorRows.find((item) => item.id === id);
  if (!row) return;
  if (!confirm("¿Seguro que deseas eliminar esta clase del simulador?")) return;
  classScheduleSimulatorRows = classScheduleSimulatorRows.filter((item) => item.id !== id);
  saveClassScheduleSimulatorLocal();
  if (supabaseClient && currentUser?.auth === "supabase") {
    const { error } = await supabaseClient.from("class_schedule_simulator").delete().eq("id", id);
    classScheduleSimulatorCloudReady = !error;
  }
  addAudit("simulador clases", `Clase eliminada: ${row.discipline} ${row.day} ${row.start_time}-${row.end_time}`);
  render();
  toast("Clase eliminada del simulador");
}

function loadSession() {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    if (!session) {
      const directorSession = { ...demoUsers[0] };
      localStorage.setItem(SESSION_KEY, JSON.stringify(directorSession));
      return directorSession;
    }
    if (session?.auth !== "supabase" && (session?.role === "coordinador" || session?.role === "consulta")) {
      const directorSession = { ...demoUsers[0] };
      localStorage.setItem(SESSION_KEY, JSON.stringify(directorSession));
      return directorSession;
    }
    return session;
  } catch {
    return null;
  }
}

function saveSession(user) {
  currentUser = user;
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

function clearSession() {
  currentUser = null;
  localStorage.removeItem(SESSION_KEY);
}

function loadAuditLog() {
  try {
    return JSON.parse(localStorage.getItem(AUDIT_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveAuditLog() {
  localStorage.setItem(AUDIT_KEY, JSON.stringify(auditLog));
}

function addAudit(action, detail = "") {
  const entry = {
    at: new Date().toISOString(),
    user: currentUser?.name || "Sin sesion",
    role: currentUser?.role || "anonimo",
    area: currentUser?.area || "general",
    action,
    detail
  };
  auditLog = [entry, ...auditLog].slice(0, 200);
  saveAuditLog();
}

const uploadSuccessStore = window.WellSyncUploadStatus?.createUploadStatusStore(localStorage);

function latestUploadTimestamp(values) {
  return (values || []).filter(Boolean).sort((a, b) => String(b).localeCompare(String(a)))[0] || "";
}

function uploadStatusTarget(selector, key, timestamp = "") {
  document.querySelectorAll(selector).forEach((node, index) => {
    const resolvedKey = typeof key === "function" ? key(node, index) : key;
    const resolvedTimestamp = typeof timestamp === "function" ? timestamp(node, index) : timestamp;
    const knownTimestamp = resolvedTimestamp || uploadSuccessStore?.get(resolvedKey) || "";
    const label = document.createElement("small");
    label.className = "upload-last-success";
    label.dataset.uploadStatusKey = resolvedKey;
    label.textContent = window.WellSyncUploadStatus?.formatUploadSuccess(knownTimestamp)
      || "Última carga exitosa: sin registros";
    let anchor = node;
    if (node.matches('[data-semana-tec-group-select]')) anchor = node.closest(".semana-tec-group-file-actions") || node;
    else if (node.matches('[data-communication-diffusion-upload]')) anchor = node.closest(".communication-diffusion-image-actions") || node.closest(".communication-diffusion-actions") || node.closest("label") || node;
    else if (node.matches('input[type="file"]')) anchor = node.closest("label") || node;
    anchor.insertAdjacentElement("afterend", label);
  });
}

function renderUploadSuccessLabels() {
  document.querySelectorAll(".upload-last-success").forEach((node) => node.remove());
  const gradeTimestamp = latestUploadTimestamp(classGradeLoadGroups().map((group) => group.updatedAt));
  const vivenciaParticipantsTimestamp = vivenciaParticipantUploads[0]?.upload_date || vivenciaParticipantUploads[0]?.created_at || "";
  const communicationParticipantsTimestamp = communicationParticipantUploads[0]?.upload_date || communicationParticipantUploads[0]?.created_at || "";
  const vivenciaImagesTimestamp = latestUploadTimestamp(vivenciaEventImages.map((image) => image.created_at || image.updated_at));

  uploadStatusTarget("#uploadStudentDatabase", "general.student-database");
  uploadStatusTarget("#uploadClassGrades", "clases.calificaciones", gradeTimestamp);
  uploadStatusTarget('[data-schedule-upload="master"]', "clases.horarios.master", scheduleState.updatedAt);
  uploadStatusTarget('[data-schedule-upload="official"]', "clases.horarios.official", scheduleState.updatedAt);
  uploadStatusTarget('[data-schedule-upload="booking"]', "clases.horarios.booking", scheduleState.updatedAt);
  uploadStatusTarget("#classBookingReservationsFile", "clases.booking");
  uploadStatusTarget("#uploadGymAttendanceCsv", "gimnasio.asistencias");
  uploadStatusTarget("#importSemanaTec", "semana-tec.alumnos", semanaTecLastUpload?.importedAt);
  uploadStatusTarget('[data-participation-upload="gamer"]', "gamer.participantes", participationUploadState.gamer?.imported?.importedAt);
  uploadStatusTarget('[data-participation-upload="representativos"]', "representativos.participantes", participationUploadState.representativos?.imported?.importedAt);
  uploadStatusTarget("#intramurosParticipantsFile", "intramuros.participantes", intramurosUploadSummary?.importedAt);
  uploadStatusTarget("#intramurosRolesFile", "intramuros.roles", intramurosRolesUploadSummary?.importedAt);
  uploadStatusTarget("#saveCollaboratorPhoto", "colaboradores.fotografia");
  uploadStatusTarget("#vivenciaParticipantsForm button[type=submit]", "vivencia.participantes", vivenciaParticipantsTimestamp);
  uploadStatusTarget("#uploadVivenciaEventImages", "vivencia.imagenes", vivenciaImagesTimestamp);
  uploadStatusTarget("#communicationParticipantsForm button[type=submit]", "comunicacion.participantes", communicationParticipantsTimestamp);
  uploadStatusTarget("[data-inventory-image]", (node) => `presentacion.inventario.${node.dataset.inventoryImage}`);
  uploadStatusTarget("[data-semana-tec-group-select]", (node) => `semana-tec.grupo.${node.dataset.semanaTecGroupSelect}`, (node) => semanaTecGroupGradeFiles.find((file) => file.group_key === node.dataset.semanaTecGroupSelect)?.updated_at || "");
  uploadStatusTarget("[data-communication-diffusion-upload]", (node) => {
    const imageIndex = Number(node.dataset.communicationDiffusionImageIndex || 1);
    return `comunicacion.difusion.${node.dataset.communicationDiffusionUpload}.${imageIndex}`;
  }, (node) => communicationDiffusionImage(node.dataset.communicationDiffusionUpload, Number(node.dataset.communicationDiffusionImageIndex || 1))?.updated_at || "");
}

function recordUploadSuccess(key, value = new Date().toISOString()) {
  const recordedAt = uploadSuccessStore?.record(key, value) || value;
  document.querySelectorAll(".upload-last-success").forEach((label) => {
    if (label.dataset.uploadStatusKey !== key) return;
    label.textContent = window.WellSyncUploadStatus?.formatUploadSuccess(recordedAt)
      || "Última carga exitosa: sin registros";
  });
}

function profileToSession(profile, authUser) {
  const sourceRole = profile?.role || "consulta";
  const profileEmail = String(authUser?.email || profile?.email || "").trim().toLowerCase();
  const isSportsLeader = profileEmail === "recsports.mty@servicios.tec.mx";
  const role = isSportsLeader
    ? "coordinador"
    : (["admin", "direccion", "coordinador", "compras", "consulta", "maestro"].includes(sourceRole) ? sourceRole : "consulta");
  const area = role === "direccion" || role === "admin" ? "general" : (profile?.area_key || "general");
  return {
    id: authUser?.id || profile?.id || "supabase-user",
    name: profile?.display_name || authUser?.email || "Usuario Supabase",
    email: authUser?.email || profile?.email || "",
    role,
    area,
    globalAccess: isSportsLeader,
    label: profile?.display_name || authUser?.email || "Usuario Supabase",
    auth: "supabase"
  };
}

function normalizeStatus(value) {
  const normalized = String(value || "activo").trim().toLowerCase();
  if (normalized.includes("baja")) return "baja";
  if (normalized.includes("np")) return "np";
  if (normalized.includes("acredit")) return "acreditado";
  if (normalized.includes("no asist")) return "no_asistio";
  if (normalized.includes("asist")) return "asistio";
  return "activo";
}

function participationFromCloud(row) {
  const student = row.students_minimal || {};
  const status = row.status || "activo";
  return {
    id: row.id,
    matricula: row.matricula,
    genero: student.genero || "No especificado",
    carrera: student.carrera || "Sin carrera",
    semestre: student.semestre || 1,
    nivel: student.nivel_escolar || "Profesional",
    periodo: row.period_key || "AD26",
    operacion: row.operation_label || row.metadata?.operacion || "",
    estatus: status,
    area: row.area_key || "general",
    registros: 1,
    acreditado: status !== "baja" && status !== "np",
    baja: status === "baja",
    createdAt: row.created_at,
    source: "supabase"
  };
}

function meaningfulAcademicValue(values, fallback = "") {
  const genericValues = new Set([
    "sin programa",
    "sin carrera",
    "sin identificar",
    "no aplica",
    "n/a",
    "na",
    "-"
  ]);
  return values
    .map((value) => String(value ?? "").trim())
    .find((value) => value && !genericValues.has(normalizeText(value))) || fallback;
}

function studentDatabaseFromCloud(row) {
  const matricula = row.Matricula || row.matricula || "";
  const nivelRaw = row["Desc Nivel Acad Alumno"] || row.nivel_escolar || row.grado_escolar || "";
  const generoRaw = row["Desc Genero"] || row.Genero || row.genero || "";
  const programa = meaningfulAcademicValue([
    row.Carrera,
    row.carrera,
    row["v_Clave Major Agrupado"],
    row["Clave Major Agrupado"],
    row["Desc Programa Acad"],
    row["Desc Programa Academico"],
    row.Programa,
    row.programa,
    row["Desc Escuela Programa"]
  ], "Sin carrera");
  return {
    matricula,
    genero: normalizeStudentGender(generoRaw),
    carrera: programa,
    programa,
    semestre: Number(row.Semestre || row.semestre || 1),
    nivel: normalizeStudentLevel(nivelRaw),
    gradoEscolar: nivelRaw,
    nombreCampus: row["Nombre Campus"] || "",
    periodoAcad: row["Periodo acad"] || "",
    area: "general",
    registros: 0,
    acreditado: true,
    baja: false,
    source: "base_alumnos",
    importedAt: row.imported_at || ""
  };
}

function normalizeMatricula(value) {
  return String(value ?? "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function isValidVivenciaMatricula(value) {
  return /^A\d{7,9}$/.test(normalizeMatricula(value));
}

async function loadStudentDatabase() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const rows = [];
  const pageSize = 1000;
  let error = null;
  for (let offset = 0; ; offset += pageSize) {
    const response = await supabaseClient
      .from("Base de datos_alumnos")
      .select("*")
      .order("Matricula", { ascending: true })
      .range(offset, offset + pageSize - 1);
    if (response.error) {
      error = response.error;
      break;
    }
    rows.push(...(response.data || []));
    if (!response.data || response.data.length < pageSize) break;
  }
  if (error) {
    studentDatabaseLoaded = false;
    console.error(error);
    const detail = supabaseErrorDetail(error);
    toast(`No pude leer Base de datos_alumnos${detail ? `: ${detail}` : ""}`);
    return;
  }
  cloudStudentDatabase = rows.map(studentDatabaseFromCloud);
  studentDatabaseLoaded = true;
}

function findStudentInDatabase(matricula) {
  const clean = normalizeMatricula(matricula);
  if (!clean) return null;
  return cloudStudentDatabase.find((student) => normalizeMatricula(student.matricula) === clean) || null;
}

async function loadGymAsistencias() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return { data: [], error: null };
  const rows = [];
  const pageSize = 1000;
  for (let offset = 0; ; offset += pageSize) {
    const { data, error } = await supabaseClient
      .from("gym_asistencias")
      .select("id, id_origen, matricula, nombre_completo, fecha, hora, sitio, observaciones, created_by, created_at")
      .order("fecha", { ascending: true })
      .order("hora", { ascending: true })
      .range(offset, offset + pageSize - 1);
    if (error) return { data: rows, error };
    rows.push(...(data || []));
    if (!data || data.length < pageSize) break;
  }
  return { data: rows, error: null };
}

async function loadGymData() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const [attendanceResult, registrationsResult, asistenciasResult] = await Promise.all([
    supabaseClient
      .from("gym_attendance_records")
      .select("*")
      .order("attendance_date", { ascending: true }),
    supabaseClient
      .from("gym_student_registrations")
      .select("*")
      .order("registered_at", { ascending: false })
      .limit(500),
    loadGymAsistencias()
  ]);
  if (attendanceResult.error || registrationsResult.error) {
    gymDataLoaded = false;
    console.error(attendanceResult.error || registrationsResult.error);
    return;
  }
  if (asistenciasResult.error) console.error(asistenciasResult.error);
  gymAsistencias = asistenciasResult.error ? [] : (asistenciasResult.data || []);
  gymAsistenciasLoadedCount = gymAsistencias.length;
  gymManualAttendanceRows = attendanceResult.data || [];
  gymAttendanceRecords = mergeGymAttendanceSources(gymManualAttendanceRows, gymAsistencias);
  gymStudentRegistrations = registrationsResult.data || [];
  const highestWeek = Math.max(20, ...gymAttendanceRecords.map((row) => Number(row.week_number) || 0));
  gymWeekSelection.Wellness = Math.max(gymWeekSelection.Wellness, highestWeek);
  gymWeekSelection.EMIS = Math.max(gymWeekSelection.EMIS, highestWeek);
  gymWeekSelection.Ambas = Math.max(gymWeekSelection.Ambas, highestWeek);
  gymDataLoaded = true;
}

function studentFromDatabase(matricula) {
  return findStudentInDatabase(matricula);
}

function parseCsv(text) {
  const rows = [];
  let cell = "";
  let row = [];
  let inQuotes = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => String(value).trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  if (row.some((value) => String(value).trim())) rows.push(row);
  return rows;
}

function normalizeText(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function headerKey(value) {
  return normalizeText(value).replace(/[^a-z0-9]+/g, "");
}

function scheduleMasterRows() {
  return [...(scheduleState.official || []), ...(scheduleState.booking || [])]
    .map((row, index) => ({ ...row, id: row.id || `${row.source || "row"}-${index}` }))
    .filter((row) => !/PMT[23]/i.test(row.discipline || ""))
    .sort((a, b) => scheduleDays.indexOf(a.day) - scheduleDays.indexOf(b.day) || timeToMinutes(a.start) - timeToMinutes(b.start));
}

function scheduleProfessors() {
  return Array.from(new Set(scheduleMasterRows().map((row) => row.professor).filter(Boolean))).sort();
}

function scheduleDisciplines() {
  return Array.from(new Set(scheduleMasterRows().map((row) => row.discipline).filter(Boolean))).sort();
}

function scheduleInstallations() {
  return Array.from(new Set([...knownInstallations, ...scheduleMasterRows().map((row) => row.installation).filter(Boolean)])).sort();
}

function normalizeDay(value) {
  const clean = normalizeText(value);
  const found = scheduleDays.find((day) => normalizeText(day) === clean || normalizeText(day).slice(0, 3) === clean.slice(0, 3));
  return found || "";
}

function timeToMinutes(value) {
  const match = String(value || "").trim().match(/^(\d{1,2})(?::?(\d{2}))?/);
  if (!match) return NaN;
  const hours = Number(match[1]);
  const minutes = Number(match[2] || 0);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return NaN;
  return hours * 60 + minutes;
}

function minutesToTime(value) {
  if (!Number.isFinite(value)) return "";
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function pickColumn(row, options) {
  const keys = Object.keys(row || {});
  const wanted = options.map(normalizeText);
  const key = keys.find((candidate) => wanted.includes(normalizeText(candidate)));
  return key ? row[key] : "";
}

function daysFromFrequency(value) {
  const clean = normalizeText(value).replace(/\s+/g, "");
  if (!clean) return [];
  const explicit = [
    ["lunes", "Lunes"],
    ["martes", "Martes"],
    ["miercoles", "Miercoles"],
    ["jueves", "Jueves"],
    ["viernes", "Viernes"],
    ["sabado", "Sabado"]
  ];
  const direct = explicit.filter(([key]) => clean.includes(key)).map(([, label]) => label);
  if (direct.length) return Array.from(new Set(direct));
  const matches = clean.match(/lu|ma|mi|ju|vi|sa/g) || [];
  const map = { lu: "Lunes", ma: "Martes", mi: "Miercoles", ju: "Jueves", vi: "Viernes", sa: "Sabado" };
  return Array.from(new Set(matches.map((token) => map[token]).filter(Boolean)));
}

function normalizeTimeToken(value) {
  const text = String(value || "").trim();
  const match = text.match(/^(\d{1,2})(?::?(\d{2}))?/);
  if (!match) return "";
  return `${String(Number(match[1])).padStart(2, "0")}:${String(Number(match[2] || 0)).padStart(2, "0")}`;
}

function parseTimeRanges(value, fallbackStart, fallbackEnd) {
  const lines = String(value || "").replace(/\r/g, "\n").split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const ranges = lines.flatMap((line) => {
    const matches = line.match(/\d{1,2}(?::?\d{2})?/g) || [];
    if (matches.length >= 2) return [{ start: normalizeTimeToken(matches[0]), end: normalizeTimeToken(matches[1]) }];
    return [];
  });
  if (ranges.length) return ranges;
  if (fallbackStart || fallbackEnd) return [{ start: normalizeTimeToken(fallbackStart), end: normalizeTimeToken(fallbackEnd) }];
  return [];
}

function parseScheduleRows(rows, source) {
  const errors = [];
  const validRows = [];
  const required = source === "official"
    ? [["Profesor", "NOMBRE_DOCENTE"], ["Disciplina", "NOMBRE_ASIGNATURA"], ["Dia", "Dia", "LUN", "Frecuencia"], ["Hora inicio", "Inicio", "HORA_INICIO"], ["Hora fin", "Fin", "HORA_FIN"], ["Instalacion", "Lugar", " ", "__EMPTY"]]
    : [["Profesor"], ["Actividad", "Disciplina"], ["Dia", "Dia", "Frecuencia"], ["Hora inicio", "Inicio", "Horario"], ["Instalacion", "Lugar"]];
  const headers = Object.keys(rows[0] || {}).map(normalizeText);
  required.forEach((group) => {
    if (!group.some((name) => headers.includes(normalizeText(name)))) {
      errors.push({ row: 1, message: `Falta columna requerida: ${group[0]}` });
    }
  });
  rows.forEach((raw, index) => {
    const professor = String(pickColumn(raw, ["Profesor", "Professor", "Docente", "NOMBRE_DOCENTE"]) || "").trim();
    const discipline = String(pickColumn(raw, source === "official" ? ["Disciplina", "Actividad", "NOMBRE_ASIGNATURA"] : ["Actividad", "Disciplina"]) || "").trim();
    const frequencyValue = pickColumn(raw, ["Dia", "Dia", "Day", "Frecuencia", "Frequency", "LUN"]);
    const days = daysFromFrequency(frequencyValue);
    const timeRanges = parseTimeRanges(
      pickColumn(raw, ["Horario"]),
      pickColumn(raw, ["Hora inicio", "Inicio", "Start", "Hora inicial", "HORA_INICIO"]),
      pickColumn(raw, ["Hora fin", "Fin", "End", "Hora final", "HORA_FIN"])
    );
    const installation = String(pickColumn(raw, ["Instalacion", "Espacio", "Cancha", "Salon", "Lugar", " ", "__EMPTY"]) || raw[" "] || raw.__EMPTY || "").trim();
    const frequency = String(frequencyValue || "Semanal").trim();
    const group = String(pickColumn(raw, ["Grupo", "Group", "ETIQUETA_GRUPO"]) || "").trim();
    const rowErrors = [];
    if (!professor) rowErrors.push("Profesor vacio");
    if (!discipline) rowErrors.push(source === "official" ? "Disciplina vacia" : "Actividad vacia");
    if (!days.length) rowErrors.push("Dia o frecuencia invalida");
    if (!timeRanges.length) rowErrors.push("Horario invalido");
    if (!installation) rowErrors.push("Instalacion vacia");
    if (rowErrors.length) {
      errors.push({ row: index + 2, message: rowErrors.join("; ") });
      return;
    }
    days.forEach((day) => {
      timeRanges.forEach((range, rangeIndex) => {
        const start = minutesToTime(timeToMinutes(range.start));
        const end = minutesToTime(timeToMinutes(range.end));
        if (!Number.isFinite(timeToMinutes(start)) || !Number.isFinite(timeToMinutes(end)) || timeToMinutes(end) <= timeToMinutes(start)) {
          errors.push({ row: index + 2, message: `Horario invalido: ${range.start || ""}-${range.end || ""}` });
          return;
        }
        validRows.push({ id: `${source}-${Date.now()}-${index}-${day}-${rangeIndex}`, source, professor, discipline, day, start, end, installation, frequency, group, rowNumber: index + 2 });
      });
    });
  });
  return { validRows, errors };
}

async function rowsFromScheduleFile(file) {
  const ext = file.name.split(".").pop().toLowerCase();
  if (["xlsx", "xls"].includes(ext) && window.XLSX) {
    const buffer = await file.arrayBuffer();
    const workbook = window.XLSX.read(buffer, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return window.XLSX.utils.sheet_to_json(sheet, { defval: "" });
  }
  const text = await file.text();
  const rows = parseCsv(text);
  const headers = rows.shift() || [];
  return rows.map((cells) => headers.reduce((row, header, index) => ({ ...row, [header]: cells[index] || "" }), {}));
}

function findWorkbookSheet(workbook, targetName) {
  const target = normalizeText(targetName);
  const name = workbook.SheetNames.find((sheetName) => normalizeText(sheetName) === target);
  return name || workbook.SheetNames.find((sheetName) => normalizeText(sheetName).includes(target));
}

function bookingGridToRows(sheet) {
  const grid = window.XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  const periodRow = grid[0] || [];
  const headerRow = grid[1] || [];
  const starts = headerRow.reduce((acc, value, index) => {
    if (normalizeText(value) === "disciplina") acc.push(index);
    return acc;
  }, []);
  return starts.flatMap((start) => {
    const headers = headerRow.slice(start, start + 8).map((value) => String(value || "").trim());
    const period = String(periodRow[start] || "").trim();
    return grid.slice(2).map((row, rowIndex) => {
      const record = headers.reduce((acc, header, offset) => ({ ...acc, [header || `campo_${offset}`]: row[start + offset] || "" }), {});
      record.Periodo = period;
      record.__rowNumber = rowIndex + 3;
      return record;
    }).filter((record) => String(record.Disciplina || record.Actividad || record.Horario || record.Profesor || "").trim());
  });
}

async function schedulesFromMasterWorkbook(file) {
  if (!window.XLSX) throw new Error("No esta disponible el lector de Excel");
  const buffer = await file.arrayBuffer();
  const workbook = window.XLSX.read(buffer, { type: "array" });
  const officialName = findWorkbookSheet(workbook, "programacion clases");
  const bookingName = findWorkbookSheet(workbook, "booking ofertados");
  const masterErrors = [];
  if (!officialName) masterErrors.push({ row: 0, message: 'No encontre la hoja "programacion clases"' });
  if (!bookingName) masterErrors.push({ row: 0, message: 'No encontre la hoja "booking ofertados"' });
  const officialRows = officialName ? window.XLSX.utils.sheet_to_json(workbook.Sheets[officialName], { defval: "" }) : [];
  const bookingRows = bookingName ? bookingGridToRows(workbook.Sheets[bookingName]) : [];
  const official = parseScheduleRows(officialRows, "official");
  const booking = parseScheduleRows(bookingRows, "booking");
  return {
    official: official.validRows,
    booking: booking.validRows,
    errors: { master: masterErrors, official: official.errors, booking: booking.errors },
    sheetNames: { official: officialName, booking: bookingName }
  };
}

function overlap(a, b) {
  return a.day === b.day && timeToMinutes(a.start) < timeToMinutes(b.end) && timeToMinutes(b.start) < timeToMinutes(a.end);
}

function scheduleConflicts() {
  const rows = scheduleMasterRows();
  const conflicts = [];
  rows.forEach((row, index) => {
    rows.slice(index + 1).forEach((other) => {
      if (!overlap(row, other)) return;
      if (normalizeText(row.professor) === normalizeText(other.professor)) conflicts.push({ type: "Profesor", label: row.professor, day: row.day, a: row, b: other });
      if (normalizeText(row.installation) === normalizeText(other.installation)) conflicts.push({ type: "Instalacion", label: row.installation, day: row.day, a: row, b: other });
    });
  });
  return conflicts;
}

function filteredScheduleRows() {
  return scheduleMasterRows().filter((row) => {
    const professorMatch = scheduleFilters.professor === "todos" || row.professor === scheduleFilters.professor;
    const dayMatch = scheduleFilters.day === "todos" || row.day === scheduleFilters.day;
    const disciplineMatch = scheduleFilters.discipline === "todos" || row.discipline === scheduleFilters.discipline;
    const installationMatch = scheduleFilters.installation === "todos" || row.installation === scheduleFilters.installation;
    return professorMatch && dayMatch && disciplineMatch && installationMatch;
  });
}

function professorColor(name) {
  const palette = ["#006a8e", "#b33a3a", "#008566", "#8a5d00", "#5551a6", "#0f766e", "#a8552a", "#2563eb"];
  const index = normalizeText(name).split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) % palette.length;
  return palette[index];
}

function simulatorBaseRows() {
  return scheduleMasterRows().map((row, index) => ({ ...row, simId: `sim-${row.id || index}`, originalId: row.id || "", draftChanged: false }));
}

function simulatorRows() {
  const rows = simulatorState.rows.length ? simulatorState.rows : simulatorBaseRows();
  return rows
    .filter((row) => !/PMT[23]/i.test(row.discipline || ""))
    .map((row, index) => ({ ...row, simId: row.simId || `sim-row-${index}` }))
    .sort((a, b) => scheduleDays.indexOf(a.day) - scheduleDays.indexOf(b.day) || timeToMinutes(a.start) - timeToMinutes(b.start));
}

function ensureSimulatorDraft() {
  if (!simulatorState.rows.length) {
    simulatorState = { rows: simulatorBaseRows(), scenarioName: simulatorState.scenarioName || "Escenario base", updatedAt: new Date().toISOString() };
    saveSimulator();
  }
}

function resetSimulatorFromMaster() {
  simulatorState = { rows: simulatorBaseRows(), scenarioName: "Escenario desde Calendario Maestro", updatedAt: new Date().toISOString() };
  simulatorFilters.selectedId = simulatorState.rows[0]?.simId || "";
  saveSimulator();
  addAudit("simulador horarios", "Borrador reiniciado desde Calendario Maestro");
  render();
  toast("Simulador reiniciado desde el calendario maestro");
}

function selectedSimulatorRow() {
  const rows = simulatorRows();
  return rows.find((row) => row.simId === simulatorFilters.selectedId) || rows[0] || null;
}

function updateSimulatorRow(id, patch) {
  ensureSimulatorDraft();
  simulatorState.rows = simulatorState.rows.map((row) => (row.simId === id ? { ...row, ...patch, draftChanged: true } : row));
  simulatorState.updatedAt = new Date().toISOString();
  saveSimulator();
}

function moveSimulatorRow(id, minutes) {
  const row = simulatorRows().find((item) => item.simId === id);
  if (!row) return;
  const start = Math.max(360, Math.min(1260, timeToMinutes(row.start) + minutes));
  const duration = Math.max(30, timeToMinutes(row.end) - timeToMinutes(row.start));
  updateSimulatorRow(id, { start: minutesToTime(start), end: minutesToTime(Math.min(1320, start + duration)) });
  render();
}

function dayOffset(currentDay, offset) {
  const currentIndex = scheduleDays.indexOf(currentDay);
  const next = Math.max(0, Math.min(scheduleDays.length - 1, currentIndex + offset));
  return scheduleDays[next] || currentDay;
}

function simulatorConflicts(rows = simulatorRows()) {
  const conflicts = [];
  rows.forEach((row, index) => {
    rows.slice(index + 1).forEach((other) => {
      if (!overlap(row, other)) return;
      if (normalizeText(row.professor) && normalizeText(row.professor) === normalizeText(other.professor)) conflicts.push({ type: "professor", title: "Conflicto de profesor", label: row.professor, day: row.day, a: row, b: other });
      if (normalizeText(row.installation) && normalizeText(row.installation) === normalizeText(other.installation)) conflicts.push({ type: "installation", title: "Conflicto de instalacion", label: row.installation, day: row.day, a: row, b: other });
    });
  });
  return conflicts;
}

function rowsForOperationalSummary(rows, professor) {
  const professorRows = rows.filter((row) => row.professor === professor);
  const officialHours = professorRows.filter((row) => row.source === "official").reduce((sum, row) => sum + (timeToMinutes(row.end) - timeToMinutes(row.start)) / 60, 0);
  const bookingHours = professorRows.filter((row) => row.source === "booking").reduce((sum, row) => sum + (timeToMinutes(row.end) - timeToMinutes(row.start)) / 60, 0);
  const byDay = scheduleDays.map((day) => professorRows.filter((row) => row.day === day)).filter((items) => items.length);
  const campusHours = byDay.reduce((sum, items) => {
    const starts = items.map((row) => timeToMinutes(row.start));
    const ends = items.map((row) => timeToMinutes(row.end));
    return sum + (Math.max(...ends) - Math.min(...starts)) / 60;
  }, 0);
  const totalHours = officialHours + bookingHours;
  const deadTime = Math.max(0, campusHours - totalHours);
  const efficiency = campusHours ? Math.round((totalHours / campusHours) * 100) : 0;
  return { officialHours, bookingHours, totalHours, deadTime, campusHours, efficiency };
}

function simulatorSuggestions(rows = simulatorRows()) {
  const professors = Array.from(new Set(rows.map((row) => row.professor).filter(Boolean))).sort();
  return professors.flatMap((professor) => {
    const items = rows.filter((row) => row.professor === professor);
    return scheduleDays.flatMap((day) => {
      const dayRows = items.filter((row) => row.day === day).sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
      return dayRows.slice(0, -1).map((row, index) => {
        const next = dayRows[index + 1];
        const gap = (timeToMinutes(next.start) - timeToMinutes(row.end)) / 60;
        if (gap < 2) return null;
        return `Oportunidad detectada: mover clase de las ${next.start} a las ${row.end} para reducir tiempo muerto de ${professor}.`;
      }).filter(Boolean);
    });
  }).slice(0, 8);
}

function filteredSimulatorRows() {
  return simulatorRows().filter((row) => {
    const dayMatch = simulatorFilters.day === "todos" || row.day === simulatorFilters.day;
    const professorMatch = simulatorFilters.professor === "todos" || row.professor === simulatorFilters.professor;
    const installationMatch = simulatorFilters.installation === "todos" || row.installation === simulatorFilters.installation;
    return dayMatch && professorMatch && installationMatch;
  });
}

function simulatorAvailabilityAt(day, time) {
  const minute = timeToMinutes(time);
  const busyRows = simulatorRows().filter((row) => row.day === day && timeToMinutes(row.start) <= minute && timeToMinutes(row.end) > minute);
  const busyProfessors = new Set(busyRows.map((row) => row.professor));
  const busyInstallations = new Set(busyRows.map((row) => row.installation));
  const professors = Array.from(new Set(simulatorRows().map((row) => row.professor).filter(Boolean))).sort();
  const installations = Array.from(new Set([...knownInstallations, ...simulatorRows().map((row) => row.installation).filter(Boolean)])).sort();
  return {
    freeProfessors: professors.filter((name) => !busyProfessors.has(name)),
    busyProfessors: professors.filter((name) => busyProfessors.has(name)),
    freeInstallations: installations.filter((name) => !busyInstallations.has(name)),
    busyInstallations: installations.filter((name) => busyInstallations.has(name))
  };
}

function classSimulatorTeachers() {
  return collaboratorRows()
    .map((row) => ({
      id: String(row.__id || row.Nomina || row.nomina || row.Colaboradores || ""),
      name: String(row.Colaboradores || row.nombre_completo || row.full_name || "").trim()
    }))
    .filter((row) => row.name)
    .sort((a, b) => a.name.localeCompare(b.name, "es"));
}

function classSimulatorRowsByArea(area) {
  return classScheduleSimulatorRows
    .filter((row) => row.area === area)
    .sort((a, b) => classSimulatorDays.indexOf(a.day) - classSimulatorDays.indexOf(b.day) || timeToMinutes(a.start_time) - timeToMinutes(b.start_time));
}

function classSimulatorOverlaps({ area, day, start_time, end_time }) {
  const start = timeToMinutes(start_time);
  const end = timeToMinutes(end_time);
  return classScheduleSimulatorRows.filter((row) => (
    row.area === area
    && row.day === day
    && start < timeToMinutes(row.end_time)
    && timeToMinutes(row.start_time) < end
  ));
}

function classSimulatorTeacherKey(row) {
  const teacherId = String(row?.teacher_id || "").trim();
  if (teacherId) return `id:${teacherId}`;
  const teacherName = normalizeText(row?.teacher_name || row?.professor || "");
  return teacherName ? `name:${teacherName}` : "";
}

function classSimulatorTeacherOverlaps({ teacher_id, teacher_name, day, start_time, end_time }) {
  const teacherKey = classSimulatorTeacherKey({ teacher_id, teacher_name });
  if (!teacherKey) return [];
  const start = timeToMinutes(start_time);
  const end = timeToMinutes(end_time);
  return classScheduleSimulatorRows.filter((row) => (
    classSimulatorTeacherKey(row) === teacherKey
    && row.day === day
    && start < timeToMinutes(row.end_time)
    && timeToMinutes(row.start_time) < end
  ));
}

function classSimulatorDurationRows(row) {
  const start = timeToMinutes(row.start_time);
  const end = timeToMinutes(row.end_time);
  return Math.max(1, Math.round((end - start) / 30));
}

function classSimulatorTimeLabel(value) {
  const minutes = timeToMinutes(value);
  if (!Number.isFinite(minutes)) return value;
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const suffix = hour >= 12 ? "p.m." : "a.m.";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${String(minute).padStart(2, "0")} ${suffix}`;
}

async function registerClassSimulator(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const teacherId = String(formData.get("teacher_id") || "");
  const teacher = classSimulatorTeachers().find((item) => item.id === teacherId);
  const payload = {
    area: String(formData.get("area") || ""),
    discipline: String(formData.get("discipline") || "").trim(),
    teacher_id: teacherId,
    teacher_name: teacher?.name || "",
    start_time: String(formData.get("start_time") || ""),
    end_time: String(formData.get("end_time") || "")
  };
  const days = formData.getAll("days").map(String);
  classSimulatorTeacherConflictIds = new Set();
  classSimulatorTeacherConflictMessage = "";
  if (!teacher) {
    toast("Selecciona un profesor");
    return;
  }
  if (!payload.discipline) {
    toast("Escribe la disciplina de la clase");
    return;
  }
  if (!classSimulatorAreas.includes(payload.area)) {
    toast("Selecciona Spinning o Fitness");
    return;
  }
  if (!days.length) {
    toast("Selecciona una frecuencia");
    return;
  }
  if (timeToMinutes(payload.end_time) <= timeToMinutes(payload.start_time)) {
    toast("La hora de fin debe ser mayor a la hora de inicio");
    return;
  }
  if (supabaseClient && currentUser?.auth === "supabase") {
    await loadClassScheduleSimulatorCloud();
  }
  const teacherConflicts = days.flatMap((day) => classSimulatorTeacherOverlaps({ ...payload, day }));
  if (teacherConflicts.length) {
    classSimulatorTeacherConflictIds = new Set(teacherConflicts.map((row) => row.id));
    classSimulatorTeacherConflictMessage = "El profesor ya tiene una clase asignada en ese horario.";
    render();
    toast(classSimulatorTeacherConflictMessage);
    return;
  }
  const conflicts = days.flatMap((day) => classSimulatorOverlaps({ ...payload, day }));
  if (conflicts.length) {
    const conflict = conflicts[0];
    toast(`Empalme detectado: ${conflict.area} ${conflict.day} ${conflict.start_time}-${conflict.end_time}`);
    return;
  }
  const now = new Date().toISOString();
  const rows = days.map((day) => normalizeClassSimulatorRow({
    id: crypto.randomUUID(),
    ...payload,
    day,
    created_at: now
  })).filter(Boolean);
  const result = await saveClassSimulatorRows(rows);
  classSimulatorTeacherConflictIds = new Set();
  classSimulatorTeacherConflictMessage = "";
  addAudit("simulador clases", `${rows.length} clase(s) registradas en ${payload.area}`);
  form.reset();
  render();
  toast(result.cloud ? "Clase guardada en Supabase" : "Clase registrada en el simulador");
}

function normalizeStudentGender(value) {
  const clean = normalizeText(value);
  if (["f", "femenino", "mujer"].includes(clean)) return "Femenino";
  if (["m", "masculino", "hombre"].includes(clean)) return "Masculino";
  return "No especificado";
}

function normalizeStudentLevel(value) {
  const clean = normalizeText(value);
  return clean.includes("pos") || clean.includes("maestr") || clean.includes("doctor") ? "Posgrado" : "Profesional";
}

function isEmptyStudentValue(value) {
  const clean = normalizeText(value).replace(/\s+/g, " ");
  return ["", "#n/a", "na", "n/a", "n a", "sin dato", "sindato", "null", "undefined"].includes(clean);
}

function parseOptionalSemester(value) {
  if (isEmptyStudentValue(value)) return { value: null, warning: false };
  const match = String(value ?? "").match(/\d{1,2}/);
  if (!match) return { value: null, warning: true };
  const semester = Number(match[0]);
  if (!Number.isInteger(semester) || semester < 1 || semester > 12) return { value: null, warning: true };
  return { value: semester, warning: false };
}

function parseStudentDatabaseCsv(text) {
  const rows = parseCsv(text);
  if (rows.length < 2) return { payload: [], minimalPayload: [], errors: [{ row: 1, message: "El CSV no tiene registros" }], warnings: [], omitted: 0 };
  const originalHeaders = rows[0].map((header) => String(header || "").trim());
  const headers = originalHeaders.map(headerKey);
  const columnFor = (aliases) => aliases.map(headerKey).map((alias) => headers.indexOf(alias)).find((index) => index >= 0);
  const columns = {
    matricula: columnFor(["matricula", "matrícula"]),
    genero: columnFor(["genero", "género", "sexo"]),
    carrera: columnFor(["carrera", "programa", "programa academico", "programa académico"]),
    major: columnFor(["v_Clave Major Agrupado", "clave major agrupado", "major"]),
    campus: columnFor(["nombre campus", "campus"]),
    periodoAcad: columnFor(["periodo acad", "periodo academico", "periodo académico"]),
    programaDesc: columnFor(["desc programa acad", "desc programa académico", "programa academico", "programa académico"]),
    semestre: columnFor(["semestre"]),
    nivel: columnFor(["desc nivel acad alumno", "nivel", "nivel escolar", "grado escolar", "grado", "escolaridad"]),
    gradoEscolar: columnFor(["desc nivel acad alumno", "grado escolar", "grado", "nivel escolar"])
  };
  if (columns.matricula === undefined) {
    return {
      payload: [],
      minimalPayload: [],
      errors: [{ row: 1, message: "Falta columna requerida: matricula" }],
      warnings: [],
      omitted: 0
    };
  }
  const errors = [];
  const warnings = [];
  const seen = new Set();
  const payload = [];
  let omitted = 0;
  const optionalColumns = [
    ["carrera", "carrera"],
    ["genero", "genero"],
    ["nivel", "nivel o grado escolar"],
    ["semestre", "semestre"],
    ["periodoAcad", "periodo academico"]
  ];
  optionalColumns.forEach(([key, label]) => {
    if (columns[key] === undefined) warnings.push({ row: 1, message: `Columna opcional no encontrada: ${label}` });
  });
  rows.slice(1).forEach((values, index) => {
    const rowNumber = index + 2;
    const matricula = String(values[columns.matricula] || "").trim().toUpperCase();
    const carrera = meaningfulAcademicValue([
      columns.carrera === undefined ? "" : values[columns.carrera],
      columns.major === undefined ? "" : values[columns.major],
      columns.programaDesc === undefined ? "" : values[columns.programaDesc]
    ]);
    const semesterResult = columns.semestre === undefined ? { value: null, warning: false } : parseOptionalSemester(values[columns.semestre]);
    const semestre = semesterResult.value;
    const genero = columns.genero === undefined ? "No especificado" : normalizeStudentGender(values[columns.genero]);
    const nivel_escolar = columns.nivel === undefined ? "Profesional" : normalizeStudentLevel(values[columns.nivel]);
    const grado_escolar = String(values[columns.gradoEscolar] || values[columns.nivel] || "").trim();
    if (!matricula) {
      omitted += 1;
      warnings.push({ row: rowNumber, message: "Registro omitido por matricula vacia" });
      return;
    }
    if (seen.has(matricula)) {
      omitted += 1;
      warnings.push({ row: rowNumber, message: `Registro omitido por matricula duplicada: ${matricula}` });
      return;
    }
    seen.add(matricula);
    if (!carrera) warnings.push({ row: rowNumber, message: "Carrera vacia; se cargara sin carrera" });
    if (semesterResult.warning) warnings.push({ row: rowNumber, message: "Semestre no reconocido; se cargara vacio" });
    const rawPayload = {};
    originalHeaders.forEach((header, columnIndex) => {
      if (header) rawPayload[header] = String(values[columnIndex] || "").trim();
    });
    payload.push({
      ...rawPayload,
      Matricula: matricula,
      Genero: genero,
      "Desc Programa Acad": carrera,
      Carrera: carrera,
      Semestre: semestre,
      "Desc Nivel Acad Alumno": grado_escolar || nivel_escolar,
      "Nombre Campus": columns.campus !== undefined ? String(values[columns.campus] || "").trim() : "",
      "Periodo acad": columns.periodoAcad !== undefined ? String(values[columns.periodoAcad] || "").trim() : ""
    });
  });
  return {
    payload,
    minimalPayload: payload
      .filter((row) => /^A0[0-9]{6,8}$/.test(row.Matricula))
      .map((row) => ({
        matricula: row.Matricula,
        genero: row.Genero || "No especificado",
        carrera: meaningfulAcademicValue([row.Carrera, row["v_Clave Major Agrupado"], row["Desc Programa Acad"]], "Sin carrera"),
        semestre: row.Semestre || 1,
        nivel_escolar: normalizeStudentLevel(row["Desc Nivel Acad Alumno"])
      })),
    errors,
    warnings,
    omitted
  };
}

function normalizeGymSite(value) {
  const clean = normalizeText(value);
  if (clean.includes("emis") || clean.includes("hospital")) return "EMIS";
  if (clean.includes("wellness") || clean.includes("gimnasio") || clean.includes("well")) return "Wellness";
  return "";
}

function parseGymDate(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (/^\d{5,6}$/.test(raw)) {
    const excelDate = new Date((Number(raw) - 25569) * 86400 * 1000);
    if (!Number.isNaN(excelDate.getTime())) return excelDate.toISOString().slice(0, 10);
  }
  const iso = raw.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  if (iso) {
    const [, year, month, day] = iso;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  const slash = raw.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})/);
  if (slash) {
    let [, first, second, year] = slash;
    if (year.length === 2) year = `20${year}`;
    const day = Number(first) > 12 ? first : Number(second) > 12 ? second : first;
    const month = day === first ? second : first;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return "";
}

function parseGymTime(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const match = raw.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?/);
  if (!match) return raw;
  const hour = match[1].padStart(2, "0");
  const minute = match[2].padStart(2, "0");
  const second = (match[3] || "00").padStart(2, "0");
  return `${hour}:${minute}:${second}`;
}

function parseGymAttendanceCsv(text) {
  const rows = parseCsv(text);
  if (rows.length < 2) return { payload: [], warnings: [], errors: [{ row: 1, message: "El CSV no tiene registros" }], omitted: 0 };
  const originalHeaders = rows[0].map((header) => String(header || "").trim());
  const headers = originalHeaders.map(headerKey);
  const columnFor = (aliases) => aliases.map(headerKey).map((alias) => headers.indexOf(alias)).find((index) => index >= 0);
  const columns = {
    id: columnFor(["id"]),
    matricula: columnFor(["matricula", "matricula"]),
    nombreCompleto: columnFor(["nombre completo", "nombre_completo", "nombre"]),
    fecha: columnFor(["fecha"]),
    hora: columnFor(["hora"]),
    sitio: columnFor(["sitio"]),
    observaciones: columnFor(["observaciones", "observacion", "notas"])
  };
  const required = [
    ["id", "id"],
    ["matricula", "matricula"],
    ["fecha", "fecha"],
    ["sitio", "Sitio"]
  ];
  const missing = required.filter(([key]) => columns[key] === undefined).map(([, label]) => label);
  if (missing.length) {
    return { payload: [], warnings: [], errors: missing.map((name) => ({ row: 1, message: `Falta columna requerida: ${name}` })), omitted: 0 };
  }
  const payload = [];
  const warnings = [];
  const seen = new Set();
  let omitted = 0;
  rows.slice(1).forEach((values, index) => {
    const rowNumber = index + 2;
    const id_origen = String(values[columns.id] || "").trim();
    const matricula = String(values[columns.matricula] || "").trim().toUpperCase();
    const fecha = parseGymDate(values[columns.fecha]);
    const hora = columns.hora === undefined ? "" : parseGymTime(values[columns.hora]);
    const sitio = normalizeGymSite(values[columns.sitio]);
    const nombre_completo = columns.nombreCompleto === undefined ? "" : String(values[columns.nombreCompleto] || "").trim();
    const observaciones = columns.observaciones === undefined ? "" : String(values[columns.observaciones] || "").trim();
    const rowWarnings = [];
    if (!id_origen) rowWarnings.push("id vacio");
    if (!matricula) rowWarnings.push("matricula vacia");
    if (!fecha) rowWarnings.push("fecha invalida");
    if (!sitio) rowWarnings.push("Sitio invalido");
    if (rowWarnings.length) {
      omitted += 1;
      warnings.push({ row: rowNumber, message: `Registro omitido: ${rowWarnings.join("; ")}` });
      return;
    }
    const key = [id_origen, matricula, fecha, hora, sitio].join("|");
    if (seen.has(key)) {
      omitted += 1;
      warnings.push({ row: rowNumber, message: "Registro duplicado dentro del CSV; se omitio" });
      return;
    }
    seen.add(key);
    payload.push({
      id_origen,
      matricula,
      nombre_completo: nombre_completo || null,
      fecha,
      hora: hora || null,
      sitio,
      observaciones: observaciones || null,
      created_by: currentUser?.id || null
    });
  });
  return { payload, warnings, errors: [], omitted };
}

async function replaceStudentDatabaseFromCsv(file) {
  if (!supabaseClient || !canUseAuthorizedUploads()) {
    toast("Este perfil no tiene permiso para cargar la base de alumnos");
    return;
  }
  if (!window.confirm("Esta carga sustituirá la Base Maestra de alumnos actual. ¿Deseas continuar?")) return;
  studentDatabaseImporting = true;
  render();
  try {
    const text = await file.text();
    const { payload, minimalPayload, errors, warnings, omitted } = parseStudentDatabaseCsv(text);
    if (errors.length) {
      toast(`CSV con errores: fila ${errors[0].row}, ${errors[0].message}`);
      return;
    }
    if (!payload.length) {
      toast("El CSV no tiene alumnos validos");
      return;
    }
    toast("Reemplazando Base de datos_alumnos en Supabase");
    const deleteResult = await supabaseClient.rpc("clear_student_master_for_authorized_upload");
    if (deleteResult.error) throw deleteResult.error;
    const chunkSize = 500;
    for (let index = 0; index < payload.length; index += chunkSize) {
      const { error } = await supabaseClient.from("Base de datos_alumnos").insert(payload.slice(index, index + chunkSize));
      if (error) throw error;
    }
    for (let index = 0; index < minimalPayload.length; index += chunkSize) {
      const { error } = await supabaseClient.from("students_minimal").upsert(minimalPayload.slice(index, index + chunkSize), { onConflict: "matricula" });
      if (error) throw error;
    }
    await loadStudentDatabase();
    const warningSummary = warnings.length ? `, ${warnings.length} advertencias` : "";
    const omittedSummary = omitted ? `, ${omitted} omitidos` : "";
    addAudit("importacion", `${payload.length} alumnos cargados en Base de datos_alumnos${omittedSummary}${warningSummary}`);
    recordUploadSuccess("general.student-database");
    toast(`Carga lista: ${payload.length} cargados${omittedSummary}${warningSummary}`);
  } catch (error) {
    console.error(error);
    toast(`No se pudo cargar alumnos${supabaseErrorDetail(error) ? `: ${supabaseErrorDetail(error)}` : ""}`);
  } finally {
    studentDatabaseImporting = false;
    render();
  }
}

async function loadSupabaseCaptures() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const rows = [];
  const pageSize = 1000;
  for (let offset = 0; ; offset += pageSize) {
    const { data, error } = await supabaseClient
      .from("participations")
      .select("id, matricula, area_key, period_key, status, operation_label, metadata, created_at, students_minimal(genero, carrera, semestre, nivel_escolar)")
      .order("created_at", { ascending: false })
      .range(offset, offset + pageSize - 1);
    if (error) {
      cloudStatus = "Supabase conectado, pendiente permisos";
      toast("No pude leer capturas de Supabase todavia");
      return;
    }
    rows.push(...(data || []));
    if (!data || data.length < pageSize) break;
  }
  cloudCaptures = rows.map(participationFromCloud);
  cloudStatus = "Supabase conectado";
}

async function loadVivenciaParticipantDetails() {
  const rows = [];
  const pageSize = 1000;
  const maxRows = 12000;
  const countResponse = await supabaseClient
    .from("vivencia_participant_details")
    .select("id", { count: "exact", head: true });
  const totalCount = countResponse.error ? 0 : Number(countResponse.count || 0);
  for (let offset = 0; offset < maxRows; offset += pageSize) {
    const response = await supabaseClient
      .from("vivencia_participant_details")
      .select("*")
      .order("created_at", { ascending: false })
      .range(offset, offset + pageSize - 1);
    if (response.error) return { data: [], error: response.error, count: 0 };
    rows.push(...(response.data || []));
    if (!response.data || response.data.length < pageSize) break;
  }
  return { data: rows, error: null, count: totalCount || rows.length };
}

async function loadVivenciaEvents() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const { data, error } = await supabaseClient
    .from("vivencia_events")
    .select("*")
    .is("archived_at", null)
    .order("event_date", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(1500);
  vivenciaEventsLoaded = true;
  if (error) {
    vivenciaEventsAvailable = false;
    vivenciaEvents = [];
    vivenciaEventMetrics = [];
    vivenciaParticipants = [];
    vivenciaParticipantDetailsCount = 0;
    vivenciaParticipantUploads = [];
    vivenciaEventImages = [];
    vivenciaDashboardSettings = { impact_goal: 3800 };
    vivenciaEventImages = [];
    console.error(error);
    return;
  }
  const [metricsResult, participantsResult, uploadsResult, imagesResult, settingsResult] = await Promise.all([
    supabaseClient
      .from("vivencia_event_metrics")
      .select("*")
      .order("event_date", { ascending: false })
      .limit(1500),
    loadVivenciaParticipantDetails(),
    supabaseClient
      .from("vivencia_participant_uploads")
      .select("*")
      .order("upload_date", { ascending: false })
      .limit(200),
    supabaseClient
      .from("vivencia_event_images")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3000),
    supabaseClient
      .from("vivencia_dashboard_settings")
      .select("impact_goal, updated_at")
      .eq("id", 1)
      .maybeSingle()
  ]);
  if (metricsResult.error || participantsResult.error || uploadsResult.error || imagesResult.error || settingsResult.error) {
    console.warn(metricsResult.error || participantsResult.error || uploadsResult.error || imagesResult.error || settingsResult.error);
  }
  vivenciaEventsAvailable = true;
  vivenciaEvents = data || [];
  vivenciaEventMetrics = metricsResult.error ? [] : (metricsResult.data || []);
  vivenciaParticipantUploads = uploadsResult.error ? [] : (uploadsResult.data || []);
  vivenciaParticipantDetailsCount = participantsResult.error
    ? 0
    : Number(participantsResult.count || participantsResult.data?.length || 0);
  vivenciaEventImages = (imagesResult.error ? [] : (imagesResult.data || [])).map((image) => ({
    ...image,
    public_url: supabaseClient.storage.from("vivencia-event-images").getPublicUrl(image.storage_path).data.publicUrl
  }));
  vivenciaDashboardSettings = settingsResult.error || !settingsResult.data
    ? { impact_goal: 3800 }
    : { ...settingsResult.data, impact_goal: Number(settingsResult.data.impact_goal || 3800) };
  vivenciaParticipants = (participantsResult.error ? [] : (participantsResult.data || [])).map((participant) => {
    const student = findStudentInDatabase(participant.matricula) || {};
    return {
      ...participant,
      genero: participant.genero || student.genero || "No especificado",
      carrera: participant.carrera || student.carrera || "Sin carrera",
      semestre: participant.semestre || student.semestre || "",
      nivel_escolar: participant.nivel_escolar || student.nivel || "Sin nivel"
    };
  });
}

async function loadCommunicationEvents() {
  communicationEventsLoaded = true;
  if (!supabaseClient || currentUser?.auth !== "supabase") {
    communicationEvents = [];
    communicationParticipants = [];
    communicationParticipantUploads = [];
    communicationEventsAvailable = true;
    communicationParticipantsAvailable = true;
    communicationDashboardSettings = { impact_goal: 3800 };
    return;
  }
  const [eventsResult, settingsResult, participantsResult, uploadsResult] = await Promise.all([
    supabaseClient
      .from("communication_events")
      .select("*")
      .is("archived_at", null)
      .order("event_date", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(1500),
    supabaseClient
      .from("communication_dashboard_settings")
      .select("impact_goal, updated_at")
      .eq("id", 1)
      .maybeSingle(),
    supabaseClient
      .from("communication_participants")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(12000),
    supabaseClient
      .from("communication_participant_uploads")
      .select("*")
      .order("upload_date", { ascending: false })
      .limit(200)
  ]);
  if (eventsResult.error) {
    communicationEvents = [];
    communicationParticipants = [];
    communicationParticipantUploads = [];
    communicationEventsAvailable = false;
    communicationParticipantsAvailable = !participantsResult.error;
    communicationDashboardSettings = { impact_goal: 3800 };
    console.warn("No se pudo cargar el centro de eventos de Comunicación", eventsResult.error);
    return;
  }
  communicationEventsAvailable = true;
  communicationEvents = eventsResult.data || [];
  communicationParticipantsAvailable = !participantsResult.error && !uploadsResult.error;
  communicationParticipantUploads = uploadsResult.error ? [] : (uploadsResult.data || []);
  communicationParticipants = (participantsResult.error ? [] : (participantsResult.data || [])).map((participant) => {
    const student = findStudentInDatabase(participant.matricula) || {};
    return {
      ...participant,
      genero: participant.genero || student.genero || "No especificado",
      carrera: participant.carrera || student.carrera || "Sin carrera",
      semestre: participant.semestre || student.semestre || "",
      nivel_escolar: participant.nivel_escolar || student.nivel || "Sin nivel"
    };
  });
  if (!communicationParticipantsAvailable) {
    console.warn("Falta activar las tablas de participantes de Comunicación", participantsResult.error || uploadsResult.error);
  }
  communicationDashboardSettings = settingsResult.error || !settingsResult.data
    ? { impact_goal: 3800 }
    : { ...settingsResult.data, impact_goal: Number(settingsResult.data.impact_goal || 3800) };
}

async function loadCommunicationDiffusionImages() {
  if (!supabaseClient || currentUser?.auth !== "supabase") {
    communicationDiffusionImages = [];
    communicationDiffusionAvailable = true;
    communicationDiffusionLoading = false;
    return;
  }
  communicationDiffusionLoading = true;
  let { data, error } = await supabaseClient
    .from("communication_diffusion_images")
    .select("slot_key, image_index, title, storage_path, file_name, mime_type, file_size, updated_at")
    .order("updated_at", { ascending: false });
  if (error && String(error.message || "").includes("image_index")) {
    const fallback = await supabaseClient
      .from("communication_diffusion_images")
      .select("slot_key, title, storage_path, file_name, mime_type, file_size, updated_at")
      .order("updated_at", { ascending: false });
    data = (fallback.data || []).map((row) => ({ ...row, image_index: 1 }));
    error = fallback.error;
  }
  communicationDiffusionLoading = false;
  if (error) {
    communicationDiffusionImages = [];
    communicationDiffusionAvailable = false;
    console.warn("No se pudo cargar Imágenes de difusión", error);
    return;
  }
  communicationDiffusionAvailable = true;
  communicationDiffusionImages = (data || []).map((row) => ({
    ...row,
    image_index: Number(row.image_index || 1),
    public_url: supabaseClient.storage.from("communication-diffusion").getPublicUrl(row.storage_path).data.publicUrl
  }));
}

function planningValue(row, aliases) {
  const keys = Object.keys(row || {});
  const wanted = aliases.map(headerKey);
  const key = keys.find((candidate) => wanted.includes(headerKey(candidate)));
  return key ? row[key] : "";
}

function normalizePlanningArea(value) {
  const area = normalizeText(value);
  const compactArea = area.replace(/\s+/g, "");
  if (compactArea === "comunicacion" || compactArea.startsWith("comunicaci")) return "comunicacion";
  if (compactArea === "intramuros") return "intramuros";
  if (compactArea === "vivencia") return "vivencia";
  return area;
}

function normalizePlanningCalendarDate(value) {
  const date = parseGymDate(value);
  if (!date) return "";
  const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return "";
  const [, year, month, day] = match;
  const parsed = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  const isValid = parsed.getUTCFullYear() === Number(year)
    && parsed.getUTCMonth() + 1 === Number(month)
    && parsed.getUTCDate() === Number(day);
  return isValid ? date : "";
}

function getPlanningCalendarActivityId(row, rowIndex = "") {
  const timestamp = planningValue(row, ["Marca temporal", "Timestamp", "timestamp"]);
  const responsible = planningValue(row, ["Responsable", "responsible"]);
  const status = planningValue(row, ["Estatus", "Estado", "status"]);
  const rawId = [
    getPlanningActivityId(row),
    normalizeText(timestamp),
    normalizeText(responsible),
    normalizeText(status),
    rowIndex
  ].join("|");
  return btoa(unescape(encodeURIComponent(rawId))).replace(/=+$/, "");
}

function normalizePlanningCalendarRow(row, rowIndex = "") {
  const cells = Array.isArray(row?.__cells) ? row.__cells : [];
  return {
    id: getPlanningCalendarActivityId(row, rowIndex),
    planningActivityId: getPlanningActivityId(row),
    date: normalizePlanningCalendarDate(planningValue(row, ["Fecha específica", "Fecha especifica", "Fecha", "specificDate"]) || cells[5]),
    area: normalizePlanningArea(planningValue(row, ["Área", "Area", "area"]) || cells[1]),
    activity: String(planningValue(row, ["Actividad", "activity"]) || cells[3] || "").trim(),
    month: String(planningValue(row, ["Mes", "month"]) || cells[2] || "").trim(),
    week: String(planningValue(row, ["Semana", "week"]) || cells[4] || "").trim(),
    timestamp: String(planningValue(row, ["Marca temporal", "Timestamp", "timestamp"]) || cells[0] || "").trim(),
    responsible: String(planningValue(row, ["Responsable", "responsible"]) || "").trim(),
    status: String(planningValue(row, ["Estatus", "Estado", "status"]) || "").trim(),
    place: String(planningValue(row, ["Lugar", "Ubicación", "Ubicacion", "Sede", "location", "place"]) || "").trim()
  };
}

function planningEventOverrideFor(activity) {
  if (!activity?.id) return null;
  const planningActivityId = activity.planningActivityId || activity.id;
  return planningEventOverrides.find((row) => row.area === activity.area && row.planning_activity_id === planningActivityId) || null;
}

function applyPlanningEventOverride(activity) {
  const override = planningEventOverrideFor(activity);
  if (!override) return activity;
  return {
    ...activity,
    activity: override.event_name || activity.activity,
    date: override.event_date || activity.date,
    responsible: override.responsible_name || activity.responsible,
    status: override.status || activity.status,
    notes: override.notes || "",
    __overrideId: override.id,
    __original: {
      activity: activity.activity,
      date: activity.date,
      responsible: activity.responsible,
      status: activity.status
    }
  };
}

function planningActivitiesForArea(rows, areaId) {
  return (rows || [])
    .map((row, index) => normalizePlanningCalendarRow(row, index))
    .filter((row) => row.activity
      && !normalizeText(row.activity).startsWith("__ocultar_actividad__")
      && row.area === normalizePlanningArea(areaId))
    .map(applyPlanningEventOverride)
    .sort((a, b) => String(a.date || "9999-12-31").localeCompare(String(b.date || "9999-12-31")));
}

function planningCalendarBaseDate(activities, preferredDate) {
  if (preferredDate instanceof Date && !Number.isNaN(preferredDate.getTime())) return preferredDate;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dated = (activities || [])
    .filter((activity) => activity.date)
    .map((activity) => new Date(`${activity.date}T00:00:00`))
    .filter((date) => !Number.isNaN(date.getTime()))
    .sort((a, b) => a - b);
  return dated.find((date) => date >= today) || dated[0] || today;
}

function renderPlanningMonthlyCalendar(activities, baseDate, areaId = "") {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = Array.from({ length: (firstDay.getDay() + 6) % 7 }, () => null);
  for (let day = 1; day <= lastDay.getDate(); day += 1) days.push(new Date(year, month, day));
  while (days.length % 7) days.push(null);
  const activitiesByDay = new Map();
  (activities || []).forEach((activity) => {
    if (!activity.date || !activity.date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}-`)) return;
    const day = Number(activity.date.slice(-2));
    if (!activitiesByDay.has(day)) activitiesByDay.set(day, []);
    activitiesByDay.get(day).push(activity);
  });
  return `
    <article class="chart-panel planning-calendar-panel">
      <div class="chart-title-row">
        <div><p class="eyebrow">Calendario mensual</p><h3>${baseDate.toLocaleDateString("es-MX", { month: "long", year: "numeric" })}</h3></div>
        <div class="planning-month-controls">
          <button type="button" data-planning-month="previous" data-planning-area="${escapeHtml(areaId)}" aria-label="Mes anterior" title="Mes anterior">&#8249;</button>
          <span>Lunes a domingo</span>
          <button type="button" data-planning-month="next" data-planning-area="${escapeHtml(areaId)}" aria-label="Mes siguiente" title="Mes siguiente">&#8250;</button>
        </div>
      </div>
      <div class="planning-calendar">
        ${["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((label) => `<strong>${label}</strong>`).join("")}
        ${days.map((date) => {
          if (!date) return `<div class="planning-calendar-day muted" aria-hidden="true"></div>`;
          const dayActivities = activitiesByDay.get(date.getDate()) || [];
          return `
            <div class="planning-calendar-day">
              <time datetime="${year}-${String(month + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}">${date.getDate()}</time>
              ${dayActivities.slice(0, 3).map((activity, activityIndex) => `<button type="button" class="${escapeHtml(activity.calendarClass || "")}" data-planning-detail="${escapeHtml(activity.id)}" data-planning-instance="calendar:${escapeHtml(activity.date)}:${escapeHtml(activity.id)}:${activityIndex}">${escapeHtml(activity.activity)}</button>`).join("")}
              ${dayActivities.length > 3 ? `<em>+${dayActivities.length - 3}</em>` : ""}
            </div>`;
        }).join("")}
      </div>
    </article>`;
}

function renderPlanningActivityDetail(activity) {
  if (!activity) return "";
  const formattedDate = activity.date
    ? new Date(`${activity.date}T00:00:00`).toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })
    : "Sin fecha";
  const areaLabel = activity.area === "comunicacion"
    ? "Comunicación"
    : activity.area === "intramuros" ? "Intramuros" : activity.area;
  if (activity.source === "intramuros-role") {
    return `
      <div class="planning-modal-backdrop" data-planning-overlay role="presentation">
      <aside class="planning-detail-panel" role="dialog" aria-modal="true" aria-labelledby="planningDetailTitle" tabindex="-1">
        <div class="planning-detail-heading">
          <div><p class="eyebrow">Rol de juego · ${escapeHtml(activity.tournament || "Intramuros")}</p><h3 id="planningDetailTitle">${escapeHtml(activity.activity)}</h3></div>
          <button type="button" class="planning-detail-close" data-close-planning-detail aria-label="Cerrar detalle" title="Cerrar detalle">&times;</button>
        </div>
        <dl>
          <div><dt>Fecha</dt><dd>${escapeHtml(formattedDate)}</dd></div>
          <div><dt>Hora</dt><dd>${escapeHtml(activity.time || "Sin hora")}</dd></div>
          <div><dt>Cancha</dt><dd>${escapeHtml(activity.place || "Sin cancha")}</dd></div>
          <div><dt>Semana</dt><dd>${escapeHtml(activity.week || "Sin semana")}</dd></div>
          <div><dt>Grupo / rama</dt><dd>${escapeHtml([activity.group, activity.branch].filter(Boolean).join(" · ") || "Sin dato")}</dd></div>
          <div><dt>Estado</dt><dd>${escapeHtml(activity.status || "Pendiente")}</dd></div>
          <div><dt>Resultado</dt><dd>${escapeHtml(activity.result || "Pendiente")}</dd></div>
          <div><dt>Tipo de uso</dt><dd>${escapeHtml(activity.usageType || "Intramuros")}</dd></div>
        </dl>
      </aside>
      </div>`;
  }
  const editable = activity.area === "comunicacion"
    && supabaseClient
    && currentUser?.auth === "supabase"
    && canEditArea("comunicacion")
    && planningEventOverridesAvailable;
  if (activity.area === "comunicacion") {
    const statusOptions = ["Planeado", "En proceso", "Completado", "Cancelado", "Reprogramado"];
    return `
      <div class="planning-modal-backdrop" data-planning-overlay role="presentation">
      <aside class="planning-detail-panel" role="dialog" aria-modal="true" aria-labelledby="planningDetailTitle" tabindex="-1">
        <div class="planning-detail-heading">
          <div><p class="eyebrow">Evento de Comunicación</p><h3 id="planningDetailTitle">${escapeHtml(activity.activity)}</h3></div>
          <button type="button" class="planning-detail-close" data-close-planning-detail aria-label="Cerrar detalle" title="Cerrar detalle">&times;</button>
        </div>
        <form id="planningActivityForm" class="planning-detail-form">
          <input type="hidden" name="area" value="${escapeHtml(activity.area)}">
          <input type="hidden" name="planning_activity_id" value="${escapeHtml(activity.planningActivityId || activity.id)}">
          <label>
            <span>Evento</span>
            <input name="event_name" value="${escapeHtml(activity.activity)}" ${editable ? "" : "disabled"} required>
          </label>
          <label>
            <span>Fecha</span>
            <input type="date" name="event_date" value="${escapeHtml(activity.date || "")}" ${editable ? "" : "disabled"}>
          </label>
          <label>
            <span>Responsable</span>
            <input name="responsible_name" value="${escapeHtml(activity.responsible || "")}" ${editable ? "" : "disabled"}>
          </label>
          <label>
            <span>Estado</span>
            <select name="status" ${editable ? "" : "disabled"}>
              ${statusOptions.map((status) => `<option value="${escapeHtml(status)}" ${normalizeText(activity.status) === normalizeText(status) ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
              ${activity.status && !statusOptions.some((status) => normalizeText(status) === normalizeText(activity.status)) ? `<option value="${escapeHtml(activity.status)}" selected>${escapeHtml(activity.status)}</option>` : ""}
            </select>
          </label>
          <label class="wide-field">
            <span>Notas de seguimiento</span>
            <textarea name="notes" rows="4" ${editable ? "" : "disabled"}>${escapeHtml(activity.notes || "")}</textarea>
          </label>
          <div class="planning-detail-reference">
            <strong>Vinculado a Planeación</strong>
            <span>${escapeHtml(activity.__original?.activity || activity.activity)} · ${escapeHtml(areaLabel || "Comunicación")} · ${escapeHtml(formattedDate)}</span>
          </div>
          <div class="planning-detail-actions">
            <button type="button" class="ghost-btn" data-close-planning-detail>Cancelar</button>
            <button type="submit" class="primary-btn" ${editable ? "" : "disabled"}>${editable ? "Guardar cambios" : "Solo lectura"}</button>
          </div>
          ${planningEventOverridesAvailable ? "" : `<p class="form-warning">Activa la tabla planning_event_overrides en Supabase para guardar cambios.</p>`}
        </form>
      </aside>
      </div>`;
  }
  return `
    <div class="planning-modal-backdrop" data-planning-overlay role="presentation">
    <aside class="planning-detail-panel" role="dialog" aria-modal="true" aria-labelledby="planningDetailTitle" tabindex="-1">
      <div class="planning-detail-heading">
        <div><p class="eyebrow">Detalle de actividad</p><h3 id="planningDetailTitle">${escapeHtml(activity.activity)}</h3></div>
        <button type="button" class="planning-detail-close" data-close-planning-detail aria-label="Cerrar detalle" title="Cerrar detalle">&times;</button>
      </div>
      <dl>
        <div><dt>Fecha</dt><dd>${escapeHtml(formattedDate)}</dd></div>
        <div><dt>Actividad</dt><dd>${escapeHtml(activity.activity)}</dd></div>
        <div><dt>Área</dt><dd>${escapeHtml(areaLabel || "Sin área")}</dd></div>
        <div><dt>Responsable</dt><dd>${escapeHtml(activity.responsible || "Pendiente")}</dd></div>
        <div><dt>Estado</dt><dd>${escapeHtml(activity.status || "Sin estado")}</dd></div>
      </dl>
    </aside>
    </div>`;
}

function isolatePlanningModalBackground(overlay = $("[data-planning-overlay]")) {
  if (!overlay) return;
  planningModalBackgroundState = [...document.body.children]
    .filter((background) => background !== overlay)
    .map((background) => ({
      background,
      previous: {
        inert: background.inert,
        inertAttribute: background.getAttribute("inert"),
        ariaHidden: background.getAttribute("aria-hidden")
      }
    }));
  planningModalBackgroundState.forEach(({ background }) => {
    background.inert = true;
    background.setAttribute("inert", "");
    background.setAttribute("aria-hidden", "true");
  });
}

function restorePlanningModalBackground() {
  planningModalBackgroundState.forEach(({ background, previous }) => {
    background.inert = previous.inert;
    if (previous.inertAttribute === null) background.removeAttribute("inert");
    else background.setAttribute("inert", previous.inertAttribute);
    if (previous.ariaHidden === null) background.removeAttribute("aria-hidden");
    else background.setAttribute("aria-hidden", previous.ariaHidden);
  });
  planningModalBackgroundState = [];
}

function closePlanningActivityDetail() {
  const trigger = planningDetailTrigger;
  const triggerInstance = planningDetailTriggerInstance;
  const overlay = $("[data-planning-overlay]");
  selectedPlanningActivityId = "";
  document.body.classList.remove("planning-modal-open");
  document.removeEventListener("keydown", handlePlanningDetailKeydown);
  restorePlanningModalBackground();
  if (overlay) overlay.remove();
  render();
  const restoredTrigger = trigger?.isConnected
    ? trigger
    : $$("[data-planning-instance]").find((button) => button.dataset.planningInstance === triggerInstance);
  restoredTrigger?.focus();
  planningDetailTrigger = null;
  planningDetailTriggerInstance = "";
}

function handlePlanningDetailKeydown(event) {
  const modal = $(".planning-detail-panel");
  if (!modal) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closePlanningActivityDetail();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = [...modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
    .filter((element) => !element.disabled);
  if (!focusable.length) {
    event.preventDefault();
    modal.focus();
    return;
  }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function openPlanningActivityDetail(trigger, activityId, triggerInstance) {
  planningDetailTrigger = trigger;
  planningDetailTriggerInstance = triggerInstance;
  selectedPlanningActivityId = activityId;
  document.body.classList.add("planning-modal-open");
  document.addEventListener("keydown", handlePlanningDetailKeydown);
  render();
  const overlay = $("[data-planning-overlay]");
  if (overlay) document.body.appendChild(overlay);
  isolatePlanningModalBackground(overlay);
  $(".planning-detail-close")?.focus();
}

function renderPlanningAreaDashboard(area, rows = planningCalendarRows, loaded = planningCalendarLoaded, error = planningCalendarError, preferredDate, selectedId = null, options = {}) {
  const refreshButton = `<button class="ghost-btn" id="refreshPlanningCalendar" type="button" ${loaded ? "" : "disabled"}>Actualizar calendario</button>`;
  const extraActivities = Array.isArray(options.extraActivities) ? options.extraActivities : [];
  const planningActivities = loaded && !error ? planningActivitiesForArea(rows, area.id) : [];
  const layer = options.layer || "all";
  const layerControls = options.showLayerSelector ? `
    <div class="intramuros-calendar-layers" role="group" aria-label="Contenido del calendario">
      ${[["all", "Todo"], ["planning", "Actividades"], ["roles", "Juegos"]].map(([value, label]) => `<button type="button" data-intramuros-calendar-layer="${value}" class="${layer === value ? "active" : ""}">${label}</button>`).join("")}
    </div>` : "";
  const transientState = !loaded && !extraActivities.length
    ? `<section class="planning-calendar-state" aria-live="polite"><strong>Cargando calendario...</strong><span>Consultando Planeación Semestral y Roles de Juego.</span>${refreshButton}</section>`
    : error && !extraActivities.length
      ? `<section class="planning-calendar-state error" role="alert"><strong>No se pudo cargar el calendario</strong><span>${escapeHtml(error)}</span>${refreshButton}</section>`
      : "";
  if (transientState) {
    if (!options.showLayerSelector) return transientState;
    return `<section class="planning-area-dashboard"><div class="planning-area-compact-head"><div><p class="eyebrow">Planeación + Roles de Juego</p><h3>Calendario operativo</h3></div><div class="planning-area-actions">${layerControls}</div></div>${transientState}</section>`;
  }
  const activities = (layer === "planning" ? planningActivities : layer === "roles" ? extraActivities : [...planningActivities, ...extraActivities])
    .sort((a, b) => String(a.date || "9999-12-31").localeCompare(String(b.date || "9999-12-31")));
  if (!activities.length) return `<section class="planning-area-dashboard"><div class="planning-area-compact-head"><div><p class="eyebrow">Planeación + Roles de Juego</p><h3>Calendario operativo</h3></div><div class="planning-area-actions">${layerControls}${refreshButton}</div></div><section class="planning-calendar-state"><strong>No hay actividades para ${escapeHtml(area.name)}</strong><span>${layer === "roles" ? "Carga equipos o reservaciones desde Roles de Juego." : "Planeación Semestral no contiene registros para esta área."}</span></section></section>`;
  const dated = activities.filter((activity) => activity.date);
  const pending = activities.filter((activity) => !activity.date);
  const storedMonth = typeof planningCalendarMonthByArea !== "undefined" ? planningCalendarMonthByArea[area.id] : "";
  const storedDate = storedMonth ? new Date(`${storedMonth}-01T00:00:00`) : undefined;
  const baseDate = planningCalendarBaseDate(activities, preferredDate || storedDate);
  if (typeof planningCalendarMonthByArea !== "undefined" && Object.hasOwn(planningCalendarMonthByArea, area.id)) {
    planningCalendarMonthByArea[area.id] = `${baseDate.getFullYear()}-${String(baseDate.getMonth() + 1).padStart(2, "0")}`;
  }
  const todayKey = new Date().toISOString().slice(0, 10);
  const upcoming = dated.filter((activity) => activity.date >= todayKey).slice(0, 6);
  const agenda = upcoming.length ? upcoming : dated.slice(0, 6);
  const effectiveSelectedId = selectedId === null && typeof selectedPlanningActivityId !== "undefined" ? selectedPlanningActivityId : selectedId;
  const selected = activities.find((activity) => activity.id === effectiveSelectedId);
  const showHeader = !options.compactHeader;
  return `
    <section class="planning-area-dashboard">
      ${showHeader ? `<div class="vivencia-hero planning-area-hero">
        <div><p class="eyebrow">Planeación Semestral</p><h3>${escapeHtml(area.name)}</h3><p>Calendario operativo y seguimiento de actividades</p></div>
        <div class="planning-area-actions">${layerControls}<span>${activities.length} actividades</span>${refreshButton}</div>
      </div>` : `<div class="planning-area-compact-head"><div><p class="eyebrow">Planeación + Roles de Juego</p><h3>Calendario operativo</h3></div><div class="planning-area-actions">${layerControls}<span>${activities.length} registros visibles</span>${refreshButton}</div></div>`}
      <div class="kpi-grid planning-kpi-strip">
        <div class="kpi"><span>Actividades</span><strong>${activities.length}</strong><em>total del área</em></div>
        <div class="kpi"><span>Con fecha</span><strong>${dated.length}</strong><em>en calendario</em></div>
        <div class="kpi"><span>Sin fecha</span><strong>${pending.length}</strong><em>requieren programación</em></div>
      </div>
      <div class="planning-dashboard-grid">
        ${renderPlanningMonthlyCalendar(dated, baseDate, area.id)}
        <article class="chart-panel planning-agenda-panel">
          <div class="chart-title-row"><div><p class="eyebrow">Agenda</p><h3>Próximas actividades</h3></div><span>${agenda.length}</span></div>
          <div class="planning-agenda-list">
            ${agenda.length ? agenda.map((activity) => `<button type="button" class="${escapeHtml(activity.calendarClass || "")}" data-planning-detail="${escapeHtml(activity.id)}" data-planning-instance="agenda:${escapeHtml(activity.id)}"><time>${escapeHtml(new Date(`${activity.date}T00:00:00`).toLocaleDateString("es-MX", { day: "numeric", month: "short" }))}</time><span>${escapeHtml(activity.activity)}</span><em>${escapeHtml(activity.status || "Sin estado")}</em></button>`).join("") : `<p>No hay actividades fechadas.</p>`}
          </div>
        </article>
        <article class="chart-panel planning-pending-panel">
          <div class="chart-title-row"><div><p class="eyebrow">Seguimiento</p><h3>Sin fecha</h3></div><span>${pending.length}</span></div>
          <div class="planning-pending-list">
            ${pending.length ? pending.map((activity) => `<button type="button" data-planning-detail="${escapeHtml(activity.id)}" data-planning-instance="pending:${escapeHtml(activity.id)}"><strong>${escapeHtml(activity.activity)}</strong><span>${escapeHtml(activity.responsible || "Responsable pendiente")}</span></button>`).join("") : `<p>No hay actividades pendientes de fecha.</p>`}
          </div>
        </article>
      </div>
      ${renderPlanningActivityDetail(selected)}
    </section>`;
}

function getPlanningActivityId(row) {
  const cells = Array.isArray(row?.__cells) ? row.__cells : [];
  const area = planningValue(row, ["Área", "Area", "area"]) || cells[1];
  const specificDate = planningValue(row, ["Fecha específica", "Fecha especifica", "Fecha", "specificDate"]) || cells[5];
  const activity = planningValue(row, ["Actividad", "activity"]) || cells[3];
  const rawId = [
    "planeacion-semestral",
    normalizeText(area),
    normalizeText(specificDate),
    normalizeText(activity)
  ].join("|");
  return btoa(unescape(encodeURIComponent(rawId))).replace(/=+$/, "");
}

function isVivenciaPlanningRow(row) {
  return normalizeText(planningValue(row, ["Área", "Area", "area"])) === "vivencia";
}

function buildVivenciaEventPayloadFromPlanningRow(row) {
  if (!isVivenciaPlanningRow(row)) return null;
  const eventName = String(planningValue(row, ["Actividad", "activity"]) || "").trim();
  const eventDate = parseGymDate(planningValue(row, ["Fecha específica", "Fecha especifica", "Fecha", "specificDate"]));
  if (!eventName || !eventDate) return null;
  const planningActivityId = getPlanningActivityId(row);
  return {
    planning_activity_id: planningActivityId,
    event_name: eventName,
    event_date: eventDate,
    campus: "Monterrey",
    status: "planeado",
    source_name: "planeacion_semestral",
    source_row_key: planningActivityId,
    sync_status: "active",
    created_by: currentUser?.id || null
  };
}

function planningRowsFromGrid(grid) {
  const rows = (grid || []).filter((row) => row.some((cell) => String(cell ?? "").trim()));
  if (!rows.length) return [];
  const headers = rows[0].map((header, index) => String(header || `columna_${index + 1}`).trim());
  return rows.slice(1).map((cells) => {
    const row = { __cells: cells };
    headers.forEach((header, index) => {
      row[header] = cells[index] || "";
      row[`columna_${index + 1}`] = cells[index] || "";
    });
    return row;
  });
}

async function fetchPlanningSemestralRows() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10_000);
  try {
    try {
      const response = await fetch(`${PLANNING_SEMESTRAL_CSV_URL}&cacheBust=${Date.now()}`, {
        cache: "no-store",
        signal: controller.signal
      });
      if (!response.ok) throw new Error(`No se pudo leer Planeacion Semestral (${response.status})`);
      const text = await response.text();
      return planningRowsFromGrid(parseCsv(text));
    } catch (remoteError) {
      const fallback = await fetch(`${PLANNING_SEMESTRAL_DATA_URL}?v=20260703-planning-fix`, { cache: "no-store" });
      if (!fallback.ok) throw remoteError;
      const rows = await fallback.json();
      return Array.isArray(rows) ? rows : [];
    }
  } finally {
    clearTimeout(timeoutId);
  }
}

async function loadPlanningCalendarRows() {
  const requestSequence = ++planningCalendarRequestSequence;
  try {
    const rows = await fetchPlanningSemestralRows();
    if (requestSequence !== planningCalendarRequestSequence) return;
    planningCalendarRows = rows;
    planningCalendarError = "";
  } catch (error) {
    if (requestSequence !== planningCalendarRequestSequence) return;
    planningCalendarRows = [];
    planningCalendarError = error?.message || "No se pudo consultar Planeacion Semestral";
  } finally {
    if (requestSequence === planningCalendarRequestSequence) planningCalendarLoaded = true;
  }
}

async function loadPlanningEventOverrides() {
  planningEventOverridesLoaded = true;
  planningEventOverridesAvailable = true;
  if (!supabaseClient || currentUser?.auth !== "supabase") {
    planningEventOverrides = [];
    return;
  }
  const { data, error } = await supabaseClient
    .from("planning_event_overrides")
    .select("*")
    .order("updated_at", { ascending: false });
  if (error) {
    planningEventOverrides = [];
    planningEventOverridesAvailable = false;
    console.warn("No se pudieron cargar ajustes de calendario", error);
    return;
  }
  planningEventOverrides = data || [];
}

async function savePlanningActivityOverride(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const area = normalizePlanningArea(values.area);
  if (area !== "comunicacion") return;
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("comunicacion")) {
    toast("Necesitas permisos de Comunicación para guardar");
    return;
  }
  const sourceActivity = planningActivitiesForArea(planningCalendarRows, area)
    .find((activity) => activity.id === values.planning_activity_id || activity.planningActivityId === values.planning_activity_id);
  if (!sourceActivity) {
    toast("No encontré el evento de Planeación vinculado");
    return;
  }
  const payload = {
    area,
    planning_activity_id: values.planning_activity_id,
    event_name: String(values.event_name || "").trim() || sourceActivity.activity,
    event_date: values.event_date || null,
    responsible_name: String(values.responsible_name || "").trim(),
    status: String(values.status || "").trim(),
    notes: String(values.notes || "").trim(),
    updated_by: currentUser?.id || null,
    updated_at: new Date().toISOString()
  };
  const { data, error } = await supabaseClient
    .from("planning_event_overrides")
    .upsert(payload, { onConflict: "area,planning_activity_id" })
    .select()
    .single();
  if (error) {
    planningEventOverridesAvailable = false;
    console.error(error);
    toast("No se pudo guardar el ajuste de Comunicación");
    render();
    return;
  }
  const saved = data || payload;
  const index = planningEventOverrides.findIndex((row) => row.area === area && row.planning_activity_id === values.planning_activity_id);
  if (index >= 0) planningEventOverrides[index] = saved;
  else planningEventOverrides.unshift(saved);
  planningEventOverridesAvailable = true;
  addAudit("comunicacion", `Ajuste de evento ${payload.event_name}`);
  toast("Evento de Comunicación actualizado");
  render();
}

async function syncVivenciaEventsFromPlanningRows(rows, client, currentUserId = currentUser?.id || null) {
  const errors = [];
  const payloadByPlanningId = new Map();
  (rows || []).forEach((row) => {
    const payload = buildVivenciaEventPayloadFromPlanningRow(row);
    if (!payload?.planning_activity_id) return;
    if (!payloadByPlanningId.has(payload.planning_activity_id)) {
      payloadByPlanningId.set(payload.planning_activity_id, {
        ...payload,
        created_by: currentUserId
      });
    }
  });
  const payload = Array.from(payloadByPlanningId.values());
  if (!payload.length) return { found: 0, created: 0, existing: 0, errors };

  const ids = payload.map((row) => row.planning_activity_id);
  const existingResult = await client
    .from("vivencia_events")
    .select("planning_activity_id")
    .in("planning_activity_id", ids);
  if (existingResult.error) {
    errors.push(supabaseErrorDetail(existingResult.error) || existingResult.error.message || "No se pudo revisar duplicados");
    return { found: payload.length, created: 0, existing: 0, errors };
  }

  const existingIds = new Set((existingResult.data || []).map((row) => row.planning_activity_id).filter(Boolean));
  const toInsert = payload.filter((row) => !existingIds.has(row.planning_activity_id));
  if (!toInsert.length) return { found: payload.length, created: 0, existing: existingIds.size, errors };

  const insertResult = await client.from("vivencia_events").insert(toInsert);
  if (insertResult.error) {
    errors.push(supabaseErrorDetail(insertResult.error) || insertResult.error.message || "No se pudieron crear eventos");
    return { found: payload.length, created: 0, existing: existingIds.size, errors };
  }
  return { found: payload.length, created: toInsert.length, existing: existingIds.size, errors };
}

async function syncVivenciaEventsFromPlanning() {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("vivencia")) {
    toast("Necesitas permisos de Vivencia para sincronizar");
    return;
  }
  vivenciaPlanningSyncing = true;
  vivenciaEventImportResult = null;
  render();
  try {
    const rows = await fetchPlanningSemestralRows();
    const result = await syncVivenciaEventsFromPlanningRows(rows, supabaseClient, currentUser?.id || null);
    vivenciaEventImportResult = {
      source: "Sincronizacion desde Planeacion",
      loaded: result.created,
      omitted: result.existing,
      warnings: result.errors.map((message) => ({ row: 0, message })),
      found: result.found,
      created: result.created,
      existing: result.existing,
      errors: result.errors,
      blocked: Boolean(result.errors.length)
    };
    addAudit("vivencia-planeacion-sync", `${result.found} encontrados, ${result.created} creados, ${result.existing} existentes`);
    await loadVivenciaEvents();
    toast(result.errors.length ? "Sincronizacion terminada con errores" : `Sincronizacion lista: ${result.created} nuevos`);
  } catch (error) {
    console.error(error);
    vivenciaEventImportResult = {
      source: "Sincronizacion desde Planeacion",
      loaded: 0,
      omitted: 0,
      warnings: [{ row: 0, message: error.message || "Error desconocido" }],
      found: 0,
      created: 0,
      existing: 0,
      errors: [error.message || "Error desconocido"],
      blocked: true
    };
    toast(`No se pudo sincronizar: ${error.message || "revisa la conexion"}`);
  } finally {
    vivenciaPlanningSyncing = false;
    render();
  }
}

function vivenciaValue(row, aliases) {
  const keys = Object.keys(row || {});
  const wanted = aliases.map(headerKey);
  const key = keys.find((candidate) => wanted.includes(headerKey(candidate)));
  return key ? row[key] : "";
}

function vivenciaBoolean(value) {
  if (typeof value === "boolean") return value;
  const clean = normalizeText(value);
  return ["si", "sí", "true", "1", "x", "con cobro", "insignia"].includes(clean);
}

function vivenciaOptionalNumber(value) {
  const clean = String(value ?? "").trim().replace(/[$,%\s]/g, "").replace(",", ".");
  if (!clean || ["na", "n/a", "#n/a", "sin dato"].includes(normalizeText(clean))) return null;
  const number = Number(clean);
  return Number.isFinite(number) && number >= 0 ? number : null;
}

function vivenciaStatus(value) {
  const clean = normalizeText(value);
  if (clean.includes("realiz")) return "realizado";
  if (clean.includes("cancel")) return "cancelado";
  if (clean.includes("posp")) return "pospuesto";
  return "planeado";
}

function vivenciaSourceKey(payload) {
  return [
    payload.campus,
    payload.event_date,
    payload.event_name,
    payload.discipline,
    payload.classification,
    payload.responsible_name
  ].map((value) => headerKey(value)).join("|");
}

function vivenciaRowsFromGrid(grid) {
  const rows = (grid || []).filter((row) => row.some((cell) => String(cell ?? "").trim()));
  if (!rows.length) return [];
  const eventNameHeaders = new Set(["nombredelevento", "nombreevento", "eventname", "evento", "actividad", "nombreactividad"]);
  const eventDateHeaders = new Set(["fechadelevento", "fechaevento", "eventdate", "fecha"]);
  const headerIndex = rows.findIndex((row, index) => {
    if (index > 20) return false;
    const keys = row.map((cell) => headerKey(cell));
    return keys.some((key) => eventNameHeaders.has(key)) && keys.some((key) => eventDateHeaders.has(key));
  });
  const headers = rows[headerIndex >= 0 ? headerIndex : 0].map((header, index) => String(header || `columna_${index + 1}`).trim());
  return rows.slice((headerIndex >= 0 ? headerIndex : 0) + 1).map((cells) => {
    const row = { __cells: cells };
    headers.forEach((header, index) => {
      row[header] = cells[index] || "";
      row[`columna_${index + 1}`] = cells[index] || "";
    });
    return row;
  });
}

function vivenciaCell(row, position) {
  return row?.__cells?.[position - 1] ?? row?.[`columna_${position}`] ?? "";
}

function parseVivenciaEventRows(rows, sourceName) {
  const payload = [];
  const warnings = [];
  const errors = [];
  const seen = new Set();

  rows.forEach((row, index) => {
    const rowNumber = index + 2;
    const campus = String(vivenciaValue(row, ["Campus", "Nombre Campus"]) || vivenciaCell(row, 1)).trim() || "Monterrey";
    const eventName = String(vivenciaValue(row, ["Nombre del evento", "Nombre evento", "Evento", "Actividad", "Nombre actividad", "event_name"]) || vivenciaCell(row, 2)).trim();
    const eventDate = parseGymDate(vivenciaValue(row, ["Fecha del evento", "Fecha", "event_date"]) || vivenciaCell(row, 5));
    if (!eventName || !eventDate) {
      const missing = [
        !eventName ? "nombre del evento" : "",
        !eventDate ? "fecha valida" : ""
      ].filter(Boolean).join(", ");
      warnings.push({ row: rowNumber, message: `Fila omitida: falta ${missing}` });
      return;
    }
    const endDateRaw = vivenciaValue(row, ["Fecha fin", "Fecha final", "end_date"]);
    const endDate = endDateRaw ? parseGymDate(endDateRaw) : "";
    if (endDateRaw && !endDate) warnings.push({ row: rowNumber, message: "Fecha final invalida; se guardara vacia" });
    if (endDate && endDate < eventDate) {
      warnings.push({ row: rowNumber, message: "Fila omitida: la fecha final es anterior a la fecha del evento" });
      return;
    }
    const hasFee = vivenciaBoolean(vivenciaValue(row, ["Evento con cobro", "Con cobro", "has_fee"]) || vivenciaCell(row, 9));
    const feeRaw = vivenciaValue(row, ["Costo de inscripcion", "Costo de inscripción", "Cuota", "fee_amount"]);
    const feeAmount = vivenciaOptionalNumber(feeRaw || vivenciaCell(row, 10));
    if (hasFee && feeAmount === null) warnings.push({ row: rowNumber, message: "Evento con cobro sin costo valido; se guardara en 0" });
    const goalRaw = vivenciaValue(row, ["Meta de captacion", "Meta de captación", "Meta de captación (número de estudiantes)", "Meta", "participation_goal"]);
    const goal = vivenciaOptionalNumber(goalRaw || vivenciaCell(row, 8));
    if (String(goalRaw || "").trim() && goal === null) warnings.push({ row: rowNumber, message: "Meta invalida; se guardara vacia" });
    const result = {
      campus,
      event_name: eventName,
      discipline: String(vivenciaValue(row, ["Disciplina deportiva", "Disciplina", "discipline"]) || vivenciaCell(row, 3) || "").trim() || null,
      classification: String(vivenciaValue(row, ["Clasificacion", "Clasificación", "classification"]) || "").trim() || null,
      event_date: eventDate,
      end_date: endDate || null,
      branch: String(vivenciaValue(row, ["Rama", "branch"]) || vivenciaCell(row, 6) || "").trim() || null,
      target_population: String(vivenciaValue(row, ["Poblacion que participa en el evento", "Población que participa en el evento", "Poblacion", "target_population"]) || "").trim() || null,
      participation_goal: goal === null ? null : Math.round(goal),
      has_fee: hasFee,
      fee_amount: hasFee ? (feeAmount ?? 0) : 0,
      responsible_name: String(vivenciaValue(row, ["Nombre del responsable", "Responsable", "responsible_name"]) || vivenciaCell(row, 11) || "").trim() || null,
      description: String(vivenciaValue(row, ["Descripcion del evento", "Descripción del evento", "Descripcion", "description"]) || "").trim() || null,
      is_signature_event: vivenciaBoolean(vivenciaValue(row, ["Evento insignia", "Es evento insignia", "is_signature_event"])),
      status: vivenciaStatus(vivenciaValue(row, ["Estado", "Estatus", "status"])),
      reported_total_participants: vivenciaOptionalNumber(vivenciaValue(row, ["Numero total de participantes", "Número total de participantes", "Total participantes"])),
      reported_men: vivenciaOptionalNumber(vivenciaValue(row, ["Hombres", "Masculino"])),
      reported_women: vivenciaOptionalNumber(vivenciaValue(row, ["Mujeres", "Femenino"])),
      source_name: sourceName,
      created_by: currentUser?.id || null
    };
    if (!result.classification) result.classification = String(vivenciaCell(row, 4) || "").trim() || null;
    if (!result.target_population) result.target_population = String(vivenciaCell(row, 7) || "").trim() || null;
    if (!result.description) result.description = String(vivenciaCell(row, 12) || "").trim() || null;
    if (!result.is_signature_event) result.is_signature_event = vivenciaBoolean(vivenciaCell(row, 13));
    if (result.reported_total_participants === null) result.reported_total_participants = vivenciaOptionalNumber(vivenciaCell(row, 14));
    if (result.reported_men === null) result.reported_men = vivenciaOptionalNumber(vivenciaCell(row, 15));
    if (result.reported_women === null) result.reported_women = vivenciaOptionalNumber(vivenciaCell(row, 16));
    if (result.reported_total_participants === null && (result.reported_men !== null || result.reported_women !== null)) {
      result.reported_total_participants = (result.reported_men || 0) + (result.reported_women || 0);
    }
    ["reported_total_participants", "reported_men", "reported_women"].forEach((field) => {
      if (result[field] !== null) result[field] = Math.round(result[field]);
    });
    result.source_row_key = vivenciaSourceKey(result);
    if (seen.has(result.source_row_key)) {
      warnings.push({ row: rowNumber, message: "Evento repetido dentro del archivo; se omitio" });
      return;
    }
    seen.add(result.source_row_key);
    payload.push(result);
  });
  return { payload, warnings, errors, omitted: rows.length - payload.length };
}

async function vivenciaRowsFromFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  if (["xlsx", "xls"].includes(extension)) {
    if (!window.XLSX) throw new Error("No esta disponible el lector de Excel");
    const workbook = window.XLSX.read(await file.arrayBuffer(), { type: "array", cellDates: false });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return vivenciaRowsFromGrid(window.XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" }));
  }
  return vivenciaRowsFromGrid(parseCsv(await file.text()));
}

async function vivenciaGridFromFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  if (["xlsx", "xls"].includes(extension)) {
    if (!window.XLSX) throw new Error("No esta disponible el lector de Excel");
    const workbook = window.XLSX.read(await file.arrayBuffer(), { type: "array", cellDates: false });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return window.XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  }
  return parseCsv(await file.text());
}

function parseVivenciaParticipantRows(grid, fileName) {
  const rows = (grid || []).filter((row) => row.some((cell) => String(cell ?? "").trim()));
  const warnings = [];
  if (!rows.length) {
    return { payload: [], warnings: [{ row: 0, message: "El archivo no contiene matriculas" }], omitted: 0 };
  }
  const firstRow = rows[0].map((cell) => headerKey(cell));
  const matriculaAliases = ["matricula", "matrícula", "matricula alumno", "matricula participante", "alumno", "student_id"]
    .map((alias) => headerKey(alias));
  const matriculaColumn = firstRow.findIndex((header) => matriculaAliases.includes(header));
  const hasHeader = matriculaColumn >= 0;
  const columnIndex = hasHeader ? matriculaColumn : 0;
  const dataRows = hasHeader ? rows.slice(1) : rows;
  const seen = new Set();
  const payload = [];
  let omitted = 0;
  dataRows.forEach((row, index) => {
    const rowNumber = (hasHeader ? index + 2 : index + 1);
    const matricula = normalizeMatricula(row[columnIndex]);
    if (!matricula) {
      omitted += 1;
      warnings.push({ row: rowNumber, message: "Matricula vacia; se omitio" });
      return;
    }
    if (!isValidVivenciaMatricula(matricula)) {
      omitted += 1;
      warnings.push({ row: rowNumber, message: "El valor no tiene formato de matricula Tec; se omitio" });
      return;
    }
    if (seen.has(matricula)) {
      omitted += 1;
      warnings.push({ row: rowNumber, message: "Matricula repetida dentro del archivo; se conserva una sola vez para este evento" });
      return;
    }
    seen.add(matricula);
    payload.push({
      matricula,
      source_name: fileName,
      source_row_number: rowNumber,
      created_by: currentUser?.id || null
    });
  });
  return { payload, warnings, omitted };
}

function parseVivenciaCombinedRows(grid, fileName) {
  const rows = (grid || []).filter((row) => row.some((cell) => String(cell ?? "").trim()));
  const warnings = [];
  const participantsByEvent = new Map();
  const totalsByEvent = new Map();
  if (rows.length < 2) return { participantsByEvent, totalsByEvent, warnings, omitted: 0 };

  const headers = rows[0].map((cell) => headerKey(cell));
  const matriculaColumn = headers.findIndex((header) => ["matricula", "matriculas"].includes(header));
  const activityColumns = headers
    .map((header, index) => ({ header, index }))
    .filter((entry) => ["nombredelaactividad", "actividad", "nombreactividad"].includes(entry.header))
    .map((entry) => entry.index);
  const participantActivityColumn = activityColumns[0] ?? -1;
  const summaryActivityColumn = activityColumns.length > 1 ? activityColumns[activityColumns.length - 1] : -1;
  const summaryTotalColumn = headers.findLastIndex((header) => ["datos", "total", "totalparticipantes", "numerototaldeparticipantes"].includes(header));
  let omitted = 0;

  rows.slice(1).forEach((row, index) => {
    const rowNumber = index + 2;
    const matricula = matriculaColumn >= 0 ? normalizeMatricula(row[matriculaColumn]) : "";
    const participantEvent = participantActivityColumn >= 0 ? String(row[participantActivityColumn] || "").trim() : "";
    if (matricula && participantEvent) {
      const key = headerKey(participantEvent);
      const list = participantsByEvent.get(key) || [];
      if (!list.some((item) => item.matricula === matricula)) {
        list.push({
          matricula,
          event_name: participantEvent,
          source_name: fileName,
          source_row_number: rowNumber,
          created_by: currentUser?.id || null
        });
      }
      participantsByEvent.set(key, list);
    } else if (matricula || participantEvent) {
      omitted += 1;
      warnings.push({ row: rowNumber, message: "Fila de participante incompleta; se omitio" });
    }

    const summaryEvent = summaryActivityColumn >= 0 ? String(row[summaryActivityColumn] || "").trim() : "";
    const summaryTotal = summaryTotalColumn >= 0 ? vivenciaOptionalNumber(row[summaryTotalColumn]) : null;
    if (summaryEvent && summaryTotal !== null) {
      totalsByEvent.set(headerKey(summaryEvent), {
        event_name: summaryEvent,
        reported_total_participants: Math.round(summaryTotal)
      });
    }
  });

  return { participantsByEvent, totalsByEvent, warnings, omitted };
}

async function saveVivenciaEvent(event) {
  event.preventDefault();
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("vivencia")) {
    toast("Necesitas acceso autorizado de Vivencia para guardar eventos");
    return;
  }
  const form = new FormData(event.currentTarget);
  const hasFee = form.get("has_fee") === "on";
  const eventId = String(form.get("event_id") || "").trim();
  const payload = {
    campus: String(form.get("campus") || "").trim() || "Monterrey",
    event_name: String(form.get("event_name") || "").trim(),
    discipline: String(form.get("discipline") || "").trim() || null,
    classification: String(form.get("classification") || "").trim() || null,
    event_date: String(form.get("event_date") || ""),
    end_date: String(form.get("end_date") || "") || null,
    branch: String(form.get("branch") || "").trim() || null,
    target_population: String(form.get("target_population") || "").trim() || null,
    participation_goal: vivenciaOptionalNumber(form.get("participation_goal")),
    has_fee: hasFee,
    fee_amount: hasFee ? vivenciaOptionalNumber(form.get("fee_amount")) : 0,
    responsible_name: String(form.get("responsible_name") || "").trim() || null,
    description: String(form.get("description") || "").trim() || null,
    is_signature_event: form.get("is_signature_event") === "on",
    status: vivenciaStatus(form.get("status")),
    source_name: "captura_manual",
    source_row_key: crypto.randomUUID(),
    created_by: currentUser.id
  };
  if (eventId) {
    delete payload.source_name;
    delete payload.source_row_key;
    delete payload.created_by;
  }
  if (!payload.event_name || !payload.event_date) {
    toast("Nombre y fecha del evento son obligatorios");
    return;
  }
  if (payload.end_date && payload.end_date < payload.event_date) {
    toast("La fecha final no puede ser anterior a la fecha del evento");
    return;
  }
  if (hasFee && payload.fee_amount === null) {
    toast("Escribe un costo valido para el evento con cobro");
    return;
  }
  const button = $("#saveVivenciaEvent");
  if (button) {
    button.disabled = true;
    button.textContent = "Guardando...";
  }
  const query = eventId
    ? supabaseClient.from("vivencia_events").update(payload).eq("id", eventId)
    : supabaseClient.from("vivencia_events").insert(payload);
  const { error } = await query;
  if (error) {
    console.error(error);
    toast(`No se pudo guardar el evento: ${supabaseErrorDetail(error) || "revisa la Fase 1 en Supabase"}`);
    if (button) {
      button.disabled = false;
      button.textContent = "Guardar evento";
    }
    return;
  }
  vivenciaEventImportResult = { loaded: 1, omitted: 0, warnings: [], source: eventId ? "Detalle de evento" : "Captura manual" };
  addAudit("vivencia", `${eventId ? "Evento actualizado" : "Evento creado"}: ${payload.event_name}`);
  await loadVivenciaEvents();
  selectedVivenciaEventForDetail = eventId;
  render();
  toast(eventId ? "Detalle del evento actualizado" : "Evento guardado en Supabase");
}

async function importVivenciaEvents(file) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("vivencia")) {
    toast("Necesitas acceso autorizado de Vivencia para cargar eventos");
    return;
  }
  vivenciaEventImporting = true;
  vivenciaEventImportResult = null;
  render();
  try {
    const grid = await vivenciaGridFromFile(file);
	    const rows = vivenciaRowsFromGrid(grid);
	    if (!rows.length) throw new Error("El archivo no contiene eventos");
	    const parsed = parseVivenciaEventRows(rows, file.name);
	    if (parsed.errors.length) {
      vivenciaEventImportResult = {
        loaded: 0,
        omitted: parsed.omitted,
        warnings: [...parsed.errors, ...parsed.warnings],
        source: file.name,
        blocked: true
      };
      toast(`Archivo con errores: fila ${parsed.errors[0].row}, ${parsed.errors[0].message}`);
      return;
    }
	    if (!parsed.payload.length) {
      vivenciaEventImportResult = {
        loaded: 0,
        omitted: parsed.omitted,
        warnings: parsed.warnings.length ? parsed.warnings : [{ row: 0, message: "No se encontraron eventos con nombre y fecha valida" }],
        source: file.name,
        blocked: true
      };
      toast("No encontre eventos con nombre y fecha valida en el archivo");
      return;
    }
    const chunkSize = 300;
	    for (let index = 0; index < parsed.payload.length; index += chunkSize) {
	      const { error } = await supabaseClient
	        .from("vivencia_events")
	        .upsert(parsed.payload.slice(index, index + chunkSize), { onConflict: "source_name,source_row_key" });
	      if (error) throw error;
	    }

	    vivenciaEventImportResult = {
	      loaded: parsed.payload.length,
	      omitted: parsed.omitted,
	      warnings: parsed.warnings,
	      source: file.name
	    };
	    addAudit("vivencia", `${parsed.payload.length} eventos procesados desde ${file.name}`);
	    await loadVivenciaEvents();
	    toast(`Carga lista: ${parsed.payload.length} eventos`);
  } catch (error) {
    console.error(error);
    vivenciaEventImportResult = {
      loaded: 0,
      omitted: 0,
      warnings: [{ row: 0, message: supabaseErrorDetail(error) || error.message || "Error de carga" }],
      source: file.name,
      blocked: true
    };
    toast(`No se pudo cargar eventos: ${supabaseErrorDetail(error) || error.message}`);
  } finally {
    vivenciaEventImporting = false;
    render();
  }
}

async function importVivenciaParticipants(file, eventId) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("vivencia")) {
    toast("Necesitas acceso autorizado de Vivencia para cargar participantes");
    return;
  }
  const eventRow = vivenciaEvents.find((row) => row.id === eventId);
  if (!eventRow) {
    toast("Selecciona un evento valido para cargar participantes");
    return;
  }
  vivenciaParticipantImporting = true;
  vivenciaParticipantImportResult = null;
  selectedVivenciaEventForParticipants = eventId;
  render();
  try {
    const grid = await vivenciaGridFromFile(file);
    const parsed = parseVivenciaParticipantRows(grid, file.name);
    if (!parsed.payload.length) {
      vivenciaParticipantImportResult = {
        loaded: 0,
        omitted: parsed.omitted,
        warnings: parsed.warnings,
        source: file.name,
        blocked: true
      };
      toast("No se encontraron matriculas validas en el archivo");
      return;
    }
    const payload = parsed.payload.map((row) => ({ ...row, event_id: eventId }));
    const { data, error } = await supabaseClient
      .from("vivencia_participants")
      .upsert(payload, { onConflict: "event_id,matricula", ignoreDuplicates: true })
      .select("id, matricula");
    if (error) throw error;
    const loaded = data?.length || 0;
    const duplicates = payload.length - loaded;
    const totalParticipants = vivenciaEventParticipants(eventId).length + loaded;
    const uploadSummary = {
      event_id: eventId,
      upload_date: new Date().toISOString(),
      total_processed: parsed.payload.length,
      total_inserted: loaded,
      duplicates_ignored: duplicates,
      errors_detected: parsed.warnings.length,
      source_name: file.name,
      created_by: currentUser?.id || null
    };
    const { error: uploadError } = await supabaseClient
      .from("vivencia_participant_uploads")
      .insert(uploadSummary);
    if (uploadError) console.warn(uploadError);
    const { error: eventUpdateError } = await supabaseClient
      .from("vivencia_events")
      .update({ reported_total_participants: totalParticipants, updated_at: new Date().toISOString() })
      .eq("id", eventId);
    if (eventUpdateError) console.warn(eventUpdateError);
    vivenciaParticipantImportResult = {
      loaded,
      omitted: parsed.omitted + duplicates,
      warnings: [
        ...parsed.warnings,
        ...(duplicates ? [{ row: 0, message: `${duplicates} matriculas ya estaban cargadas en este evento; se omitieron duplicados` }] : [])
      ],
      source: `${file.name} -> ${eventRow.event_name}`,
      processed: parsed.payload.length,
      duplicates,
      totalParticipants
    };
    addAudit("vivencia", `${loaded} participantes importados para ${eventRow.event_name}`);
    recordUploadSuccess("vivencia.participantes");
    await loadVivenciaEvents();
    toast(`Participantes cargados: ${loaded}. Duplicados ignorados: ${duplicates}`);
  } catch (error) {
    console.error(error);
    vivenciaParticipantImportResult = {
      loaded: 0,
      omitted: 0,
      warnings: [{ row: 0, message: supabaseErrorDetail(error) || error.message || "Error de carga" }],
      source: file.name,
      blocked: true
    };
    toast(`No se pudo cargar participantes: ${supabaseErrorDetail(error) || error.message}`);
  } finally {
    vivenciaParticipantImporting = false;
    render();
  }
}

async function saveVivenciaImpactGoal(event) {
  event.preventDefault();
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("vivencia")) {
    toast("Necesitas permiso de Vivencia para cambiar la meta");
    return;
  }
  const form = new FormData(event.currentTarget);
  const impactGoal = Number(form.get("impact_goal"));
  if (!Number.isInteger(impactGoal) || impactGoal < 1) {
    toast("Escribe una meta válida de al menos 1 alumno");
    return;
  }
  const { error } = await supabaseClient
    .from("vivencia_dashboard_settings")
    .upsert({ id: 1, impact_goal: impactGoal, updated_at: new Date().toISOString(), updated_by: currentUser.id });
  if (error) {
    console.error(error);
    toast(`No se pudo guardar la meta: ${supabaseErrorDetail(error) || error.message}`);
    return;
  }
  vivenciaDashboardSettings = { ...vivenciaDashboardSettings, impact_goal: impactGoal };
  addAudit("vivencia", `Meta de impacto único actualizada a ${impactGoal}`);
  render();
  toast("Meta de alumnos únicos actualizada");
}

function buildCommunicationEventPayloadFromPlanningRow(row) {
  if (normalizePlanningArea(planningValue(row, ["Área", "Area", "area"])) !== "comunicacion") return null;
  const eventName = String(planningValue(row, ["Actividad", "activity"]) || "").trim();
  const eventDate = parseGymDate(planningValue(row, ["Fecha específica", "Fecha especifica", "Fecha", "specificDate"]));
  if (!eventName || !eventDate) return null;
  const planningActivityId = getPlanningActivityId(row);
  return {
    planning_activity_id: planningActivityId,
    event_name: eventName,
    event_date: eventDate,
    campus: "Monterrey",
    responsible_name: String(planningValue(row, ["Responsable", "responsible"]) || "").trim() || null,
    status: vivenciaStatus(planningValue(row, ["Estatus", "Estado", "status"])),
    source_name: "planeacion_semestral_comunicacion",
    source_row_key: planningActivityId,
    created_by: currentUser?.id || null
  };
}

async function saveCommunicationEvent(event) {
  event.preventDefault();
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("comunicacion") || !communicationEventsAvailable) {
    toast("Necesitas acceso autorizado de Comunicación para guardar eventos");
    return;
  }
  const form = new FormData(event.currentTarget);
  const eventId = String(form.get("event_id") || "").trim();
  const payload = {
    campus: String(form.get("campus") || "").trim() || "Monterrey",
    event_name: String(form.get("event_name") || "").trim(),
    discipline: String(form.get("discipline") || "").trim() || null,
    classification: String(form.get("classification") || "").trim() || null,
    event_date: String(form.get("event_date") || ""),
    end_date: String(form.get("end_date") || "") || null,
    branch: String(form.get("branch") || "").trim() || null,
    target_population: String(form.get("target_population") || "").trim() || null,
    participation_goal: vivenciaOptionalNumber(form.get("participation_goal")),
    responsible_name: String(form.get("responsible_name") || "").trim() || null,
    description: String(form.get("description") || "").trim() || null,
    status: vivenciaStatus(form.get("status")),
    reported_total_participants: vivenciaOptionalNumber(form.get("reported_total_participants")),
    reported_men: vivenciaOptionalNumber(form.get("reported_men")),
    reported_women: vivenciaOptionalNumber(form.get("reported_women")),
    source_name: "captura_manual_comunicacion",
    source_row_key: crypto.randomUUID(),
    created_by: currentUser.id
  };
  if (eventId) {
    delete payload.source_name;
    delete payload.source_row_key;
    delete payload.created_by;
  }
  if (!payload.event_name || !payload.event_date) {
    toast("Nombre y fecha del evento son obligatorios");
    return;
  }
  if (payload.end_date && payload.end_date < payload.event_date) {
    toast("La fecha final no puede ser anterior a la fecha del evento");
    return;
  }
  const query = eventId
    ? supabaseClient.from("communication_events").update(payload).eq("id", eventId)
    : supabaseClient.from("communication_events").insert(payload);
  const { error } = await query;
  if (error) {
    console.error(error);
    toast(`No se pudo guardar el evento: ${supabaseErrorDetail(error) || error.message}`);
    return;
  }
  communicationEventImportResult = { loaded: 1, omitted: 0, warnings: [], source: eventId ? "Detalle de evento" : "Captura manual" };
  addAudit("comunicacion", `${eventId ? "Evento actualizado" : "Evento creado"}: ${payload.event_name}`);
  await loadCommunicationEvents();
  selectedCommunicationEventForDetail = eventId;
  render();
  toast(eventId ? "Evento de Comunicación actualizado" : "Evento de Comunicación guardado");
}

async function importCommunicationEvents(file) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("comunicacion") || !communicationEventsAvailable) {
    toast("Necesitas acceso autorizado de Comunicación para cargar eventos");
    return;
  }
  communicationEventImporting = true;
  communicationEventImportResult = null;
  render();
  try {
    const grid = await vivenciaGridFromFile(file);
    const rows = vivenciaRowsFromGrid(grid);
    if (!rows.length) throw new Error("El archivo no contiene eventos");
    const parsed = parseVivenciaEventRows(rows, `comunicacion:${file.name}`);
    if (!parsed.payload.length) throw new Error("No se encontraron eventos con nombre y fecha válida");
    const payload = parsed.payload.map((row) => {
      const { has_fee, fee_amount, is_signature_event, ...communicationRow } = row;
      return communicationRow;
    });
    for (let index = 0; index < payload.length; index += 300) {
      const { error } = await supabaseClient
        .from("communication_events")
        .upsert(payload.slice(index, index + 300), { onConflict: "source_name,source_row_key" });
      if (error) throw error;
    }
    communicationEventImportResult = {
      loaded: payload.length,
      omitted: parsed.omitted,
      warnings: [...parsed.errors, ...parsed.warnings],
      source: file.name
    };
    addAudit("comunicacion", `${payload.length} eventos procesados desde ${file.name}`);
    await loadCommunicationEvents();
    toast(`Carga lista: ${payload.length} eventos de Comunicación`);
  } catch (error) {
    console.error(error);
    communicationEventImportResult = {
      loaded: 0,
      omitted: 0,
      warnings: [{ row: 0, message: supabaseErrorDetail(error) || error.message || "Error de carga" }],
      source: file.name,
      blocked: true
    };
    toast(`No se pudo cargar eventos: ${supabaseErrorDetail(error) || error.message}`);
  } finally {
    communicationEventImporting = false;
    render();
  }
}

function communicationEventParticipants(eventId) {
  return communicationParticipants.filter((participant) => participant.event_id === eventId);
}

async function importCommunicationParticipants(file, eventId) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("comunicacion")) {
    toast("Necesitas acceso autorizado de Comunicación para cargar participantes");
    return;
  }
  if (!communicationParticipantsAvailable) {
    toast("Primero activa las tablas de participantes de Comunicación en Supabase");
    return;
  }
  const eventRow = communicationEvents.find((row) => row.id === eventId);
  if (!eventRow) {
    toast("Selecciona un evento válido para cargar participantes");
    return;
  }
  communicationParticipantImporting = true;
  communicationParticipantImportResult = null;
  selectedCommunicationEventForParticipants = eventId;
  render();
  try {
    const grid = await vivenciaGridFromFile(file);
    const parsed = parseVivenciaParticipantRows(grid, file.name);
    if (!parsed.payload.length) {
      communicationParticipantImportResult = {
        loaded: 0,
        omitted: parsed.omitted,
        warnings: parsed.warnings,
        source: file.name,
        blocked: true
      };
      toast("No se encontraron matrículas válidas en el archivo");
      return;
    }
    const payload = parsed.payload.map((row) => ({ ...row, event_id: eventId }));
    const { data, error } = await supabaseClient
      .from("communication_participants")
      .upsert(payload, { onConflict: "event_id,matricula", ignoreDuplicates: true })
      .select("id, matricula");
    if (error) throw error;
    const loaded = data?.length || 0;
    const duplicates = payload.length - loaded;
    const totalParticipants = communicationEventParticipants(eventId).length + loaded;
    const { error: uploadError } = await supabaseClient
      .from("communication_participant_uploads")
      .insert({
        event_id: eventId,
        upload_date: new Date().toISOString(),
        total_processed: parsed.payload.length,
        total_inserted: loaded,
        duplicates_ignored: duplicates,
        errors_detected: parsed.warnings.length,
        source_name: file.name,
        created_by: currentUser?.id || null
      });
    if (uploadError) console.warn(uploadError);
    const { error: eventUpdateError } = await supabaseClient
      .from("communication_events")
      .update({ reported_total_participants: totalParticipants, updated_at: new Date().toISOString() })
      .eq("id", eventId);
    if (eventUpdateError) console.warn(eventUpdateError);
    communicationParticipantImportResult = {
      loaded,
      omitted: parsed.omitted + duplicates,
      warnings: [
        ...parsed.warnings,
        ...(duplicates ? [{ row: 0, message: `${duplicates} matrículas ya estaban cargadas en este evento; se omitieron duplicados` }] : [])
      ],
      source: `${file.name} -> ${eventRow.event_name}`,
      processed: parsed.payload.length,
      duplicates,
      totalParticipants
    };
    addAudit("comunicacion", `${loaded} participantes importados para ${eventRow.event_name}`);
    recordUploadSuccess("comunicacion.participantes");
    await loadCommunicationEvents();
    toast(`Participantes cargados: ${loaded}. Duplicados ignorados: ${duplicates}`);
  } catch (error) {
    console.error(error);
    communicationParticipantImportResult = {
      loaded: 0,
      omitted: 0,
      warnings: [{ row: 0, message: supabaseErrorDetail(error) || error.message || "Error de carga" }],
      source: file.name,
      blocked: true
    };
    toast(`No se pudo cargar participantes: ${supabaseErrorDetail(error) || error.message}`);
  } finally {
    communicationParticipantImporting = false;
    render();
  }
}

function downloadEventParticipantsTemplate(areaId) {
  const label = areaId === "comunicacion" ? "comunicacion" : "vivencia";
  const csv = ["Matrícula", "A01234567", "A07654321"].join("\n");
  downloadBlob(`\uFEFF${csv}`, `plantilla-participantes-${label}.csv`);
  toast(`Plantilla de participantes de ${areaId === "comunicacion" ? "Comunicación" : "Vivencia"} descargada`);
}

async function syncCommunicationEventsFromPlanning() {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("comunicacion") || !communicationEventsAvailable) {
    toast("Necesitas permisos de Comunicación para sincronizar");
    return;
  }
  communicationPlanningSyncing = true;
  communicationEventImportResult = null;
  render();
  try {
    const rows = await fetchPlanningSemestralRows();
    const payload = rows.map(buildCommunicationEventPayloadFromPlanningRow).filter(Boolean);
    if (!payload.length) throw new Error("No hay eventos de Comunicación con fecha en Planeación");
    const { error } = await supabaseClient
      .from("communication_events")
      .upsert(payload, { onConflict: "planning_activity_id" });
    if (error) throw error;
    communicationEventImportResult = {
      source: "Sincronización desde Planeación",
      loaded: payload.length,
      omitted: 0,
      warnings: []
    };
    addAudit("comunicacion", `${payload.length} eventos sincronizados desde Planeación`);
    await loadCommunicationEvents();
    toast(`Sincronización lista: ${payload.length} eventos`);
  } catch (error) {
    console.error(error);
    communicationEventImportResult = {
      source: "Sincronización desde Planeación",
      loaded: 0,
      omitted: 0,
      warnings: [{ row: 0, message: supabaseErrorDetail(error) || error.message || "Error de sincronización" }],
      blocked: true
    };
    toast(`No se pudo sincronizar: ${supabaseErrorDetail(error) || error.message}`);
  } finally {
    communicationPlanningSyncing = false;
    render();
  }
}

async function saveCommunicationImpactGoal(event) {
  event.preventDefault();
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("comunicacion") || !communicationEventsAvailable) {
    toast("Necesitas permiso de Comunicación para cambiar la meta");
    return;
  }
  const impactGoal = Number(new FormData(event.currentTarget).get("impact_goal"));
  if (!Number.isInteger(impactGoal) || impactGoal < 1) {
    toast("Escribe una meta válida de al menos 1 participante");
    return;
  }
  const { error } = await supabaseClient
    .from("communication_dashboard_settings")
    .upsert({ id: 1, impact_goal: impactGoal, updated_at: new Date().toISOString(), updated_by: currentUser.id });
  if (error) {
    console.error(error);
    toast(`No se pudo guardar la meta: ${supabaseErrorDetail(error) || error.message}`);
    return;
  }
  communicationDashboardSettings = { ...communicationDashboardSettings, impact_goal: impactGoal };
  addAudit("comunicacion", `Meta institucional actualizada a ${impactGoal}`);
  render();
  toast("Meta de Comunicación actualizada");
}

async function deleteCommunicationEvent(eventId) {
  if (!eventId || !supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("comunicacion")) return;
  const eventRow = communicationEvents.find((row) => row.id === eventId);
  if (!eventRow || !window.confirm(`Eliminar ${eventRow.event_name || "este evento"} del historial de Comunicación?`)) return;
  const { error } = await supabaseClient
    .from("communication_events")
    .update({ archived_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq("id", eventId);
  if (error) {
    console.error(error);
    toast(`No se pudo eliminar el evento: ${supabaseErrorDetail(error) || error.message}`);
    return;
  }
  communicationEvents = communicationEvents.filter((row) => row.id !== eventId);
  if (selectedCommunicationEventForDetail === eventId) selectedCommunicationEventForDetail = "";
  render();
  toast("Evento eliminado del historial de Comunicación");
}

async function uploadVivenciaEventImages(files, eventId) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("vivencia")) {
    toast("Necesitas permiso de Vivencia para cargar imágenes");
    return;
  }
  const eventRow = vivenciaEvents.find((row) => row.id === eventId);
  if (!eventRow) {
    toast("Guarda primero el evento para poder asociar sus imágenes");
    return;
  }
  const imageFiles = [...(files || [])];
  if (!imageFiles.length) return;
  const supportedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
  const invalid = imageFiles.find((file) => !supportedTypes.has(file.type) || file.size > 8 * 1024 * 1024);
  if (invalid) {
    toast("Cada imagen debe ser JPG, PNG o WEBP y pesar máximo 8 MB");
    return;
  }
  vivenciaEventImagesUploading = true;
  render();
  const uploadedPaths = [];
  try {
    for (const file of imageFiles) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-");
      const storagePath = `${eventId}/${crypto.randomUUID()}-${safeName || "imagen"}`;
      const { error: storageError } = await supabaseClient.storage
        .from("vivencia-event-images")
        .upload(storagePath, file, { contentType: file.type, upsert: false });
      if (storageError) throw storageError;
      uploadedPaths.push(storagePath);
      const { error: metadataError } = await supabaseClient
        .from("vivencia_event_images")
        .insert({
          event_id: eventId,
          storage_path: storagePath,
          file_name: file.name,
          content_type: file.type,
          uploaded_by: currentUser.id
        });
      if (metadataError) throw metadataError;
    }
    await loadVivenciaEvents();
    addAudit("vivencia", `${imageFiles.length} imágenes cargadas para ${eventRow.event_name}`);
    recordUploadSuccess("vivencia.imagenes");
    toast(`${imageFiles.length} imagen${imageFiles.length === 1 ? "" : "es"} guardada${imageFiles.length === 1 ? "" : "s"} en el evento`);
  } catch (error) {
    console.error(error);
    if (uploadedPaths.length) await supabaseClient.storage.from("vivencia-event-images").remove(uploadedPaths);
    toast(`No se pudieron cargar las imágenes: ${supabaseErrorDetail(error) || error.message}`);
  } finally {
    vivenciaEventImagesUploading = false;
    render();
  }
}

async function deleteVivenciaEventImage(imageId) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("vivencia")) return;
  const image = vivenciaEventImages.find((row) => row.id === imageId);
  if (!image || !window.confirm(`¿Eliminar la imagen ${image.file_name || "seleccionada"}?`)) return;
  const { error } = await supabaseClient.from("vivencia_event_images").delete().eq("id", image.id);
  if (error) {
    console.error(error);
    toast(`No se pudo eliminar la imagen: ${supabaseErrorDetail(error) || error.message}`);
    return;
  }
  const { error: storageError } = await supabaseClient.storage.from("vivencia-event-images").remove([image.storage_path]);
  if (storageError) console.warn(storageError);
  vivenciaEventImages = vivenciaEventImages.filter((row) => row.id !== image.id);
  render();
  toast("Imagen eliminada del evento");
}

async function deleteVivenciaEvent(eventId) {
  if (!eventId || !supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("vivencia")) return;
  const eventRow = vivenciaEvents.find((row) => row.id === eventId);
  const eventName = eventRow?.event_name || "este evento";
  if (!window.confirm(`Eliminar ${eventName} del historial de Vivencia?`)) return;
  const { error } = await supabaseClient
    .from("vivencia_events")
    .update({
      archived_at: new Date().toISOString(),
      sync_status: eventRow?.sync_status === "planning_deleted" ? "planning_deleted" : "detached",
      updated_at: new Date().toISOString()
    })
    .eq("id", eventId);
  if (error) {
    console.error(error);
    toast(`No se pudo eliminar el evento: ${supabaseErrorDetail(error) || error.message}`);
    return;
  }
  vivenciaEvents = vivenciaEvents.filter((row) => row.id !== eventId);
  vivenciaEventMetrics = vivenciaEventMetrics.filter((row) => row.event_id !== eventId);
  vivenciaParticipants = vivenciaParticipants.filter((row) => row.event_id !== eventId);
  if (selectedVivenciaEventForDetail === eventId) selectedVivenciaEventForDetail = "";
  if (selectedVivenciaEventForParticipants === eventId) selectedVivenciaEventForParticipants = "";
  render();
  toast("Evento eliminado del historial");
}

function collaboratorFromCloud(row) {
  return {
    __id: row.nomina,
    __photoPath: row.photo_path || "",
    __photoUrl: "",
    Nomina: row.nomina || "",
    Colaboradores: row.full_name || "",
    Puesto: row.puesto || "",
    Coordinador: row.coordinador || "",
    "% de cursos": row.course_percent ?? "",
    "Playeras Joma": row.playera_joma || "",
    "Talla pants": row.talla_pants || "",
    "correo institucional": row.institutional_email || "",
    "Fecha cumpleaños": row.birthdate_label || "",
    Genero: row.genero || "",
    "Primeros auxilios": row.first_aid === null ? "" : String(Boolean(row.first_aid)),
    "Asistencia a gimnasio de colaboradores": row.gym_attendance ?? "",
    "Contacto de emergencia": row.emergency_contact_1 || "",
    "Numero 1": row.emergency_phone_1 || "",
    "Contacto de emergencia 2": row.emergency_contact_2 || "",
    "Numero 2": row.emergency_phone_2 || "",
    ...(row.custom_data || {})
  };
}

function collaboratorToCloud(row) {
  const baseKeys = new Set([
    "__id", "__photoPath", "__photoUrl", "Nomina", "Colaboradores", "Puesto", "Coordinador", "% de cursos",
    "Playeras Joma", "Talla pants", "correo institucional", "Fecha cumpleaños",
    "Genero", "Primeros auxilios", "Asistencia a gimnasio de colaboradores",
    "Contacto de emergencia", "Numero 1", "Contacto de emergencia 2", "Numero 2"
  ]);
  const customData = Object.fromEntries(Object.entries(row).filter(([key]) => !baseKeys.has(key)));
  const firstAidValue = String(row["Primeros auxilios"] ?? "").toLowerCase();
  return {
    nomina: String(row["Nomina"] || "").trim(),
    full_name: String(row["Colaboradores"] || "").trim(),
    puesto: row["Puesto"] || null,
    coordinador: row["Coordinador"] || null,
    course_percent: row["% de cursos"] === "" ? null : numberFrom(row["% de cursos"]),
    playera_joma: row["Playeras Joma"] || null,
    talla_pants: row["Talla pants"] || null,
    institutional_email: row["correo institucional"] || null,
    birthdate_label: row["Fecha cumpleaños"] || null,
    genero: row["Genero"] || null,
    first_aid: firstAidValue === "true" ? true : firstAidValue === "false" ? false : null,
    gym_attendance: row["Asistencia a gimnasio de colaboradores"] === "" ? null : numberFrom(row["Asistencia a gimnasio de colaboradores"]),
    emergency_contact_1: row["Contacto de emergencia"] || null,
    emergency_phone_1: row["Numero 1"] || null,
    emergency_contact_2: row["Contacto de emergencia 2"] || null,
    emergency_phone_2: row["Numero 2"] || null,
    photo_path: row.__photoPath || null,
    custom_data: customData
  };
}

function supabaseErrorDetail(error) {
  return String(error?.message || error?.details || error?.hint || "").trim();
}

async function loadSupabaseCollaborators({ loadSettings = true } = {}) {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const { data, error } = await supabaseClient
    .from("collaborators")
    .select("*")
    .order("full_name", { ascending: true });
  if (error) {
    collaboratorsCloudLoaded = false;
    toast("No pude leer colaboradores de Supabase");
    return;
  }
  cloudCollaborators = (data || []).filter((row) => !row.archived_at).map(collaboratorFromCloud);
  await loadCollaboratorPhotoUrls();
  collaboratorsCloudLoaded = true;
  if (loadSettings) await loadCollaboratorTableSettings();
}

async function loadPhysicalEvaluations() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const { data, error } = await supabaseClient
    .from("physical_evaluations")
    .select(`
      id,
      collaborator_nomina,
      captured_name,
      captured_email,
      evaluated_at,
      period_key,
      semester_label,
      evaluation_stage,
      discipline,
      gender,
      birthdate,
      source,
      classification_status,
      general_notes,
      physical_evaluation_results (
        test_key,
        numeric_value,
        unit,
        result_status,
        raw_value,
        notes
      )
    `)
    .order("evaluated_at", { ascending: false })
    .limit(2500);
  if (error) {
    physicalEvaluationsLoaded = false;
    console.error(error);
    return;
  }
  physicalEvaluations = data || [];
  physicalEvaluationsLoaded = true;
}

async function loadClassGradeSeedData() {
  if (classGradeSeedRows.length) return classGradeSeedRows;
  try {
    const response = await fetch(CLASS_GRADES_DATA_URL);
    if (!response.ok) throw new Error("No se encontró la base inicial de calificaciones");
    classGradeSeedRows = await response.json();
  } catch (error) {
    console.error(error);
    classGradeSeedRows = [];
  }
  return classGradeSeedRows;
}

function classGradeFromCloud(row) {
  return {
    record_key: row.record_key,
    matricula: row.matricula || "",
    subject_code: row.subject_code || "",
    subject_name: row.subject_name || "",
    crn: row.crn || "",
    group_number: row.group_number || "",
    teacher_name: row.teacher_name || "",
    career_code: row.career_code || "",
    semester_label: row.semester_label || "",
    period_label: row.period_label || "",
    grade: row.grade_text || "",
    source_name: row.source_name || "CD Lista de Alumnos",
    source_row: row.source_row || null,
    updated_at: row.updated_at || ""
  };
}

function classGradeToCloud(row) {
  return {
    record_key: row.record_key,
    matricula: row.matricula,
    subject_code: row.subject_code || null,
    subject_name: row.subject_name,
    crn: row.crn || null,
    group_number: row.group_number || null,
    teacher_name: row.teacher_name || null,
    career_code: row.career_code || null,
    semester_label: row.semester_label || null,
    period_label: row.period_label || null,
    grade_text: row.grade || null,
    source_name: row.source_name || "CD Lista de Alumnos",
    source_row: row.source_row || null,
    updated_by: currentUser?.id || null
  };
}

async function importInitialClassGrades() {
  if (
    classGradesImporting ||
    !supabaseClient ||
    currentUser?.auth !== "supabase" ||
    !canEditArea("clases")
  ) return;
  const seedRows = await loadClassGradeSeedData();
  if (!seedRows.length) return;
  classGradesImporting = true;
  render();
  toast("Cargando historial inicial de calificaciones");
  try {
    const chunkSize = 400;
    for (let index = 0; index < seedRows.length; index += chunkSize) {
      const payload = seedRows.slice(index, index + chunkSize).map(classGradeToCloud);
      const { error } = await supabaseClient
        .from("class_grades")
        .upsert(payload, { onConflict: "record_key" });
      if (error) throw error;
    }
    classGrades = seedRows.map((row) => ({ ...row }));
    classGradesLoaded = true;
    classGradesAvailable = true;
    addAudit("importacion", `${seedRows.length} registros de CD Lista de Alumnos`);
    toast("Historial de calificaciones cargado");
  } catch (error) {
    console.error(error);
    classGradesAvailable = false;
    toast(`No se pudo importar: ${supabaseErrorDetail(error) || "revisa el código SQL"}`);
  } finally {
    classGradesImporting = false;
    render();
  }
}

async function loadClassGrades(options = {}) {
  const seedIfEmpty = options.seedIfEmpty !== false;
  await loadClassGradeSeedData();
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const loadedRows = [];
  const pageSize = 1000;
  for (let offset = 0; ; offset += pageSize) {
    const { data, error } = await supabaseClient
      .from("class_grades")
      .select("*")
      .order("teacher_name", { ascending: true })
      .order("subject_name", { ascending: true })
      .order("matricula", { ascending: true })
      .range(offset, offset + pageSize - 1);
    if (error) {
      classGradesAvailable = false;
      classGradesLoaded = false;
      console.error(error);
      return;
    }
    loadedRows.push(...(data || []).map(classGradeFromCloud));
    if (!data || data.length < pageSize) break;
  }
  classGradesAvailable = true;
  classGrades = loadedRows;
  classGradesLoaded = true;
  if (!classGrades.length && seedIfEmpty) await importInitialClassGrades();
}

function allClassGradeRows() {
  return classGradesLoaded && classGrades.length ? classGrades : classGradeSeedRows;
}

function effectiveClassGradeRows() {
  const rows = allClassGradeRows();
  const semesterBlocks = new Set(rows
    .filter((row) => classGradeSemesterLabel(row))
    .map((row) => classGradeBlockLabel(row))
    .filter(Boolean));
  if (!semesterBlocks.size) return rows;
  return rows.filter((row) => classGradeSemesterLabel(row) || !semesterBlocks.has(classGradeBlockLabel(row)));
}

function normalizeClassGrade(value) {
  const normalized = String(value ?? "").trim().toUpperCase().replace(",", ".");
  if (!normalized) return "";
  if (["BAJA", "NP"].includes(normalized)) return normalized;
  const text = normalizeText(normalized);
  if (text.includes("baja")) return "BAJA";
  if (text.includes("no acredit") || text.includes("reprob") || text === "na") return "NP";
  if (text.includes("acredit") || text.includes("aprob")) return "ACREDITADO";
  const number = Number(normalized);
  if (!Number.isFinite(number) || number < 0 || number > 100) return null;
  return Number.isInteger(number) ? String(number) : String(Math.round(number * 100) / 100);
}

async function updateClassGrade(recordKey, rawValue) {
  const grade = normalizeClassGrade(rawValue);
  if (grade === null) {
    toast("Usa una calificación de 0 a 100, BAJA, NP o deja vacío");
    render();
    return;
  }
  const row = allClassGradeRows().find((item) => item.record_key === recordKey);
  if (!row) return;
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("clases")) {
    toast("Ingresa con Supabase para guardar calificaciones");
    render();
    return;
  }
  const previous = row.grade;
  row.grade = grade;
  const { error } = await supabaseClient
    .from("class_grades")
    .upsert(classGradeToCloud(row), { onConflict: "record_key" });
  if (error) {
    row.grade = previous;
    toast(`No se guardó: ${supabaseErrorDetail(error) || "revisa permisos"}`);
    render();
    return;
  }
  if (!classGradesLoaded) classGrades = classGradeSeedRows.map((item) => ({ ...item }));
  classGradesLoaded = true;
  addAudit("calificacion", `${row.matricula}  -  ${row.subject_name}: ${grade || "pendiente"}`);
  render();
  toast("Calificación guardada");
}

function classGradeLoadGroups() {
  const groups = new Map();
  effectiveClassGradeRows().forEach((row) => {
    const period = classGradeSemesterLabel(row) || classGradeBlockLabel(row) || "SIN PERIODO";
    const block = classGradeBlockLabel(row) || "Sin bloque";
    const source = String(row.source_name || "CD Lista de Alumnos").trim() || "CD Lista de Alumnos";
    const key = `${period}|||${source}`;
    const current = groups.get(key) || {
      key,
      period,
      blocks: new Set(),
      source,
      total: 0,
      captured: 0,
      bajas: 0,
      np: 0,
      pending: 0,
      updatedAt: ""
    };
    current.blocks.add(block);
    current.total += 1;
    const status = classGradeStatus(row);
    if (status === "capturada") current.captured += 1;
    if (status === "baja") current.bajas += 1;
    if (status === "np") current.np += 1;
    if (status === "pendiente") current.pending += 1;
    if (row.updated_at && String(row.updated_at) > String(current.updatedAt || "")) current.updatedAt = row.updated_at;
    groups.set(key, current);
  });
  return [...groups.values()]
    .map((group) => ({ ...group, blockLabel: [...group.blocks].filter(Boolean).sort((a, b) => classPeriodSortValue(a) - classPeriodSortValue(b)).join(" + ") }))
    .sort((a, b) => classPeriodSortValue(b.period) - classPeriodSortValue(a.period) || String(b.period).localeCompare(String(a.period), "es") || b.total - a.total);
}

async function deleteClassGradeLoad(period, source) {
  if (!period || !source) return;
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("clases")) {
    toast("Necesitas acceso autorizado de Clases Deportivas para borrar cargas");
    return;
  }
  if (!window.confirm(`¿Borrar la carga de ${period} / ${source}? Esta acción eliminará esos registros de calificaciones.`)) return;
  const { error } = await supabaseClient
    .from("class_grades")
    .delete()
    .eq("period_label", period)
    .eq("source_name", source);
  if (error) {
    toast(`No se pudo borrar: ${supabaseErrorDetail(error) || error.message}`);
    return;
  }
  addAudit("calificaciones", `Carga eliminada: ${period} / ${source}`);
  await loadClassGrades({ seedIfEmpty: false });
  render();
  toast("Carga de calificaciones eliminada");
}

async function changePhysicalAccessCode() {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !isLeadership()) {
    toast("Necesitas entrar como Dirección para cambiar el código");
    return;
  }
  const input = $("#newPhysicalAccessCode");
  const newCode = String(input?.value || "").trim();
  if (newCode.length < 4 || newCode.length > 20) {
    toast("El código debe tener entre 4 y 20 caracteres");
    return;
  }
  if (!window.confirm("¿Cambiar el código general? El código anterior dejará de funcionar.")) return;
  const button = $("#savePhysicalAccessCode");
  if (button) {
    button.disabled = true;
    button.textContent = "Guardando...";
  }
  const { error } = await supabaseClient.rpc("set_public_physical_evaluation_code", {
    new_code: newCode
  });
  if (error) {
    console.error(error);
    if (button) {
      button.disabled = false;
      button.textContent = "Cambiar código";
    }
    toast(`No se pudo cambiar el código: ${supabaseErrorDetail(error)}`);
    return;
  }
  addAudit("evaluaciones", "Código general del formulario actualizado");
  if (input) input.value = "";
  if (button) {
    button.disabled = false;
    button.textContent = "Cambiar código";
  }
  toast("Código general actualizado");
}

async function loadCollaboratorPhotoUrls() {
  const paths = [...new Set(cloudCollaborators.map((row) => row.__photoPath).filter(Boolean))];
  if (!paths.length) return;
  const urls = new Map();
  const { data, error } = await supabaseClient.storage
    .from("collaborator-photos")
    .createSignedUrls(paths, 60 * 60);
  if (error) {
    console.error(error);
  } else {
    (data || []).forEach((item, index) => {
      const path = item.path || paths[index];
      const signedUrl = item.signedUrl || item.signedURL || "";
      if (path && signedUrl) urls.set(path, signedUrl);
    });
  }

  const unresolvedPaths = paths.filter((path) => !urls.has(path));
  if (unresolvedPaths.length) {
    const fallbackResults = await Promise.allSettled(unresolvedPaths.map(async (path) => {
      const result = await supabaseClient.storage
        .from("collaborator-photos")
        .createSignedUrl(path, 60 * 60);
      if (result.error) throw result.error;
      return { path, signedUrl: result.data?.signedUrl || result.data?.signedURL || "" };
    }));
    fallbackResults.forEach((result) => {
      if (result.status === "fulfilled" && result.value.signedUrl) {
        urls.set(result.value.path, result.value.signedUrl);
      } else if (result.status === "rejected") {
        console.warn("No se pudo resolver una fotografía de colaborador", result.reason);
      }
    });
  }

  cloudCollaborators.forEach((row) => {
    row.__photoUrl = urls.get(row.__photoPath) || "";
  });
}

async function loadCollaboratorTableSettings() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const { data, error } = await supabaseClient
    .from("collaborator_table_settings")
    .select("columns")
    .eq("id", "default")
    .maybeSingle();
  if (error) {
    collaboratorColumnOrder = [];
    collaboratorSettingsLoaded = false;
    return;
  }
  collaboratorColumnOrder = Array.isArray(data?.columns) ? data.columns.filter(Boolean) : [];
  collaboratorSettingsLoaded = true;
}

async function saveCollaboratorColumnOrder(columns) {
  collaboratorColumnOrder = [...columns];
  if (!supabaseClient || !canManageStructure()) return false;
  const { error } = await supabaseClient
    .from("collaborator_table_settings")
    .upsert({
      id: "default",
      columns: collaboratorColumnOrder,
      updated_by: currentUser.id
    }, { onConflict: "id" });
  if (error) {
    console.error(error);
    toast("Falta activar la configuración de columnas en Supabase");
    return false;
  }
  collaboratorSettingsLoaded = true;
  return true;
}

function collaboratorEditorElement(rowId, column) {
  return [...document.querySelectorAll(".collab-cell, .collab-week-picker")]
    .find((element) => element.dataset.rowId === rowId && element.dataset.column === column) || null;
}

function captureCollaboratorEditorViewport(rowId, column) {
  const wrap = $(".collaborator-editor-wrap");
  const row = [...document.querySelectorAll(".collaborator-editor tbody tr")]
    .find((element) => element.dataset.rowId === rowId);
  return {
    rowId,
    column,
    windowX: window.scrollX,
    windowY: window.scrollY,
    rowViewportTop: row?.getBoundingClientRect().top ?? null,
    tableScrollTop: wrap?.scrollTop || 0,
    tableScrollLeft: wrap?.scrollLeft || 0
  };
}

function restoreCollaboratorEditorViewport(state) {
  if (!state) return;
  requestAnimationFrame(() => {
    const wrap = $(".collaborator-editor-wrap");
    if (wrap) {
      wrap.scrollTop = state.tableScrollTop;
      wrap.scrollLeft = state.tableScrollLeft;
    }
    window.scrollTo(state.windowX, state.windowY);
    requestAnimationFrame(() => {
      const row = [...document.querySelectorAll(".collaborator-editor tbody tr")]
        .find((element) => element.dataset.rowId === state.rowId);
      if (row && state.rowViewportTop !== null) {
        window.scrollBy(0, row.getBoundingClientRect().top - state.rowViewportTop);
      }
      const editor = collaboratorEditorElement(state.rowId, state.column);
      const focusTarget = editor?.matches("details") ? editor.querySelector("summary") : editor;
      focusTarget?.focus({ preventScroll: true });
    });
  });
}

async function updateCollaboratorCell(rowId, column, value) {
  if (!supabaseClient || !canManageStructure()) return;
  const editorViewport = captureCollaboratorEditorViewport(rowId, column);
  const row = cloudCollaborators.find((item) => item.__id === rowId);
  if (!row) {
    toast("No encontré el registro para actualizar");
    return;
  }
  const nextValue = typeof value === "string" ? value.trim() : value;
  if (column === "Nomina" && !nextValue) {
    toast("La nómina no puede quedar vacía");
    render();
    restoreCollaboratorEditorViewport(editorViewport);
    return;
  }
  if (column === "Colaboradores" && !nextValue) {
    toast("El nombre no puede quedar vacío");
    render();
    restoreCollaboratorEditorViewport(editorViewport);
    return;
  }
  const previousValue = row[column];
  row[column] = nextValue;
  const payload = collaboratorToCloud(row);
  const { error } = await supabaseClient
    .from("collaborators")
    .update(payload)
    .eq("nomina", rowId);
  if (error) {
    row[column] = previousValue;
    console.error(error);
    toast(error.code === "23505" ? "Esa nómina ya existe" : "No se pudo guardar el cambio");
    render();
    restoreCollaboratorEditorViewport(editorViewport);
    return;
  }
  addAudit("colaboradores", `${column} actualizado para ${payload.nomina}`);
  await loadSupabaseCollaborators();
  render();
  restoreCollaboratorEditorViewport({ ...editorViewport, rowId: payload.nomina || rowId });
  toast("Cambio guardado en línea");
}

async function addCollaboratorRow() {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("colaboradores")) return;
  const nomina = String(window.prompt("Escribe la nómina del nuevo profesor:") || "").trim().toUpperCase();
  if (!nomina) return;
  const fullName = String(window.prompt("Escribe el nombre completo:") || "").trim();
  if (!fullName) {
    toast("El nombre es obligatorio");
    return;
  }
  const row = {
    __id: nomina,
    Nomina: nomina,
    Colaboradores: fullName,
    Puesto: "Profesor",
    Coordinador: "",
    "% de cursos": "",
    "Playeras Joma": "",
    "Talla pants": "",
    "correo institucional": "",
    "Fecha cumpleaños": "",
    Genero: "",
    "Primeros auxilios": "",
    ...Object.fromEntries(collaboratorColumns().filter((column) => !BASE_COLLABORATOR_COLUMNS.includes(column)).map((column) => [column, ""]))
  };
  const { error } = await supabaseClient.from("collaborators").insert(collaboratorToCloud(row));
  if (error) {
    console.error(error);
    const detail = supabaseErrorDetail(error);
    toast(error.code === "23505" ? "Esa nómina ya existe" : `No se pudo agregar el profesor${detail ? `: ${detail}` : ""}`);
    return;
  }
  collaboratorFilter = { coordinator: "todos", shirt: "todos", firstAid: "todos" };
  addAudit("colaboradores", `Alta de ${nomina} - ${fullName}`);
  await loadSupabaseCollaborators();
  render();
  toast("Profesor agregado y gráficas actualizadas");
}

async function addCollaboratorColumn() {
  if (!supabaseClient || !canManageStructure()) return;
  const column = String(window.prompt("Nombre de la nueva columna:") || "").trim();
  if (!column) return;
  const existingColumn = knownCollaboratorColumns().find((item) => item.toLowerCase() === column.toLowerCase());
  if (collaboratorColumns().some((item) => item.toLowerCase() === column.toLowerCase())) {
    toast("Esa columna ya existe");
    return;
  }
  if (existingColumn) {
    const saved = await saveCollaboratorColumnOrder([...collaboratorColumns(), existingColumn]);
    if (!saved) return;
    addAudit("colaboradores", `Columna restaurada: ${existingColumn}`);
    render();
    toast("Columna restaurada al final");
    return;
  }
  if (!cloudCollaborators.length) {
    toast("Primero agrega o importa al menos un profesor");
    return;
  }
  cloudCollaborators.forEach((row) => {
    row[column] = "";
  });
  const payload = cloudCollaborators.map(collaboratorToCloud);
  const { error } = await supabaseClient.from("collaborators").upsert(payload, { onConflict: "nomina" });
  if (error) {
    console.error(error);
    await loadSupabaseCollaborators();
    toast("No se pudo agregar la columna");
    return;
  }
  const saved = await saveCollaboratorColumnOrder([...collaboratorColumns(), column]);
  if (!saved) return;
  addAudit("colaboradores", `Nueva columna: ${column}`);
  await loadSupabaseCollaborators();
  render();
  toast("Columna agregada");
}

async function moveCollaboratorColumn(column, direction) {
  if (!canManageStructure()) return;
  const columns = collaboratorColumns();
  const index = columns.indexOf(column);
  const target = index + direction;
  if (index < 0 || target < 0 || target >= columns.length) return;
  [columns[index], columns[target]] = [columns[target], columns[index]];
  const saved = await saveCollaboratorColumnOrder(columns);
  if (!saved) return;
  addAudit("colaboradores", `Columna ${column} movida ${direction < 0 ? "a la izquierda" : "a la derecha"}`);
  render();
}

async function deleteCollaboratorColumn(column) {
  if (!canManageStructure()) return;
  if (["Nomina", "Colaboradores"].includes(column)) {
    toast("Nómina y colaborador son campos obligatorios");
    return;
  }
  if (!window.confirm(`¿Quitar la columna "${column}" de la tabla?`)) return;
  const nextColumns = collaboratorColumns().filter((item) => item !== column);
  const isCustom = !BASE_COLLABORATOR_COLUMNS.includes(column);
  if (isCustom && cloudCollaborators.length) {
    cloudCollaborators.forEach((row) => {
      delete row[column];
    });
    const { error } = await supabaseClient
      .from("collaborators")
      .upsert(cloudCollaborators.map(collaboratorToCloud), { onConflict: "nomina" });
    if (error) {
      console.error(error);
      await loadSupabaseCollaborators();
      toast("No se pudo eliminar la columna");
      return;
    }
  }
  const saved = await saveCollaboratorColumnOrder(nextColumns);
  if (!saved) return;
  addAudit("colaboradores", `Columna retirada: ${column}`);
  render();
  toast(isCustom ? "Columna eliminada" : "Columna ocultada sin borrar sus datos");
}

async function deleteCollaboratorRow(rowId) {
  if (!supabaseClient || !canManageCollaboratorRows()) {
    toast("No tienes permiso para dar de baja colaboradores");
    return;
  }
  const row = cloudCollaborators.find((item) => item.__id === rowId);
  if (!row) return;
  if (!window.confirm(`¿Dar de baja a ${row.Colaboradores || rowId}? Ya no aparecerá en la tabla ni en las gráficas activas, pero se conservará el historial.`)) return;
  const { error } = await supabaseClient
    .from("collaborators")
    .update({
      archived_at: new Date().toISOString(),
      archived_by: currentUser?.id || null,
      archive_reason: "Baja operativa desde WellSync"
    })
    .eq("nomina", rowId);
  if (error) {
    console.error(error);
    const detail = supabaseErrorDetail(error) || error.message || "";
    toast(detail.includes("archived_at")
      ? "Falta activar el campo de baja en Supabase"
      : `No se pudo dar de baja el registro${detail ? `: ${detail}` : ""}`);
    return;
  }
  addAudit("colaboradores", `Baja de ${rowId} - ${row.Colaboradores || ""}`);
  await loadSupabaseCollaborators();
  render();
  toast("Colaborador dado de baja y gráficas actualizadas");
}

async function prepareCollaboratorPhoto(file) {
  const bitmap = await createImageBitmap(file);
  const maxSide = 900;
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const context = canvas.getContext("2d");
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("No se pudo preparar la imagen")), "image/jpeg", 0.84);
  });
}

async function uploadCollaboratorPhoto() {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("colaboradores")) return;
  const nomina = $("#collaboratorPhotoNomina")?.value;
  const file = $("#collaboratorPhotoFile")?.files?.[0];
  if (!nomina || !file) {
    toast("Selecciona un profesor y una imagen");
    return;
  }
  if (!file.type.startsWith("image/")) {
    toast("El archivo debe ser una imagen");
    return;
  }
  if (file.size > 12 * 1024 * 1024) {
    toast("La imagen supera el límite de 12 MB");
    return;
  }
  const row = cloudCollaborators.find((item) => item.__id === nomina);
  if (!row) return;
  const button = $("#saveCollaboratorPhoto");
  if (button) {
    button.disabled = true;
    button.textContent = "Subiendo...";
  }
  try {
    const prepared = await prepareCollaboratorPhoto(file);
    const path = `${nomina}/${Date.now()}.jpg`;
    const upload = await supabaseClient.storage
      .from("collaborator-photos")
      .upload(path, prepared, { contentType: "image/jpeg", upsert: false });
    if (upload.error) throw upload.error;
    const update = await supabaseClient
      .from("collaborators")
      .update({ photo_path: path })
      .eq("nomina", nomina);
    if (update.error) {
      await supabaseClient.storage.from("collaborator-photos").remove([path]);
      throw update.error;
    }
    if (row.__photoPath) {
      await supabaseClient.storage.from("collaborator-photos").remove([row.__photoPath]);
    }
    addAudit("colaboradores", `Foto actualizada para ${nomina}`);
    recordUploadSuccess("colaboradores.fotografia");
    photoUploaderOpen = false;
    selectedPhotoNomina = "";
    await loadSupabaseCollaborators();
    render();
    toast("Fotografía guardada en Supabase");
  } catch (error) {
    console.error(error);
    const detail = supabaseErrorDetail(error);
    toast(`No se pudo guardar la fotografía${detail ? `: ${detail}` : ""}`);
    if (button) {
      button.disabled = false;
      button.textContent = "Guardar fotografía";
    }
  }
}

async function removeCollaboratorPhoto() {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("colaboradores")) return;
  const nomina = $("#collaboratorPhotoNomina")?.value;
  const row = cloudCollaborators.find((item) => item.__id === nomina);
  if (!row?.__photoPath || !window.confirm(`¿Quitar la fotografía de ${row.Colaboradores}?`)) return;
  const update = await supabaseClient.from("collaborators").update({ photo_path: null }).eq("nomina", nomina);
  if (update.error) {
    toast("No se pudo quitar la fotografía");
    return;
  }
  await supabaseClient.storage.from("collaborator-photos").remove([row.__photoPath]);
  addAudit("colaboradores", `Foto eliminada para ${nomina}`);
  await loadSupabaseCollaborators();
  render();
  toast("Fotografía eliminada");
}

async function importCollaboratorsToCloud() {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("colaboradores")) return;
  const sourceRows = recordsFor("Uniformes")
    .filter((row) => String(row.Nomina || "").trim() && String(row.Colaboradores || "").trim())
    .map((row) => collaboratorToCloud({ ...row, __id: row.Nomina }));
  if (!sourceRows.length) {
    toast("No encontré registros para importar");
    return;
  }
  if (!window.confirm(`Se importarán ${sourceRows.length} profesores a la base central. ¿Continuar?`)) return;
  const { error } = await supabaseClient.from("collaborators").upsert(sourceRows, { onConflict: "nomina" });
  if (error) {
    console.error(error);
    toast("No se pudo completar la importación");
    return;
  }
  addAudit("colaboradores", `Importación inicial de ${sourceRows.length} registros`);
  await loadSupabaseCollaborators();
  render();
  toast(`${sourceRows.length} profesores guardados en Supabase`);
}

function exportCollaboratorBackup() {
  const rows = collaboratorRows().map(({ __id, ...row }) => row);
  const text = JSON.stringify({
    exported_at: new Date().toISOString(),
    total: rows.length,
    collaborators: rows
  }, null, 2);
  const blob = new Blob([text], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `respaldo-colaboradores-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  addAudit("exportacion", "Respaldo JSON de colaboradores");
  toast("Respaldo descargado");
}

async function fetchMyProfile() {
  const rpcResult = await supabaseClient.rpc("get_my_profile");
  if (!rpcResult.error && Array.isArray(rpcResult.data) && rpcResult.data[0]) {
    return { profile: rpcResult.data[0], error: null };
  }
  const fallbackUser = (await supabaseClient.auth.getUser()).data?.user;
  if (!fallbackUser) {
    return { profile: null, error: rpcResult.error || { message: "No hay sesion activa" } };
  }
  const directResult = await supabaseClient
    .from("app_profiles")
    .select("id, email, display_name, role, area_key, active")
    .eq("id", fallbackUser.id)
    .single();
  return { profile: directResult.data, error: directResult.error || rpcResult.error };
}

let progressiveRenderTimer = null;

function scheduleProgressiveRender() {
  clearTimeout(progressiveRenderTimer);
  progressiveRenderTimer = setTimeout(() => render(), 80);
}

async function syncPendingLocalUploadBackups() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  let migrated = 0;

  if (semanaTecLastUpload?.source === "local" && semanaTecRows.length && canEditArea("semana-tec")) {
    const saved = await saveSemanaTecRowsCloud(semanaTecRows);
    if (saved) {
      semanaTecLastUpload = { ...semanaTecLastUpload, source: "cloud" };
      await loadSemanaTecCloud();
      migrated += 1;
    }
  }

  if (migrated) {
    saveSemanaTecLocal();
    saveParticipationUploadsLocal();
    toast(`${migrated} carga(s) local(es) respaldadas permanentemente en Supabase`);
  }
}

async function loadSupabaseDataBundle() {
  cloudStatus = "Cargando informacion actualizada...";
  scheduleProgressiveRender();

  // La Base Maestra debe estar lista antes de cruzar matriculas en los modulos.
  // Si se carga en paralelo, el primer render puede quedar sin genero o carrera.
  try {
    await loadStudentDatabase();
    scheduleProgressiveRender();
  } catch (error) {
    console.warn("No se pudo cargar Base de alumnos", error);
  }

  const loaders = [
    ["Capturas", loadSupabaseCaptures],
    ["Colaboradores", loadSupabaseCollaborators],
    ["Evaluaciones Físicas", loadPhysicalEvaluations],
    ["Calificaciones", loadClassGrades],
    ["Gimnasio", loadGymData],
    ["Simulador de clases", loadClassScheduleSimulatorCloud],
    ["Vivencia", loadVivenciaEvents],
    ["Semana Tec", async () => Promise.all([loadSemanaTecCloud(), loadSemanaTecGroupGradeFiles()])],
    ["Representativos", () => loadParticipationUploadsCloud("representativos")],
    ["Eventos de Comunicación", loadCommunicationEvents],
    ["Imágenes de difusión", loadCommunicationDiffusionImages],
    ["Calendario Comunicación", loadPlanningEventOverrides],
    ["Intramuros", loadIntramurosParticipants],
    ["Booking", loadClassBookingReservationsCloud],
    ["Vinculos rapidos", loadConfigQuickLinks],
    ["Presupuesto", loadBudgetData]
  ];
  const results = await Promise.allSettled(loaders.map(async ([, loader]) => {
    await loader();
    scheduleProgressiveRender();
  }));
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.warn(`No se pudo cargar ${loaders[index][0]}`, result.reason);
    }
  });
  await syncPendingLocalUploadBackups();
  cloudStatus = "Supabase conectado";
  scheduleProgressiveRender();
}

async function loadSupabaseSession() {
  if (!supabaseClient) return;
  const { data: sessionData } = await supabaseClient.auth.getSession();
  const authUser = sessionData?.session?.user;
  if (!authUser) {
    cloudStatus = "Supabase listo";
    if (currentUser?.auth === "supabase") {
      clearSession();
      activeArea = "general";
      activeView = "dashboard";
    }
    return;
  }
  const { profile, error } = await fetchMyProfile();
  if (error || !profile?.active) {
    cloudStatus = error?.message || "Usuario sin perfil RecSports";
    return;
  }
  saveSession(profileToSession(profile, authUser));
  activeArea = currentUser.role === "direccion" || currentUser.role === "admin" ? "general" : currentUser.area;
  await loadSupabaseDataBundle();
}

async function loginWithSupabase() {
  const feedback = $("#supabaseLoginFeedback");
  const button = $("#supabaseLoginButton");
  const setFeedback = (message, state = "") => {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.dataset.state = state;
  };
  if (!supabaseClient) {
    setFeedback("Supabase aun no esta configurado en esta publicacion.", "error");
    toast("Supabase aun no esta configurado en esta publicacion");
    return;
  }
  const form = new FormData($("#loginForm"));
  const email = String(form.get("email") || "").trim();
  const password = String(form.get("password") || "");
  if (!email || !password) {
    setFeedback("Escribe correo y contrasena para entrar.", "error");
    toast("Escribe correo y contrasena");
    return;
  }
  if (button) {
    button.disabled = true;
    button.textContent = "Validando acceso...";
  }
  setFeedback("Validando usuario en Supabase...", "loading");
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) {
    if (button) {
      button.disabled = false;
      button.textContent = "Entrar con Supabase";
    }
    setFeedback(error.message || "No pude iniciar sesion. Revisa correo y contrasena.", "error");
    toast("No pude iniciar sesion con Supabase");
    return;
  }
  const authUser = data?.user;
  setFeedback("Acceso correcto. Revisando permisos RecSports...", "loading");
  const { profile, error: profileError } = await fetchMyProfile();
  if (profileError || !profile?.active) {
    await supabaseClient.auth.signOut();
    if (button) {
      button.disabled = false;
      button.textContent = "Entrar con Supabase";
    }
    setFeedback(`El usuario existe, pero falta permiso en WellSync. Detalle: ${profileError?.message || "perfil no activo"}`, "error");
    toast("El usuario existe, pero falta permiso en WellSync");
    return;
  }
  saveSession(profileToSession(profile, authUser));
  addAudit("login", `Ingreso Supabase como ${currentUser.name}`);
  activeArea = currentUser.role === "direccion" || currentUser.role === "admin" ? "general" : currentUser.area;
  activeView = "dashboard";
  render();
  toast(`Sesion Supabase: ${currentUser.name}`);
  loadSupabaseDataBundle()
    .then(() => render())
    .catch((loadError) => console.warn("No se pudo completar la carga inicial de Supabase", loadError));
}

async function saveCaptureToSupabase(row) {
  if (!supabaseClient || currentUser?.auth !== "supabase") return false;
  const centralStudent = studentFromDatabase(row.matricula);
  const studentPayload = {
    matricula: row.matricula,
    genero: centralStudent?.genero || row.genero,
    carrera: centralStudent?.carrera || row.carrera,
    semestre: centralStudent?.semestre || row.semestre,
    nivel_escolar: centralStudent?.nivel || row.nivel
  };
  const studentResult = await supabaseClient.from("students_minimal").upsert(studentPayload);
  if (studentResult.error) throw studentResult.error;
  const participationPayload = {
    matricula: row.matricula,
    area_key: row.area,
    period_key: row.periodo,
    status: normalizeStatus(row.estatus),
    record_date: new Date().toISOString().slice(0, 10),
    operation_label: row.operacion,
    metadata: { operacion: row.operacion },
    created_by: currentUser.id
  };
  const { error } = await supabaseClient.from("participations").insert(participationPayload);
  if (error) throw error;
  await loadSupabaseCaptures();
  return true;
}

function applyTheme() {
  document.body.dataset.theme = activeTheme;
  const themeSelect = $("#themeSelect");
  if (themeSelect) themeSelect.value = activeTheme;
}

function visibleAreas() {
  if (!currentUser || ["admin", "direccion"].includes(currentUser.role)) return areas;
  if (currentUser.globalAccess) return areas.filter((area) => area.id !== "configuracion");
  if (currentUser.role === "compras") return areas.filter((area) => area.id === "compras");
  const assignedAreas = areas.filter((area) => area.id === currentUser.area);
  return assignedAreas.length ? assignedAreas : areas.filter((area) => area.id === "general");
}

function isLeadership() {
  return ["admin", "direccion"].includes(currentUser?.role);
}

function isGlobalOperator() {
  return currentUser?.role === "coordinador" && currentUser?.globalAccess === true;
}

function canUseAuthorizedUploads() {
  return currentUser?.auth === "supabase" && (isLeadership() || isGlobalOperator());
}

function canManageStructure() {
  return currentUser?.auth === "supabase" && isLeadership();
}

function canManageCollaboratorRows() {
  return currentUser?.auth === "supabase" && canEditArea("colaboradores");
}

function canEditArea(areaId) {
  if (!currentUser) return false;
  if (isLeadership() || isGlobalOperator()) return true;
  if (currentUser.role === "compras") return areaId === "compras";
  return currentUser.area === areaId;
}

function allParticipationRows() {
  if (currentUser?.auth === "supabase" && studentDatabaseLoaded) {
    const cloudWithStudentBase = cloudCaptures.map((row) => {
      const student = studentFromDatabase(row.matricula);
      return student ? { ...row, genero: student.genero, carrera: student.carrera, semestre: student.semestre, nivel: student.nivel } : row;
    });
    const capturedMatriculas = new Set(cloudWithStudentBase.map((row) => row.matricula));
    const baseOnlyRows = cloudStudentDatabase.filter((student) => !capturedMatriculas.has(student.matricula));
    return [...cloudWithStudentBase, ...baseOnlyRows, ...localCaptures];
  }
  return [...cloudCaptures, ...localCaptures, ...students];
}

async function loadUniformesData() {
  try {
    const response = await fetch(UNIFORMES_DATA_URL);
    uniformesData = await response.json();
    uniformesLoaded = true;
    render();
  } catch {
    uniformesData = {};
    uniformesLoaded = false;
  }
}

function recordsFor(sheetName) {
  return uniformesData?.[sheetName]?.records || [];
}

function valueFrom(row, keys) {
  const key = keys.find((candidate) => Object.prototype.hasOwnProperty.call(row, candidate));
  return key ? row[key] : "";
}

function numberFrom(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key] || "Sin dato";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function careerParticipationSummary(rows = filteredStudents()) {
  const participantsByMatricula = new Map();
  rows.forEach((row) => {
    const matricula = String(row.matricula || "").trim().toUpperCase();
    const hasParticipation = row.source !== "base_alumnos" && ((Number(row.registros) || 0) > 0 || row.source === "supabase" || row.source === "local");
    if (!matricula || !hasParticipation || participantsByMatricula.has(matricula)) return;
    const student = studentFromDatabase(matricula);
    const carrera = String(student?.carrera || row.carrera || "Sin carrera").trim() || "Sin carrera";
    participantsByMatricula.set(matricula, carrera);
  });
  const total = participantsByMatricula.size;
  const grouped = [...participantsByMatricula.values()].reduce((acc, carrera) => {
    acc[carrera] = (acc[carrera] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(grouped)
    .map(([career, count]) => ({
      career,
      count,
      percent: total ? Math.round((count / total) * 100) : 0
    }))
    .sort((a, b) => b.count - a.count || a.career.localeCompare(b.career, "es"));
}

function renderCareerParticipationChart(rows = filteredStudents()) {
  const summary = careerParticipationSummary(rows);
  const total = summary.reduce((sum, row) => sum + row.count, 0);
  if (!summary.length) {
    return `<p class="form-message">Aun no hay participaciones con matricula para agrupar por carrera.</p>`;
  }
  const max = Math.max(...summary.map((row) => row.count), 1);
  return `
    <div class="career-chart-summary">${total.toLocaleString("es-MX")} alumnos participantes con carrera identificada</div>
    <div class="career-bars" aria-label="Participacion por carrera">
      ${summary.map((row) => `
        <div class="career-bar-row">
          <div class="career-bar-label">
            <strong>${escapeHtml(row.career)}</strong>
            <span>${row.count.toLocaleString("es-MX")} alumnos &middot; ${row.percent}%</span>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.max(3, Math.round((row.count / max) * 100))}%"></div></div>
          <strong>${row.count.toLocaleString("es-MX")}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function knownCollaboratorColumns() {
  const custom = new Set();
  collaboratorRows().forEach((row) => {
    Object.keys(row).forEach((key) => {
      if (!BASE_COLLABORATOR_COLUMNS.includes(key) && !key.startsWith("__") &&
          !["Fecha cumpleaños", "Asistencia a gimnasio de colaboradores", "Contacto de emergencia", "Numero 1", "Contacto de emergencia 2", "Numero 2"].includes(key)) {
        custom.add(key);
      }
    });
  });
  COLLABORATOR_WEEK_COLUMNS.forEach((column) => custom.add(column));
  return [...BASE_COLLABORATOR_COLUMNS, ...custom];
}

function collaboratorColumns() {
  const known = knownCollaboratorColumns();
  if (!collaboratorColumnOrder.length) return known;
  const ordered = collaboratorColumnOrder.filter((column) => known.includes(column));
  const missing = known.filter((column) => !ordered.includes(column));
  const columns = [...ordered, ...missing];
  if (!collaboratorColumnOrder.includes("Disciplina")) {
    const disciplineIndex = columns.indexOf("Disciplina");
    const genderIndex = columns.indexOf("Genero");
    if (disciplineIndex >= 0 && genderIndex >= 0 && disciplineIndex !== genderIndex + 1) {
      columns.splice(disciplineIndex, 1);
      columns.splice(genderIndex + 1, 0, "Disciplina");
    }
  }
  return columns;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatCount(value) {
  return Number(value || 0).toLocaleString("es-MX");
}

function collaboratorEditorControl(row, column, editable) {
  const value = row[column] ?? "";
  const disabled = editable ? "" : "disabled";
  const common = `class="collab-cell" data-row-id="${escapeHtml(row.__id || row.Nomina)}" data-column="${escapeHtml(column)}" ${disabled}`;
  if (COLLABORATOR_WEEK_COLUMNS.includes(column)) {
    const selected = new Set(String(value || "").split(",").map((item) => item.trim()).filter(Boolean));
    const summary = selected.size ? [...selected].join(", ") : "Seleccionar";
    const rowId = escapeHtml(row.__id || row.Nomina);
    const columnName = escapeHtml(column);
    return `
      <details class="collab-week-picker" data-row-id="${rowId}" data-column="${columnName}" ${editable ? "" : "data-disabled=\"true\""}>
        <summary>${escapeHtml(summary)}</summary>
        <div class="collab-week-menu">
          ${SEMESTER_WEEK_OPTIONS.map((week) => `
            <label>
              <input class="collab-week-check" type="checkbox" value="${week}" ${selected.has(week) ? "checked" : ""} ${editable ? "" : "disabled"}>
              <span>${week}</span>
            </label>
          `).join("")}
        </div>
      </details>`;
  }
  if (["Playeras Joma", "Talla pants"].includes(column)) {
    const sizes = ["", "XS", "S", "M", "L", "XL", "XXL"];
    return `<select ${common}>${sizes.map((size) => `<option value="${size}" ${String(value) === size ? "selected" : ""}>${size || "Sin dato"}</option>`).join("")}</select>`;
  }
  if (column === "Genero") {
    const options = ["", "Mujer", "Hombre", "No especificado"];
    return `<select ${common}>${options.map((option) => `<option value="${option}" ${String(value) === option ? "selected" : ""}>${option || "Sin dato"}</option>`).join("")}</select>`;
  }
  if (column === "Primeros auxilios") {
    const normalized = String(value).toLowerCase() === "true" ? "true" : String(value).toLowerCase() === "false" ? "false" : "";
    return `<select ${common}><option value="" ${!normalized ? "selected" : ""}>Sin dato</option><option value="true" ${normalized === "true" ? "selected" : ""}>Sí</option><option value="false" ${normalized === "false" ? "selected" : ""}>No</option></select>`;
  }
  const type = column === "% de cursos" ? "number" : "text";
  return `<input ${common} type="${type}" ${type === "number" ? 'min="0" max="100" step="1"' : ""} value="${escapeHtml(value)}" />`;
}

function collaboratorInitials(name) {
  return String(name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] || "")
    .join("")
    .toUpperCase();
}

function collaboratorMatchKey(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function collaboratorPhotoIndex() {
  const byNomina = new Map();
  collaboratorRows().forEach((row) => {
    const nomina = String(row.Nomina || row.nomina || "").trim();
    const nominaKey = collaboratorMatchKey(nomina);
    if (!nominaKey) return;
    const profile = {
      nomina,
      name: String(row.Colaboradores || row.full_name || row.nombre_completo || row.Nomina || "").trim(),
      gender: String(row.Genero || row.genero || "").trim(),
      photoUrl: row.__photoUrl || "",
      initials: collaboratorInitials(row.Colaboradores || row.full_name || row.nombre_completo || row.Nomina || "")
    };
    if (!byNomina.has(nominaKey)) byNomina.set(nominaKey, profile);
  });
  return { byNomina };
}

function physicalHallCollaboratorProfile(row, index = collaboratorPhotoIndex()) {
  const nominaKey = collaboratorMatchKey(row.collaborator_nomina);
  if (!nominaKey) return null;
  return index.byNomina.get(nominaKey) || null;
}

function collaboratorAvatar(row, editable) {
  const label = row.__photoUrl
    ? `<img src="${escapeHtml(row.__photoUrl)}" alt="Foto de ${escapeHtml(row.Colaboradores)}" />`
    : `<span>${escapeHtml(collaboratorInitials(row.Colaboradores))}</span>`;
  return `
    <button class="collaborator-avatar ${row.__photoUrl ? "has-photo" : ""}" type="button"
      data-photo-row="${escapeHtml(row.__id || row.Nomina)}" ${editable ? "" : "disabled"}
      title="${editable ? "Cargar o cambiar fotografía" : "Fotografía del colaborador"}">
      ${label}
    </button>
  `;
}

function renderCollaboratorPhotoUploader(rows, editable) {
  if (!photoUploaderOpen || !editable) return "";
  const selected = rows.find((row) => row.__id === selectedPhotoNomina) || rows[0];
  if (!selected) return "";
  selectedPhotoNomina = selected.__id;
  return `
    <section class="photo-uploader-panel" aria-label="Cargar fotografía de colaborador">
      <div class="photo-uploader-preview">
        ${selected.__photoUrl
          ? `<img src="${escapeHtml(selected.__photoUrl)}" alt="Foto actual de ${escapeHtml(selected.Colaboradores)}" />`
          : `<span>${escapeHtml(collaboratorInitials(selected.Colaboradores))}</span>`}
      </div>
      <div class="photo-uploader-fields">
        <label>
          Profesor
          <select id="collaboratorPhotoNomina">
            ${rows.map((row) => `<option value="${escapeHtml(row.__id)}" ${row.__id === selected.__id ? "selected" : ""}>${escapeHtml(row.Colaboradores)}  -  ${escapeHtml(row.Nomina)}</option>`).join("")}
          </select>
        </label>
        <label>
          Imagen
          <input id="collaboratorPhotoFile" type="file" accept="image/jpeg,image/png,image/webp,image/heic,image/heif" />
        </label>
        <p>La imagen se optimiza automáticamente y se guarda en el espacio privado de Supabase.</p>
      </div>
      <div class="photo-uploader-actions">
        <button class="primary-btn" id="saveCollaboratorPhoto" type="button">Guardar fotografía</button>
        ${selected.__photoPath ? `<button class="ghost-btn danger-text" id="removeCollaboratorPhoto" type="button">Quitar foto</button>` : ""}
        <button class="ghost-btn" id="closeCollaboratorPhotoUploader" type="button">Cerrar</button>
      </div>
    </section>
  `;
}

function collaboratorColumnHeader(column, index, columns, editable) {
  if (!editable) return `<th>${escapeHtml(column)}</th>`;
  const protectedColumn = ["Nomina", "Colaboradores"].includes(column);
  return `
    <th>
      <div class="column-heading">
        <span>${escapeHtml(column)}</span>
        <div class="column-actions">
          <button type="button" data-move-column="${escapeHtml(column)}" data-direction="-1" ${index === 0 ? "disabled" : ""} title="Mover a la izquierda" aria-label="Mover ${escapeHtml(column)} a la izquierda"><</button>
          <button type="button" data-move-column="${escapeHtml(column)}" data-direction="1" ${index === columns.length - 1 ? "disabled" : ""} title="Mover a la derecha" aria-label="Mover ${escapeHtml(column)} a la derecha">></button>
          <button type="button" class="column-delete" data-delete-column="${escapeHtml(column)}" ${protectedColumn ? "disabled" : ""} title="${protectedColumn ? "Campo obligatorio" : "Eliminar columna"}" aria-label="Eliminar columna ${escapeHtml(column)}">x</button>
        </div>
      </div>
    </th>
  `;
}

function genderLabel(row) {
  const value = String(row["Genero"] || row["Género"] || "").trim().toLowerCase();
  if (value.startsWith("muj")) return "Mujer";
  if (value.startsWith("hom")) return "Hombre";
  return "Sin dato";
}

function groupedByGender(rows, key, preferredOrder = []) {
  const grouped = rows.reduce((acc, row) => {
    const label = row[key] || "Sin dato";
    const normalizedLabel = String(label).trim().toLocaleLowerCase("es");
    const gender = genderLabel(row);
    if (!acc[normalizedLabel]) acc[normalizedLabel] = { label, Mujer: 0, Hombre: 0, "Sin dato": 0, total: 0 };
    acc[normalizedLabel][gender] += 1;
    acc[normalizedLabel].total += 1;
    return acc;
  }, {});
  return Object.values(grouped).sort((a, b) => {
    if (b.total !== a.total) return b.total - a.total;
    const aOrder = preferredOrder.indexOf(a.label);
    const bOrder = preferredOrder.indexOf(b.label);
    if (aOrder >= 0 || bOrder >= 0) return (aOrder < 0 ? 999 : aOrder) - (bOrder < 0 ? 999 : bOrder);
    return String(a.label).localeCompare(String(b.label), "es");
  });
}

function renderGenderBars(rows, palette = "shirt") {
  const max = Math.max(...rows.map((row) => row.total), 1);
  return rows.map((row) => `
    <div class="bar-row gender-row ${palette}-palette">
      <span title="${escapeHtml(row.label)}">${escapeHtml(row.label)}</span>
      <div>
        <div class="bar-track gender-track">
          <div class="bar-fill segmented-fill" style="width:${Math.round(row.total / max * 100)}%">
            ${row.Mujer ? `<span class="segment women" style="width:${Math.round(row.Mujer / row.total * 100)}%" title="Mujeres: ${row.Mujer}"></span>` : ""}
            ${row.Hombre ? `<span class="segment men" style="width:${Math.round(row.Hombre / row.total * 100)}%" title="Hombres: ${row.Hombre}"></span>` : ""}
            ${row["Sin dato"] ? `<span class="segment unknown" style="width:${Math.round(row["Sin dato"] / row.total * 100)}%" title="Sin dato: ${row["Sin dato"]}"></span>` : ""}
          </div>
        </div>
        <div class="gender-breakdown">
          <span>Mujeres ${row.Mujer}</span>
          <span>Hombres ${row.Hombre}</span>
          ${row["Sin dato"] ? `<span>Sin dato ${row["Sin dato"]}</span>` : ""}
        </div>
      </div>
      <strong>${row.total}</strong>
    </div>
  `).join("");
}

function genderLegend(palette = "shirt") {
  return `
    <div class="gender-legend ${palette}-palette" aria-label="Leyenda por género">
      <span><i class="legend-dot women"></i>Mujeres</span>
      <span><i class="legend-dot men"></i>Hombres</span>
      <span><i class="legend-dot unknown"></i>Sin dato</span>
    </div>
  `;
}

function collaboratorRows() {
  const rows = currentUser?.auth === "supabase" && collaboratorsCloudLoaded
    ? cloudCollaborators
    : recordsFor("Uniformes").filter((row) => String(row.Nomina || row.Colaboradores || "").trim());
  return [...rows].sort((a, b) => String(a.Colaboradores || "").localeCompare(String(b.Colaboradores || ""), "es"));
}

function contractRows() {
  return [...recordsFor("layAd26"), ...recordsFor("Verano26")];
}

function physicalRows() {
  return recordsFor("Pruebas fisicas");
}

function collaboratorMetrics() {
  const rows = filteredCollaborators();
  const contracts = contractRows();
  const physical = physicalRows();
  const firstAid = rows.filter((row) => String(row["Primeros auxilios"]).toLowerCase() === "true").length;
  const courseAvg = rows.length ? Math.round(rows.reduce((sum, row) => sum + numberFrom(row["% de cursos"]), 0) / rows.length) : 0;
  const totalContract = contracts.reduce((sum, row) => sum + numberFrom(row["Sueldo Total \n del Contrato"]), 0);
  return {
    collaborators: rows.length,
    firstAid,
    courseAvg,
    physicalTests: physical.length,
    contracts: contracts.length,
    totalContract
  };
}

function systemAlerts() {
  const rows = collaboratorRows();
  const noFirstAid = rows.filter((row) => String(row["Primeros auxilios"]).toLowerCase() !== "true").length;
  const lowCourses = rows.filter((row) => numberFrom(row["% de cursos"]) < 50).length;
  const pendingImports = importPlan.filter((row) => String(row[2]).toLowerCase().includes("pendiente")).length;
  const alerts = [
    ...alertRules.map((row) => ({ priority: row[0], module: row[1], message: row[2], status: row[0] === "Baja" ? "Observacion" : "Requiere accion" })),
    { priority: noFirstAid ? "Media" : "Baja", module: "Colaboradores", message: `${noFirstAid} colaboradores sin primeros auxilios marcado`, status: noFirstAid ? "Revisar" : "OK" },
    { priority: lowCourses ? "Media" : "Baja", module: "Colaboradores", message: `${lowCourses} colaboradores con avance de cursos menor a 50%`, status: lowCourses ? "Seguimiento" : "OK" },
    { priority: pendingImports ? "Alta" : "Baja", module: "Importaciones", message: `${pendingImports} fuentes pendientes de definicion o depuracion`, status: pendingImports ? "Pendiente" : "OK" }
  ];
  return alerts;
}

function projectProgress() {
  const total = roadmapItems.length;
  const completed = roadmapItems.filter((row) => row[3] === "Completado").length;
  const inProgress = roadmapItems.filter((row) => row[3] === "En progreso").length;
  const pending = roadmapItems.filter((row) => row[3] === "Pendiente").length;
  const weighted = completed + inProgress * 0.5;
  const percent = Math.round((weighted / total) * 100);
  const next = roadmapItems.find((row) => row[3] === "En progreso") || roadmapItems.find((row) => row[3] === "Pendiente");
  return { total, completed, inProgress, pending, percent, next };
}

function filteredCollaborators() {
  return collaboratorRows().filter((row) => {
    const coordinatorMatch = collaboratorFilter.coordinator === "todos" || row["Coordinador"] === collaboratorFilter.coordinator;
    const shirtMatch = collaboratorFilter.shirt === "todos" || row["Playeras Joma"] === collaboratorFilter.shirt;
    const firstAidValue = String(row["Primeros auxilios"]).toLowerCase() === "true" ? "si" : "no";
    const firstAidMatch = collaboratorFilter.firstAid === "todos" || collaboratorFilter.firstAid === firstAidValue;
    return coordinatorMatch && shirtMatch && firstAidMatch;
  });
}

const PHYSICAL_TEST_LABELS = {
  cooper_12m: "Cooper 12 min",
  abdominales: "Abdominales",
  lagartijas: "Lagartijas",
  saltos_cuerda: "Saltos con cuerda",
  wall_ball: "Wall Ball",
  remo_distancia: "Remo distancia",
  remo_suspendido: "Remo suspendido"
};

const PHYSICAL_TEST_UNITS = {
  cooper_12m: "km",
  abdominales: "repeticiones",
  lagartijas: "repeticiones",
  saltos_cuerda: "repeticiones",
  wall_ball: "repeticiones",
  remo_distancia: "metros",
  remo_suspendido: "repeticiones"
};

function physicalFilterOptions(key) {
  return [...new Set(physicalEvaluations.map((row) => String(row[key] || "").trim()).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "es"));
}

function filteredPhysicalEvaluations() {
  return physicalEvaluations.filter((row) => {
    const period = row.period_key || row.semester_label || "Sin clasificar";
    const discipline = row.discipline || "Sin clasificar";
    const collaborator = row.collaborator_nomina || row.captured_name || "Sin identificar";
    const gender = row.gender || "Sin dato";
    const classification = row.classification_status || "pendiente";
    return (physicalEvaluationFilter.period === "todos" || period === physicalEvaluationFilter.period)
      && (physicalEvaluationFilter.stage === "todos" || row.evaluation_stage === physicalEvaluationFilter.stage)
      && (physicalEvaluationFilter.discipline === "todos" || discipline === physicalEvaluationFilter.discipline)
      && (physicalEvaluationFilter.collaborator === "todos" || collaborator === physicalEvaluationFilter.collaborator)
      && (physicalEvaluationFilter.gender === "todos" || gender === physicalEvaluationFilter.gender)
      && (physicalEvaluationFilter.classification === "todos" || classification === physicalEvaluationFilter.classification);
  });
}

function physicalResult(row, testKey) {
  return (row.physical_evaluation_results || []).find((result) => result.test_key === testKey);
}

function physicalAverage(rows, testKey, stage = "todos") {
  const values = rows
    .filter((row) => stage === "todos" || row.evaluation_stage === stage)
    .map((row) => physicalResult(row, testKey)?.numeric_value)
    .filter((value) => value !== null && value !== undefined && value !== "")
    .map(Number)
    .filter(Number.isFinite);
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
}

function physicalTestStats(rows, testKey) {
  const values = rows
    .map((row) => physicalResult(row, testKey)?.numeric_value)
    .filter((value) => value !== null && value !== undefined && value !== "")
    .map(Number)
    .filter(Number.isFinite);
  return {
    count: values.length,
    average: values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null,
    min: values.length ? Math.min(...values) : null,
    max: values.length ? Math.max(...values) : null
  };
}

function physicalResultDisplay(row, testKey) {
  const result = physicalResult(row, testKey);
  if (!result) return "-";
  if (result.numeric_value !== null && result.numeric_value !== undefined && result.numeric_value !== "") {
    return `${Number(result.numeric_value).toLocaleString("es-MX", { maximumFractionDigits: 2 })}`;
  }
  if (result.raw_value) return result.raw_value;
  return {
    lesion: "Lesión",
    contraindicacion: "Contraindicación",
    otro: "Otro motivo",
    no_realizada: "No realizada"
  }[result.result_status] || "-";
}

function physicalTimeline(rows, testKey) {
  const grouped = new Map();
  rows.forEach((row) => {
    const result = physicalResult(row, testKey);
    if (result?.numeric_value === null || result?.numeric_value === undefined || result?.numeric_value === "") return;
    const value = Number(result.numeric_value);
    if (!Number.isFinite(value) || !row.evaluated_at) return;
    const dateKey = new Date(row.evaluated_at).toISOString().slice(0, 10);
    const item = grouped.get(dateKey) || { date: dateKey, total: 0, count: 0 };
    item.total += value;
    item.count += 1;
    grouped.set(dateKey, item);
  });
  return [...grouped.values()]
    .map((item) => ({ date: item.date, average: item.total / item.count, count: item.count }))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-14);
}

function physicalStatusLabel(value) {
  return {
    inicial: "Inicial",
    seguimiento: "Seguimiento",
    final: "Final",
    sin_clasificar: "Sin clasificar"
  }[value] || "Sin clasificar";
}

function physicalNumericValue(result) {
  if (!result) return null;
  if (result.numeric_value !== null && result.numeric_value !== undefined && result.numeric_value !== "") {
    const directValue = Number(result.numeric_value);
    if (Number.isFinite(directValue)) return directValue;
  }
  const raw = String(result.raw_value || "").trim();
  if (!raw || /^(na|n\/a|no aplica|lesion|lesionada|lesionado|contraindicacion|contraindicación)$/i.test(raw)) return null;
  const match = raw.replace(",", ".").match(/-?\d+(?:\.\d+)?/);
  if (!match) return null;
  const value = Number(match[0]);
  return Number.isFinite(value) ? value : null;
}

function physicalHallGenderValue(row, collaboratorIndex = collaboratorPhotoIndex()) {
  const profile = physicalHallCollaboratorProfile(row, collaboratorIndex);
  const value = String(profile?.gender || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (["mujer", "mujeres", "femenino", "f"].includes(value)) return "mujeres";
  if (["hombre", "hombres", "masculino", "m"].includes(value)) return "hombres";
  return "";
}

function physicalHallGenderMatches(row, collaboratorIndex = collaboratorPhotoIndex()) {
  if (physicalHallOfFameGender === "todos") return true;
  return physicalHallGenderValue(row, collaboratorIndex) === physicalHallOfFameGender;
}

function physicalHallYear(row) {
  const date = row.evaluated_at ? new Date(row.evaluated_at) : null;
  return date && !Number.isNaN(date.getTime()) ? String(date.getFullYear()) : "Sin año";
}

function physicalHallDaysSince(row) {
  const date = row.evaluated_at ? new Date(row.evaluated_at) : null;
  if (!date || Number.isNaN(date.getTime())) return null;
  const today = new Date();
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  return Math.max(0, Math.floor((end - start) / 86400000));
}

function physicalHallResultLabel(testKey, value) {
  const number = Number(value);
  const formatted = Number.isInteger(number)
    ? number.toLocaleString("es-MX")
    : number.toLocaleString("es-MX", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  if (testKey === "cooper_12m") return `${formatted} km`;
  if (testKey === "remo_distancia") return `${formatted} m`;
  return formatted;
}

function physicalHallRanking(testKey, collaboratorIndex = collaboratorPhotoIndex()) {
  const bestByCollaborator = new Map();
  physicalEvaluations
    .forEach((row) => {
      const collaboratorNomina = String(row.collaborator_nomina || "").trim();
      if (!collaboratorNomina) return;
      const collaboratorProfile = physicalHallCollaboratorProfile(row, collaboratorIndex);
      if (!collaboratorProfile) return;
      if (!physicalHallGenderMatches(row, collaboratorIndex)) return;
      const result = physicalResult(row, testKey);
      const value = physicalNumericValue(result);
      if (value === null) return;
      const collaboratorKey = collaboratorMatchKey(collaboratorNomina);
      const evaluatedAt = row.evaluated_at ? new Date(row.evaluated_at) : null;
      const previous = bestByCollaborator.get(collaboratorKey);
      const isBetter = !previous
        || value > previous.value
        || (value === previous.value && evaluatedAt && previous.evaluatedAt && evaluatedAt > previous.evaluatedAt);
      if (isBetter) {
        bestByCollaborator.set(collaboratorKey, {
          collaborator: collaboratorProfile.name || collaboratorProfile.nomina,
          collaboratorNomina: collaboratorProfile.nomina,
          photoUrl: collaboratorProfile.photoUrl || "",
          initials: collaboratorProfile.initials || collaboratorInitials(collaboratorProfile.name),
          value,
          result: physicalHallResultLabel(testKey, value),
          year: physicalHallYear(row),
          days: physicalHallDaysSince(row),
          evaluatedAt
        });
      }
    });
  return [...bestByCollaborator.values()]
    .sort((a, b) => b.value - a.value || String(a.collaborator).localeCompare(String(b.collaborator), "es"))
    .slice(0, 5);
}

function physicalHallCards() {
  const collaboratorIndex = collaboratorPhotoIndex();
  return PHYSICAL_HALL_TESTS.map((test) => ({
    ...test,
    ranking: physicalHallRanking(test.id, collaboratorIndex)
  }));
}

function physicalHallAvatar(leader) {
  const name = leader?.collaborator || "Sin datos reales";
  const initials = leader?.initials || collaboratorInitials(name);
  if (leader?.photoUrl) {
    return `
      <span class="physical-hof-person-avatar has-photo" aria-label="Foto de ${escapeHtml(name)}">
        <img src="${escapeHtml(leader.photoUrl)}" alt="Foto de ${escapeHtml(name)}" loading="lazy" />
      </span>
    `;
  }
  return `
    <span class="physical-hof-person-avatar" aria-label="Iniciales de ${escapeHtml(name)}">
      <span>${escapeHtml(initials)}</span>
    </span>
  `;
}

function renderPhysicalHallOfFame() {
  if (!physicalHallOfFameOpen) return "";
  const cards = physicalHallCards();
  const selectedTop = cards.find((item) => item.id === physicalHallOfFameTopTest);
  return `
    <section class="physical-hof-panel physical-hof-view" aria-label="Salón de la Fama de Evaluaciones Físicas">
      <div class="physical-hof-heading">
        <div>
          <p class="eyebrow">WellSync Records</p>
          <h3>Top Salón de la Fama</h3>
          <p class="hero-copy">Los mejores resultados históricos de WellSync</p>
        </div>
        <div class="physical-hof-header-actions">
          <div class="physical-hof-segmented" aria-label="Filtro visual de género">
            ${[
              ["todos", "Todos"],
              ["mujeres", "Mujeres"],
              ["hombres", "Hombres"]
            ].map(([value, label]) => `
              <button type="button" data-physical-hof-gender="${value}" class="${physicalHallOfFameGender === value ? "active" : ""}">
                ${label}
              </button>
            `).join("")}
          </div>
          <button class="ghost-btn physical-hof-back" id="closePhysicalHallOfFame" type="button">Volver a Evaluaciones Físicas</button>
        </div>
      </div>
      <div class="physical-hof-grid">
        ${cards.map((item) => {
          const leader = item.ranking[0];
          return `
          <article class="physical-hof-card">
            <div class="physical-hof-card-top">
              <span class="physical-hof-icon">${item.icon}</span>
              <div>
                <h4>${escapeHtml(item.test)}</h4>
                <p>${escapeHtml(item.capacity)}</p>
              </div>
            </div>
            <div class="physical-hof-leader-row">
              ${physicalHallAvatar(leader)}
              <div class="physical-hof-record-meta">
                <span class="physical-hof-medal">#1</span>
                <strong class="physical-hof-leader">${leader ? escapeHtml(leader.collaborator) : "Sin datos reales"}</strong>
              </div>
            </div>
            <span class="physical-hof-result">${leader ? escapeHtml(leader.result) : "Pendiente"}</span>
            <span class="physical-hof-year">${leader ? escapeHtml(leader.year) : "Sin año"}</span>
            <p class="physical-hof-days">${leader?.days !== null && leader?.days !== undefined ? ` ${leader.days} días sin ser superada` : "Sin fecha para calcular días"}</p>
            <button class="ghost-btn compact-action" type="button" data-physical-hof-top="${escapeHtml(item.id)}">Top 5 ></button>
          </article>
        `;
        }).join("")}
      </div>
      ${selectedTop ? renderPhysicalHallOfFameModal(selectedTop) : ""}
    </section>
  `;
}

function renderPhysicalHallOfFameModal(test) {
  const ranking = test.ranking || [];
  return `
    <div class="modal-backdrop physical-hof-backdrop" role="presentation">
      <section class="physical-hof-modal" role="dialog" aria-modal="true" aria-label="Top 5 ${escapeHtml(test.test)}">
        <div class="physical-hof-modal-heading">
          <div>
            <p class="eyebrow">Ranking de prueba</p>
            <h3>${test.icon} ${escapeHtml(test.test)}</h3>
          </div>
          <button class="ghost-btn compact-action" id="closePhysicalHallOfFameTop" type="button">Cerrar</button>
        </div>
        <div class="table-wrap physical-hof-table-wrap">
          <table class="physical-hof-table">
            <thead>
              <tr><th>Posición</th><th>Colaborador</th><th>Resultado</th><th>Año</th></tr>
            </thead>
            <tbody>
              ${ranking.map((item, index) => `
                <tr>
                  <td><strong>#${index + 1}</strong></td>
                  <td>${escapeHtml(item.collaborator)}</td>
                  <td>${escapeHtml(item.result)}</td>
                  <td>${escapeHtml(item.year)}</td>
                </tr>
              `).join("") || '<tr><td colspan="4">No hay resultados válidos para esta categoría.</td></tr>'}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function renderPhysicalEvaluationsDashboard() {
  const rows = filteredPhysicalEvaluations();
  const unique = new Set(rows.map((row) => row.collaborator_nomina || row.captured_name)).size;
  const initial = rows.filter((row) => row.evaluation_stage === "inicial").length;
  const final = rows.filter((row) => row.evaluation_stage === "final").length;
  const pending = rows.filter((row) => row.classification_status === "pendiente").length;
  const periodOptions = [...new Set(physicalEvaluations.map((row) => row.period_key || row.semester_label || "Sin clasificar"))].sort();
  const disciplineOptions = [...new Set(physicalEvaluations.map((row) => row.discipline || "Sin clasificar"))].sort();
  const collaboratorOptions = [...new Map(physicalEvaluations.map((row) => [
    row.collaborator_nomina || row.captured_name,
    row.captured_name || row.collaborator_nomina
  ])).entries()].sort((a, b) => a[1].localeCompare(b[1], "es"));
  const comparisonRows = Object.keys(PHYSICAL_TEST_LABELS).map((testKey) => {
    const stats = physicalTestStats(rows, testKey);
    const initialAverage = physicalAverage(rows, testKey, "inicial");
    const finalAverage = physicalAverage(rows, testKey, "final");
    return { testKey, stats, initialAverage, finalAverage };
  });
  const coverageMax = Math.max(...comparisonRows.map((row) => row.stats.count), 1);
  const selectedTest = PHYSICAL_TEST_LABELS[physicalEvaluationFilter.test]
    ? physicalEvaluationFilter.test
    : "cooper_12m";
  const timeline = physicalTimeline(rows, selectedTest);
  const timelineMax = Math.max(...timeline.map((item) => item.average), 1);
  const noData = !physicalEvaluationsLoaded
    ? `<div class="permission-strip">Activa el esquema de Evaluaciones Físicas en Supabase para mostrar información real.</div>`
    : "";
  const dashboardHeader = `
    ${noData}
    <div class="physical-dashboard-actions">
      <div>
        <p class="eyebrow">WellSync</p>
        <h3>Evaluaciones físicas de colaboradores</h3>
        <p class="hero-copy">Las capturas nuevas se guardan en Supabase; los históricos incompletos permanecen identificados como pendientes.</p>
      </div>
      <div class="table-actions">
        <a class="primary-btn physical-public-link" href="./evaluaciones-fisicas.html" target="_blank" rel="noopener">Abrir formulario público</a>
        <button class="ghost-btn physical-hof-open" id="openPhysicalHallOfFame" type="button">Top Salón de la Fama</button>
        <button class="ghost-btn" id="refreshPhysicalEvaluations" type="button">Actualizar datos</button>
      </div>
    </div>
  `;
  if (physicalHallOfFameOpen) {
    return `
      ${dashboardHeader}
      ${renderPhysicalHallOfFame()}
    `;
  }
  return `
    ${dashboardHeader}
    <div class="physical-filter-grid">
      <label>Periodo
        <select class="physical-filter" data-filter="period">
          <option value="todos">Todos</option>
          ${periodOptions.map((value) => `<option value="${escapeHtml(value)}" ${physicalEvaluationFilter.period === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
        </select>
      </label>
      <label>Tipo
        <select class="physical-filter" data-filter="stage">
          <option value="todos">Todos</option>
          ${["inicial", "seguimiento", "final", "sin_clasificar"].map((value) => `<option value="${value}" ${physicalEvaluationFilter.stage === value ? "selected" : ""}>${physicalStatusLabel(value)}</option>`).join("")}
        </select>
      </label>
      <label>Disciplina
        <select class="physical-filter" data-filter="discipline">
          <option value="todos">Todas</option>
          ${disciplineOptions.map((value) => `<option value="${escapeHtml(value)}" ${physicalEvaluationFilter.discipline === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
        </select>
      </label>
      <label>Colaborador
        <select class="physical-filter" data-filter="collaborator">
          <option value="todos">Todos</option>
          ${collaboratorOptions.map(([value, label]) => `<option value="${escapeHtml(value)}" ${physicalEvaluationFilter.collaborator === value ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
        </select>
      </label>
      <label>Género
        <select class="physical-filter" data-filter="gender">
          <option value="todos">Todos</option>
          ${physicalFilterOptions("gender").map((value) => `<option value="${escapeHtml(value)}" ${physicalEvaluationFilter.gender === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
        </select>
      </label>
      <label>Clasificación
        <select class="physical-filter" data-filter="classification">
          <option value="todos">Todas</option>
          <option value="clasificado" ${physicalEvaluationFilter.classification === "clasificado" ? "selected" : ""}>Clasificadas</option>
          <option value="pendiente" ${physicalEvaluationFilter.classification === "pendiente" ? "selected" : ""}>Pendientes</option>
        </select>
      </label>
      <label>Prueba para evolución
        <select class="physical-filter" data-filter="test">
          ${Object.entries(PHYSICAL_TEST_LABELS).map(([value, label]) => `<option value="${value}" ${selectedTest === value ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>
    </div>
    <div class="kpi-grid physical-kpi-grid">
      <div class="kpi"><span>Evaluaciones</span><strong>${rows.length}</strong><em>registros filtrados</em></div>
      <div class="kpi"><span>Colaboradores únicos</span><strong>${unique}</strong><em>por nómina o nombre</em></div>
      <div class="kpi"><span>Iniciales / finales</span><strong>${initial} / ${final}</strong><em>comparación disponible</em></div>
      <div class="kpi"><span>Pendientes</span><strong>${pending}</strong><em>históricos por clasificar</em></div>
    </div>
    <div class="table-wrap physical-comparison-table">
      <table>
        <thead><tr><th>Prueba</th><th>Promedio histórico</th><th>Mínimo</th><th>Máximo</th><th>Resultados</th><th>Inicial</th><th>Final</th></tr></thead>
        <tbody>
          ${comparisonRows.map((row) => `
            <tr>
              <td>${PHYSICAL_TEST_LABELS[row.testKey]} <small>${PHYSICAL_TEST_UNITS[row.testKey]}</small></td>
              <td><strong>${row.stats.average === null ? "Sin datos" : row.stats.average.toFixed(1)}</strong></td>
              <td>${row.stats.min === null ? "-" : row.stats.min.toFixed(1)}</td>
              <td>${row.stats.max === null ? "-" : row.stats.max.toFixed(1)}</td>
              <td>${row.stats.count}</td>
              <td>${row.initialAverage === null ? "Pendiente" : row.initialAverage.toFixed(1)}</td>
              <td>${row.finalAverage === null ? "Pendiente" : row.finalAverage.toFixed(1)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <div class="physical-dashboard-actions physical-history-heading">
      <div>
        <p class="eyebrow">Historial detallado</p>
        <h3>Resultados de cada evaluación</h3>
        <p class="hero-copy">Los valores de remo históricos se muestran tal como estaban escritos porque mezclaban calorías y metros.</p>
      </div>
      <button class="ghost-btn" id="exportPhysicalEvaluations" type="button">Exportar Excel</button>
    </div>
    <div class="table-wrap physical-history-table">
      <table>
        <thead>
          <tr>
            <th>Fecha</th><th>Colaborador</th>
            ${Object.values(PHYSICAL_TEST_LABELS).map((label) => `<th>${label}</th>`).join("")}
            <th>Periodo</th><th>Tipo</th><th>Estado</th>
          </tr>
        </thead>
        <tbody>
          ${rows.slice(0, 169).map((row) => `
            <tr>
              <td>${row.evaluated_at ? new Date(row.evaluated_at).toLocaleDateString("es-MX") : "Sin fecha"}</td>
              <td>${escapeHtml(row.captured_name || row.collaborator_nomina || "Sin identificar")}</td>
              ${Object.keys(PHYSICAL_TEST_LABELS).map((testKey) => `<td>${escapeHtml(physicalResultDisplay(row, testKey))}</td>`).join("")}
              <td>${escapeHtml(row.period_key || row.semester_label || "Pendiente")}</td>
              <td>${physicalStatusLabel(row.evaluation_stage)}</td>
              <td><span class="physical-status ${row.classification_status === "pendiente" ? "pending" : "ready"}">${row.classification_status === "pendiente" ? "Pendiente" : "Clasificada"}</span></td>
            </tr>
          `).join("") || '<tr><td colspan="12">No hay evaluaciones para estos filtros.</td></tr>'}
        </tbody>
      </table>
    </div>
    <section class="physical-code-panel">
      <div>
        <p class="eyebrow">Acceso del formulario</p>
        <h3>Código general para profesores</h3>
        <p class="hero-copy">Es el mismo código para todos. Al cambiarlo, el anterior deja de funcionar inmediatamente.</p>
      </div>
      <div class="physical-code-controls">
        <label>Nuevo código
          <input id="newPhysicalAccessCode" type="password" minlength="4" maxlength="20" autocomplete="new-password" placeholder="Entre 4 y 20 caracteres" />
        </label>
        <button class="primary-btn" id="savePhysicalAccessCode" type="button">Cambiar código</button>
      </div>
    </section>
  `;
}

function filteredStudents() {
  const level = $("#levelFilter").value;
  const career = $("#careerFilter").value;
  const gender = $("#genderFilter").value;
  const term = $("#globalSearch").value.trim().toLowerCase();
  return allParticipationRows().filter((s) => {
    const areaMatch = activeArea === "general" || s.area === activeArea;
    const levelMatch = level === "todos" || s.nivel === level;
    const careerMatch = career === "todos" || s.carrera === career;
    const genderMatch = gender === "todos" || s.genero === gender;
    const text = `${s.matricula} ${s.carrera} ${s.genero} ${s.nivel} ${s.area}`.toLowerCase();
    return areaMatch && levelMatch && careerMatch && genderMatch && (!term || text.includes(term));
  });
}

function metricSet(data = filteredStudents()) {
  const unique = new Set(data.map((s) => s.matricula)).size;
  const registers = data.reduce((sum, s) => sum + s.registros, 0);
  const accredited = data.filter((s) => s.acreditado).length;
  const retention = data.length ? Math.round(((data.length - data.filter((s) => s.baja).length) / data.length) * 100) : 0;
  return { unique, registers, accredited, retention };
}

function renderNav() {
  const allowed = visibleAreas();
  const areaIcons = {
    general: "layout-dashboard",
    clases: "clipboard-list",
    gimnasio: "dumbbell",
    intramuros: "trophy",
    vivencia: "calendar-days",
    "semana-tec": "calendar-range",
    comunicacion: "megaphone",
    representativos: "medal",
    colaboradores: "users",
    compras: "wallet-cards",
    presentacion: "presentation",
    configuracion: "settings"
  };
  if (!allowed.some((area) => area.id === activeArea)) {
    activeArea = allowed[0]?.id || "general";
  }
  $("#areaNav").innerHTML = allowed.map((area) => `
    <button class="nav-item ${area.id === activeArea ? "active" : ""}" data-area="${area.id}">
      <span>${area.name}</span>
      <span class="nav-area-icon" title="${area.name}" aria-label="${area.name}">
        <i data-lucide="${areaIcons[area.id] || "circle"}" aria-hidden="true"></i>
      </span>
    </button>
  `).join("");
  window.lucide?.createIcons();
  $$(".nav-item").forEach((button) => button.addEventListener("click", async () => {
    const targetArea = button.dataset.area;
    activeArea = targetArea;
    activeView = "dashboard";
    render();
    if (targetArea === "semana-tec" && supabaseClient && currentUser?.auth === "supabase" && !semanaTecLoading) {
      semanaTecLoading = true;
      render();
      try {
        await Promise.all([loadSemanaTecCloud(), loadSemanaTecGroupGradeFiles()]);
      } finally {
        semanaTecLoading = false;
        if (activeArea === targetArea) render();
      }
    }
    if (targetArea === "representativos" && supabaseClient && currentUser?.auth === "supabase" && !participationUploadLoading.representativos) {
      participationUploadLoading.representativos = true;
      render();
      try {
        await loadParticipationUploadsCloud("representativos");
      } finally {
        participationUploadLoading.representativos = false;
        if (activeArea === targetArea) render();
      }
    }
  }));
}

function renderLogin() {
  const root = $("#loginRoot");
  if (currentUser) {
    root.innerHTML = "";
    return;
  }
  root.innerHTML = `
    <div class="login-overlay">
      <section class="login-card" aria-label="Acceso WellSync">
        <div class="login-visual">
          <div>
            <div class="login-brand-lockup">
              <div class="login-logo-tile">
                <img src="./assets/borregos_logo_manual_oficial.png" alt="Borregos" />
              </div>
              <span>Wellness Center</span>
            </div>
            <p class="eyebrow" style="color:#f0b323">Piloto web</p>
            <h1>WellSync</h1>
            <p>Entra con un perfil demo para validar permisos, captura por área y dashboards antes de liberar la plataforma.</p>
          </div>
          <p>Privacidad por diseño: solo matrícula, género, carrera, semestre y nivel escolar.</p>
        </div>
        <form id="loginForm">
          <p class="eyebrow">${cloudStatus}</p>
          <h2>Acceso Supabase</h2>
          <label>Correo
            <input name="email" type="email" placeholder="correo@ejemplo.com" />
          </label>
          <label>Contrasena
            <input name="password" type="password" placeholder="Contrasena de Supabase" />
          </label>
          <button class="primary-btn" type="button" id="supabaseLoginButton" ${supabaseClient ? "" : "disabled"}>Entrar con Supabase</button>
          <p class="login-feedback" id="supabaseLoginFeedback">${supabaseClient ? "Listo para validar tu cuenta Supabase." : "Supabase no esta disponible en esta publicacion."}</p>
          <div class="login-divider">Modo demo</div>
          <p class="eyebrow">Sesión de prueba</p>
          <h2>Selecciona un perfil</h2>
          <label>Perfil
            <select name="userId">
              ${demoUsers.map((user) => `<option value="${user.id}">${user.name}</option>`).join("")}
            </select>
          </label>
          <label>Código de acceso
            <input name="accessCode" value="demo" />
          </label>
          <button class="primary-btn" type="button" id="loginButton">Entrar al prototipo</button>
          <p class="hero-copy">Código temporal: demo. En producción esto se reemplaza por Supabase Auth o SSO institucional.</p>
        </form>
      </section>
    </div>
  `;
  $("#supabaseLoginButton")?.addEventListener("click", loginWithSupabase);
  $("#loginButton").addEventListener("click", () => {
    const form = new FormData($("#loginForm"));
    if (String(form.get("accessCode") || "").trim().toLowerCase() !== "demo") {
      toast("Código incorrecto para el prototipo");
      return;
    }
    const user = demoUsers.find((item) => item.id === form.get("userId")) || demoUsers[0];
    saveSession(user);
    addAudit("login", `Ingreso como ${user.name}`);
    activeArea = user.role === "direccion" ? "general" : user.area;
    activeView = "dashboard";
    render();
    toast(`Sesión iniciada: ${user.name}`);
  });
}

function syncRoleSelector() {
  const roleSelect = $("#roleSelect");
  if (currentUser?.auth === "supabase") {
    roleSelect.innerHTML = `<option value="${currentUser.id}">${currentUser.name}</option>`;
    roleSelect.value = currentUser.id;
    return;
  }
  roleSelect.innerHTML = demoUsers.map((user) => `<option value="${user.id}">${user.name}</option>`).join("");
  roleSelect.value = currentUser?.id || "dir";
}

function renderCareers() {
  $("#careerFilter").innerHTML = `<option value="todos">Todas</option>${careers.map((c) => `<option>${c}</option>`).join("")}`;
}

function renderExecutiveKpis() {
  const metrics = metricSet(allParticipationRows());
  $("#executiveKpis").innerHTML = [
    ["Alumnos únicos", metrics.unique, "+12% vs periodo ant."],
    ["Registros", metrics.registers, `${cloudCaptures.length} nube / ${localCaptures.length} local`],
    ["Retención", `${metrics.retention}%`, "sin datos sensibles"],
    ["Áreas activas", areas.filter((area) => !["general", "configuracion"].includes(area.id)).length, "módulos operativos"]
  ].map(([label, value, hint]) => `<div class="kpi"><span>${label}</span><strong>${value}</strong><em>${hint}</em></div>`).join("");
}

function gymDayFromDate(dateValue) {
  if (!dateValue) return "";
  const dayIndex = new Date(`${dateValue}T12:00:00`).getDay();
  return GYM_DAYS[(dayIndex + 6) % 7];
}

function gymDateToTime(dateValue) {
  const date = new Date(`${dateValue}T12:00:00`);
  return Number.isNaN(date.getTime()) ? null : date.getTime();
}

function gymSemesterWeekFromDate(dateValue, startDateValue) {
  const dateTime = gymDateToTime(dateValue);
  const startTime = gymDateToTime(startDateValue);
  if (dateTime === null || startTime === null) return 1;
  return Math.max(1, Math.floor((dateTime - startTime) / (7 * 24 * 60 * 60 * 1000)) + 1);
}

function gymFacilityMatches(rowFacility, selectedFacility = gymDashboardFacility) {
  const normalizedFacility = normalizeGymSite(rowFacility);
  if (selectedFacility === "Ambas") return ["Wellness", "EMIS"].includes(normalizedFacility);
  return normalizedFacility === selectedFacility;
}

function gymManualWeekForDate(dateValue, facility) {
  const normalizedFacility = normalizeGymSite(facility);
  const exactMatch = gymManualAttendanceRows.find((row) =>
    row.attendance_date === dateValue && normalizeGymSite(row.facility) === normalizedFacility
  );
  const dateMatch = exactMatch || gymManualAttendanceRows.find((row) => row.attendance_date === dateValue);
  const week = Number(dateMatch?.week_number);
  return Number.isFinite(week) && week > 0 ? week : null;
}

function gymAsistenciasToAttendanceRecords(rows) {
  if (!rows.length) return [];
  const startDate = rows
    .map((row) => row.fecha)
    .filter(Boolean)
    .sort()[0];
  const grouped = rows.reduce((acc, row) => {
    const facility = normalizeGymSite(row.sitio);
    if (!row.fecha || !facility) return acc;
    const key = `${row.fecha}|${facility}`;
    if (!acc[key]) {
      acc[key] = {
        attendance_date: row.fecha,
        week_number: gymManualWeekForDate(row.fecha, facility) || gymSemesterWeekFromDate(row.fecha, startDate),
        day_of_week: gymDayFromDate(row.fecha),
        facility,
        attendee_count: 0,
        source_name: "gym_asistencias"
      };
    }
    acc[key].attendee_count += 1;
    return acc;
  }, {});
  return Object.values(grouped);
}

function gymAttendanceSourceKey(row) {
  const date = row.attendance_date || row.fecha || "";
  const facility = normalizeGymSite(row.facility || row.sitio);
  return date && facility ? `${date}|${facility}` : "";
}

function mergeGymAttendanceSources(manualRows, importedRows) {
  const importedSummary = gymAsistenciasToAttendanceRecords(importedRows);
  const importedKeys = new Set(importedSummary.map(gymAttendanceSourceKey).filter(Boolean));
  const manualOnlyRows = manualRows.filter((row) => !importedKeys.has(gymAttendanceSourceKey(row)));
  return [...manualOnlyRows, ...importedSummary];
}

function gymMaxWeek() {
  return Math.max(20, ...gymAttendanceRecords.map((row) => Number(row.week_number) || 0));
}

function gymLatestWeek() {
  return Math.max(1, ...gymAttendanceRecords.map((row) => Number(row.week_number) || 0));
}

function gymWeekOptions(selected) {
  return Array.from({ length: gymMaxWeek() }, (_, index) => {
    const week = index + 1;
    return `<option value="${week}" ${week === selected ? "selected" : ""}>Hasta semana ${week}</option>`;
  }).join("");
}

function gymBarRows(rows) {
  const max = Math.max(1, ...rows.map((row) => Number(row.value) || 0));
  return rows.map((row) => `
    <div class="gym-bar-row">
      <span>${escapeHtml(row.label)}</span>
      <div class="gym-bar-track"><i style="width:${Math.round((Number(row.value) || 0) / max * 100)}%"></i></div>
      <strong>${Number(row.value || 0).toLocaleString("es-MX", { maximumFractionDigits: 1 })}</strong>
    </div>
  `).join("");
}

function gymColumnBars(rows) {
  const max = Math.max(1, ...rows.filter((row) => row.hasRecords !== false).map((row) => Number(row.value) || 0));
  return rows.map((row) => {
    const hasRecords = row.hasRecords !== false;
    const value = Number(row.value) || 0;
    const height = hasRecords && value ? Math.max(10, Math.round(value / max * 100)) : 0;
    return `
      <div class="gym-column-item ${hasRecords ? "" : "no-records"}">
        <strong>${hasRecords ? value.toLocaleString("es-MX", { maximumFractionDigits: 0 }) : "Sin registros"}</strong>
        <div class="gym-column-track">
          <i style="height:${height}%"></i>
        </div>
        <span>${escapeHtml(row.label)}</span>
      </div>
    `;
  }).join("");
}

function gymHeatmapHour(value) {
  const raw = String(value || "").trim();
  const match = raw.match(/^(\d{1,2}):(\d{2})/);
  if (!match) return "";
  const hour = Math.max(0, Math.min(23, Number(match[1]) || 0));
  return `${String(hour).padStart(2, "0")}:00`;
}

function gymHeatmapRows(facility = gymDashboardFacility, mode = gymHeatmapMode) {
  const matrix = {};
  const dateCountsByDay = GYM_DAYS.reduce((acc, day) => {
    acc[day] = new Set();
    return acc;
  }, {});
  gymAsistencias.filter((row) => gymFacilityMatches(row.sitio, facility)).forEach((row) => {
    const day = gymDayFromDate(row.fecha);
    const hour = gymHeatmapHour(row.hora);
    if (!day || !hour) return;
    dateCountsByDay[day]?.add(row.fecha);
    if (!matrix[hour]) matrix[hour] = {};
    matrix[hour][day] = (matrix[hour][day] || 0) + 1;
  });
  return Object.keys(matrix)
    .sort((a, b) => a.localeCompare(b))
    .map((hour) => ({
      hour,
      values: GYM_DAYS.reduce((acc, day) => {
        const total = matrix[hour]?.[day] || 0;
        const denominator = dateCountsByDay[day]?.size || 0;
        acc[day] = mode === "average" && denominator ? total / denominator : total;
        return acc;
      }, {})
    }));
}

function gymHeatmapTone(value, max) {
  if (!value) return "empty";
  const ratio = max ? value / max : 0;
  if (ratio >= 0.66) return "high";
  if (ratio >= 0.33) return "medium";
  return "low";
}

function renderGymHeatmap() {
  const rows = gymHeatmapRows(gymDashboardFacility, gymHeatmapMode);
  const max = Math.max(1, ...rows.flatMap((row) => Object.values(row.values)));
  const totalTimedVisits = gymAsistencias
    .filter((row) => gymFacilityMatches(row.sitio, gymDashboardFacility) && gymHeatmapHour(row.hora))
    .length;
  const valueLabel = gymHeatmapMode === "average" ? "promedio por día equivalente" : "visitas acumuladas";
  const modeLabel = gymHeatmapMode === "average" ? "Promedio activo" : "Total acumulado activo";
  const formatHeatmapValue = (value) => gymHeatmapMode === "average"
    ? value.toLocaleString("es-MX", { maximumFractionDigits: 1 })
    : value.toLocaleString("es-MX", { maximumFractionDigits: 0 });
  const controls = `
    <div class="gym-heatmap-controls">
      <label>C&aacute;lculo
        <select id="gymHeatmapMode" aria-label="Calculo del mapa de calor">
          <option value="average" ${gymHeatmapMode === "average" ? "selected" : ""}>Promedio</option>
          <option value="total" ${gymHeatmapMode === "total" ? "selected" : ""}>Total acumulado</option>
        </select>
      </label>
    </div>
  `;
  if (!rows.length) {
    return `${controls}<p class="form-message">Aun no hay asistencias historicas con hora para ${gymDashboardFacility}. Sube el CSV de asistencias con la columna hora.</p>`;
  }
  return `
    ${controls}
    <div class="gym-heatmap-legend" aria-label="Escala de ocupacion">
      <span><i class="low"></i>Baja</span>
      <span><i class="medium"></i>Media</span>
      <span><i class="high"></i>Alta</span>
      <strong>${totalTimedVisits.toLocaleString("es-MX")} visitas con hora  -  ${modeLabel}</strong>
    </div>
    <div class="gym-heatmap" role="table" aria-label="Mapa de calor de ocupacion por dia y hora">
      <div class="gym-heatmap-cell gym-heatmap-head">Hora</div>
      ${GYM_DAYS.map((day) => `<div class="gym-heatmap-cell gym-heatmap-head">${escapeHtml(day)}</div>`).join("")}
      ${rows.map((row) => `
        <div class="gym-heatmap-cell gym-heatmap-time">${row.hour}</div>
        ${GYM_DAYS.map((day) => {
          const value = row.values[day] || 0;
          const label = formatHeatmapValue(value);
          return `<div class="gym-heatmap-cell ${gymHeatmapTone(value, max)}" title="${escapeHtml(day)} ${row.hour}: ${label} ${valueLabel}">${value ? label : ""}</div>`;
        }).join("")}
      `).join("")}
    </div>
  `;
}

function gymWeeklyRows(facility = gymDashboardFacility) {
  const lastWeek = gymWeekSelection[facility] || gymMaxWeek();
  return Array.from({ length: lastWeek }, (_, index) => {
    const week = index + 1;
    const records = gymAttendanceRecords
      .filter((row) => gymFacilityMatches(row.facility, facility) && Number(row.week_number) === week);
    const value = records
      .reduce((sum, row) => sum + Number(row.attendee_count || 0), 0);
    return { label: `S${week}`, value, hasRecords: records.length > 0 };
  });
}

function gymDailyRows(facility = gymDashboardFacility) {
  return GYM_DAYS.map((day) => {
    const totalsByDate = gymAttendanceRecords
      .filter((row) => row.day_of_week === day && gymFacilityMatches(row.facility, facility))
      .reduce((acc, row) => {
        const date = row.attendance_date || "Sin fecha";
        acc[date] = (acc[date] || 0) + Number(row.attendee_count || 0);
        return acc;
      }, {});
    const dailyTotals = Object.values(totalsByDate);
    const total = dailyTotals.reduce((sum, value) => sum + value, 0);
    return { label: day, value: dailyTotals.length ? total / dailyTotals.length : 0 };
  });
}

function gymAttendanceStudentProfiles(facility = gymDashboardFacility) {
  const profilesByMatricula = new Map();
  const studentsByMatricula = new Map(
    cloudStudentDatabase
      .map((student) => [normalizeMatricula(student.matricula), student])
      .filter(([matricula]) => matricula)
  );
  gymAsistencias
    .filter((row) => gymFacilityMatches(row.sitio, facility))
    .forEach((row) => {
      const matricula = normalizeMatricula(row.matricula);
      if (!matricula) return;
      const existing = profilesByMatricula.get(matricula);
      if (existing) {
        existing.attendanceCount += 1;
        return;
      }
      const student = studentsByMatricula.get(matricula) || null;
      profilesByMatricula.set(matricula, {
        matricula,
        matched: Boolean(student),
        semestre: student?.semestre ? String(student.semestre) : "Sin identificar",
        carrera: student?.carrera || "Sin identificar",
        attendanceCount: 1
      });
    });
  return Array.from(profilesByMatricula.values());
}

function gymStudentDistributionRows(profiles, field, options = {}) {
  const weightFor = (row) => options.weightField ? Math.max(0, Number(row[options.weightField]) || 0) : 1;
  const total = profiles.reduce((sum, row) => sum + weightFor(row), 0);
  const counts = profiles.reduce((acc, row) => {
    const label = String(row[field] || "Sin identificar").trim() || "Sin identificar";
    acc[label] = (acc[label] || 0) + weightFor(row);
    return acc;
  }, {});
  let rows = Object.entries(counts)
    .map(([label, count]) => ({
      label,
      count,
      percent: total ? Math.round((count / total) * 1000) / 10 : 0
    }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "es"));
  if (options.semesterOrder) {
    const order = new Map([...options.semesterOrder, "Sin identificar"].map((label, index) => [label, index]));
    rows = rows.sort((a, b) => (order.get(a.label) ?? 99) - (order.get(b.label) ?? 99));
  }
  if (options.top && rows.length > options.top) {
    const visible = rows.slice(0, options.top);
    const otherCount = rows.slice(options.top).reduce((sum, row) => sum + row.count, 0);
    visible.push({
      label: "Otras",
      count: otherCount,
      percent: total ? Math.round((otherCount / total) * 1000) / 10 : 0
    });
    rows = visible;
  }
  return rows;
}

function renderGymStudentDistribution(title, subtitle, rows, total, unmatchedCount, variant = "", options = {}) {
  const max = Math.max(1, ...rows.map((row) => row.count));
  const summaryLabel = options.summaryLabel || "alumnos únicos con asistencia";
  const itemLabel = options.itemLabel || "alumnos";
  const itemLabelSingular = options.itemLabelSingular || itemLabel;
  const unmatchedLabel = options.unmatchedLabel || "sin cruce en Base Maestra";
  const unmatchedLabelSingular = options.unmatchedLabelSingular || unmatchedLabel;
  return `
    <section class="chart-panel gym-distribution-chart ${variant ? `gym-distribution-${variant}` : ""}">
      <div class="gym-chart-heading">
        <div><p class="eyebrow">Asistencia</p><h3>${escapeHtml(title)}</h3></div>
        <span>${escapeHtml(subtitle)}</span>
      </div>
      <div class="gym-distribution-summary">
        <strong>${total.toLocaleString("es-MX")}</strong>
        <span>${escapeHtml(summaryLabel)}</span>
        <em>${unmatchedCount.toLocaleString("es-MX")} ${escapeHtml(unmatchedCount === 1 ? unmatchedLabelSingular : unmatchedLabel)}</em>
      </div>
      <div class="gym-distribution-bars">
        ${rows.length ? rows.map((row) => `
          <div class="gym-distribution-row">
            <div>
              <strong>${escapeHtml(row.label)}</strong>
              <span>${row.count.toLocaleString("es-MX")} ${escapeHtml(row.count === 1 ? itemLabelSingular : itemLabel)}</span>
            </div>
            <div class="gym-bar-track"><i style="width:${Math.round((row.count / max) * 100)}%"></i></div>
            <em>${row.percent.toLocaleString("es-MX", { maximumFractionDigits: 1 })}%</em>
          </div>
        `).join("") : `<p class="form-message">Sin asistencias con matrícula para ${escapeHtml(gymDashboardFacility)}.</p>`}
      </div>
    </section>
  `;
}

function gymAttendanceWeekLabel(week, facility) {
  const records = gymAttendanceRecords
    .filter((row) => Number(row.week_number) === week && gymFacilityMatches(row.facility, facility) && row.attendance_date)
    .map((row) => row.attendance_date)
    .sort();
  if (!records.length) return `Semana ${week}`;
  const first = new Date(`${records[0]}T00:00:00`);
  const last = new Date(`${records[records.length - 1]}T00:00:00`);
  const sameMonth = first.getMonth() === last.getMonth();
  const month = new Intl.DateTimeFormat("es-MX", { month: "short" });
  const firstLabel = sameMonth ? first.getDate() : `${first.getDate()} ${month.format(first)}`;
  const lastLabel = `${last.getDate()} ${month.format(last)}`;
  return `Semana ${week} ${firstLabel}-${lastLabel}`;
}

function gymAttendanceWeeklySummary(facility) {
  const rowsByWeek = new Map();
  gymAttendanceRecords
    .filter((row) => gymFacilityMatches(row.facility, facility))
    .forEach((row) => {
      const week = Number(row.week_number) || 0;
      if (!week) return;
      if (!rowsByWeek.has(week)) {
        rowsByWeek.set(week, {
          week,
          label: gymAttendanceWeekLabel(week, facility),
          total: 0,
          days: GYM_DAYS.reduce((acc, day) => {
            acc[day] = 0;
            return acc;
          }, {})
        });
      }
      const summary = rowsByWeek.get(week);
      const count = Number(row.attendee_count || 0);
      summary.total += count;
      if (summary.days[row.day_of_week] !== undefined) summary.days[row.day_of_week] += count;
    });
  return Array.from(rowsByWeek.values()).sort((a, b) => a.week - b.week);
}

function renderGymFacilityAttendanceTable(facility) {
  const rows = gymAttendanceWeeklySummary(facility);
  const total = rows.reduce((sum, row) => sum + row.total, 0);
  const dayTotals = GYM_DAYS.reduce((acc, day) => {
    acc[day] = rows.reduce((sum, row) => sum + Number(row.days[day] || 0), 0);
    return acc;
  }, {});
  const dayLabels = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
  return `
    <article class="gym-attendance-summary-card">
      <div class="gym-chart-heading">
        <div><p class="eyebrow">${escapeHtml(facility)}</p><h3>Resumen semanal cargado</h3></div>
        <strong>${formatCount(total)}</strong>
      </div>
      <div class="table-wrap gym-attendance-summary-wrap">
        <table class="gym-attendance-summary-table">
          <thead>
            <tr>
              <th>Fila</th>
              <th>${escapeHtml(facility)}</th>
              <th>Cantidad</th>
              ${dayLabels.map((label) => `<th>${label}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${rows.length ? rows.map((row, index) => `
              <tr>
                <td>${index + 1}</td>
                <td>${escapeHtml(row.label)}</td>
                <td><strong>${formatCount(row.total)}</strong></td>
                ${GYM_DAYS.map((day) => `<td>${row.days[day] ? formatCount(row.days[day]) : ""}</td>`).join("")}
              </tr>
            `).join("") : `<tr><td colspan="10">Sin asistencias cargadas para ${escapeHtml(facility)}.</td></tr>`}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Total</td>
              <td>${formatCount(total)}</td>
              ${GYM_DAYS.map((day) => `<td>${dayTotals[day] ? formatCount(dayTotals[day]) : ""}</td>`).join("")}
            </tr>
          </tfoot>
        </table>
      </div>
    </article>
  `;
}

function renderGymCombinedAttendanceTable() {
  const wellnessRows = gymAttendanceWeeklySummary("Wellness");
  const emisRows = gymAttendanceWeeklySummary("EMIS");
  const wellnessByWeek = new Map(wellnessRows.map((row) => [row.week, row]));
  const emisByWeek = new Map(emisRows.map((row) => [row.week, row]));
  const weeks = Array.from(new Set([...wellnessByWeek.keys(), ...emisByWeek.keys()])).sort((a, b) => a - b);
  const dayLabels = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
  const blankDays = GYM_DAYS.reduce((acc, day) => {
    acc[day] = 0;
    return acc;
  }, {});
  const totalsFor = (rows) => ({
    total: rows.reduce((sum, row) => sum + row.total, 0),
    days: GYM_DAYS.reduce((acc, day) => {
      acc[day] = rows.reduce((sum, row) => sum + Number(row.days[day] || 0), 0);
      return acc;
    }, {})
  });
  const wellnessTotals = totalsFor(wellnessRows);
  const emisTotals = totalsFor(emisRows);
  const dayCells = (row) => GYM_DAYS.map((day) => `<td>${row?.days?.[day] ? formatCount(row.days[day]) : ""}</td>`).join("");
  return `
    <div class="table-wrap gym-attendance-combined-wrap">
      <table class="gym-attendance-combined-table">
        <thead>
          <tr>
            <th>Fila</th>
            <th>Gimnasio Wellness Center</th>
            <th>Cantidad de alumnos</th>
            ${dayLabels.map((label) => `<th>${label}</th>`).join("")}
            <th class="gym-table-gap"></th>
            <th>EMIS</th>
            <th>Cantidad de alumnos EMIS</th>
            ${dayLabels.map((label) => `<th>${label}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${weeks.length ? weeks.map((week, index) => {
            const wellness = wellnessByWeek.get(week) || { label: "", total: 0, days: blankDays };
            const emis = emisByWeek.get(week) || { label: "", total: 0, days: blankDays };
            return `
              <tr>
                <td>${index + 1}</td>
                <td>${escapeHtml(wellness.label)}</td>
                <td><strong>${wellness.total ? formatCount(wellness.total) : ""}</strong></td>
                ${dayCells(wellness)}
                <td class="gym-table-gap"></td>
                <td>${escapeHtml(emis.label)}</td>
                <td><strong>${emis.total ? formatCount(emis.total) : ""}</strong></td>
                ${dayCells(emis)}
              </tr>
            `;
          }).join("") : `<tr><td colspan="20">Sin asistencias cargadas todavía.</td></tr>`}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total</td>
            <td>${formatCount(wellnessTotals.total)}</td>
            ${GYM_DAYS.map((day) => `<td>${wellnessTotals.days[day] ? formatCount(wellnessTotals.days[day]) : ""}</td>`).join("")}
            <td class="gym-table-gap"></td>
            <td>Total</td>
            <td>${formatCount(emisTotals.total)}</td>
            ${GYM_DAYS.map((day) => `<td>${emisTotals.days[day] ? formatCount(emisTotals.days[day]) : ""}</td>`).join("")}
          </tr>
        </tfoot>
      </table>
    </div>
  `;
}

function renderGymAttendanceLoadedSummary() {
  return `
    <section class="chart-panel gym-attendance-loaded-summary">
      <div class="gym-chart-heading">
        <div>
          <p class="eyebrow">Asistencias cargadas</p>
          <h3>Tabla de control semanal</h3>
        </div>
        <span>${formatCount(gymAttendanceRecords.length)} registros consolidados</span>
      </div>
      ${renderGymCombinedAttendanceTable()}
    </section>
  `;
}

function renderGymDashboard() {
  const dailyRows = gymDailyRows(gymDashboardFacility);
  const attendanceProfiles = gymAttendanceStudentProfiles(gymDashboardFacility);
  const unmatchedAttendance = attendanceProfiles.filter((row) => !row.matched).length;
  const careerProfiles = attendanceProfiles.filter((row) => (
    row.matched && meaningfulAcademicValue([row.carrera])
  ));
  const pendingCareerProfiles = attendanceProfiles.length - careerProfiles.length;
  const semesterRows = gymStudentDistributionRows(attendanceProfiles, "semestre", { semesterOrder: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] });
  const careerRows = gymStudentDistributionRows(careerProfiles, "carrera", { top: 10 });
  const emptyMessage = !gymDataLoaded
    ? `<p class="form-message">Activa las tablas de Gimnasio en Supabase para comenzar.</p>`
    : !gymAttendanceRecords.length
      ? `<p class="form-message">Aún no hay asistencias. Captura el primer registro para alimentar las gráficas.</p>`
      : "";
  return `
    <div class="gym-dashboard">
      <div class="gym-dashboard-toolbar">
        <div>
          <span>Instalaci&oacute;n</span>
          <div class="segmented small" aria-label="Instalacion del Dashboard de Gimnasio">
            ${["Wellness", "EMIS", "Ambas"].map((facility) => `<button type="button" class="${gymDashboardFacility === facility ? "active" : ""}" data-gym-dashboard-facility="${facility}">${facility}</button>`).join("")}
          </div>
        </div>
        <p>El filtro se aplica a todas las gr&aacute;ficas de asistencia.</p>
      </div>
      <div class="gym-dashboard-main-row">
        <section class="chart-panel gym-daily-chart">
          <div class="gym-chart-heading">
            <div><p class="eyebrow">Asistencia</p><h3>Promedio diario</h3></div>
            <span>Promedio de asistentes registrados</span>
          </div>
          ${emptyMessage}
          <div class="gym-bars">${gymBarRows(dailyRows)}</div>
        </section>
        ${renderGymStudentDistribution("Por semestre", "% de alumnos asistentes", semesterRows, attendanceProfiles.length, unmatchedAttendance, "semester")}
        ${renderGymStudentDistribution("Alumnos asistentes por carrera", "Top 10 + Otras", careerRows, careerProfiles.length, pendingCareerProfiles, "", {
          summaryLabel: "alumnos únicos con carrera identificada",
          itemLabel: "alumnos",
          itemLabelSingular: "alumno",
          unmatchedLabel: "alumnos pendientes de cruce académico",
          unmatchedLabelSingular: "alumno pendiente de cruce académico"
        })}
      </div>
      <section class="chart-panel gym-week-chart">
        <div class="gym-chart-heading">
          <div><p class="eyebrow">${gymDashboardFacility}</p><h3>Asistencia semanal</h3></div>
          <select class="gym-week-filter" data-facility="${gymDashboardFacility}" aria-label="Semanas visibles de ${gymDashboardFacility}">
            ${gymWeekOptions(gymWeekSelection[gymDashboardFacility])}
          </select>
        </div>
        <div class="gym-week-columns">${gymColumnBars(gymWeeklyRows(gymDashboardFacility))}</div>
      </section>
      <section class="chart-panel gym-heatmap-panel">
        <div class="gym-chart-heading">
          <div><p class="eyebrow">Ocupaci&oacute;n</p><h3>Mapa de calor por horario</h3></div>
          <span>Registros reales por fecha y hora</span>
        </div>
        ${renderGymHeatmap()}
      </section>
    </div>
  `;
}

function renderGymAttendanceRegistration() {
  const today = new Date().toISOString().slice(0, 10);
  const importedKeys = new Set(gymAsistenciasToAttendanceRecords(gymAsistencias).map(gymAttendanceSourceKey).filter(Boolean));
  const manualRecords = gymManualAttendanceRows
    .sort((a, b) => {
      const dateOrder = String(b.attendance_date).localeCompare(String(a.attendance_date));
      return dateOrder || String(b.created_at || "").localeCompare(String(a.created_at || ""));
    });
  return `
    <div class="gym-attendance-registration">
      ${renderGymAttendanceLoadedSummary()}
      <div class="gym-form-layout">
        <section class="form-panel">
          <p class="eyebrow">Gimnasio</p>
          <h3>Registro de Asistencia</h3>
          <form id="gymAttendanceForm">
            <label>Semana<input name="week_number" type="number" min="1" value="${gymLatestWeek()}" required /></label>
            <label>Fecha<input id="gymAttendanceDate" name="attendance_date" type="date" value="${today}" required /></label>
            <label>Día<input id="gymAttendanceDay" name="day_of_week" value="${gymDayFromDate(today)}" readonly required /></label>
            <label>Instalación
              <select name="facility" required><option>Wellness</option><option>EMIS</option></select>
            </label>
            <label>Cantidad de asistentes<input name="attendee_count" type="number" min="0" required /></label>
            <label class="wide-field">Observaciones<textarea name="notes" rows="3" placeholder="Opcional"></textarea></label>
            <button class="primary-btn wide-field" type="submit">Guardar asistencia</button>
          </form>
          <p class="form-message">Respaldo manual. Si ya existe CSV para la misma fecha e instalación, el dashboard usa el CSV y omite este registro.</p>
        </section>
        <section class="chart-panel">
          <div class="gym-chart-heading">
            <div><p class="eyebrow">Historial de cargas</p><h3>Registros manuales</h3></div>
            <strong>${manualRecords.length}</strong>
          </div>
          <p class="form-message">Puedes eliminar una captura incorrecta. Las asistencias históricas importadas permanecen protegidas.</p>
          <div class="table-wrap">
            <table><thead><tr><th>Fecha</th><th>Semana</th><th>Día</th><th>Instalación</th><th>Asistentes</th><th>Observaciones</th><th>Acción</th></tr></thead>
            <tbody>${manualRecords.length ? manualRecords.map((row) => `
              <tr>
                <td>${escapeHtml(row.attendance_date)}</td>
                <td>${row.week_number}</td>
                <td>${escapeHtml(row.day_of_week)}</td>
                <td>${escapeHtml(row.facility)}</td>
                <td>${row.attendee_count}</td>
                <td>${escapeHtml(importedKeys.has(gymAttendanceSourceKey(row)) ? "Omitido en dashboard: existe CSV" : (row.notes || ""))}</td>
                <td>
                  <button
                    class="danger-btn"
                    data-delete-gym-attendance="${escapeHtml(row.id)}"
                    type="button"
                    ${canDeleteGymAttendance(row) ? "" : "disabled"}
                    title="${canDeleteGymAttendance(row) ? "Eliminar esta carga" : "Solo puedes eliminar tus propias cargas"}"
                  >Eliminar</button>
                </td>
              </tr>
            `).join("") : `<tr><td colspan="7">Sin cargas manuales todavía.</td></tr>`}</tbody></table>
          </div>
        </section>
      </div>
    </div>
  `;
}

function canDeleteGymAttendance(row) {
  if (!row?.id || currentUser?.auth !== "supabase") return false;
  return isLeadership() || (canEditArea("gimnasio") && row.created_by === currentUser?.id);
}

function safeGymStudentSnapshot(student) {
  return Object.fromEntries(Object.entries(student || {}).filter(([key]) => !/(correo|email|tel|phone|domicilio|direccion|salud|medic|emergencia)/i.test(key)));
}

function renderGymStudentDetails(student) {
  if (!student) return `<p class="form-message">Escribe una matrícula para consultar la Base Maestra.</p>`;
  const preferredKeys = ["Matricula", "Nombre Campus", "Desc Nivel Acad Alumno", "Desc Programa Acad", "Periodo acad", "Genero", "Semestre"];
  const entries = preferredKeys.filter((key) => student[key] !== undefined && student[key] !== null && student[key] !== "");
  return `
    <div class="gym-student-details">
      ${entries.map((key) => `<div><span>${escapeHtml(key)}</span><strong>${escapeHtml(student[key])}</strong></div>`).join("")}
    </div>
    <button class="primary-btn" id="saveGymStudentRegistration" type="button">Registrar matrícula en Gimnasio</button>
  `;
}

function renderGymStudentRegistration() {
  const rows = gymStudentRegistrations.slice(0, 25);
  return `
    <div class="gym-form-layout">
      <section class="form-panel">
        <p class="eyebrow">Base Maestra de Alumnos</p>
        <h3>Registro de Matrículas</h3>
        <form id="gymStudentLookupForm" class="gym-lookup-form">
          <label>Matrícula<input name="matricula" autocomplete="off" placeholder="A01234567" required /></label>
          <button class="primary-btn" type="submit">Buscar matrícula</button>
        </form>
        <div id="gymStudentLookupResult">${renderGymStudentDetails(gymMasterStudent)}</div>
      </section>
      <section class="chart-panel">
        <div class="gym-chart-heading"><div><p class="eyebrow">Gimnasio</p><h3>Matrículas registradas</h3></div><strong>${gymStudentRegistrations.length}</strong></div>
        <div class="gym-upload-actions">
          <input id="gymAttendanceCsv" type="file" accept=".csv,text/csv" hidden />
          <button class="primary-btn" id="uploadGymAttendanceCsv" type="button" ${gymAttendanceImporting ? "disabled" : ""}>${gymAttendanceImporting ? "Cargando archivo..." : "Cargar Archivo de Asistencias"}</button>
          <span>${gymAsistencias.length.toLocaleString("es-MX")} asistencias históricas</span>
        </div>
        <div class="table-wrap">
          <table><thead><tr><th>Matrícula</th><th>Campus</th><th>Nivel</th><th>Fecha</th></tr></thead>
          <tbody>${rows.length ? rows.map((row) => {
            const snapshot = row.student_snapshot || {};
            return `<tr><td>${escapeHtml(row.matricula)}</td><td>${escapeHtml(snapshot["Nombre Campus"] || "")}</td><td>${escapeHtml(snapshot["Desc Nivel Acad Alumno"] || "")}</td><td>${escapeHtml(String(row.registered_at || "").slice(0, 10))}</td></tr>`;
          }).join("") : `<tr><td colspan="4">Sin matrículas registradas todavía.</td></tr>`}</tbody></table>
        </div>
      </section>
    </div>
  `;
}

function semanaTecWeekFromGroup(value) {
  const group = Number(String(value ?? "").trim());
  if (!Number.isInteger(group)) return 0;
  if (group >= 100 && group <= 199) return 6;
  if (group >= 200 && group <= 299) return 12;
  return 0;
}

function semanaTecLogicalKey(row) {
  return [row.periodo || "Sin periodo", normalizeMatricula(row.matricula), Number(row.numero_grupo || 0)].join("|");
}

function normalizeSemanaTecGrade(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  const numeric = Number(raw.replace(",", "."));
  return Number.isFinite(numeric) ? String(Math.max(0, Math.min(100, numeric))) : raw.toUpperCase();
}

function normalizeSemanaTecRow(row, index, fileName = "", period = "") {
  const numeroGrupo = Number(String(pickColumn(row, ["Numero Grupo", "Número Grupo", "Grupo", "numero_grupo"]) || "").trim());
  const semana = semanaTecWeekFromGroup(numeroGrupo);
  const matricula = normalizeMatricula(pickColumn(row, ["Matriculas", "Matrículas", "Matricula", "Matrícula", "matricula"]));
  if (!semana || !matricula) return null;
  return {
    rowNumber: index + 2,
    matricula,
    clave_materia: String(pickColumn(row, ["Clave Materia", "Clave de materia", "clave_materia"]) || "").trim(),
    nombre_materia: String(pickColumn(row, ["Nombre Materia", "Materia", "nombre_materia"]) || "").trim(),
    crn: String(pickColumn(row, ["CRN", "crn"]) || "").trim(),
    numero_grupo: numeroGrupo,
    profesor: String(pickColumn(row, ["Nombre Prof Titular", "Profesor", "Nombre profesor", "profesor"]) || "Sin profesor").trim(),
    horario: String(pickColumn(row, ["Horario", "Hora", "horario"]) || "").trim(),
    frecuencia: String(pickColumn(row, ["Frecuencia", "Días", "Dias", "frecuencia"]) || "").trim(),
    calificacion: normalizeSemanaTecGrade(pickColumn(row, ["Calificación", "Calificacion", "calificacion"])),
    programa: String(pickColumn(row, ["Siglas de programa", "Programa", "programa"]) || "Sin programa").trim(),
    genero: normalizeStudentGender(pickColumn(row, ["Genero", "Género", "Sexo", "genero"])),
    semestre: String(pickColumn(row, ["Semestre acreditado", "Semestre", "semestre"]) || "Sin semestre").trim(),
    semana,
    periodo: period || $("#periodFilter")?.value || "AD26",
    archivo_origen: fileName || "Carga Semana Tec",
    fecha_carga: new Date().toISOString(),
    duplicate: false
  };
}

function semanaTecRowFromCloud(row) {
  return {
    matricula: normalizeMatricula(row.matricula),
    clave_materia: row.clave_materia || "",
    nombre_materia: row.nombre_materia || "",
    crn: row.crn || "",
    numero_grupo: Number(row.numero_grupo || 0),
    profesor: row.profesor || "Sin profesor",
    horario: row.horario || "",
    frecuencia: row.frecuencia || "",
    calificacion: normalizeSemanaTecGrade(row.calificacion),
    programa: row.programa || "Sin programa",
    genero: normalizeStudentGender(row.genero),
    semestre: row.semestre || "Sin semestre",
    semana: Number(row.semana || semanaTecWeekFromGroup(row.numero_grupo)),
    periodo: row.periodo || "Sin periodo",
    archivo_origen: row.archivo_origen || "Supabase",
    fecha_carga: row.fecha_carga || row.updated_at || row.created_at || "",
    duplicate: false
  };
}

function saveSemanaTecLocal() {
  try {
    localStorage.setItem(SEMANA_TEC_STORAGE_KEY, JSON.stringify({ version: 1, rows: semanaTecRows, lastUpload: semanaTecLastUpload }));
  } catch (error) {
    console.warn("No se pudo guardar el respaldo local de Semana Tec", error);
  }
}

function restoreSemanaTecLocal() {
  try {
    const stored = JSON.parse(localStorage.getItem(SEMANA_TEC_STORAGE_KEY) || "{}");
    if (Array.isArray(stored.rows)) semanaTecRows = stored.rows.map(semanaTecRowFromCloud);
    semanaTecLastUpload = stored.lastUpload || null;
  } catch (error) {
    console.warn("No se pudo recuperar Semana Tec local", error);
  }
}

restoreSemanaTecLocal();

function semanaTecDraftSummary(rows, ignoredRows = 0, duplicates = 0) {
  return {
    total: rows.length,
    uniqueStudents: new Set(rows.map((row) => row.matricula)).size,
    groups: new Set(rows.map((row) => row.numero_grupo)).size,
    professors: new Set(rows.map((row) => row.profesor).filter(Boolean)).size,
    week6: rows.filter((row) => row.semana === 6).length,
    week12: rows.filter((row) => row.semana === 12).length,
    grades: rows.filter((row) => row.calificacion !== "").length,
    ignoredRows,
    duplicates
  };
}

function validateSemanaTecRows(sourceRows, fileName = "") {
  const errors = [];
  const warnings = [];
  if (!sourceRows.length) errors.push("El archivo está vacío.");
  const required = [
    ["Matrícula", ["Matriculas", "Matrículas", "Matricula", "Matrícula", "matricula"]],
    ["Número Grupo", ["Numero Grupo", "Número Grupo", "Grupo", "numero_grupo"]],
    ["Profesor", ["Nombre Prof Titular", "Profesor", "Nombre profesor", "profesor"]]
  ];
  required.forEach(([label, aliases]) => {
    if (sourceRows.length && !uploadHasColumn(sourceRows, aliases)) errors.push(`Falta la columna obligatoria: ${label}.`);
  });
  if (errors.length) return { fileName, rows: [], errors, warnings, summary: semanaTecDraftSummary([]) };
  const period = $("#periodFilter")?.value || "AD26";
  const seen = new Set();
  let ignoredRows = 0;
  let duplicates = 0;
  const rows = [];
  sourceRows.forEach((row, index) => {
    const parsed = normalizeSemanaTecRow(row, index, fileName, period);
    if (!parsed) {
      ignoredRows += 1;
      return;
    }
    const key = semanaTecLogicalKey(parsed);
    if (seen.has(key)) {
      duplicates += 1;
      return;
    }
    seen.add(key);
    rows.push(parsed);
  });
  if (!rows.length) errors.push("No encontré alumnos en grupos 100–299. Los grupos 100 corresponden a Semana 6 y los 200 a Semana 12.");
  if (ignoredRows) warnings.push(`${ignoredRows.toLocaleString("es-MX")} filas ajenas a Semana Tec fueron ignoradas.`);
  if (duplicates) warnings.push(`${duplicates.toLocaleString("es-MX")} registros duplicados fueron omitidos.`);
  warnings.push("Nombres y apellidos fueron descartados y no forman parte de la carga.");
  return { fileName, rows, errors, warnings, summary: semanaTecDraftSummary(rows, ignoredRows, duplicates) };
}

async function loadSemanaTecFile(file) {
  if (!file) return;
  try {
    semanaTecLoading = true;
    render();
    const rows = await rowsFromScheduleFile(file);
    semanaTecDraft = validateSemanaTecRows(rows, file.name);
    semanaTecLoading = false;
    render();
    toast(semanaTecDraft.errors.length ? "Revisa los errores del archivo" : `${semanaTecDraft.summary.total.toLocaleString("es-MX")} registros listos para importar`);
  } catch (error) {
    semanaTecLoading = false;
    semanaTecDraft = { fileName: file.name, rows: [], errors: ["No pude leer el archivo. Usa .xlsx o .csv con encabezados."], warnings: [], summary: semanaTecDraftSummary([]) };
    console.error(error);
    render();
  }
}

async function loadSemanaTecCloud() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const rows = [];
  const pageSize = 1000;
  for (let offset = 0; ; offset += pageSize) {
    const { data, error } = await supabaseClient.from("semana_tec_participantes").select("*").order("updated_at", { ascending: false }).range(offset, offset + pageSize - 1);
    if (error) {
      semanaTecCloudAvailable = false;
      console.warn("Semana Tec no está disponible en Supabase", error);
      return;
    }
    const page = data || [];
    rows.push(...page);
    if (page.length < pageSize) break;
  }
  semanaTecCloudAvailable = true;
  if (!rows.length) {
    const hasPendingLocalUpload = semanaTecLastUpload?.source === "local" && semanaTecRows.length > 0;
    if (hasPendingLocalUpload) return;
    semanaTecRows = [];
    semanaTecLastUpload = null;
    saveSemanaTecLocal();
    return;
  }
  const latestUploadId = rows.find((row) => row.upload_id)?.upload_id || "";
  const currentRows = latestUploadId ? rows.filter((row) => row.upload_id === latestUploadId) : rows;
  semanaTecRows = currentRows.map(semanaTecRowFromCloud);
  semanaTecLastUpload = {
    fileName: currentRows[0]?.archivo_origen || "Supabase",
    importedAt: currentRows[0]?.fecha_carga || currentRows[0]?.updated_at || "",
    total: semanaTecRows.length,
    source: "cloud"
  };
  saveSemanaTecLocal();
}

async function loadSemanaTecGroupGradeFiles() {
  if (!supabaseClient || currentUser?.auth !== "supabase") {
    semanaTecGroupGradeFiles = [];
    semanaTecGroupFilesAvailable = true;
    semanaTecGroupFilesLoading = false;
    return;
  }
  semanaTecGroupFilesLoading = true;
  const { data, error } = await supabaseClient
    .from("semana_tec_group_grade_files")
    .select("group_key, periodo, semana, numero_grupo, profesor, storage_path, file_name, mime_type, file_size, updated_at")
    .order("numero_grupo", { ascending: true });
  semanaTecGroupFilesLoading = false;
  if (error) {
    semanaTecGroupGradeFiles = [];
    semanaTecGroupFilesAvailable = false;
    console.warn("No se pudieron cargar los PDF de Semana Tec", error);
    return;
  }
  semanaTecGroupFilesAvailable = true;
  semanaTecGroupGradeFiles = data || [];
}

function semanaTecRowToCloud(row, uploadId) {
  return {
    matricula: row.matricula,
    clave_materia: row.clave_materia || null,
    nombre_materia: row.nombre_materia || null,
    crn: row.crn || null,
    numero_grupo: Number(row.numero_grupo),
    profesor: row.profesor || "Sin profesor",
    horario: row.horario || null,
    frecuencia: row.frecuencia || null,
    calificacion: row.calificacion || null,
    programa: row.programa || null,
    genero: row.genero || "No especificado",
    semestre: row.semestre || null,
    semana: Number(row.semana),
    periodo: row.periodo || "Sin periodo",
    archivo_origen: row.archivo_origen || null,
    fecha_carga: row.fecha_carga || new Date().toISOString(),
    updated_by: currentUser?.id || null,
    upload_id: uploadId
  };
}

async function saveSemanaTecRowsCloud(rows) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("semana-tec")) return false;
  const uploadId = crypto.randomUUID();
  const uploadedAt = new Date().toISOString();
  for (let index = 0; index < rows.length; index += 500) {
    const payload = rows.slice(index, index + 500).map((row) => semanaTecRowToCloud({ ...row, fecha_carga: uploadedAt }, uploadId));
    const { error } = await supabaseClient.from("semana_tec_participantes").upsert(payload, { onConflict: "periodo,matricula,numero_grupo" });
    if (error) {
      semanaTecCloudAvailable = false;
      console.warn("No se pudo guardar Semana Tec", error);
      return false;
    }
  }
  const deleteOldResult = await supabaseClient
    .from("semana_tec_participantes")
    .delete()
    .neq("upload_id", uploadId);
  const deleteLegacyResult = await supabaseClient
    .from("semana_tec_participantes")
    .delete()
    .is("upload_id", null);
  if (deleteOldResult.error || deleteLegacyResult.error) {
    console.warn("La carga nueva de Semana Tec quedó guardada, pero no se pudo retirar la anterior", deleteOldResult.error || deleteLegacyResult.error);
  }
  semanaTecCloudAvailable = true;
  return true;
}

async function importSemanaTecDraft() {
  const draft = semanaTecDraft || (semanaTecLastUpload?.source === "local" && semanaTecRows.length ? {
    fileName: semanaTecLastUpload.fileName || "Última carga local",
    rows: semanaTecRows,
    errors: [],
    warnings: ["Esta carga estaba guardada solo en este navegador y se respaldará en Supabase."],
    summary: semanaTecDraftSummary(semanaTecRows)
  } : null);
  if (!draft || draft.errors.length || !draft.rows.length) return;
  semanaTecSaving = true;
  render();
  const cloudSaved = await saveSemanaTecRowsCloud(draft.rows);
  if (!cloudSaved) {
    semanaTecSaving = false;
    render();
    toast("No se guardó en Supabase. La carga sigue lista para reintentar.");
    return;
  }
  semanaTecRows = [...draft.rows];
  semanaTecLastUpload = { fileName: draft.fileName, importedAt: new Date().toISOString(), total: draft.rows.length, source: "cloud" };
  semanaTecDraft = null;
  semanaTecSaving = false;
  saveSemanaTecLocal();
  addAudit("semana-tec", `${semanaTecLastUpload.total} registros importados desde ${semanaTecLastUpload.fileName}`);
  recordUploadSuccess("semana-tec.alumnos", semanaTecLastUpload.importedAt);
  render();
  await loadSemanaTecCloud();
  toast("Semana Tec guardada permanentemente en Supabase");
}

function downloadSemanaTecTemplate() {
  const sample = [{
    Matriculas: "A01234567",
    "Clave Materia": "WKLI1008S",
    "Nombre Materia": "CC&M",
    CRN: "3117",
    "Numero Grupo": 101,
    "Nombre Prof Titular": "Profesor responsable",
    Horario: "09:00-13:00",
    Frecuencia: "Lunes a viernes",
    "Calificación": "",
    "Siglas de programa": "IIS",
    Genero: "Masculino",
    "Semestre acreditado": "Cuarto Semestre"
  }];
  const workbook = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(workbook, window.XLSX.utils.json_to_sheet(sample), "Semana Tec");
  window.XLSX.writeFile(workbook, "plantilla-semana-tec.xlsx");
  toast("Plantilla de Semana Tec descargada");
}

function semanaTecFilteredRows() {
  const term = normalizeText(semanaTecFilters.search);
  return semanaTecRows.filter((row) => {
    const weekMatch = semanaTecFilters.week === "todas" || String(row.semana) === semanaTecFilters.week;
    const professorMatch = semanaTecFilters.professor === "todos" || row.profesor === semanaTecFilters.professor;
    const groupMatch = semanaTecFilters.group === "todos" || String(row.numero_grupo) === semanaTecFilters.group;
    const text = normalizeText(`${row.matricula} ${row.profesor} ${row.numero_grupo} ${row.programa} ${row.semestre}`);
    return weekMatch && professorMatch && groupMatch && (!term || text.includes(term));
  });
}

function semanaTecCountRows(rows, field) {
  const counts = new Map();
  rows.forEach((row) => {
    const label = row[field] || "Sin dato";
    counts.set(label, (counts.get(label) || 0) + 1);
  });
  return Array.from(counts.entries()).map(([label, value]) => ({ label: String(label), value })).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

function semanaTecSemesterOrder(value) {
  const normalized = normalizeText(value);
  const numeric = Number(normalized.match(/\d+/)?.[0]);
  if (Number.isFinite(numeric) && numeric > 0) return numeric;
  const words = ["primer", "segund", "tercer", "cuart", "quint", "sext", "septim", "octav", "noven", "decim", "undecim", "duodecim"];
  const index = words.findIndex((word) => normalized.includes(word));
  return index >= 0 ? index + 1 : 999;
}

function semanaTecSemesterCounts(rows) {
  return semanaTecCountRows(rows, "semestre").sort((a, b) => {
    const order = semanaTecSemesterOrder(a.label) - semanaTecSemesterOrder(b.label);
    return order || a.label.localeCompare(b.label, "es");
  });
}

function semanaTecGradeOutcome(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return "pending";
  const numeric = Number(raw.replace(",", "."));
  if (Number.isFinite(numeric)) return numeric >= 70 ? "approved" : "failed";
  const normalized = normalizeText(raw);
  if (normalized.includes("acredit") || normalized.includes("aprob")) return "approved";
  return "failed";
}

function semanaTecGroupSummaries(rows) {
  const groups = new Map();
  rows.forEach((row) => {
    const key = `${row.periodo || "Sin periodo"}|${row.numero_grupo}`;
    const current = groups.get(key) || { group: row.numero_grupo, week: row.semana, periodo: row.periodo || "Sin periodo", professor: row.profesor, horario: row.horario || "", frecuencia: row.frecuencia || "", students: new Set(), female: 0, male: 0, grades: [], approved: 0, failed: 0, pending: 0 };
    current.students.add(row.matricula);
    if (row.genero === "Femenino") current.female += 1;
    if (row.genero === "Masculino") current.male += 1;
    const grade = Number(String(row.calificacion ?? "").replace(",", "."));
    if (row.calificacion !== "" && Number.isFinite(grade)) current.grades.push(grade);
    const outcome = semanaTecGradeOutcome(row.calificacion);
    current[outcome] += 1;
    groups.set(key, current);
  });
  return Array.from(groups.values()).map((group) => ({ ...group, total: group.students.size, average: group.grades.length ? group.grades.reduce((sum, value) => sum + value, 0) / group.grades.length : null })).sort((a, b) => a.group - b.group);
}

function semanaTecGroupKey(group) {
  return `${group.periodo || "Sin periodo"}|${Number(group.group || 0)}`;
}

function semanaTecGroupFile(group) {
  const key = semanaTecGroupKey(group);
  return semanaTecGroupGradeFiles.find((row) => row.group_key === key) || null;
}

function semanaTecGroupCards(groups, { gradeActions = false } = {}) {
  const editable = currentUser?.auth === "supabase" && canEditArea("semana-tec") && semanaTecGroupFilesAvailable;
  return `<div class="semana-tec-group-grid ${gradeActions ? "with-grade-actions" : ""}">${groups.map((group) => {
    const file = semanaTecGroupFile(group);
    const uploading = semanaTecGroupFileUploading === semanaTecGroupKey(group);
    const updated = file?.updated_at ? new Date(file.updated_at).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" }) : "";
    return `
      <article class="semana-tec-group-card week-${group.week}">
        <div><span>Semana ${group.week}</span><strong>Grupo ${group.group}</strong></div>
        <p>${escapeHtml(group.professor)}</p>
        ${group.horario || group.frecuencia ? `<small>${escapeHtml([group.frecuencia, group.horario].filter(Boolean).join(" · "))}</small>` : ""}
        <div class="semana-tec-group-stats">
          <b>${group.total} alumnos</b><span>${group.female} mujeres</span><span>${group.male} hombres</span><span>${group.average === null ? "Sin promedio" : `Promedio ${group.average.toFixed(1)}`}</span>
          <span class="approved">${group.approved} aprobados</span><span class="failed">${group.failed} reprobados</span><span class="pending">${group.pending} pendientes</span>
        </div>
        ${gradeActions ? `
          <div class="semana-tec-group-file ${file ? "has-file" : ""}">
            <div><strong>${file ? "PDF guardado" : "Sin PDF de calificaciones"}</strong><small>${file ? `${escapeHtml(file.file_name || "Calificaciones.pdf")} · ${escapeHtml(updated)}` : "El archivo se guarda por grupo en Supabase."}</small></div>
            <div class="semana-tec-group-file-actions">
              <button class="primary-btn" type="button" data-semana-tec-group-select="${escapeHtml(semanaTecGroupKey(group))}" ${editable && !uploading ? "" : "disabled"}><i data-lucide="upload"></i><span>${uploading ? "Guardando..." : file ? "Reemplazar PDF" : "Subir calificaciones"}</span></button><input type="file" accept="application/pdf,.pdf" data-semana-tec-group-upload="${escapeHtml(semanaTecGroupKey(group))}" ${editable && !uploading ? "" : "disabled"} hidden>
              ${file ? `<button class="ghost-btn" type="button" data-semana-tec-group-download="${escapeHtml(semanaTecGroupKey(group))}" title="Descargar PDF"><i data-lucide="download"></i></button>` : ""}
            </div>
          </div>` : ""}
      </article>`;
  }).join("")}</div>`;
}

function semanaTecFilterControls(rows = semanaTecRows) {
  const professors = Array.from(new Set(rows.map((row) => row.profesor).filter(Boolean))).sort((a, b) => a.localeCompare(b));
  const groups = Array.from(new Set(rows.map((row) => Number(row.numero_grupo)).filter(Boolean))).sort((a, b) => a - b);
  return `
    <section class="semana-tec-filters" aria-label="Filtros de Semana Tec">
      <div class="semana-tec-week-switch" role="group" aria-label="Semana Tec">
        <button type="button" data-semana-tec-week="todas" class="${semanaTecFilters.week === "todas" ? "active" : ""}">Todas</button>
        <button type="button" data-semana-tec-week="6" class="${semanaTecFilters.week === "6" ? "active" : ""}">Semana 6</button>
        <button type="button" data-semana-tec-week="12" class="${semanaTecFilters.week === "12" ? "active" : ""}">Semana 12</button>
      </div>
      <select class="semana-tec-filter" data-filter="professor" aria-label="Profesor"><option value="todos">Todos los profesores</option>${professors.map((value) => `<option value="${escapeHtml(value)}" ${semanaTecFilters.professor === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}</select>
      <select class="semana-tec-filter" data-filter="group" aria-label="Grupo"><option value="todos">Todos los grupos</option>${groups.map((value) => `<option value="${value}" ${semanaTecFilters.group === String(value) ? "selected" : ""}>Grupo ${value}</option>`).join("")}</select>
      <input id="semanaTecSearch" type="search" value="${escapeHtml(semanaTecFilters.search)}" placeholder="Buscar matrícula, profesor o programa" />
    </section>`;
}

function renderSemanaTecDashboard() {
  if (semanaTecLoading) return `<div class="permission-strip">Leyendo información de Semana Tec...</div>`;
  const rows = semanaTecFilteredRows();
  const uniqueStudents = new Set(rows.map((row) => row.matricula)).size;
  const groups = semanaTecGroupSummaries(rows);
  const professors = new Set(rows.map((row) => row.profesor)).size;
  const women = rows.filter((row) => row.genero === "Femenino").length;
  const men = rows.filter((row) => row.genero === "Masculino").length;
  const grades = rows.map((row) => Number(row.calificacion)).filter((value, index) => rows[index].calificacion !== "" && Number.isFinite(value));
  const lastUpload = semanaTecLastUpload?.importedAt ? new Date(semanaTecLastUpload.importedAt).toLocaleString("es-MX", { dateStyle: "medium", timeStyle: "short" }) : "Sin carga registrada";
  return `
    <section class="semana-tec-dashboard">
      <header class="semana-tec-heading"><div><p class="eyebrow">Operación académica</p><h3>Semana Tec</h3><span>Grupos 100 = Semana 6 · Grupos 200 = Semana 12</span></div><div><strong>${escapeHtml(lastUpload)}</strong><span>${semanaTecCloudAvailable ? "Fuente compartida disponible" : "Respaldo local"}</span></div></header>
      ${semanaTecFilterControls()}
      ${semanaTecRows.length ? `
        <div class="semana-tec-kpis">
          <article><span>Alumnos únicos</span><strong>${uniqueStudents.toLocaleString("es-MX")}</strong><em>por matrícula</em></article>
          <article><span>Grupos</span><strong>${groups.length.toLocaleString("es-MX")}</strong><em>en el filtro</em></article>
          <article><span>Profesores</span><strong>${professors.toLocaleString("es-MX")}</strong><em>responsables</em></article>
          <article><span>Promedio por grupo</span><strong>${groups.length ? Math.round(uniqueStudents / groups.length) : 0}</strong><em>alumnos</em></article>
          <article><span>Mujeres</span><strong>${women.toLocaleString("es-MX")}</strong><em>${uniqueStudents ? Math.round(women / uniqueStudents * 100) : 0}%</em></article>
          <article><span>Hombres</span><strong>${men.toLocaleString("es-MX")}</strong><em>${uniqueStudents ? Math.round(men / uniqueStudents * 100) : 0}%</em></article>
          <article><span>Calificaciones</span><strong>${grades.length.toLocaleString("es-MX")}</strong><em>capturadas</em></article>
        </div>
        <div class="semana-tec-charts">
          ${renderUploadBars("Alumnos por profesor", semanaTecCountRows(rows, "profesor"))}
          ${renderUploadBars("Top programas", semanaTecCountRows(rows, "programa").slice(0, 12), 12)}
          ${renderUploadBars("Participación por semestre", semanaTecSemesterCounts(rows), 12)}
        </div>
        <section class="semana-tec-groups-panel">
          <div class="class-grade-table-header"><div><p class="eyebrow">Detalle operativo</p><h3>Grupos y profesores</h3></div><span>${groups.length} grupos visibles</span></div>
          ${semanaTecGroupCards(groups)}
        </section>` : `
        <section class="vivencia-empty-state"><strong>Semana Tec está lista para recibir información.</strong><span>Carga el archivo de alumnos para generar automáticamente grupos, profesores y perfil académico.</span><button class="primary-btn" type="button" data-view-jump="semana-tec-upload">Ir a Carga de alumnos</button></section>`}
    </section>`;
}

function renderSemanaTecGrades() {
  const rows = semanaTecFilteredRows();
  const groups = semanaTecGroupSummaries(rows);
  const numeric = rows.map((row) => Number(row.calificacion)).filter((value, index) => rows[index].calificacion !== "" && Number.isFinite(value));
  const captured = rows.filter((row) => row.calificacion !== "").length;
  const approved = numeric.filter((value) => value >= 70).length;
  return `
    <section class="semana-tec-dashboard">
      <header class="semana-tec-heading"><div><p class="eyebrow">Seguimiento académico</p><h3>Calificaciones Semana Tec</h3><span>La matrícula es la única referencia del alumno.</span></div></header>
      ${semanaTecFilterControls()}
      <div class="semana-tec-kpis compact">
        <article><span>Registros</span><strong>${rows.length.toLocaleString("es-MX")}</strong><em>visibles</em></article>
        <article><span>Capturadas</span><strong>${captured.toLocaleString("es-MX")}</strong><em>${rows.length ? Math.round(captured / rows.length * 100) : 0}%</em></article>
        <article><span>Pendientes</span><strong>${Math.max(0, rows.length - captured).toLocaleString("es-MX")}</strong><em>sin calificación</em></article>
        <article><span>Promedio</span><strong>${numeric.length ? (numeric.reduce((sum, value) => sum + value, 0) / numeric.length).toFixed(1) : "—"}</strong><em>solo numéricas</em></article>
        <article><span>Acreditadas</span><strong>${approved.toLocaleString("es-MX")}</strong><em>70 o más</em></article>
      </div>
      <section class="semana-tec-groups-panel semana-tec-grade-groups">
        <div class="class-grade-table-header"><div><p class="eyebrow">Calificaciones por grupo</p><h3>Grupos y profesores</h3></div><span>${semanaTecGroupFilesLoading ? "Cargando PDF..." : `${groups.length} grupos visibles`}</span></div>
        ${!semanaTecGroupFilesAvailable ? `<div class="permission-strip">Activa la tabla y el almacenamiento de PDF de Semana Tec en Supabase.</div>` : ""}
        ${semanaTecGroupCards(groups, { gradeActions: true })}
      </section>
      <section class="upload-preview-panel semana-tec-grade-panel">
        <div class="class-grade-table-header"><div><p class="eyebrow">Captura</p><h3>Calificación por matrícula y grupo</h3></div><span>Se guarda al salir del campo</span></div>
        <div class="class-grade-table-wrap"><table class="class-grade-table"><thead><tr><th>Matrícula</th><th>Semana</th><th>Grupo</th><th>Profesor</th><th>Programa</th><th>Calificación</th></tr></thead><tbody>
          ${rows.slice(0, 500).map((row) => `<tr><td><strong>${escapeHtml(row.matricula)}</strong></td><td>Semana ${row.semana}</td><td>${row.numero_grupo}</td><td>${escapeHtml(row.profesor)}</td><td>${escapeHtml(row.programa)}</td><td><input class="semana-tec-grade-input" data-semana-tec-key="${escapeHtml(semanaTecLogicalKey(row))}" value="${escapeHtml(row.calificacion)}" placeholder="Pendiente" aria-label="Calificación de ${escapeHtml(row.matricula)}" /></td></tr>`).join("") || `<tr><td colspan="6">No hay alumnos cargados.</td></tr>`}
        </tbody></table></div>
      </section>
    </section>`;
}

function renderSemanaTecUploadView() {
  const draft = semanaTecDraft;
  const pendingLocalSync = semanaTecLastUpload?.source === "local" && semanaTecRows.length > 0;
  const summary = draft?.summary || semanaTecDraftSummary([]);
  const validation = !draft ? `<div class="upload-status yellow"><span>Selecciona un archivo para comenzar</span></div>` : draft.errors.length ? `<div class="upload-status red"><span>${draft.errors.length} errores</span></div>` : `<div class="upload-status green"><span>Archivo listo para importar</span><strong>${summary.total.toLocaleString("es-MX")} registros</strong></div>`;
  return `
    <section class="upload-center">
      <div class="upload-center-grid">
        <article class="upload-info-panel">
          <div><p class="eyebrow">Semana Tec</p><h3>Plantilla de alumnos</h3><p>Los grupos 100 se clasifican como Semana 6 y los grupos 200 como Semana 12.</p></div>
          <div class="upload-required-list"><strong>Columnas necesarias</strong><span>Matriculas</span><span>Numero Grupo</span><span>Nombre Prof Titular</span></div>
          <div class="upload-template-preview"><strong>Columnas analíticas aceptadas</strong><table><thead><tr><th>Matrícula</th><th>Grupo</th><th>Profesor</th><th>Calificación</th></tr></thead><tbody><tr><td>A01234567</td><td>101</td><td>Profesor responsable</td><td>95</td></tr></tbody></table></div>
          <ul class="upload-recommendations"><li>Se aceptan archivos .xlsx y .csv.</li><li>Nombre y apellidos se ignoran por completo.</li><li>Horario y frecuencia no se inventan si el archivo no los contiene.</li><li>Una nueva carga actualiza matrícula + grupo + periodo.</li></ul>
          <button class="ghost-btn" id="downloadSemanaTecTemplate" type="button">Descargar plantilla</button>
        </article>
        <article class="upload-drop-panel">
          <label class="upload-drop-zone" id="semanaTecUploadDrop" for="semanaTecFile"><strong>Arrastra tu archivo aquí</strong><span>o selecciona un archivo Excel / CSV</span><em>${escapeHtml(draft?.fileName || semanaTecLastUpload?.fileName || "Sin archivo seleccionado")}</em></label>
          <input id="semanaTecFile" type="file" accept=".xlsx,.csv" hidden />
          ${validation}
          <div class="upload-message-list">${(draft?.errors || []).map((message) => `<p class="red">${escapeHtml(message)}</p>`).join("")}${(draft?.warnings || []).map((message) => `<p class="yellow">${escapeHtml(message)}</p>`).join("")}</div>
          ${draft && !draft.errors.length ? `<div class="semana-tec-load-summary"><span><b>${summary.uniqueStudents}</b> alumnos</span><span><b>${summary.groups}</b> grupos</span><span><b>${summary.professors}</b> profesores</span><span><b>${summary.week6}</b> Semana 6</span><span><b>${summary.week12}</b> Semana 12</span></div>` : ""}
          <button class="primary-btn" id="importSemanaTec" type="button" ${(draft && !draft.errors.length || pendingLocalSync) && !semanaTecSaving ? "" : "disabled"}>${semanaTecSaving ? "Guardando..." : pendingLocalSync && !draft ? "Guardar respaldo en Supabase" : "Importar información"}</button>
        </article>
      </div>
      ${draft?.rows?.length ? `<section class="upload-preview-panel"><div class="class-grade-table-header"><div><p class="eyebrow">Vista previa</p><h3>Información que sí se guardará</h3></div><span>Sin nombres ni apellidos</span></div><div class="class-grade-table-wrap"><table class="class-grade-table"><thead><tr><th>Matrícula</th><th>Semana</th><th>Grupo</th><th>Profesor</th><th>Programa</th><th>Género</th><th>Semestre</th></tr></thead><tbody>${draft.rows.slice(0, 12).map((row) => `<tr><td>${escapeHtml(row.matricula)}</td><td>${row.semana}</td><td>${row.numero_grupo}</td><td>${escapeHtml(row.profesor)}</td><td>${escapeHtml(row.programa)}</td><td>${escapeHtml(row.genero)}</td><td>${escapeHtml(row.semestre)}</td></tr>`).join("")}</tbody></table></div></section>` : ""}
    </section>`;
}

async function saveSemanaTecGrade(key, value) {
  const row = semanaTecRows.find((item) => semanaTecLogicalKey(item) === key);
  if (!row) return;
  const previous = row.calificacion;
  row.calificacion = normalizeSemanaTecGrade(value);
  row.fecha_carga = new Date().toISOString();
  saveSemanaTecLocal();
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("semana-tec")) {
    toast("Calificación guardada en este equipo");
    return;
  }
  const { error } = await supabaseClient
    .from("semana_tec_participantes")
    .update({ calificacion: row.calificacion || null, fecha_carga: row.fecha_carga, updated_by: currentUser.id })
    .eq("periodo", row.periodo)
    .eq("matricula", row.matricula)
    .eq("numero_grupo", row.numero_grupo);
  if (error) {
    row.calificacion = previous;
    saveSemanaTecLocal();
    console.warn("No se pudo guardar la calificación de Semana Tec", error);
    toast("No se pudo guardar la calificación");
    render();
    return;
  }
  toast("Calificación guardada");
}

async function uploadSemanaTecGroupGradeFile(groupKey, file) {
  const group = semanaTecGroupSummaries(semanaTecRows).find((item) => semanaTecGroupKey(item) === groupKey);
  if (!group || !file) return;
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("semana-tec")) {
    toast("Necesitas permiso de Semana Tec para cargar calificaciones");
    return;
  }
  if (file.type !== "application/pdf" || file.size > 15 * 1024 * 1024) {
    toast("Selecciona un PDF de máximo 15 MB");
    return;
  }
  const previous = semanaTecGroupFile(group);
  const safePeriod = String(group.periodo || "sin-periodo").replace(/[^a-zA-Z0-9_-]/g, "-");
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-") || "calificaciones.pdf";
  const storagePath = `${safePeriod}/grupo-${group.group}/${crypto.randomUUID()}-${safeName}`;
  semanaTecGroupFileUploading = groupKey;
  render();
  try {
    const { error: uploadError } = await supabaseClient.storage.from("semana-tec-calificaciones").upload(storagePath, file, { contentType: "application/pdf", upsert: false });
    if (uploadError) throw uploadError;
    const { error: metadataError } = await supabaseClient.from("semana_tec_group_grade_files").upsert({
      group_key: groupKey,
      periodo: group.periodo,
      semana: group.week,
      numero_grupo: group.group,
      profesor: group.professor,
      storage_path: storagePath,
      file_name: file.name,
      mime_type: "application/pdf",
      file_size: file.size,
      updated_by: currentUser.id,
      updated_at: new Date().toISOString()
    }, { onConflict: "group_key" });
    if (metadataError) {
      await supabaseClient.storage.from("semana-tec-calificaciones").remove([storagePath]);
      throw metadataError;
    }
    if (previous?.storage_path && previous.storage_path !== storagePath) {
      const { error: removeError } = await supabaseClient.storage.from("semana-tec-calificaciones").remove([previous.storage_path]);
      if (removeError) console.warn("No se pudo retirar el PDF anterior", removeError);
    }
    await loadSemanaTecGroupGradeFiles();
    addAudit("semana-tec", `PDF de calificaciones guardado para grupo ${group.group}`);
    recordUploadSuccess(`semana-tec.grupo.${groupKey}`);
    toast(`Grupo ${group.group}: PDF guardado`);
  } catch (error) {
    console.error(error);
    toast(`No se pudo guardar el PDF: ${supabaseErrorDetail(error) || error.message}`);
  } finally {
    semanaTecGroupFileUploading = "";
    render();
  }
}

async function downloadSemanaTecGroupGradeFile(groupKey) {
  const file = semanaTecGroupGradeFiles.find((row) => row.group_key === groupKey);
  if (!file || !supabaseClient) return;
  const { data, error } = await supabaseClient.storage.from("semana-tec-calificaciones").download(file.storage_path);
  if (error || !data) {
    console.error(error);
    toast("No se pudo descargar el PDF");
    return;
  }
  const url = URL.createObjectURL(data);
  const link = document.createElement("a");
  link.href = url;
  link.download = file.file_name || `grupo-${file.numero_grupo}-calificaciones.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

const participationUploadConfigs = {
  gamer: {
    title: "Cargar matrículas Gamer",
    subtitle: "Importa una lista simple de matrículas para analizar perfil académico y alcance del módulo Gamer.",
    button: "Cargar matrículas Gamer",
    templateName: "plantilla-gamer.csv",
    required: ["Matrícula"],
    accepted: ["Matrícula"],
    recommendations: ["Usar una sola columna llamada Matrícula.", "No dejar filas vacías.", "Guardar el archivo como .xlsx o .csv."],
    sample: [{ "Matrícula": "A01234567" }, { "Matrícula": "A07654321" }]
  },
  representativos: {
    title: "Cargar información de Representativos",
    subtitle: "Importa alumnos por equipo representativo para analizar equipos, coaches y perfil académico.",
    button: "Cargar información de Representativos",
    templateName: "plantilla-representativos.csv",
    required: ["Matrícula", "Clave de la materia", "Representativo", "Coach"],
    accepted: ["Matrícula", "Clave de la materia", "Materia de repre", "COACH", "Siglas de programa", "Genero", "Semestre acreditado"],
    recommendations: ["No cambiar nombres de columnas.", "No dejar filas vacías.", "Guardar el archivo como .xlsx o .csv.", "Si el archivo trae nombres de alumnos, WellSync los ignora y no los muestra."],
    sample: [
      { "Matrícula": "A01234567", "Clave de la materia": "DEP101", "Materia de repre": "Fútbol Soccer", "COACH": "Coach responsable", "Siglas de programa": "IIS", "Genero": "Masculino", "Semestre acreditado": "Cuarto Semestre" },
      { "Matrícula": "A07654321", "Clave de la materia": "DEP202", "Materia de repre": "Basquetbol", "COACH": "Coach responsable", "Siglas de programa": "LAD", "Genero": "Femenino", "Semestre acreditado": "Segundo Semestre" }
    ]
  }
};

function participationUploadLocalRow(row) {
  return {
    rowNumber: Number(row.rowNumber || 0),
    matricula: normalizeMatricula(row.matricula),
    duplicate: Boolean(row.duplicate),
    empty: Boolean(row.empty),
    found: Boolean(row.found),
    genero: row.genero || "No especificado",
    carrera: row.carrera || "Sin carrera",
    nivel: row.nivel || "Sin nivel",
    programa: row.programa || row.carrera || "Sin programa",
    semestre: row.semestre || "Sin semestre",
    clave_materia: row.clave_materia || "",
    representativo: row.representativo || "",
    coach: row.coach || ""
  };
}

function participationUploadSummary(areaId, rows) {
  const duplicateRows = rows.filter((row) => row.duplicate);
  const notFoundRows = rows.filter((row) => row.matricula && !row.found);
  const emptyRows = rows.filter((row) => row.empty).length;
  return {
    total: rows.length,
    found: rows.filter((row) => row.matricula && row.found && !row.duplicate).length,
    notFound: notFoundRows.length,
    duplicates: duplicateRows.length,
    empty: emptyRows,
    representativos: areaId === "representativos" ? new Set(rows.map((row) => row.representativo).filter(Boolean)).size : 0,
    coaches: areaId === "representativos" ? new Set(rows.map((row) => row.coach).filter(Boolean)).size : 0
  };
}

function participationUploadWarnings(rows) {
  const empty = rows.filter((row) => row.empty).length;
  const duplicates = rows.filter((row) => row.duplicate).length;
  const notFound = rows.filter((row) => row.matricula && !row.found).length;
  return [
    ...(empty ? [`${empty} filas sin matrícula.`] : []),
    ...(duplicates ? [`${duplicates} matrículas duplicadas dentro del archivo.`] : []),
    ...(notFound ? [`${notFound} matrículas no encontradas en Base de datos_alumnos.`] : [])
  ];
}

function saveParticipationUploadsLocal() {
  try {
    const areasSnapshot = {};
    ["gamer", "representativos"].forEach((areaId) => {
      const state = participationUploadState[areaId];
      if (!state?.imported?.rows?.length) return;
      areasSnapshot[areaId] = {
        fileName: state.fileName || state.imported.fileName || "Última carga",
        importedAt: state.imported.importedAt || "",
        rows: state.imported.rows.map(participationUploadLocalRow)
      };
    });
    localStorage.setItem(PARTICIPATION_UPLOAD_STORAGE_KEY, JSON.stringify({ version: 1, areas: areasSnapshot }));
  } catch (error) {
    console.warn("No se pudo guardar el respaldo local de Gamer/Representativos", error);
  }
}

function restoreParticipationUploadsLocal() {
  try {
    const stored = JSON.parse(localStorage.getItem(PARTICIPATION_UPLOAD_STORAGE_KEY) || "{}");
    ["gamer", "representativos"].forEach((areaId) => {
      const snapshot = stored?.areas?.[areaId];
      if (!Array.isArray(snapshot?.rows) || !snapshot.rows.length) return;
      const rows = snapshot.rows.map(participationUploadLocalRow);
      participationUploadState[areaId] = {
        fileName: snapshot.fileName || "Última carga local",
        draft: null,
        imported: {
          areaId,
          fileName: snapshot.fileName || "Última carga local",
          config: participationUploadConfigs[areaId],
          rows,
          preview: rows.slice(0, 8),
          errors: [],
          warnings: participationUploadWarnings(rows),
          summary: participationUploadSummary(areaId, rows),
          importedAt: snapshot.importedAt || ""
        },
        source: "local"
      };
    });
  } catch (error) {
    console.warn("No se pudo recuperar el respaldo local de Gamer/Representativos", error);
  }
}

restoreParticipationUploadsLocal();

function uploadHasColumn(rows, aliases) {
  const headers = Object.keys(rows[0] || {}).map(headerKey);
  return aliases.some((alias) => headers.includes(headerKey(alias)));
}

function uploadedStudentProfile(matricula) {
  const student = findStudentInDatabase(matricula);
  return student ? {
    found: true,
    genero: student.genero || "No especificado",
    carrera: student.carrera || "Sin carrera",
    nivel: student.nivel || "Sin nivel",
    programa: student.programa || student.carrera || "Sin programa"
  } : {
    found: false,
    genero: "No encontrado",
    carrera: "No encontrado",
    nivel: "No encontrado",
    programa: "No encontrado"
  };
}

function normalizeParticipationUploadRow(areaId, row, index, seen) {
  const matricula = normalizeMatricula(pickColumn(row, ["Matrícula", "Matricula", "matricula"]));
  const profile = uploadedStudentProfile(matricula);
  const sourceProgram = String(pickColumn(row, ["Siglas de programa", "Programa", "programa"]) || "").trim();
  const sourceGender = normalizeStudentGender(pickColumn(row, ["Genero", "Género", "Sexo", "genero"]));
  const sourceSemester = String(pickColumn(row, ["Semestre acreditado", "Semestre", "semestre"]) || "").trim();
  const claveMateria = String(pickColumn(row, ["Clave de la materia", "Clave materia", "clave_materia"]) || "").trim();
  const representativo = String(pickColumn(row, ["Representativo", "Materia de repre", "Materia repre", "materia_de_repre"]) || "").trim();
  const coachRaw = String(pickColumn(row, ["Coach", "COACH"]) || "").trim();
  const coach = normalizeText(coachRaw) === "coach" ? "Sin coach asignado" : (coachRaw || "Sin coach asignado");
  const duplicateKey = areaId === "representativos"
    ? [matricula, claveMateria, representativo].map(normalizeText).join("|")
    : matricula;
  const duplicate = Boolean(matricula && seen.has(duplicateKey));
  if (matricula) seen.add(duplicateKey);
  const cleanSourceProgram = sourceProgram && normalizeText(sourceProgram) !== "n a" ? sourceProgram : "";
  const cleanSourceSemester = sourceSemester && normalizeText(sourceSemester) !== "n a" ? sourceSemester : "";
  const base = {
    rowNumber: index + 2,
    matricula,
    duplicate,
    empty: !matricula,
    found: profile.found,
    genero: sourceGender !== "No especificado" ? sourceGender : profile.genero,
    carrera: profile.carrera,
    nivel: profile.nivel,
    programa: cleanSourceProgram || profile.programa,
    semestre: cleanSourceSemester || "Sin semestre"
  };
  if (areaId === "representativos") {
    return {
      ...base,
      clave_materia: claveMateria,
      representativo,
      coach
    };
  }
  return base;
}

function validateParticipationUpload(areaId, rows, fileName = "") {
  const config = participationUploadConfigs[areaId];
  const errors = [];
  const warnings = [];
  if (!rows.length) errors.push("El archivo está vacío.");
  if (areaId === "gamer" && rows.length && !uploadHasColumn(rows, ["Matrícula", "Matricula", "matricula"])) {
    errors.push("Falta la columna obligatoria: Matrícula.");
  }
  if (areaId === "representativos" && rows.length) {
    [
      ["Matrícula", ["Matrícula", "Matricula", "matricula"]],
      ["Clave de la materia", ["Clave de la materia", "Clave materia", "clave_materia"]],
      ["Representativo", ["Representativo", "Materia de repre", "Materia repre", "materia_de_repre"]],
      ["Coach", ["Coach", "COACH"]]
    ].forEach(([label, aliases]) => {
      if (!uploadHasColumn(rows, aliases)) errors.push(`Falta la columna obligatoria: ${label}.`);
    });
  }
  const seen = new Set();
  const parsedRows = errors.length ? [] : rows
    .map((row, index) => normalizeParticipationUploadRow(areaId, row, index, seen))
    .filter((row) => row.matricula);
  const emptyRows = parsedRows.filter((row) => row.empty).length;
  const duplicateRows = parsedRows.filter((row) => row.duplicate);
  const notFoundRows = parsedRows.filter((row) => row.matricula && !row.found);
  if (emptyRows) warnings.push(`${emptyRows} filas sin matrícula.`);
  if (duplicateRows.length) warnings.push(`${duplicateRows.length} matrículas duplicadas dentro del archivo.`);
  if (notFoundRows.length) warnings.push(`${notFoundRows.length} matrículas no encontradas en Base de datos_alumnos.`);
  if (areaId === "representativos") warnings.push("La columna Nombre fue descartada: no se guarda ni se muestra información nominal de alumnos.");
  return {
    areaId,
    fileName,
    config,
    rows: parsedRows,
    preview: parsedRows.slice(0, 8),
    errors,
    warnings,
    summary: {
      total: parsedRows.length,
      found: parsedRows.filter((row) => row.matricula && row.found && !row.duplicate).length,
      notFound: notFoundRows.length,
      duplicates: duplicateRows.length,
      empty: emptyRows,
      representativos: areaId === "representativos" ? new Set(parsedRows.map((row) => row.representativo).filter(Boolean)).size : 0,
      coaches: areaId === "representativos" ? new Set(parsedRows.map((row) => row.coach).filter(Boolean)).size : 0
    }
  };
}

async function loadParticipationUploadFile(areaId, file) {
  if (!file) return;
  try {
    const rows = await rowsFromScheduleFile(file);
    participationUploadState[areaId].fileName = file.name;
    participationUploadState[areaId].draft = validateParticipationUpload(areaId, rows, file.name);
    render();
    const draft = participationUploadState[areaId].draft;
    const canSaveImmediately = areaId === "representativos"
      && currentUser?.auth === "supabase"
      && canEditArea(areaId)
      && draft.rows.length
      && !draft.errors.length;
    if (canSaveImmediately) {
      toast("Archivo validado. Guardando la carga en Supabase...");
      await importParticipationUpload(areaId);
    } else {
      toast("Archivo leído para validación");
    }
  } catch (error) {
    console.error(error);
    participationUploadState[areaId].draft = {
      areaId,
      fileName: file.name,
      rows: [],
      preview: [],
      errors: ["No pude leer el archivo. Usa .xlsx o .csv con encabezados."],
      warnings: [],
      summary: { total: 0, found: 0, notFound: 0, duplicates: 0, empty: 0, representativos: 0, coaches: 0 }
    };
    render();
  }
}

async function importParticipationUpload(areaId) {
  const state = participationUploadState[areaId];
  const draft = state?.draft || (state?.source === "local" ? state.imported : null);
  if (!draft) return;
  if (!supabaseClient || currentUser?.auth !== "supabase") {
    toast("Conecta tu cuenta Supabase para guardar esta carga permanentemente.");
    return;
  }
  if (draft.errors.length) {
    toast("Corrige los errores antes de importar");
    return;
  }
  const savedCloud = await saveParticipationUploadCloud(areaId, draft);
  if (!savedCloud) {
    render();
    toast("No se guardó en Supabase. La carga sigue lista para reintentar.");
    return;
  }
  participationUploadState[areaId].imported = { ...draft, importedAt: new Date().toISOString() };
  participationUploadState[areaId].source = "cloud";
  participationUploadState[areaId].draft = null;
  saveParticipationUploadsLocal();
  await loadParticipationUploadsCloud(areaId);
  addAudit(areaId, `${draft.summary.total} registros guardados en Supabase desde ${draft.fileName}`);
  recordUploadSuccess(`${areaId}.participantes`, participationUploadState[areaId].imported?.importedAt);
  if (areaId === "representativos" && activeArea === areaId) activeView = "dashboard";
  render();
  toast("Información guardada en Supabase");
}

function intramurosCloudRow(row) {
  return {
    id: row.id || "",
    matricula: normalizeMatricula(row.matricula),
    genero: row.genero || "No especificado",
    programa: row.programa || "Sin programa",
    modalidad: row.modalidad || "Sin modalidad",
    escuela: row.escuela || "Sin escuela",
    tipo_actividad: row.tipo_actividad || "Sin tipo",
    torneo: canonicalIntramurosTournament(row.torneo),
    rama: row.rama || "Sin rama",
    equipo: row.equipo || "Sin equipo",
    periodo: row.periodo || "Sin periodo",
    fecha_carga: row.fecha_carga || "",
    archivo_origen: row.archivo_origen || "",
    created_at: row.created_at || "",
    updated_at: row.updated_at || ""
  };
}

function intramurosLogicalKey(row) {
  return [
    normalizeMatricula(row.matricula),
    headerKey(row.torneo || "Sin torneo"),
    headerKey(row.equipo || "Sin equipo"),
    headerKey(row.periodo || "Sin periodo")
  ].join("|");
}

function intramurosRoleKey(row) {
  return [
    headerKey(row.torneo || "Sin torneo"),
    String(row.fecha || "").slice(0, 10),
    headerKey(row.hora || ""),
    headerKey(row.cancha || ""),
    headerKey(row.equipo_local || ""),
    headerKey(row.equipo_visitante || "")
  ].join("|");
}

function canonicalIntramurosTournament(value) {
  const normalized = normalizeText(value).replace(/\s+/g, " ").trim();
  if (!normalized || normalized === "sin torneo") return "Sin torneo";
  const labels = {
    futbol7: "Fútbol 7",
    futbolsoccer: "Fútbol soccer",
    futbolrapidoparticipante: "Fútbol rápido participante",
    futbolrapido: "Fútbol rápido",
    futbolrapidodelegado: "Fútbol rápido delegado",
    tochito: "Tochito",
    basquetbol: "Básquetbol",
    padel: "Pádel",
    voleiboldesala: "Voleibol de sala",
    voleiboldeplaya: "Voleibol de playa",
    tenissingles: "Tenis singles",
    tenisdoblesmixto: "Tenis dobles mixto",
    futtenis: "Fut tenis",
    ajedrez: "Ajedrez",
    selectivocopaborrego: "Selectivo Copa Borrego",
    copaipmayorcup: "Copa IP Mayor CUP"
  };
  const knownLabel = labels[headerKey(normalized)];
  if (knownLabel) return knownLabel;
  const corrections = {
    futbol: "fútbol",
    basquetbol: "básquetbol",
    padel: "pádel",
    rapido: "rápido",
    relampago: "relámpago"
  };
  const minorWords = new Set(["de", "del", "la", "las", "el", "los", "y", "e"]);
  return normalized.split(" ").map((word, index) => {
    const corrected = corrections[word] || word;
    if (index > 0 && minorWords.has(corrected)) return corrected;
    return `${corrected.charAt(0).toUpperCase()}${corrected.slice(1)}`;
  }).join(" ");
}

async function loadIntramurosTablePages(table, columns, orderColumn) {
  const rows = [];
  const pageSize = 1000;
  for (let offset = 0; ; offset += pageSize) {
    const response = await supabaseClient
      .from(table)
      .select(columns)
      .order(orderColumn, { ascending: false, nullsFirst: false })
      .order("id", { ascending: true })
      .range(offset, offset + pageSize - 1);
    if (response.error) return { data: [], error: response.error };
    const page = response.data || [];
    rows.push(...page);
    if (page.length < pageSize) break;
  }
  return { data: rows, error: null };
}

function uniqueIntramurosRows(rows, keyForRow) {
  const seen = new Set();
  return rows.filter((row) => {
    const key = keyForRow(row);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function loadIntramurosParticipants() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const [participantsResult, rolesResult, operationResult] = await Promise.all([
    loadIntramurosTablePages(
      "intramuros_participantes",
      "id, matricula, genero, programa, modalidad, escuela, tipo_actividad, torneo, rama, equipo, periodo, fecha_carga, archivo_origen, created_at, updated_at",
      "fecha_carga"
    ),
    loadIntramurosTablePages(
      "intramuros_roles_juego",
      "id, torneo, semana, fecha, hora, cancha, grupo, rama, equipo_local, equipo_visitante, resultado, observaciones, estatus_partido, periodo, fecha_carga, archivo_origen, created_at, updated_at",
      "fecha"
    ),
    loadIntramurosTablePages(
      "intramuros_operacion_torneos",
      "id, tipo, torneo, periodo, equipos_varoniles, equipos_femeniles, equipos_mixtos, alumnos_varonil, alumnos_femenil, juegos_programados, juegos_realizados, bajas, estatus, created_at, updated_at",
      "updated_at"
    )
  ]);
  if (participantsResult.error) {
    intramurosCloudAvailable = false;
    console.warn("Intramuros participantes no disponible", participantsResult.error);
    return;
  }
  if (rolesResult.error) console.warn("Intramuros roles no disponibles", rolesResult.error);
  if (operationResult.error) {
    intramurosOperationCloudAvailable = false;
    console.warn("Mesa de Omar no disponible", operationResult.error);
  } else {
    intramurosOperationCloudAvailable = true;
    intramurosOperationRows = (operationResult.data || []).map(intramurosOperationCloudRow).filter((row) => row.torneo);
    saveIntramurosOperationRows();
  }
  intramurosCloudAvailable = true;
  intramurosParticipants = uniqueIntramurosRows(
    (participantsResult.data || []).map(intramurosCloudRow).filter((row) => row.matricula),
    intramurosLogicalKey
  );
  intramurosGameRoles = uniqueIntramurosRows(
    (rolesResult.data || []).map(intramurosRoleCloudRow),
    intramurosRoleKey
  );
}

function intramurosRoleCloudRow(row) {
  const normalized = {
    id: row.id || "",
    torneo: canonicalIntramurosTournament(row.torneo),
    semana: row.semana || "",
    fecha: row.fecha || "",
    hora: row.hora || "",
    cancha: row.cancha || "",
    grupo: row.grupo || "",
    rama: row.rama || "",
    equipo_local: row.equipo_local || "",
    equipo_visitante: row.equipo_visitante || "",
    resultado: row.resultado || "",
    observaciones: row.observaciones || "",
    estatus_partido: row.estatus_partido || "Pendiente",
    periodo: row.periodo || "Sin periodo",
    fecha_carga: row.fecha_carga || "",
    archivo_origen: row.archivo_origen || "",
    created_at: row.created_at || "",
    updated_at: row.updated_at || ""
  };
  normalized.tipo_uso = intramurosRoleType(normalized);
  return normalized;
}

const INTRAMUROS_PARTICIPANT_COLUMN_ALIASES = {
  matricula: ["Matrícula", "Matricula"],
  genero: ["Género", "Genero"],
  programa: ["Programa"],
  modalidad: ["Modalidad"],
  escuela: ["Escuela"],
  tipo_actividad: ["Tipo de actividad", "Tipo actividad"],
  torneo: ["Torneo"],
  rama: ["Rama"],
  equipo: ["Equipo"],
  periodo: ["Periodo", "Período"]
};

function intramurosPeriodFromGrid(grid, headerIndex) {
  const title = (grid || [])
    .slice(0, Math.max(0, headerIndex))
    .flat()
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .join(" ");
  const normalized = normalizeText(title);
  const yearMatch = title.match(/\b(?:20)?(\d{2})\b/);
  const year = yearMatch?.[1] || "";
  if (!year) return "";
  if (normalized.includes("feb") && normalized.includes("jun")) return `FJ${year}`;
  if (normalized.includes("ago") && normalized.includes("dic")) return `AD${year}`;
  if ((normalized.includes("jun") && normalized.includes("jul")) || normalized.includes("verano")) return `VER${year}`;
  if (normalized.includes("invierno") || (normalized.includes("ene") && normalized.includes("feb"))) return `IN${year}`;
  return "";
}

function intramurosParticipantRowsFromGrid(grid) {
  const aliases = Object.values(INTRAMUROS_PARTICIPANT_COLUMN_ALIASES).flat().map(headerKey);
  const headerIndex = (grid || []).findIndex((cells) => {
    const keys = (cells || []).map(headerKey);
    const matches = keys.filter((key) => aliases.includes(key)).length;
    return keys.includes(headerKey("Matrícula")) && matches >= 5;
  });
  if (headerIndex < 0) {
    return { rows: [], ignoredColumns: [], errors: ["No se encontró una fila de encabezados con la columna Matrícula."] };
  }

  const headers = (grid[headerIndex] || []).map((value) => String(value || "").trim());
  const headerKeys = headers.map(headerKey);
  const columnIndexes = Object.fromEntries(Object.entries(INTRAMUROS_PARTICIPANT_COLUMN_ALIASES).map(([field, fieldAliases]) => [
    field,
    headerKeys.findIndex((key) => fieldAliases.map(headerKey).includes(key))
  ]));
  const privateHeaders = new Set(["nombre", "nombres", "nombre completo", "apellido", "apellidos", "apellido paterno", "apellido materno"].map(headerKey));
  const ignoredColumns = headers.filter((header) => privateHeaders.has(headerKey(header)));
  const periodFromTitle = intramurosPeriodFromGrid(grid, headerIndex);
  const canonicalLabels = {
    matricula: "Matrícula",
    genero: "Género",
    programa: "Programa",
    modalidad: "Modalidad",
    escuela: "Escuela",
    tipo_actividad: "Tipo de actividad",
    torneo: "Torneo",
    rama: "Rama",
    equipo: "Equipo",
    periodo: "Periodo"
  };
  const rows = (grid || []).slice(headerIndex + 1).map((cells, index) => {
    const record = { __sourceRowNumber: headerIndex + index + 2 };
    Object.entries(columnIndexes).forEach(([field, columnIndex]) => {
      record[canonicalLabels[field]] = columnIndex >= 0 ? cells?.[columnIndex] ?? "" : "";
    });
    if (!record.Periodo && periodFromTitle) record.Periodo = periodFromTitle;
    return record;
  }).filter((row) => Object.keys(canonicalLabels).some((field) => {
    if (field === "periodo") return false;
    const label = canonicalLabels[field];
    return row[label] !== "" && row[label] != null;
  }));
  return { rows, ignoredColumns, errors: [] };
}

async function rowsFromIntramurosParticipantsFile(file) {
  const ext = file.name.split(".").pop().toLowerCase();
  const grids = [];
  if (["xlsx", "xls"].includes(ext) && window.XLSX) {
    const workbook = window.XLSX.read(await file.arrayBuffer(), { type: "array" });
    workbook.SheetNames.forEach((sheetName) => {
      grids.push(window.XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: "" }));
    });
  } else {
    grids.push(parseCsv(await file.text()));
  }
  const parsedSheets = grids.map(intramurosParticipantRowsFromGrid);
  const rows = parsedSheets.flatMap((result) => result.rows);
  return {
    rows,
    ignoredColumns: [...new Set(parsedSheets.flatMap((result) => result.ignoredColumns))],
    errors: rows.length ? [] : [...new Set(parsedSheets.flatMap((result) => result.errors))]
  };
}

function intramurosUploadValue(value, fallback) {
  const clean = String(value ?? "").trim();
  return ["", "#n/a", "n/a", "na", "#na", "null", "undefined"].includes(normalizeText(clean)) ? fallback : clean;
}

function normalizeIntramurosGender(value) {
  const normalized = normalizeText(intramurosUploadValue(value, ""));
  if (normalized.includes("femenino") || normalized === "mujer") return "Femenino";
  if (normalized.includes("masculino") || normalized === "hombre") return "Masculino";
  return "No especificado";
}

function normalizeIntramurosUploadRow(row, index, fileName, seenKeys) {
  const matricula = normalizeMatricula(pickColumn(row, ["Matrícula", "Matricula", "matricula"]));
  const torneo = canonicalIntramurosTournament(intramurosUploadValue(pickColumn(row, ["Torneo", "torneo"]), "Sin torneo"));
  const equipo = intramurosUploadValue(pickColumn(row, ["Equipo", "equipo"]), "Sin equipo");
  const periodo = intramurosUploadValue(pickColumn(row, ["Periodo", "Período", "periodo"]), "Sin periodo").toUpperCase();
  const payload = {
    matricula,
    genero: normalizeIntramurosGender(pickColumn(row, ["Género", "Genero", "genero"])),
    programa: intramurosUploadValue(pickColumn(row, ["Programa", "programa"]), "Sin programa"),
    modalidad: intramurosUploadValue(pickColumn(row, ["Modalidad", "modalidad"]), "Sin modalidad"),
    escuela: intramurosUploadValue(pickColumn(row, ["Escuela", "escuela"]), "Sin escuela"),
    tipo_actividad: intramurosUploadValue(pickColumn(row, ["Tipo de actividad", "Tipo actividad", "tipo_actividad"]), "Sin tipo"),
    torneo,
    rama: intramurosUploadValue(pickColumn(row, ["Rama", "rama"]), "Sin rama"),
    equipo,
    periodo,
    fecha_carga: new Date().toISOString(),
    archivo_origen: fileName || "Registro de participantes",
    __rowNumber: Number(row.__sourceRowNumber || index + 2)
  };
  const key = intramurosLogicalKey(payload);
  const duplicateInFile = seenKeys.has(key);
  seenKeys.add(key);
  const matriculaError = !matricula ? "Falta matrícula" : !/^A\d{7,9}$/.test(matricula) ? "Matrícula inválida" : "";
  const tournamentError = torneo === "Sin torneo" ? "Falta torneo" : "";
  return { ...payload, __key: key, __duplicateInFile: duplicateInFile, __error: matriculaError || tournamentError };
}

function parseIntramurosUploadRows(rows, fileName, source = {}) {
  const seenKeys = new Set();
  const headers = Object.keys(rows[0] || {});
  const normalizedHeaders = headers.map(headerKey);
  const hasMatricula = normalizedHeaders.includes(headerKey("Matrícula")) || normalizedHeaders.includes(headerKey("Matricula"));
  const hasTournament = normalizedHeaders.includes(headerKey("Torneo"));
  const parsed = rows
    .map((row, index) => normalizeIntramurosUploadRow(row, index, fileName, seenKeys))
    .filter((row) => row.matricula || row.torneo !== "Sin torneo" || row.equipo !== "Sin equipo");
  return {
    rows: parsed.filter((row) => !row.__duplicateInFile && !row.__error),
    duplicateRows: parsed.filter((row) => row.__duplicateInFile),
    errorRows: parsed.filter((row) => row.__error),
    errors: [
      ...(source.errors || []),
      ...(!rows.length && !(source.errors || []).length ? ["El archivo está vacío."] : []),
      ...(!hasMatricula ? ["Falta la columna obligatoria: Matrícula."] : []),
      ...(!hasTournament ? ["Falta la columna obligatoria: Torneo."] : [])
    ],
    ignoredColumns: source.ignoredColumns || [],
    processed: parsed.length
  };
}

async function importIntramurosParticipants(file) {
  if (!file) return;
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("intramuros")) {
    toast("Ingresa con Supabase y permisos de Intramuros para cargar participantes");
    return;
  }
  intramurosImporting = true;
  render();
  try {
    const source = await rowsFromIntramurosParticipantsFile(file);
    const parsed = parseIntramurosUploadRows(source.rows, file.name, source);
    if (parsed.errors.length) {
      intramurosUploadSummary = {
        fileName: file.name,
        processed: parsed.processed,
        inserted: 0,
        updated: 0,
        duplicates: parsed.duplicateRows.length,
        errors: parsed.errorRows.length + parsed.errors.length,
        ignoredColumns: parsed.ignoredColumns,
        messages: parsed.errors,
        importedAt: new Date().toISOString()
      };
      toast(parsed.errors[0]);
      return;
    }
    const existingKeys = new Set(intramurosParticipants.map(intramurosLogicalKey));
    const inserted = parsed.rows.filter((row) => !existingKeys.has(row.__key)).length;
    const updated = parsed.rows.length - inserted;
    const payload = parsed.rows.map((row) => ({
      matricula: row.matricula,
      genero: row.genero,
      programa: row.programa,
      modalidad: row.modalidad,
      escuela: row.escuela,
      tipo_actividad: row.tipo_actividad,
      torneo: row.torneo,
      rama: row.rama,
      equipo: row.equipo,
      periodo: row.periodo,
      fecha_carga: row.fecha_carga,
      archivo_origen: row.archivo_origen
    }));
    for (let index = 0; index < payload.length; index += 500) {
      const { error } = await supabaseClient
        .from("intramuros_participantes")
        .upsert(payload.slice(index, index + 500), { onConflict: "matricula,torneo,equipo,periodo" });
      if (error) throw error;
    }
    await loadIntramurosParticipants();
    intramurosUploadSummary = {
      fileName: file.name,
      processed: parsed.processed,
      inserted,
      updated,
      duplicates: parsed.duplicateRows.length,
      errors: parsed.errorRows.length,
      ignoredColumns: parsed.ignoredColumns,
      messages: parsed.errorRows.length ? [`${parsed.errorRows.length} filas se omitieron por matrícula inválida.`] : [],
      importedAt: new Date().toISOString()
    };
    addAudit("intramuros", `${parsed.rows.length} participantes procesados desde ${file.name}`);
    recordUploadSuccess("intramuros.participantes", intramurosUploadSummary.importedAt);
    toast(`${parsed.rows.length.toLocaleString("es-MX")} registros de Intramuros guardados`);
  } catch (error) {
    console.error(error);
    intramurosUploadSummary = {
      fileName: file.name,
      processed: 0,
      inserted: 0,
      updated: 0,
      duplicates: 0,
      errors: 1,
      ignoredColumns: [],
      messages: [supabaseErrorDetail(error) || error.message || "No se pudo cargar el archivo"],
      importedAt: new Date().toISOString()
    };
    toast(`No se pudo cargar Intramuros: ${supabaseErrorDetail(error) || error.message}`);
  } finally {
    intramurosImporting = false;
    render();
  }
}

function intramurosRoleColumnIndex(headers, aliases) {
  const normalized = headers.map(headerKey);
  return aliases.map(headerKey).map((alias) => normalized.indexOf(alias)).find((index) => index >= 0) ?? -1;
}

function intramurosRoleDateValue(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime()) && value.getFullYear() >= 2000) {
    return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, "0")}-${String(value.getDate()).padStart(2, "0")}`;
  }
  if (typeof value === "number" && value > 20000 && window.XLSX?.SSF?.parse_date_code) {
    const parsed = window.XLSX.SSF.parse_date_code(value);
    if (parsed?.y) return `${parsed.y}-${String(parsed.m).padStart(2, "0")}-${String(parsed.d).padStart(2, "0")}`;
  }
  return normalizePlanningCalendarDate(value);
}

function intramurosRoleTimeValue(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return `${String(value.getHours()).padStart(2, "0")}:${String(value.getMinutes()).padStart(2, "0")}`;
  }
  if (typeof value === "number" && value >= 0 && value < 1) {
    const minutes = Math.round(value * 24 * 60) % (24 * 60);
    return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
  }
  const match = String(value ?? "").trim().match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*(a\.?\s*m\.?|p\.?\s*m\.?)?$/i);
  if (!match) return "";
  let hour = Number(match[1]);
  const minute = Number(match[2]);
  const suffix = normalizeText(match[3] || "").replace(/\s/g, "");
  if (minute > 59 || hour > 23) return "";
  if (suffix.startsWith("p") && hour < 12) hour += 12;
  if (suffix.startsWith("a") && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function intramurosPeriodFromRoleDate(dateValue) {
  const match = String(dateValue || "").match(/^(\d{4})-(\d{2})-/);
  if (!match) return "Sin periodo";
  const year = match[1].slice(-2);
  const month = Number(match[2]);
  if (month >= 8) return `AD${year}`;
  if (month >= 2 && month <= 6) return `FJ${year}`;
  if (month === 7) return `VER${year}`;
  return `IN${year}`;
}

function intramurosRoleTournamentFromBlock(title, group, court) {
  const block = normalizeText(title);
  const detail = normalizeText(`${group || ""} ${court || ""}`);
  if (block.includes("tochito")) return "Tochito";
  if (block.includes("voleibol") && block.includes("basquet")) {
    if (/(^|\s)(bb|basquet|basket)(\s|$)/.test(detail)) return "Básquetbol";
    if (/(^|\s)(vb|voleibol|volei)(\s|$)/.test(detail)) return "Voleibol de sala";
    return "Voleibol de sala / Básquetbol";
  }
  if (block.includes("futbol rapido")) return "Fútbol rápido";
  if (block.includes("futbol")) return detail.includes("fut 7") ? "Fútbol 7" : "Fútbol";
  if (block.includes("padel")) return "Pádel";
  if (block.includes("tenis")) return "Tenis singles";
  return String(title || "Sin torneo").trim() || "Sin torneo";
}

function intramurosRoleSlotKey(row) {
  return [
    headerKey(row.periodo || "Sin periodo"),
    headerKey(row.torneo || "Sin torneo"),
    String(row.fecha || "").slice(0, 10),
    headerKey(row.hora || ""),
    headerKey(row.cancha || "")
  ].join("|");
}

function intramurosRolePhysicalKey(row) {
  return [String(row.fecha || "").slice(0, 10), headerKey(row.hora || ""), headerKey(row.cancha || "")].join("|");
}

function intramurosRoleIsGame(row) {
  return Boolean(String(row.equipo_local || "").trim() && String(row.equipo_visitante || "").trim());
}

function intramurosRoleType(row) {
  if (row.tipo_uso) return String(row.tipo_uso).trim();
  const match = String(row.observaciones || "").match(/tipo\s+de\s+uso\s*:\s*([^|;]+)/i);
  return match?.[1]?.trim() || (intramurosRoleIsGame(row) ? "Intramuros" : "Sin tipo");
}

function intramurosTemplateRoleRowsFromGrid(grid, sheetName, fileName) {
  const blockStarts = new Set();
  (grid || []).forEach((cells) => {
    (cells || []).forEach((value, columnIndex) => {
      if (headerKey(value) !== headerKey("SEMANA")) return;
      const hasTemplateShape = headerKey(cells[columnIndex + 1]) === headerKey("FECHA")
        && headerKey(cells[columnIndex + 3]) === headerKey("HORA")
        && headerKey(cells[columnIndex + 4]) === headerKey("CANCHA")
        && headerKey(cells[columnIndex + 7]) === headerKey("EQUIPOS");
      if (hasTemplateShape) blockStarts.add(columnIndex);
    });
  });
  if (blockStarts.size < 2) return { detected: false, rows: [], duplicates: [], missingFields: [] };

  const privateRowsIgnored = (grid || []).filter((cells) => /^A\d{7,9}$/.test(normalizeMatricula(cells?.[3]))).length;
  const scanned = [];
  [...blockStarts].sort((a, b) => a - b).forEach((start) => {
    const title = (grid || []).slice(0, 6)
      .map((cells) => String(cells?.[start] ?? "").trim())
      .find((value) => value && !normalizeText(value).includes("programacion general") && !/^(feb|ago|ene|jun|ad|fj|ver|in)/i.test(value)) || `Bloque ${start + 1}`;
    let active = false;
    let currentWeek = "";
    let currentDay = "";
    let currentDate = "";
    (grid || []).forEach((cells, rowIndex) => {
      const first = cells?.[start];
      if (headerKey(first) === headerKey("SEMANA")) {
        active = true;
        currentWeek = "";
        currentDay = "";
        currentDate = "";
        return;
      }
      if (!active) return;
      if (first !== "" && first != null) currentWeek = String(first).replace(/^#/, "").trim();
      const dayValue = String(cells?.[start + 1] ?? "").trim();
      if (dayValue) currentDay = dayValue;
      const dateValue = intramurosRoleDateValue(cells?.[start + 2]);
      if (dateValue) currentDate = dateValue;
      const hour = intramurosRoleTimeValue(cells?.[start + 3]);
      const court = String(cells?.[start + 4] ?? "").trim();
      if (!currentDate || !hour || !court) return;

      const group = String(cells?.[start + 5] ?? "").trim();
      const branch = String(cells?.[start + 6] ?? "").trim();
      const local = String(cells?.[start + 7] ?? "").trim();
      const localScore = String(cells?.[start + 8] ?? "").trim();
      const visitorScore = String(cells?.[start + 10] ?? "").trim();
      const visitor = String(cells?.[start + 11] ?? "").trim();
      const usageType = String(cells?.[start + 13] ?? "").trim() || "Sin tipo";
      const tournament = intramurosRoleTournamentFromBlock(title, group, court);
      const hasResult = Boolean(localScore || visitorScore);
      const isGame = Boolean(local && visitor);
      const isReservation = Boolean(!isGame && (local || visitor));
      const result = hasResult
        ? (localScore && visitorScore ? `${localScore} - ${visitorScore}` : localScore || visitorScore)
        : "";
      const status = hasResult
        ? "Con resultado"
        : isGame ? "Programado"
          : isReservation && normalizeText(usageType).includes("intramuros") ? "Pendiente de rival"
            : isReservation ? "Reservado" : "Disponible";
      const role = {
        torneo: tournament,
        semana: currentWeek,
        fecha: currentDate,
        hora: hour,
        cancha: court,
        grupo: group,
        rama: branch,
        equipo_local: local,
        equipo_visitante: visitor,
        resultado: result,
        observaciones: `Tipo de uso: ${usageType}`,
        estatus_partido: status,
        periodo: intramurosPeriodFromRoleDate(currentDate),
        fecha_carga: new Date().toISOString(),
        archivo_origen: fileName,
        tipo_uso: usageType,
        __sheetName: sheetName,
        __sourceBlock: start,
        __rowNumber: rowIndex + 1,
        __day: currentDay,
        __isGame: isGame,
        __isReservation: isReservation
      };
      role.__slotKey = intramurosRoleSlotKey(role);
      role.__physicalKey = intramurosRolePhysicalKey(role);
      scanned.push(role);
    });
  });

  const bySlot = new Map();
  const duplicates = [];
  scanned.forEach((row) => {
    const existing = bySlot.get(row.__slotKey);
    if (!existing) {
      bySlot.set(row.__slotKey, row);
      return;
    }
    duplicates.push(row);
    const richness = (candidate) => [candidate.equipo_local, candidate.equipo_visitante, candidate.resultado, candidate.grupo, candidate.rama].filter(Boolean).length;
    if (richness(row) > richness(existing)) bySlot.set(row.__slotKey, row);
  });
  const uniqueSlots = [...bySlot.values()];
  const actionable = uniqueSlots.filter((row) => row.__isGame || row.__isReservation);
  const physicalGroups = new Map();
  actionable.forEach((row) => {
    if (!physicalGroups.has(row.__physicalKey)) physicalGroups.set(row.__physicalKey, []);
    physicalGroups.get(row.__physicalKey).push(row);
  });
  const conflicts = [...physicalGroups.values()].filter((rows) => new Set(rows.map((row) => headerKey(row.torneo))).size > 1);
  const gameRows = actionable.filter((row) => row.__isGame);
  const missingFields = new Set();
  gameRows.forEach((row) => {
    ["torneo", "fecha", "hora", "cancha", "equipo_local", "equipo_visitante"].forEach((field) => {
      if (!row[field]) missingFields.add(field);
    });
  });
  return {
    detected: true,
    rows: actionable,
    duplicates,
    missingFields: [...missingFields],
    totalSlots: scanned.length,
    uniqueSlots: uniqueSlots.length,
    availableSlots: uniqueSlots.filter((row) => !row.__isGame && !row.__isReservation).length,
    games: gameRows.length,
    reservations: actionable.filter((row) => row.__isReservation).length,
    conflicts: conflicts.length,
    privateRowsIgnored
  };
}

function intramurosGridRowsFromSheet(grid, sheetName, fileName) {
  const roleRows = [];
  const missingFields = new Set();
  let currentTournament = sheetName && !/hoja|sheet/i.test(sheetName) ? sheetName : "";
  let currentHeaders = [];
  let currentColumns = null;
  const aliases = {
    torneo: ["Torneo", "Competencia", "Actividad"],
    semana: ["Semana", "Jornada"],
    fecha: ["Fecha", "Dia", "Día"],
    hora: ["Hora", "Horario"],
    cancha: ["Cancha", "Sede", "Instalacion", "Instalación"],
    grupo: ["Grupo"],
    rama: ["Rama", "Categoria", "Categoría"],
    equipo_local: ["Equipo local", "Local", "Equipo 1", "Localía"],
    equipo_visitante: ["Equipo visitante", "Visitante", "Equipo 2", "Rival"],
    resultado: ["Resultado", "Marcador", "Score"],
    observaciones: ["Observaciones", "Comentario", "Notas"],
    estatus_partido: ["Estatus", "Estado", "Status"],
    periodo: ["Periodo", "Período"]
  };
  grid.forEach((cells, index) => {
    const values = cells.map((value) => String(value ?? "").trim());
    if (/^A\d{7,9}$/.test(normalizeMatricula(values[3]))) return;
    const nonEmpty = values.filter(Boolean);
    if (!nonEmpty.length) return;
    const headerHits = values.map(headerKey).filter((value) => Object.values(aliases).flat().map(headerKey).includes(value)).length;
    if (headerHits >= 2) {
      currentHeaders = values;
      currentColumns = Object.fromEntries(Object.entries(aliases).map(([field, fieldAliases]) => [field, intramurosRoleColumnIndex(currentHeaders, fieldAliases)]));
      return;
    }
    if (nonEmpty.length === 1 && !/\d{1,2}[:/.-]\d{1,2}/.test(nonEmpty[0]) && index < 20) {
      currentTournament = nonEmpty[0];
      return;
    }
    if (!currentColumns) return;
    const pick = (field) => currentColumns[field] >= 0 ? values[currentColumns[field]] : "";
    const row = {
      torneo: pick("torneo") || currentTournament || "",
      semana: pick("semana"),
      fecha: pick("fecha"),
      hora: pick("hora"),
      cancha: pick("cancha"),
      grupo: pick("grupo"),
      rama: pick("rama"),
      equipo_local: pick("equipo_local"),
      equipo_visitante: pick("equipo_visitante"),
      resultado: pick("resultado"),
      observaciones: pick("observaciones"),
      estatus_partido: pick("estatus_partido") || (pick("resultado") ? "Con resultado" : "Pendiente"),
      periodo: pick("periodo") || (intramurosFilters.period !== "todos" ? intramurosFilters.period : "Sin periodo"),
      fecha_carga: new Date().toISOString(),
      archivo_origen: fileName,
      __sheetName: sheetName,
      __rowNumber: index + 1
    };
    ["torneo", "fecha", "hora", "cancha", "equipo_local", "equipo_visitante"].forEach((field) => {
      if (!row[field]) missingFields.add(field);
    });
    if (row.torneo || row.fecha || row.hora || row.cancha || row.equipo_local || row.equipo_visitante) roleRows.push(row);
  });
  return { rows: roleRows, missingFields: Array.from(missingFields) };
}

async function parseIntramurosRolesFile(file) {
  const ext = file.name.split(".").pop().toLowerCase();
  const allRows = [];
  const templateSummaries = [];
  const missingFields = new Set();
  if (["xlsx", "xls"].includes(ext) && window.XLSX) {
    const workbook = window.XLSX.read(await file.arrayBuffer(), { type: "array", cellDates: true });
    workbook.SheetNames.forEach((sheetName) => {
      const grid = window.XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: "", raw: true });
      const templateResult = intramurosTemplateRoleRowsFromGrid(grid, sheetName, file.name);
      const result = templateResult.detected ? templateResult : intramurosGridRowsFromSheet(grid, sheetName, file.name);
      if (templateResult.detected) templateSummaries.push(templateResult);
      result.rows.forEach((row) => allRows.push(row));
      result.missingFields.forEach((field) => missingFields.add(field));
    });
  } else {
    const grid = parseCsv(await file.text());
    const result = intramurosGridRowsFromSheet(grid, "CSV", file.name);
    result.rows.forEach((row) => allRows.push(row));
    result.missingFields.forEach((field) => missingFields.add(field));
  }
  const seen = new Set();
  const duplicates = [];
  const validRows = [];
  allRows.forEach((row) => {
    row.torneo = canonicalIntramurosTournament(row.torneo);
    const key = row.__slotKey || intramurosRoleSlotKey(row);
    if (seen.has(key)) {
      duplicates.push(row);
    } else {
      seen.add(key);
      validRows.push(row);
    }
  });
  const templateTotals = templateSummaries.reduce((acc, summary) => ({
    totalSlots: acc.totalSlots + Number(summary.totalSlots || 0),
    uniqueSlots: acc.uniqueSlots + Number(summary.uniqueSlots || 0),
    availableSlots: acc.availableSlots + Number(summary.availableSlots || 0),
    games: acc.games + Number(summary.games || 0),
    reservations: acc.reservations + Number(summary.reservations || 0),
    conflicts: acc.conflicts + Number(summary.conflicts || 0),
    privateRowsIgnored: acc.privateRowsIgnored + Number(summary.privateRowsIgnored || 0),
    templateDuplicates: acc.templateDuplicates + Number(summary.duplicates?.length || 0)
  }), { totalSlots: 0, uniqueSlots: 0, availableSlots: 0, games: 0, reservations: 0, conflicts: 0, privateRowsIgnored: 0, templateDuplicates: 0 });
  return {
    rows: validRows,
    duplicates: [...duplicates, ...templateSummaries.flatMap((summary) => summary.duplicates || [])],
    missingFields: Array.from(missingFields),
    processed: templateTotals.totalSlots || allRows.length,
    ...templateTotals,
    templateDetected: templateSummaries.length > 0
  };
}

async function importIntramurosRoles(file) {
  if (!file) return;
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("intramuros")) {
    toast("Ingresa con Supabase y permisos de Intramuros para cargar roles");
    return;
  }
  intramurosRolesImporting = true;
  render();
  try {
    const parsed = await parseIntramurosRolesFile(file);
    if (!parsed.rows.length) {
      intramurosRolesUploadSummary = {
        fileName: file.name,
        processed: parsed.processed,
        inserted: 0,
        updated: 0,
        duplicates: parsed.duplicates.length,
        errors: 1,
        missingFields: parsed.missingFields,
        totalSlots: parsed.totalSlots || 0,
        availableSlots: parsed.availableSlots || 0,
        games: parsed.games || 0,
        reservations: parsed.reservations || 0,
        conflicts: parsed.conflicts || 0,
        privateRowsIgnored: parsed.privateRowsIgnored || 0,
        importedAt: new Date().toISOString(),
        messages: [parsed.templateDetected
          ? "Se reconoció el calendario, pero todavía no contiene juegos con equipos ni reservas identificables."
          : "No se detectaron juegos con encabezados confiables."]
      };
      toast(parsed.templateDetected ? "Calendario reconocido sin juegos asignados" : "No se detectaron juegos en el archivo");
      return;
    }
    const existingBySlot = new Map(intramurosGameRoles.map((row) => [intramurosRoleSlotKey(row), row]));
    const payloadFor = (row) => ({
      torneo: canonicalIntramurosTournament(row.torneo),
      semana: row.semana || null,
      fecha: row.fecha || null,
      hora: row.hora || null,
      cancha: row.cancha || null,
      grupo: row.grupo || null,
      rama: row.rama || null,
      equipo_local: row.equipo_local || null,
      equipo_visitante: row.equipo_visitante || null,
      resultado: row.resultado || null,
      observaciones: row.observaciones || null,
      estatus_partido: row.estatus_partido || "Pendiente",
      periodo: row.periodo || "Sin periodo",
      fecha_carga: row.fecha_carga,
      archivo_origen: row.archivo_origen
    });
    const updates = [];
    const inserts = [];
    parsed.rows.forEach((row) => {
      const existing = existingBySlot.get(intramurosRoleSlotKey(row));
      if (existing?.id) updates.push({ id: existing.id, payload: payloadFor(row) });
      else inserts.push(payloadFor(row));
    });
    for (let index = 0; index < updates.length; index += 20) {
      const results = await Promise.all(updates.slice(index, index + 20).map(({ id, payload }) => (
        supabaseClient.from("intramuros_roles_juego").update(payload).eq("id", id)
      )));
      const failed = results.find((result) => result.error);
      if (failed?.error) throw failed.error;
    }
    for (let index = 0; index < inserts.length; index += 500) {
      const { error } = await supabaseClient
        .from("intramuros_roles_juego")
        .upsert(inserts.slice(index, index + 500), { onConflict: "torneo,fecha,hora,cancha,equipo_local,equipo_visitante" });
      if (error) throw error;
    }
    await loadIntramurosParticipants();
    intramurosRolesUploadSummary = {
      fileName: file.name,
      processed: parsed.processed,
      inserted: inserts.length,
      updated: updates.length,
      duplicates: parsed.duplicates.length,
      errors: 0,
      missingFields: parsed.missingFields,
      totalSlots: parsed.totalSlots || 0,
      availableSlots: parsed.availableSlots || 0,
      games: parsed.games || 0,
      reservations: parsed.reservations || 0,
      conflicts: parsed.conflicts || 0,
      privateRowsIgnored: parsed.privateRowsIgnored || 0,
      importedAt: new Date().toISOString(),
      messages: [
        parsed.conflicts ? `${parsed.conflicts} horarios requieren revisión por posible cruce de cancha.` : "",
        parsed.privateRowsIgnored ? "Se ignoró completamente la sección errónea de datos de alumnos." : ""
      ].filter(Boolean)
    };
    addAudit("intramuros", `${parsed.rows.length} juegos cargados desde ${file.name}`);
    recordUploadSuccess("intramuros.roles", intramurosRolesUploadSummary.importedAt);
    toast(`${parsed.rows.length.toLocaleString("es-MX")} roles de juego guardados`);
  } catch (error) {
    console.error(error);
    intramurosRolesUploadSummary = {
      fileName: file.name,
      processed: 0,
      inserted: 0,
      updated: 0,
      duplicates: 0,
      errors: 1,
      missingFields: [],
      importedAt: new Date().toISOString(),
      messages: [supabaseErrorDetail(error) || error.message || "No se pudo cargar roles"]
    };
    toast(`No se pudo cargar Roles: ${supabaseErrorDetail(error) || error.message}`);
  } finally {
    intramurosRolesImporting = false;
    render();
  }
}

function downloadParticipationTemplate(areaId) {
  const config = participationUploadConfigs[areaId];
  const headers = Object.keys(config.sample[0] || {});
  const csv = [headers.join(","), ...config.sample.map((row) => headers.map((header) => csvEscape(row[header] || "")).join(","))].join("\n");
  downloadBlob(csv, config.templateName);
}

function downloadIntramurosTemplate(type) {
  const templates = {
    participants: {
      filename: "plantilla-registro-participantes-intramuros.csv",
      label: "de participantes de Intramuros",
      rows: [{
        "Matrícula": "A01234567",
        "Género": "Femenino",
        "Programa": "ITC",
        "Modalidad": "Profesional",
        "Escuela": "Ingeniería",
        "Tipo de actividad": "Intramuros",
        "Torneo": "Fútbol 7",
        "Rama": "Femenil",
        "Equipo": "Equipo Azul",
        "Periodo": "AD26"
      }]
    },
    roles: {
      filename: "plantilla-roles-juego-intramuros.csv",
      label: "de roles de juego de Intramuros",
      rows: [{
        "Torneo": "Fútbol 7",
        "Semana": "1",
        "Fecha": "2026-08-17",
        "Hora": "18:00",
        "Cancha": "Cancha 1",
        "Grupo": "A",
        "Rama": "Varonil",
        "Equipo local": "Equipo Azul",
        "Equipo visitante": "Equipo Blanco",
        "Resultado": "",
        "Observaciones": "",
        "Estatus": "Programado",
        "Periodo": "AD26"
      }]
    }
  };
  const template = templates[type];
  if (!template) return;
  const headers = Object.keys(template.rows[0]);
  const csv = [
    headers.map(csvEscape).join(","),
    ...template.rows.map((row) => headers.map((header) => csvEscape(row[header])).join(","))
  ].join("\n");
  downloadBlob(`\uFEFF${csv}`, template.filename);
  toast(`Plantilla ${template.label} descargada`);
}

function participationUploadRowToCloud(areaId, row, fileName = "", uploadId = "") {
  const matricula = normalizeMatricula(row.matricula);
  const importKey = areaId === "representativos"
    ? [matricula, row.clave_materia || "", row.representativo || "", row.coach || ""].map((value) => normalizeText(value)).join("|")
    : normalizeText(matricula);
  return {
    area_key: areaId,
    import_key: importKey,
    matricula,
    found_in_student_base: Boolean(row.found),
    duplicate_in_file: Boolean(row.duplicate),
    clave_materia: areaId === "representativos" ? (row.clave_materia || null) : null,
    representativo: areaId === "representativos" ? (row.representativo || null) : null,
    coach: areaId === "representativos" ? (row.coach || null) : null,
    genero: row.genero || null,
    carrera: row.carrera || null,
    nivel: row.nivel || null,
    programa: row.programa || null,
    semestre: row.semestre || null,
    source_name: fileName || participationUploadConfigs[areaId]?.title || areaId,
    source_row_number: row.rowNumber || null,
    created_by: currentUser?.auth === "supabase" ? currentUser.id : null,
    updated_at: new Date().toISOString(),
    upload_id: uploadId
  };
}

function participationUploadRowFromCloud(row) {
  return {
    rowNumber: row.source_row_number || 0,
    matricula: normalizeMatricula(row.matricula),
    duplicate: Boolean(row.duplicate_in_file),
    empty: !row.matricula,
    found: Boolean(row.found_in_student_base),
    genero: row.genero || "No especificado",
    carrera: row.carrera || "Sin carrera",
    nivel: row.nivel || "Sin nivel",
    programa: row.programa || row.carrera || "Sin programa",
    semestre: row.semestre || "Sin semestre",
    clave_materia: row.clave_materia || "",
    representativo: row.representativo || "",
    coach: row.coach || ""
  };
}

function buildParticipationImportResult(areaId, rows, fileName = "Supabase") {
  const config = participationUploadConfigs[areaId];
  const parsedRows = rows.map(participationUploadRowFromCloud);
  const duplicateRows = parsedRows.filter((row) => row.duplicate);
  const notFoundRows = parsedRows.filter((row) => row.matricula && !row.found);
  const emptyRows = parsedRows.filter((row) => row.empty).length;
  return {
    areaId,
    fileName,
    config,
    rows: parsedRows,
    preview: parsedRows.slice(0, 8),
    errors: [],
    warnings: [
      ...(emptyRows ? [`${emptyRows} filas sin matrícula.`] : []),
      ...(duplicateRows.length ? [`${duplicateRows.length} matrículas duplicadas dentro del archivo.`] : []),
      ...(notFoundRows.length ? [`${notFoundRows.length} matrículas no encontradas en Base de datos_alumnos.`] : [])
    ],
    summary: {
      total: parsedRows.length,
      found: parsedRows.filter((row) => row.matricula && row.found && !row.duplicate).length,
      notFound: notFoundRows.length,
      duplicates: duplicateRows.length,
      empty: emptyRows,
      representativos: areaId === "representativos" ? new Set(parsedRows.map((row) => row.representativo).filter(Boolean)).size : 0,
      coaches: areaId === "representativos" ? new Set(parsedRows.map((row) => row.coach).filter(Boolean)).size : 0
    }
  };
}

async function loadParticipationUploadAreaCloud(areaId) {
  const rows = [];
  const pageSize = 1000;
  for (let offset = 0; ; offset += pageSize) {
    const { data, error } = await supabaseClient
      .from("participation_upload_rows")
      .select("*")
      .eq("area_key", areaId)
      .order("updated_at", { ascending: false })
      .range(offset, offset + pageSize - 1);
    if (error) return { areaId, rows: [], error };
    const page = data || [];
    rows.push(...page);
    if (page.length < pageSize) break;
  }
  return { areaId, rows, error: null };
}

async function loadParticipationUploadsCloud(targetAreaId = "") {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const areaIds = targetAreaId ? [targetAreaId] : ["gamer", "representativos"];
  const results = await Promise.all(areaIds.map(loadParticipationUploadAreaCloud));
  participationUploadCloudAvailable = results.every((result) => !result.error);
  results.forEach(({ areaId, rows, error }) => {
    if (error) {
      console.warn(`Carga de ${areaId} no disponible en Supabase`, error);
      return;
    }
    if (!rows.length) {
      const pendingLocal = participationUploadState[areaId]?.source === "local" && participationUploadState[areaId]?.imported?.rows?.length;
      if (pendingLocal) return;
      participationUploadState[areaId] = { fileName: "", draft: null, imported: null, source: "cloud" };
      return;
    }
    const latestUploadId = rows.find((row) => row.upload_id)?.upload_id || "";
    const currentRows = latestUploadId ? rows.filter((row) => row.upload_id === latestUploadId) : rows;
    const latestSource = currentRows[0]?.source_name || "Supabase";
    const imported = buildParticipationImportResult(areaId, currentRows, latestSource);
    imported.importedAt = currentRows[0]?.updated_at || currentRows[0]?.created_at || "";
    participationUploadState[areaId] = {
      ...participationUploadState[areaId],
      fileName: latestSource,
      imported,
      source: "cloud"
    };
  });
  saveParticipationUploadsLocal();
}

async function saveParticipationUploadCloud(areaId, draft) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea(areaId)) return false;
  const uploadId = crypto.randomUUID();
  const payload = draft.rows
    .filter((row) => row.matricula && !row.duplicate)
    .map((row) => participationUploadRowToCloud(areaId, row, draft.fileName, uploadId));
  for (let index = 0; index < payload.length; index += 500) {
    const chunk = payload.slice(index, index + 500);
    const { error } = await supabaseClient
      .from("participation_upload_rows")
      .upsert(chunk, { onConflict: "area_key,import_key" });
    if (error) {
      participationUploadCloudAvailable = false;
      toast(`La carga quedó local; no pude guardar en Supabase: ${supabaseErrorDetail(error) || error.message}`);
      return false;
    }
  }
  const deleteOldResult = await supabaseClient
    .from("participation_upload_rows")
    .delete()
    .eq("area_key", areaId)
    .neq("upload_id", uploadId);
  const deleteLegacyResult = await supabaseClient
    .from("participation_upload_rows")
    .delete()
    .eq("area_key", areaId)
    .is("upload_id", null);
  if (deleteOldResult.error || deleteLegacyResult.error) {
    console.warn(`La carga nueva de ${areaId} quedó guardada, pero no se pudo retirar la anterior`, deleteOldResult.error || deleteLegacyResult.error);
  }
  participationUploadCloudAvailable = true;
  return true;
}

function uploadGroupCounts(rows, field, options = {}) {
  const source = options.foundOnly ? rows.filter((row) => row.found && !row.duplicate) : rows.filter((row) => !row.duplicate);
  const counts = new Map();
  source.forEach((row) => {
    const value = row[field] || "Sin dato";
    counts.set(value, (counts.get(value) || 0) + 1);
  });
  return Array.from(counts.entries()).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

function participationAcademicRows(rows) {
  const studentsByMatricula = new Map(
    cloudStudentDatabase.map((student) => [normalizeMatricula(student.matricula), student])
  );
  const baseReady = studentDatabaseLoaded && studentsByMatricula.size > 0;
  return rows.map((row) => {
    const matricula = normalizeMatricula(row.matricula);
    const student = studentsByMatricula.get(matricula);
    if (!student && !baseReady) {
      return { ...row, matricula };
    }
    if (!student) {
      return {
        ...row,
        matricula,
        found: false,
        genero: "No encontrado",
        carrera: "No encontrado",
        nivel: "No encontrado",
        programa: "No encontrado"
      };
    }
    return {
      ...row,
      matricula,
      found: true,
      genero: student.genero || "No especificado",
      carrera: student.carrera || "Sin carrera",
      nivel: student.nivel || "Sin nivel",
      programa: student.programa || student.carrera || "Sin programa"
    };
  });
}

function renderUploadBars(title, rows, limit = 8) {
  const max = Math.max(...rows.map((row) => row.value), 1);
  return `
    <article class="upload-chart-card">
      <h3>${title}</h3>
      <div class="upload-bars">
        ${rows.length ? rows.slice(0, limit).map((row) => `
          <div class="upload-bar-row">
            <span>${escapeHtml(row.label)}</span>
            <div class="bar-track"><div class="bar-fill" style="width:${Math.max(4, Math.round((row.value / max) * 100))}%"></div></div>
            <strong>${row.value}</strong>
          </div>
        `).join("") : `<div class="upload-empty">Sin datos suficientes para graficar.</div>`}
      </div>
    </article>
  `;
}

function renderParticipationUploadDashboard(areaId) {
  const config = participationUploadConfigs[areaId];
  const state = participationUploadState[areaId];
  const hasDraft = Boolean(state.draft);
  const result = state.draft || state.imported;
  const imported = hasDraft ? null : state.imported;
  const rows = result?.rows || [];
  const dashboardRows = participationAcademicRows(rows);
  const dashboardSummary = {
    ...result?.summary,
    found: dashboardRows.filter((row) => row.matricula && row.found && !row.duplicate).length,
    notFound: dashboardRows.filter((row) => row.matricula && !row.found).length
  };
  const notFound = dashboardRows.filter((row) => row.matricula && !row.found);
  const pendingLocalSync = currentUser?.auth === "supabase" && state.source === "local" && Boolean(state.imported?.rows?.length);
  const canImport = currentUser?.auth === "supabase" && Boolean(
    (state.draft && !state.draft.errors?.length && state.draft.rows?.length)
    || pendingLocalSync
  );
  const title = areaId === "gamer" ? "Gamer" : "Representativos";
  const importedAt = state.imported?.importedAt ? new Date(state.imported.importedAt) : null;
  const importedAtLabel = importedAt && !Number.isNaN(importedAt.getTime())
    ? importedAt.toLocaleString("es-MX", { dateStyle: "medium", timeStyle: "short" })
    : "fecha no disponible";
  const persistenceLabel = participationUploadLoading[areaId]
    ? "Actualizando última carga desde Supabase..."
    : state.imported
      ? `Última carga disponible: ${state.imported.summary.total.toLocaleString("es-MX")} registros · ${importedAtLabel} · ${state.source === "cloud" ? "Supabase" : "respaldo local"}`
      : "Todavía no hay una carga guardada para este módulo.";
  const persistenceNote = currentUser?.auth === "supabase"
    ? (state.source === "local" ? "Se intentará sincronizar al entrar con conexión." : "La carga permanece disponible al volver a entrar y desde otras computadoras.")
    : "Modo demo: conecta tu cuenta Supabase antes de importar para guardar permanentemente y compartir entre computadoras.";
  const previewSection = areaId === "representativos" && result ? `
        <section class="upload-preview-panel">
          <div class="class-grade-table-header">
            <div><p class="eyebrow">Vista previa</p><h3>${imported ? "Información importada" : "Archivo listo para revisión"}</h3></div>
            <span>${result.preview.length} de ${rows.length} registros</span>
          </div>
          <div class="class-grade-table-wrap">
            <table class="class-grade-table">
              <thead><tr><th>Matrícula</th><th>Clave</th><th>Representativo</th><th>Coach</th><th>Base</th></tr></thead>
              <tbody>${result.preview.map((row) => `
                <tr><td>${escapeHtml(row.matricula || "Sin matrícula")}</td><td>${escapeHtml(row.clave_materia || "")}</td><td>${escapeHtml(row.representativo || "")}</td><td>${escapeHtml(row.coach || "")}</td><td><span class="upload-pill ${row.found ? "green" : "blue"}">${row.found ? "Encontrada" : "No encontrada"}</span></td></tr>
              `).join("")}</tbody>
            </table>
          </div>
        </section>
      ` : "";
  return `
    <section class="upload-center">
      <div class="permission-strip">
        <span>${title}: centro visual de carga y validación contra Base de datos_alumnos.</span>
        <span>${studentDatabaseLoaded ? `${cloudStudentDatabase.length.toLocaleString("es-MX")} alumnos en base general` : "Base general pendiente de cargar"}</span>
      </div>
      <div class="permission-strip">
        <span>${escapeHtml(persistenceLabel)}</span>
        <span>${escapeHtml(persistenceNote)}</span>
        ${currentUser?.auth !== "supabase" ? `<button class="ghost-btn" type="button" data-connect-participation-cloud>Conectar con Supabase</button>` : ""}
      </div>
      <div class="upload-center-grid">
        <article class="upload-info-panel">
          <p class="eyebrow">Centro de carga</p>
          <h3>${config.title}</h3>
          <p>${config.subtitle}</p>
          <div class="upload-required-list">
            <strong>Columnas obligatorias</strong>
            ${config.required.map((column) => `<span>${escapeHtml(column)}</span>`).join("")}
          </div>
          <div class="upload-template-preview">
            <strong>Vista previa de plantilla</strong>
            <table>
              <thead><tr>${Object.keys(config.sample[0]).map((key) => `<th>${escapeHtml(key)}</th>`).join("")}</tr></thead>
              <tbody>${config.sample.map((row) => `<tr>${Object.keys(config.sample[0]).map((key) => `<td>${escapeHtml(row[key])}</td>`).join("")}</tr>`).join("")}</tbody>
            </table>
          </div>
          <ul class="upload-recommendations">
            ${config.recommendations.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
          <button class="ghost-btn" type="button" data-download-upload-template="${areaId}">Descargar plantilla</button>
        </article>
        <article class="upload-drop-panel">
          <p class="eyebrow">Validación</p>
          <h3>${config.button}</h3>
          <label class="upload-drop-zone" data-upload-drop="${areaId}">
            <input type="file" accept=".csv,.xlsx,.xls" data-participation-upload="${areaId}" hidden />
            <strong>Arrastra tu archivo aquí</strong>
            <span>o selecciona un archivo .xlsx o .csv</span>
            <em>${state.fileName ? escapeHtml(state.fileName) : "Sin archivo seleccionado"}</em>
          </label>
          <div class="upload-validation-summary">
            ${result ? `
              <div class="upload-status ${result.errors.length ? "red" : result.warnings.length ? "yellow" : "green"}">
                <strong>${result.errors.length ? "Con errores" : result.warnings.length ? "Con advertencias" : "Listo para importar"}</strong>
                <span>${result.errors.length || result.warnings.length || "Archivo validado correctamente"}</span>
              </div>
              <div class="upload-message-list">
                ${result.errors.map((item) => `<p class="red">${escapeHtml(item)}</p>`).join("")}
                ${result.warnings.map((item) => `<p class="yellow">${escapeHtml(item)}</p>`).join("")}
              </div>
            ` : `<div class="upload-empty">Carga un archivo para ver la validación.</div>`}
          </div>
          <button class="primary-btn" type="button" data-import-participation-upload="${areaId}" ${canImport ? "" : "disabled"}>${pendingLocalSync ? "Guardar respaldo en Supabase" : hasDraft ? "Importar información" : state.imported ? "Carga guardada" : "Importar información"}</button>
        </article>
      </div>
      ${result ? `
        <div class="upload-kpi-grid">
          <article><span>Total cargado</span><strong>${result.summary.total}</strong><em>registros</em></article>
          <article><span>${areaId === "gamer" ? "Encontradas" : "Válidas"}</span><strong>${dashboardSummary.found}</strong><em>en base general</em></article>
          <article><span>No encontradas</span><strong>${dashboardSummary.notFound}</strong><em>revisar matrícula</em></article>
          <article><span>Duplicados</span><strong>${result.summary.duplicates}</strong><em>en archivo</em></article>
          ${areaId === "representativos" ? `<article><span>Representativos</span><strong>${result.summary.representativos}</strong><em>equipos</em></article><article><span>Coaches</span><strong>${result.summary.coaches}</strong><em>responsables</em></article>` : ""}
        </div>
        ${previewSection}
        <div class="upload-chart-grid">
          ${areaId === "representativos" ? renderUploadBars("Alumnos por representativo", uploadGroupCounts(dashboardRows, "representativo")) + renderUploadBars("Alumnos por coach", uploadGroupCounts(dashboardRows, "coach")) : ""}
          ${renderUploadBars("Por género", uploadGroupCounts(dashboardRows, "genero", { foundOnly: true }))}
          ${renderUploadBars("Por carrera", uploadGroupCounts(dashboardRows, "carrera", { foundOnly: true }))}
          ${renderUploadBars("Por nivel", uploadGroupCounts(dashboardRows, "nivel", { foundOnly: true }))}
          ${areaId === "representativos" ? renderUploadBars("Por programa", uploadGroupCounts(dashboardRows, "programa", { foundOnly: true })) : ""}
        </div>
        <section class="upload-preview-panel">
          <div class="class-grade-table-header">
            <div><p class="eyebrow">Seguimiento</p><h3>Matrículas no encontradas</h3></div>
            <span>${notFound.length} registros</span>
          </div>
          <div class="class-grade-table-wrap">
            <table class="class-grade-table">
              <thead><tr>${areaId === "representativos" ? "<th>Matrícula</th><th>Representativo</th><th>Coach</th>" : "<th>Matrícula</th><th>Observación</th>"}</tr></thead>
              <tbody>${notFound.length ? notFound.slice(0, 80).map((row) => areaId === "representativos" ? `
                <tr><td>${escapeHtml(row.matricula)}</td><td>${escapeHtml(row.representativo || "")}</td><td>${escapeHtml(row.coach || "")}</td></tr>
              ` : `
                <tr><td>${escapeHtml(row.matricula)}</td><td>No existe en Base de datos_alumnos</td></tr>
              `).join("") : `<tr><td colspan="${areaId === "representativos" ? 3 : 2}">No hay matrículas pendientes de revisar.</td></tr>`}</tbody>
            </table>
          </div>
        </section>
      ` : ""}
    </section>
  `;
}

function representativosHasValue(value) {
  const normalized = normalizeText(value);
  return Boolean(normalized && !["n a", "na", "sin dato", "sin programa", "sin semestre", "no encontrado", "no especificado"].includes(normalized));
}

function representativosAcademicRows(rows) {
  return rows.filter((row) => row.matricula && !row.duplicate).map((row) => {
    const student = studentFromDatabase(row.matricula);
    return {
      ...row,
      found: Boolean(student),
      genero: representativosHasValue(student?.genero) ? normalizeStudentGender(student.genero) : normalizeStudentGender(row.genero),
      carrera: representativosHasValue(student?.carrera) ? student.carrera : (row.carrera || "Sin carrera"),
      nivel: representativosHasValue(student?.nivel) ? student.nivel : (row.nivel || "Sin nivel"),
      programa: representativosHasValue(row.programa) ? row.programa : (student?.programa || student?.carrera || "Sin programa"),
      semestre: representativosHasValue(row.semestre) ? row.semestre : (student?.semestre || "Sin semestre")
    };
  });
}

function representativosFilteredRows(rows) {
  const term = normalizeText(representativosFilters.search);
  return rows.filter((row) => {
    const coachMatch = representativosFilters.coach === "todos" || row.coach === representativosFilters.coach;
    const teamMatch = representativosFilters.representativo === "todos" || row.representativo === representativosFilters.representativo;
    const text = normalizeText(`${row.matricula} ${row.representativo} ${row.coach} ${row.programa} ${row.semestre}`);
    return coachMatch && teamMatch && (!term || text.includes(term));
  });
}

function representativosFilterControls(rows) {
  const coaches = Array.from(new Set(rows.map((row) => row.coach).filter(Boolean))).sort((a, b) => a.localeCompare(b, "es"));
  const teams = Array.from(new Set(rows.map((row) => row.representativo).filter(Boolean))).sort((a, b) => a.localeCompare(b, "es"));
  return `
    <section class="representativos-filters" aria-label="Filtros de Representativos">
      <select class="representativos-filter" data-filter="representativo" aria-label="Representativo"><option value="todos">Todos los representativos</option>${teams.map((value) => `<option value="${escapeHtml(value)}" ${representativosFilters.representativo === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}</select>
      <select class="representativos-filter" data-filter="coach" aria-label="Coach"><option value="todos">Todos los coaches</option>${coaches.map((value) => `<option value="${escapeHtml(value)}" ${representativosFilters.coach === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}</select>
      <input id="representativosSearch" type="search" value="${escapeHtml(representativosFilters.search)}" placeholder="Buscar matrícula, representativo o programa" />
    </section>`;
}

function representativosTeamSummaries(rows) {
  const groups = new Map();
  rows.forEach((row) => {
    const key = normalizeText(row.representativo || "Sin representativo");
    const current = groups.get(key) || {
      representativo: row.representativo || "Sin representativo",
      students: new Set(),
      coaches: new Set(),
      programs: new Set(),
      women: 0,
      men: 0
    };
    if (!current.students.has(row.matricula)) {
      current.students.add(row.matricula);
      if (row.genero === "Femenino") current.women += 1;
      if (row.genero === "Masculino") current.men += 1;
    }
    if (row.coach) current.coaches.add(row.coach);
    if (representativosHasValue(row.programa)) current.programs.add(row.programa);
    groups.set(key, current);
  });
  return Array.from(groups.values())
    .map((group) => ({ ...group, total: group.students.size }))
    .sort((a, b) => b.total - a.total || a.representativo.localeCompare(b.representativo, "es"));
}

function renderRepresentativosCards(groups) {
  return `<div class="representativos-card-grid">${groups.map((group) => `
    <article class="representativos-card">
      <div><span>Representativo</span><strong>${group.total.toLocaleString("es-MX")}</strong></div>
      <h4>${escapeHtml(group.representativo)}</h4>
      <p><i data-lucide="user-round-check"></i>${escapeHtml(Array.from(group.coaches).join(" · ") || "Sin coach asignado")}</p>
      <div class="representativos-card-stats"><span><b>${group.women}</b> mujeres</span><span><b>${group.men}</b> hombres</span><span><b>${group.programs.size}</b> programas</span></div>
    </article>`).join("")}</div>`;
}

function renderRepresentativosDashboard() {
  if (participationUploadLoading.representativos) return `<div class="permission-strip">Recuperando la última carga de Representativos desde Supabase...</div>`;
  const state = participationUploadState.representativos;
  const activeResult = state.draft?.rows?.length ? state.draft : state.imported;
  const sourceRows = activeResult?.rows || [];
  const isDraftPreview = Boolean(state.draft?.rows?.length) && activeResult === state.draft;
  const allRows = representativosAcademicRows(sourceRows);
  const rows = representativosFilteredRows(allRows);
  const groups = representativosTeamSummaries(rows);
  const uniqueStudents = new Set(rows.map((row) => row.matricula)).size;
  const coaches = new Set(rows.map((row) => row.coach).filter((value) => representativosHasValue(value) && normalizeText(value) !== "sin coach asignado")).size;
  const women = rows.filter((row) => row.genero === "Femenino").length;
  const men = rows.filter((row) => row.genero === "Masculino").length;
  const programs = new Set(rows.map((row) => row.programa).filter(representativosHasValue)).size;
  const matched = rows.filter((row) => row.found).length;
  const lastUpload = isDraftPreview
    ? `Vista previa: ${state.draft.fileName || state.fileName || "archivo seleccionado"}`
    : state.imported?.importedAt
      ? new Date(state.imported.importedAt).toLocaleString("es-MX", { dateStyle: "medium", timeStyle: "short" })
      : "Sin carga registrada";
  const sourceLabel = isDraftPreview
    ? "Información validada; falta importarla para compartirla"
    : state.source === "cloud" && state.imported?.rows?.length
      ? "Última carga disponible en Supabase"
      : "Sin fuente compartida";
  return `
    <section class="semana-tec-dashboard representativos-dashboard">
      <header class="semana-tec-heading"><div><p class="eyebrow">Seguimiento deportivo</p><h3>Representativos</h3><span>La matrícula es el identificador oficial; no se guardan nombres de alumnos.</span></div><div><strong>${escapeHtml(lastUpload)}</strong><span>${escapeHtml(sourceLabel)}</span></div></header>
      ${representativosFilterControls(allRows)}
      ${sourceRows.length ? `
        <div class="semana-tec-kpis representativos-kpis">
          <article><span>Alumnos únicos</span><strong>${uniqueStudents.toLocaleString("es-MX")}</strong><em>por matrícula</em></article>
          <article><span>Representativos</span><strong>${groups.length.toLocaleString("es-MX")}</strong><em>deportes y equipos</em></article>
          <article><span>Coaches</span><strong>${coaches.toLocaleString("es-MX")}</strong><em>responsables</em></article>
          <article><span>Mujeres</span><strong>${women.toLocaleString("es-MX")}</strong><em>participaciones</em></article>
          <article><span>Hombres</span><strong>${men.toLocaleString("es-MX")}</strong><em>participaciones</em></article>
          <article><span>Programas</span><strong>${programs.toLocaleString("es-MX")}</strong><em>académicos</em></article>
          <article><span>Base Maestra</span><strong>${matched.toLocaleString("es-MX")}</strong><em>matrículas encontradas</em></article>
        </div>
        <div class="semana-tec-charts">
          ${renderUploadBars("Alumnos por coach", semanaTecCountRows(rows, "coach"), 14)}
          ${renderUploadBars("Top de programas", semanaTecCountRows(rows, "programa").slice(0, 12), 12)}
          ${renderUploadBars("Participación por semestre", semanaTecSemesterCounts(rows), 12)}
        </div>
        <section class="semana-tec-groups-panel">
          <div class="class-grade-table-header"><div><p class="eyebrow">Detalle operativo</p><h3>Representativos y coaches</h3></div><span>${groups.length} representativos visibles</span></div>
          ${renderRepresentativosCards(groups)}
        </section>` : `
        <section class="vivencia-empty-state"><strong>Representativos está listo para recibir información.</strong><span>Carga la lista de alumnos para generar automáticamente deportes, coaches y perfil académico.</span><button class="primary-btn" type="button" data-view-jump="representativos-upload">Ir a Carga de alumnos</button></section>`}
    </section>`;
}

function renderRepresentativosUploadView() {
  const state = participationUploadState.representativos;
  const result = state.draft || state.imported;
  const draft = state.draft;
  const rows = result?.rows || [];
  const summary = result?.summary || participationUploadSummary("representativos", []);
  const pendingLocalSync = currentUser?.auth === "supabase" && state.source === "local" && Boolean(state.imported?.rows?.length);
  const canImport = currentUser?.auth === "supabase" && canEditArea("representativos") && Boolean((draft && !draft.errors?.length && draft.rows?.length) || pendingLocalSync);
  const statusClass = !result ? "yellow" : result.errors?.length ? "red" : result.warnings?.length ? "yellow" : "green";
  return `
    <section class="upload-center representativos-upload">
      <div class="upload-center-grid">
        <article class="upload-info-panel">
          <div><p class="eyebrow">Representativos</p><h3>Plantilla de alumnos</h3><p>La carga reemplaza la anterior y queda disponible en todas las computadoras.</p></div>
          <div class="upload-required-list"><strong>Columnas necesarias</strong><span>Matrícula</span><span>Clave de la materia</span><span>Materia de repre</span><span>COACH</span></div>
          <div class="upload-template-preview"><strong>Columnas analíticas aceptadas</strong><table><thead><tr><th>Matrícula</th><th>Representativo</th><th>Coach</th><th>Programa</th></tr></thead><tbody><tr><td>A01234567</td><td>Fútbol Soccer</td><td>Coach responsable</td><td>IIS</td></tr></tbody></table></div>
          <ul class="upload-recommendations"><li>Se aceptan archivos .xlsx y .csv.</li><li>La columna Nombre se ignora y nunca se guarda.</li><li>La matrícula se cruza con Base de datos_alumnos.</li><li>Una nueva carga sustituye por completo la carga anterior.</li></ul>
          <button class="ghost-btn" type="button" data-download-upload-template="representativos">Descargar plantilla</button>
        </article>
        <article class="upload-drop-panel">
          <label class="upload-drop-zone" data-upload-drop="representativos"><input type="file" accept=".csv,.xlsx,.xls" data-participation-upload="representativos" hidden /><strong>Arrastra tu archivo aquí</strong><span>o selecciona un archivo Excel / CSV</span><em>${escapeHtml(draft?.fileName || state.imported?.fileName || state.fileName || "Sin archivo seleccionado")}</em></label>
          <div class="upload-status ${statusClass}"><span>${!result ? "Selecciona un archivo para comenzar" : result.errors?.length ? `${result.errors.length} errores` : draft ? "Archivo listo para importar" : "Última carga guardada"}</span>${result ? `<strong>${summary.total.toLocaleString("es-MX")} registros</strong>` : ""}</div>
          <div class="upload-message-list">${(result?.errors || []).map((message) => `<p class="red">${escapeHtml(message)}</p>`).join("")}${(result?.warnings || []).map((message) => `<p class="yellow">${escapeHtml(message)}</p>`).join("")}</div>
          ${currentUser?.auth !== "supabase" ? `<div class="permission-strip">Inicia sesión con Supabase para guardar la carga y compartirla entre computadoras.</div>` : ""}
          ${result ? `<div class="semana-tec-load-summary representativos-load-summary"><span><b>${new Set(rows.map((row) => row.matricula)).size}</b> alumnos</span><span><b>${summary.representativos}</b> representativos</span><span><b>${summary.coaches}</b> coaches</span><span><b>${summary.notFound}</b> no encontradas</span></div>` : ""}
          <button class="primary-btn" type="button" data-import-participation-upload="representativos" ${canImport ? "" : "disabled"}>${pendingLocalSync ? "Guardar respaldo en Supabase" : "Importar información"}</button>
        </article>
      </div>
      ${rows.length ? `<section class="upload-preview-panel"><div class="class-grade-table-header"><div><p class="eyebrow">Vista previa</p><h3>Información que sí se guardará</h3></div><span>Sin nombres ni apellidos</span></div><div class="class-grade-table-wrap"><table class="class-grade-table"><thead><tr><th>Matrícula</th><th>Clave</th><th>Representativo</th><th>Coach</th><th>Programa</th><th>Género</th><th>Semestre</th></tr></thead><tbody>${rows.slice(0, 12).map((row) => `<tr><td>${escapeHtml(row.matricula)}</td><td>${escapeHtml(row.clave_materia)}</td><td>${escapeHtml(row.representativo)}</td><td>${escapeHtml(row.coach)}</td><td>${escapeHtml(row.programa)}</td><td>${escapeHtml(row.genero)}</td><td>${escapeHtml(row.semestre)}</td></tr>`).join("")}</tbody></table></div></section>` : ""}
    </section>`;
}

function executiveStudentContext(matricula) {
  const student = studentFromDatabase(normalizeMatricula(matricula));
  return {
    genero: student?.genero || "No especificado",
    carrera: student?.carrera || "Sin carrera",
    semestre: student?.semestre || null,
    nivel: student?.nivel || student?.nivel_escolar || "Sin nivel"
  };
}

function executiveSharedSourceRows() {
  const bookingRows = classBookingReservations
    .filter((row) => normalizeMatricula(row.student))
    .map((row) => {
      const context = executiveStudentContext(row.student);
      return {
        matricula: normalizeMatricula(row.student),
        area: "booking",
        periodo: executiveReportState.period,
        registros: 1,
        operacion: row.activity || "Booking",
        source: classBookingCloudAvailable ? "booking_supabase" : "booking_local",
        ...context
      };
    });
  return bookingRows;
}

function executiveOperationalRows() {
  const retiredAreas = ["general", "compras", "configuracion", "gamer", "representativos"];
  const baseRows = allParticipationRows().filter((row) => row.registros > 0 && !retiredAreas.includes(row.area));
  return [...baseRows, ...executiveSharedSourceRows()];
}

function executiveUniqueCount(rows = executiveOperationalRows()) {
  return new Set(rows.map((row) => normalizeMatricula(row.matricula)).filter(Boolean)).size;
}

function executiveCountByArea() {
  const rows = executiveOperationalRows();
  const areaRows = ["clases", "gimnasio", "intramuros", "vivencia"].map((areaId) => {
    const areaRecords = rows.filter((row) => row.area === areaId);
    return {
      areaId,
      label: labelArea(areaId),
      value: new Set(areaRecords.map((row) => normalizeMatricula(row.matricula)).filter(Boolean)).size
    };
  });
  const bookingUnique = new Set(classBookingReservations.map((row) => row.student).filter(Boolean)).size;
  if (bookingUnique) areaRows.push({ areaId: "booking", label: "Booking", value: bookingUnique });
  return areaRows.sort((a, b) => b.value - a.value);
}

function executiveClassSummary() {
  const totalRows = classDisciplineIndicators.filter((row) => row.total);
  const latest = totalRows[totalRows.length - 1] || { banner: 0, bajas: 0, np: 0, finished: 0 };
  const effectiveness = latest.banner ? Math.round((latest.finished / Math.max(1, latest.banner - latest.bajas - latest.np)) * 100) : 0;
  return { ...latest, effectiveness: Number.isFinite(effectiveness) ? effectiveness : 0 };
}

function executiveGymWeekly() {
  const counts = new Map();
  gymAttendanceRecords.forEach((row) => {
    const week = Number(row.week_number) || 0;
    const count = Number(row.attendee_count ?? row.cantidad ?? row.total ?? 0) || 0;
    if (week > 0 && week <= 18) counts.set(week, (counts.get(week) || 0) + count);
  });
  return Array.from({ length: 18 }, (_, index) => ({ label: `S${index + 1}`, value: counts.get(index + 1) || 0 }));
}

function executiveIntramurosRows() {
  const rows = executiveOperationalRows().filter((row) => row.area === "intramuros");
  const grouped = new Map();
  rows.forEach((row) => {
    const key = row.operacion || "Intramuros";
    grouped.set(key, (grouped.get(key) || 0) + 1);
  });
  return Array.from(grouped.entries()).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value).slice(0, 6);
}

function executiveStatus(areaId, value, options = {}) {
  if (options.critical) return { tone: "red", label: "Crítico" };
  if (!value) return { tone: "yellow", label: "Sin datos" };
  if (options.warning) return { tone: "yellow", label: "Seguimiento" };
  return { tone: "green", label: "Estable" };
}

function executiveAreaCards() {
  const classes = executiveClassSummary();
  const gymUnique = new Set(gymAsistencias.map((row) => normalizeMatricula(row.matricula)).filter(Boolean)).size;
  const gymTotal = gymAttendanceRecords.reduce((sum, row) => sum + (Number(row.attendee_count ?? row.cantidad ?? row.total ?? 0) || 0), 0);
  const vivenciaParticipants = vivenciaVisibleMetrics().reduce((sum, row) => sum + vivenciaMetricParticipants(row), 0);
  const intramuros = executiveCountByArea().find((row) => row.areaId === "intramuros")?.value || 0;
  return [
    { id: "clases", view: "dashboard", area: "Clases Deportivas", metric: `${classes.effectiveness}% efectividad`, action: classes.np > classes.bajas ? "Revisar NP por disciplina" : "Mantener seguimiento", detail: `${classes.banner.toLocaleString("es-MX")} inscritos | ${classes.finished.toLocaleString("es-MX")} acreditados`, ...executiveStatus("clases", classes.banner, { warning: classes.effectiveness < 70 }) },
    { id: "gimnasio", view: "dashboard", area: "Gimnasio", metric: `${(gymUnique || gymTotal).toLocaleString("es-MX")} asistencias`, action: gymAttendanceRecords.length ? "Monitorear horarios pico" : "Cargar asistencia semanal", detail: `${gymAttendanceRecords.length.toLocaleString("es-MX")} semanas/días consolidados`, ...executiveStatus("gimnasio", gymTotal || gymAttendanceRecords.length) },
    { id: "vivencia", view: "dashboard", area: "Vivencia", metric: `${vivenciaParticipants.toLocaleString("es-MX")} participantes`, action: vivenciaEvents.length ? "Actualizar próximos eventos" : "Cargar planeación", detail: `${vivenciaEvents.length.toLocaleString("es-MX")} eventos en seguimiento`, ...executiveStatus("vivencia", vivenciaEvents.length) },
    { id: "intramuros", view: "dashboard", area: "Intramuros", metric: `${intramuros.toLocaleString("es-MX")} alumnos`, action: "Revisar torneos activos", detail: `${executiveIntramurosRows().length.toLocaleString("es-MX")} disciplinas/listas activas`, ...executiveStatus("intramuros", intramuros) }
  ];
}

function executivePriorityList(cards) {
  const priorities = [];
  cards.filter((card) => card.tone !== "green").forEach((card) => priorities.push({ tone: card.tone, title: card.area, text: card.action }));
  const classes = executiveClassSummary();
  if (classes.np > 0) priorities.push({ tone: "yellow", title: "Clases", text: `${classes.np} NP en el periodo` });
  if (!classBookingReservations.length) priorities.push({ tone: "blue", title: "Booking", text: "Cargar reservaciones para demanda real" });
  if (!gymAttendanceRecords.length) priorities.push({ tone: "yellow", title: "Gimnasio", text: "Sin asistencias cargadas en tablero" });
  return priorities.slice(0, 5);
}

function executiveClassRetentionRows(mode = "top") {
  const rows = classDisciplineRows()
    .filter((row) => row.total)
    .map((row) => ({
      label: String(row.discipline || "Clase").replace(/\sPMT\d+/i, ""),
      value: row.approvedRate,
      count: `${row.finished}/${row.total}`
    }))
    .sort((a, b) => mode === "low" ? a.value - b.value : b.value - a.value);
  return rows.slice(0, 5);
}

function renderExecutivePercentBars(rows, options = {}) {
  return `
    <div class="exec-mini-bars ${options.compact ? "compact" : ""}">
      ${rows.length ? rows.map((row) => `
        <div class="exec-mini-bar-row percent">
          <span>${escapeHtml(row.label)}</span>
          <i><b class="${options.tone || ""}" style="width:${Math.max(3, Math.min(100, Number(row.value) || 0))}%"></b></i>
          <strong>${escapeHtml(row.count || `${row.value}%`)} <em>${Number(row.value || 0)}%</em></strong>
        </div>
      `).join("") : `<div class="exec-empty">Sin datos cargados.</div>`}
    </div>
  `;
}

function renderExecutivePie(rows) {
  const total = rows.reduce((sum, row) => sum + Number(row.value || 0), 0);
  if (!total) return `<div class="exec-empty">Sin datos cargados.</div>`;
  const colors = ["#0067b1", "#e23c8e", "#f0b400", "#13917c"];
  let start = 0;
  const gradient = rows.map((row, index) => {
    const value = Number(row.value || 0);
    const end = start + (value / total) * 100;
    const segment = `${colors[index % colors.length]} ${start}% ${end}%`;
    start = end;
    return segment;
  }).join(", ");
  return `
    <div class="exec-pie-wrap">
      <div class="exec-pie" style="background: conic-gradient(${gradient});">
        <span><strong>${total.toLocaleString("es-MX")}</strong><em>Total</em></span>
      </div>
      <div class="exec-pie-legend">
        ${rows.map((row, index) => {
          const percent = Math.round((Number(row.value || 0) / total) * 1000) / 10;
          return `<div><i style="background:${colors[index % colors.length]}"></i><span>${escapeHtml(row.label)}</span><strong>${Number(row.value || 0).toLocaleString("es-MX")} (${percent}%)</strong></div>`;
        }).join("")}
      </div>
    </div>
  `;
}

function renderExecutiveMiniBars(rows, options = {}) {
  const max = Math.max(...rows.map((row) => row.value), 1);
  return `
    <div class="exec-mini-bars ${options.compact ? "compact" : ""}">
      ${rows.length ? rows.map((row) => `
        <div class="exec-mini-bar-row">
          <span>${escapeHtml(row.label)}</span>
          <i><b style="width:${Math.max(3, Math.round((row.value / max) * 100))}%"></b></i>
          <strong>${Number(row.value || 0).toLocaleString("es-MX")}</strong>
        </div>
      `).join("") : `<div class="exec-empty">Sin datos cargados.</div>`}
    </div>
  `;
}

function renderExecutiveWeeklyBars(rows, tone = "blue") {
  const max = Math.max(...rows.map((row) => row.value), 1);
  return `
    <div class="exec-week-bars ${tone}">
      ${rows.map((row) => `<div><strong>${row.value ? row.value.toLocaleString("es-MX") : ""}</strong><span style="height:${Math.max(8, Math.round((row.value / max) * 150))}px"></span><em>${row.label}</em></div>`).join("")}
    </div>
  `;
}

function executivePlanningUpcomingRows() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const end = new Date(today);
  end.setDate(end.getDate() + Number(executivePlanningFilters.days || 30));
  return (planningCalendarRows || [])
    .map((row, index) => normalizePlanningCalendarRow(row, index))
    .filter((row) => row.activity && row.date)
    .filter((row) => executivePlanningFilters.area === "todos" || row.area === executivePlanningFilters.area)
    .filter((row) => executivePlanningFilters.status === "todos" || normalizeText(row.status || "sin estado") === normalizeText(executivePlanningFilters.status))
    .filter((row) => {
      const date = new Date(`${row.date}T00:00:00`);
      return date >= today && date <= end;
    })
    .sort((a, b) => String(a.date).localeCompare(String(b.date)))
    .slice(0, 12);
}

function executivePlanningFilterOptions(field) {
  return Array.from(new Set((planningCalendarRows || [])
    .map((row, index) => normalizePlanningCalendarRow(row, index))
    .map((row) => row[field])
    .filter(Boolean)))
    .sort((a, b) => String(a).localeCompare(String(b), "es-MX"));
}

function renderExecutivePlanningCalendar() {
  if (!planningCalendarLoaded) {
    return `<article class="exec-panel exec-planning-panel exec-planning-standalone no-print"><h3>Próximos 30 días</h3><div class="exec-empty">Cargando Planeación Semestral.</div></article>`;
  }
  if (planningCalendarError) {
    return `<article class="exec-panel exec-planning-panel exec-planning-standalone no-print"><h3>Próximos 30 días</h3><div class="exec-empty">No se pudo cargar Planeación Semestral.</div></article>`;
  }
  const rows = executivePlanningUpcomingRows();
  const areaOptions = executivePlanningFilterOptions("area");
  const statusOptions = executivePlanningFilterOptions("status");
  const areaLabel = (area) => areas.find((item) => item.id === area)?.name || area || "Sin área";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(today);
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  const daysVisible = Number(executivePlanningFilters.days || 30);
  const calendarDays = Array.from({ length: Math.ceil((daysVisible + ((today.getDay() + 6) % 7)) / 7) * 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });
  const rowsByDate = rows.reduce((acc, row) => {
    if (!acc[row.date]) acc[row.date] = [];
    acc[row.date].push(row);
    return acc;
  }, {});
  return `
    <article class="exec-panel exec-planning-panel exec-planning-standalone no-print">
      <div class="exec-planning-head">
        <div><h3>Próximos ${Number(executivePlanningFilters.days || 30)} días</h3><p>Calendario conectado a Planeación Semestral</p></div>
        <div class="exec-planning-filters no-print">
          <select id="executivePlanningArea">
            <option value="todos" ${executivePlanningFilters.area === "todos" ? "selected" : ""}>Todas las áreas</option>
            ${areaOptions.map((area) => `<option value="${escapeHtml(area)}" ${executivePlanningFilters.area === area ? "selected" : ""}>${escapeHtml(areaLabel(area))}</option>`).join("")}
          </select>
          <select id="executivePlanningStatus">
            <option value="todos" ${executivePlanningFilters.status === "todos" ? "selected" : ""}>Todos los estados</option>
            ${statusOptions.map((status) => `<option value="${escapeHtml(status)}" ${executivePlanningFilters.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
          </select>
          <select id="executivePlanningDays">
            ${[7, 15, 30].map((days) => `<option value="${days}" ${String(executivePlanningFilters.days) === String(days) ? "selected" : ""}>${days} días</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="exec-calendar-grid" aria-label="Calendario de próximos días">
        ${["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day) => `<strong>${day}</strong>`).join("")}
        ${calendarDays.map((date) => {
          const key = date.toISOString().slice(0, 10);
          const dayRows = rowsByDate[key] || [];
          const isOutsideRange = date < today || date > new Date(today.getTime() + daysVisible * 86400000);
          return `
            <div class="exec-calendar-day ${isOutsideRange ? "muted" : ""} ${key === today.toISOString().slice(0, 10) ? "today" : ""}">
              <time datetime="${key}">${date.getDate()}</time>
              ${dayRows.slice(0, 3).map((row) => `
                <button type="button" data-planning-detail="${escapeHtml(row.id)}" data-planning-instance="exec-calendar:${escapeHtml(row.id)}">
                  <span>${escapeHtml(areaLabel(row.area))}</span>
                  ${escapeHtml(row.activity)}
                </button>
              `).join("")}
              ${dayRows.length > 3 ? `<em>+${dayRows.length - 3} más</em>` : ""}
            </div>
          `;
        }).join("")}
      </div>
      <div class="exec-planning-list">
        ${rows.length ? rows.map((row) => `
          <div class="exec-planning-item">
            <time>${escapeHtml(new Date(`${row.date}T00:00:00`).toLocaleDateString("es-MX", { day: "2-digit", month: "short" }))}</time>
            <strong>${escapeHtml(row.activity)}</strong>
            <span>${escapeHtml(areaLabel(row.area))}</span>
            <em>${escapeHtml(row.responsible || "Responsable pendiente")}</em>
            <b>${escapeHtml(row.status || "Sin estado")}</b>
            <small>${escapeHtml(row.place || "Sin lugar")}</small>
          </div>
        `).join("") : `<div class="exec-empty">No hay actividades dentro del rango seleccionado.</div>`}
      </div>
    </article>
  `;
}

function renderExecutiveGeneralDashboard() {
  const rows = executiveOperationalRows();
  const unique = executiveUniqueCount(rows);
  const baseUniverse = cloudStudentDatabase.length || 18322;
  const impact = baseUniverse ? Math.round((unique / baseUniverse) * 1000) / 10 : 0;
  const classes = executiveClassSummary();
  const gymTotal = gymAttendanceRecords.reduce((sum, row) => sum + (Number(row.attendee_count ?? row.cantidad ?? row.total ?? 0) || 0), 0);
  const bookingVivencia = classBookingReservations.length + vivenciaVisibleMetrics().reduce((sum, row) => sum + vivenciaMetricParticipants(row), 0);
  const areaCounts = executiveCountByArea();
  const cards = executiveAreaCards();
  const priorities = executivePriorityList(cards);
  const genderRows = ["Femenino", "Masculino", "No especificado"].map((label) => ({ label, value: rows.filter((row) => row.genero === label).length })).filter((row) => row.value);
  const schoolRows = careerParticipationSummary(rows).slice(0, 7).map((row) => ({ label: row.career, value: row.count }));
  const bookingRows = groupBookingRows(classBookingReservations, "activity").slice(0, 6).map((row) => ({ label: row.label, value: row.count }));
  const vivenciaRows = Array.from(new Map(vivenciaVisibleEvents().map((event) => [event.event_name || "Vivencia", vivenciaEventParticipantsCount(event, vivenciaEventMetricMap())])).entries()).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value).slice(0, 5);
  return `
    <section class="executive-report" id="executiveReport">
      <div class="exec-controls no-print">
        <label>Periodo<select id="executivePeriod">${["FJ26", "AD26", "IN26"].map((period) => `<option ${executiveReportState.period === period ? "selected" : ""}>${period}</option>`).join("")}</select></label>
        <label>Semana<select id="executiveWeek">${Array.from({ length: 18 }, (_, index) => `<option value="${index + 1}" ${executiveReportState.week === index + 1 ? "selected" : ""}>Semana ${index + 1}</option>`).join("")}</select></label>
        <label>Título<input id="executiveTitle" value="${escapeHtml(executiveReportState.title)}" /></label>
        <button class="ghost-btn" id="refreshExecutiveData" type="button">Actualizar datos</button>
        <button class="primary-btn" id="downloadExecutivePdf" type="button">Descargar PDF</button>
      </div>
      <div class="exec-page">
        <header class="exec-header">
          <div>
            <p>Semana ${executiveReportState.week} de 18 | ${escapeHtml(executiveReportState.period)} | Corte ${new Date().toLocaleDateString("es-MX")}</p>
            <h2>${escapeHtml(executiveReportState.title || `Reporte Ejecutivo Semana ${executiveReportState.week}`)}</h2>
            <span>Indicadores Ejecutivos RecSports</span>
          </div>
          <div class="exec-logo">WS</div>
        </header>
        <div class="exec-hero-row">
          <article class="exec-hero-kpi"><span>Atenciones alumnos acumulados</span><strong>${rows.reduce((sum, row) => sum + row.registros, 0).toLocaleString("es-MX")}</strong></article>
          <article><strong>${gymTotal.toLocaleString("es-MX")}</strong><span>Total gimnasio</span></article>
          <article><strong>${classes.finished.toLocaleString("es-MX")}</strong><span>Acreditados clases</span></article>
          <article><strong>${(areaCounts.find((row) => row.areaId === "intramuros")?.value || 0).toLocaleString("es-MX")}</strong><span>Intramuros únicos</span></article>
          <article><strong>${bookingVivencia.toLocaleString("es-MX")}</strong><span>Booking + Vivencia</span></article>
        </div>
        <section class="exec-status-strip">
          ${cards.map((card) => `
            <article class="exec-area-link" data-jump="${card.id}" data-target-view="${card.view}">
              <span class="exec-dot ${card.tone}"></span>
              <strong>${escapeHtml(card.area)}</strong>
              <em>${escapeHtml(card.metric)}</em>
              <b>${escapeHtml(card.detail)}</b>
              <small>${escapeHtml(card.action)}</small>
              <button class="exec-open-btn no-print" type="button">Abrir</button>
            </article>
          `).join("")}
        </section>
        <div class="exec-grid three">
          <article class="exec-panel">
            <h3>Top 5 prioridades operativas</h3>
            <div class="exec-priority-list">${priorities.length ? priorities.map((item) => `<div><span class="${item.tone}">${escapeHtml(item.tone)}</span><strong>${escapeHtml(item.title)}</strong><em>${escapeHtml(item.text)}</em></div>`).join("") : `<div class="exec-empty">Operación estable sin alertas principales.</div>`}</div>
          </article>
          <article class="exec-panel">
            <h3>Retención por clase</h3>
            ${renderExecutivePercentBars(executiveClassRetentionRows("top"), { tone: "green" })}
          </article>
          <article class="exec-panel exec-panel-link" data-jump="clases" data-target-view="booking">
            <h3>Booking por actividad</h3>
            ${renderExecutiveMiniBars(bookingRows)}
            <button class="exec-open-btn no-print" type="button">Abrir Booking</button>
          </article>
        </div>
        <div class="exec-grid wide-left">
          <article class="exec-panel">
            <h3>Alumnos atendidos en Gimnasio Wellness Center</h3>
            ${renderExecutiveWeeklyBars(executiveGymWeekly().slice(0, executiveReportState.week), "blue")}
          </article>
          <article class="exec-panel">
            <h3>Participación por escuela</h3>
            ${renderExecutiveMiniBars(schoolRows, { compact: true })}
          </article>
        </div>
        <div class="exec-grid three">
          <article class="exec-panel">
            <h3>Clases con seguimiento</h3>
            ${renderExecutivePercentBars(executiveClassRetentionRows("low"), { compact: true, tone: "red" })}
          </article>
          <article class="exec-panel">
            <h3>Género impactado</h3>
            ${renderExecutivePie(genderRows)}
          </article>
          <article class="exec-panel">
            <h3>Intramuros</h3>
            ${renderExecutiveMiniBars(executiveIntramurosRows(), { compact: true })}
          </article>
        </div>
        <div class="exec-grid">
          <article class="exec-panel">
            <h3>Vivencia</h3>
            ${renderExecutiveMiniBars(vivenciaRows.slice(0, 5), { compact: true })}
          </article>
        </div>
        <footer class="exec-footer-kpis">
          <article><strong>${unique.toLocaleString("es-MX")}</strong><span>Matrículas únicas impactadas</span></article>
          <article><strong>${baseUniverse.toLocaleString("es-MX")}</strong><span>Matrículas únicas Base Datos</span></article>
          <article><strong>${impact}%</strong><span>% de impacto sobre universo base</span></article>
        </footer>
        <p class="exec-privacy">Reporte generado automáticamente - sin nombres de alumnos - datos agregados.</p>
      </div>
    </section>
  `;
}

function intramurosFilterOptions(field) {
  return Array.from(new Set(intramurosParticipantAnalyticsRows().map((row) => row[field]).filter(Boolean)))
    .sort((a, b) => String(a).localeCompare(String(b), "es-MX"));
}

function intramurosHasNamedTournament(row) {
  return canonicalIntramurosTournament(row.torneo) !== "Sin torneo";
}

function intramurosParticipantAnalyticsRows() {
  return intramurosParticipants.filter(intramurosHasNamedTournament);
}

function filteredIntramurosParticipants() {
  const search = normalizeText(intramurosFilters.search || "");
  return intramurosParticipantAnalyticsRows().filter((row) => {
    const periodMatch = intramurosFilters.period === "todos" || row.periodo === intramurosFilters.period;
    const tournamentMatch = intramurosFilters.tournament === "todos" || row.torneo === intramurosFilters.tournament;
    const branchMatch = intramurosFilters.branch === "todos" || row.rama === intramurosFilters.branch;
    const schoolMatch = intramurosFilters.school === "todos" || row.escuela === intramurosFilters.school;
    const genderMatch = intramurosFilters.gender === "todos" || row.genero === intramurosFilters.gender;
    const programMatch = intramurosFilters.program === "todos" || row.programa === intramurosFilters.program;
    const haystack = normalizeText([row.matricula, row.genero, row.programa, row.modalidad, row.escuela, row.tipo_actividad, row.torneo, row.rama, row.equipo].join(" "));
    const searchMatch = !search || haystack.includes(search);
    return periodMatch && tournamentMatch && branchMatch && schoolMatch && genderMatch && programMatch && searchMatch;
  });
}

function intramurosGroupCounts(rows, field, uniqueByMatricula = false) {
  const groups = new Map();
  rows.forEach((row) => {
    const label = row[field] || "Sin dato";
    if (!groups.has(label)) groups.set(label, uniqueByMatricula ? new Set() : 0);
    if (uniqueByMatricula) {
      groups.get(label).add(row.matricula);
    } else {
      groups.set(label, groups.get(label) + 1);
    }
  });
  return Array.from(groups.entries())
    .map(([label, value]) => ({ label, value: uniqueByMatricula ? value.size : value }))
    .sort((a, b) => b.value - a.value || String(a.label).localeCompare(String(b.label), "es-MX"));
}

function intramurosGenderBucket(value) {
  const normalized = normalizeText(value);
  if (normalized.includes("femenino") || normalized.includes("mujer")) return "Mujer";
  if (normalized.includes("masculino") || normalized.includes("hombre")) return "Hombre";
  return "Sin dato";
}

function intramurosTournamentGenderRows(rows) {
  const baseGenderByMatricula = new Map(
    cloudStudentDatabase
      .map((row) => [normalizeMatricula(row.matricula), row.genero])
      .filter(([matricula]) => matricula)
  );
  const groups = new Map();
  rows.forEach((row) => {
    const matricula = normalizeMatricula(row.matricula);
    if (!matricula) return;
    const tournament = canonicalIntramurosTournament(row.torneo);
    if (tournament === "Sin torneo") return;
    if (!groups.has(tournament)) groups.set(tournament, { participants: new Map(), teams: new Set() });
    const baseGender = intramurosGenderBucket(baseGenderByMatricula.get(matricula));
    const uploadedGender = intramurosGenderBucket(row.genero);
    const gender = baseGender === "Sin dato" ? uploadedGender : baseGender;
    const tournamentGroup = groups.get(tournament);
    const tournamentParticipants = tournamentGroup.participants;
    const currentGender = tournamentParticipants.get(matricula);
    if (!currentGender || currentGender === "Sin dato") tournamentParticipants.set(matricula, gender);
    const team = String(row.equipo || "").trim();
    if (team && normalizeText(team) !== "sin equipo") tournamentGroup.teams.add(headerKey(team));
  });
  return Array.from(groups.entries()).map(([label, group]) => {
    const participants = group.participants;
    const values = Array.from(participants.values());
    const Mujer = values.filter((gender) => gender === "Mujer").length;
    const Hombre = values.filter((gender) => gender === "Hombre").length;
    const withoutGender = values.filter((gender) => gender === "Sin dato").length;
    return { label, Mujer, Hombre, "Sin dato": withoutGender, total: values.length, teams: group.teams.size };
  }).sort((a, b) => b.total - a.total || a.label.localeCompare(b.label, "es-MX"));
}

function renderIntramurosTournamentGenderCard(rows) {
  const tournamentRows = intramurosTournamentGenderRows(rows);
  const max = Math.max(...tournamentRows.map((row) => row.total), 1);
  return `
    <article class="intramuros-exec-card intramuros-tournament-gender-card teal">
      <div class="intramuros-tournament-gender-heading">
        <div>
          <h3>Torneos por género</h3>
          <p>Participantes únicos y equipos</p>
        </div>
        ${genderLegend("intramuros")}
      </div>
      <div class="intramuros-tournament-gender-list">
        ${tournamentRows.length ? tournamentRows.map((row) => `
          <div class="intramuros-tournament-gender-row">
            <div class="intramuros-tournament-gender-title">
              <span title="${escapeHtml(row.label)}">${escapeHtml(row.label)}</span>
              <em>${row.teams.toLocaleString("es-MX")} equipos</em>
              <strong>${row.total.toLocaleString("es-MX")}</strong>
            </div>
            <div class="gender-track intramuros-tournament-track">
              <div class="segmented-fill" style="width:${Math.max(4, Math.round((row.total / max) * 100))}%">
                ${row.Mujer ? `<span class="segment women" style="width:${Math.round((row.Mujer / row.total) * 100)}%" title="Mujeres: ${row.Mujer}"></span>` : ""}
                ${row.Hombre ? `<span class="segment men" style="width:${Math.round((row.Hombre / row.total) * 100)}%" title="Hombres: ${row.Hombre}"></span>` : ""}
                ${row["Sin dato"] ? `<span class="segment unknown" style="width:${Math.round((row["Sin dato"] / row.total) * 100)}%" title="Sin dato: ${row["Sin dato"]}"></span>` : ""}
              </div>
            </div>
            <div class="intramuros-tournament-gender-counts">
              <span class="women"><i></i>Mujeres <b>${row.Mujer.toLocaleString("es-MX")}</b></span>
              <span class="men"><i></i>Hombres <b>${row.Hombre.toLocaleString("es-MX")}</b></span>
              ${row["Sin dato"] ? `<span class="unknown"><i></i>Sin dato <b>${row["Sin dato"].toLocaleString("es-MX")}</b></span>` : ""}
              <span class="total">Total <b>${row.total.toLocaleString("es-MX")}</b></span>
            </div>
          </div>
        `).join("") : `<p class="upload-empty">Sin participantes cargados.</p>`}
      </div>
    </article>
  `;
}

function intramurosTeamsByTournament(rows) {
  const groups = new Map();
  rows.forEach((row) => {
    const tournament = row.torneo || "Sin torneo";
    if (!groups.has(tournament)) groups.set(tournament, new Set());
    groups.get(tournament).add(row.equipo || "Sin equipo");
  });
  return Array.from(groups.entries())
    .map(([label, value]) => ({ label, value: value.size }))
    .sort((a, b) => b.value - a.value || String(a.label).localeCompare(String(b.label), "es-MX"));
}

function filteredIntramurosRoles() {
  return intramurosGameRoles.filter((row) => {
    const periodMatch = intramurosFilters.period === "todos" || row.periodo === intramurosFilters.period;
    const tournamentMatch = intramurosFilters.tournament === "todos" || row.torneo === intramurosFilters.tournament;
    const branchMatch = intramurosFilters.branch === "todos" || row.rama === intramurosFilters.branch;
    return periodMatch && tournamentMatch && branchMatch;
  });
}

function intramurosRoleCounts(rows, field) {
  const groups = new Map();
  rows.forEach((row) => {
    const label = row[field] || "Sin dato";
    groups.set(label, (groups.get(label) || 0) + 1);
  });
  return Array.from(groups.entries())
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value || String(a.label).localeCompare(String(b.label), "es-MX"));
}

function renderIntramurosExecutiveBars(title, rows, options = {}) {
  const max = Math.max(...rows.map((row) => Number(row.value || 0)), 1);
  return `
    <article class="intramuros-exec-card ${options.accent || ""} ${options.className || ""}">
      <h3>${escapeHtml(title)}</h3>
      <div class="intramuros-exec-bars">
        ${rows.length ? rows.slice(0, options.limit || 8).map((row) => `
          <div>
            <span>${escapeHtml(row.label)}</span>
            <i><b style="width:${Math.max(4, Math.round((Number(row.value || 0) / max) * 100))}%"></b></i>
            <strong>${Number(row.value || 0).toLocaleString("es-MX")}</strong>
          </div>
        `).join("") : `<p class="upload-empty">Sin datos suficientes.</p>`}
      </div>
    </article>
  `;
}

function renderIntramurosProgressCard(summaries) {
  return `
    <article class="intramuros-exec-card intramuros-chart-progress">
      <h3>Avance por torneo</h3>
      <div class="intramuros-progress-list">
        ${summaries.length ? summaries.map((row) => `
          <div>
            <span>${escapeHtml(row.torneo)}</span>
            <i><b style="width:${Math.max(4, Number(row.progress || 0))}%"></b></i>
            <strong>${Number(row.progress || 0)}%</strong>
            <em>${escapeHtml(row.status || "Sin estado")}</em>
          </div>
        `).join("") : `<p class="upload-empty">Carga roles para medir avance.</p>`}
      </div>
    </article>
  `;
}

function renderIntramurosExecutiveCharts(rows) {
  const roles = filteredIntramurosRoles().filter(intramurosRoleIsGame);
  const summaries = intramurosTournamentSummaries()
    .filter((row) => intramurosFilters.tournament === "todos" || row.torneo === intramurosFilters.tournament)
    .sort((a, b) => b.totalParticipants - a.totalParticipants);
  const roleResultRows = [
    { label: "Con resultado", value: roles.filter(intramurosRoleHasResult).length },
    { label: "Pendientes", value: roles.filter((row) => !intramurosRoleHasResult(row)).length }
  ];
  return `
    <div class="intramuros-exec-grid">
      ${renderIntramurosExecutiveBars("Participación por escuela", intramurosGroupCounts(rows, "escuela"), { accent: "gold", limit: 10, className: "intramuros-chart-school" })}
      ${renderIntramurosProgressCard(summaries)}
      ${renderIntramurosTournamentGenderCard(rows)}
      ${renderIntramurosExecutiveBars("Juegos programados", intramurosRoleCounts(roles, "torneo"), { accent: "red", limit: 7, className: "intramuros-chart-games" })}
      ${renderIntramurosExecutiveBars("Top 10 programas académicos", intramurosGroupCounts(rows, "programa"), { accent: "blue", limit: 10, className: "intramuros-chart-programs" })}
      ${renderIntramurosExecutiveBars("Resultados vs pendientes", roleResultRows.filter((row) => row.value), { accent: "red", limit: 2, className: "intramuros-chart-results" })}
      ${renderIntramurosExecutiveBars("Juegos por cancha", intramurosRoleCounts(roles, "cancha"), { accent: "gold", limit: 8, className: "intramuros-chart-courts" })}
    </div>
  `;
}

function renderIntramurosFilter(name, label, options) {
  return `
    <label>${label}
      <select class="intramuros-filter" data-filter="${name}">
        <option value="todos" ${intramurosFilters[name] === "todos" ? "selected" : ""}>Todos</option>
        ${options.map((value) => `<option value="${escapeHtml(value)}" ${intramurosFilters[name] === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderIntramurosUploadSummary() {
  if (!intramurosUploadSummary) {
    return `<div class="upload-empty">Sin carga reciente en esta sesión.</div>`;
  }
  const summary = intramurosUploadSummary;
  return `
    <div class="intramuros-load-summary">
      <article><span>Procesados</span><strong>${summary.processed.toLocaleString("es-MX")}</strong></article>
      <article><span>Nuevos</span><strong>${summary.inserted.toLocaleString("es-MX")}</strong></article>
      <article><span>Actualizados</span><strong>${summary.updated.toLocaleString("es-MX")}</strong></article>
      <article><span>Duplicados ignorados</span><strong>${summary.duplicates.toLocaleString("es-MX")}</strong></article>
      <article><span>Con error</span><strong>${summary.errors.toLocaleString("es-MX")}</strong></article>
      <article><span>Última carga</span><strong>${new Date(summary.importedAt).toLocaleString("es-MX")}</strong><em>${escapeHtml(summary.fileName)}</em></article>
      ${summary.ignoredColumns?.length ? `<p>Columnas ignoradas por privacidad: ${summary.ignoredColumns.map(escapeHtml).join(", ")}.</p>` : ""}
      ${summary.messages?.map((message) => `<p class="red">${escapeHtml(message)}</p>`).join("") || ""}
    </div>
  `;
}

function renderIntramurosParticipantUploadView() {
  return `
    <section class="upload-center intramuros-dashboard">
      <div class="permission-strip">
        <span>Carga de Registro de Participantes: Omar conserva su Excel; WellSync guarda en Supabase y analiza sin nombres.</span>
        <span>${intramurosCloudAvailable ? `${intramurosParticipants.length.toLocaleString("es-MX")} registros en Supabase` : "Falta activar intramuros_participantes en Supabase"}</span>
      </div>
      <div class="upload-center-grid">
        <article class="upload-info-panel">
          <p class="eyebrow">Fase 1</p>
          <h3>Cargar Registro de Participantes</h3>
          <p>Sube el Excel/CSV de Omar. Si trae nombres o apellidos, WellSync los ignora completamente y solo usa la matrícula y campos operativos.</p>
          <div class="upload-required-list">
            <strong>Campos guardados</strong>
            ${["Matrícula", "Género", "Programa", "Modalidad", "Escuela", "Tipo de actividad", "Torneo", "Rama", "Equipo", "Periodo"].map((column) => `<span>${column}</span>`).join("")}
          </div>
          <div class="upload-template-preview">
            <strong>Vista esperada</strong>
            <table>
              <thead><tr><th>Matrícula</th><th>Torneo</th><th>Rama</th><th>Equipo</th><th>Escuela</th></tr></thead>
              <tbody><tr><td>A01234567</td><td>Torneo interno</td><td>Varonil</td><td>Equipo A</td><td>Negocios</td></tr></tbody>
            </table>
          </div>
          <ul class="upload-recommendations">
            <li>No se guardan nombres ni apellidos.</li>
            <li>La columna Torneo identifica siempre la disciplina o competencia.</li>
            <li>La llave evita duplicados por matrícula + torneo + equipo + periodo.</li>
          </ul>
          <button class="ghost-btn" type="button" data-download-intramuros-template="participants">Descargar plantilla de participantes</button>
        </article>
        <article class="upload-drop-panel">
          <p class="eyebrow">Carga segura</p>
          <h3>📤 Cargar Registro de Participantes</h3>
          <label class="upload-drop-zone" id="intramurosUploadDrop">
            <input id="intramurosParticipantsFile" type="file" accept=".csv,.xlsx,.xls" hidden />
            <strong>${intramurosImporting ? "Cargando archivo..." : "Seleccionar Excel / CSV"}</strong>
            <span>Arrastra aquí o selecciona el archivo de Omar</span>
            <em>Fuente final: Supabase</em>
          </label>
          ${renderIntramurosUploadSummary()}
        </article>
      </div>
    </section>
  `;
}

function renderIntramurosRolesUploadSummary() {
  if (!intramurosRolesUploadSummary) return `<div class="upload-empty">Sin roles cargados en esta sesión.</div>`;
  const summary = intramurosRolesUploadSummary;
  return `
    <div class="intramuros-load-summary">
      <article><span>Procesados</span><strong>${summary.processed.toLocaleString("es-MX")}</strong></article>
      <article><span>Nuevos</span><strong>${summary.inserted.toLocaleString("es-MX")}</strong></article>
      <article><span>Actualizados</span><strong>${summary.updated.toLocaleString("es-MX")}</strong></article>
      <article><span>Duplicados ignorados</span><strong>${summary.duplicates.toLocaleString("es-MX")}</strong></article>
      <article><span>Con error</span><strong>${summary.errors.toLocaleString("es-MX")}</strong></article>
      <article><span>Última carga</span><strong>${new Date(summary.importedAt).toLocaleString("es-MX")}</strong><em>${escapeHtml(summary.fileName)}</em></article>
      ${summary.totalSlots ? `<article><span>Franjas detectadas</span><strong>${summary.totalSlots.toLocaleString("es-MX")}</strong><em>${Number(summary.availableSlots || 0).toLocaleString("es-MX")} disponibles</em></article>` : ""}
      ${summary.totalSlots ? `<article><span>Juegos con equipos</span><strong>${Number(summary.games || 0).toLocaleString("es-MX")}</strong><em>${Number(summary.reservations || 0).toLocaleString("es-MX")} reservas / eventos</em></article>` : ""}
      ${summary.totalSlots ? `<article><span>Posibles conflictos</span><strong>${Number(summary.conflicts || 0).toLocaleString("es-MX")}</strong><em>requieren revisión</em></article>` : ""}
      ${summary.missingFields?.length ? `<p>Campos no detectados en algunas filas: ${summary.missingFields.map(escapeHtml).join(", ")}.</p>` : ""}
      ${summary.messages?.map((message) => `<p class="red">${escapeHtml(message)}</p>`).join("") || ""}
    </div>
  `;
}

function intramurosRoleHasResult(row) {
  const status = normalizeText(row.estatus_partido);
  return Boolean(String(row.resultado || "").trim())
    || ["resultado", "realizado", "completado", "finalizado", "terminado", "jugado"]
      .some((value) => status.includes(value));
}

function intramurosRoleCalendarActivities() {
  const visibleRoles = intramurosGameRoles.filter((row) => {
    const hasTeamOrLabel = Boolean(String(row.equipo_local || row.equipo_visitante || "").trim());
    return Boolean(row.fecha && (intramurosRoleIsGame(row) || hasTeamOrLabel));
  });
  const physicalCounts = new Map();
  visibleRoles.forEach((row) => {
    const key = intramurosRolePhysicalKey(row);
    if (!physicalCounts.has(key)) physicalCounts.set(key, new Set());
    physicalCounts.get(key).add(headerKey(row.torneo || "Sin torneo"));
  });
  return visibleRoles.map((row, index) => {
    const isGame = intramurosRoleIsGame(row);
    const hasResult = intramurosRoleHasResult(row);
    const isConflict = (physicalCounts.get(intramurosRolePhysicalKey(row))?.size || 0) > 1;
    const local = String(row.equipo_local || "").trim();
    const visitor = String(row.equipo_visitante || "").trim();
    const label = isGame ? `${local} vs ${visitor}` : local || visitor || row.torneo || "Reservación";
    const slotKey = intramurosRoleSlotKey(row) || `${row.fecha}|${row.hora}|${index}`;
    const encodedId = btoa(unescape(encodeURIComponent(slotKey))).replace(/=+$/, "");
    return {
      id: `intramuros-role-${encodedId}`,
      source: "intramuros-role",
      area: "intramuros",
      date: String(row.fecha || "").slice(0, 10),
      activity: label,
      tournament: row.torneo || "Sin torneo",
      responsible: "Intramuros",
      status: row.estatus_partido || (isGame ? "Programado" : "Reservado"),
      place: row.cancha || "Cancha pendiente",
      time: row.hora || "",
      week: row.semana || "",
      group: row.grupo || "",
      branch: row.rama || "",
      result: row.resultado || "",
      usageType: intramurosRoleType(row),
      calendarClass: isConflict ? "role-conflict" : hasResult ? "role-result" : isGame ? "role-programmed" : normalizeText(row.estatus_partido).includes("pendiente") ? "role-pending" : "role-reserved"
    };
  });
}

function intramurosRoleDay(row) {
  const value = String(row.fecha || "").trim();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Sin fecha" : date.toLocaleDateString("es-MX", { weekday: "long" });
}

function intramurosTournamentSummaries() {
  const participantRows = intramurosParticipantAnalyticsRows().filter(intramurosHasNamedTournament);
  const tournamentNames = Array.from(new Set([
    ...participantRows.map((row) => row.torneo),
    ...intramurosGameRoles.map((row) => row.torneo).filter((torneo) => canonicalIntramurosTournament(torneo) !== "Sin torneo")
  ].filter(Boolean))).sort((a, b) => a.localeCompare(b, "es-MX"));
  return tournamentNames.map((torneo) => {
    const participants = participantRows.filter((row) => row.torneo === torneo);
    const games = intramurosGameRoles.filter((row) => row.torneo === torneo && intramurosRoleIsGame(row));
    const withResult = games.filter(intramurosRoleHasResult).length;
    const branches = Array.from(new Set([...participants.map((row) => row.rama), ...games.map((row) => row.rama)].filter(Boolean)));
    const teams = new Set([...participants.map((row) => row.equipo), ...games.flatMap((row) => [row.equipo_local, row.equipo_visitante])].filter(Boolean));
    const uniqueParticipants = new Set(participants.map((row) => row.matricula).filter(Boolean));
    const progress = games.length ? Math.round((withResult / games.length) * 100) : 0;
    return {
      torneo,
      rama: branches.join(", ") || "Sin rama",
      totalParticipants: uniqueParticipants.size,
      totalRecords: participants.length,
      teams: teams.size,
      games: games.length,
      withResult,
      pending: Math.max(0, games.length - withResult),
      progress,
      status: games.length ? (progress >= 100 ? "Cerrado" : progress ? "En curso" : "Programado") : "Sin rol"
    };
  });
}

function renderIntramurosRolesDashboard() {
  const roles = intramurosGameRoles;
  const games = roles.filter(intramurosRoleIsGame);
  const reservations = roles.filter((row) => !intramurosRoleIsGame(row) && String(row.equipo_local || row.equipo_visitante || "").trim());
  const withResult = games.filter(intramurosRoleHasResult).length;
  const pending = Math.max(0, games.length - withResult);
  const activeTournaments = new Set(games.map((row) => row.torneo).filter(Boolean)).size;
  return `
    <section class="intramuros-roles-section">
      <div class="budget-table-heading">
        <div><p class="eyebrow">Fase 3</p><h3>Roles de Juego</h3></div>
        <span>${games.length.toLocaleString("es-MX")} juegos · ${reservations.length.toLocaleString("es-MX")} reservaciones</span>
      </div>
      <div class="upload-center-grid">
        <article class="upload-info-panel">
          <h3>📤 Cargar Roles de Juego</h3>
          <p>Lee roles semanales aunque vengan por bloques. Si un campo no se detecta, queda vacío y se reporta.</p>
          <div class="upload-required-list">
            <strong>Campos que intenta extraer</strong>
            ${["torneo", "semana", "fecha", "hora", "cancha", "grupo", "rama", "equipo_local", "equipo_visitante", "resultado", "observaciones", "estatus_partido"].map((field) => `<span>${field}</span>`).join("")}
          </div>
          <div class="upload-template-preview">
            <strong>Vista esperada</strong>
            <table>
              <thead><tr><th>Torneo</th><th>Fecha</th><th>Hora</th><th>Cancha</th><th>Local</th><th>Visitante</th></tr></thead>
              <tbody><tr><td>Fútbol 7</td><td>2026-08-17</td><td>18:00</td><td>Cancha 1</td><td>Equipo Azul</td><td>Equipo Blanco</td></tr></tbody>
            </table>
          </div>
          <button class="ghost-btn" type="button" data-download-intramuros-template="roles">Descargar plantilla de roles</button>
        </article>
        <article class="upload-drop-panel">
          <label class="upload-drop-zone" id="intramurosRolesUploadDrop">
            <input id="intramurosRolesFile" type="file" accept=".csv,.xlsx,.xls" hidden />
            <strong>${intramurosRolesImporting ? "Cargando roles..." : "Seleccionar Roles de Juego"}</strong>
            <span>Excel/CSV semanal de Omar</span>
            <em>No reemplaza roles anteriores</em>
          </label>
          ${renderIntramurosRolesUploadSummary()}
        </article>
      </div>
      <div class="upload-kpi-grid">
        <article><span>Total juegos programados</span><strong>${games.length.toLocaleString("es-MX")}</strong><em>con ambos equipos</em></article>
        <article><span>Juegos por semana</span><strong>${intramurosGroupCounts(games, "semana").length.toLocaleString("es-MX")}</strong><em>semanas</em></article>
        <article><span>Juegos por día</span><strong>${intramurosGroupCounts(games.map((row) => ({ day: intramurosRoleDay(row) })), "day").length.toLocaleString("es-MX")}</strong><em>días</em></article>
        <article><span>Juegos por cancha</span><strong>${new Set(games.map((row) => row.cancha).filter(Boolean)).size.toLocaleString("es-MX")}</strong><em>canchas</em></article>
        <article><span>Torneos activos con rol</span><strong>${activeTournaments.toLocaleString("es-MX")}</strong><em>torneos</em></article>
        <article><span>Con resultado</span><strong>${withResult.toLocaleString("es-MX")}</strong><em>${pending.toLocaleString("es-MX")} pendientes</em></article>
        <article><span>Reservaciones / eventos</span><strong>${reservations.length.toLocaleString("es-MX")}</strong><em>no cuentan como juego</em></article>
      </div>
      <div class="upload-chart-grid">
        ${renderUploadBars("Juegos por torneo", intramurosGroupCounts(games, "torneo"))}
        ${renderUploadBars("Juegos por semana", intramurosGroupCounts(games, "semana"))}
        ${renderUploadBars("Juegos por día de la semana", intramurosGroupCounts(games.map((row) => ({ day: intramurosRoleDay(row) })), "day"))}
        ${renderUploadBars("Uso de canchas", intramurosGroupCounts(games, "cancha"))}
        ${renderUploadBars("Resultado vs pendientes", [{ label: "Con resultado", value: withResult }, { label: "Pendientes", value: pending }])}
        ${renderUploadBars("Top torneos con más juegos", intramurosGroupCounts(games, "torneo").slice(0, 10))}
      </div>
      <div class="table-wrap intramuros-role-agenda">
        <div class="budget-table-heading"><div><p class="eyebrow">Agenda operativa</p><h3>Juegos y reservaciones detectadas</h3></div><span>${roles.length.toLocaleString("es-MX")} registros</span></div>
        <table><thead><tr><th>Fecha</th><th>Hora</th><th>Deporte</th><th>Cancha</th><th>Local / actividad</th><th>Visitante</th><th>Resultado</th><th>Estatus</th></tr></thead>
        <tbody>${roles.slice().sort((a, b) => `${a.fecha}|${a.hora}`.localeCompare(`${b.fecha}|${b.hora}`)).slice(0, 160).map((row) => `<tr><td>${escapeHtml(row.fecha)}</td><td>${escapeHtml(row.hora)}</td><td>${escapeHtml(row.torneo)}</td><td>${escapeHtml(row.cancha)}</td><td>${escapeHtml(row.equipo_local)}</td><td>${escapeHtml(row.equipo_visitante)}</td><td>${escapeHtml(row.resultado || "-")}</td><td><span class="role-status ${intramurosRoleIsGame(row) ? "game" : "reservation"}">${escapeHtml(row.estatus_partido)}</span></td></tr>`).join("") || `<tr><td colspan="8">El formato está listo. Cuando Omar capture equipos o reservaciones, aparecerán aquí.</td></tr>`}</tbody></table>
      </div>
    </section>
  `;
}

function intramurosOperationMetrics(row) {
  const teams = Number(row.equipos_varoniles || 0) + Number(row.equipos_femeniles || 0) + Number(row.equipos_mixtos || 0);
  const students = Number(row.alumnos_varonil || 0) + Number(row.alumnos_femenil || 0);
  const gamesProgrammed = Number(row.juegos_programados || 0);
  const gamesDone = Number(row.juegos_realizados || 0);
  const bajas = Number(row.bajas || 0);
  const effectiveness = gamesProgrammed ? Math.round((gamesDone / gamesProgrammed) * 1000) / 10 : 0;
  const retention = students ? Math.round(((students - bajas) / students) * 1000) / 10 : 0;
  return { teams, students, effectiveness, retention: Math.max(0, retention) };
}

function intramurosOperationSummary() {
  const manualTotals = intramurosOperationRows.reduce((acc, row) => {
    const metrics = intramurosOperationMetrics(row);
    acc.teams += metrics.teams;
    acc.students += metrics.students;
    acc.games += Number(row.juegos_programados || 0);
    acc.done += Number(row.juegos_realizados || 0);
    acc.bajas += Number(row.bajas || 0);
    if (normalizeText(row.estatus).includes("terminado")) acc.finished += 1;
    return acc;
  }, { teams: 0, students: 0, games: 0, done: 0, bajas: 0, finished: 0 });

  const participantStudents = new Set(
    intramurosParticipants.map((row) => normalizeMatricula(row.matricula)).filter(Boolean)
  ).size;
  const participantTeams = new Set();
  intramurosParticipants.forEach((row) => {
    const team = String(row.equipo || "").trim();
    if (team && normalizeText(team) !== "sin equipo") {
      participantTeams.add(`${normalizeText(row.torneo || "Sin torneo")}|${normalizeText(team)}`);
    }
  });
  intramurosGameRoles.forEach((row) => {
    [row.equipo_local, row.equipo_visitante].forEach((team) => {
      const cleanTeam = String(team || "").trim();
      if (cleanTeam) participantTeams.add(`${normalizeText(row.torneo || "Sin torneo")}|${normalizeText(cleanTeam)}`);
    });
  });

  const roleRows = intramurosGameRoles.filter(intramurosRoleIsGame);
  const roleGames = roleRows.length;
  const roleGamesDone = roleRows.filter(intramurosRoleHasResult).length;
  const totals = {
    teams: Math.max(manualTotals.teams, participantTeams.size),
    students: Math.max(manualTotals.students, participantStudents),
    games: Math.max(manualTotals.games, roleGames),
    done: Math.max(manualTotals.done, roleGamesDone),
    bajas: manualTotals.bajas,
    finished: manualTotals.finished,
    hasParticipantData: participantStudents > 0 || participantTeams.size > 0,
    hasRoleData: roleGames > 0
  };
  totals.done = Math.min(totals.done, totals.games);
  totals.effectiveness = totals.games ? Math.round((totals.done / totals.games) * 1000) / 10 : 0;
  totals.retention = totals.students ? Math.round(((totals.students - totals.bajas) / totals.students) * 1000) / 10 : 0;
  return totals;
}

function renderIntramurosOperationCell(row, field, type = "number") {
  const value = row[field] ?? "";
  if (field === "estatus") {
    return `
      <select class="intramuros-op-input" data-op-id="${row.id}" data-op-field="${field}">
        ${["En captura", "En curso", "Terminado", "Cancelado"].map((status) => `<option value="${status}" ${row.estatus === status ? "selected" : ""}>${status}</option>`).join("")}
      </select>
    `;
  }
  return `<input class="intramuros-op-input" data-op-id="${row.id}" data-op-field="${field}" type="${type}" min="0" value="${escapeHtml(value)}" />`;
}

function renderIntramurosOmarWorkspace() {
  const summary = intramurosOperationSummary();
  const automaticRows = intramurosTournamentSummaries().slice(0, 6);
  return `
    <section class="intramuros-omar-direct">
      <div class="budget-table-heading">
        <div>
          <p class="eyebrow">Mesa de trabajo de Omar</p>
          <h3>Control directo de torneos Intramuros</h3>
        </div>
        <span>${formatCount(intramurosOperationRows.length)} torneos capturados · ${intramurosOperationCloudAvailable ? "Supabase conectado" : "Modo local"}</span>
      </div>
      <div class="intramuros-op-kpis">
        <article><span>Equipos</span><strong>${formatCount(summary.teams)}</strong><em>${summary.hasParticipantData ? "participantes / roles" : "capturados"}</em></article>
        <article><span>Alumnos</span><strong>${formatCount(summary.students)}</strong><em>${summary.hasParticipantData ? "matrículas únicas" : "sin nombres"}</em></article>
        <article><span>Juegos prog.</span><strong>${formatCount(summary.games)}</strong><em>${summary.hasRoleData ? "roles cargados" : "planeados"}</em></article>
        <article><span>Juegos realizados</span><strong>${formatCount(summary.done)}</strong><em>${summary.hasRoleData ? "con resultado" : "avance"}</em></article>
        <article><span>% efectividad</span><strong>${summary.effectiveness}%</strong><em>realizados / prog.</em></article>
        <article><span>% retención</span><strong>${summary.retention}%</strong><em>alumnos - bajas registradas</em></article>
      </div>
      <div class="intramuros-op-form">
        <label>Tipo
          <select id="intramurosOpTipo">
            <option>Individual</option>
            <option>Conjunto</option>
            <option>Estudiantil</option>
            <option>Relámpago</option>
            <option>Selectivo</option>
          </select>
        </label>
        <label>Nombre del torneo
          <input id="intramurosOpTorneo" placeholder="Ej. Futbol soccer" />
        </label>
        <label>Periodo
          <input id="intramurosOpPeriodo" placeholder="Ej. Febrero - Junio 2026" />
        </label>
        <label>Estatus
          <select id="intramurosOpEstatus">
            <option>En captura</option>
            <option>En curso</option>
            <option>Terminado</option>
            <option>Cancelado</option>
          </select>
        </label>
        <button class="primary-btn" type="button" id="addIntramurosOperationRow">Agregar torneo</button>
      </div>
      <div class="table-wrap intramuros-op-table">
        <table>
          <thead>
            <tr>
              <th>Tipo</th><th>Nombre del torneo</th><th>Periodo</th><th>Eq. V</th><th>Eq. F</th><th>Eq. M</th><th>Total equipos</th><th>Alum. V</th><th>Alum. F</th><th>Total alumnos</th><th>Juegos prog.</th><th>Juegos realizados</th><th>% efectividad</th><th>Bajas</th><th>% retención</th><th>Estatus</th><th></th>
            </tr>
          </thead>
          <tbody>
            ${intramurosOperationRows.length ? intramurosOperationRows.map((row) => {
              const metrics = intramurosOperationMetrics(row);
              return `
                <tr>
                  <td>${renderIntramurosOperationCell(row, "tipo", "text")}</td>
                  <td>${renderIntramurosOperationCell(row, "torneo", "text")}</td>
                  <td>${renderIntramurosOperationCell(row, "periodo", "text")}</td>
                  <td>${renderIntramurosOperationCell(row, "equipos_varoniles")}</td>
                  <td>${renderIntramurosOperationCell(row, "equipos_femeniles")}</td>
                  <td>${renderIntramurosOperationCell(row, "equipos_mixtos")}</td>
                  <td><strong>${formatCount(metrics.teams)}</strong></td>
                  <td>${renderIntramurosOperationCell(row, "alumnos_varonil")}</td>
                  <td>${renderIntramurosOperationCell(row, "alumnos_femenil")}</td>
                  <td><strong>${formatCount(metrics.students)}</strong></td>
                  <td>${renderIntramurosOperationCell(row, "juegos_programados")}</td>
                  <td>${renderIntramurosOperationCell(row, "juegos_realizados")}</td>
                  <td><strong>${metrics.effectiveness}%</strong></td>
                  <td>${renderIntramurosOperationCell(row, "bajas")}</td>
                  <td><strong>${metrics.retention}%</strong></td>
                  <td>${renderIntramurosOperationCell(row, "estatus")}</td>
                  <td><button class="danger-btn" type="button" data-delete-intramuros-op="${row.id}">Borrar</button></td>
                </tr>
              `;
            }).join("") : `<tr><td colspan="17">Aún no hay torneos capturados directo en WellSync. Agrega el primer torneo arriba.</td></tr>`}
          </tbody>
        </table>
      </div>
      <div class="intramuros-op-note">
        <strong>Resumen automático conectado:</strong>
        ${automaticRows.length ? automaticRows.map((row) => `<span>${escapeHtml(row.torneo)}: ${formatCount(row.totalParticipants)} participantes, ${formatCount(row.games)} juegos</span>`).join("") : `<span>Cuando subas participantes y roles, aquí aparecerá el cruce automático por torneo.</span>`}
      </div>
    </section>
  `;
}

function renderTournamentCards() {
  const summaries = intramurosTournamentSummaries();
  return `
    <section class="intramuros-tournament-section">
      <div class="budget-table-heading">
        <div><p class="eyebrow">Fase 4</p><h3>Expediente del Torneo</h3></div>
        <button class="secondary-btn compact-action" type="button" disabled>Generar Archivo Final</button>
      </div>
      <div class="intramuros-tournament-grid">
        ${summaries.length ? summaries.map((row) => `
          <article class="intramuros-tournament-card">
            <div><h3>${escapeHtml(row.torneo)}</h3><span>${escapeHtml(row.status)}</span></div>
            <p>${escapeHtml(row.rama)}</p>
            <dl>
              <div><dt>Participantes</dt><dd>${row.totalParticipants}</dd></div>
              <div><dt>Equipos</dt><dd>${row.teams}</dd></div>
              <div><dt>Juegos</dt><dd>${row.games}</dd></div>
              <div><dt>Con resultado</dt><dd>${row.withResult}</dd></div>
            </dl>
            <div class="budget-area-track"><span style="width:${row.progress}%"></span></div>
            <strong>${row.progress}% avance</strong>
            <button class="primary-btn compact-action" type="button" data-open-intramuros-tournament="${escapeHtml(row.torneo)}">Abrir expediente</button>
          </article>
        `).join("") : `<div class="upload-empty">Carga participantes o roles para ver expedientes.</div>`}
      </div>
    </section>
  `;
}

function renderTournamentExpediente() {
  if (!selectedIntramurosTournament) return "";
  const torneo = selectedIntramurosTournament;
  const participants = intramurosParticipantAnalyticsRows().filter((row) => row.torneo === torneo);
  const games = intramurosGameRoles.filter((row) => row.torneo === torneo);
  const summary = intramurosTournamentSummaries().find((row) => row.torneo === torneo) || {};
  const withResult = games.filter(intramurosRoleHasResult);
  const pending = games.filter((row) => !intramurosRoleHasResult(row));
  const genderRows = intramurosGroupCounts(participants, "genero", true);
  const teamCount = Math.max(1, new Set(participants.map((row) => row.equipo).filter(Boolean)).size);
  const participantsPerTeam = Math.round((new Set(participants.map((row) => row.matricula).filter(Boolean)).size / teamCount) * 10) / 10;
  return `
    <section class="intramuros-expediente">
      <div class="budget-table-heading">
        <div><p class="eyebrow">Expediente activo</p><h3>${escapeHtml(torneo)}</h3></div>
        <button class="ghost-btn compact-action" type="button" data-close-intramuros-tournament>Cerrar expediente</button>
      </div>
      <div class="exec-grid three">
        <article class="exec-panel"><h3>General</h3><p>Torneo: ${escapeHtml(torneo)}</p><p>Tipo de actividad: ${escapeHtml(participants[0]?.tipo_actividad || "Sin dato")}</p><p>Rama: ${escapeHtml(summary.rama || "Sin rama")}</p><p>Periodo: ${escapeHtml(participants[0]?.periodo || games[0]?.periodo || "Sin periodo")}</p><p>Estado: ${escapeHtml(summary.status || "Sin estado")}</p><p>Responsable: Sin dato</p><p>Observaciones: ${escapeHtml(games.find((row) => row.observaciones)?.observaciones || "Sin dato")}</p></article>
        <article class="exec-panel"><h3>Participantes</h3>${renderUploadBars("Programas principales", intramurosGroupCounts(participants, "programa", true).slice(0, 6))}</article>
        <article class="exec-panel"><h3>Indicadores</h3><p>% avance: ${summary.progress || 0}%</p><p>Participantes por equipo: ${participantsPerTeam}</p><p>Equipos promedio por rama: ${summary.teams || 0}</p>${renderUploadBars("Género", genderRows)}</article>
      </div>
      <div class="upload-kpi-grid">
        <article><span>Participantes únicos</span><strong>${(summary.totalParticipants || 0).toLocaleString("es-MX")}</strong></article>
        <article><span>Total registros</span><strong>${participants.length.toLocaleString("es-MX")}</strong></article>
        <article><span>Equipos</span><strong>${(summary.teams || 0).toLocaleString("es-MX")}</strong></article>
        <article><span>Juegos programados</span><strong>${games.length.toLocaleString("es-MX")}</strong></article>
        <article><span>Juegos con resultado</span><strong>${withResult.length.toLocaleString("es-MX")}</strong></article>
        <article><span>Juegos pendientes</span><strong>${pending.length.toLocaleString("es-MX")}</strong></article>
      </div>
      <div class="exec-grid two">
        <article class="exec-panel"><h3>Próximos juegos</h3>${renderUploadBars("Pendientes", pending.slice(0, 8).map((row) => ({ label: `${row.fecha || "Sin fecha"} ${row.equipo_local || ""} vs ${row.equipo_visitante || ""}`, value: 1 })))}</article>
        <article class="exec-panel"><h3>Últimos resultados</h3>${renderUploadBars("Resultados", withResult.slice(0, 8).map((row) => ({ label: `${row.equipo_local || ""} vs ${row.equipo_visitante || ""}: ${row.resultado || row.estatus_partido}`, value: 1 })))}</article>
      </div>
      <div class="exec-grid two">
        <article class="exec-panel"><h3>Finanzas / Operación</h3><div class="upload-empty">Pendiente de conectar con costos / orden de compra.</div></article>
        <article class="exec-panel"><h3>Reportes</h3><button class="secondary-btn" type="button" disabled>Generar Archivo Final</button><p>Preparado para futura fase.</p></article>
      </div>
      <div class="table-wrap">
        <div class="budget-table-heading"><div><p class="eyebrow">Participantes</p><h3>Sin nombres ni apellidos</h3></div><span>${participants.length} registros</span></div>
        <table><thead><tr><th>Matrícula</th><th>Género</th><th>Programa</th><th>Escuela</th><th>Rama</th><th>Equipo</th></tr></thead>
        <tbody>${participants.slice(0, 120).map((row) => `<tr><td>${escapeHtml(row.matricula)}</td><td>${escapeHtml(row.genero)}</td><td>${escapeHtml(row.programa)}</td><td>${escapeHtml(row.escuela)}</td><td>${escapeHtml(row.rama)}</td><td>${escapeHtml(row.equipo)}</td></tr>`).join("") || `<tr><td colspan="6">Sin participantes cargados para este torneo.</td></tr>`}</tbody></table>
      </div>
    </section>
  `;
}

function renderIntramurosDashboard() {
  const rows = filteredIntramurosParticipants();
  const tournaments = new Set(rows.map((row) => row.torneo).filter(Boolean)).size;
  const men = rows.filter((row) => normalizeText(row.genero).includes("masculino") || normalizeText(row.genero) === "hombre").length;
  const women = rows.filter((row) => normalizeText(row.genero).includes("femenino") || normalizeText(row.genero) === "mujer").length;
  const schools = new Set(rows.map((row) => row.escuela).filter(Boolean)).size;
  const tableRows = rows.slice(0, 250);
  return `
    <section class="upload-center intramuros-dashboard">
      ${renderIntramurosOmarWorkspace()}

      ${renderPlanningAreaDashboard(
        areas.find((item) => item.id === "intramuros") || { id: "intramuros", name: "Intramuros" },
        planningCalendarRows,
        planningCalendarLoaded,
        planningCalendarError,
        undefined,
        null,
        {
          compactHeader: true,
          extraActivities: intramurosRoleCalendarActivities(),
          layer: intramurosCalendarLayer,
          showLayerSelector: true
        }
      )}

      <div class="intramuros-filter-grid">
        ${renderIntramurosFilter("period", "Periodo", intramurosFilterOptions("periodo"))}
        ${renderIntramurosFilter("tournament", "Torneo", intramurosFilterOptions("torneo"))}
        ${renderIntramurosFilter("branch", "Rama", intramurosFilterOptions("rama"))}
        ${renderIntramurosFilter("school", "Escuela", intramurosFilterOptions("escuela"))}
        ${renderIntramurosFilter("gender", "Género", intramurosFilterOptions("genero"))}
        ${renderIntramurosFilter("program", "Programa", intramurosFilterOptions("programa"))}
        <label>Buscar
          <input id="intramurosSearch" value="${escapeHtml(intramurosFilters.search)}" placeholder="Matrícula, torneo, equipo..." />
        </label>
      </div>

      <div class="upload-kpi-grid">
        <article><span>Total torneos</span><strong>${tournaments.toLocaleString("es-MX")}</strong><em>activos</em></article>
        <article><span>Total hombres</span><strong>${men.toLocaleString("es-MX")}</strong><em>registros</em></article>
        <article><span>Total mujeres</span><strong>${women.toLocaleString("es-MX")}</strong><em>registros</em></article>
        <article><span>Escuelas representadas</span><strong>${schools.toLocaleString("es-MX")}</strong><em>filtradas</em></article>
      </div>

      ${renderIntramurosExecutiveCharts(rows)}

      ${renderTournamentCards()}
      ${renderTournamentExpediente()}

      <div class="table-wrap">
        <div class="budget-table-heading">
          <div>
            <p class="eyebrow">Participantes Intramuros</p>
            <h3>Tabla sin nombres ni apellidos</h3>
          </div>
          <span>${rows.length.toLocaleString("es-MX")} registros filtrados</span>
        </div>
        <table>
          <thead><tr><th>Matrícula</th><th>Género</th><th>Programa</th><th>Modalidad</th><th>Escuela</th><th>Tipo de actividad</th><th>Torneo</th><th>Rama</th><th>Equipo</th></tr></thead>
          <tbody>
            ${tableRows.length ? tableRows.map((row) => `
              <tr>
                <td>${escapeHtml(row.matricula)}</td>
                <td>${escapeHtml(row.genero)}</td>
                <td>${escapeHtml(row.programa)}</td>
                <td>${escapeHtml(row.modalidad)}</td>
                <td>${escapeHtml(row.escuela)}</td>
                <td>${escapeHtml(row.tipo_actividad)}</td>
                <td>${escapeHtml(row.torneo)}</td>
                <td>${escapeHtml(row.rama)}</td>
                <td>${escapeHtml(row.equipo)}</td>
              </tr>
            `).join("") : `<tr><td colspan="9">Sin participantes para los filtros seleccionados.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function presentationWeekKey(date = new Date()) {
  const first = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - first) / 86400000);
  return `${date.getFullYear()}-W${String(Math.ceil((days + first.getDay() + 1) / 7)).padStart(2, "0")}`;
}

function loadExecutivePresentationLocalNotes() {
  try {
    return JSON.parse(localStorage.getItem(EXECUTIVE_PRESENTATION_STORAGE_KEY) || "{}") || {};
  } catch {
    return {};
  }
}

function saveExecutivePresentationLocalNotes(notes = executivePresentationNotes) {
  localStorage.setItem(EXECUTIVE_PRESENTATION_STORAGE_KEY, JSON.stringify(notes));
}

function presentationNotesForCurrentWeek() {
  const key = presentationWeekKey();
  return { ...(executivePresentationNotes[key] || {}), ...(executivePresentationNotes.__feedback_tracking || {}) };
}

function presentationTextItems(value) {
  return String(value || "").split(/\n+/).map((item) => item.trim()).filter(Boolean);
}

function presentationPriorityItems(notes) {
  const defaults = [
    "Planeación: Confirmar calendario y responsables del siguiente bloque.",
    "Boletos de concierto: Definir entrega, control y seguimiento operativo.",
    "Desalojo de casillero: Comunicar fechas clave y validar espacios liberados.",
    "Indicadores: Enviar archivos y lecturas de cierre por área.",
    "Evaluaciones: Compartir retroalimentación constructiva y acuerdos."
  ];
  const icons = ["✓", "▦", "▤", "▥", "★"];
  const tones = ["blue", "teal", "green", "purple", "navy"];
  const lines = presentationTextItems(notes.priorities).length ? presentationTextItems(notes.priorities) : defaults;
  return lines.slice(0, 5).map((line, index) => {
    const [rawTitle, ...rest] = line.split(":");
    const hasTitle = rest.length > 0;
    const title = (hasTitle ? rawTitle : line).trim();
    const text = (hasTitle ? rest.join(":") : "").trim();
    return {
      number: index + 1,
      title: title || `Prioridad ${index + 1}`,
      text: text || "Pendiente de definir detalle operativo.",
      icon: icons[index % icons.length],
      tone: tones[index % tones.length]
    };
  });
}

function renderPresentationPriorities(notes) {
  const items = presentationPriorityItems(notes);
  return `
    <div class="executive-presentation-priority-board">
      <div class="executive-presentation-priority-intro">
        <span>Bloque operativo</span>
        <strong>Enfocados en mejorar nuestra operación y experiencia</strong>
      </div>
      <div class="executive-presentation-priority-grid">
        ${items.map((item) => `
          <article class="executive-presentation-priority-card ${item.tone}">
            <span class="executive-presentation-priority-number">${item.number}</span>
            <span class="executive-presentation-priority-icon" aria-hidden="true">${escapeHtml(item.icon)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function presentationInventoryDefaults() {
  return [
    "Bodega Tenis",
    "Bodega de Intramuros",
    "Bodega de Fitness",
    "Bodega de Escalada",
    "Bodega de Yoga",
    "Bodega de CrossFit"
  ].map((name) => ({ name, comment: "", images: ["", ""] }));
}

function presentationInventoryItems(value) {
  let parsed = [];
  try {
    parsed = JSON.parse(String(value || "[]"));
  } catch {
    parsed = [];
  }
  const defaults = presentationInventoryDefaults();
  return defaults.map((fallback, index) => {
    const item = Array.isArray(parsed) ? parsed[index] || {} : {};
    const images = Array.isArray(item.images) ? item.images.slice(0, 2) : [];
    while (images.length < 2) images.push("");
    return {
      name: String(item.name || fallback.name).trim(),
      comment: String(item.comment || "").trim(),
      images: images.map((image) => String(image || ""))
    };
  });
}

function presentationInventoryForNotes(notes = presentationNotesForCurrentWeek()) {
  return presentationInventoryItems(notes.inventory_gallery);
}

function renderPresentationInventory(notes) {
  const items = presentationInventoryForNotes(notes);
  return `<div class="executive-presentation-inventory-board">${items.map((item, index) => `
    <article class="executive-presentation-inventory-card">
      <header><span>${index + 1}</span><strong>${escapeHtml(item.name)}</strong></header>
      <div class="executive-presentation-inventory-photos">
        ${item.images.map((image, imageIndex) => image
          ? `<img src="${escapeHtml(image)}" alt="${escapeHtml(`${item.name}, foto ${imageIndex + 1}`)}" />`
          : `<span><i data-lucide="image"></i><em>Foto ${imageIndex + 1}</em></span>`).join("")}
      </div>
      <p><strong>Comentarios:</strong> ${escapeHtml(item.comment || "Sin comentarios capturados.")}</p>
    </article>
  `).join("")}</div>`;
}

function renderPresentationInventoryEditor(notes) {
  const items = presentationInventoryDraft || presentationInventoryForNotes(notes);
  presentationInventoryDraft = items.map((item) => ({ ...item, images: [...item.images] }));
  return `<div class="executive-presentation-inventory-editor">
    <textarea name="inventory_gallery" id="presentationInventoryValue" hidden>${escapeHtml(JSON.stringify(presentationInventoryDraft))}</textarea>
    ${presentationInventoryDraft.map((item, index) => `
      <fieldset>
        <legend><span>${index + 1}</span> Bodega</legend>
        <label>Nombre<input type="text" value="${escapeHtml(item.name)}" data-inventory-name="${index}" maxlength="60" /></label>
        <div class="executive-presentation-inventory-editor-photos">
          ${item.images.map((image, imageIndex) => `
            <div data-inventory-preview="${index}-${imageIndex}">
              ${image ? `<img src="${escapeHtml(image)}" alt="Vista previa" />` : `<span><i data-lucide="image-plus"></i>Foto ${imageIndex + 1}</span>`}
              <label class="ghost-btn">Seleccionar<input type="file" accept="image/jpeg,image/png,image/webp" data-inventory-image="${index}-${imageIndex}" /></label>
              ${image ? `<button class="ghost-btn danger-text" type="button" data-inventory-remove="${index}-${imageIndex}">Quitar</button>` : ""}
            </div>
          `).join("")}
        </div>
        <label>Comentarios<textarea rows="2" data-inventory-comment="${index}" maxlength="180">${escapeHtml(item.comment)}</textarea></label>
      </fieldset>
    `).join("")}
  </div>`;
}

function syncPresentationInventoryValue() {
  const target = $("#presentationInventoryValue");
  if (target && presentationInventoryDraft) target.value = JSON.stringify(presentationInventoryDraft);
}

async function preparePresentationInventoryImage(file) {
  if (!file?.type?.startsWith("image/")) throw new Error("Selecciona una imagen JPG, PNG o WEBP");
  if (file.size > 12 * 1024 * 1024) throw new Error("La imagen supera el límite de 12 MB");
  const bitmap = await createImageBitmap(file);
  const width = 720;
  const height = 450;
  const scale = Math.max(width / bitmap.width, height / bitmap.height);
  const drawWidth = bitmap.width * scale;
  const drawHeight = bitmap.height * scale;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.drawImage(bitmap, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
  bitmap.close();
  return canvas.toDataURL("image/jpeg", 0.72);
}

function presentationEmptyState(label = "Sin información disponible") {
  return `<div class="executive-presentation-empty"><i data-lucide="database-zap"></i><strong>${escapeHtml(label)}</strong><span>La diapositiva se actualizará cuando exista una fuente conectada.</span></div>`;
}

function presentationMetric(label, value, note = "") {
  const shown = value === null || value === undefined || value === "" ? "Sin información disponible" : value;
  return `<article class="executive-presentation-metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(shown))}</strong>${note ? `<em>${escapeHtml(note)}</em>` : ""}</article>`;
}

function schoolCalendarProgressSegments(referenceDate = new Date()) {
  const canvasWidth = 1078;
  const canvasHeight = 732;
  const rowHeight = 24.7;
  const months = [
    [2026, 5, 20, 197, 156], [2026, 6, 228, 206, 156], [2026, 7, 446, 217, 156],
    [2026, 8, 674, 185, 156], [2026, 9, 871, 192, 156], [2026, 10, 20, 197, 341],
    [2026, 11, 228, 206, 341], [2027, 0, 446, 217, 341], [2027, 1, 674, 185, 341],
    [2027, 2, 871, 192, 341], [2027, 3, 20, 197, 527], [2027, 4, 228, 206, 527],
    [2027, 5, 446, 217, 527], [2027, 6, 674, 185, 527]
  ];
  const today = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate());
  const segments = [];
  months.forEach(([year, month, x, width, y]) => {
    const monthStart = new Date(year, month, 1);
    if (today <= monthStart) return;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const pastThrough = today.getFullYear() === year && today.getMonth() === month
      ? Math.min(daysInMonth, today.getDate() - 1)
      : daysInMonth;
    if (pastThrough < 1) return;
    const firstColumn = (monthStart.getDay() + 6) % 7;
    const rows = new Map();
    for (let day = 1; day <= pastThrough; day += 1) {
      const cellIndex = firstColumn + day - 1;
      const row = Math.floor(cellIndex / 7);
      const column = cellIndex % 7;
      if (!rows.has(row)) rows.set(row, { start: column, end: column });
      else rows.get(row).end = column;
    }
    const columnWidth = width / 7;
    rows.forEach(({ start, end }, row) => {
      const left = x + start * columnWidth + 2;
      const lineWidth = (end - start + 1) * columnWidth - 4;
      const top = y + row * rowHeight + rowHeight * 0.62;
      segments.push({
        left: left / canvasWidth * 100,
        top: top / canvasHeight * 100,
        width: lineWidth / canvasWidth * 100
      });
    });
  });
  return segments;
}

function renderPresentationSchoolCalendar() {
  const segments = schoolCalendarProgressSegments();
  const ephemerides = [
    { day: "01", title: "Día del Ingeniero", scope: "México", tone: "blue" },
    { day: "11", title: "Día Mundial de la Población", scope: "ONU", tone: "teal" },
    { day: "12", title: "Día del Abogado", scope: "México", tone: "gold" },
    { day: "15", title: "Habilidades de la Juventud", scope: "ONU", tone: "purple" },
    { day: "18", title: "Aniversario luctuoso de Benito Juárez", scope: "México", tone: "green" },
    { day: "18", title: "Día Internacional de Nelson Mandela", scope: "ONU", tone: "navy" },
    { day: "20", title: "Día Mundial del Ajedrez", scope: "ONU", tone: "blue" },
    { day: "25", title: "Mujeres y Niñas Afrodescendientes", scope: "ONU", tone: "pink" },
    { day: "26", title: "Conservación de los Manglares", scope: "UNESCO", tone: "teal" },
    { day: "28", title: "Día Mundial contra la Hepatitis", scope: "OMS", tone: "gold" },
    { day: "30", title: "Día Internacional de la Amistad", scope: "ONU", tone: "purple" },
    { day: "30", title: "Día Mundial contra la Trata", scope: "ONU", tone: "green" }
  ];
  return `<div class="executive-presentation-school-calendar">
    <div class="executive-presentation-school-calendar-sheet">
      <img src="./assets/calendario-escolar-2026-2027.png" alt="Calendario escolar 2026-2027" />
      <div class="executive-presentation-school-calendar-progress" aria-hidden="true">
        ${segments.map((segment) => `<span style="left:${segment.left.toFixed(3)}%;top:${segment.top.toFixed(3)}%;width:${segment.width.toFixed(3)}%"></span>`).join("")}
      </div>
    </div>
    <aside class="executive-presentation-ephemerides" aria-label="Efemérides de julio">
      <header><span>Efemérides del mes</span><strong>Julio 2026</strong></header>
      <div class="executive-presentation-ephemerides-list">
        ${ephemerides.map((item) => `<article><time class="${item.tone}">${item.day}</time><div><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.scope)}</span></div></article>`).join("")}
      </div>
    </aside>
  </div>`;
}

function executivePresentationBudgetData() {
  const areasForPeriod = budgetAreaPlans.filter((row) => !row.period || row.period === budgetFilters.period);
  const summaries = areasForPeriod.map((row) => budgetAreaSummary(row.area));
  const assigned = summaries.reduce((sum, row) => sum + Number(row.assigned || 0), 0);
  const spent = summaries.reduce((sum, row) => sum + Number(row.spent || 0), 0);
  const committed = summaries.reduce((sum, row) => sum + Number(row.committed || 0), 0);
  return { summaries, assigned, spent, committed, available: Math.max(0, assigned - spent - committed) };
}

function executivePresentationLatestPurchases(summaries = executivePresentationBudgetData().summaries) {
  return summaries.slice(0, 6).map((summary) => {
    const rows = budgetRequestRows
      .filter((row) => row.period === budgetFilters.period && row.area === summary.area && row.status !== "rechazado")
      .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
    return { area: summary.area, owner: summary.owner || "Sin responsable", count: rows.length, purchase: rows[0] || null };
  });
}

function budgetPresentationTone(index) {
  return ["blue", "green", "gold", "purple", "teal", "navy"][index % 6];
}

function renderExecutivePresentationBudget(budget, notes) {
  if (!budget.assigned) return presentationEmptyState();
  const usage = Math.round(((budget.spent + budget.committed) / budget.assigned) * 100);
  const latest = executivePresentationLatestPurchases(budget.summaries);
  return `<div class="executive-presentation-budget">
    <div class="executive-presentation-budget-summary">
      ${presentationMetric("Asignado", money(budget.assigned), "Presupuesto del periodo")}
      ${presentationMetric("Ejercido", money(budget.spent), `${Math.round(budget.spent / budget.assigned * 100)}% del total`)}
      ${presentationMetric("Comprometido", money(budget.committed), `${Math.round(budget.committed / budget.assigned * 100)}% del total`)}
      ${presentationMetric("Disponible", money(budget.available), `${Math.max(0, 100 - usage)}% disponible`)}
    </div>
    <div class="executive-presentation-budget-global"><span>Uso global</span><b><i style="width:${Math.min(100, usage)}%"></i></b><strong>${usage}%</strong></div>
    <div class="executive-presentation-budget-middle">
      <section><h3>Detalle por área</h3>${budget.summaries.slice(0, 6).map((row, index) => {
        const used = row.assigned ? Math.min(100, Math.round((row.spent + row.committed) / row.assigned * 100)) : 0;
        return `<div class="executive-presentation-budget-area ${budgetPresentationTone(index)}"><span>${escapeHtml(budgetAreaLabel(row.area))}</span><b><i style="width:${used}%"></i></b><strong>${used}%</strong><em>${money(row.available)}</em></div>`;
      }).join("")}</section>
      <aside><h3>Registros por responsable</h3>${latest.map((row, index) => `<div class="executive-presentation-budget-owner ${budgetPresentationTone(index)}"><span>${escapeHtml(row.owner)}</span><b><i style="width:${Math.min(100, row.count * 12)}%"></i></b><strong>${row.count}</strong></div>`).join("")}</aside>
    </div>
    <div class="executive-presentation-budget-latest">${latest.map((row, index) => `<article class="${budgetPresentationTone(index)}"><strong>${escapeHtml(budgetAreaLabel(row.area))}</strong>${row.purchase ? `<span>${escapeHtml(row.purchase.concept || "Sin concepto")}</span><em>${escapeHtml(row.purchase.date || "Sin fecha")} · ${money(row.purchase.amount || 0)}</em>` : `<span>Sin compras registradas</span><em>${escapeHtml(budgetFilters.period)}</em>`}</article>`).join("")}</div>
    ${presentationManualNote(notes, "comment_budget")}
  </div>`;
}

function executivePresentationActivities() {
  return planningCalendarRows.map((row, index) => normalizePlanningCalendarRow(row, index)).filter((row) => row.activity && row.date)
    .sort((a, b) => String(a.date).localeCompare(String(b.date))).slice(0, 7);
}

function executivePresentationScheduleSummary() {
  const rows = scheduleMasterRows();
  const byDay = scheduleDays.map((day) => ({ day, value: rows.filter((row) => row.day === day).length }));
  return { rows, byDay, teachers: new Set(rows.map((row) => row.professor).filter(Boolean)).size, installations: new Set(rows.map((row) => row.installation).filter(Boolean)).size };
}

function executivePresentationPerformanceData() {
  const teachers = classDashboardMetrics().teachers || [];
  const ranked = teachers.filter((row) => Number.isFinite(Number(row.approvedRate)) && Number(row.total || 0) > 0);
  return {
    highlights: [...ranked].sort((a, b) => Number(b.approvedRate) - Number(a.approvedRate)).slice(0, 3),
    improving: [...ranked].sort((a, b) => Number(a.approvedRate) - Number(b.approvedRate)).slice(0, 3)
  };
}

function presentationCollaboratorProfile(row) {
  const nomina = String(row.Nomina || row.nomina || "").trim();
  const name = String(row.Colaboradores || row.full_name || row.nombre_completo || "Sin nombre").trim();
  return {
    nomina,
    name,
    role: String(row.Puesto || row.role || "Sin dato").trim(),
    photoUrl: row.__photoUrl || row.photo_url || "",
    initials: collaboratorInitials(name)
  };
}

function presentationSelectedCollaborators(notes, key) {
  const selected = String(notes[key] || "").split(",").map((value) => value.trim()).filter(Boolean).slice(0, MAX_PRESENTATION_SELECTION);
  const profiles = new Map(collaboratorRows().map((row) => {
    const profile = presentationCollaboratorProfile(row);
    return [collaboratorMatchKey(profile.nomina), profile];
  }));
  return selected.map((nomina) => profiles.get(collaboratorMatchKey(nomina))).filter(Boolean);
}

function renderPresentationPortraitGroup(title, tone, profiles) {
  const slots = [...profiles.slice(0, MAX_PRESENTATION_SELECTION)];
  while (slots.length < MAX_PRESENTATION_SELECTION) slots.push(null);
  return `<section class="executive-presentation-portrait-group ${tone}"><h3>${escapeHtml(title)}</h3><div class="executive-presentation-portrait-grid">${slots.map((profile) => profile ? `<article>${profile.photoUrl ? `<img src="${escapeHtml(profile.photoUrl)}" alt="Foto de ${escapeHtml(profile.name)}" />` : `<span>${escapeHtml(profile.initials)}</span>`}<strong>${escapeHtml(profile.name)}</strong><em>${escapeHtml(profile.role)}</em></article>` : `<article class="empty"><span>+</span><strong>Sin seleccionar</strong><em>Editable</em></article>`).join("")}</div></section>`;
}

function renderPresentationCollaboratorPicker(key, label, notes) {
  const selected = new Set(String(notes[key] || "").split(",").map((value) => value.trim()).filter(Boolean));
  return `<fieldset class="executive-presentation-collaborator-picker"><legend>${escapeHtml(label)} <span>Máximo ${MAX_PRESENTATION_SELECTION}</span></legend><div>${collaboratorRows().map((row) => {
    const profile = presentationCollaboratorProfile(row);
    return `<label class="${selected.has(profile.nomina) ? "selected" : ""}"><input type="checkbox" name="${escapeHtml(key)}" value="${escapeHtml(profile.nomina)}" data-presentation-collaborator="${escapeHtml(key)}" ${selected.has(profile.nomina) ? "checked" : ""} />${profile.photoUrl ? `<img src="${escapeHtml(profile.photoUrl)}" alt="" />` : `<i>${escapeHtml(profile.initials)}</i>`}<span><strong>${escapeHtml(profile.name)}</strong><em>${escapeHtml(profile.nomina)} · ${escapeHtml(profile.role)}</em></span></label>`;
  }).join("")}</div></fieldset>`;
}

function presentationFeedbackRecords(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) return { ...value };
  try {
    const parsed = JSON.parse(String(value || "{}"));
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function presentationFeedbackCollaborators(notes) {
  const records = presentationFeedbackRecords(notes.feedback_records);
  const profiles = new Map();
  collaboratorRows().forEach((row) => {
    const profile = presentationCollaboratorProfile(row);
    if (!profile.nomina) return;
    const key = collaboratorMatchKey(profile.nomina);
    if (!profiles.has(key)) profiles.set(key, { ...profile, coordinator: String(row.Coordinador || "Sin coordinador").trim() });
  });
  return [...profiles.values()]
    .sort((a, b) => a.name.localeCompare(b.name, "es"))
    .map((profile) => {
      const record = records[profile.nomina] || records[collaboratorMatchKey(profile.nomina)] || {};
      return {
        ...profile,
        done: Boolean(record.done),
        result: String(record.result || "").trim(),
        note: String(record.note || "").trim(),
        completedAt: String(record.completedAt || "").trim()
      };
    });
}

function presentationFeedbackResult(result) {
  const normalized = String(result || "").toLowerCase();
  if (normalized === "positiva") return { label: "Positiva", tone: "positive" };
  if (normalized === "acuerdos") return { label: "Con acuerdos", tone: "agreements" };
  if (normalized === "seguimiento") return { label: "Seguimiento", tone: "follow-up" };
  return { label: "Realizada", tone: "completed" };
}

function presentationFeedbackDeadline(value) {
  const raw = String(value || "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) return "Por definir";
  return new Date(`${raw}T12:00:00`).toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" });
}

function renderPresentationFeedback(notes) {
  const collaborators = presentationFeedbackCollaborators(notes);
  if (!collaborators.length) return presentationEmptyState("Sin colaboradores registrados");
  const completed = collaborators.filter((item) => item.done).length;
  const pending = collaborators.length - completed;
  const progress = Math.round(completed / collaborators.length * 100);
  const columns = collaborators.length > 64 ? 5 : 4;
  const rows = Math.ceil(collaborators.length / columns);
  return `<div class="executive-presentation-feedback-board">
    <div class="executive-presentation-feedback-summary">
      <div><span>Avance general</span><strong>${progress}%</strong><b><i style="width:${progress}%"></i></b></div>
      <div><span>Retroalimentaciones</span><strong>${completed} <em>de ${collaborators.length}</em></strong></div>
      <div><span>Pendientes</span><strong>${pending}</strong></div>
      <div class="deadline"><span>Fecha límite</span><strong>${escapeHtml(presentationFeedbackDeadline(notes.feedback_deadline))}</strong></div>
    </div>
    <div class="executive-presentation-feedback-grid ${collaborators.length > 64 ? "extra-dense" : collaborators.length > 44 ? "dense" : ""}" style="grid-template-rows:repeat(${rows},minmax(0,1fr))">
      ${collaborators.map((item) => {
        const result = presentationFeedbackResult(item.result);
        return `<article class="${item.done ? `done ${result.tone}` : "pending"}"><span>${item.done ? "✓" : ""}</span><div><strong>${escapeHtml(item.name)}</strong><em>${item.done ? escapeHtml(result.label) : "Pendiente"}</em></div></article>`;
      }).join("")}
    </div>
  </div>`;
}

function renderPresentationFeedbackEditor(notes) {
  if (!presentationFeedbackDraft) presentationFeedbackDraft = presentationFeedbackRecords(notes.feedback_records);
  const collaborators = presentationFeedbackCollaborators({ ...notes, feedback_records: presentationFeedbackDraft });
  return `<div class="executive-presentation-feedback-editor">
    <div class="executive-presentation-feedback-editor-tools">
      <label>Fecha límite de retroalimentación<input type="date" name="feedback_deadline" value="${escapeHtml(notes.feedback_deadline || "")}" /></label>
      <label>Buscar colaborador<input type="search" id="presentationFeedbackSearch" placeholder="Nombre, nómina o coordinador" /></label>
      <div><span>Avance actual</span><strong>${collaborators.filter((item) => item.done).length} de ${collaborators.length}</strong></div>
    </div>
    <input type="hidden" id="presentationFeedbackRecords" name="feedback_records" value="${escapeHtml(JSON.stringify(presentationFeedbackDraft))}" />
    <div class="executive-presentation-feedback-editor-list">
      ${collaborators.map((item) => `<article class="${item.done ? "done" : ""}" data-feedback-row data-feedback-search="${escapeHtml(`${item.name} ${item.nomina} ${item.coordinator}`.toLowerCase())}">
        <label class="check"><input type="checkbox" data-feedback-done="${escapeHtml(item.nomina)}" ${item.done ? "checked" : ""} /><span></span></label>
        <div class="person"><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.nomina)} · ${escapeHtml(item.coordinator)}</span></div>
        <label>Resultado<select data-feedback-result="${escapeHtml(item.nomina)}"><option value="">Seleccionar</option><option value="positiva" ${item.result === "positiva" ? "selected" : ""}>Positiva</option><option value="acuerdos" ${item.result === "acuerdos" ? "selected" : ""}>Con acuerdos</option><option value="seguimiento" ${item.result === "seguimiento" ? "selected" : ""}>Requiere seguimiento</option></select></label>
        <label>Nota<input type="text" data-feedback-note="${escapeHtml(item.nomina)}" value="${escapeHtml(item.note)}" placeholder="Acuerdo o necesidad detectada" /></label>
      </article>`).join("")}
    </div>
  </div>`;
}

function syncPresentationFeedbackValue() {
  const input = $("#presentationFeedbackRecords");
  if (input) input.value = JSON.stringify(presentationFeedbackDraft || {});
}

function presentationManualNote(notes, key, title = "Nota para la junta") {
  const content = String(notes[key] || "").trim();
  return content ? `<div class="executive-presentation-manual-note"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(content)}</span></div>` : "";
}

function renderPresentationPeopleList(rows, emptyLabel) {
  if (!rows.length) return presentationEmptyState(emptyLabel);
  return `<div class="executive-presentation-people">${rows.map((row, index) => `<article><span>${index + 1}</span><div><strong>${escapeHtml(row.teacher || "Sin dato")}</strong><em>${Number(row.approvedRate || 0)}% aprobados · ${Number(row.total || 0)} alumnos</em></div></article>`).join("")}</div>`;
}

function renderExecutivePresentationSlide(slide, index) {
  const notes = presentationNotesForCurrentWeek();
  const operational = executiveOperationalRows();
  const classes = executiveClassSummary();
  const activities = executivePresentationActivities();
  const schedule = executivePresentationScheduleSummary();
  const budget = executivePresentationBudgetData();
  const collaborators = collaboratorRows();
  const physicalCount = physicalEvaluationsLoaded ? physicalEvaluations.length : physicalRows().length;
  const manualList = (key) => {
    const items = presentationTextItems(notes[key]);
    return items.length ? `<ul class="executive-presentation-checklist">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : presentationEmptyState();
  };
  let body = "";
  if (slide.key === "cover") {
    body = `<div class="executive-presentation-cover"><div><p>WellSync · Athletics & Wellness</p><h2>Presentación semanal</h2><strong>${escapeHtml(presentationWeekKey())}</strong><span>${new Date().toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })}</span></div><img src="./assets/borregos_logo_manual_oficial.png" alt="Borregos" /></div>`;
  } else if (slide.key === "general-indicators") {
    body = renderPresentationSchoolCalendar();
  } else if (slide.key === "priorities") {
    body = renderPresentationPriorities(notes);
  } else if (slide.key === "performance") {
    body = `<div class="executive-presentation-performance selected">${renderPresentationPortraitGroup("Destacados", "highlight", presentationSelectedCollaborators(notes, "highlight_nominas"))}${renderPresentationPortraitGroup("En mejora", "improving", presentationSelectedCollaborators(notes, "improving_nominas"))}</div>`;
  } else if (slide.key === "budget") {
    body = renderExecutivePresentationBudget(budget, notes);
  } else if (slide.key === "block-activities") {
    body = `${activities.length ? `<div class="executive-presentation-table"><div class="head"><span>Fecha</span><span>Actividad</span><span>Área</span><span>Estatus</span></div>${activities.map((row) => `<div><time>${escapeHtml(row.date)}</time><strong>${escapeHtml(row.activity)}</strong><span>${escapeHtml(labelArea(row.area))}</span><em>${escapeHtml(row.status || "Sin estado")}</em></div>`).join("")}</div>` : presentationEmptyState()}${presentationManualNote(notes, "comment_block-activities")}`;
  } else if (slide.key === "inventory") {
    body = renderPresentationInventory(notes);
  } else if (slide.key === "feedback") {
    body = renderPresentationFeedback(notes);
  } else if (slide.key === "weekly-topics") {
    body = `<div class="executive-presentation-split"><section><h3>Temas por área</h3>${manualList("area_topics")}<h3>Temas semanales</h3>${manualList("topics")}</section><section><h3>Acuerdos</h3>${manualList("agreements")}<h3>Pendientes</h3>${manualList("pending")}</section></div>${presentationManualNote(notes, "observations", "Observaciones")}`;
  } else if (slide.key === "team") {
    body = `${collaborators.length ? `<div class="executive-presentation-team">${collaborators.slice(0, 10).map((row) => { const name = row.Colaboradores || row.collaborator_name || row.nombre || "Colaborador"; const image = row.photo_url || row.foto_url || row.image_url || ""; return `<article>${image ? `<img src="${escapeHtml(image)}" alt="" />` : `<span>${escapeHtml(String(name).split(/\s+/).slice(0, 2).map((part) => part[0] || "").join(""))}</span>`}<strong>${escapeHtml(name)}</strong><em>${escapeHtml(row.Puesto || row.role || "Sin dato")}</em></article>`; }).join("")}</div>` : presentationEmptyState()}${presentationManualNote(notes, "comment_team")}`;
  } else if (slide.key === "detailed-schedules") {
    body = `${schedule.rows.length ? `<div class="executive-presentation-table schedule"><div class="head"><span>Día</span><span>Horario</span><span>Clase</span><span>Profesor</span></div>${schedule.rows.slice(0, 9).map((row) => `<div><span>${escapeHtml(row.day)}</span><strong>${escapeHtml(`${row.start || ""} - ${row.end || ""}`)}</strong><span>${escapeHtml(row.discipline || "Sin dato")}</span><em>${escapeHtml(row.professor || "Sin dato")}</em></div>`).join("")}</div>` : presentationEmptyState()}${presentationManualNote(notes, "comment_detailed-schedules")}`;
  } else if (slide.key === "map") {
    body = presentationTextItems(notes.map_notes).length ? manualList("map_notes") : presentationEmptyState("Sin información de distribución capturada");
  }
  return `<article class="executive-presentation-slide" data-slide-key="${slide.key}" aria-label="Diapositiva ${index + 1}: ${escapeHtml(slide.title)}"><header><div class="executive-presentation-number">${index + 1}</div><div><h2>${escapeHtml(slide.title)}</h2><p>${index === 0 ? "Junta semanal" : presentationWeekKey()}</p></div><img src="./assets/borregos_logo_manual_oficial.png" alt="Borregos" /></header><div class="executive-presentation-slide-body">${body}</div><footer>WellSync · Dirección Deportiva</footer></article>`;
}

function renderExecutivePresentationEditor() {
  if (!executivePresentationEditorOpen) return "";
  const notes = presentationNotesForCurrentWeek();
  const selectedSlide = EXECUTIVE_PRESENTATION_SLIDES.find((slide) => slide.key === executivePresentationEditingSlide) || EXECUTIVE_PRESENTATION_SLIDES[2];
  const fields = EXECUTIVE_PRESENTATION_EDIT_FIELDS[selectedSlide.key] || [];
  const editorFields = selectedSlide.key === "feedback"
    ? renderPresentationFeedbackEditor(notes)
    : selectedSlide.key === "performance"
    ? `${renderPresentationCollaboratorPicker("highlight_nominas", "Destacados", notes)}${renderPresentationCollaboratorPicker("improving_nominas", "En mejora", notes)}`
    : selectedSlide.key === "inventory"
      ? renderPresentationInventoryEditor(notes)
      : fields.map(([key, label, placeholder]) => `<label>${escapeHtml(label)}<textarea name="${escapeHtml(key)}" rows="5" placeholder="${escapeHtml(placeholder)}">${escapeHtml(notes[key] || "")}</textarea></label>`).join("");
  return `<div class="executive-presentation-editor-backdrop" data-presentation-editor-close><aside class="executive-presentation-editor" role="dialog" aria-modal="true" aria-labelledby="presentationEditorTitle"><header><div><p class="eyebrow">${escapeHtml(presentationWeekKey())}</p><h2 id="presentationEditorTitle">Editor de la junta semanal</h2><span>Los datos automáticos permanecen conectados; aquí agregas contexto y decisiones.</span></div><button type="button" data-presentation-editor-close aria-label="Cerrar">&times;</button></header><div class="executive-presentation-editor-layout"><nav class="executive-presentation-editor-nav" aria-label="Diapositivas editables">${EXECUTIVE_PRESENTATION_SLIDES.map((slide, index) => `<button type="button" class="${slide.key === selectedSlide.key ? "active" : ""}" data-presentation-editor-slide="${escapeHtml(slide.key)}"><span>${index + 1}</span><div><strong>${escapeHtml(slide.title)}</strong><em>${(EXECUTIVE_PRESENTATION_EDIT_FIELDS[slide.key] || []).length ? "Editable" : "Automática"}</em></div></button>`).join("")}</nav><form id="executivePresentationForm"><div class="executive-presentation-editor-heading"><span>Diapositiva ${EXECUTIVE_PRESENTATION_SLIDES.indexOf(selectedSlide) + 1}</span><h3>${escapeHtml(selectedSlide.title)}</h3></div>${fields.length ? editorFields : `<div class="executive-presentation-editor-automatic"><i data-lucide="refresh-cw"></i><strong>Diapositiva automática</strong><p>Se alimenta directamente con la información disponible en WellSync.</p></div>`}<div class="executive-presentation-editor-actions"><button class="ghost-btn" type="button" data-presentation-editor-close>Cancelar</button>${fields.length ? `<button class="primary-btn" type="submit" ${executivePresentationSaving ? "disabled" : ""}>${executivePresentationSaving ? "Guardando..." : "Guardar diapositiva"}</button>` : ""}</div><p>${executivePresentationCloudAvailable ? "Guardado semanal en Supabase activo cuando las tablas están disponibles." : "Guardado local disponible; activa las tablas para compartir entre computadoras."}</p></form></div></aside></div>`;
}

function renderExecutivePresentationStage() {
  if (!executivePresentationMode) return "";
  const slide = EXECUTIVE_PRESENTATION_SLIDES[executivePresentationIndex] || EXECUTIVE_PRESENTATION_SLIDES[0];
  return `<div class="executive-presentation-stage" role="dialog" aria-modal="true" aria-label="Modo presentación"><div class="executive-presentation-stage-toolbar"><span>${executivePresentationIndex + 1} / ${EXECUTIVE_PRESENTATION_SLIDES.length}</span><div><button class="executive-presentation-stage-edit" type="button" data-presentation-edit-slide="${escapeHtml(slide.key)}">Editar diapositiva</button><button type="button" data-presentation-close aria-label="Cerrar presentación">&times;</button></div></div><div class="executive-presentation-canvas">${renderExecutivePresentationSlide(slide, executivePresentationIndex)}</div><button class="executive-presentation-nav previous" type="button" data-presentation-step="-1" aria-label="Diapositiva anterior">&#8249;</button><button class="executive-presentation-nav next" type="button" data-presentation-step="1" aria-label="Siguiente diapositiva">&#8250;</button></div>`;
}

function updateExecutivePresentationStage() {
  const stage = $(".executive-presentation-stage");
  const canvas = stage?.querySelector(".executive-presentation-canvas");
  const slide = EXECUTIVE_PRESENTATION_SLIDES[executivePresentationIndex];
  if (!stage || !canvas || !slide) return;
  canvas.innerHTML = renderExecutivePresentationSlide(slide, executivePresentationIndex);
  const counter = stage.querySelector(".executive-presentation-stage-toolbar > span");
  if (counter) counter.textContent = `${executivePresentationIndex + 1} / ${EXECUTIVE_PRESENTATION_SLIDES.length}`;
  const editButton = stage.querySelector(".executive-presentation-stage-edit");
  if (editButton) editButton.dataset.presentationEditSlide = slide.key;
  const previous = stage.querySelector('[data-presentation-step="-1"]');
  const next = stage.querySelector('[data-presentation-step="1"]');
  if (previous) previous.disabled = executivePresentationIndex === 0;
  if (next) next.disabled = executivePresentationIndex === EXECUTIVE_PRESENTATION_SLIDES.length - 1;
  window.lucide?.createIcons();
}

function renderExecutivePresentationPreview() {
  executivePresentationIndex = Math.max(0, Math.min(EXECUTIVE_PRESENTATION_SLIDES.length - 1, executivePresentationIndex));
  const selectedSlide = EXECUTIVE_PRESENTATION_SLIDES[executivePresentationIndex];
  return `
    <section class="executive-presentation-preview-browser" aria-label="Navegador preliminar de diapositivas">
      <header class="executive-presentation-preview-heading">
        <div>
          <p class="eyebrow">Vista preliminar</p>
          <h3>${executivePresentationIndex + 1}. ${escapeHtml(selectedSlide.title)}</h3>
          <span>Revisa el contenido antes de abrir la presentación.</span>
        </div>
        <div>
          <strong>${executivePresentationIndex + 1} / ${EXECUTIVE_PRESENTATION_SLIDES.length}</strong>
          <button class="primary-btn" type="button" data-presentation-preview-fullscreen>Abrir en pantalla completa</button>
        </div>
      </header>
      <div class="executive-presentation-preview-stage">
        <button type="button" data-presentation-preview-step="-1" aria-label="Diapositiva anterior" ${executivePresentationIndex === 0 ? "disabled" : ""}>&#8249;</button>
        <div class="executive-presentation-preview-canvas">${renderExecutivePresentationSlide(selectedSlide, executivePresentationIndex)}</div>
        <button type="button" data-presentation-preview-step="1" aria-label="Siguiente diapositiva" ${executivePresentationIndex === EXECUTIVE_PRESENTATION_SLIDES.length - 1 ? "disabled" : ""}>&#8250;</button>
      </div>
      <div class="executive-presentation-preview-filmstrip" role="tablist" aria-label="Vista preliminar de diapositivas">
        ${EXECUTIVE_PRESENTATION_SLIDES.map((slide, index) => `
          <button type="button" role="tab" aria-selected="${index === executivePresentationIndex}" class="${index === executivePresentationIndex ? "selected" : ""}" data-presentation-preview-select="${index}">
            <span class="executive-presentation-thumbnail-canvas">${renderExecutivePresentationSlide(slide, index)}</span>
            <strong>${index + 1}. ${escapeHtml(slide.title)}</strong>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function sanitizePresentationSnapshotHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = String(html || "");
  template.content.querySelectorAll("script,style,iframe,object,embed,link,meta").forEach((node) => node.remove());
  template.content.querySelectorAll("*").forEach((node) => {
    [...node.attributes].forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = String(attribute.value || "").trim().toLowerCase();
      if (name.startsWith("on") || ((name === "href" || name === "src") && value.startsWith("javascript:"))) {
        node.removeAttribute(attribute.name);
      }
    });
  });
  return template.innerHTML;
}

function renderExecutivePresentationHistory() {
  const rows = executivePresentationHistory;
  return `<section class="executive-presentation-history" aria-labelledby="presentationHistoryTitle">
    <header>
      <div><p class="eyebrow">Versiones guardadas</p><h3 id="presentationHistoryTitle">Historial de presentaciones</h3><span>Consulta o reutiliza las juntas anteriores sin cambiar la versión original.</span></div>
      <strong>${rows.length} ${rows.length === 1 ? "versión" : "versiones"}</strong>
    </header>
    ${executivePresentationHistoryLoading
      ? `<div class="executive-presentation-history-empty">Cargando historial...</div>`
      : rows.length
        ? `<div class="executive-presentation-history-list">${rows.map((row) => `<article class="executive-presentation-history-card${row.pending ? " pending" : ""}"><div><strong>${escapeHtml(row.title)}</strong><span>${escapeHtml(presentationHistoryApi.formatSavedAt(row.savedAt))}</span><em>${escapeHtml(row.weekKey || "Semana no disponible")} · 12 diapositivas${row.pending ? " · Pendiente de sincronizar" : ""}</em></div><div><button class="ghost-btn" type="button" data-presentation-history-view="${escapeHtml(row.id)}">Ver</button><button class="ghost-btn" type="button" data-presentation-history-reuse="${escapeHtml(row.id)}">Editar / Reutilizar</button></div></article>`).join("")}</div>`
        : `<div class="executive-presentation-history-empty"><strong>Aún no hay versiones guardadas</strong><span>Usa Guardar presentación para crear la primera.</span></div>`}
  </section>`;
}

function renderPresentationHistorySaveDialog() {
  if (!executivePresentationHistorySaveOpen) return "";
  const now = new Date().toISOString();
  return `<div class="executive-presentation-history-modal-backdrop" data-presentation-history-close="save"><section class="executive-presentation-history-dialog" role="dialog" aria-modal="true" aria-labelledby="presentationHistorySaveTitle"><header><div><p class="eyebrow">Nueva versión</p><h2 id="presentationHistorySaveTitle">Guardar presentación</h2></div><button type="button" data-presentation-history-close="save" aria-label="Cerrar">&times;</button></header><label>Nombre de la presentación (opcional)<input id="presentationHistoryName" type="text" maxlength="120" placeholder="Ejemplo: Junta de cierre" autofocus /></label><p>Se guardarán las 12 diapositivas como se ven ahora.</p><div class="executive-presentation-history-date"><span>Fecha y hora</span><strong>${escapeHtml(presentationHistoryApi.formatSavedAt(now))}</strong></div><footer><button class="ghost-btn" type="button" data-presentation-history-close="save">Cancelar</button><button class="primary-btn" type="button" data-presentation-history-save-confirm ${executivePresentationHistorySaving ? "disabled" : ""}>${executivePresentationHistorySaving ? "Guardando..." : "Guardar en historial"}</button></footer></section></div>`;
}

function renderPresentationHistoryViewer() {
  if (!executivePresentationHistoryViewer) return "";
  const slides = executivePresentationHistoryViewer.slides || [];
  executivePresentationHistoryViewerIndex = Math.max(0, Math.min(slides.length - 1, executivePresentationHistoryViewerIndex));
  const selected = slides[executivePresentationHistoryViewerIndex];
  if (!selected) return "";
  return `<div class="executive-presentation-history-modal-backdrop executive-presentation-history-viewer-backdrop"><section class="executive-presentation-history-viewer" role="dialog" aria-modal="true" aria-labelledby="presentationHistoryViewerTitle"><header><div><p class="eyebrow">Versión guardada · Solo lectura</p><h2 id="presentationHistoryViewerTitle">${escapeHtml(executivePresentationHistoryViewer.title)}</h2><span>${escapeHtml(presentationHistoryApi.formatSavedAt(executivePresentationHistoryViewer.savedAt))}</span></div><button type="button" data-presentation-history-close="viewer" aria-label="Cerrar">&times;</button></header><div class="executive-presentation-history-viewer-counter"><strong>${executivePresentationHistoryViewerIndex + 1} / ${slides.length}</strong><span>${escapeHtml(selected.title || "Diapositiva")}</span></div><div class="executive-presentation-preview-stage"><button type="button" data-presentation-history-viewer-step="-1" aria-label="Diapositiva anterior" ${executivePresentationHistoryViewerIndex === 0 ? "disabled" : ""}>&#8249;</button><div class="executive-presentation-preview-canvas">${sanitizePresentationSnapshotHtml(selected.html)}</div><button type="button" data-presentation-history-viewer-step="1" aria-label="Siguiente diapositiva" ${executivePresentationHistoryViewerIndex === slides.length - 1 ? "disabled" : ""}>&#8250;</button></div><div class="executive-presentation-preview-filmstrip" role="tablist" aria-label="Diapositivas guardadas">${slides.map((slide, index) => `<button type="button" role="tab" aria-selected="${index === executivePresentationHistoryViewerIndex}" class="${index === executivePresentationHistoryViewerIndex ? "selected" : ""}" data-presentation-history-viewer-select="${index}"><span class="executive-presentation-thumbnail-canvas">${sanitizePresentationSnapshotHtml(slide.html)}</span><strong>${index + 1}. ${escapeHtml(slide.title || "Diapositiva")}</strong></button>`).join("")}</div></section></div>`;
}

function renderPresentationHistoryReuseDialog() {
  if (!executivePresentationHistoryReuseTarget) return "";
  return `<div class="executive-presentation-history-modal-backdrop" data-presentation-history-close="reuse"><section class="executive-presentation-history-dialog" role="dialog" aria-modal="true" aria-labelledby="presentationHistoryReuseTitle"><header><div><p class="eyebrow">Reutilizar versión</p><h2 id="presentationHistoryReuseTitle">${escapeHtml(executivePresentationHistoryReuseTarget.title)}</h2></div><button type="button" data-presentation-history-close="reuse" aria-label="Cerrar">&times;</button></header><div class="executive-presentation-history-warning"><strong>¿Cargar esta versión para editarla?</strong><p>Se reemplazará el contenido editable de la presentación principal. La versión histórica permanecerá intacta y los datos automáticos se actualizarán con la información actual de WellSync.</p></div><footer><button class="ghost-btn" type="button" data-presentation-history-close="reuse">Cancelar</button><button class="primary-btn" type="button" data-presentation-history-reuse-confirm>Cargar y editar</button></footer></section></div>`;
}

function renderExecutivePresentationHub() {
  return `<section class="executive-presentation-hub"><div class="executive-presentation-hero"><div><p class="eyebrow">WellSync · Dirección Deportiva</p><h2>Presentación Ejecutiva</h2><p>Datos automáticos del sistema y contenido editable por semana, en una sola junta.</p></div><img src="./assets/borregos_logo_manual_oficial.png" alt="Borregos" /></div><div class="executive-presentation-template-grid"><article class="executive-presentation-template active executive-presentation-template-summary"><div><span>Formato activo · ${escapeHtml(presentationWeekKey())}</span><h3>Junta semanal híbrida</h3><p>12 diapositivas: indicadores, presupuesto, calendario, desempeño y equipo se actualizan desde WellSync; acuerdos y notas se editan por semana.</p><div class="executive-presentation-actions"><button class="primary-btn" type="button" data-presentation-action="present">Abrir presentación</button><button class="primary-btn" type="button" data-presentation-history-save>Guardar presentación</button><button class="ghost-btn" type="button" data-presentation-action="edit">Editar contenido</button><button class="ghost-btn" type="button" data-presentation-action="refresh">Actualizar datos</button><button class="ghost-btn" type="button" data-presentation-action="pdf">Exportar PDF</button><button class="ghost-btn" type="button" data-presentation-action="powerpoint">PowerPoint</button></div></div></article></div>${renderExecutivePresentationPreview()}${renderExecutivePresentationHistory()}<div class="executive-presentation-template-grid executive-presentation-template-grid-upcoming">${["Informe mensual", "Rectoría", "Coordinadores"].map((title) => `<article class="executive-presentation-template coming"><span>Próximamente</span><h3>${title}</h3><p>Formato preparado para una siguiente fase.</p></article>`).join("")}</div></section>${renderExecutivePresentationStage()}${renderExecutivePresentationEditor()}${renderPresentationHistorySaveDialog()}${renderPresentationHistoryViewer()}${renderPresentationHistoryReuseDialog()}`;
}

async function refreshExecutivePresentationData() {
  if (supabaseClient && currentUser?.auth === "supabase") await loadSupabaseDataBundle();
  await loadPlanningCalendarRows();
  await loadExecutivePresentationNotes();
  await syncPendingPresentationHistory();
  await loadPresentationHistory();
}

async function loadExecutivePresentationNotes() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const weekKey = presentationWeekKey();
  const presentation = await supabaseClient.from("presentaciones").select("id").eq("week_key", weekKey).eq("presentation_type", "weekly").maybeSingle();
  if (presentation.error) {
    executivePresentationCloudAvailable = false;
    return;
  }
  if (!presentation.data?.id) return;
  const result = await supabaseClient.from("presentacion_notas").select("section_key, content").eq("presentacion_id", presentation.data.id);
  if (result.error) {
    executivePresentationCloudAvailable = false;
    return;
  }
  executivePresentationCloudAvailable = true;
  executivePresentationNotes[weekKey] = { ...(executivePresentationNotes[weekKey] || {}), ...Object.fromEntries((result.data || []).map((row) => [row.section_key, row.content || ""])) };
  const tracking = await supabaseClient.from("presentaciones").select("id").eq("week_key", "feedback-tracking").eq("presentation_type", "tracking").maybeSingle();
  if (!tracking.error && tracking.data?.id) {
    const trackingNotes = await supabaseClient.from("presentacion_notas").select("section_key, content").eq("presentacion_id", tracking.data.id);
    if (!trackingNotes.error) {
      executivePresentationNotes.__feedback_tracking = Object.fromEntries((trackingNotes.data || []).map((row) => [row.section_key, row.content || ""]));
    }
  }
  saveExecutivePresentationLocalNotes();
}

async function saveExecutivePresentationNotes(form) {
  const weekKey = presentationWeekKey();
  const formData = new FormData(form);
  const values = {};
  [...new Set([...formData.keys()])].forEach((key) => {
    const entries = formData.getAll(key).map((value) => String(value || "").trim()).filter(Boolean);
    values[key] = entries.length > 1 || key.endsWith("_nominas") ? entries.slice(0, MAX_PRESENTATION_SELECTION).join(",") : (entries[0] || "");
  });
  const isFeedbackTracking = Object.prototype.hasOwnProperty.call(values, "feedback_records");
  if (isFeedbackTracking) executivePresentationNotes.__feedback_tracking = { ...(executivePresentationNotes.__feedback_tracking || {}), ...values };
  else executivePresentationNotes[weekKey] = { ...(executivePresentationNotes[weekKey] || {}), ...values };
  saveExecutivePresentationLocalNotes();
  if (!supabaseClient || currentUser?.auth !== "supabase") return false;
  const storageKey = isFeedbackTracking ? "feedback-tracking" : weekKey;
  const storageType = isFeedbackTracking ? "tracking" : "weekly";
  const storageTitle = isFeedbackTracking ? "Seguimiento de retroalimentación personal" : `Junta semanal ${weekKey}`;
  const head = await supabaseClient.from("presentaciones").upsert({ week_key: storageKey, presentation_type: storageType, title: storageTitle, status: "draft", updated_at: new Date().toISOString() }, { onConflict: "week_key,presentation_type" }).select("id").single();
  if (head.error || !head.data?.id) {
    executivePresentationCloudAvailable = false;
    return false;
  }
  const rows = Object.entries(values).map(([section_key, content]) => ({ presentacion_id: head.data.id, section_key, content, updated_at: new Date().toISOString() }));
  const notes = await supabaseClient.from("presentacion_notas").upsert(rows, { onConflict: "presentacion_id,section_key" });
  executivePresentationCloudAvailable = !notes.error;
  return !notes.error;
}

function captureExecutivePresentationSnapshot(title = "") {
  const savedAt = new Date().toISOString();
  return presentationHistoryApi.createSnapshot({
    title,
    weekKey: presentationWeekKey(),
    savedAt,
    editableContent: presentationNotesForCurrentWeek(),
    slides: EXECUTIVE_PRESENTATION_SLIDES.map((slide, index) => ({
      key: slide.key,
      title: slide.title,
      html: renderExecutivePresentationSlide(slide, index)
    }))
  });
}

function presentationHistoryStorageKey(snapshot) {
  return `history-${String(snapshot.savedAt || "").replace(/[^0-9]/g, "")}-${snapshot.id}`;
}

function presentationHistorySnapshotId(weekKey) {
  return String(weekKey || "").replace(/^history-\d+-/, "");
}

async function savePresentationHistorySnapshot(snapshot) {
  if (!supabaseClient || currentUser?.auth !== "supabase") return false;
  const weekKey = presentationHistoryStorageKey(snapshot);
  const head = await supabaseClient.from("presentaciones").upsert({
    week_key: weekKey,
    presentation_type: "history",
    title: snapshot.title,
    status: "draft",
    updated_at: snapshot.savedAt
  }, { onConflict: "week_key,presentation_type" }).select("id").single();
  if (head.error || !head.data?.id) {
    executivePresentationHistoryCloudAvailable = false;
    return false;
  }
  const rows = [
    {
      section_key: "__snapshot_meta",
      content: JSON.stringify({
        schemaVersion: snapshot.schemaVersion,
        id: snapshot.id,
        savedAt: snapshot.savedAt,
        weekKey: snapshot.weekKey
      })
    },
    { section_key: "__editable_content", content: JSON.stringify(snapshot.editableContent) },
    ...snapshot.slides.map((slide) => ({ section_key: `snapshot:${slide.key}`, content: JSON.stringify(slide) }))
  ].map((row) => ({ ...row, presentacion_id: head.data.id, updated_at: snapshot.savedAt }));
  const details = await supabaseClient.from("presentacion_notas").upsert(rows, { onConflict: "presentacion_id,section_key" });
  if (details.error) {
    executivePresentationHistoryCloudAvailable = false;
    return false;
  }
  const completed = await supabaseClient.from("presentaciones").update({ status: "saved", updated_at: snapshot.savedAt }).eq("id", head.data.id);
  executivePresentationHistoryCloudAvailable = !completed.error;
  return !completed.error;
}

async function persistPresentationHistorySnapshot(snapshot) {
  presentationHistoryPendingStore.upsert(snapshot);
  const saved = await savePresentationHistorySnapshot(snapshot);
  if (saved) presentationHistoryPendingStore.remove(snapshot.id);
  await loadPresentationHistory();
  return saved;
}

async function loadPresentationHistory() {
  executivePresentationHistoryLoading = true;
  const pending = presentationHistoryPendingStore.list().map((snapshot) => ({ ...snapshot, pending: true }));
  if (!supabaseClient || currentUser?.auth !== "supabase") {
    executivePresentationHistory = pending.sort((a, b) => String(b.savedAt || "").localeCompare(String(a.savedAt || "")));
    executivePresentationHistoryLoading = false;
    return;
  }
  try {
    const result = await supabaseClient
      .from("presentaciones")
      .select("id,title,week_key,updated_at,status")
      .eq("presentation_type", "history")
      .eq("status", "saved")
      .order("updated_at", { ascending: false });
    if (result.error) {
      executivePresentationHistoryCloudAvailable = false;
      executivePresentationHistory = pending;
      return;
    }
    const headers = result.data || [];
    const headerIds = headers.map((row) => row.id).filter(Boolean);
    let metadataByPresentation = new Map();
    if (headerIds.length) {
      const metadata = await supabaseClient
        .from("presentacion_notas")
        .select("presentacion_id,content")
        .in("presentacion_id", headerIds)
        .eq("section_key", "__snapshot_meta");
      if (!metadata.error) {
        metadataByPresentation = new Map((metadata.data || []).map((row) => {
          try {
            return [row.presentacion_id, JSON.parse(row.content || "{}")];
          } catch {
            return [row.presentacion_id, {}];
          }
        }));
      }
    }
    const cloud = headers.map((row) => {
      const meta = metadataByPresentation.get(row.id) || {};
      return {
        id: meta.id || presentationHistorySnapshotId(row.week_key),
        cloudId: row.id,
        title: row.title || presentationHistoryApi.defaultTitle(row.updated_at),
        savedAt: meta.savedAt || row.updated_at,
        weekKey: meta.weekKey || "",
        pending: false
      };
    });
    const cloudIds = new Set(cloud.map((row) => row.id));
    executivePresentationHistory = [...pending.filter((row) => !cloudIds.has(row.id)), ...cloud]
      .sort((a, b) => String(b.savedAt || "").localeCompare(String(a.savedAt || "")));
    executivePresentationHistoryCloudAvailable = true;
  } finally {
    executivePresentationHistoryLoading = false;
  }
}

async function syncPendingPresentationHistory() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  for (const snapshot of presentationHistoryPendingStore.list()) {
    const saved = await savePresentationHistorySnapshot(snapshot);
    if (saved) presentationHistoryPendingStore.remove(snapshot.id);
  }
}

async function loadPresentationHistorySnapshot(record) {
  if (record?.pending && Array.isArray(record.slides)) return presentationHistoryApi.cloneEditableContent(record);
  if (!record?.cloudId || !supabaseClient || currentUser?.auth !== "supabase") {
    throw new Error("No se pudo recuperar la presentación completa");
  }
  const result = await supabaseClient
    .from("presentacion_notas")
    .select("section_key,content")
    .eq("presentacion_id", record.cloudId);
  if (result.error) throw new Error("No se pudo recuperar la presentación completa");
  let meta = {};
  let editableContent = {};
  const slidesByKey = new Map();
  (result.data || []).forEach((row) => {
    try {
      if (row.section_key === "__snapshot_meta") meta = JSON.parse(row.content || "{}");
      else if (row.section_key === "__editable_content") editableContent = JSON.parse(row.content || "{}");
      else if (String(row.section_key || "").startsWith("snapshot:")) {
        const slide = JSON.parse(row.content || "{}");
        if (slide?.key) slidesByKey.set(slide.key, slide);
      }
    } catch {
      // A malformed row is rejected by the completeness check below.
    }
  });
  const snapshot = {
    schemaVersion: meta.schemaVersion || 1,
    id: meta.id || record.id,
    title: record.title,
    savedAt: meta.savedAt || record.savedAt,
    weekKey: meta.weekKey || record.weekKey,
    editableContent,
    slides: EXECUTIVE_PRESENTATION_SLIDES.map((slide) => slidesByKey.get(slide.key)).filter(Boolean)
  };
  if (!presentationHistoryApi.isComplete(snapshot)) throw new Error("No se pudo recuperar la presentación completa");
  return snapshot;
}

async function saveExecutivePresentationEditableContent(values) {
  const weekKey = presentationWeekKey();
  const reusableValues = presentationHistoryApi.cloneEditableContent(values);
  executivePresentationNotes[weekKey] = reusableValues;
  saveExecutivePresentationLocalNotes();
  if (!supabaseClient || currentUser?.auth !== "supabase") return false;
  const savedAt = new Date().toISOString();
  const head = await supabaseClient.from("presentaciones").upsert({
    week_key: weekKey,
    presentation_type: "weekly",
    title: `Junta semanal ${weekKey}`,
    status: "draft",
    updated_at: savedAt
  }, { onConflict: "week_key,presentation_type" }).select("id").single();
  if (head.error || !head.data?.id) return false;
  const cleared = await supabaseClient.from("presentacion_notas").delete().eq("presentacion_id", head.data.id);
  if (cleared.error) return false;
  const rows = Object.entries(reusableValues).map(([section_key, content]) => ({
    presentacion_id: head.data.id,
    section_key,
    content: String(content ?? ""),
    updated_at: savedAt
  }));
  if (!rows.length) return true;
  const notes = await supabaseClient.from("presentacion_notas").upsert(rows, { onConflict: "presentacion_id,section_key" });
  return !notes.error;
}

function closePresentationHistoryLayer(layer) {
  if (layer === "save") executivePresentationHistorySaveOpen = false;
  if (layer === "viewer") executivePresentationHistoryViewer = null;
  if (layer === "reuse") executivePresentationHistoryReuseTarget = null;
  render();
  const returnTarget = executivePresentationHistoryReturnFocus;
  executivePresentationHistoryReturnFocus = null;
  requestAnimationFrame(() => {
    if (returnTarget?.isConnected) returnTarget.focus();
    else $("[data-presentation-history-save]")?.focus();
  });
}

function bindExecutivePresentationControls() {
  $$('[data-presentation-action]').forEach((button) => button.addEventListener("click", async () => {
    const action = button.dataset.presentationAction;
    if (action === "present") { executivePresentationMode = true; render(); }
    if (action === "edit") { executivePresentationEditingSlide = "priorities"; executivePresentationEditorOpen = true; render(); }
    if (action === "refresh") {
      button.disabled = true;
      button.textContent = "Actualizando...";
      await refreshExecutivePresentationData();
      render();
      toast("Presentación actualizada con la información disponible de WellSync");
    }
    if (action === "pdf") {
      const printRoot = document.createElement("div");
      printRoot.className = "executive-presentation-print-root";
      printRoot.innerHTML = EXECUTIVE_PRESENTATION_SLIDES.map(renderExecutivePresentationSlide).join("");
      document.body.appendChild(printRoot);
      document.body.classList.add("executive-presentation-print");
      toast("Abriendo impresión para guardar como PDF");
      setTimeout(() => { window.print(); document.body.classList.remove("executive-presentation-print"); printRoot.remove(); }, 250);
    }
    if (action === "powerpoint") toast("Exportación PowerPoint preparada para una siguiente fase");
  }));
  $("[data-presentation-history-save]")?.addEventListener("click", (event) => {
    executivePresentationHistoryReturnFocus = event.currentTarget;
    executivePresentationHistorySaveOpen = true;
    render();
    requestAnimationFrame(() => $("#presentationHistoryName")?.focus());
  });
  $("[data-presentation-history-save-confirm]")?.addEventListener("click", async (event) => {
    if (executivePresentationHistorySaving) return;
    const button = event.currentTarget;
    try {
      executivePresentationHistorySaving = true;
      button.disabled = true;
      button.textContent = "Guardando...";
      const snapshot = captureExecutivePresentationSnapshot($("#presentationHistoryName")?.value || "");
      const cloudSaved = await persistPresentationHistorySnapshot(snapshot);
      executivePresentationHistorySaveOpen = false;
      executivePresentationHistorySaving = false;
      render();
      toast(cloudSaved ? "Presentación guardada en el historial" : "Presentación pendiente de sincronizar");
    } catch (error) {
      executivePresentationHistorySaving = false;
      button.disabled = false;
      button.textContent = "Guardar en historial";
      toast(error.message || "No se pudo guardar la presentación");
    }
  });
  $$('[data-presentation-history-view]').forEach((button) => button.addEventListener("click", async (event) => {
    const record = executivePresentationHistory.find((row) => row.id === button.dataset.presentationHistoryView);
    if (!record) return;
    executivePresentationHistoryReturnFocus = event.currentTarget;
    button.disabled = true;
    button.textContent = "Abriendo...";
    try {
      executivePresentationHistoryViewer = await loadPresentationHistorySnapshot(record);
      executivePresentationHistoryViewerIndex = 0;
      render();
    } catch (error) {
      button.disabled = false;
      button.textContent = "Ver";
      toast(error.message || "No se pudo abrir la presentación");
    }
  }));
  $$('[data-presentation-history-reuse]').forEach((button) => button.addEventListener("click", async (event) => {
    const record = executivePresentationHistory.find((row) => row.id === button.dataset.presentationHistoryReuse);
    if (!record) return;
    executivePresentationHistoryReturnFocus = event.currentTarget;
    button.disabled = true;
    button.textContent = "Cargando...";
    try {
      executivePresentationHistoryReuseTarget = await loadPresentationHistorySnapshot(record);
      render();
    } catch (error) {
      button.disabled = false;
      button.textContent = "Editar / Reutilizar";
      toast(error.message || "No se pudo recuperar la presentación");
    }
  }));
  $$('[data-presentation-history-close]').forEach((button) => button.addEventListener("click", (event) => {
    if (event.target !== event.currentTarget && event.currentTarget.tagName !== "BUTTON") return;
    closePresentationHistoryLayer(button.dataset.presentationHistoryClose);
  }));
  $$('[data-presentation-history-viewer-step]').forEach((button) => button.addEventListener("click", () => {
    executivePresentationHistoryViewerIndex = Math.max(0, Math.min((executivePresentationHistoryViewer?.slides.length || 1) - 1, executivePresentationHistoryViewerIndex + Number(button.dataset.presentationHistoryViewerStep)));
    render();
  }));
  $$('[data-presentation-history-viewer-select]').forEach((button) => button.addEventListener("click", () => {
    executivePresentationHistoryViewerIndex = Number(button.dataset.presentationHistoryViewerSelect) || 0;
    render();
  }));
  $("[data-presentation-history-reuse-confirm]")?.addEventListener("click", async (event) => {
    if (!executivePresentationHistoryReuseTarget) return;
    const button = event.currentTarget;
    button.disabled = true;
    button.textContent = "Cargando...";
    const values = presentationHistoryApi.cloneEditableContent(executivePresentationHistoryReuseTarget.editableContent);
    const cloudSaved = await saveExecutivePresentationEditableContent(values);
    executivePresentationHistoryReuseTarget = null;
    executivePresentationEditingSlide = "priorities";
    executivePresentationEditorOpen = true;
    presentationInventoryDraft = null;
    presentationFeedbackDraft = null;
    await refreshExecutivePresentationData();
    render();
    toast(cloudSaved ? "Presentación cargada para editar" : "Presentación cargada en este navegador");
  });
  $$('[data-presentation-preview-select]').forEach((button) => button.addEventListener("click", () => {
    executivePresentationIndex = Number(button.dataset.presentationPreviewSelect) || 0;
    render();
  }));
  $$('[data-presentation-preview-step]').forEach((button) => button.addEventListener("click", () => {
    executivePresentationIndex = Math.max(0, Math.min(EXECUTIVE_PRESENTATION_SLIDES.length - 1, executivePresentationIndex + Number(button.dataset.presentationPreviewStep)));
    render();
  }));
  $("[data-presentation-preview-fullscreen]")?.addEventListener("click", () => {
    executivePresentationMode = true;
    render();
  });
  $$('[data-presentation-slide]').forEach((button) => button.addEventListener("click", () => { executivePresentationIndex = Number(button.dataset.presentationSlide) || 0; executivePresentationMode = true; render(); }));
  $$('[data-presentation-edit-slide]').forEach((button) => button.addEventListener("click", () => { executivePresentationEditingSlide = button.dataset.presentationEditSlide || "priorities"; presentationInventoryDraft = null; presentationFeedbackDraft = null; executivePresentationEditorOpen = true; render(); }));
  $$('[data-presentation-editor-slide]').forEach((button) => button.addEventListener("click", () => { executivePresentationEditingSlide = button.dataset.presentationEditorSlide || "priorities"; presentationInventoryDraft = null; presentationFeedbackDraft = null; render(); }));
  $$('[data-presentation-collaborator]').forEach((input) => input.addEventListener("change", () => {
    const group = input.dataset.presentationCollaborator;
    const checked = $$(`[data-presentation-collaborator="${group}"]:checked`);
    if (checked.length > MAX_PRESENTATION_SELECTION) {
      input.checked = false;
      toast(`Selecciona máximo ${MAX_PRESENTATION_SELECTION} colaboradores`);
    }
    input.closest("label")?.classList.toggle("selected", input.checked);
  }));
  $$('[data-feedback-done]').forEach((input) => input.addEventListener("change", () => {
    const nomina = input.dataset.feedbackDone;
    const current = presentationFeedbackDraft?.[nomina] || {};
    presentationFeedbackDraft[nomina] = {
      ...current,
      done: input.checked,
      completedAt: input.checked ? (current.completedAt || new Date().toISOString().slice(0, 10)) : ""
    };
    input.closest("article")?.classList.toggle("done", input.checked);
    syncPresentationFeedbackValue();
  }));
  $$('[data-feedback-result]').forEach((input) => input.addEventListener("change", () => {
    const nomina = input.dataset.feedbackResult;
    presentationFeedbackDraft[nomina] = { ...(presentationFeedbackDraft?.[nomina] || {}), result: input.value };
    syncPresentationFeedbackValue();
  }));
  $$('[data-feedback-note]').forEach((input) => input.addEventListener("input", () => {
    const nomina = input.dataset.feedbackNote;
    presentationFeedbackDraft[nomina] = { ...(presentationFeedbackDraft?.[nomina] || {}), note: input.value };
    syncPresentationFeedbackValue();
  }));
  $('#presentationFeedbackSearch')?.addEventListener("input", (event) => {
    const query = normalizeText(event.currentTarget.value);
    $$('[data-feedback-row]').forEach((row) => { row.hidden = query && !normalizeText(row.dataset.feedbackSearch).includes(query); });
  });
  $$('[data-inventory-name]').forEach((input) => input.addEventListener("input", () => {
    const index = Number(input.dataset.inventoryName);
    if (!presentationInventoryDraft?.[index]) return;
    presentationInventoryDraft[index].name = input.value;
    syncPresentationInventoryValue();
  }));
  $$('[data-inventory-comment]').forEach((input) => input.addEventListener("input", () => {
    const index = Number(input.dataset.inventoryComment);
    if (!presentationInventoryDraft?.[index]) return;
    presentationInventoryDraft[index].comment = input.value;
    syncPresentationInventoryValue();
  }));
  $$('[data-inventory-image]').forEach((input) => input.addEventListener("change", async () => {
    const [itemIndex, imageIndex] = String(input.dataset.inventoryImage || "").split("-").map(Number);
    const file = input.files?.[0];
    if (!file || !presentationInventoryDraft?.[itemIndex]) return;
    try {
      input.disabled = true;
      presentationInventoryDraft[itemIndex].images[imageIndex] = await preparePresentationInventoryImage(file);
      presentationInventoryPendingUploadKeys.add(`presentacion.inventario.${input.dataset.inventoryImage}`);
      syncPresentationInventoryValue();
      render();
      toast("Fotografía preparada. Guarda la diapositiva para conservarla");
    } catch (error) {
      input.disabled = false;
      toast(error.message || "No se pudo preparar la imagen");
    }
  }));
  $$('[data-inventory-remove]').forEach((button) => button.addEventListener("click", () => {
    const [itemIndex, imageIndex] = String(button.dataset.inventoryRemove || "").split("-").map(Number);
    if (!presentationInventoryDraft?.[itemIndex]) return;
    presentationInventoryDraft[itemIndex].images[imageIndex] = "";
    syncPresentationInventoryValue();
    render();
  }));
  $$('[data-presentation-step]').forEach((button) => button.addEventListener("click", () => { executivePresentationIndex = Math.max(0, Math.min(EXECUTIVE_PRESENTATION_SLIDES.length - 1, executivePresentationIndex + Number(button.dataset.presentationStep))); updateExecutivePresentationStage(); }));
  $('[data-presentation-close]')?.addEventListener("click", () => { executivePresentationMode = false; render(); });
  $$('[data-presentation-editor-close]').forEach((button) => button.addEventListener("click", (event) => { if (event.target === event.currentTarget || event.currentTarget.tagName === "BUTTON") { executivePresentationEditorOpen = false; presentationInventoryPendingUploadKeys.clear(); render(); } }));
  $('#executivePresentationForm')?.addEventListener("submit", async (event) => { event.preventDefault(); syncPresentationInventoryValue(); syncPresentationFeedbackValue(); executivePresentationSaving = true; const form = event.currentTarget; const cloud = await saveExecutivePresentationNotes(form); presentationInventoryPendingUploadKeys.forEach((key) => recordUploadSuccess(key)); presentationInventoryPendingUploadKeys.clear(); executivePresentationSaving = false; executivePresentationEditorOpen = false; presentationInventoryDraft = null; presentationFeedbackDraft = null; render(); toast(cloud ? "Junta semanal guardada en Supabase" : "Junta semanal guardada en este navegador"); });
}

function renderDashboard(area) {
  if (area.id === "presentacion") return renderExecutivePresentationHub();
  if (area.id === "colaboradores") return renderCollaboratorsDashboard();
  if (area.id === "configuracion") return renderConfigurationDashboard();
  if (area.id === "general") return renderExecutiveGeneralDashboard();
  if (area.id === "gimnasio") return renderGymDashboard();
  if (area.id === "clases") return renderClassesDashboard();
  if (area.id === "vivencia") return renderVivenciaDashboard();
  if (area.id === "semana-tec") return renderSemanaTecDashboard();
  if (area.id === "comunicacion") return renderCommunicationDashboard();
  if (area.id === "representativos") return renderRepresentativosDashboard();
  if (area.id === "intramuros") return renderIntramurosDashboard();
  if (area.id === "compras") return renderBudgetDashboard();
  if (area.id === "gamer") return renderParticipationUploadDashboard(area.id);
  const data = filteredStudents();
  const metrics = metricSet(data);
  const byArea = areas.filter(a => a.id !== "general").map(a => ({
    name: a.name,
    value: allParticipationRows().filter(s => s.area === a.id).reduce((sum, s) => sum + s.registros, 0)
  }));
  const max = Math.max(...byArea.map(a => a.value), 1);
  const moduleCards = (activeArea === "general" ? areas.filter(a => a.id !== "general") : [area]).map((item) => `
    <article class="module-card" data-tone="${item.tone}">
      <div>
        <h3>${item.name}</h3>
        <p><strong>Fuente Excel analizada:</strong> ${item.source}</p>
        <p><strong>Indicadores:</strong> ${item.indicators.slice(0, 4).join(", ")}.</p>
      </div>
      <button class="ghost-btn" data-jump="${item.id}">Abrir modulo</button>
    </article>
  `).join("");

  const alertsMarkup = area.id === "general" ? renderAlertCenter(true) : "";
  const progressMarkup = area.id === "general" ? renderProjectProgress() : "";
  const studentDatabaseMarkup = area.id === "general" ? `
    <section class="ops-summary student-database-loader" aria-label="Base de datos de alumnos">
      <article>
        <span>Fuente principal</span>
        <strong>Base de datos_alumnos</strong>
        <p>${studentDatabaseLoaded ? `${cloudStudentDatabase.length} alumnos cargados desde Supabase.` : "Pendiente de cargar o activar en Supabase."}</p>
      </article>
      <article>
        <span>CSV autorizado</span>
        <strong>Matrícula + datos académicos</strong>
        <p>Columnas esperadas: matrícula, género, carrera, semestre y nivel o grado escolar.</p>
      </article>
      <article>
        <span>Reemplazo total</span>
        <strong>Carga controlada</strong>
        <p>Cada archivo sustituye la base anterior y alimenta módulos que usan matrícula.</p>
        <input id="studentDatabaseCsv" type="file" accept=".csv,text/csv" hidden />
        <button class="primary-btn" id="uploadStudentDatabase" type="button" ${canUseAuthorizedUploads() && !studentDatabaseImporting ? "" : "disabled"}>${studentDatabaseImporting ? "Cargando..." : "Cargar Base de Datos de Alumnos"}</button>
      </article>
    </section>
  ` : "";
  return `
    <div class="permission-strip">
      ${allowedDataText()} Estado: ${cloudStatus}. Capturas nube: ${cloudCaptures.length}. Capturas locales: ${localCaptures.length}.
      ${localCaptures.length ? '<button class="ghost-btn inline-action" id="clearLocal">Limpiar capturas locales</button>' : ""}
    </div>
    <section class="ops-summary" aria-label="Resumen operativo">
      <article>
        <span>Gobierno de datos</span>
        <strong>Datos mínimos</strong>
        <p>Alumnos identificados por matrícula y segmentación académica permitida.</p>
      </article>
      <article>
        <span>Automatización</span>
        <strong>Indicadores al guardar</strong>
        <p>Registros, alumnos únicos, retención, participación y reportes se recalculan automáticamente.</p>
      </article>
      <article>
        <span>Siguiente decisión</span>
        <strong>Base de datos</strong>
        <p>Conectar Supabase y activar permisos reales por coordinador.</p>
      </article>
    </section>
    ${studentDatabaseMarkup}
    ${progressMarkup}
    ${alertsMarkup}
    <div class="kpi-grid">
      <div class="kpi"><span>Alumnos únicos</span><strong>${metrics.unique}</strong><em>por matrícula</em></div>
      <div class="kpi"><span>Registros</span><strong>${metrics.registers}</strong><em>asistencias, eventos o inscripciones</em></div>
      <div class="kpi"><span>Acreditados / activos</span><strong>${metrics.accredited}</strong><em>según área</em></div>
      <div class="kpi"><span>Retención</span><strong>${metrics.retention}%</strong><em>bajas excluidas</em></div>
    </div>
    <div class="charts-grid">
      <div class="chart-panel">
        <h3>Participación por área</h3>
        ${byArea.map((row) => `
          <div class="bar-row">
            <span>${row.name}</span>
            <div class="bar-track"><div class="bar-fill" style="width:${Math.round(row.value / max * 100)}%"></div></div>
            <strong>${row.value}</strong>
          </div>
        `).join("")}
      </div>
      <div class="chart-panel">
        <h3>Perfil academico</h3>
        <div class="donut" data-label="${metrics.unique} únicos"></div>
        <p class="hero-copy">Segmentación sugerida: género, carrera, semestre, nivel escolar, periodo, área, disciplina, evento y estatus.</p>
      </div>
      ${area.id === "general" ? `
        <div class="chart-panel career-participation-panel">
          <div class="chart-title-row">
            <div>
              <p class="eyebrow">Base de datos_alumnos + participaciones</p>
              <h3>Participaci&oacute;n por Carrera</h3>
            </div>
            <span>Matricula como relacion</span>
          </div>
          ${renderCareerParticipationChart(data)}
        </div>
      ` : ""}
    </div>
    <div class="module-grid">${moduleCards}</div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Matrícula</th><th>Género</th><th>Carrera</th><th>Semestre</th><th>Nivel</th><th>Área</th><th>Registros</th></tr></thead>
        <tbody>${data.slice(0, 14).map((s) => `<tr><td>${s.matricula}</td><td>${s.genero}</td><td>${s.carrera}</td><td>${s.semestre}</td><td>${s.nivel}</td><td>${labelArea(s.area)}</td><td>${s.registros}</td></tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function classGradeIdentity(row) {
  return [
    row.matricula,
    row.subject_code || row.subject_name,
    row.crn,
    row.group_number,
    row.period_label
  ].map((value) => normalizeText(value)).join("|");
}

function classGradeRecordKey(identity) {
  let hash = 2166136261;
  for (let index = 0; index < identity.length; index += 1) {
    hash ^= identity.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `import-${(hash >>> 0).toString(16).padStart(8, "0")}-${identity.length}`;
}

function classGradeBlockLabel(row) {
  const subjectName = String(row?.subject_name || "").toUpperCase();
  const subjectBlock = ["PMT3", "PMT2", "PMT1"].find((block) => subjectName.includes(block));
  if (subjectBlock) return subjectBlock;
  const period = String(row?.period_label || "").trim().toUpperCase();
  return /^PMT\s*[0-9]+/.test(period) ? period.replace(/\s+/g, "") : "";
}

function classGradeSemesterLabel(row) {
  const period = String(row?.period_label || "").trim().toUpperCase();
  return /^PMT\s*[0-9]+/.test(period) ? "" : period;
}

function classGradePeriodBlockLabel(row) {
  const semester = classGradeSemesterLabel(row);
  const block = classGradeBlockLabel(row);
  if (semester && block) return `${semester} / ${block}`;
  return semester || block || "Sin periodo";
}

function isClassTotalDiscipline(value) {
  const clean = normalizeText(value);
  return clean.includes("totales periodo") || clean.includes("totales del periodo") || clean === "totales";
}

const CLASS_GRADE_VALUE_COLUMNS = [
  "calificacion", "calificación", "grade", "grade_text", "grade text", "estatus",
  "bloque 1", "bloque1", "pmt1", "periodo 1", "periodo1",
  "bloque 2", "bloque2", "pmt2", "periodo 2", "periodo2",
  "bloque 3", "bloque3", "pmt3", "periodo 3", "periodo3"
];

function classGradePeriodFromRow(raw) {
  const explicit = String(pickColumn(raw, ["periodo", "period_label", "period label"]) || "").trim().toUpperCase();
  if (explicit) return explicit;
  const blockPeriods = [
    ["PMT3", ["bloque 3", "bloque3", "pmt3", "periodo 3", "periodo3"]],
    ["PMT2", ["bloque 2", "bloque2", "pmt2", "periodo 2", "periodo2"]],
    ["PMT1", ["bloque 1", "bloque1", "pmt1", "periodo 1", "periodo1"]]
  ];
  const found = blockPeriods.find(([, aliases]) => String(pickColumn(raw, aliases) ?? "").trim());
  return found?.[0] || "";
}

function classGradeValueFromRow(raw, periodLabel) {
  const subjectName = String(pickColumn(raw, ["materia", "asignatura", "subject_name", "disciplina", "nombre materia"]) || "").toUpperCase();
  const subjectBlock = ["PMT3", "PMT2", "PMT1"].find((block) => subjectName.includes(block));
  const period = subjectBlock || String(periodLabel || "").trim().toUpperCase();
  const periodAliases = {
    PMT1: ["bloque 1", "bloque1", "pmt1", "periodo 1", "periodo1"],
    PMT2: ["bloque 2", "bloque2", "pmt2", "periodo 2", "periodo2"],
    PMT3: ["bloque 3", "bloque3", "pmt3", "periodo 3", "periodo3"]
  }[period] || [];
  const blockValue = periodAliases.length ? pickColumn(raw, periodAliases) : "";
  if (String(blockValue ?? "").trim()) return blockValue;
  return pickColumn(raw, ["calificacion", "calificación", "grade", "grade_text", "grade text", "estatus"]);
}

function parseClassGradeImportRows(rawRows, sourceName = "Archivo de Calificaciones") {
  const rows = Array.isArray(rawRows) ? rawRows : [];
  const headers = Object.keys(rows[0] || {}).map(headerKey);
  const required = [
    ["matricula", "studentid"],
    ["materia", "asignatura", "subjectname", "disciplina"],
    CLASS_GRADE_VALUE_COLUMNS
  ];
  const missing = required
    .filter((aliases) => !aliases.some((alias) => headers.includes(headerKey(alias))))
    .map((aliases) => aliases[0]);
  if (missing.length) {
    return { validRows: [], errors: [{ row: 1, message: `Faltan columnas requeridas: ${missing.join(", ")}` }], duplicates: 0 };
  }

  const existingByIdentity = new Map(allClassGradeRows().map((row) => [classGradeIdentity(row), row]));
  const uploadIdentities = new Set();
  const validRows = [];
  const errors = [];
  let duplicates = 0;

  rows.forEach((raw, index) => {
    const matricula = String(pickColumn(raw, ["matricula", "matrícula", "student_id", "student id"]) || "").trim().toUpperCase();
    const subjectName = String(pickColumn(raw, ["materia", "asignatura", "subject_name", "disciplina", "nombre materia"]) || "").trim();
    const periodLabel = classGradePeriodFromRow(raw);
    const grade = normalizeClassGrade(classGradeValueFromRow(raw, periodLabel));
    const rowNumber = index + 2;
    if (!matricula && !subjectName && grade === "") return;
    const rowErrors = [];
    if (!matricula) rowErrors.push("matricula vacia");
    if (!subjectName) rowErrors.push("materia vacia");
    if (grade === null) rowErrors.push("calificacion invalida; usa 0 a 100, BAJA, NP o vacio");
    if (rowErrors.length) {
      errors.push({ row: rowNumber, message: rowErrors.join("; ") });
      return;
    }
    const row = {
      matricula,
      subject_code: String(pickColumn(raw, ["clave_materia", "clave materia", "subject_code", "codigo_materia", "código materia"]) || "").trim(),
      subject_name: subjectName,
      crn: String(pickColumn(raw, ["crn"]) || "").trim(),
      group_number: String(pickColumn(raw, ["grupo", "group_number", "group"]) || "").trim(),
      teacher_name: String(pickColumn(raw, ["profesor", "docente", "teacher_name", "nombre prof titular", "prof titular"]) || "").trim(),
      career_code: String(pickColumn(raw, ["carrera", "career_code", "siglas de programa", "programa"]) || "").trim(),
      semester_label: String(pickColumn(raw, ["semestre", "semester_label", "semestre acreditado"]) || "").trim(),
      period_label: periodLabel,
      grade,
      source_name: sourceName,
      source_row: rowNumber
    };
    const identity = classGradeIdentity(row);
    if (uploadIdentities.has(identity)) {
      duplicates += 1;
      return;
    }
    uploadIdentities.add(identity);
    row.record_key = existingByIdentity.get(identity)?.record_key
      || String(pickColumn(raw, ["record_key", "record key"]) || "").trim()
      || classGradeRecordKey(identity);
    validRows.push(row);
  });
  return { validRows, errors, duplicates };
}

function classGradeImportPeriods(rows) {
  return [...new Set(rows.map((row) => String(row.period_label || "").trim().toUpperCase()).filter(Boolean))].sort();
}

function classGradeReplacementPeriods(rows) {
  const periods = new Set(classGradeImportPeriods(rows));
  rows.forEach((row) => {
    if (classGradeSemesterLabel(row)) {
      const block = classGradeBlockLabel(row);
      if (block) periods.add(block);
    }
  });
  return [...periods].sort((a, b) => classPeriodSortValue(b) - classPeriodSortValue(a) || a.localeCompare(b, "es", { numeric: true }));
}

async function replaceClassGradesPeriods(periods) {
  if (!periods.length) throw new Error("El archivo debe traer la columna periodo para reemplazar la carga anterior.");
  const counts = [];
  for (const period of periods) {
    const { count, error: countError } = await supabaseClient
      .from("class_grades")
      .select("record_key", { count: "exact", head: true })
      .eq("period_label", period);
    if (countError) throw countError;
    counts.push({ period, count: count || 0 });
  }
  const { error } = await supabaseClient
    .from("class_grades")
    .delete()
    .in("period_label", periods);
  if (error) throw error;
  return counts;
}

async function rowsFromClassGradesFile(file) {
  const extension = String(file?.name || "").split(".").pop().toLowerCase();
  if (["xlsx", "xls"].includes(extension)) {
    if (!window.XLSX) throw new Error("No esta disponible el lector de Excel");
    const workbook = window.XLSX.read(await file.arrayBuffer(), { type: "array" });
    const sheetName = findWorkbookSheet(workbook, "calificaciones")
      || findWorkbookSheet(workbook, "CD Lista de Alumnos")
      || workbook.SheetNames[0];
    return window.XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "" });
  }
  if (extension !== "csv") throw new Error("Usa un archivo Excel o CSV");
  const grid = parseCsv(await file.text());
  const headers = grid.shift() || [];
  return grid.map((cells) => headers.reduce((row, header, index) => ({ ...row, [header]: cells[index] || "" }), {}));
}

async function importClassGradesFile(file) {
  if (!file || classGradesImporting) return;
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("clases")) {
    toast("Necesitas acceso autorizado de Clases Deportivas para cargar calificaciones");
    return;
  }
  classGradesImporting = true;
  classGradesUploadSummary = null;
  render();
  try {
    const rawRows = await rowsFromClassGradesFile(file);
    const parsed = parseClassGradeImportRows(rawRows, file.name);
    if (!parsed.validRows.length) {
      const detail = parsed.errors[0]?.message || "El archivo no contiene registros validos";
      throw new Error(detail);
    }
    const periods = classGradeImportPeriods(parsed.validRows);
    const replacementPeriods = classGradeReplacementPeriods(parsed.validRows);
    const replaced = await replaceClassGradesPeriods(replacementPeriods);
    const chunkSize = 400;
    for (let index = 0; index < parsed.validRows.length; index += chunkSize) {
      const payload = parsed.validRows.slice(index, index + chunkSize).map(classGradeToCloud);
      const { error } = await supabaseClient.from("class_grades").upsert(payload, { onConflict: "record_key" });
      if (error) throw error;
    }
    classGradesUploadSummary = {
      fileName: file.name,
      processed: rawRows.length,
      saved: parsed.validRows.length,
      replacedPeriods: periods,
      replacedRows: replaced.reduce((sum, row) => sum + row.count, 0),
      duplicates: parsed.duplicates,
      errors: parsed.errors
    };
    addAudit("importacion", `${parsed.validRows.length} calificaciones cargadas desde ${file.name}; periodos reemplazados: ${periods.join(", ")}`);
    recordUploadSuccess("clases.calificaciones");
    await loadClassGrades();
    render();
    toast(`${parsed.validRows.length} calificaciones cargadas; ${periods.join(", ")} reemplazado`);
  } catch (error) {
    console.error(error);
    classGradesUploadSummary = { fileName: file.name, processed: 0, saved: 0, duplicates: 0, errors: [{ row: 0, message: supabaseErrorDetail(error) || error.message || "Error de carga" }] };
    render();
    toast(`No se pudo cargar: ${classGradesUploadSummary.errors[0].message}`);
  } finally {
    classGradesImporting = false;
    render();
  }
}

function money(value) {
  return Number(value || 0).toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  });
}

function isVisibleBudgetArea(areaKey) {
  return BUDGET_VISIBLE_AREAS.some((area) => area.key === areaKey);
}

function budgetAreaDefinition(areaKey) {
  return BUDGET_VISIBLE_AREAS.find((area) => area.key === areaKey);
}

function budgetAreaLabel(areaKey) {
  return budgetAreaDefinition(areaKey)?.label || labelArea(areaKey);
}

function budgetPeriodOptions() {
  const values = [...new Set([budgetFilters.period, ...budgetPeriods].filter(Boolean))];
  return values.map((value) => `<option value="${escapeHtml(value)}" ${budgetFilters.period === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("");
}

function visibleBudgetAreaPlans() {
  return BUDGET_VISIBLE_AREAS.map((definition) => (
    budgetAreaPlans.find((row) => row.period === budgetFilters.period && row.area === definition.key)
    || normalizeBudgetAreaPlan({
      period: budgetFilters.period,
      area: definition.key,
      assigned: 0,
      owner: definition.owner,
      threshold: 80
    })
  ));
}

function budgetAreaOptions() {
  return visibleBudgetAreaPlans().map((row) => [row.area, budgetAreaLabel(row.area)]);
}

function filteredBudgetRequests() {
  return budgetRequestRows.filter((row) => (
    isVisibleBudgetArea(row.area)
    && row.period === budgetFilters.period
    && (budgetFilters.area === "todos" || row.area === budgetFilters.area)
    && (budgetFilters.status === "todos" || row.status === budgetFilters.status)
  ));
}

function filteredBudgetAreas() {
  return visibleBudgetAreaPlans().filter((row) => budgetFilters.area === "todos" || row.area === budgetFilters.area);
}

function budgetAreaSummary(areaKey) {
  const definition = budgetAreaDefinition(areaKey);
  const plan = budgetAreaPlans.find((row) => row.period === budgetFilters.period && row.area === areaKey) || {
    period: budgetFilters.period,
    assigned: 0,
    threshold: 80,
    owner: definition?.owner || ""
  };
  const rows = budgetRequestRows.filter((row) => row.period === budgetFilters.period && row.area === areaKey && row.status !== "rechazado");
  const spent = rows.filter((row) => row.status === "ejercido").reduce((sum, row) => sum + row.amount, 0);
  const committed = rows.filter((row) => ["autorizado", "comprometido", "pendiente"].includes(row.status)).reduce((sum, row) => sum + row.amount, 0);
  const used = spent + committed;
  const available = Math.max(0, plan.assigned - used);
  const usage = plan.assigned ? Math.round((used / plan.assigned) * 100) : 0;
  const tone = usage >= 95 ? "red" : usage >= plan.threshold ? "yellow" : "green";
  return { ...plan, area: areaKey, rows, spent, committed, used, available, usage, tone };
}

function budgetStatusLabel(status) {
  const labels = {
    pendiente: "Pendiente",
    autorizado: "Autorizado",
    comprometido: "Comprometido",
    ejercido: "Ejercido",
    rechazado: "Rechazado"
  };
  return labels[status] || status;
}

function budgetToneLabel(tone) {
  return tone === "green" ? "Óptimo" : tone === "yellow" ? "En riesgo" : "Crítico";
}

function budgetAreaIcon(areaKey) {
  return budgetAreaDefinition(areaKey)?.icon || "wallet-cards";
}

function budgetKpiCard(icon, title, value, meta, tone = "blue") {
  return `
    <article class="kpi budget-kpi-card ${tone}">
      <span class="budget-kpi-icon"><i data-lucide="${icon}" aria-hidden="true"></i></span>
      <div>
        <span>${title}</span>
        <strong>${value}</strong>
        <em>${meta}</em>
      </div>
    </article>
  `;
}

async function saveBudgetAllocation(event) {
  event.preventDefault();
  if (!isLeadership()) {
    toast("Solo Dirección/Admin puede modificar presupuesto asignado");
    return;
  }
  const form = new FormData(event.currentTarget);
  const area = String(form.get("area") || "").trim();
  const assigned = Number(form.get("assigned") || 0);
  const threshold = Number(form.get("threshold") || 80);
  const owner = String(form.get("owner") || "").trim();
  const current = budgetAreaPlans.find((row) => row.period === budgetFilters.period && row.area === area);
  const next = normalizeBudgetAreaPlan({
    period: budgetFilters.period,
    area,
    assigned,
    threshold,
    owner: owner || current?.owner || "Responsable de área"
  });
  if (!next || !isVisibleBudgetArea(area)) {
    toast("Selecciona un área válida");
    return;
  }
  budgetAreaPlans = budgetAreaPlans.some((row) => row.period === budgetFilters.period && row.area === area)
    ? budgetAreaPlans.map((row) => row.period === budgetFilters.period && row.area === area ? next : row)
    : [...budgetAreaPlans, next];
  const savedCloud = await saveBudgetAllocationToCloud(next);
  if (!savedCloud) saveBudgetAreaPlans();
  addAudit("presupuesto", `Presupuesto actualizado para ${budgetAreaLabel(area)}: ${money(assigned)}`);
  if (savedCloud) await loadBudgetData();
  render();
  toast(savedCloud ? "Presupuesto actualizado en Supabase" : "Presupuesto actualizado localmente");
}

async function createBudgetPeriod(event) {
  event.preventDefault();
  if (!isLeadership()) {
    toast("Solo Dirección/Admin puede crear periodos");
    return;
  }
  if (!supabaseClient || currentUser?.auth !== "supabase" || !budgetCloudReady) {
    toast("Conecta Supabase para crear un periodo");
    return;
  }
  const form = new FormData(event.currentTarget);
  const period = String(form.get("period") || "").trim().toUpperCase();
  if (!/^[A-Z]{2}[0-9]{2}$/.test(period)) {
    toast("Usa un código como AD27 o FJ27");
    return;
  }
  if (budgetPeriods.includes(period)) {
    toast("Ese periodo ya existe");
    return;
  }
  const { error } = await supabaseClient.rpc("create_budget_period", {
    p_period_key: period,
    p_source_period: budgetFilters.period
  });
  if (error) {
    console.warn(error);
    toast(error.message || "No se pudo crear el periodo");
    return;
  }
  budgetFilters.period = period;
  budgetPeriodTouched = true;
  budgetFilters.area = "todos";
  budgetFilters.status = "todos";
  budgetPeriodFormOpen = false;
  await loadBudgetData();
  addAudit("presupuesto", `Periodo presupuestal creado: ${period}`);
  render();
  toast(`Periodo ${period} creado con presupuesto en cero`);
}

async function saveBudgetRequest(event) {
  event.preventDefault();
  if (!canEditArea("compras")) {
    toast("Sin permiso para crear solicitudes");
    return;
  }
  const form = new FormData(event.currentTarget);
  const request = normalizeBudgetRequest({
    id: `P-${String(Date.now()).slice(-6)}`,
    period: form.get("period"),
    date: form.get("date"),
    area: form.get("area"),
    concept: form.get("concept"),
    provider: form.get("provider"),
    amount: form.get("amount"),
    status: form.get("status"),
    priority: form.get("priority"),
    type: form.get("type")
  });
  if (!request || !request.amount) {
    toast("Completa concepto, área y monto");
    return;
  }
  const cloudId = await saveBudgetRequestToCloud(request);
  const savedRequest = cloudId ? { ...request, id: cloudId } : request;
  budgetRequestRows = [savedRequest, ...budgetRequestRows];
  if (!cloudId) saveBudgetRequestRows();
  addAudit("presupuesto", `Solicitud creada: ${request.concept}`);
  if (cloudId) await loadBudgetData();
  render();
  toast(cloudId ? "Solicitud creada en Supabase" : "Solicitud creada localmente");
}

async function updateBudgetRequestStatus(id, status) {
  if (!canEditArea("compras")) {
    toast("Sin permiso para cambiar estatus");
    return;
  }
  if (supabaseClient && currentUser?.auth === "supabase" && budgetCloudReady) {
    const { error } = await supabaseClient.from("budget_requests").update({ status }).eq("id", id);
    if (error) {
      console.warn(error);
      toast("No se pudo actualizar en Supabase");
      return;
    }
    await loadBudgetData();
  } else {
    budgetRequestRows = budgetRequestRows.map((row) => row.id === id ? { ...row, status } : row);
    saveBudgetRequestRows();
  }
  addAudit("presupuesto", `Estatus actualizado en ${id}: ${budgetStatusLabel(status)}`);
  render();
  toast("Estatus actualizado");
}

async function deleteBudgetRequest(id) {
  if (!isLeadership()) {
    toast("Solo Dirección/Admin puede borrar");
    return;
  }
  const row = budgetRequestRows.find((item) => item.id === id);
  if (!window.confirm(`¿Eliminar definitivamente la solicitud "${row?.concept || id}"? Esta acción se guardará en Supabase.`)) return;
  if (supabaseClient && currentUser?.auth === "supabase" && budgetCloudReady) {
    const { error } = await supabaseClient.from("budget_requests").delete().eq("id", id);
    if (error) {
      console.warn(error);
      toast("No se pudo borrar en Supabase");
      return;
    }
    await loadBudgetData();
  } else {
    budgetRequestRows = budgetRequestRows.filter((item) => item.id !== id);
    saveBudgetRequestRows();
  }
  addAudit("presupuesto", `Solicitud eliminada: ${row?.concept || id}`);
  render();
  toast("Solicitud eliminada");
}

function renderExecutiveCalendarView() {
  return `
    <section class="executive-calendar-view">
      <div class="permission-strip">
        <span>Calendario Ejecutivo: próximas actividades programadas por todas las áreas desde Planeación Semestral.</span>
        <span>${planningCalendarLoaded ? `${executivePlanningUpcomingRows().length.toLocaleString("es-MX")} actividades visibles` : "Cargando planeación"}</span>
      </div>
      ${renderExecutivePlanningCalendar()}
    </section>
  `;
}

function selectedBudgetRequestEdit() {
  return budgetRequestRows.find((row) => row.id === selectedBudgetRequestEditId) || null;
}

async function updateBudgetRequest(event) {
  event.preventDefault();
  if (!canEditArea("compras")) {
    toast("Sin permiso para modificar solicitudes");
    return;
  }
  const current = selectedBudgetRequestEdit();
  if (!current) return;
  const form = new FormData(event.currentTarget);
  const next = normalizeBudgetRequest({
    ...current,
    date: form.get("date"),
    period: form.get("period"),
    area: form.get("area"),
    concept: form.get("concept"),
    provider: form.get("provider"),
    amount: form.get("amount"),
    type: form.get("type"),
    priority: form.get("priority"),
    status: form.get("status")
  });
  if (!next) {
    toast("Completa concepto y área");
    return;
  }
  if (supabaseClient && currentUser?.auth === "supabase" && budgetCloudReady) {
    const { error } = await supabaseClient.from("budget_requests").update({
      period_key: next.period,
      request_date: next.date,
      area_key: next.area,
      concept: next.concept,
      provider: next.provider,
      amount: next.amount,
      status: next.status,
      priority: next.priority,
      request_type: next.type
    }).eq("id", next.id);
    if (error) {
      console.warn(error);
      toast("No se pudo modificar en Supabase");
      return;
    }
    await loadBudgetData();
  } else {
    budgetRequestRows = budgetRequestRows.map((row) => row.id === next.id ? next : row);
    saveBudgetRequestRows();
  }
  selectedBudgetRequestEditId = "";
  addAudit("presupuesto", `Solicitud modificada: ${next.concept}`);
  render();
  toast("Solicitud modificada y tablero actualizado");
}

function renderBudgetAllocationView() {
  const visiblePlans = visibleBudgetAreaPlans();
  const selectedPlan = visiblePlans.find((row) => row.area === (budgetFilters.area === "todos" ? "clases" : budgetFilters.area)) || visiblePlans[0];
  return `
    <section class="budget-dashboard">
      <div class="permission-strip budget-strip">
        <span>Edición de presupuesto asignado por área.</span>
        <span>${budgetCloudReady ? "Supabase activo" : budgetCloudMessage}</span>
      </div>
      <article class="form-panel budget-editor-panel budget-standalone-panel">
        <div class="budget-table-heading">
          <div>
            <p class="eyebrow">Dirección/Admin</p>
            <h3>Editar presupuesto asignado</h3>
          </div>
          <span>${isLeadership() ? "Edición activa" : "Solo lectura"}</span>
        </div>
        <form id="budgetAllocationForm" class="budget-form">
          <label>Área
            <select name="area" ${isLeadership() ? "" : "disabled"}>
              ${budgetAreaOptions().map(([value, label]) => `<option value="${value}" ${selectedPlan?.area === value ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
            </select>
          </label>
          <label>Presupuesto asignado
            <input name="assigned" type="number" min="0" step="1000" value="${Math.round(selectedPlan?.assigned || 0)}" ${isLeadership() ? "" : "disabled"} />
          </label>
          <label>Responsable
            <input name="owner" value="${escapeHtml(selectedPlan?.owner || "")}" ${isLeadership() ? "" : "disabled"} />
          </label>
          <label>Alerta amarilla %
            <input name="threshold" type="number" min="1" max="100" value="${Math.round(selectedPlan?.threshold || 80)}" ${isLeadership() ? "" : "disabled"} />
          </label>
          <button class="primary-btn" type="submit" ${isLeadership() ? "" : "disabled"}>Guardar presupuesto</button>
        </form>
      </article>
    </section>
  `;
}

function renderBudgetRequestView() {
  const editable = canEditArea("compras");
  return `
    <section class="budget-dashboard">
      <div class="permission-strip budget-strip">
        <span>Captura de solicitudes y movimientos presupuestales.</span>
        <span>${budgetCloudReady ? "Supabase activo" : budgetCloudMessage}</span>
      </div>
      <article class="form-panel budget-editor-panel budget-standalone-panel">
        <div class="budget-table-heading">
          <div>
            <p class="eyebrow">Nueva solicitud</p>
            <h3>Registrar movimiento</h3>
          </div>
          <span>${editable ? "Captura habilitada" : "Solo lectura"}</span>
        </div>
        <form id="budgetRequestForm" class="budget-form">
          <label>Fecha<input name="date" type="date" value="${new Date().toISOString().slice(0, 10)}" ${editable ? "" : "disabled"} /></label>
          <label>Periodo
            <select name="period" ${editable ? "" : "disabled"}>
              ${budgetPeriodOptions()}
            </select>
          </label>
          <label>Área
            <select name="area" ${editable ? "" : "disabled"}>
              ${budgetAreaOptions().map(([value, label]) => `<option value="${value}" ${budgetFilters.area === value ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
            </select>
          </label>
          <label>Concepto<input name="concept" placeholder="Ej. Material deportivo" ${editable ? "" : "disabled"} /></label>
          <label>Proveedor<input name="provider" placeholder="Proveedor o pendiente" ${editable ? "" : "disabled"} /></label>
          <label>Monto<input name="amount" type="number" min="0" step="100" placeholder="0" ${editable ? "" : "disabled"} /></label>
          <label>Tipo<input name="type" placeholder="Servicio, material, uniforme..." ${editable ? "" : "disabled"} /></label>
          <label>Prioridad
            <select name="priority" ${editable ? "" : "disabled"}>
              ${["Alta", "Media", "Baja"].map((value) => `<option>${value}</option>`).join("")}
            </select>
          </label>
          <label>Estatus
            <select name="status" ${editable ? "" : "disabled"}>
              ${["pendiente", "autorizado", "comprometido", "ejercido", "rechazado"].map((value) => `<option value="${value}">${budgetStatusLabel(value)}</option>`).join("")}
            </select>
          </label>
          <button class="primary-btn" type="submit" ${editable ? "" : "disabled"}>Crear solicitud</button>
        </form>
      </article>
    </section>
  `;
}

function renderBudgetEditPanel() {
  const row = selectedBudgetRequestEdit();
  const editable = canEditArea("compras");
  if (!row) return "";
  return `
    <article class="form-panel budget-editor-panel budget-standalone-panel budget-edit-request-panel">
      <div class="budget-table-heading">
        <div>
          <p class="eyebrow">Modificar solicitud</p>
          <h3>${escapeHtml(row.concept)}</h3>
        </div>
        <button class="ghost-btn compact-action" type="button" data-budget-edit-cancel>Cerrar</button>
      </div>
      <form id="budgetEditRequestForm" class="budget-form">
        <label>Fecha<input name="date" type="date" value="${escapeHtml(row.date)}" ${editable ? "" : "disabled"} /></label>
        <label>Periodo<select name="period" ${editable ? "" : "disabled"}>${[...new Set([row.period, ...budgetPeriods].filter(Boolean))].map((value) => `<option value="${escapeHtml(value)}" ${row.period === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}</select></label>
        <label>Área
          <select name="area" ${editable ? "" : "disabled"}>
            ${budgetAreaOptions().map(([value, label]) => `<option value="${value}" ${row.area === value ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
          </select>
        </label>
        <label>Concepto<input name="concept" value="${escapeHtml(row.concept)}" ${editable ? "" : "disabled"} /></label>
        <label>Proveedor<input name="provider" value="${escapeHtml(row.provider)}" ${editable ? "" : "disabled"} /></label>
        <label>Monto<input name="amount" type="number" min="0" step="100" value="${Math.round(row.amount || 0)}" ${editable ? "" : "disabled"} /></label>
        <label>Tipo<input name="type" value="${escapeHtml(row.type)}" ${editable ? "" : "disabled"} /></label>
        <label>Prioridad
          <select name="priority" ${editable ? "" : "disabled"}>
            ${["Alta", "Media", "Baja"].map((value) => `<option ${row.priority === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>Estatus
          <select name="status" ${editable ? "" : "disabled"}>
            ${["pendiente", "autorizado", "comprometido", "ejercido", "rechazado"].map((value) => `<option value="${value}" ${row.status === value ? "selected" : ""}>${budgetStatusLabel(value)}</option>`).join("")}
          </select>
        </label>
        <button class="primary-btn" type="submit" ${editable ? "" : "disabled"}>Guardar cambios</button>
      </form>
    </article>
  `;
}

function renderBudgetDashboard() {
  const selectedAreas = filteredBudgetAreas();
  const summaries = selectedAreas.map((row) => budgetAreaSummary(row.area));
  const requests = filteredBudgetRequests();
  const assigned = summaries.reduce((sum, row) => sum + row.assigned, 0);
  const spent = summaries.reduce((sum, row) => sum + row.spent, 0);
  const committed = summaries.reduce((sum, row) => sum + row.committed, 0);
  const available = Math.max(0, assigned - spent - committed);
  const usage = assigned ? Math.round(((spent + committed) / assigned) * 100) : 0;
  const pending = requests.filter((row) => row.status === "pendiente").length;
  const maxAssigned = Math.max(...summaries.map((row) => row.assigned), 1);
  const editable = canEditArea("compras");
  return `
    <section class="budget-dashboard">
      <div class="permission-strip budget-strip">
        <span>Control presupuestal por area. Dirección/Admin puede editar todo; compras valida proveedores, estatus y comprobación.</span>
        <span>${budgetCloudReady ? "Supabase activo" : budgetCloudMessage} · ${requests.length} solicitudes filtradas</span>
      </div>

      <div class="budget-filters">
        <label>Periodo
          <select class="budget-filter" data-filter="period">
            ${budgetPeriodOptions()}
          </select>
        </label>
        <label>Area
          <select class="budget-filter" data-filter="area">
            <option value="todos" ${budgetFilters.area === "todos" ? "selected" : ""}>Todas</option>
            ${budgetAreaOptions().map(([value, label]) => `<option value="${value}" ${budgetFilters.area === value ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
          </select>
        </label>
        <label>Estatus
          <select class="budget-filter" data-filter="status">
            <option value="todos" ${budgetFilters.status === "todos" ? "selected" : ""}>Todos</option>
            ${["pendiente", "autorizado", "comprometido", "ejercido", "rechazado"].map((value) => `<option value="${value}" ${budgetFilters.status === value ? "selected" : ""}>${budgetStatusLabel(value)}</option>`).join("")}
          </select>
        </label>
        ${isLeadership() ? `<button class="primary-btn compact-action" type="button" data-budget-new-period>Nuevo periodo</button>` : ""}
      </div>

      ${budgetPeriodFormOpen ? `
        <article class="form-panel budget-editor-panel budget-standalone-panel">
          <div class="budget-table-heading">
            <div>
              <p class="eyebrow">Nuevo ciclo presupuestal</p>
              <h3>Crear periodo con saldos en cero</h3>
            </div>
            <span>Los responsables se copian de ${escapeHtml(budgetFilters.period)}</span>
          </div>
          <form id="budgetPeriodForm" class="budget-form">
            <label>Código del periodo
              <input name="period" maxlength="4" pattern="[A-Za-z]{2}[0-9]{2}" placeholder="Ej. AD27" required />
            </label>
            <p>Se crearán las seis áreas sin presupuesto, solicitudes, gastos ni compromisos. El historial anterior permanecerá intacto.</p>
            <button class="primary-btn" type="submit">Crear periodo</button>
            <button class="secondary-btn" type="button" data-budget-cancel-period>Cancelar</button>
          </form>
        </article>
      ` : ""}

      ${renderBudgetEditPanel()}

      <div class="kpi-grid budget-kpi-strip">
        ${budgetKpiCard("circle-dollar-sign", "Presupuesto asignado", money(assigned), "base del periodo", "blue")}
        ${budgetKpiCard("trending-up", "Ejercido", money(spent), `${assigned ? Math.round(spent / assigned * 100) : 0}% del presupuesto`, "green")}
        ${budgetKpiCard("clipboard-list", "Comprometido", money(committed), "pendiente de cierre", "gold")}
        ${budgetKpiCard("wallet-cards", "Disponible", money(available), "saldo operativo", "teal")}
        ${budgetKpiCard("pie-chart", "% de uso", `${usage}%`, "ejercido + comprometido", "blue")}
        ${budgetKpiCard("clipboard-check", "Solicitudes pendientes", pending, "requieren decisión", "lav")}
      </div>

      <div class="budget-main-grid">
        <article class="chart-panel budget-chart-panel">
          <div class="chart-title-row">
            <div>
              <p class="eyebrow">Presupuesto vs real</p>
              <h3>Asignado, ejercido y comprometido por área</h3>
            </div>
            <span>${usage}% uso global</span>
          </div>
          <div class="budget-chart-legend">
            <span class="assigned"></span> Asignado
            <span class="spent"></span> Ejercido
            <span class="committed"></span> Comprometido
          </div>
          <div class="budget-column-chart">
            ${summaries.map((row) => `
              <div class="budget-column-group">
                <div class="budget-columns">
                  <span class="assigned" style="height:${Math.max(8, Math.round(row.assigned / maxAssigned * 100))}%"><em>${money(row.assigned)}</em></span>
                  <span class="spent" style="height:${Math.max(5, Math.round(row.spent / maxAssigned * 100))}%"><em>${money(row.spent)}</em></span>
                  <span class="committed" style="height:${Math.max(5, Math.round(row.committed / maxAssigned * 100))}%"><em>${money(row.committed)}</em></span>
                </div>
                <strong>${escapeHtml(budgetAreaLabel(row.area))}</strong>
              </div>
            `).join("")}
          </div>
        </article>

        <article class="chart-panel budget-semaphore-panel">
          <div class="chart-title-row">
            <div>
              <p class="eyebrow">Semáforo financiero</p>
              <h3>Áreas que requieren seguimiento</h3>
            </div>
          </div>
          <table class="budget-semaphore-table">
            <thead><tr><th>Área</th><th>% uso</th><th>Estatus</th><th>Disponible</th></tr></thead>
            <tbody>
              ${summaries.map((row) => `
                <tr>
                  <td><span class="budget-dot ${row.tone}"></span>${escapeHtml(budgetAreaLabel(row.area))}</td>
                  <td>${row.usage}%</td>
                  <td><span class="budget-health ${row.tone}">${budgetToneLabel(row.tone)}</span></td>
                  <td>${money(row.available)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </article>
      </div>

      <div class="budget-area-grid">
        ${summaries.map((row) => `
          <article class="budget-area-card ${row.tone}">
            <div>
              <span class="budget-area-icon"><i data-lucide="${budgetAreaIcon(row.area)}" aria-hidden="true"></i></span>
              <h3>${escapeHtml(budgetAreaLabel(row.area))}</h3>
            </div>
            <dl>
              <div><dt>Asignado</dt><dd>${money(row.assigned)}</dd></div>
              <div><dt>Ejercido</dt><dd>${money(row.spent)}</dd></div>
              <div><dt>Disponible</dt><dd>${money(row.available)}</dd></div>
            </dl>
            <span class="budget-health ${row.tone}">${budgetToneLabel(row.tone)}</span>
            <div class="budget-area-track"><span style="width:${Math.min(100, row.usage)}%"></span></div>
            <footer>
              <span>Responsable: ${escapeHtml(row.owner)}</span>
              <em>${row.rows.length} solicitudes</em>
            </footer>
          </article>
        `).join("")}
      </div>

      <div class="table-wrap budget-table-wrap">
        <div class="budget-table-heading">
          <div>
            <p class="eyebrow">Solicitudes recientes</p>
            <h3>Control de movimientos presupuestales</h3>
          </div>
          <button class="primary-btn compact-action" type="button" data-budget-new-request>Nueva solicitud</button>
        </div>
        <table>
          <thead><tr><th>Fecha</th><th>Área</th><th>Concepto</th><th>Proveedor</th><th>Monto</th><th>Estatus</th><th>Prioridad</th><th>Acciones</th></tr></thead>
          <tbody>
            ${requests.length ? requests.map((row) => `
              <tr>
                <td>${escapeHtml(row.date)}</td>
                <td>${escapeHtml(budgetAreaLabel(row.area))}</td>
                <td><strong>${escapeHtml(row.concept)}</strong><span>${escapeHtml(row.type)}</span></td>
                <td>${escapeHtml(row.provider)}</td>
                <td>${money(row.amount)}</td>
                <td>
                  <select class="budget-status-select budget-status ${escapeHtml(row.status)}" data-budget-status="${escapeHtml(row.id)}" ${editable ? "" : "disabled"}>
                    ${["pendiente", "autorizado", "comprometido", "ejercido", "rechazado"].map((status) => `<option value="${status}" ${row.status === status ? "selected" : ""}>${budgetStatusLabel(status)}</option>`).join("")}
                  </select>
                </td>
                <td>${escapeHtml(row.priority)}</td>
                <td>
                  <div class="table-actions compact-table-actions">
                    <button class="ghost-btn compact-action" type="button" data-budget-edit="${escapeHtml(row.id)}" ${editable ? "" : "disabled"}>Modificar</button>
                    <button class="danger-btn compact-action" type="button" data-budget-delete="${escapeHtml(row.id)}" ${isLeadership() ? "" : "disabled"}>Eliminar</button>
                  </div>
                </td>
              </tr>
            `).join("") : `<tr><td colspan="8">Sin solicitudes para los filtros seleccionados.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderClassesDashboard() {
  return `
    ${renderClassDisciplineIndicators()}
    ${renderClassTeacherPerformance()}
    ${renderClassScheduleComparison()}
    ${renderClassAlertsPanel()}
  `;
}

function renderClassExecutiveKpis(summary) {
  const semesterLabel = classDashboardSemesterLabel();
  const selectedBlock = classDashboardBlock === "auto" ? classDefaultDashboardBlock() : classDashboardBlock;
  const periodLabel = selectedBlock && selectedBlock !== "todos"
    ? `${semesterLabel} / ${selectedBlock}`
    : `${semesterLabel} / todos los bloques`;
  return `
    <section class="class-executive-kpis">
      <article class="kpi"><span>Inscritos Banner</span><strong>${summary.banner.toLocaleString("es-MX")}</strong><em>${escapeHtml(periodLabel)}</em></article>
      <article class="kpi"><span>Acreditados</span><strong>${summary.finished.toLocaleString("es-MX")}</strong><em>${summary.approvedRate}% global</em></article>
      <article class="kpi"><span>Bajas + NP</span><strong>${(summary.bajas + summary.np).toLocaleString("es-MX")}</strong><em>${summary.issueRate}% incidencia</em></article>
      <article class="kpi risk-red"><span>Grupos criticos</span><strong>${summary.riskCounts.red}</strong><em>requieren accion</em></article>
      <article class="kpi risk-yellow"><span>En atencion</span><strong>${summary.riskCounts.yellow}</strong><em>monitoreo</em></article>
      <article class="kpi risk-green"><span>Saludables</span><strong>${summary.riskCounts.green}</strong><em>mantener</em></article>
    </section>
  `;
}

function renderClassRiskBoard() {
  const rows = classDisciplineRows()
    .sort((a, b) => a.approvedRate - b.approvedRate || b.issueRate - a.issueRate)
    .slice(0, 12);
  return `
    <section class="class-risk-board">
      <div class="section-title compact">
        <div><p class="eyebrow">Semaforo operativo</p><h2>Disciplinas que requieren seguimiento</h2></div>
        <span class="session-pill">verde / amarillo / rojo</span>
      </div>
      <div class="class-risk-grid">
        ${rows.map((row) => {
          const risk = classRiskLevel(row);
          return `
            <article class="class-risk-card ${risk}">
              <div><span>${classRiskLabel(risk)}</span><strong>${row.discipline}</strong></div>
              <div class="class-risk-meter"><i style="width:${row.approvedRate}%"></i></div>
              <dl>
                <div><dt>Acreditacion</dt><dd>${row.approvedRate}%</dd></div>
                <div><dt>Bajas</dt><dd>${row.bajasRate}%</dd></div>
                <div><dt>NP</dt><dd>${row.npRate}%</dd></div>
              </dl>
              ${renderClassTeacherSummary(row.discipline, "card")}
              <p>${classOfferRecommendation(row)}</p>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderClassAlertsPanel() {
  const alerts = classOperationalAlerts();
  return `
    <section class="class-alert-panel">
      <div class="section-title compact">
        <div><p class="eyebrow">Alertas inteligentes</p><h2>Prioridades de intervencion</h2></div>
        <span class="session-pill">${alerts.length} alertas activas</span>
      </div>
      <div class="class-alert-list">
        ${alerts.length ? alerts.map((alert) => `
          <article class="class-alert ${alert.level}">
            <strong>${alert.type}</strong>
            <span>${alert.title}</span>
            <p>${alert.detail}</p>
            ${alert.discipline ? renderClassTeacherSummary(alert.discipline, "alert") : ""}
            <em>${alert.action}</em>
          </article>
        `).join("") : `<div class="empty-state">No hay alertas criticas con los umbrales actuales.</div>`}
      </div>
    </section>
  `;
}

function renderClassStudentLookup() {
  const rows = classStudentProfile(classStudentSearch);
  const summary = classStudentProfileSummary(rows);
  return `
    <section class="class-student-lookup">
      <div class="section-title compact">
        <div><p class="eyebrow">Perfil rapido</p><h2>Consulta por matricula</h2></div>
        <span class="session-pill">${summary.total ? `${summary.total} registros encontrados` : "CD Lista de Alumnos"}</span>
      </div>
      <div class="class-student-search">
        <label>Matricula<input id="classStudentSearch" value="${escapeHtml(classStudentSearch)}" placeholder="A01234567" /></label>
        <button class="ghost-btn" type="button" id="clearClassStudentSearch">Limpiar</button>
      </div>
      ${classStudentSearch ? renderClassStudentProfile(rows, summary) : `<div class="empty-state">Escribe una matricula para ver profesor, materia, CRN, periodo y estatus.</div>`}
    </section>
  `;
}

function renderClassStudentProfile(rows, summary) {
  if (!rows.length) return `<div class="empty-state">No se encontraron registros para ${escapeHtml(classStudentSearch)}.</div>`;
  return `
    <div class="class-student-summary">
      <div><strong>${summary.total}</strong><span>Registros</span></div>
      <div><strong>${summary.captured}</strong><span>Capturadas</span></div>
      <div><strong>${summary.bajas}</strong><span>Bajas</span></div>
      <div><strong>${summary.np}</strong><span>NP</span></div>
      <div><strong>${summary.pending}</strong><span>Pendientes</span></div>
    </div>
    <div class="table-wrap class-student-table">
      <table>
        <thead><tr><th>Materia</th><th>CRN / Grupo</th><th>Profesor</th><th>Periodo / Bloque</th><th>Carrera</th><th>Calificacion</th></tr></thead>
        <tbody>${rows.map((row) => `
          <tr>
            <td><strong>${escapeHtml(row.subject_name)}</strong><small>${escapeHtml(row.subject_code)}</small></td>
            <td>${escapeHtml(row.crn)} / ${escapeHtml(row.group_number)}</td>
            <td>${escapeHtml(row.teacher_name)}</td>
            <td>${escapeHtml(classGradePeriodBlockLabel(row))}</td>
            <td>${escapeHtml(row.career_code)} ${escapeHtml(row.semester_label)}</td>
            <td><span class="class-grade-pill ${classGradeStatus(row)}">${escapeHtml(row.grade || "Pendiente")}</span></td>
          </tr>
        `).join("")}</tbody>
      </table>
    </div>
  `;
}

function renderClassDisciplineIndicators() {
  const dashboardMetrics = classDashboardMetrics();
  const rows = classDisciplineRows();
  const worst = [...rows].sort((a, b) => a.approvedRate - b.approvedRate).slice(0, 6);
  const best = [...rows].sort((a, b) => b.approvedRate - a.approvedRate).slice(0, 6);
  const blockOptions = classDashboardBlockOptions();
  const selectedBlock = classDashboardBlock === "auto" ? classDefaultDashboardBlock() : classDashboardBlock;
  const semesterLabel = classDashboardSemesterLabel();
  return `
    <section class="class-indicators-panel">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">CD Indicadores clases</p>
          <h2>Indicadores por disciplina y periodo</h2>
        </div>
        <label class="class-dashboard-period-picker">
          <span>${escapeHtml(semesterLabel)} | Bloque activo</span>
          <select id="classDashboardBlock">
            <option value="auto" ${classDashboardBlock === "auto" ? "selected" : ""}>Actual (${escapeHtml(selectedBlock || "sin datos")})</option>
            ${blockOptions.map((block) => `<option value="${escapeHtml(block)}" ${classDashboardBlock === block ? "selected" : ""}>${escapeHtml(block)}</option>`).join("")}
            <option value="todos" ${classDashboardBlock === "todos" ? "selected" : ""}>Todos los bloques</option>
          </select>
        </label>
      </div>
      <div class="class-discipline-rankings">
        <article>
          <h3>Mayor riesgo</h3>
          ${worst.map((row) => renderClassDisciplineBar(row)).join("")}
        </article>
        <article>
          <h3>Mejor desempeno</h3>
          ${best.map((row) => renderClassDisciplineBar(row)).join("")}
        </article>
      </div>
      <div class="table-wrap class-indicators-table">
        <table>
          <thead>
            <tr>
              <th>Disciplina del periodo</th>
              <th>Alumnos inscritos Banner</th>
              <th>Bajas</th>
              <th>NP</th>
              <th>Alumnos que finalizaron y acreditaron</th>
              <th>Profesor responsable</th>
            </tr>
          </thead>
          <tbody>
            ${dashboardMetrics.disciplinesWithTotals.map((row) => `
              <tr class="${row.period === "PMT2" ? "period-two" : "period-one"} ${row.total ? "period-total" : ""}">
                <td>${row.discipline}</td>
                <td>${row.banner}</td>
                <td>${row.bajas}</td>
                <td>${row.np}</td>
                <td>${row.finished}</td>
                <td>${renderClassResponsibleTeacherCell(row)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderClassDisciplineBar(row) {
  const risk = classRiskLevel(row);
  const progressLabel = row.captured
    ? `${row.approvedRate}% acreditacion / ${row.issueRate}% incidencia`
    : `Sin calificaciones capturadas / ${row.total.toLocaleString("es-MX")} inscritos`;
  return `
    <div class="class-discipline-bar ${risk}">
      <div>
        <strong>${row.discipline}</strong>
        <span>${progressLabel}</span>
        ${renderClassTeacherSummary(row.discipline, "bar")}
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:${row.approvedRate}%"></div></div>
      <em>${classRiskLabel(risk)}</em>
    </div>
  `;
}

function classResponsibleTeachers(discipline) {
  const clean = normalizeText(discipline);
  if (!clean || isClassTotalDiscipline(discipline)) return [];
  const counts = new Map();
  effectiveClassGradeRows().forEach((row) => {
    if (normalizeText(row.subject_name) !== clean || !row.teacher_name) return;
    counts.set(row.teacher_name, (counts.get(row.teacher_name) || 0) + 1);
  });
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "es"))
    .map(([name, count]) => ({ name, count }));
}

function renderClassTeacherSummary(discipline, variant = "card") {
  const teachers = classResponsibleTeachers(discipline);
  if (!teachers.length) return `<div class="class-teacher-summary ${variant}"><span>Responsable</span><strong>Por asignar</strong></div>`;
  const visible = teachers.slice(0, variant === "bar" ? 1 : 2);
  const extra = teachers.length - visible.length;
  return `
    <div class="class-teacher-summary ${variant}">
      <span>Responsable${teachers.length > 1 ? "s" : ""}</span>
      <div>
        ${visible.map((teacher) => `<strong>${escapeHtml(teacher.name)} <em>${teacher.count} alumnos</em></strong>`).join("")}
        ${extra > 0 ? `<small>+${extra} profesor${extra === 1 ? "" : "es"}</small>` : ""}
      </div>
    </div>
  `;
}

function renderClassResponsibleTeacherCell(row) {
  if (row.total) {
    const total = Number(row.banner || 0);
    const finished = Number(row.finished || 0);
    const bajas = Number(row.bajas || 0);
    const np = Number(row.np || 0);
    const effectiveness = total ? Math.round((finished / total) * 100) : 0;
    return `
      <div class="class-period-effectiveness">
        <span>Efectividad del periodo</span>
        <strong>${effectiveness}%</strong>
        <em>${finished} acreditados de ${total} inscritos</em>
        <small>${bajas + np} bajas / NP</small>
      </div>
    `;
  }
  const teachers = classResponsibleTeachers(row.discipline);
  if (!teachers.length) return `<span class="class-teacher-mini muted">Por asignar</span>`;
  const visible = teachers.slice(0, 2);
  const hidden = teachers.slice(2);
  const extra = hidden.length;
  const rowKey = normalizeText(row.discipline);
  const expanded = expandedClassTeacherRows.has(rowKey);
  return `
    <div class="class-teacher-mini-list">
      ${visible.map((teacher) => `
        <span class="class-teacher-mini">
          ${escapeHtml(teacher.name)}
          <em>${teacher.count} alumnos</em>
        </span>
      `).join("")}
      ${extra > 0 ? `
        <button class="class-teacher-more" type="button" data-class-teachers="${escapeHtml(rowKey)}" aria-expanded="${expanded ? "true" : "false"}">
          ${expanded ? "Ocultar" : `+${extra} profesor${extra === 1 ? "" : "es"}`}
        </button>
        ${expanded ? hidden.map((teacher) => `
          <span class="class-teacher-mini extra">
            ${escapeHtml(teacher.name)}
            <em>${teacher.count} alumnos</em>
          </span>
        `).join("") : ""}
      ` : ""}
    </div>
  `;
}

function renderClassTeacherPerformance() {
  const performanceRows = classDashboardMetrics().teachers;
  const totals = performanceRows.reduce((acc, row) => {
    acc.total += row.total;
    acc.approved += row.approved;
    acc.failed += row.failed;
    return acc;
  }, { total: 0, approved: 0, failed: 0 });
  const approvedRate = totals.total ? Math.round((totals.approved / totals.total) * 100) : 0;
  const failedRate = totals.total ? 100 - approvedRate : 0;
  const bestTeachers = [...performanceRows].sort((a, b) => b.approvedRate - a.approvedRate).slice(0, 8);
  const focusTeachers = [...performanceRows].sort((a, b) => a.approvedRate - b.approvedRate).slice(0, 8);
  return `
    <section class="teacher-performance">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">CD Lista de Alumnos</p>
          <h2>Profesores por % de aprobados y reprobados</h2>
        </div>
        <span class="session-pill">${performanceRows.length} profesores  -  ${totals.total} registros</span>
      </div>
      <div class="teacher-summary">
        <div><strong>${approvedRate}%</strong><span>Aprobados global</span></div>
        <div><strong>${failedRate}%</strong><span>Reprobados / bajas</span></div>
        <div><strong>${totals.approved}</strong><span>Aprobados</span></div>
        <div><strong>${totals.failed}</strong><span>Reprobados</span></div>
      </div>
      <div class="teacher-list" hidden>
        ${performanceRows.map((row) => `
          <article class="teacher-row">
            <div class="teacher-meta">
              <strong>${row.teacher}</strong>
              <span>${row.total} alumnos  -  ${row.approved} aprobados  -  ${row.failed} reprobados/bajas</span>
            </div>
            <div class="teacher-bar" aria-label="${row.teacher}: ${row.approvedRate}% aprobados, ${row.failedRate}% reprobados">
              <span class="teacher-bar-approved" style="width:${row.approvedRate}%"></span>
              <span class="teacher-bar-failed" style="width:${row.failedRate}%"></span>
            </div>
            <div class="teacher-rates">
              <strong>${row.approvedRate}%</strong>
              <span>${row.failedRate}%</span>
            </div>
          </article>
        `).join("")}
      </div>
      <div class="teacher-performance-columns">
        ${renderTeacherPerformanceColumn("Mejor desempeno", "Referencias para replicar", bestTeachers, "best")}
        ${renderTeacherPerformanceColumn("Bajo desempeno", "Seguimiento prioritario", focusTeachers, "focus")}
      </div>
    </section>
  `;
}

function renderTeacherPerformanceColumn(title, subtitle, rows, tone) {
  return `
    <article class="teacher-rank-panel ${tone}">
      <div class="teacher-rank-heading">
        <div>
          <h3>${title}</h3>
          <span>${subtitle}</span>
        </div>
        <em>${rows.length} profesores</em>
      </div>
      <div class="teacher-compact-list">
        ${rows.map((row, index) => `
          <div class="teacher-compact-row">
            <div class="teacher-rank-number">${index + 1}</div>
            <div class="teacher-compact-meta">
              <strong>${row.teacher}</strong>
              <span>${row.total} alumnos  -  ${row.approved} aprobados  -  ${row.failed} reprobados/bajas</span>
            </div>
            <div class="teacher-score ${tone}" style="--score:${row.approvedRate}%">
              <strong>${row.approvedRate}%</strong>
              <span>${row.failedRate}% riesgo</span>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function classGradeNumericValue(value) {
  const normalized = String(value ?? "").trim().replace(",", ".");
  if (!normalized) return null;
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function classGradeOutcome(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return "pending";
  const normalized = normalizeText(raw);
  const numericGrade = classGradeNumericValue(raw);
  if (normalized.includes("baja")) return "baja";
  if (normalized === "np" || normalized.includes("no acredit") || normalized.includes("reprob") || (numericGrade !== null && numericGrade < 70)) return "np";
  if (normalized.includes("acredit") || normalized.includes("aprob") || (numericGrade !== null && numericGrade >= 70)) return "approved";
  return "pending";
}

function classPeriodSortValue(period) {
  const clean = String(period || "").trim().toUpperCase();
  const pmt = clean.match(/^PMT\s*([0-9]+)/);
  if (pmt) return 300000 + Number(pmt[1] || 0);
  const semester = clean.match(/^(AD|FJ|IN)\s*([0-9]{2,4})/);
  if (semester) {
    const year = Number(semester[2].length === 2 ? `20${semester[2]}` : semester[2]);
    const order = { FJ: 1, IN: 2, AD: 3 }[semester[1]] || 0;
    return year * 10 + order;
  }
  return clean && !normalizeText(clean).includes("sin periodo") ? 1000 : 0;
}

function classDashboardBlockOptions() {
  return [...new Set(effectiveClassGradeRows()
    .map((row) => classGradeBlockLabel(row))
    .filter(Boolean))]
    .sort((a, b) => classPeriodSortValue(b) - classPeriodSortValue(a) || a.localeCompare(b, "es", { numeric: true }));
}

function classDefaultDashboardBlock() {
  const options = classDashboardBlockOptions();
  return options.find((block) => /^PMT\s*3/.test(block)) || options[0] || "";
}

function classDashboardSemesterLabel() {
  const semesters = [...new Set(classDashboardRows()
    .map(classGradeSemesterLabel)
    .filter(Boolean))]
    .sort((a, b) => classPeriodSortValue(b) - classPeriodSortValue(a) || a.localeCompare(b, "es", { numeric: true }));
  return semesters[0] || "Periodo sin clasificar";
}

function classDashboardRows() {
  const rows = effectiveClassGradeRows();
  const hasSemesterRows = rows.some((row) => classGradeSemesterLabel(row));
  const eligibleRows = hasSemesterRows ? rows.filter((row) => classGradeSemesterLabel(row)) : rows;
  const selectedBlock = classDashboardBlock === "auto" ? classDefaultDashboardBlock() : classDashboardBlock;
  if (!selectedBlock || selectedBlock === "todos") return eligibleRows.filter((row) => classGradeBlockLabel(row) || classGradeSemesterLabel(row));
  return eligibleRows.filter((row) => classGradeBlockLabel(row) === selectedBlock);
}

function buildClassDashboardMetrics(rows) {
  const disciplineMap = new Map();
  const teacherMap = new Map();
  const periods = new Set();

  (Array.isArray(rows) ? rows : []).forEach((row) => {
    const discipline = String(row.subject_name || "").trim();
    if (!discipline) return;
    if (isClassTotalDiscipline(discipline)) return;
    const period = classGradeSemesterLabel(row) || classGradeBlockLabel(row) || "Sin periodo";
    const grade = String(row.grade ?? "").trim();
    const outcome = classGradeOutcome(grade);
    const isBaja = outcome === "baja";
    const isNp = outcome === "np";
    const isApproved = outcome === "approved";
    periods.add(period);

    const disciplineKey = `${period}\u0000${normalizeText(discipline)}`;
    if (!disciplineMap.has(disciplineKey)) {
      disciplineMap.set(disciplineKey, { period, discipline, banner: 0, bajas: 0, np: 0, finished: 0, pending: 0 });
    }
    const disciplineRow = disciplineMap.get(disciplineKey);
    disciplineRow.banner += 1;
    if (isBaja) disciplineRow.bajas += 1;
    else if (isNp) disciplineRow.np += 1;
    else if (isApproved) disciplineRow.finished += 1;
    else disciplineRow.pending += 1;

    const teacher = String(row.teacher_name || "").trim();
    if (!teacher || !grade) return;
    if (!teacherMap.has(teacher)) teacherMap.set(teacher, { teacher, total: 0, approved: 0, failed: 0 });
    const teacherRow = teacherMap.get(teacher);
    teacherRow.total += 1;
    if (isApproved) teacherRow.approved += 1;
    else teacherRow.failed += 1;
  });

  const periodList = [...periods].sort((a, b) => a.localeCompare(b, "es", { numeric: true }));
  const disciplines = [...disciplineMap.values()].sort((a, b) =>
    periodList.indexOf(a.period) - periodList.indexOf(b.period)
    || a.discipline.localeCompare(b.discipline, "es")
  );
  const disciplinesWithTotals = periodList.flatMap((period, index) => {
    const periodRows = disciplines.filter((row) => row.period === period);
    const total = periodRows.reduce((acc, row) => {
      acc.banner += row.banner;
      acc.bajas += row.bajas;
      acc.np += row.np;
      acc.finished += row.finished;
      acc.pending += row.pending || 0;
      return acc;
    }, { period, discipline: `Totales ${period}`, banner: 0, bajas: 0, np: 0, finished: 0, pending: 0, total: true, periodIndex: index });
    return [...periodRows.map((row) => ({ ...row, periodIndex: index })), total];
  });
  const teachers = [...teacherMap.values()]
    .map((row) => ({
      ...row,
      approvedRate: row.total ? Math.round((row.approved / row.total) * 100) : 0,
      failedRate: row.total ? Math.round((row.failed / row.total) * 100) : 0
    }))
    .sort((a, b) => b.approvedRate - a.approvedRate || a.teacher.localeCompare(b.teacher, "es"));

  return { periods: periodList, disciplines, disciplinesWithTotals, teachers };
}

function classDashboardMetrics() {
  const rows = classDashboardRows();
  if (rows.length) return buildClassDashboardMetrics(rows);
  return {
    periods: ["PMT1", "PMT2"],
    disciplines: classDisciplineIndicators.filter((row) => !row.total),
    disciplinesWithTotals: classDisciplineIndicators,
    teachers: classTeacherPerformance
  };
}

function classGradeStatus(row) {
  const outcome = classGradeOutcome(row.grade);
  if (outcome === "pending") return "pendiente";
  if (outcome === "baja") return "baja";
  if (outcome === "np") return "np";
  return "capturada";
}

function classDisciplineScore(row) {
  const total = Number(row.banner || 0);
  const bajas = Number(row.bajas || 0);
  const np = Number(row.np || 0);
  const finished = Number(row.finished || 0);
  const pending = Number(row.pending || 0);
  const captured = Math.max(0, total - pending);
  const approvedRate = total ? Math.round((finished / total) * 100) : 0;
  const npRate = total ? Math.round((np / total) * 100) : 0;
  const bajasRate = total ? Math.round((bajas / total) * 100) : 0;
  const issueRate = total ? Math.round(((bajas + np) / total) * 100) : 0;
  const captureRate = total ? Math.round((captured / total) * 100) : 0;
  return { ...row, total, bajas, np, finished, pending, captured, approvedRate, npRate, bajasRate, issueRate, captureRate };
}

function classRiskLevel(row) {
  const score = classDisciplineScore(row);
  if (!score.captured) return "pending";
  if (score.approvedRate < 60 || score.issueRate >= 30) return "red";
  if (score.approvedRate < 75 || score.issueRate >= 18) return "yellow";
  return "green";
}

function classRiskLabel(level) {
  if (level === "pending") return "Sin captura";
  return level === "red" ? "Critico" : level === "yellow" ? "Atencion" : "Saludable";
}

function classOfferRecommendation(row) {
  const score = classDisciplineScore(row);
  const risk = classRiskLevel(row);
  if (risk === "pending") return "Cargar calificaciones o estatus para calcular desempeno real.";
  if (risk === "red") {
    if (score.npRate >= 20) return "Revisar seguimiento de asistencia y contacto temprano.";
    if (score.bajasRate >= 18) return "Revisar horario, profesor, cupo o permanencia del grupo.";
    return "Priorizar intervencion de coordinacion antes del siguiente periodo.";
  }
  if (risk === "yellow") return "Monitorear semanalmente y reforzar comunicacion con alumnos.";
  return "Mantener oferta y usar como referencia de buenas practicas.";
}

function classDisciplineRows() {
  return classDashboardMetrics().disciplines.map(classDisciplineScore);
}

function classOperationalSummary() {
  const totals = classDisciplineRows().reduce((acc, row) => {
    acc.banner += row.total;
    acc.bajas += row.bajas;
    acc.np += row.np;
    acc.finished += row.finished;
    acc.pending += row.pending;
    acc.captured += row.captured;
    return acc;
  }, { banner: 0, bajas: 0, np: 0, finished: 0, pending: 0, captured: 0 });
  const approvedRate = totals.banner ? Math.round((totals.finished / totals.banner) * 100) : 0;
  const issueRate = totals.banner ? Math.round(((totals.bajas + totals.np) / totals.banner) * 100) : 0;
  const riskCounts = classDisciplineRows().reduce((acc, row) => {
    acc[classRiskLevel(row)] += 1;
    return acc;
  }, { green: 0, yellow: 0, red: 0, pending: 0 });
  return { ...totals, approvedRate, issueRate, riskCounts };
}

function classOperationalAlerts() {
  const disciplineAlerts = classDisciplineRows().flatMap((row) => {
    const alerts = [];
    if (!row.captured) return alerts;
    if (row.npRate >= 20) alerts.push({ type: "NP alto", level: "red", title: row.discipline, discipline: row.discipline, detail: `${row.npRate}% NP (${row.np} alumnos)`, action: "Revisar asistencia y comunicacion temprana" });
    if (row.bajasRate >= 18) alerts.push({ type: "Bajas altas", level: row.bajasRate >= 25 ? "red" : "yellow", title: row.discipline, discipline: row.discipline, detail: `${row.bajasRate}% bajas (${row.bajas} alumnos)`, action: "Analizar horario, cupo y profesor" });
    if (row.approvedRate < 65) alerts.push({ type: "Acreditacion baja", level: "red", title: row.discipline, discipline: row.discipline, detail: `${row.approvedRate}% acreditacion`, action: "Priorizar intervencion operativa" });
    return alerts;
  });
  const teacherAlerts = classDashboardMetrics().teachers
    .filter((row) => row.approvedRate < 60)
    .map((row) => ({ type: "Profesor en seguimiento", level: row.approvedRate < 50 ? "red" : "yellow", title: row.teacher, detail: `${row.approvedRate}% aprobados / ${row.failedRate}% reprobados`, action: "Revisar contexto del grupo y carga semanal" }));
  return [...disciplineAlerts, ...teacherAlerts]
    .sort((a, b) => (a.level === "red" ? 0 : 1) - (b.level === "red" ? 0 : 1))
    .slice(0, 12);
}

function classStudentProfile(matricula) {
  const clean = normalizeMatricula(matricula);
  if (!clean) return [];
  return effectiveClassGradeRows()
    .filter((row) => normalizeMatricula(row.matricula) === clean)
    .sort((a, b) => String(b.period_label).localeCompare(String(a.period_label)) || String(a.subject_name).localeCompare(String(b.subject_name), "es"));
}

function classStudentProfileSummary(rows) {
  const total = rows.length;
  const captured = rows.filter((row) => classGradeStatus(row) === "capturada").length;
  const bajas = rows.filter((row) => classGradeStatus(row) === "baja").length;
  const np = rows.filter((row) => classGradeStatus(row) === "np").length;
  const pending = rows.filter((row) => classGradeStatus(row) === "pendiente").length;
  return { total, captured, bajas, np, pending };
}

function scheduleSnapshotKey(row) {
  return [row.source, row.professor, row.discipline, row.day, row.start, row.end, row.installation, row.group].map((value) => normalizeText(value)).join("|");
}

function loadClassScheduleComparison() {
  try {
    return JSON.parse(localStorage.getItem(CLASS_SCHEDULE_SNAPSHOT_KEY) || "null");
  } catch {
    return null;
  }
}

function saveClassScheduleSnapshot(rows, meta = {}) {
  const snapshot = {
    at: new Date().toISOString(),
    ...meta,
    rows: rows.map((row) => ({
      source: row.source,
      professor: row.professor,
      discipline: row.discipline,
      day: row.day,
      start: row.start,
      end: row.end,
      installation: row.installation,
      group: row.group || ""
    }))
  };
  localStorage.setItem(CLASS_SCHEDULE_SNAPSHOT_KEY, JSON.stringify(snapshot));
}

function compareScheduleSnapshot(previousRows, nextRows) {
  const previous = new Map((previousRows || []).map((row) => [scheduleSnapshotKey(row), row]));
  const next = new Map((nextRows || []).map((row) => [scheduleSnapshotKey(row), row]));
  const added = [...next.entries()].filter(([key]) => !previous.has(key)).map(([, row]) => row);
  const removed = [...previous.entries()].filter(([key]) => !next.has(key)).map(([, row]) => row);
  return { added, removed, unchanged: nextRows.length - added.length };
}

function classScheduleComparisonSummary() {
  if (classScheduleComparison) return classScheduleComparison;
  const snapshot = loadClassScheduleComparison();
  if (!snapshot?.rows?.length) {
    return { hasSnapshot: false, added: [], removed: [], unchanged: 0, previousCount: 0, currentCount: scheduleMasterRows().length, at: "" };
  }
  const currentRows = scheduleMasterRows();
  return {
    hasSnapshot: true,
    ...compareScheduleSnapshot(snapshot.rows, currentRows),
    previousCount: snapshot.rows.length,
    currentCount: currentRows.length,
    at: snapshot.at || ""
  };
}

function vivenciaMetricParticipants(row) {
  return Math.max(
    Number(row?.unique_participants || 0) || 0,
    Number(row?.participant_records || 0) || 0,
    Number(row?.reported_total_participants || 0) || 0
  );
}

function vivenciaCompletionState(row, metrics) {
  const participants = vivenciaMetricParticipants(metrics || row);
  if (participants > 0) {
    return { label: "Completado", className: "completado" };
  }
  return {
    label: row.status || "planeado",
    className: row.status || "planeado"
  };
}

function vivenciaEventParticipants(eventId) {
  return vivenciaParticipants.filter((participant) => participant.event_id === eventId);
}

function vivenciaUniqueParticipantRows(events = null) {
  const eventIds = Array.isArray(events) ? new Set(events.map((event) => event.id)) : null;
  const seen = new Set();
  return vivenciaParticipants.filter((participant) => {
    if (eventIds && !eventIds.has(participant.event_id)) return false;
    const matricula = normalizeMatricula(participant.matricula);
    if (!isValidVivenciaMatricula(matricula) || seen.has(matricula)) return false;
    seen.add(matricula);
    return true;
  });
}

function vivenciaEventUniqueParticipantCount(eventId) {
  return new Set(
    vivenciaEventParticipants(eventId)
      .map((participant) => normalizeMatricula(participant.matricula))
      .filter(Boolean)
  ).size;
}

function vivenciaParticipantGender(value) {
  const gender = normalizeText(value);
  if (["mujer", "femenino", "femenina", "female"].includes(gender)) return "Mujeres";
  if (["hombre", "masculino", "masculina", "male"].includes(gender)) return "Hombres";
  return "Sin dato";
}

function vivenciaGenderRows(events = vivenciaVisibleEvents(), metricsByEvent = vivenciaEventMetricMap(), participantRows = vivenciaParticipants) {
  const totals = { Mujeres: 0, Hombres: 0, "Sin dato": 0 };
  const participantsByEvent = new Map();
  participantRows.forEach((participant) => {
    if (!participantsByEvent.has(participant.event_id)) participantsByEvent.set(participant.event_id, []);
    participantsByEvent.get(participant.event_id).push(participant);
  });
  events.forEach((event) => {
    const metrics = metricsByEvent.get(event.id) || event;
    const participationTotal = Math.max(0, Number(vivenciaMetricParticipants(metrics)) || 0);
    if (!participationTotal) return;

    const participantsByMatricula = new Map();
    (participantsByEvent.get(event.id) || []).forEach((participant) => {
      const matricula = normalizeMatricula(participant.matricula);
      if (matricula && !participantsByMatricula.has(matricula)) participantsByMatricula.set(matricula, participant);
    });

    let women = 0;
    let men = 0;
    let unspecified = 0;
    const reportedWomen = Math.max(0, Number(metrics.reported_women ?? metrics.women ?? 0) || 0);
    const reportedMen = Math.max(0, Number(metrics.reported_men ?? metrics.men ?? 0) || 0);
    const hasReportedGender = reportedWomen + reportedMen > 0;
    if (participantsByMatricula.size >= participationTotal || (participantsByMatricula.size && !hasReportedGender)) {
      participantsByMatricula.forEach((participant) => {
        const student = findStudentInDatabase(participant.matricula);
        const gender = vivenciaParticipantGender(student?.genero || participant.genero);
        if (gender === "Mujeres") women += 1;
        else if (gender === "Hombres") men += 1;
        else unspecified += 1;
      });
    } else {
      women = reportedWomen;
      men = reportedMen;
    }

    const categorized = women + men + unspecified;
    if (categorized < participationTotal) unspecified += participationTotal - categorized;
    if (categorized > participationTotal) {
      const scale = participationTotal / categorized;
      women = Math.min(participationTotal, Math.round(women * scale));
      men = Math.min(participationTotal - women, Math.round(men * scale));
      unspecified = Math.max(0, participationTotal - women - men);
    }
    totals.Mujeres += women;
    totals.Hombres += men;
    totals["Sin dato"] += unspecified;
  });
  return Object.entries(totals).map(([label, value]) => ({
    label: label === "Sin dato" ? "Sin género registrado" : label,
    value
  }));
}

function vivenciaImagesForEvent(eventId) {
  return vivenciaEventImages.filter((image) => image.event_id === eventId);
}

function renderVivenciaGenderBreakdown(events, metricsByEvent = vivenciaEventMetricMap()) {
  const rows = vivenciaGenderRows(events, metricsByEvent);
  const total = rows.reduce((sum, row) => sum + row.value, 0);
  const gradient = total
    ? rows.reduce((parts, row, index) => {
      const colors = ["#bf307e", "#1672ae", "#9ba9b5"];
      const start = rows.slice(0, index).reduce((sum, current) => sum + current.value, 0) / total * 100;
      const end = start + row.value / total * 100;
      return `${parts}${colors[index]} ${start}% ${end}%, `;
    }, "").replace(/, $/, "")
    : "#dfe7ed 0 100%";
  return `
    <article class="chart-panel vivencia-gender-card">
      <div class="chart-title-row">
        <div><p class="eyebrow">Composición</p><h3>Impacto por género</h3></div>
        <span>Participaciones</span>
      </div>
      <div class="vivencia-gender-content">
        <div class="vivencia-gender-donut" style="background:conic-gradient(${gradient})"><div><strong>${total.toLocaleString("es-MX")}</strong><span>participaciones</span></div></div>
        <div class="vivencia-gender-legend">
          ${rows.map((row, index) => `<div><span class="tone-${index + 1}"></span><strong>${escapeHtml(row.label)}</strong><em>${row.value.toLocaleString("es-MX")}</em></div>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderVivenciaRecentEvents(events) {
  const rows = events
    .filter((event) => !event.__planningFallback)
    .slice()
    .sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || "")))
    .slice(0, 10);
  if (!rows.length) return `<div class="vivencia-empty-mini">Todavía no hay eventos registrados.</div>`;
  return `
    <div class="vivencia-recent-list">
      ${rows.map((event, index) => `
        <button type="button" data-vivencia-detail="${escapeHtml(event.id)}">
          <span>${index + 1}</span>
          <div><strong>${escapeHtml(event.event_name || "Evento sin nombre")}</strong><small>${escapeHtml(event.event_date || "Sin fecha")} · ${escapeHtml(event.campus || "Sin campus")}</small></div>
          <em>${vivenciaImagesForEvent(event.id).length ? `${vivenciaImagesForEvent(event.id).length} fotos` : ""}</em>
        </button>
      `).join("")}
    </div>
  `;
}

function groupVivenciaParticipants(field, fallback = "Sin dato") {
  const uniqueByGroup = new Map();
  vivenciaParticipants.forEach((participant) => {
    const key = String(participant[field] || fallback).trim() || fallback;
    if (!uniqueByGroup.has(key)) uniqueByGroup.set(key, new Set());
    uniqueByGroup.get(key).add(normalizeMatricula(participant.matricula));
  });
  return [...uniqueByGroup.entries()]
    .map(([label, set]) => ({ label, value: set.size }))
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

function vivenciaMonthLabel(dateValue) {
  if (!dateValue) return "Sin fecha";
  const date = new Date(`${dateValue}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "Sin fecha";
  return date.toLocaleDateString("es-MX", { month: "short", year: "2-digit" });
}

function renderVivenciaBars(rows, options = {}) {
  const max = Math.max(...rows.map((row) => row.value), 1);
  if (!rows.length) return `<div class="vivencia-empty-mini">Sin datos suficientes todavia.</div>`;
  return `
    <div class="vivencia-bars ${options.compact ? "compact" : ""}">
      ${rows.map((row) => {
        const percent = options.total ? Math.round((row.value / options.total) * 100) : null;
        return `
          <div class="vivencia-bar-row">
            <span>${escapeHtml(row.label)}</span>
            <div class="bar-track"><div class="bar-fill" style="width:${Math.max(4, Math.round((row.value / max) * 100))}%"></div></div>
            <strong>${row.value}${percent !== null ? ` (${percent}%)` : ""}</strong>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderVivenciaGoalBars(rows) {
  if (!rows.length) return `<div class="vivencia-empty-mini">Sin eventos con meta capturada.</div>`;
  const max = Math.max(...rows.flatMap((row) => [row.goal, row.result]), 1);
  return `
    <div class="vivencia-goal-bars">
      ${rows.map((row) => `
        <article>
          <div><strong>${escapeHtml(row.label)}</strong><span>${row.result} de ${row.goal}</span></div>
          <div class="vivencia-goal-track"><span style="width:${Math.round((row.goal / max) * 100)}%"></span><em style="width:${Math.round((row.result / max) * 100)}%"></em></div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderVivenciaUpcoming(events) {
  if (!events.length) return `<div class="vivencia-empty-mini">No hay eventos próximos en los siguientes 15 días.</div>`;
  return `
    <div class="vivencia-upcoming-list">
      ${events.map((event) => `
        <article>
          <time>${escapeHtml(event.event_date)}</time>
          <div>
            <strong>${escapeHtml(event.event_name || "")}</strong>
            <span>${escapeHtml(event.responsible_name || "Responsable pendiente")}  -  Meta ${event.participation_goal ?? "sin meta"}</span>
          </div>
          <em>${event.is_signature_event ? "Insignia" : escapeHtml(event.status || "planeado")}</em>
        </article>
      `).join("")}
    </div>
  `;
}

function isVisibleVivenciaEvent(event) {
  return event?.archived_at == null
    && !String(event?.event_name || "").startsWith("__OCULTAR_ACTIVIDAD__");
}

function vivenciaEventMetricMap() {
  return new Map(vivenciaEventMetrics.map((row) => [row.event_id, row]));
}

function vivenciaEventDate(event) {
  const date = new Date(`${event?.event_date || ""}T12:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function vivenciaEventParticipantsCount(event, metricsByEvent = vivenciaEventMetricMap()) {
  return vivenciaMetricParticipants(metricsByEvent.get(event.id) || event);
}

function vivenciaEventGoal(event, metricsByEvent = vivenciaEventMetricMap()) {
  return Number((metricsByEvent.get(event.id) || event)?.participation_goal || 0);
}

function vivenciaStateLabel(status) {
  const labels = {
    planeado: "Planeado",
    realizado: "Realizado",
    cancelado: "Cancelado",
    pospuesto: "Pospuesto",
    completado: "Completado"
  };
  return labels[status] || status || "Planeado";
}

function vivenciaVisibleEvents() {
  return vivenciaDashboardEvents()
    .filter(isVisibleVivenciaEvent)
    .sort((a, b) => String(a.event_date || "").localeCompare(String(b.event_date || "")));
}

function vivenciaVisibleMetrics() {
  const events = vivenciaVisibleEvents();
  const metricsByEvent = vivenciaEventMetricMap();
  return events.map((event) => {
    const metric = metricsByEvent.get(event.id);
    if (!metric) return { ...event, event_id: event.id };
    const merged = { ...event, ...metric, event_id: event.id };
    ["reported_total_participants", "reported_men", "reported_women"].forEach((field) => {
      if (merged[field] == null) merged[field] = event[field] ?? null;
    });
    return merged;
  });
}

function vivenciaPlanningEvents() {
  return (planningCalendarRows || [])
    .map((row) => buildVivenciaEventPayloadFromPlanningRow(row))
    .filter(Boolean)
    .map((event) => ({
      ...event,
      id: `planning-${event.planning_activity_id}`,
      responsible_name: "Planeación Semestral",
      participation_goal: 0,
      reported_total_participants: 0,
      is_signature_event: false,
      archived_at: null,
      __planningFallback: true
    }));
}

function vivenciaDashboardEvents() {
  const eventIds = new Set(vivenciaEvents.map((event) => event.id).filter(Boolean));
  const metricFallback = vivenciaEventMetrics
    .filter((metric) => metric.event_id && !eventIds.has(metric.event_id))
    .map((metric) => ({
      ...metric,
      id: metric.event_id,
      archived_at: null,
      __metricsFallback: true
    }));
  const connectedEvents = [...vivenciaEvents, ...metricFallback];
  const existingKeys = new Set(connectedEvents
    .map((event) => event.planning_activity_id || event.source_row_key || `${normalizeText(event.event_name)}|${event.event_date}`)
    .filter(Boolean));
  const fallback = vivenciaPlanningEvents()
    .filter((event) => !existingKeys.has(event.planning_activity_id || event.source_row_key || `${normalizeText(event.event_name)}|${event.event_date}`));
  return [...connectedEvents, ...fallback];
}

function vivenciaCalendarBaseDate(events) {
  if (/^\d{4}-\d{2}$/.test(vivenciaCalendarMonth)) {
    const selected = new Date(`${vivenciaCalendarMonth}-01T00:00:00`);
    if (!Number.isNaN(selected.getTime())) return selected;
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const next = events
    .map(vivenciaEventDate)
    .filter((date) => date && date >= today)
    .sort((a, b) => a - b)[0];
  return next || today;
}

function renderVivenciaCalendar(events, baseDate, options = {}) {
  const planningArea = options.planningArea || "";
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const days = [];
  for (let i = 0; i < startOffset; i += 1) days.push(null);
  for (let day = 1; day <= lastDay.getDate(); day += 1) days.push(new Date(year, month, day));
  while (days.length % 7 !== 0) days.push(null);
  const eventsByDay = new Map();
  events.forEach((event) => {
    const date = vivenciaEventDate(event);
    if (!date || date.getFullYear() !== year || date.getMonth() !== month) return;
    const key = String(date.getDate());
    if (!eventsByDay.has(key)) eventsByDay.set(key, []);
    eventsByDay.get(key).push(event);
  });
  return `
    <article class="chart-panel vivencia-calendar-panel">
      <div class="chart-title-row">
        <div>
          <p class="eyebrow">Calendario mensual</p>
          <h3>${baseDate.toLocaleDateString("es-MX", { month: "long", year: "numeric" })}</h3>
        </div>
        <div class="planning-month-controls vivencia-calendar-controls" aria-label="Navegación del calendario">
          ${planningArea
            ? `<button type="button" data-planning-month="previous" data-planning-area="${escapeHtml(planningArea)}" aria-label="Mes anterior" title="Mes anterior">&#8249;</button>
               <button type="button" data-planning-month="today" data-planning-area="${escapeHtml(planningArea)}" class="vivencia-calendar-today">Hoy</button>
               <button type="button" data-planning-month="next" data-planning-area="${escapeHtml(planningArea)}" aria-label="Mes siguiente" title="Mes siguiente">&#8250;</button>`
            : `<button type="button" data-vivencia-month="previous" aria-label="Mes anterior" title="Mes anterior">&#8249;</button>
               <button type="button" data-vivencia-month="today" class="vivencia-calendar-today">Hoy</button>
               <button type="button" data-vivencia-month="next" aria-label="Mes siguiente" title="Mes siguiente">&#8250;</button>`}
        </div>
      </div>
      <div class="vivencia-calendar">
        ${["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((label) => `<strong>${label}</strong>`).join("")}
        ${days.map((date) => {
          if (!date) return `<div class="vivencia-calendar-day muted"></div>`;
          const dayEvents = eventsByDay.get(String(date.getDate())) || [];
          return `
            <div class="vivencia-calendar-day">
              <time>${date.getDate()}</time>
              ${dayEvents.slice(0, 3).map((event, eventIndex) => planningArea
                ? event.__communicationEvent
                  ? `<button type="button" data-communication-detail="${escapeHtml(event.id)}" class="${escapeHtml(event.status || "planeado")}">${escapeHtml(event.event_name || "Evento")}</button>`
                  : `<button type="button" data-planning-detail="${escapeHtml(event.id)}" data-planning-instance="communication-calendar:${escapeHtml(event.event_date || "")}:${escapeHtml(event.id)}:${eventIndex}" class="${escapeHtml(event.status || "planeado")}">${escapeHtml(event.event_name || "Evento")}</button>`
                : `<button type="button" data-vivencia-detail="${escapeHtml(event.id)}" class="${escapeHtml(event.status || "planeado")}">${escapeHtml(event.event_name || "Evento")}</button>`).join("")}
              ${dayEvents.length > 3 ? `<em>+${dayEvents.length - 3}</em>` : ""}
            </div>
          `;
        }).join("")}
      </div>
    </article>
  `;
}

function renderVivenciaEventCards(events, metricsByEvent) {
  if (!events.length) return `<div class="vivencia-empty-mini">No hay eventos próximos registrados.</div>`;
  return `
    <div class="vivencia-event-card-list">
      ${events.map((event) => `
        <article class="vivencia-event-card" data-vivencia-detail="${escapeHtml(event.id)}">
          <time>${escapeHtml(event.event_date || "Sin fecha")}</time>
          <div>
            <strong>${escapeHtml(event.event_name || "Evento sin nombre")}</strong>
            <span>${escapeHtml(event.responsible_name || "Responsable pendiente")}</span>
          </div>
          <em class="${escapeHtml(event.status || "planeado")}">${vivenciaStateLabel(event.status)}</em>
          <small>Meta ${vivenciaEventGoal(event, metricsByEvent) || "sin meta"} · ${vivenciaEventParticipantsCount(event, metricsByEvent)} participantes</small>
        </article>
      `).join("")}
    </div>
  `;
}

function renderVivenciaTopEvents(events, metricsByEvent) {
  const rows = events
    .map((event) => ({
      event,
      participants: vivenciaEventParticipantsCount(event, metricsByEvent),
      goal: vivenciaEventGoal(event, metricsByEvent)
    }))
    .sort((a, b) => b.participants - a.participants || b.goal - a.goal || String(a.event.event_date).localeCompare(String(b.event.event_date)))
    .slice(0, 15);
  if (!rows.length) return `<div class="vivencia-empty-mini">Sin eventos para ranking.</div>`;
  const max = Math.max(...rows.map((row) => row.participants || row.goal), 1);
  return `
    <div class="vivencia-top-list">
      ${rows.map((row, index) => `
        <article>
          <span>${index + 1}</span>
          <div>
            <strong>${escapeHtml(row.event.event_name || "Evento sin nombre")}</strong>
            <small><b>${row.participants.toLocaleString("es-MX")}</b> alumnos impactados · Meta ${row.goal ? row.goal.toLocaleString("es-MX") : "sin meta"}</small>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width:${row.participants ? Math.max(5, Math.round((row.participants / max) * 100)) : 0}%"></div></div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderVivenciaImpactGoal(impactCount, editable, impactBasis = "matrículas únicas") {
  const goal = Math.max(Number(vivenciaDashboardSettings.impact_goal || 3800), 1);
  const progress = Math.round((impactCount / goal) * 100);
  const remaining = goal - impactCount;
  return `
    <article class="chart-panel vivencia-impact-goal-card">
      <div class="chart-title-row">
        <div><p class="eyebrow">Meta institucional</p><h3>Meta de impacto acumulado</h3></div>
        <span>${progress}%</span>
      </div>
      <div class="vivencia-impact-amount"><strong>${impactCount.toLocaleString("es-MX")}</strong><span>de ${goal.toLocaleString("es-MX")} · ${escapeHtml(impactBasis)}</span></div>
      <div class="vivencia-impact-track"><span style="width:${Math.min(100, progress)}%"></span></div>
      <p>${remaining > 0 ? `Faltan ${remaining.toLocaleString("es-MX")} para alcanzar la meta.` : `Meta superada por ${Math.abs(remaining).toLocaleString("es-MX")} registros.`}</p>
      ${editable ? `
        <form id="vivenciaImpactGoalForm" class="vivencia-impact-goal-form">
          <label>Editar meta<input name="impact_goal" type="number" min="1" step="1" value="${goal}" required /></label>
          <button class="ghost-btn compact-action" type="submit">Guardar meta</button>
        </form>
      ` : ""}
    </article>
  `;
}

function vivenciaOperationalAlerts(events, metricsByEvent) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const sevenDays = new Date(today);
  sevenDays.setDate(today.getDate() + 7);
  const alerts = [];
  events.forEach((event) => {
    const date = vivenciaEventDate(event);
    const participants = vivenciaEventParticipantsCount(event, metricsByEvent);
    if (!event.responsible_name) alerts.push({ event, label: "Evento sin responsable" });
    if (!Number(event.participation_goal || 0)) alerts.push({ event, label: "Evento sin meta" });
    if (!participants) alerts.push({ event, label: "Evento sin participantes" });
    if (date && date >= today && date <= sevenDays && (!event.responsible_name || !Number(event.participation_goal || 0))) {
      alerts.push({ event, label: "Evento próximo incompleto" });
    }
  });
  return alerts.slice(0, 8);
}

function renderVivenciaAlerts(alerts) {
  if (!alerts.length) return `<div class="vivencia-empty-mini">Sin alertas operativas por ahora.</div>`;
  return `
    <div class="vivencia-alert-list">
      ${alerts.map((alert) => `
        <article>
          <strong>${escapeHtml(alert.label)}</strong>
          <span>${escapeHtml(alert.event.event_name || "Evento sin nombre")} · ${escapeHtml(alert.event.event_date || "Sin fecha")}</span>
        </article>
      `).join("")}
    </div>
  `;
}

function communicationDashboardActivities() {
  const storedEvents = communicationEvents
    .filter(isVisibleVivenciaEvent)
    .map((event) => ({ ...event, __communicationEvent: true }));
  const storedKeys = new Set(storedEvents.map((event) => event.planning_activity_id || `${normalizeText(event.event_name)}|${event.event_date}`).filter(Boolean));
  const planningEvents = planningActivitiesForArea(planningCalendarRows, "comunicacion").map((activity, index) => ({
    ...activity,
    event_name: activity.activity,
    event_date: activity.date,
    responsible_name: activity.responsible,
    status: normalizeText(activity.status) || "planeado",
    source_month: activity.month,
    source_week: activity.week,
    source_timestamp: activity.timestamp,
    source_index: index
  })).filter((event) => !storedKeys.has(event.planningActivityId || `${normalizeText(event.event_name)}|${event.event_date}`));
  return [...storedEvents, ...planningEvents]
    .sort((a, b) => String(a.event_date || "9999-12-31").localeCompare(String(b.event_date || "9999-12-31")));
}

function communicationMonthLabel(event, fallbackYear = new Date().getFullYear()) {
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  if (event.event_date) {
    const date = vivenciaEventDate(event);
    if (date) return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  }
  const sourceMonth = String(event.source_month || "").trim();
  if (!sourceMonth) return "Sin fecha";
  const normalizedMonth = normalizeText(sourceMonth);
  const monthIndex = monthNames.findIndex((name) => normalizeText(name).startsWith(normalizedMonth.slice(0, 3)));
  return `${monthIndex >= 0 ? monthNames[monthIndex] : sourceMonth} ${fallbackYear}`;
}

function communicationCalendarBaseDate(events) {
  const selectedMonth = planningCalendarMonthByArea.comunicacion;
  if (/^\d{4}-\d{2}$/.test(selectedMonth)) {
    const selected = new Date(`${selectedMonth}-01T00:00:00`);
    if (!Number.isNaN(selected.getTime())) return selected;
  }
  const baseDate = planningCalendarBaseDate(events.map((event) => ({ date: event.event_date })));
  planningCalendarMonthByArea.comunicacion = `${baseDate.getFullYear()}-${String(baseDate.getMonth() + 1).padStart(2, "0")}`;
  return baseDate;
}

function communicationStatusRows(events) {
  const totals = new Map();
  events.forEach((event) => {
    const status = vivenciaStateLabel(normalizeText(event.status) || "planeado");
    totals.set(status, (totals.get(status) || 0) + 1);
  });
  return [...totals.entries()]
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label, "es"));
}

function renderCommunicationStatusBreakdown(events) {
  const rows = communicationStatusRows(events);
  const total = rows.reduce((sum, row) => sum + row.value, 0);
  const colors = ["#1672ae", "#178f72", "#e0a40b", "#bf3f45", "#7652aa", "#9ba9b5"];
  const gradient = total
    ? rows.reduce((parts, row, index) => {
      const start = rows.slice(0, index).reduce((sum, current) => sum + current.value, 0) / total * 100;
      const end = start + row.value / total * 100;
      return `${parts}${colors[index % colors.length]} ${start}% ${end}%, `;
    }, "").replace(/, $/, "")
    : "#dfe7ed 0 100%";
  return `
    <article class="chart-panel vivencia-gender-card">
      <div class="chart-title-row">
        <div><p class="eyebrow">Composición</p><h3>Actividades por estatus</h3></div>
        <span>Comunicación</span>
      </div>
      <div class="vivencia-gender-content">
        <div class="vivencia-gender-donut" style="background:conic-gradient(${gradient})"><div><strong>${total.toLocaleString("es-MX")}</strong><span>actividades</span></div></div>
        <div class="vivencia-gender-legend">
          ${rows.length ? rows.map((row, index) => `<div><span style="background:${colors[index % colors.length]}"></span><strong>${escapeHtml(row.label)}</strong><em>${row.value.toLocaleString("es-MX")}</em></div>`).join("") : `<div><strong>Sin actividades</strong><em>0</em></div>`}
        </div>
      </div>
    </article>
  `;
}

function renderCommunicationCoverage(total, dated) {
  const safeTotal = Math.max(total, 1);
  const progress = total ? Math.round((dated / safeTotal) * 100) : 0;
  const pending = Math.max(0, total - dated);
  return `
    <article class="chart-panel vivencia-impact-goal-card">
      <div class="chart-title-row">
        <div><p class="eyebrow">Planeación operativa</p><h3>Cobertura de fechas</h3></div>
        <span>${progress}%</span>
      </div>
      <div class="vivencia-impact-amount"><strong>${dated.toLocaleString("es-MX")}</strong><span>de ${total.toLocaleString("es-MX")} actividades con fecha</span></div>
      <div class="vivencia-impact-track"><span style="width:${Math.min(100, progress)}%"></span></div>
      <p>${pending ? `${pending.toLocaleString("es-MX")} actividades todavía requieren una fecha específica.` : "Todas las actividades tienen fecha específica."}</p>
    </article>
  `;
}

function renderCommunicationImpactGoal(impactCount) {
  const goal = Math.max(Number(communicationDashboardSettings.impact_goal || 3800), 1);
  const progress = Math.round((impactCount / goal) * 100);
  const remaining = goal - impactCount;
  const editable = currentUser?.auth === "supabase" && canEditArea("comunicacion") && communicationEventsAvailable;
  return `
    <article class="chart-panel vivencia-impact-goal-card">
      <div class="chart-title-row">
        <div><p class="eyebrow">Meta institucional</p><h3>Meta de impacto acumulado</h3></div>
        <span>${progress}%</span>
      </div>
      <div class="vivencia-impact-amount"><strong>${impactCount.toLocaleString("es-MX")}</strong><span>de ${goal.toLocaleString("es-MX")} · participaciones de Comunicación</span></div>
      <div class="vivencia-impact-track"><span style="width:${Math.min(100, progress)}%"></span></div>
      <p>${remaining > 0 ? `Faltan ${remaining.toLocaleString("es-MX")} para alcanzar la meta.` : `Meta superada por ${Math.abs(remaining).toLocaleString("es-MX")} registros.`}</p>
      ${editable ? `
        <form id="communicationImpactGoalForm" class="vivencia-impact-goal-form">
          <label>Editar meta<input name="impact_goal" type="number" min="1" step="1" value="${goal}" required /></label>
          <button class="ghost-btn compact-action" type="submit">Guardar meta</button>
        </form>
      ` : ""}
    </article>
  `;
}

function renderCommunicationEventCards(events) {
  if (!events.length) return `<div class="vivencia-empty-mini">No hay actividades próximas en los siguientes 15 días.</div>`;
  return `
    <div class="vivencia-event-card-list">
      ${events.slice(0, 6).map((event, index) => `
        <article class="vivencia-event-card" ${event.__communicationEvent ? `data-communication-detail="${escapeHtml(event.id)}"` : `data-planning-detail="${escapeHtml(event.id)}" data-planning-instance="communication-agenda:${escapeHtml(event.id)}:${index}"`}>
          <time>${escapeHtml(event.event_date || "Sin fecha")}</time>
          <div><strong>${escapeHtml(event.event_name || "Actividad sin nombre")}</strong><span>${escapeHtml(event.responsible_name || event.source_month || "Responsable pendiente")}</span></div>
          <em class="${escapeHtml(event.status || "planeado")}">${escapeHtml(vivenciaStateLabel(event.status))}</em>
          <small>${escapeHtml(event.place || event.source_week || "Planeación Semestral")}</small>
        </article>
      `).join("")}
    </div>
  `;
}

function renderCommunicationRecentActivities(events) {
  const rows = [...events].sort((a, b) => {
    if (a.__communicationEvent || b.__communicationEvent) {
      return String(b.created_at || b.event_date || "").localeCompare(String(a.created_at || a.event_date || ""));
    }
    return Number(b.source_index || 0) - Number(a.source_index || 0);
  }).slice(0, 10);
  if (!rows.length) return `<div class="vivencia-empty-mini">Todavía no hay actividades registradas.</div>`;
  return `
    <div class="vivencia-recent-list">
      ${rows.map((event, index) => `
        <button type="button" ${event.__communicationEvent ? `data-communication-detail="${escapeHtml(event.id)}"` : `data-planning-detail="${escapeHtml(event.id)}" data-planning-instance="communication-recent:${escapeHtml(event.id)}:${index}"`}>
          <span>${index + 1}</span>
          <div><strong>${escapeHtml(event.event_name || "Actividad sin nombre")}</strong><small>${escapeHtml(event.event_date || communicationMonthLabel(event))} · ${escapeHtml(event.responsible_name || "Responsable pendiente")}</small></div>
          <em>${escapeHtml(vivenciaStateLabel(event.status))}</em>
        </button>
      `).join("")}
    </div>
  `;
}

function renderCommunicationTopActivities(events) {
  const grouped = new Map();
  events.forEach((event) => {
    const label = String(event.event_name || "Actividad sin nombre").trim();
    grouped.set(label, (grouped.get(label) || 0) + 1);
  });
  const rows = [...grouped.entries()]
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label, "es"))
    .slice(0, 15);
  if (!rows.length) return `<div class="vivencia-empty-mini">Sin actividades para ranking.</div>`;
  const max = Math.max(...rows.map((row) => row.value), 1);
  return `
    <div class="vivencia-top-list">
      ${rows.map((row, index) => `
        <article>
          <span>${index + 1}</span>
          <div><strong>${escapeHtml(row.label)}</strong><small><b>${row.value}</b> registro${row.value === 1 ? "" : "s"} de planeación</small></div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.max(5, Math.round((row.value / max) * 100))}%"></div></div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderCommunicationDashboard() {
  if (!planningCalendarLoaded) return `<section class="planning-calendar-state" aria-live="polite"><strong>Cargando Comunicación...</strong><span>Consultando Planeación Semestral.</span></section>`;
  if (planningCalendarError) return `<section class="planning-calendar-state error" role="alert"><strong>No se pudo cargar Comunicación</strong><span>${escapeHtml(planningCalendarError)}</span></section>`;
  const activities = communicationDashboardActivities();
  const dated = activities.filter((event) => event.event_date);
  const undated = activities.filter((event) => !event.event_date);
  const responsibleCount = new Set(activities.map((event) => normalizeText(event.responsible_name)).filter(Boolean)).size;
  const participantTotal = communicationEvents
    .filter(isVisibleVivenciaEvent)
    .reduce((sum, event) => sum + Math.max(0, Number(event.reported_total_participants || 0)), 0);
  const planningYear = dated.map((event) => vivenciaEventDate(event)?.getFullYear()).find(Boolean) || new Date().getFullYear();
  const activeMonths = new Set(activities.map((event) => communicationMonthLabel(event, planningYear)).filter((label) => label !== "Sin fecha")).size;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const inFifteen = new Date(today);
  inFifteen.setDate(today.getDate() + 15);
  const upcoming = dated.filter((event) => {
    const date = vivenciaEventDate(event);
    return date && date >= today && date <= inFifteen;
  }).sort((a, b) => String(a.event_date).localeCompare(String(b.event_date)));
  const monthRowsMap = new Map();
  activities.forEach((event) => {
    const label = communicationMonthLabel(event, planningYear);
    monthRowsMap.set(label, (monthRowsMap.get(label) || 0) + 1);
  });
  const monthRows = [...monthRowsMap.entries()].map(([label, value]) => ({ label, value }));
  const calendarDate = communicationCalendarBaseDate(activities);
  const selected = activities.find((activity) => activity.id === selectedPlanningActivityId);
  return `
    <section class="vivencia-dashboard communication-dashboard">
      <div class="kpi-grid vivencia-kpi-strip">
        <div class="kpi"><span>Actividades del semestre</span><strong>${activities.length.toLocaleString("es-MX")}</strong><em>solo Comunicación</em></div>
        <div class="kpi"><span>Actividades con fecha</span><strong>${dated.length.toLocaleString("es-MX")}</strong><em>visibles en calendario</em></div>
        <div class="kpi"><span>Actividades sin fecha</span><strong>${undated.length.toLocaleString("es-MX")}</strong><em>requieren programación</em></div>
        <div class="kpi"><span>Participaciones totales</span><strong>${participantTotal.toLocaleString("es-MX")}</strong><em>${activeMonths} meses · ${responsibleCount || 0} responsables</em></div>
      </div>
      <div class="vivencia-dashboard-grid">
        ${renderVivenciaCalendar(activities, calendarDate, { planningArea: "comunicacion" })}
        <article class="chart-panel vivencia-upcoming-panel">
          <div class="chart-title-row"><div><p class="eyebrow">Agenda</p><h3>Próximas actividades</h3></div><span>15 días</span></div>
          ${renderCommunicationEventCards(upcoming)}
        </article>
        ${renderCommunicationImpactGoal(participantTotal)}
        ${renderCommunicationStatusBreakdown(activities)}
        <div class="vivencia-insights-grid">
          <div class="vivencia-insights-column">
            <article class="chart-panel vivencia-month-panel">
              <div class="chart-title-row"><div><p class="eyebrow">Impacto mensual</p><h3>Actividades por mes</h3></div></div>
              ${renderVivenciaBars(monthRows, { compact: true })}
            </article>
            <article class="chart-panel vivencia-recent-panel">
              <div class="chart-title-row"><div><p class="eyebrow">Registro</p><h3>Últimas actividades registradas</h3></div><span>10 recientes</span></div>
              ${renderCommunicationRecentActivities(activities)}
            </article>
          </div>
          <article class="chart-panel vivencia-top-panel">
            <div class="chart-title-row"><div><p class="eyebrow">Top actividades</p><h3>Top 15 registros de Comunicación</h3></div></div>
            ${renderCommunicationTopActivities(activities)}
          </article>
        </div>
      </div>
      ${renderPlanningActivityDetail(selected)}
    </section>
  `;
}

function renderVivenciaDashboard() {
  if (currentUser?.auth !== "supabase") {
    return `<section class="permission-strip">Inicia sesion con Supabase para ver el Dashboard de Vivencia compartido.</section>`;
  }
  if (!vivenciaEventsAvailable) {
    return `
      <section class="vivencia-empty-state warning">
        <strong>Falta activar la estructura de Vivencia en Supabase.</strong>
        <span>Ejecuta <code>supabase/vivencia.sql</code> para habilitar eventos, participantes y graficas.</span>
      </section>
    `;
  }
  const events = vivenciaVisibleEvents();
  const metrics = vivenciaVisibleMetrics();
  const metricsByEvent = new Map(metrics.map((row) => [row.event_id, row]));
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const inFifteen = new Date(today);
  inFifteen.setDate(today.getDate() + 15);
  const upcoming = events
    .filter((event) => {
      const date = vivenciaEventDate(event);
      return !Number.isNaN(date.getTime()) && date >= today && date <= inFifteen;
    })
    .sort((a, b) => String(a.event_date).localeCompare(String(b.event_date)));
  const nextEvent = upcoming[0] || events.find((event) => {
    const date = vivenciaEventDate(event);
    return date && date >= today;
  });
  const uniqueParticipantRows = vivenciaUniqueParticipantRows();
  const uniqueMatriculas = new Set(uniqueParticipantRows.map((participant) => normalizeMatricula(participant.matricula)).filter(Boolean));
  const uniqueImportedReferences = new Set(
    vivenciaParticipants.map((participant) => normalizeMatricula(participant.matricula)).filter(Boolean)
  );
  const identifiedParticipantCount = Math.max(uniqueMatriculas.size, uniqueImportedReferences.size, vivenciaParticipantDetailsCount);
  const participantTotal = metrics.reduce((sum, row) => sum + vivenciaMetricParticipants(row), 0);
  const impactCount = participantTotal;
  const impactBasis = "participaciones reportadas";
  const monthRowsMap = new Map();
  events.forEach((event) => {
    const key = vivenciaMonthLabel(event.event_date);
    const participants = vivenciaEventParticipantsCount(event, metricsByEvent);
    monthRowsMap.set(key, (monthRowsMap.get(key) || 0) + (participantTotal ? participants : 1));
  });
  const monthRows = [...monthRowsMap.entries()].map(([label, value]) => ({ label, value }));
  const calendarDate = vivenciaCalendarBaseDate(events);
  const editable = canEditArea("vivencia");
  return `
    <section class="vivencia-dashboard">
      <div class="kpi-grid vivencia-kpi-strip">
        <div class="kpi"><span>Eventos del semestre</span><strong>${events.length}</strong><em>desde Planeación/Vivencia</em></div>
        <div class="kpi"><span>Participaciones totales</span><strong>${participantTotal}</strong><em>${participantTotal ? "por registros" : "sin participantes cargados"}</em></div>
        <div class="kpi"><span>${uniqueMatriculas.size ? "Matrículas únicas identificadas" : "Participantes identificados"}</span><strong>${identifiedParticipantCount.toLocaleString("es-MX")}</strong></div>
        <div class="kpi"><span>Avance de meta</span><strong>${Math.round((impactCount / Math.max(Number(vivenciaDashboardSettings.impact_goal || 3800), 1)) * 100)}%</strong><em>sobre ${escapeHtml(impactBasis)}</em></div>
      </div>

      <div class="vivencia-dashboard-grid">
        ${renderVivenciaCalendar(events, calendarDate)}
        <article class="chart-panel vivencia-upcoming-panel">
          <div class="chart-title-row">
            <div><p class="eyebrow">Agenda</p><h3>Próximos eventos</h3></div>
            <span>15 días</span>
          </div>
          ${renderVivenciaEventCards(upcoming, metricsByEvent)}
        </article>
        ${renderVivenciaImpactGoal(impactCount, editable, impactBasis)}
        ${renderVivenciaGenderBreakdown(events, metricsByEvent)}
        <div class="vivencia-insights-grid">
          <div class="vivencia-insights-column">
            <article class="chart-panel vivencia-month-panel">
              <div class="chart-title-row">
                <div><p class="eyebrow">Impacto mensual</p><h3>${participantTotal ? "Participaciones por mes" : "Eventos por mes"}</h3></div>
              </div>
              ${renderVivenciaBars(monthRows, { compact: true })}
            </article>
            <article class="chart-panel vivencia-recent-panel">
              <div class="chart-title-row">
                <div><p class="eyebrow">Registro</p><h3>Ultimos eventos registrados</h3></div>
                <span>10 recientes</span>
              </div>
              ${renderVivenciaRecentEvents(events)}
            </article>
          </div>
          <article class="chart-panel vivencia-top-panel">
            <div class="chart-title-row">
              <div><p class="eyebrow">Top eventos</p><h3>Top 15 eventos por alumnos impactados</h3></div>
            </div>
            ${renderVivenciaTopEvents(events, metricsByEvent)}
          </article>
        </div>
      </div>
    </section>
  `;
}

function filteredClassGrades() {
  const search = classGradeFilter.search.trim().toLowerCase();
  return effectiveClassGradeRows()
    .filter((row) => classGradeFilter.period === "todos" || classGradeSemesterLabel(row) === classGradeFilter.period)
    .filter((row) => classGradeFilter.block === "todos" || classGradeBlockLabel(row) === classGradeFilter.block)
    .filter((row) => classGradeFilter.teacher === "todos" || row.teacher_name === classGradeFilter.teacher)
    .filter((row) => classGradeFilter.subject === "todos" || row.subject_name === classGradeFilter.subject)
    .filter((row) => classGradeFilter.career === "todos" || row.career_code === classGradeFilter.career)
    .filter((row) => classGradeFilter.status === "todos" || classGradeStatus(row) === classGradeFilter.status)
    .filter((row) => !search || [
      row.matricula,
      row.subject_name,
      row.teacher_name,
      row.career_code,
      row.crn,
      row.group_number
    ].some((value) => String(value || "").toLowerCase().includes(search)))
    .sort((a, b) =>
      String(a.subject_name).localeCompare(String(b.subject_name), "es") ||
      String(a.teacher_name).localeCompare(String(b.teacher_name), "es") ||
      String(a.matricula).localeCompare(String(b.matricula), "es")
    );
}

function classGradeOptions(key) {
  return [...new Set(effectiveClassGradeRows().map((row) => row[key]).filter(Boolean))]
    .sort((a, b) => String(a).localeCompare(String(b), "es"));
}

function classGradeDerivedOptions(derive) {
  return [...new Set(effectiveClassGradeRows().map(derive).filter(Boolean))]
    .sort((a, b) => classPeriodSortValue(b) - classPeriodSortValue(a) || String(a).localeCompare(String(b), "es", { numeric: true }));
}

function renderClassGrades() {
  const rows = filteredClassGrades();
  const totalRows = effectiveClassGradeRows();
  const pageSize = 100;
  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));
  classGradePage = Math.min(classGradePage, pageCount);
  const pageRows = rows.slice((classGradePage - 1) * pageSize, classGradePage * pageSize);
  const captured = totalRows.filter((row) => classGradeStatus(row) === "capturada").length;
  const bajas = totalRows.filter((row) => classGradeStatus(row) === "baja").length;
  const pending = totalRows.filter((row) => classGradeStatus(row) === "pendiente").length;
  const editable = currentUser?.auth === "supabase" && canEditArea("clases") && classGradesAvailable;
  const periods = classGradeDerivedOptions(classGradeSemesterLabel);
  const blocks = classGradeDerivedOptions(classGradeBlockLabel);
  const teachers = classGradeOptions("teacher_name");
  const subjects = classGradeOptions("subject_name");
  const careersList = classGradeOptions("career_code");
  return `
    <section class="class-grades-module">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">CD Lista de Alumnos</p>
          <h2>Registro de calificaciones</h2>
        </div>
        <div class="class-grade-actions">
          <div class="class-grade-upload-control">
            <input id="classGradesFile" type="file" accept=".xlsx,.xls,.csv" hidden />
            <button class="primary-btn" type="button" id="uploadClassGrades" ${editable && !classGradesImporting ? "" : "disabled"}>${classGradesImporting ? "Procesando..." : "Subir calificaciones"}</button>
          </div>
          <button class="ghost-btn" type="button" data-download-class-template="grades">Plantilla calificaciones</button>
          <button class="ghost-btn" type="button" id="exportClassGrades">Exportar Excel</button>
        </div>
      </div>
      ${!classGradesAvailable ? `
        <div class="permission-strip grade-warning">
          La lista histórica está visible, pero falta activar la tabla de calificaciones en Supabase para poder guardar cambios.
        </div>
      ` : ""}
      ${classGradesImporting ? `
        <div class="permission-strip">Cargando los 7,939 registros históricos en la base central. Esta operación se realiza una sola vez.</div>
      ` : ""}
      <div class="class-grade-kpis">
        <article class="kpi"><span>Registros</span><strong>${totalRows.length.toLocaleString("es-MX")}</strong><em>CD Lista de Alumnos</em></article>
        <article class="kpi"><span>Calificaciones</span><strong>${captured.toLocaleString("es-MX")}</strong><em>capturadas</em></article>
        <article class="kpi"><span>Bajas</span><strong>${bajas.toLocaleString("es-MX")}</strong><em>registradas</em></article>
        <article class="kpi"><span>Pendientes</span><strong>${pending.toLocaleString("es-MX")}</strong><em>por capturar</em></article>
      </div>
      <div class="class-grade-filters">
        <label>Buscar
          <input class="class-grade-filter" data-filter="search" value="${escapeHtml(classGradeFilter.search)}" placeholder="Matrícula, materia o profesor" />
        </label>
        <label>Periodo/Semestre
          <select class="class-grade-filter" data-filter="period">
            <option value="todos">Todos</option>
            ${periods.map((value) => `<option value="${escapeHtml(value)}" ${classGradeFilter.period === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
          </select>
        </label>
        <label>Bloque
          <select class="class-grade-filter" data-filter="block">
            <option value="todos">Todos</option>
            ${blocks.map((value) => `<option value="${escapeHtml(value)}" ${classGradeFilter.block === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
          </select>
        </label>
        <label>Profesor
          <select class="class-grade-filter" data-filter="teacher">
            <option value="todos">Todos</option>
            ${teachers.map((value) => `<option value="${escapeHtml(value)}" ${classGradeFilter.teacher === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
          </select>
        </label>
        <label>Materia
          <select class="class-grade-filter" data-filter="subject">
            <option value="todos">Todas</option>
            ${subjects.map((value) => `<option value="${escapeHtml(value)}" ${classGradeFilter.subject === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
          </select>
        </label>
        <label>Carrera
          <select class="class-grade-filter" data-filter="career">
            <option value="todos">Todas</option>
            ${careersList.map((value) => `<option value="${escapeHtml(value)}" ${classGradeFilter.career === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
          </select>
        </label>
        <label>Estado
          <select class="class-grade-filter" data-filter="status">
            <option value="todos">Todos</option>
            <option value="capturada" ${classGradeFilter.status === "capturada" ? "selected" : ""}>Capturadas</option>
            <option value="pendiente" ${classGradeFilter.status === "pendiente" ? "selected" : ""}>Pendientes</option>
            <option value="baja" ${classGradeFilter.status === "baja" ? "selected" : ""}>Bajas</option>
            <option value="np" ${classGradeFilter.status === "np" ? "selected" : ""}>NP</option>
          </select>
        </label>
      </div>
      <div class="class-grade-table-header">
        <span><strong>${rows.length.toLocaleString("es-MX")}</strong> registros filtrados</span>
        <span>${editable ? "Edita la calificación y presiona Enter para guardar." : "Vista de consulta."}</span>
      </div>
      <div class="table-wrap class-grade-table-wrap">
        <table class="class-grade-table">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Materia</th>
              <th>CRN / Grupo</th>
              <th>Profesor</th>
              <th>Carrera</th>
              <th>Periodo / Bloque</th>
              <th>Calificación</th>
            </tr>
          </thead>
          <tbody>
            ${pageRows.map((row) => `
              <tr>
                <td><strong>${escapeHtml(row.matricula)}</strong></td>
                <td><span class="grade-subject">${escapeHtml(row.subject_name)}</span><small>${escapeHtml(row.subject_code)}</small></td>
                <td>${escapeHtml(row.crn)} / ${escapeHtml(row.group_number)}</td>
                <td>${escapeHtml(row.teacher_name)}</td>
                <td>${escapeHtml(row.career_code)}</td>
                <td>${escapeHtml(classGradePeriodBlockLabel(row))}</td>
                <td>
                  <input
                    class="grade-input grade-${classGradeStatus(row)}"
                    data-grade-key="${escapeHtml(row.record_key)}"
                    value="${escapeHtml(row.grade)}"
                    inputmode="decimal"
                    aria-label="Calificación de ${escapeHtml(row.matricula)}"
                    placeholder="Pendiente"
                    ${editable ? "" : "disabled"}
                  />
                </td>
              </tr>
            `).join("") || `<tr><td colspan="7">No hay registros para estos filtros.</td></tr>`}
          </tbody>
        </table>
      </div>
      <div class="class-grade-pagination">
        <button type="button" class="ghost-btn" data-grade-page="${classGradePage - 1}" ${classGradePage <= 1 ? "disabled" : ""} aria-label="Página anterior"><</button>
        <span>Página ${classGradePage} de ${pageCount}</span>
        <button type="button" class="ghost-btn" data-grade-page="${classGradePage + 1}" ${classGradePage >= pageCount ? "disabled" : ""} aria-label="Página siguiente">></button>
      </div>
    </section>
  `;
}

function renderClassGradesSystemUpload() {
  const editable = currentUser?.auth === "supabase" && canEditArea("clases") && classGradesAvailable;
  const summary = classGradesUploadSummary;
  const loadGroups = classGradeLoadGroups();
  return `
    <section class="blueprint-card wide">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">Clases Deportivas</p>
          <h2>Cargar archivo de Calificaciones</h2>
        </div>
        <span class="session-pill">Excel / CSV</span>
      </div>
      <p>Actualiza la lista de alumnos y sus calificaciones en Supabase. Cada carga reemplaza primero el periodo/semestre incluido en el archivo para evitar duplicados.</p>
      <div class="upload-action-row">
        <div class="class-grade-upload-control">
          <input id="classGradesFile" type="file" accept=".xlsx,.xls,.csv" hidden />
          <button class="primary-btn" id="uploadClassGrades" type="button" ${editable && !classGradesImporting ? "" : "disabled"}>
            ${classGradesImporting ? "Procesando archivo..." : "Subir calificaciones"}
          </button>
        </div>
        <button class="ghost-btn" type="button" data-download-class-template="grades">Plantilla calificaciones</button>
        <button class="ghost-btn" type="button" id="exportClassGrades">Exportar Excel</button>
      </div>
      <p class="form-message">Columnas requeridas: matricula, materia, calificacion y periodo. El periodo puede ser FJ26; el bloque PMT1, PMT2 o PMT3 se detecta desde la materia. También se aceptan clave_materia, CRN, grupo, profesor, carrera y semestre.</p>
      ${!editable ? `<div class="permission-strip grade-warning">Ingresa con un perfil autorizado de Clases Deportivas para realizar la carga.</div>` : ""}
      ${summary ? `
        <div class="permission-strip ${summary.errors?.length ? "grade-warning" : ""}">
          <span><strong>${escapeHtml(summary.fileName)}</strong>: ${summary.saved.toLocaleString("es-MX")} guardados, ${(summary.replacedRows || 0).toLocaleString("es-MX")} anteriores reemplazados (${(summary.replacedPeriods || []).join(", ") || "sin periodo"}), ${summary.duplicates.toLocaleString("es-MX")} duplicados omitidos y ${(summary.errors?.length || 0).toLocaleString("es-MX")} errores.</span>
        </div>
        ${summary.errors?.length ? `<details class="schedule-errors"><summary>Ver errores</summary>${summary.errors.slice(0, 10).map((error) => `<p>Fila ${error.row || "-"}: ${escapeHtml(error.message)}</p>`).join("")}</details>` : ""}
      ` : ""}
      <div class="section-title compact class-load-history-title">
        <div>
          <p class="eyebrow">Historial de cargas</p>
          <h3>Cargas registradas en Calificaciones</h3>
        </div>
        <span class="session-pill">${loadGroups.length.toLocaleString("es-MX")} grupos</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Periodo</th><th>Bloques</th><th>Archivo / fuente</th><th>Registros</th><th>Capturadas</th><th>Bajas</th><th>NP</th><th>Pendientes</th><th>Último cambio</th><th>Acción</th></tr>
          </thead>
          <tbody>
            ${loadGroups.length ? loadGroups.map((group) => `
              <tr>
                <td><strong>${escapeHtml(group.period)}</strong></td>
                <td>${escapeHtml(group.blockLabel || "Sin bloque")}</td>
                <td>${escapeHtml(group.source)}</td>
                <td>${group.total.toLocaleString("es-MX")}</td>
                <td>${group.captured.toLocaleString("es-MX")}</td>
                <td>${group.bajas.toLocaleString("es-MX")}</td>
                <td>${group.np.toLocaleString("es-MX")}</td>
                <td>${group.pending.toLocaleString("es-MX")}</td>
                <td>${group.updatedAt ? new Date(group.updatedAt).toLocaleString("es-MX") : "Sin fecha"}</td>
                <td><button class="danger-btn compact-action" type="button" data-delete-grade-load="${escapeHtml(group.period)}" data-grade-load-source="${escapeHtml(group.source)}" ${editable ? "" : "disabled"}>Borrar</button></td>
              </tr>
            `).join("") : `<tr><td colspan="10">Todavía no hay cargas registradas.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderProjectProgress() {
  const progress = projectProgress();
  return `
    <section class="project-progress">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">Avance del proyecto</p>
          <h2>${progress.percent}% listo para piloto técnico</h2>
        </div>
        <span class="session-pill">Siguiente: ${progress.next ? progress.next[1] : "Por definir"}</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${progress.percent}%"></div>
      </div>
      <div class="progress-cards">
        <div><strong>${progress.completed}</strong><span>Completadas</span></div>
        <div><strong>${progress.inProgress}</strong><span>En progreso</span></div>
        <div><strong>${progress.pending}</strong><span>Pendientes</span></div>
        <div><strong>${progress.total}</strong><span>Fases totales</span></div>
      </div>
      <div class="mini-roadmap">
        ${roadmapItems.slice(0, 8).map((row) => `
          <article class="${row[3].toLowerCase().replaceAll(" ", "-")}">
            <strong>${row[0]}</strong>
            <span>${row[1]}</span>
            <em>${row[3]}</em>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAlertCenter(compact = false) {
  const alerts = systemAlerts();
  const highCount = alerts.filter((alert) => alert.priority === "Alta").length;
  const mediumCount = alerts.filter((alert) => alert.priority === "Media").length;
  const visible = compact ? alerts.slice(0, 5) : alerts;
  return `
    <section class="alert-center">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">Seguimiento</p>
          <h2>Centro de alertas</h2>
        </div>
        <div class="chip-list">
          <span class="chip danger-chip">${highCount} altas</span>
          <span class="chip warning-chip">${mediumCount} medias</span>
        </div>
      </div>
      <div class="alert-list">
        ${visible.map((alert) => `
          <article class="alert-item ${alert.priority.toLowerCase()}">
            <strong>${alert.priority}</strong>
            <span>${alert.module}</span>
            <p>${alert.message}</p>
            <em>${alert.status}</em>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function loadConfigLinksLocal() {
  try {
    const rows = JSON.parse(localStorage.getItem(CONFIG_LINKS_KEY) || "[]");
    return Array.isArray(rows)
      ? rows.filter((row) => row?.id && row?.name && row?.url)
      : [];
  } catch {
    return [];
  }
}

function saveConfigLinks(rows) {
  localStorage.setItem(CONFIG_LINKS_KEY, JSON.stringify(rows));
}

function configLinksForRender() {
  if (configQuickLinksLoaded && configQuickLinksCloudAvailable) return configQuickLinks;
  return loadConfigLinksLocal();
}

function configLinkId() {
  return window.crypto?.randomUUID ? window.crypto.randomUUID() : `link-${Date.now()}-${Math.round(Math.random() * 10000)}`;
}

async function loadConfigQuickLinks() {
  const localRows = loadConfigLinksLocal();
  if (!supabaseClient || currentUser?.auth !== "supabase") {
    configQuickLinks = localRows;
    configQuickLinksLoaded = true;
    configQuickLinksCloudAvailable = false;
    return;
  }
  const { data, error } = await supabaseClient
    .from("config_quick_links")
    .select("id,name,url,created_by,created_at,updated_at")
    .order("created_at", { ascending: false });
  if (error) {
    console.warn("No se pudieron cargar vinculos rapidos", error);
    configQuickLinks = localRows;
    configQuickLinksLoaded = true;
    configQuickLinksCloudAvailable = false;
    return;
  }
  configQuickLinks = (data || []).map((row) => ({
    id: String(row.id || ""),
    name: row.name || "",
    url: row.url || "",
    createdAt: row.created_at || "",
    updatedAt: row.updated_at || ""
  })).filter((row) => row.id && row.name && row.url);
  if (localRows.length && !configQuickLinks.length) {
    configQuickLinks = localRows;
  }
  configQuickLinksLoaded = true;
  configQuickLinksCloudAvailable = true;
}

function normalizeConfigLinkUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  return /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
}

async function saveConfigLinkFromForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const id = String(formData.get("id") || "").trim();
  const name = String(formData.get("name") || "").trim();
  const url = normalizeConfigLinkUrl(formData.get("url"));
  if (!name || !url) {
    toast("Escribe nombre y liga");
    return;
  }
  const rows = configLinksForRender();
  const now = new Date().toISOString();
  const linkId = id || configLinkId();
  const nextRows = id
    ? rows.map((row) => row.id === id ? { ...row, name, url, updatedAt: now } : row)
    : [{ id: linkId, name, url, createdAt: now, updatedAt: now }, ...rows];
  if (supabaseClient && currentUser?.auth === "supabase" && configQuickLinksCloudAvailable) {
    const { error } = await supabaseClient
      .from("config_quick_links")
      .upsert({
        id: linkId,
        name,
        url,
        created_by: currentUser.id || null,
        updated_at: now
      }, { onConflict: "id" });
    if (error) {
      console.warn("No se pudo guardar vinculo en Supabase", error);
      configQuickLinksCloudAvailable = false;
      saveConfigLinks(nextRows);
      toast("No pude guardar en Supabase; lo deje local");
    } else {
      saveConfigLinks(nextRows);
      await loadConfigQuickLinks();
    }
  } else {
    saveConfigLinks(nextRows);
    configQuickLinks = nextRows;
    configQuickLinksLoaded = true;
  }
  configLinkEditingId = "";
  addAudit("configuracion", id ? `Vinculo editado: ${name}` : `Vinculo guardado: ${name}`);
  render();
  toast(id ? "Vinculo actualizado" : "Vinculo guardado");
}

function editConfigLink(id) {
  configLinkEditingId = id;
  render();
}

async function deleteConfigLink(id) {
  const rows = configLinksForRender();
  const link = rows.find((row) => row.id === id);
  const nextRows = rows.filter((row) => row.id !== id);
  if (supabaseClient && currentUser?.auth === "supabase" && configQuickLinksCloudAvailable) {
    const { error } = await supabaseClient.from("config_quick_links").delete().eq("id", id);
    if (error) {
      console.warn("No se pudo borrar vinculo en Supabase", error);
      configQuickLinksCloudAvailable = false;
      toast("No pude borrar en Supabase; lo quite local");
    } else {
      await loadConfigQuickLinks();
    }
  }
  saveConfigLinks(nextRows);
  configQuickLinks = nextRows;
  if (configLinkEditingId === id) configLinkEditingId = "";
  addAudit("configuracion", `Vinculo eliminado: ${link?.name || id}`);
  render();
  toast("Vinculo eliminado");
}

function renderConfigurationDashboard() {
  const systemCatalogs = getSystemCatalogs();
  const configLinks = configLinksForRender();
  const editingLink = configLinks.find((link) => link.id === configLinkEditingId) || null;
  const configLinkSource = configQuickLinksCloudAvailable && configQuickLinksLoaded ? "Supabase" : "local";
  return `
    <div class="permission-strip">Panel exclusivo para Direccion Deportiva y administracion del sistema.</div>
    <div class="kpi-grid">
      <div class="kpi"><span>Usuarios demo</span><strong>${demoUsers.length}</strong><em>perfiles base</em></div>
      <div class="kpi"><span>Modulos</span><strong>${areas.length - 1}</strong><em>areas operativas</em></div>
      <div class="kpi"><span>Fuentes</span><strong>2</strong><em>Indicadores + Uniformes</em></div>
      <div class="kpi"><span>Privacidad</span><strong>Activa</strong><em>politica por modulo</em></div>
    </div>
    <div class="blueprint-grid">
      <section class="blueprint-card wide config-links-panel">
        <div class="config-links-heading">
          <div>
            <p class="eyebrow">Tablero de control</p>
            <h3>Vinculos rapidos</h3>
            <p>Guarda accesos a formularios, reportes o paginas externas para abrirlos desde WellSync.</p>
          </div>
          <strong>${configLinks.length.toLocaleString("es-MX")} ligas · ${configLinkSource}</strong>
        </div>
        <form id="configLinkForm" class="config-link-form">
          <input type="hidden" name="id" value="${escapeHtml(editingLink?.id || "")}" />
          <label>Nombre de la liga
            <input name="name" value="${escapeHtml(editingLink?.name || "")}" placeholder="Formulario de asistencias" required />
          </label>
          <label>Pegar liga
            <input name="url" value="${escapeHtml(editingLink?.url || "")}" placeholder="https://..." required />
          </label>
          <div class="config-link-actions">
            <button class="primary-btn" type="submit">${editingLink ? "Guardar cambios" : "Guardar vinculo"}</button>
            ${editingLink ? `<button class="ghost-btn" type="button" id="cancelConfigLinkEdit">Cancelar</button>` : ""}
          </div>
        </form>
        <div class="config-link-list">
          ${configLinks.length ? configLinks.map((link) => `
            <article class="config-link-item">
              <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">
                <strong>${escapeHtml(link.name)}</strong>
                <span>${escapeHtml(link.url)}</span>
              </a>
              <div>
                <button class="ghost-btn" type="button" data-edit-config-link="${escapeHtml(link.id)}">Editar</button>
                <button class="danger-btn" type="button" data-delete-config-link="${escapeHtml(link.id)}">Eliminar</button>
              </div>
            </article>
          `).join("") : `<p class="form-message">Aun no hay vinculos guardados. Agrega el primero para convertir WellSync en tu tablero de control.</p>`}
        </div>
      </section>
      <section class="blueprint-card">
        <h3>Roles y permisos</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Rol</th><th>Area</th><th>Permiso</th></tr></thead>
            <tbody>${demoUsers.map((user) => `<tr><td>${user.name}</td><td>${labelArea(user.area)}</td><td>${user.role === "direccion" ? "Lectura y edicion global" : "Captura y consulta de su modulo"}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>
      <section class="blueprint-card">
        <h3>Plan de importacion</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Fuente</th><th>Uso</th><th>Estado</th></tr></thead>
            <tbody>${importPlan.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Centro de importaciones</h3>
        <div class="module-grid">
          <article class="module-card" data-tone="green">
            <h3>Archivo Indicadores</h3>
            <p>Importar solo matricula, genero, carrera, semestre, nivel escolar y datos operativos por modulo.</p>
          </article>
          <article class="module-card" data-tone="blue">
            <h3>Archivo Uniformes</h3>
            <p>Importacion completa autorizada para Colaboradores: uniformes, Evaluaciones Físicas, contactos, layouts y gimnasio.</p>
          </article>
          <article class="module-card" data-tone="gold">
            <h3>Validacion previa</h3>
            <p>Cada carga debe pasar normalizacion de catalogos, duplicados, campos requeridos y permisos por modulo.</p>
          </article>
        </div>
      </section>
      <section class="blueprint-card wide">
        ${renderAlertCenter(false)}
      </section>
      <section class="blueprint-card wide">
        <h3>Roadmap de implementacion</h3>
        <div class="roadmap-board">
          ${roadmapItems.map((row) => `
            <article class="roadmap-item ${row[3].toLowerCase().replaceAll(" ", "-")}">
              <strong>${row[0]}</strong>
              <h3>${row[1]}</h3>
              <span>${row[2]}</span>
              <em>${row[3]}</em>
              <p>${row[4]}</p>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Catalogos del sistema</h3>
        <div class="catalog-grid">
          ${Object.entries(systemCatalogs).map(([name, values]) => `
            <article class="catalog-card">
              <div>
                <strong>${name}</strong>
                <span>${values.length} valores</span>
              </div>
              <p>${values.slice(0, 8).join(", ")}${values.length > 8 ? "..." : ""}</p>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Centro de reportes</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Modulo</th><th>Reporte</th><th>Formato</th><th>Frecuencia</th><th>Responsable</th><th>Estado</th></tr></thead>
            <tbody>${scheduledReports.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td>${row[5]}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Datos maestros y modelo logico</h3>
        <div class="data-model-grid">
          ${dataModelEntities.map((row) => `
            <article class="data-entity ${row[3].toLowerCase()}">
              <strong>${row[0]}</strong>
              <span>${row[1]}</span>
              <p>${row[2]}</p>
              <em>Sensibilidad: ${row[3]}</em>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Relaciones principales</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Entidad origen</th><th>Entidad destino</th><th>Llave / relacion</th></tr></thead>
            <tbody>${dataRelationships.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>
      <section class="blueprint-card">
        <h3>Reglas de validacion</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Fuente</th><th>Campo</th><th>Regla</th></tr></thead>
            <tbody>${validationRules.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>
      <section class="blueprint-card">
        <h3>Backlog de migracion</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Prioridad</th><th>Tarea</th><th>Estado</th></tr></thead>
            <tbody>${migrationBacklog.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Bitacora de auditoria local</h3>
        <div class="permission-strip">
          Ultimas ${auditLog.length} acciones registradas en este navegador.
          <button class="ghost-btn inline-action" id="clearAudit">Limpiar bitacora</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Fecha</th><th>Usuario</th><th>Rol</th><th>Area</th><th>Accion</th><th>Detalle</th></tr></thead>
            <tbody>${auditLog.slice(0, 30).map((row) => `<tr><td>${new Date(row.at).toLocaleString("es-MX")}</td><td>${row.user}</td><td>${row.role}</td><td>${labelArea(row.area)}</td><td>${row.action}</td><td>${row.detail}</td></tr>`).join("") || '<tr><td colspan="6">Sin acciones registradas.</td></tr>'}</tbody>
          </table>
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Politicas de datos</h3>
        <div class="module-grid">
          <article class="module-card" data-tone="blue">
            <h3>Alumnos</h3>
            <p>Solo matricula, genero, carrera, semestre y nivel escolar. Sin nombres, correo, telefono ni historial clinico.</p>
          </article>
          <article class="module-card" data-tone="green">
            <h3>Colaboradores</h3>
            <p>Se permite usar informacion completa del archivo de uniformes, incluyendo contactos y datos operativos internos.</p>
          </article>
          <article class="module-card" data-tone="gold">
            <h3>Produccion</h3>
            <p>Supabase Auth, roles por modulo, bitacora de cambios y politicas de acceso en base de datos.</p>
          </article>
        </div>
      </section>
    </div>
  `;
}

function collaboratorPhotoMarkup(row, className = "collaborator-infographic-photo") {
  const name = row?.Colaboradores || row?.full_name || "Colaborador";
  if (row?.__photoUrl) {
    return `<span class="${className} has-photo"><img src="${escapeHtml(row.__photoUrl)}" alt="Foto de ${escapeHtml(name)}" loading="lazy" /></span>`;
  }
  return `<span class="${className}"><span>${escapeHtml(collaboratorInitials(name))}</span></span>`;
}

function collaboratorWeekValues(row, keys) {
  const raw = keys.map((key) => row?.[key]).find((value) => String(value ?? "").trim()) || "";
  return String(raw)
    .split(",")
    .map((item) => item.trim().toUpperCase())
    .filter(Boolean);
}

function collaboratorPerformanceRating(row) {
  const highlighted = collaboratorWeekValues(row, ["Destacados", "Destacado"]);
  const developing = collaboratorWeekValues(row, ["Mejorable", "Mejorables", "En Desarrollo", "Mejoramiento", "En desarrollo"]);
  const score = Math.max(0, Math.min(10, 9 + highlighted.length * 0.2 - developing.length * 0.2));
  const label = score >= 9.4 ? "Perfil destacado" : score >= 9 ? "Perfil sólido" : score >= 8.4 ? "Aceptable" : score >= 7.9 ? "Moderablemente aceptable" : "Requiere seguimiento";
  const range = score >= 9.4 ? "9.4 a 10" : score >= 9 ? "9.0 a 9.3" : score >= 8.4 ? "8.4 a 8.9" : score >= 7.9 ? "7.9 a 8.3" : "0.0 a 7.8";
  const tone = score >= 9.4 ? "excellent" : score >= 9 ? "good" : score >= 8.4 ? "watch" : "risk";
  const action = !highlighted.length && !developing.length
    ? "Calificación base inicial; sin semanas destacadas o mejorables registradas."
    : developing.length
      ? `Dar seguimiento a ${developing.join(", ")}.`
      : "Mantener el desempeño y documentar nuevas semanas destacadas.";
  return {
    score,
    label,
    range,
    tone,
    summary: `${highlighted.length} semana(s) destacada(s) y ${developing.length} semana(s) en desarrollo. ${action}`,
    highlighted,
    developing
  };
}

function collaboratorProfileValue(row, aliases, fallback = "") {
  const normalizedAliases = aliases.map((alias) => normalizeText(alias).replace(/[^a-z0-9]/g, ""));
  for (const [key, value] of Object.entries(row || {})) {
    const normalizedKey = normalizeText(key).replace(/[^a-z0-9]/g, "");
    if (!normalizedAliases.includes(normalizedKey)) continue;
    const text = String(value ?? "").trim();
    if (text && !/^(#n\/a|n\/a|na|null|undefined)$/i.test(text)) return text;
  }
  return fallback;
}

function collaboratorProfileBoolean(value) {
  const normalized = normalizeText(value);
  if (["true", "si", "1", "yes"].includes(normalized)) return "Sí";
  if (["false", "no", "0"].includes(normalized)) return "No";
  return value ? String(value) : "Sin dato";
}

function collaboratorProfilePercent(value) {
  const number = numberFrom(value);
  if (!String(value ?? "").trim()) return "Sin dato";
  if (!Number.isFinite(number)) return String(value);
  const percent = Math.abs(number) <= 1 ? number * 100 : number;
  return `${Math.round(percent * 10) / 10}%`;
}

function collaboratorProfileEvaluations(row) {
  const nominaKey = collaboratorMatchKey(row?.Nomina || row?.nomina || "");
  if (!nominaKey) return [];
  return physicalEvaluations
    .filter((evaluation) => collaboratorMatchKey(evaluation.collaborator_nomina || "") === nominaKey)
    .sort((a, b) => String(b.evaluated_at || "").localeCompare(String(a.evaluated_at || "")));
}

function collaboratorProfileInfo(icon, label, value) {
  return `
    <div class="collaborator-profile-info-item">
      <span class="collaborator-profile-info-icon" aria-hidden="true">${icon}</span>
      <div><small>${escapeHtml(label)}</small><strong>${escapeHtml(value || "Sin dato")}</strong></div>
    </div>
  `;
}

function collaboratorProfileEvaluationMarkup(evaluation) {
  const date = evaluation?.evaluated_at ? new Date(evaluation.evaluated_at) : null;
  const year = date && !Number.isNaN(date.getTime()) ? date.getFullYear() : "Sin año";
  const dateLabel = date && !Number.isNaN(date.getTime()) ? date.toLocaleDateString("es-MX") : "Sin fecha";
  const tests = ["cooper_12m", "abdominales", "lagartijas", "saltos_cuerda", "wall_ball", "remo_distancia"];
  return `
    <article class="collaborator-profile-evaluation">
      <div class="collaborator-profile-evaluation-heading"><strong>Evaluación física ${year}</strong><span>${dateLabel}</span></div>
      <div class="collaborator-profile-test-grid">
        ${tests.map((testKey) => `<div><small>${escapeHtml(PHYSICAL_TEST_LABELS[testKey])}</small><strong>${escapeHtml(physicalResultDisplay(evaluation, testKey))}</strong></div>`).join("")}
      </div>
    </article>
  `;
}

function collaboratorProfileBadge(icon, label) {
  return `<div class="collaborator-profile-badge"><span>${icon}</span><strong>${escapeHtml(label)}</strong></div>`;
}

function renderCollaboratorInfographicDetail(rows) {
  const selected = rows.find((row) => (row.__id || row.Nomina) === selectedCollaboratorInfographicId);
  if (!selected) return "";
  const rating = collaboratorPerformanceRating(selected);
  const name = collaboratorProfileValue(selected, ["Colaboradores", "full_name"], "Sin nombre");
  const nomina = collaboratorProfileValue(selected, ["Nomina", "Nómina"], "Sin dato");
  const puesto = collaboratorProfileValue(selected, ["Puesto", "Rol", "Materia"], "Colaborador");
  const coordinator = collaboratorProfileValue(selected, ["Coordinador"], "Sin dato");
  const email = collaboratorProfileValue(selected, ["correo institucional", "Correo", "Email"], "Sin dato");
  const birthday = collaboratorProfileValue(selected, ["Fecha cumpleaños", "Cumpleaños", "Cumpleanos"], "Sin dato");
  const gender = collaboratorProfileValue(selected, ["Genero", "Género"], "Sin dato");
  const discipline = collaboratorProfileValue(selected, ["Disciplina", "Coach", "Materia"], "Sin dato");
  const shirt = collaboratorProfileValue(selected, ["Playeras Joma", "Playera Joma"], "Sin dato");
  const pants = collaboratorProfileValue(selected, ["Talla pants", "Pants"], "Sin dato");
  const firstAidRaw = collaboratorProfileValue(selected, ["Primeros auxilios"], "");
  const firstAid = collaboratorProfileBoolean(firstAidRaw);
  const team = collaboratorProfileValue(selected, ["Equipo", "Sede", "CRN / sede"], "Wellness Center");
  const courses = collaboratorProfilePercent(collaboratorProfileValue(selected, ["% de cursos", "Cursos"], ""));
  const campus = collaboratorProfileValue(selected, ["Campus"], "Monterrey");
  const department = collaboratorProfileValue(selected, ["Departamento"], "Formación Deportiva");
  const division = collaboratorProfileValue(selected, ["División", "Division"], "Liderazgo y Formación Estudiantil");
  const subject = collaboratorProfileValue(selected, ["Materia", "Rol"], puesto);
  const contact1 = collaboratorProfileValue(selected, ["Contacto de emergencia", "Contacto 1"], "Sin dato");
  const phone1 = collaboratorProfileValue(selected, ["Numero 1", "Número 1"], "Sin dato");
  const contact2 = collaboratorProfileValue(selected, ["Contacto de emergencia 2", "Contacto 2"], "Sin dato");
  const phone2 = collaboratorProfileValue(selected, ["Numero 2", "Número 2"], "Sin dato");
  const highlights = collaboratorProfileValue(selected, ["Destacados"], "Sin dato");
  const development = collaboratorProfileValue(selected, ["En Desarrollo", "En desarrollo"], "Sin dato");
  const goal = collaboratorProfilePercent(collaboratorProfileValue(selected, ["Meta de %", "Meta"], ""));
  const gymAttendanceRaw = collaboratorProfileValue(selected, ["Asistencia a gimnasio de colaboradores", "Asistencia al gimnasio"], "");
  const gymAttendance = collaboratorProfilePercent(gymAttendanceRaw);
  const chipinqueRaw = collaboratorProfileValue(selected, ["Evento de integacion Chipinque", "Evento Chipinque"], "");
  const cozumelRaw = collaboratorProfileValue(selected, ["Evento de integacion Cozumelito", "Evento Cozumelito"], "");
  const chipinque = collaboratorProfileBoolean(chipinqueRaw);
  const cozumel = collaboratorProfileBoolean(cozumelRaw);
  const evaluations = collaboratorProfileEvaluations(selected).slice(0, 2);
  const badges = [];
  if (evaluations.length) badges.push(collaboratorProfileBadge("🏅", `Evaluación física ${new Date(evaluations[0].evaluated_at).getFullYear() || "registrada"}`));
  if (firstAid === "Sí") badges.push(collaboratorProfileBadge("✚", "Primeros auxilios"));
  if (gymAttendance !== "Sin dato" && numberFrom(gymAttendanceRaw) > 0) badges.push(collaboratorProfileBadge("🏋️", "Asistencia al gimnasio"));
  if (chipinque === "Sí") badges.push(collaboratorProfileBadge("⛰️", "Chipinque"));
  if (cozumel === "Sí") badges.push(collaboratorProfileBadge("🌊", "Cozumelito"));
  return `
    <div class="modal-backdrop collaborator-profile-backdrop" role="presentation">
      <section class="collaborator-profile-modal collaborator-profile-executive" role="dialog" aria-modal="true" aria-label="Expediente ejecutivo de ${escapeHtml(name)}">
        <header class="collaborator-profile-hero">
          ${collaboratorPhotoMarkup(selected, "collaborator-profile-photo")}
          <div class="collaborator-profile-identity">
            <p class="eyebrow">Expediente ejecutivo</p>
            <h3>${escapeHtml(name)}</h3>
            <strong>${escapeHtml(puesto)}</strong>
            <span>${escapeHtml(nomina)}</span>
            <div class="collaborator-profile-hero-meta"><span>Coordinador: ${escapeHtml(coordinator)}</span><span>Cumpleaños: ${escapeHtml(birthday)}</span><span>Género: ${escapeHtml(gender)}</span><span>Coach: ${escapeHtml(discipline)}</span></div>
          </div>
          <div class="collaborator-profile-brand"><img src="assets/borregos_logo_manual_oficial.png" alt="Borregos"><span>BORREGOS</span></div>
          <button class="collaborator-profile-close" type="button" data-close-collab-profile aria-label="Cerrar expediente">×</button>
        </header>

        <div class="collaborator-profile-content">
          <section class="collaborator-profile-section profile-blue wide">
            <h4>Perfil confirmado</h4>
            <div class="collaborator-profile-confirmed-layout">
              <div class="collaborator-profile-info-grid four">
                ${collaboratorProfileInfo("▣", "Nómina", nomina)}
                ${collaboratorProfileInfo("✉", "Correo institucional", email)}
                ${collaboratorProfileInfo("▦", "Cumpleaños", birthday)}
                ${collaboratorProfileInfo("◎", "Género", gender)}
              </div>
              <aside class="collaborator-profile-global-rating" data-tone="${rating.tone}">
                <span>Calificación global</span>
                <strong>${rating.score.toFixed(1)}</strong>
                <div class="collaborator-profile-rating-rubric">
                  <em>Nivel: ${escapeHtml(rating.label)}</em>
                  <small>Rango: ${escapeHtml(rating.range)}</small>
                </div>
              </aside>
            </div>
          </section>

          <section class="collaborator-profile-section profile-green wide">
            <h4>Uniforme y equipo</h4>
            <div class="collaborator-profile-info-grid five">
              ${collaboratorProfileInfo("♧", "Playera Joma", shirt)}
              ${collaboratorProfileInfo("▥", "Pants", pants)}
              ${collaboratorProfileInfo("✚", "Primeros auxilios", firstAid)}
              ${collaboratorProfileInfo("◉", "Equipo", team)}
              ${collaboratorProfileInfo("◷", "% de cursos", courses)}
            </div>
          </section>

          <section class="collaborator-profile-section profile-orange">
            <h4>Información laboral</h4>
            <div class="collaborator-profile-list"><p><b>Puesto:</b> ${escapeHtml(puesto)}</p><p><b>Coordinador:</b> ${escapeHtml(coordinator)}</p><p><b>Campus:</b> ${escapeHtml(campus)}</p><p><b>División:</b> ${escapeHtml(division)}</p><p><b>Departamento:</b> ${escapeHtml(department)}</p><p><b>Materia / rol:</b> ${escapeHtml(subject)}</p></div>
          </section>

          <section class="collaborator-profile-section profile-purple">
            <h4>Registro deportivo</h4>
            <div class="collaborator-profile-evaluations">${evaluations.length ? evaluations.map(collaboratorProfileEvaluationMarkup).join("") : `<div class="collaborator-profile-empty">Sin registro localizado</div>`}</div>
          </section>

          <section class="collaborator-profile-section profile-purple">
            <h4>Contactos de emergencia</h4>
            <div class="collaborator-profile-list"><p><b>Contacto 1:</b> ${escapeHtml(contact1)}</p><p><b>Número 1:</b> ${escapeHtml(phone1)}</p><p><b>Contacto 2:</b> ${escapeHtml(contact2)}</p><p><b>Número 2:</b> ${escapeHtml(phone2)}</p></div>
          </section>

          <section class="collaborator-profile-section profile-blue">
            <h4>Datos adicionales</h4>
            <div class="collaborator-profile-list two-columns"><p><b>Destacados:</b> ${escapeHtml(highlights)}</p><p><b>En desarrollo:</b> ${escapeHtml(development)}</p><p><b>Evento Chipinque:</b> ${escapeHtml(chipinque)}</p><p><b>Evento Cozumelito:</b> ${escapeHtml(cozumel)}</p><p><b>Meta:</b> ${escapeHtml(goal)}</p><p><b>Asistencia al gimnasio:</b> ${escapeHtml(gymAttendance)}</p></div>
          </section>

          <section class="collaborator-profile-section profile-navy wide">
            <h4>Insignias y logros</h4>
            <div class="collaborator-profile-badges">${badges.length ? badges.join("") : `<div class="collaborator-profile-empty">Sin insignias registradas</div>`}</div>
          </section>
        </div>
      </section>
    </div>
  `;
}

function renderCollaboratorInfographicView() {
  const rows = collaboratorRows();
  return `
    <section class="collaborator-infographic-view">
      <div class="permission-strip">
        <span>Infografía de colaboradores: foto y nombre para consulta ejecutiva.</span>
        <span>${rows.length.toLocaleString("es-MX")} registros disponibles</span>
      </div>
      <div class="collaborator-infographic-grid">
        ${rows.map((row) => `
          <button class="collaborator-infographic-card" type="button" data-collab-profile="${escapeHtml(row.__id || row.Nomina)}">
            ${collaboratorPhotoMarkup(row)}
            <strong>${escapeHtml(row.Colaboradores || "Sin nombre")}</strong>
          </button>
        `).join("") || `<div class="upload-empty">No hay colaboradores cargados todavía.</div>`}
      </div>
      ${renderCollaboratorInfographicDetail(rows)}
    </section>
  `;
}

function renderCollaboratorsDashboard() {
  if (!uniformesLoaded) {
    return `<div class="permission-strip">Cargando informacion de uniformes y colaboradores...</div>`;
  }
  const rows = filteredCollaborators();
  const metrics = collaboratorMetrics();
  const sizeOrder = ["XS", "CH", "S", "M", "L", "XL", "XXL", "Sin dato"];
  const shirtGenderRows = groupedByGender(rows, "Playeras Joma", sizeOrder);
  const pantGenderRows = groupedByGender(rows, "Talla pants", sizeOrder);
  const coordinatorGenderRows = groupedByGender(rows, "Coordinador").slice(0, 10);
  const columns = collaboratorColumns();
  const directEdit = canManageStructure();
  const operationalEntry = currentUser?.auth === "supabase" && canEditArea("colaboradores");
  const rowManagement = canManageCollaboratorRows();
  const authorizedUpload = canUseAuthorizedUploads()
    || (currentUser?.auth === "supabase" && currentUser?.area === "colaboradores");
  const allRows = collaboratorRows();
  const coordinatorOptions = [...new Set(allRows.map((row) => row["Coordinador"]).filter(Boolean))].sort();
  const shirtOptions = [...new Set(allRows.map((row) => row["Playeras Joma"]).filter(Boolean))].sort();
  return `
    <section class="filters-band" aria-label="Filtros de colaboradores">
      <label>
        Coordinador
        <select class="collab-filter" data-filter="coordinator">
          <option value="todos">Todos</option>
          ${coordinatorOptions.map((option) => `<option ${collaboratorFilter.coordinator === option ? "selected" : ""}>${option}</option>`).join("")}
        </select>
      </label>
      <label>
        Playera
        <select class="collab-filter" data-filter="shirt">
          <option value="todos">Todas</option>
          ${shirtOptions.map((option) => `<option ${collaboratorFilter.shirt === option ? "selected" : ""}>${option}</option>`).join("")}
        </select>
      </label>
      <label>
        Primeros auxilios
        <select class="collab-filter" data-filter="firstAid">
          <option value="todos">Todos</option>
          <option value="si" ${collaboratorFilter.firstAid === "si" ? "selected" : ""}>Si</option>
          <option value="no" ${collaboratorFilter.firstAid === "no" ? "selected" : ""}>No</option>
        </select>
      </label>
      <label>
        Registros filtrados
        <input value="${rows.length} de ${allRows.length}" disabled />
      </label>
    </section>
    <div class="kpi-grid collaborator-kpi-strip">
      <div class="kpi"><span>Colaboradores</span><strong>${metrics.collaborators}</strong><em>uniformes</em></div>
      <div class="kpi"><span>Primeros auxilios</span><strong>${metrics.firstAid}</strong><em>registrados</em></div>
      <div class="kpi"><span>Promedio cursos</span><strong>${metrics.courseAvg}%</strong><em>avance</em></div>
      <div class="kpi"><span>Contratos</span><strong>${metrics.contracts}</strong><em>layouts</em></div>
    </div>
    <div class="collaborator-charts-grid">
      <div class="chart-panel">
        <h3>Playeras Joma por talla</h3>
        ${genderLegend("shirt")}
        ${renderGenderBars(shirtGenderRows, "shirt")}
      </div>
      <div class="chart-panel">
        <h3>Colaboradores por coordinador</h3>
        ${genderLegend("coordinator")}
        ${renderGenderBars(coordinatorGenderRows, "coordinator")}
      </div>
      <div class="chart-panel">
        <h3>Pants por talla</h3>
        ${genderLegend("pants")}
        ${renderGenderBars(pantGenderRows, "pants")}
      </div>
    </div>
    ${authorizedUpload && collaboratorsCloudLoaded && !cloudCollaborators.length ? `
      <div class="permission-strip import-collaborators-callout">
        La tabla central está vacía. Importa una sola vez los registros actuales del archivo Uniformes.
        <button class="primary-btn inline-action" id="importCollaboratorsToCloud" type="button">Importar datos iniciales</button>
      </div>
    ` : ""}
    <div class="collaborator-table-header">
      <div>
        <p class="eyebrow">Archivo máster</p>
        <h3>Profesores y colaboradores</h3>
        <span class="editor-status">${directEdit ? "Edición administrativa activa." : operationalEntry ? "Modo operativo: altas, cargas y consulta autorizadas." : "Modo consulta."}</span>
      </div>
      <div class="table-actions">
        <button class="primary-btn" id="openCollaboratorPhotoUploader" type="button" ${authorizedUpload ? "" : "disabled"}>Cargar imágenes</button>
        <button class="ghost-btn" id="exportCollaboratorBackup" type="button">Exportar respaldo</button>
      </div>
    </div>
    ${renderCollaboratorPhotoUploader(allRows, authorizedUpload)}
    <div class="table-wrap collaborator-editor-wrap">
      <table class="collaborator-editor">
        <thead>
          <tr><th class="photo-heading">Foto</th>${columns.map((column, index) => collaboratorColumnHeader(column, index, columns, directEdit)).join("")}<th class="row-actions-heading">Fila</th></tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr data-row-id="${escapeHtml(row.__id || row.Nomina)}">
              <td class="photo-cell">${collaboratorAvatar(row, authorizedUpload)}</td>
              ${columns.map((column) => `<td>${collaboratorEditorControl(row, column, directEdit)}</td>`).join("")}
              <td class="row-actions-cell"><button class="delete-row-btn" data-delete-row="${escapeHtml(row.__id || row.Nomina)}" type="button" ${rowManagement ? "" : "disabled"} title="Dar de baja colaborador">Baja</button></td>
            </tr>
          `).join("") || `<tr><td colspan="${columns.length + 2}">No hay registros con los filtros seleccionados.</td></tr>`}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="${columns.length + 2}">
              <div class="table-footer-actions">
                <button class="primary-btn" id="addCollaboratorRow" type="button" ${operationalEntry ? "" : "disabled"}>+ Agregar profesor</button>
                ${directEdit ? '<button class="ghost-btn" id="addCollaboratorColumn" type="button">+ Agregar columna al final</button>' : ""}
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  `;
}

function renderVivenciaImportSummary(result = vivenciaEventImportResult) {
  if (!result) return "";
  const planningSync = Number.isFinite(result.found);
  const warnings = result.warnings || [];
  return `
    <div class="vivencia-import-summary ${result.blocked ? "blocked" : ""}">
      <div>
        <strong>${escapeHtml(result.source)}</strong>
        <span>${result.blocked ? "Carga detenida por errores obligatorios" : "Carga procesada correctamente"}</span>
      </div>
      <div class="vivencia-import-counts">
        ${planningSync ? `
          <span><strong>${result.found}</strong> encontrados</span>
          <span><strong>${result.created}</strong> nuevos creados</span>
          <span><strong>${result.existing}</strong> existentes ignorados</span>
          <span><strong>${result.errors.length}</strong> errores</span>
        ` : `
          <span><strong>${result.loaded}</strong> cargados</span>
          <span><strong>${result.omitted}</strong> omitidos</span>
          <span><strong>${warnings.length}</strong> advertencias</span>
        `}
      </div>
      ${warnings.length ? `
        <details>
          <summary>Ver detalle</summary>
          ${warnings.slice(0, 12).map((warning) => `<p>${warning.row ? `Fila ${warning.row}: ` : ""}${escapeHtml(warning.message)}</p>`).join("")}
        </details>
      ` : ""}
    </div>
  `;
}

function vivenciaEventOptionLabel(row) {
  const dateLabel = row.event_date ? `${row.event_date}  -  ` : "";
  const sourceLabel = row.source_name === "planeacion_semestral" ? "Planeacion" : (row.source_name === "captura_manual" ? "Manual" : row.source_name || "Vivencia");
  return `${dateLabel}${row.event_name || "Evento sin nombre"}  -  ${sourceLabel}`;
}

function renderVivenciaParticipantsModal(editable) {
  if (!vivenciaParticipantsModalOpen) return "";
  const eventOptions = vivenciaEvents
    .slice()
    .sort((a, b) => String(b.event_date || "").localeCompare(String(a.event_date || "")) || String(a.event_name || "").localeCompare(String(b.event_name || "")))
    .map((row) => `<option value="${escapeHtml(row.id)}" ${selectedVivenciaEventForParticipants === row.id ? "selected" : ""}>${escapeHtml(vivenciaEventOptionLabel(row))}</option>`)
    .join("");
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="vivencia-participants-modal" role="dialog" aria-modal="true" aria-labelledby="vivenciaParticipantsTitle">
        <div class="vivencia-modal-heading">
          <div>
            <p class="eyebrow">Vivencia</p>
            <h3 id="vivenciaParticipantsTitle">Cargar participantes</h3>
          </div>
          <button class="ghost-btn compact-action" id="closeVivenciaParticipantsModal" type="button">Cerrar</button>
        </div>
        <form id="vivenciaParticipantsForm" class="vivencia-participants-form">
          <label class="full">Evento
            <select name="event_id" required ${editable ? "" : "disabled"}>
              <option value="">Selecciona un evento</option>
              ${eventOptions}
            </select>
          </label>
          <label class="full">Archivo CSV o Excel
            <input name="participants_file" type="file" accept=".csv,.xlsx,.xls" required ${editable ? "" : "disabled"} />
          </label>
          <div class="vivencia-modal-help full">
            <strong>Formato mínimo:</strong> una columna llamada <code>matricula</code>. También acepta <code>matrícula</code>, <code>alumno</code> o <code>student_id</code>.
          </div>
          <button class="primary-btn full" type="submit" ${editable && !vivenciaParticipantImporting ? "" : "disabled"}>
            ${vivenciaParticipantImporting ? "Cargando participantes..." : "Cargar participantes"}
          </button>
        </form>
      </section>
    </div>
  `;
}

function formatVivenciaUploadDate(value) {
  if (!value) return "Sin fecha";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString("es-MX");
}

function renderVivenciaParticipantUploadHistory() {
  if (!vivenciaParticipantUploads.length) {
    return `<div class="vivencia-empty-state compact">Todavia no hay cargas de participantes registradas.</div>`;
  }
  const eventsById = new Map(vivenciaEvents.map((row) => [row.id, row]));
  return `
    <div class="table-wrap vivencia-participants-history-wrap">
      <table class="vivencia-participants-history-table">
        <thead>
          <tr>
            <th>Evento</th>
            <th>Fecha de carga</th>
            <th>Total cargado</th>
            <th>Duplicados ignorados</th>
          </tr>
        </thead>
        <tbody>
          ${vivenciaParticipantUploads.slice(0, 12).map((row) => {
            const eventRow = eventsById.get(row.event_id);
            return `
              <tr>
                <td>
                  <strong>${escapeHtml(eventRow?.event_name || "Evento no encontrado")}</strong>
                  ${row.source_name ? `<span>${escapeHtml(row.source_name)}</span>` : ""}
                </td>
                <td>${escapeHtml(formatVivenciaUploadDate(row.upload_date || row.created_at))}</td>
                <td>${Number(row.total_inserted || 0)}</td>
                <td>${Number(row.duplicates_ignored || 0)}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderVivenciaEventHistory() {
  if (currentUser?.auth !== "supabase") {
    return `<div class="vivencia-empty-state">Inicia sesion con Supabase para consultar el historial compartido.</div>`;
  }
  if (!vivenciaEventsLoaded) {
    return `<div class="vivencia-empty-state">Cargando historial de eventos...</div>`;
  }
  if (!vivenciaEventsAvailable) {
    return `
      <div class="vivencia-empty-state warning">
        <strong>Falta activar la estructura de Vivencia en Supabase.</strong>
        <span>Ejecuta el archivo <code>supabase/vivencia.sql</code> y vuelve a entrar.</span>
      </div>
    `;
  }
  if (!vivenciaEvents.length) {
    return `<div class="vivencia-empty-state">Todavia no hay eventos guardados en Supabase.</div>`;
  }
  const editable = currentUser?.auth === "supabase" && canEditArea("vivencia") && vivenciaEventsAvailable;
  const metricsByEvent = new Map(vivenciaEventMetrics.map((row) => [row.event_id, row]));
  return `
    <div class="table-wrap vivencia-history-wrap">
      <table class="vivencia-history-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Evento</th>
            <th>Campus</th>
            <th>Clasificacion</th>
            <th>Meta</th>
            <th>Participantes</th>
            <th>Responsable</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${vivenciaEvents.map((row) => {
            const metrics = metricsByEvent.get(row.id);
            const calculated = vivenciaMetricParticipants(metrics || row);
            const completion = vivenciaCompletionState(row, metrics);
            return `
              <tr>
                <td data-label="Fecha">${escapeHtml(row.event_date || "")}</td>
                <td data-label="Evento">
                  <strong>${escapeHtml(row.event_name || "")}</strong>
                  ${row.discipline ? `<span>${escapeHtml(row.discipline)}</span>` : ""}
                  ${row.is_signature_event ? `<em>Evento insignia</em>` : ""}
                </td>
                <td data-label="Campus">${escapeHtml(row.campus || "")}</td>
                <td data-label="Clasificacion">${escapeHtml(row.classification || "Sin clasificar")}</td>
                <td data-label="Meta">${row.participation_goal ?? "Sin meta"}</td>
                <td data-label="Participantes">
                  <strong>${calculated}</strong>
                  <span>${Number(metrics?.unique_participants || 0) ? "por matriculas" : "reportados"}</span>
                </td>
                <td data-label="Responsable">${escapeHtml(row.responsible_name || "Sin asignar")}</td>
                <td data-label="Estado"><span class="vivencia-status ${escapeHtml(completion.className)}">${escapeHtml(completion.label)}</span></td>
                <td data-label="Acciones">
                  <button class="ghost-btn compact-action" data-vivencia-detail="${escapeHtml(row.id)}" ${editable ? "" : "disabled"}>Detalle</button>
                  <button class="danger-btn compact-action" data-vivencia-delete="${escapeHtml(row.id)}" ${editable ? "" : "disabled"}>Eliminar</button>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderVivenciaEventGallery(event, editable) {
  if (!event) {
    return `
      <section class="vivencia-gallery-panel">
        <div><p class="eyebrow">Galería</p><h3>Imágenes del evento</h3></div>
        <p>Guarda primero un evento para poder agregar imágenes asociadas a él.</p>
      </section>
    `;
  }
  const images = vivenciaImagesForEvent(event.id);
  return `
    <section class="vivencia-gallery-panel">
      <div class="vivencia-gallery-heading">
        <div><p class="eyebrow">Galería</p><h3>Imágenes del evento</h3><span>${images.length} archivo${images.length === 1 ? "" : "s"} asociado${images.length === 1 ? "" : "s"} a este evento</span></div>
        <button class="ghost-btn compact-action" id="uploadVivenciaEventImages" type="button" ${editable && !vivenciaEventImagesUploading ? "" : "disabled"}>${vivenciaEventImagesUploading ? "Guardando..." : "Agregar imágenes"}</button>
        <input id="vivenciaEventImagesFile" type="file" accept="image/jpeg,image/png,image/webp" multiple hidden />
      </div>
      ${images.length ? `
        <div class="vivencia-gallery">
          ${images.map((image) => `
            <figure>
              <a href="${escapeHtml(image.public_url || "#")}" target="_blank" rel="noopener"><img src="${escapeHtml(image.public_url || "")}" alt="${escapeHtml(image.file_name || "Imagen del evento")}" /></a>
              <figcaption><span>${escapeHtml(image.file_name || "Imagen")}</span>${editable ? `<button type="button" class="danger-btn compact-action" data-vivencia-image-delete="${escapeHtml(image.id)}">Eliminar</button>` : ""}</figcaption>
            </figure>
          `).join("")}
        </div>
      ` : `<div class="vivencia-empty-mini">Aún no hay imágenes asociadas a este evento.</div>`}
    </section>
  `;
}

function renderVivenciaEventsView() {
  const editable = currentUser?.auth === "supabase" && canEditArea("vivencia") && vivenciaEventsAvailable;
  const today = new Date().toISOString().slice(0, 10);
  const detailEvent = vivenciaEvents.find((row) => row.id === selectedVivenciaEventForDetail) || null;
  const formValue = (key, fallback = "") => escapeHtml(detailEvent?.[key] ?? fallback ?? "");
  const formNumber = (key) => detailEvent?.[key] ?? "";
  const detailStatus = vivenciaStatus(detailEvent?.status || "planeado");
  const detailSource = detailEvent?.source_name === "planeacion_semestral" ? "Vinculado a Planeacion Semestral" : "Captura manual";
  return `
    <section class="vivencia-events-module">
      <div class="permission-strip">
        <span>Supabase es la fuente principal. Excel y CSV se usan solo para cargar eventos.</span>
        <span>${vivenciaEvents.length} eventos en historial</span>
      </div>
      ${renderVivenciaImportSummary()}
      ${renderVivenciaImportSummary(vivenciaParticipantImportResult)}
      ${renderVivenciaParticipantsModal(editable)}
      <div class="vivencia-event-layout">
        <article class="form-panel vivencia-event-entry">
          <div class="vivencia-panel-heading">
            <div>
              <p class="eyebrow">Vivencia</p>
              <h3>${detailEvent ? "Detalle del evento" : "Captura manual de evento"}</h3>
            </div>
            <span class="editor-status">${detailEvent ? detailSource : (editable ? "Guardado en linea activo" : "Modo consulta")}</span>
          </div>
          <form id="vivenciaEventForm" class="vivencia-event-form">
            <input name="event_id" type="hidden" value="${formValue("id")}" />
            <label>Campus<input name="campus" value="${formValue("campus", "Monterrey")}" placeholder="Ej. Monterrey" ${editable ? "" : "disabled"} /></label>
            <label>Nombre del evento<input name="event_name" required value="${formValue("event_name")}" placeholder="Nombre del evento" ${editable ? "" : "disabled"} /></label>
            <label>Disciplina deportiva<input name="discipline" value="${formValue("discipline")}" placeholder="Opcional" ${editable ? "" : "disabled"} /></label>
            <label>Clasificacion<input name="classification" value="${formValue("classification")}" placeholder="Ej. Bienestar, recreativo" ${editable ? "" : "disabled"} /></label>
            <label>Fecha del evento<input name="event_date" type="date" required value="${formValue("event_date", today)}" ${editable ? "" : "disabled"} /></label>
            <label>Fecha final<input name="end_date" type="date" value="${formValue("end_date")}" ${editable ? "" : "disabled"} /></label>
            <label>Rama<input name="branch" value="${formValue("branch")}" placeholder="Opcional" ${editable ? "" : "disabled"} /></label>
            <label>Poblacion objetivo<input name="target_population" value="${formValue("target_population")}" placeholder="Ej. Profesional" ${editable ? "" : "disabled"} /></label>
            <label>Meta de captacion<input name="participation_goal" type="number" min="0" value="${formNumber("participation_goal")}" placeholder="0" ${editable ? "" : "disabled"} /></label>
            <label>Responsable<input name="responsible_name" value="${formValue("responsible_name")}" placeholder="Nombre del responsable" ${editable ? "" : "disabled"} /></label>
            <label>Estado<select name="status" ${editable ? "" : "disabled"}><option value="planeado" ${detailStatus === "planeado" ? "selected" : ""}>Planeado</option><option value="realizado" ${detailStatus === "realizado" ? "selected" : ""}>Realizado</option><option value="pospuesto" ${detailStatus === "pospuesto" ? "selected" : ""}>Pospuesto</option><option value="cancelado" ${detailStatus === "cancelado" ? "selected" : ""}>Cancelado</option></select></label>
            <label>Costo de inscripcion<input name="fee_amount" type="number" min="0" step="0.01" value="${formNumber("fee_amount")}" placeholder="0.00" ${editable ? "" : "disabled"} /></label>
            <label class="vivencia-check"><input name="has_fee" type="checkbox" ${detailEvent?.has_fee ? "checked" : ""} ${editable ? "" : "disabled"} /> Evento con cobro</label>
            <label class="vivencia-check"><input name="is_signature_event" type="checkbox" ${detailEvent?.is_signature_event ? "checked" : ""} ${editable ? "" : "disabled"} /> Evento insignia</label>
            <label class="full">Descripcion<textarea name="description" rows="3" placeholder="Descripcion breve del evento" ${editable ? "" : "disabled"}>${formValue("description")}</textarea></label>
            ${detailEvent ? `<button class="ghost-btn full" id="newVivenciaEvent" type="button">Capturar evento nuevo</button>` : ""}
            <button class="primary-btn full" id="saveVivenciaEvent" type="submit" ${editable ? "" : "disabled"}>${detailEvent ? "Guardar detalle" : "Guardar evento"}</button>
          </form>
          ${renderVivenciaEventGallery(detailEvent, editable)}
          <div class="vivencia-bulk-upload">
            <div>
              <strong>Sincronizar eventos desde Planeacion</strong>
              <span>Trae los registros historicos de Planeacion donde el area es Vivencia y evita duplicados.</span>
            </div>
            <button class="ghost-btn" id="syncVivenciaPlanningEvents" type="button" ${editable && !vivenciaPlanningSyncing ? "" : "disabled"}>
              ${vivenciaPlanningSyncing ? "Sincronizando..." : "Sincronizar eventos"}
            </button>
          </div>
          <div class="vivencia-bulk-upload">
            <div>
              <strong>Carga de participantes</strong>
              <span>Selecciona un evento y sube matriculas. Se ignoran duplicados dentro del mismo evento.</span>
            </div>
            <div class="vivencia-upload-actions">
              <button class="primary-btn" id="openVivenciaParticipantsModal" type="button" ${editable && vivenciaEvents.length ? "" : "disabled"}>Cargar participantes</button>
              <button class="ghost-btn" type="button" data-download-event-participants-template="vivencia">Descargar plantilla</button>
            </div>
          </div>
          <div class="vivencia-upload-history">
            <div class="vivencia-panel-heading compact">
              <div>
                <p class="eyebrow">Historial</p>
                <h3>Cargas de participantes</h3>
              </div>
            </div>
            ${renderVivenciaParticipantUploadHistory()}
          </div>
        </article>
        <article class="form-panel vivencia-event-history">
          <div class="vivencia-panel-heading">
            <div>
              <p class="eyebrow">Historial</p>
              <h3>Eventos cargados</h3>
            </div>
            <span class="editor-status">No se elimina historico</span>
          </div>
          ${renderVivenciaEventHistory()}
        </article>
      </div>
    </section>
  `;
}

function renderCommunicationParticipantUploadHistory() {
  if (!communicationParticipantsAvailable) {
    return `<div class="vivencia-empty-state warning compact">Activa <code>supabase/communication-events.sql</code> para guardar el historial de participantes.</div>`;
  }
  if (!communicationParticipantUploads.length) {
    return `<div class="vivencia-empty-state compact">Todavía no hay cargas de participantes registradas.</div>`;
  }
  const eventsById = new Map(communicationEvents.map((row) => [row.id, row]));
  return `
    <div class="table-wrap vivencia-participants-history-wrap">
      <table class="vivencia-participants-history-table">
        <thead><tr><th>Evento</th><th>Fecha de carga</th><th>Total cargado</th><th>Duplicados ignorados</th></tr></thead>
        <tbody>
          ${communicationParticipantUploads.slice(0, 12).map((row) => {
            const eventRow = eventsById.get(row.event_id);
            return `<tr><td><strong>${escapeHtml(eventRow?.event_name || "Evento no encontrado")}</strong>${row.source_name ? `<span>${escapeHtml(row.source_name)}</span>` : ""}</td><td>${escapeHtml(formatVivenciaUploadDate(row.upload_date || row.created_at))}</td><td>${Number(row.total_inserted || 0)}</td><td>${Number(row.duplicates_ignored || 0)}</td></tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderCommunicationParticipantsModal(editable) {
  if (!communicationParticipantsModalOpen) return "";
  const eventOptions = communicationEvents
    .slice()
    .sort((a, b) => String(b.event_date || "").localeCompare(String(a.event_date || "")) || String(a.event_name || "").localeCompare(String(b.event_name || "")))
    .map((row) => `<option value="${escapeHtml(row.id)}" ${selectedCommunicationEventForParticipants === row.id ? "selected" : ""}>${escapeHtml(vivenciaEventOptionLabel(row))}</option>`)
    .join("");
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="vivencia-participants-modal" role="dialog" aria-modal="true" aria-labelledby="communicationParticipantsTitle">
        <div class="vivencia-modal-heading">
          <div>
            <p class="eyebrow">Comunicación</p>
            <h3 id="communicationParticipantsTitle">Cargar participantes</h3>
          </div>
          <button class="ghost-btn compact-action" id="closeCommunicationParticipantsModal" type="button">Cerrar</button>
        </div>
        ${!communicationParticipantsAvailable ? `<div class="vivencia-empty-state warning"><strong>Falta activar participantes de Comunicación.</strong><span>Ejecuta <code>supabase/communication-events.sql</code> antes de la primera carga.</span></div>` : ""}
        <form id="communicationParticipantsForm" class="vivencia-participants-form">
          <label class="full">Evento
            <select name="event_id" required ${editable ? "" : "disabled"}>
              <option value="">Selecciona un evento</option>
              ${eventOptions}
            </select>
          </label>
          <label class="full">Archivo CSV o Excel
            <input name="participants_file" type="file" accept=".csv,.xlsx,.xls" required ${editable ? "" : "disabled"} />
          </label>
          <div class="vivencia-modal-help full">
            <strong>Formato mínimo:</strong> una columna llamada <code>Matrícula</code>. No se requieren ni se guardan nombres.
          </div>
          <button class="primary-btn full" type="submit" ${editable && communicationParticipantsAvailable && !communicationParticipantImporting ? "" : "disabled"}>
            ${communicationParticipantImporting ? "Cargando participantes..." : "Cargar participantes"}
          </button>
        </form>
      </section>
    </div>
  `;
}

function renderCommunicationEventHistory() {
  if (currentUser?.auth !== "supabase") return `<div class="vivencia-empty-state">Inicia sesión con Supabase para consultar y guardar el historial compartido.</div>`;
  if (!communicationEventsLoaded) return `<div class="vivencia-empty-state">Cargando historial de eventos...</div>`;
  if (!communicationEventsAvailable) {
    return `<div class="vivencia-empty-state warning"><strong>Falta activar los eventos de Comunicación en Supabase.</strong><span>Ejecuta <code>supabase/communication-events.sql</code> una sola vez.</span></div>`;
  }
  if (!communicationEvents.length) return `<div class="vivencia-empty-state">Todavía no hay eventos de Comunicación guardados.</div>`;
  const editable = currentUser?.auth === "supabase" && canEditArea("comunicacion");
  return `
    <div class="table-wrap vivencia-history-wrap">
      <table class="vivencia-history-table">
        <thead><tr><th>Fecha</th><th>Evento</th><th>Meta</th><th>Participantes</th><th>Responsable</th><th>Estado</th><th>Acciones</th></tr></thead>
        <tbody>
          ${communicationEvents.map((row) => `
            <tr>
              <td data-label="Fecha">${escapeHtml(row.event_date || "")}</td>
              <td data-label="Evento"><strong>${escapeHtml(row.event_name || "")}</strong>${row.classification ? `<span>${escapeHtml(row.classification)}</span>` : ""}</td>
              <td data-label="Meta">${row.participation_goal ?? "Sin meta"}</td>
              <td data-label="Participantes"><strong>${Number(row.reported_total_participants || 0).toLocaleString("es-MX")}</strong></td>
              <td data-label="Responsable">${escapeHtml(row.responsible_name || "Sin asignar")}</td>
              <td data-label="Estado"><span class="vivencia-status ${escapeHtml(row.status || "planeado")}">${escapeHtml(vivenciaStateLabel(row.status))}</span></td>
              <td data-label="Acciones">
                <button class="ghost-btn compact-action" data-communication-detail="${escapeHtml(row.id)}" ${editable ? "" : "disabled"}>Detalle</button>
                <button class="danger-btn compact-action" data-communication-delete="${escapeHtml(row.id)}" ${editable ? "" : "disabled"}>Eliminar</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderCommunicationEventsView() {
  const editable = currentUser?.auth === "supabase" && canEditArea("comunicacion") && communicationEventsAvailable;
  const today = new Date().toISOString().slice(0, 10);
  const detailEvent = communicationEvents.find((row) => row.id === selectedCommunicationEventForDetail) || null;
  const formValue = (key, fallback = "") => escapeHtml(detailEvent?.[key] ?? fallback ?? "");
  const formNumber = (key) => detailEvent?.[key] ?? "";
  const detailStatus = vivenciaStatus(detailEvent?.status || "planeado");
  return `
    <section class="vivencia-events-module communication-events-module">
      <div class="permission-strip">
        <span>Esta carga alimenta únicamente el dashboard y calendario de Comunicación.</span>
        <span>${communicationEvents.length} eventos en historial</span>
      </div>
      ${renderVivenciaImportSummary(communicationEventImportResult)}
      ${renderVivenciaImportSummary(communicationParticipantImportResult)}
      ${renderCommunicationParticipantsModal(editable)}
      <div class="vivencia-event-layout">
        <article class="form-panel vivencia-event-entry">
          <div class="vivencia-panel-heading">
            <div><p class="eyebrow">Comunicación</p><h3>${detailEvent ? "Detalle del evento" : "Captura manual de evento"}</h3></div>
            <span class="editor-status">${editable ? "Guardado en línea activo" : "Modo consulta"}</span>
          </div>
          <form id="communicationEventForm" class="vivencia-event-form">
            <input name="event_id" type="hidden" value="${formValue("id")}" />
            <label>Campus<input name="campus" value="${formValue("campus", "Monterrey")}" ${editable ? "" : "disabled"} /></label>
            <label>Nombre del evento<input name="event_name" required value="${formValue("event_name")}" placeholder="Nombre del evento" ${editable ? "" : "disabled"} /></label>
            <label>Tipo de actividad<input name="discipline" value="${formValue("discipline")}" placeholder="Opcional" ${editable ? "" : "disabled"} /></label>
            <label>Clasificación<input name="classification" value="${formValue("classification")}" placeholder="Ej. Campaña, cobertura" ${editable ? "" : "disabled"} /></label>
            <label>Fecha del evento<input name="event_date" type="date" required value="${formValue("event_date", today)}" ${editable ? "" : "disabled"} /></label>
            <label>Fecha final<input name="end_date" type="date" value="${formValue("end_date")}" ${editable ? "" : "disabled"} /></label>
            <label>Rama<input name="branch" value="${formValue("branch")}" placeholder="Opcional" ${editable ? "" : "disabled"} /></label>
            <label>Población objetivo<input name="target_population" value="${formValue("target_population")}" placeholder="Ej. Comunidad estudiantil" ${editable ? "" : "disabled"} /></label>
            <label>Meta de impacto<input name="participation_goal" type="number" min="0" value="${formNumber("participation_goal")}" placeholder="0" ${editable ? "" : "disabled"} /></label>
            <label>Participantes impactados<input name="reported_total_participants" type="number" min="0" value="${formNumber("reported_total_participants")}" placeholder="0" ${editable ? "" : "disabled"} /></label>
            <label>Mujeres<input name="reported_women" type="number" min="0" value="${formNumber("reported_women")}" placeholder="0" ${editable ? "" : "disabled"} /></label>
            <label>Hombres<input name="reported_men" type="number" min="0" value="${formNumber("reported_men")}" placeholder="0" ${editable ? "" : "disabled"} /></label>
            <label>Responsable<input name="responsible_name" value="${formValue("responsible_name")}" placeholder="Nombre del responsable" ${editable ? "" : "disabled"} /></label>
            <label>Estado<select name="status" ${editable ? "" : "disabled"}><option value="planeado" ${detailStatus === "planeado" ? "selected" : ""}>Planeado</option><option value="realizado" ${detailStatus === "realizado" ? "selected" : ""}>Realizado</option><option value="pospuesto" ${detailStatus === "pospuesto" ? "selected" : ""}>Pospuesto</option><option value="cancelado" ${detailStatus === "cancelado" ? "selected" : ""}>Cancelado</option></select></label>
            <label class="full">Descripción<textarea name="description" rows="3" placeholder="Descripción breve del evento" ${editable ? "" : "disabled"}>${formValue("description")}</textarea></label>
            ${detailEvent ? `<button class="ghost-btn full" id="newCommunicationEvent" type="button">Capturar evento nuevo</button>` : ""}
            <button class="primary-btn full" type="submit" ${editable ? "" : "disabled"}>${detailEvent ? "Guardar detalle" : "Guardar evento"}</button>
          </form>
          <div class="vivencia-bulk-upload">
            <div><strong>Sincronizar desde Planeación</strong><span>Guarda los eventos de Comunicación que ya tienen fecha y evita registros repetidos.</span></div>
            <button class="ghost-btn" id="syncCommunicationPlanningEvents" type="button" ${editable && !communicationPlanningSyncing ? "" : "disabled"}>${communicationPlanningSyncing ? "Sincronizando..." : "Sincronizar eventos"}</button>
          </div>
          <div class="vivencia-bulk-upload">
            <div><strong>Carga de participantes</strong><span>Selecciona un evento de Comunicación y sube matrículas. Los registros se guardan separados de Vivencia.</span></div>
            <div class="vivencia-upload-actions">
              <button class="primary-btn" id="openCommunicationParticipantsModal" type="button" ${editable && communicationEvents.length ? "" : "disabled"}>Cargar participantes</button>
              <button class="ghost-btn" type="button" data-download-event-participants-template="comunicacion">Descargar plantilla</button>
            </div>
          </div>
          <div class="vivencia-upload-history">
            <div class="vivencia-panel-heading compact"><div><p class="eyebrow">Historial</p><h3>Cargas de participantes</h3></div></div>
            ${renderCommunicationParticipantUploadHistory()}
          </div>
        </article>
        <article class="form-panel vivencia-event-history">
          <div class="vivencia-panel-heading"><div><p class="eyebrow">Historial</p><h3>Eventos cargados</h3></div><span class="editor-status">Solo Comunicación</span></div>
          ${renderCommunicationEventHistory()}
        </article>
      </div>
    </section>
  `;
}

function renderCapture(area) {
  const selected = area.id === "general" ? areas.find((item) => item.id === currentUser?.area) || areas[1] : area;
  if (selected.id === "colaboradores") return renderCollaboratorsCapture(selected);
  if (selected.id === "configuracion") return renderConfigurationCapture();
  const editable = canEditArea(selected.id);
  return `
    <div class="permission-strip">Rol activo: ${currentUser?.name || "Sin sesion"}. ${editable ? "Puedes capturar en este modulo." : "Este perfil solo puede consultar esta vista."}</div>
    <div class="form-grid">
      <div class="form-panel">
        <h3>Formulario de captura: ${selected.name}</h3>
        <form id="captureForm">
          <label>Matrícula<input name="matricula" value="A0841027" pattern="A0[0-9]{6,8}" ${editable ? "" : "disabled"} /></label>
          <label>Género<select name="genero" ${editable ? "" : "disabled"}><option>Femenino</option><option>Masculino</option><option>No especificado</option></select></label>
          <label>Carrera<select name="carrera" ${editable ? "" : "disabled"}>${careers.map((c) => `<option>${c}</option>`).join("")}</select></label>
          <label>Semestre<input name="semestre" type="number" min="1" max="12" value="4" ${editable ? "" : "disabled"} /></label>
          <label>Nivel escolar<select name="nivel" ${editable ? "" : "disabled"}><option>Profesional</option><option>Posgrado</option></select></label>
          <label>Periodo<select name="periodo" ${editable ? "" : "disabled"}><option>AD26</option><option>FJ26</option><option>IN26</option></select></label>
          <label class="full">Dato operativo del área<select name="operacion" ${editable ? "" : "disabled"}>${selected.capture.filter(x => !["Matricula","Matrícula","Genero","Género","Carrera","Semestre","Nivel escolar","Periodo"].includes(x)).map((x) => `<option>${x}</option>`).join("")}</select></label>
          <label class="full">Estatus<select name="estatus" ${editable ? "" : "disabled"}><option>Activo</option><option>Asistio</option><option>No asistio</option><option>Baja</option><option>Acreditado</option></select></label>
          <button class="primary-btn full" type="button" id="saveMock" ${editable ? "" : "disabled"}>Guardar captura</button>
        </form>
      </div>
      <div class="form-panel">
        <h3>Campos por área</h3>
        <table>
          <thead><tr><th>Campo</th><th>Uso</th></tr></thead>
          <tbody>${selected.capture.map((field) => `<tr><td>${field}</td><td>${fieldPurpose(field)}</td></tr>`).join("")}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderPhysicalEvaluationsCapture() {
  return `
    <div class="permission-strip">La captura de profesores se realiza desde un enlace general sin iniciar sesión. El código común controla el acceso y cada persona selecciona su nombre.</div>
    <div class="form-grid">
      <div class="form-panel physical-capture-launcher">
        <p class="eyebrow">Enlace para profesores</p>
        <h3>Formulario de Evaluación Física</h3>
        <p>Incluye las siete pruebas, motivos de no realización, revisión final y guardado directo en Supabase.</p>
        <a class="primary-btn physical-public-link" href="./evaluaciones-fisicas.html" target="_blank" rel="noopener">Abrir formulario público</a>
      </div>
      <div class="form-panel">
        <h3>Flujo aprobado</h3>
        <ol class="physical-flow-list">
          <li>Escribe el código general.</li>
          <li>Selecciona su nombre.</li>
          <li>Captura las siete pruebas.</li>
          <li>Indica lesión, contraindicación u otro motivo cuando corresponda.</li>
          <li>Revisa y guarda.</li>
        </ol>
      </div>
    </div>
  `;
}

function renderConfigurationCapture() {
  return `
    <div class="permission-strip">Estos ajustes son de muestra. En produccion se guardaran en tablas de usuarios, roles y catalogos.</div>
    <div class="form-grid">
      <div class="form-panel">
        <h3>Alta de usuario</h3>
        <form>
          <label>Nombre operativo<input value="Nuevo coordinador" /></label>
          <label>Correo institucional<input value="usuario@tec.mx" /></label>
          <label>Rol<select><option>Coordinador de area</option><option>Direccion</option><option>Compras</option><option>Consulta</option></select></label>
          <label>Area<select>${areas.filter((area) => !["general", "configuracion"].includes(area.id)).map((area) => `<option>${area.name}</option>`).join("")}</select></label>
          <label class="full">Permiso<select><option>Captura y consulta</option><option>Solo lectura</option><option>Administrador</option></select></label>
          <button class="primary-btn full" type="button" onclick="document.dispatchEvent(new CustomEvent('mock-config-save'))">Guardar usuario</button>
        </form>
      </div>
      <div class="form-panel">
        <h3>Catalogo base</h3>
        <form>
          <label>Tipo<select><option>Area</option><option>Periodo</option><option>Carrera</option><option>Disciplina</option><option>Estatus</option></select></label>
          <label>Valor<input value="Nuevo valor" /></label>
          <label class="full">Descripcion<input value="Descripcion operativa" /></label>
          <button class="ghost-btn full" type="button" onclick="document.dispatchEvent(new CustomEvent('mock-config-save'))">Agregar catalogo</button>
        </form>
      </div>
    </div>
  `;
}

function renderCollaboratorsCapture(area) {
  const editable = canEditArea(area.id);
  return `
    <div class="permission-strip">Rol activo: ${currentUser?.name || "Sin sesion"}. ${editable ? "Puedes registrar o actualizar colaboradores." : "Este perfil solo puede consultar esta vista."}</div>
    <div class="form-grid">
      <div class="form-panel">
        <h3>Formulario de colaborador</h3>
        <form>
          <label>Nomina<input value="L03500000" ${editable ? "" : "disabled"} /></label>
          <label>Nombre completo<input value="Nuevo colaborador" ${editable ? "" : "disabled"} /></label>
          <label>Puesto<select ${editable ? "" : "disabled"}><option>Instructor</option><option>Profesor</option><option>Coordinador</option></select></label>
          <label>Coordinador<input value="Pamela" ${editable ? "" : "disabled"} /></label>
          <label>Playera Joma<select ${editable ? "" : "disabled"}><option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option></select></label>
          <label>Talla pants<select ${editable ? "" : "disabled"}><option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option></select></label>
          <label>Correo institucional<input value="colaborador@tec.mx" ${editable ? "" : "disabled"} /></label>
          <label>Genero<select ${editable ? "" : "disabled"}><option>Hombre</option><option>Mujer</option><option>No especificado</option></select></label>
          <label class="full">Contacto de emergencia<input value="Nombre y telefono" ${editable ? "" : "disabled"} /></label>
          <button class="primary-btn full" type="button" ${editable ? "" : "disabled"} onclick="document.dispatchEvent(new CustomEvent('mock-colab-save'))">Guardar colaborador</button>
        </form>
      </div>
      <div class="form-panel">
        <h3>Fuentes disponibles</h3>
        <table>
          <thead><tr><th>Pestaña</th><th>Registros</th></tr></thead>
          <tbody>${Object.entries(uniformesData).map(([sheet, table]) => `<tr><td>${sheet}</td><td>${table.records?.length || 0}</td></tr>`).join("")}</tbody>
        </table>
      </div>
    </div>
  `;
}

function communicationDiffusionImagesForSlot(slotKey) {
  return communicationDiffusionImages
    .filter((row) => row.slot_key === slotKey)
    .sort((a, b) => Number(a.image_index || 1) - Number(b.image_index || 1));
}

function communicationDiffusionImage(slotKey, imageIndex = 1) {
  return communicationDiffusionImages.find((row) => (
    row.slot_key === slotKey && Number(row.image_index || 1) === Number(imageIndex)
  )) || null;
}

function communicationDiffusionUpdatedLabel(value) {
  if (!value) return "Sin imagen cargada";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Imagen vigente";
  return `Actualizada ${date.toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" })}`;
}

function renderCommunicationDiffusionView() {
  const editable = canEditArea("comunicacion") && currentUser?.auth === "supabase";
  const totalCapacity = COMMUNICATION_DIFFUSION_SLOTS.reduce((sum, slot) => sum + Number(slot.maxImages || 1), 0);
  if (!communicationDiffusionAvailable) {
    return `<div class="permission-strip">Imágenes de difusión necesita activar su tabla y almacenamiento en Supabase.</div>`;
  }
  return `
    <section class="communication-diffusion-header">
      <div>
        <p class="eyebrow">Comunicación</p>
        <h3>Imágenes de difusión actuales</h3>
        <p>Consulta, reemplaza y descarga la pieza vigente de cada servicio.</p>
      </div>
      <span class="communication-diffusion-count">${communicationDiffusionImages.length} de ${totalCapacity} imágenes disponibles</span>
    </section>
    ${communicationDiffusionLoading ? `<div class="permission-strip">Cargando imágenes guardadas...</div>` : ""}
    <section class="communication-diffusion-grid" aria-label="Imágenes de difusión actuales">
      ${COMMUNICATION_DIFFUSION_SLOTS.map((slot, index) => {
        const maxImages = Number(slot.maxImages || 1);
        const images = communicationDiffusionImagesForSlot(slot.key);
        const requestedIndex = Number(communicationDiffusionActiveImage[slot.key] || 1);
        const activeIndex = communicationDiffusionImage(slot.key, requestedIndex) ? requestedIndex : Number(images[0]?.image_index || 1);
        const image = communicationDiffusionImage(slot.key, activeIndex);
        const uploading = communicationDiffusionUploadingSlot.startsWith(`${slot.key}:`);
        const imageActions = Array.from({ length: maxImages }, (_, position) => {
          const imageIndex = position + 1;
          const storedImage = communicationDiffusionImage(slot.key, imageIndex);
          const isUploading = communicationDiffusionUploadingSlot === `${slot.key}:${imageIndex}`;
          return `
            <div class="communication-diffusion-image-actions">
              ${maxImages > 1 ? `<strong>Imagen ${imageIndex}</strong>` : ""}
              <label class="primary-btn communication-diffusion-upload ${editable && !uploading ? "" : "disabled"}">
                <i data-lucide="upload"></i>
                <span>${isUploading ? "Guardando..." : storedImage ? "Reemplazar" : "Cargar imagen"}</span>
                <input type="file" accept="image/jpeg,image/png,image/webp" data-communication-diffusion-upload="${slot.key}" data-communication-diffusion-image-index="${imageIndex}" ${editable && !uploading ? "" : "disabled"} hidden>
              </label>
              <button class="ghost-btn" type="button" data-communication-diffusion-download="${slot.key}" data-communication-diffusion-image-index="${imageIndex}" ${storedImage ? "" : "disabled"}>
                <i data-lucide="download"></i>
                <span>Descargar</span>
              </button>
            </div>
          `;
        }).join("");
        return `
          <article class="communication-diffusion-card ${maxImages > 1 ? "supports-carousel" : ""}">
            <div class="communication-diffusion-title">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4>${escapeHtml(slot.title)}</h4>
                <small>${images.length ? `${images.length} de ${maxImages} imágenes cargadas` : "Sin imagen cargada"}</small>
              </div>
            </div>
            <div class="communication-diffusion-preview ${image ? "has-image" : "is-empty"}">
              ${image
                ? `<img src="${escapeHtml(image.public_url)}" alt="Vista previa de ${escapeHtml(slot.title)}, imagen ${activeIndex}" loading="lazy">`
                : `<div><i data-lucide="image"></i><strong>Sin imagen</strong><span>La vista previa aparecerá aquí.</span></div>`}
              ${maxImages > 1 ? `
                <button class="communication-diffusion-carousel-arrow previous" type="button" data-communication-diffusion-carousel="${slot.key}" data-direction="-1" aria-label="Ver imagen anterior" ${images.length < 2 ? "disabled" : ""}><i data-lucide="chevron-left"></i></button>
                <button class="communication-diffusion-carousel-arrow next" type="button" data-communication-diffusion-carousel="${slot.key}" data-direction="1" aria-label="Ver imagen siguiente" ${images.length < 2 ? "disabled" : ""}><i data-lucide="chevron-right"></i></button>
                <div class="communication-diffusion-carousel-dots" aria-label="Posición de imagen">
                  ${Array.from({ length: maxImages }, (_, dotIndex) => `<button type="button" data-communication-diffusion-carousel-index="${slot.key}" data-image-index="${dotIndex + 1}" class="${activeIndex === dotIndex + 1 ? "active" : ""}" aria-label="Ver imagen ${dotIndex + 1}" ${communicationDiffusionImage(slot.key, dotIndex + 1) ? "" : "disabled"}></button>`).join("")}
                </div>
              ` : ""}
            </div>
            <div class="communication-diffusion-actions ${maxImages > 1 ? "is-multiple" : ""}">${imageActions}</div>
          </article>
        `;
      }).join("")}
    </section>
  `;
}

async function uploadCommunicationDiffusionImage(slotKey, imageIndex, file) {
  const slot = COMMUNICATION_DIFFUSION_SLOTS.find((item) => item.key === slotKey);
  if (!slot || !file) return;
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("comunicacion")) {
    toast("Necesitas permiso de Comunicación para cargar imágenes");
    return;
  }
  const supportedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
  if (!supportedTypes.has(file.type) || file.size > 10 * 1024 * 1024) {
    toast("La imagen debe ser JPG, PNG o WEBP y pesar máximo 10 MB");
    return;
  }
  const normalizedImageIndex = Math.max(1, Math.min(Number(slot.maxImages || 1), Number(imageIndex || 1)));
  const previous = communicationDiffusionImage(slotKey, normalizedImageIndex);
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-") || "imagen";
  const storagePath = `${slotKey}/imagen-${normalizedImageIndex}/${crypto.randomUUID()}-${safeName}`;
  communicationDiffusionUploadingSlot = `${slotKey}:${normalizedImageIndex}`;
  render();
  try {
    const { error: uploadError } = await supabaseClient.storage
      .from("communication-diffusion")
      .upload(storagePath, file, { contentType: file.type, upsert: false });
    if (uploadError) throw uploadError;
    const { error: metadataError } = await supabaseClient
      .from("communication_diffusion_images")
      .upsert({
        slot_key: slotKey,
        image_index: normalizedImageIndex,
        title: slot.title,
        storage_path: storagePath,
        file_name: file.name,
        mime_type: file.type,
        file_size: file.size,
        updated_by: currentUser.id,
        updated_at: new Date().toISOString()
      }, { onConflict: "slot_key,image_index" });
    if (metadataError) {
      await supabaseClient.storage.from("communication-diffusion").remove([storagePath]);
      throw metadataError;
    }
    if (previous?.storage_path && previous.storage_path !== storagePath) {
      const { error: removeError } = await supabaseClient.storage
        .from("communication-diffusion")
        .remove([previous.storage_path]);
      if (removeError) console.warn("No se pudo retirar la imagen anterior", removeError);
    }
    await loadCommunicationDiffusionImages();
    communicationDiffusionActiveImage[slotKey] = normalizedImageIndex;
    addAudit("comunicacion", `Imagen ${normalizedImageIndex} de difusión actualizada: ${slot.title}`);
    recordUploadSuccess(`comunicacion.difusion.${slotKey}.${normalizedImageIndex}`);
    toast(`${slot.title}: imagen ${normalizedImageIndex} guardada`);
  } catch (error) {
    console.error(error);
    toast(`No se pudo guardar la imagen: ${supabaseErrorDetail(error) || error.message}`);
  } finally {
    communicationDiffusionUploadingSlot = "";
    render();
  }
}

async function downloadCommunicationDiffusionImage(slotKey, imageIndex = 1) {
  const slot = COMMUNICATION_DIFFUSION_SLOTS.find((item) => item.key === slotKey);
  const image = communicationDiffusionImage(slotKey, imageIndex);
  if (!slot || !image || !supabaseClient) return;
  const { data, error } = await supabaseClient.storage
    .from("communication-diffusion")
    .download(image.storage_path);
  if (error || !data) {
    console.error(error);
    toast("No se pudo descargar la imagen");
    return;
  }
  const url = URL.createObjectURL(data);
  const link = document.createElement("a");
  link.href = url;
  link.download = image.file_name || `${slot.key}.jpg`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  addAudit("comunicacion", `Imagen ${imageIndex} de difusión descargada: ${slot.title}`);
}

function renderSchedules(area) {
  if (area.id !== "clases") {
    return `
      <div class="permission-strip">Horarios pertenece al modulo de Clases Deportivas. Selecciona Clases Deportivas en el menu lateral para ver calendario maestro, disponibilidad y conflictos.</div>
      <div class="blueprint-card">
        <h3>Modulo Horarios</h3>
        <p>Este apartado consolida Programacion Oficial y Booking para visualizar profesores, instalaciones, disponibilidad, conflictos y reportes individuales. No edita archivos fuente.</p>
      </div>
    `;
  }
  const rows = scheduleMasterRows();
  const conflicts = scheduleConflicts();
  return `
    <div class="permission-strip">
      <span>Calendario Maestro: Programacion Oficial + Booking. Vista de solo lectura; cualquier cambio se realiza en el archivo fuente y se vuelve a cargar.</span>
      <span>${rows.length} eventos PMT1  -  ${conflicts.length} conflictos</span>
    </div>
    <section class="schedule-upload-grid">
      ${renderMasterScheduleUploader(rows.length, scheduleState.errors.master)}
      <details class="advanced-schedule-load">
        <summary>Opciones avanzadas de carga</summary>
        <div class="schedule-upload-grid">
          ${renderScheduleUploader("official", "Subir Programacion Oficial", scheduleState.official.length, scheduleState.errors.official)}
          ${renderScheduleUploader("booking", "Subir Booking", scheduleState.booking.length, scheduleState.errors.booking)}
        </div>
      </details>
    </section>
    <section class="schedule-tabs">
      ${["professors", "installations", "availability", "conflicts", "report"].map((mode) => `
        <button class="${scheduleFilters.mode === mode ? "active" : ""}" data-schedule-mode="${mode}">
          ${mode === "professors" ? "Profesores" : mode === "installations" ? "Instalaciones" : mode === "availability" ? "Disponibilidad" : mode === "conflicts" ? "Conflictos" : "Reporte profesor"}
        </button>
      `).join("")}
    </section>
    ${scheduleFilters.mode === "professors" ? renderProfessorScheduleView() : ""}
    ${scheduleFilters.mode === "installations" ? renderInstallationScheduleView() : ""}
    ${scheduleFilters.mode === "availability" ? renderAvailabilityView() : ""}
    ${scheduleFilters.mode === "conflicts" ? renderConflictView() : ""}
    ${scheduleFilters.mode === "report" ? renderProfessorReportView() : ""}
  `;
}

function renderMasterScheduleUploader(count, errors) {
  return `
    <article class="schedule-upload-card master-schedule-card">
      <div>
        <p class="eyebrow">Fuente principal</p>
        <h3>Subir archivo maestro de Indicadores</h3>
        <p>WellSync lee automaticamente las hojas "programacion clases" y "booking ofertados", consolida ambas y actualiza el Calendario Maestro.</p>
      </div>
      <div class="upload-action-row">
        <label class="file-button">
          Subir archivo maestro
          <input type="file" accept=".xlsx,.xls" data-schedule-upload="master" />
        </label>
        <button class="ghost-btn" type="button" data-download-class-template="master">Plantilla archivo maestro</button>
      </div>
      <strong>${count} eventos PMT1 consolidados</strong>
      ${errors?.length ? `
        <details class="schedule-errors" open>
          <summary>${errors.length} errores del archivo maestro</summary>
          ${errors.slice(0, 8).map((error) => `<p>${error.message}</p>`).join("")}
        </details>
      ` : `<span class="schedule-ok">Listo para cargar desde Indicadores</span>`}
    </article>
  `;
}

function renderScheduleUploader(type, title, count, errors) {
  const sourceLabel = type === "official" ? "clases oficiales" : "booking";
  return `
    <article class="schedule-upload-card">
      <div>
        <p class="eyebrow">Respaldo manual  -  ${sourceLabel}</p>
        <h3>${title}</h3>
        <p>Usar solo si el archivo maestro no trae esta hoja o si se quiere actualizar esta fuente manualmente.</p>
      </div>
      <div class="upload-action-row">
        <label class="file-button">
          ${title}
          <input type="file" accept=".xlsx,.xls,.csv" data-schedule-upload="${type}" />
        </label>
        <button class="ghost-btn" type="button" data-download-class-template="${type}">Plantilla ${type === "official" ? "programación oficial" : "Booking"}</button>
      </div>
      <strong>${count} registros validos</strong>
      ${errors?.length ? `
        <details class="schedule-errors" open>
          <summary>${errors.length} errores detectados</summary>
          ${errors.slice(0, 8).map((error) => `<p>Fila ${error.row}: ${error.message}</p>`).join("")}
        </details>
      ` : `<span class="schedule-ok">Sin errores activos</span>`}
    </article>
  `;
}

function renderScheduleFilters(kind = "professors") {
  const professors = scheduleProfessors();
  const disciplines = scheduleDisciplines();
  const installations = scheduleInstallations();
  return `
    <div class="schedule-filter-row">
      ${kind !== "installations" ? `<label>Profesor<select class="schedule-filter" data-filter="professor"><option value="todos">Todos</option>${professors.map((value) => `<option ${scheduleFilters.professor === value ? "selected" : ""}>${value}</option>`).join("")}</select></label>` : ""}
      <label>Dia<select class="schedule-filter" data-filter="day"><option value="todos">Todos</option>${scheduleDays.map((value) => `<option ${scheduleFilters.day === value ? "selected" : ""}>${value}</option>`).join("")}</select></label>
      ${kind !== "installations" ? `<label>Disciplina<select class="schedule-filter" data-filter="discipline"><option value="todos">Todas</option>${disciplines.map((value) => `<option ${scheduleFilters.discipline === value ? "selected" : ""}>${value}</option>`).join("")}</select></label>` : ""}
      <label>Instalacion<select class="schedule-filter" data-filter="installation"><option value="todos">Todas</option>${installations.map((value) => `<option ${scheduleFilters.installation === value ? "selected" : ""}>${value}</option>`).join("")}</select></label>
    </div>
  `;
}

function renderProfessorScheduleView() {
  return `
    <section class="schedule-panel">
      <div class="section-title compact">
        <div><p class="eyebrow">Horarios de profesores</p><h2>Calendario semanal</h2></div>
        <span class="session-pill">Solido = oficial  -  Transparente = booking</span>
      </div>
      ${renderScheduleFilters("professors")}
      ${renderWeeklyCalendar(filteredScheduleRows(), "professor")}
    </section>
  `;
}

function renderInstallationScheduleView() {
  return `
    <section class="schedule-panel">
      <div class="section-title compact">
        <div><p class="eyebrow">Instalaciones</p><h2>Ocupacion por espacio</h2></div>
        <span class="session-pill">Disponibilidad visual por dia</span>
      </div>
      ${renderScheduleFilters("installations")}
      ${renderWeeklyCalendar(filteredScheduleRows(), "installation")}
    </section>
  `;
}

function renderWeeklyCalendar(rows, mode) {
  return `
    <div class="weekly-calendar">
      <div class="calendar-head time-col">Hora</div>
      ${scheduleDays.map((day) => `<div class="calendar-head">${day}</div>`).join("")}
      ${scheduleHours.map((hour) => `
        <div class="calendar-time">${hour}</div>
        ${scheduleDays.map((day) => {
          const hourStart = timeToMinutes(hour);
          const events = rows.filter((row) => row.day === day && timeToMinutes(row.start) < hourStart + 60 && timeToMinutes(row.end) > hourStart);
          return `<div class="calendar-cell">${events.map((row) => renderScheduleBlock(row, mode)).join("")}</div>`;
        }).join("")}
      `).join("")}
    </div>
  `;
}

function renderScheduleBlock(row, mode) {
  const color = professorColor(row.professor);
  const background = row.source === "booking" ? `${color}61` : color;
  const secondary = mode === "installation" ? row.professor : row.installation;
  return `
    <article class="schedule-block" style="--schedule-color:${color}; background:${background}">
      <strong>${row.discipline}</strong>
      <span>${secondary}</span>
      <em>${row.start}-${row.end}</em>
    </article>
  `;
}

function renderAvailabilityView() {
  const day = scheduleFilters.timeDay;
  const minute = timeToMinutes(scheduleFilters.time);
  const rows = scheduleMasterRows().filter((row) => row.day === day && timeToMinutes(row.start) <= minute && timeToMinutes(row.end) > minute);
  const busyProfessors = new Set(rows.map((row) => row.professor));
  const busyInstallations = new Set(rows.map((row) => row.installation));
  const professors = scheduleProfessors();
  const installations = scheduleInstallations();
  return `
    <section class="schedule-panel">
      <div class="section-title compact">
        <div><p class="eyebrow">Disponibilidad</p><h2>Buscar profesor o instalacion libre</h2></div>
      </div>
      <div class="schedule-filter-row">
        <label>Dia<select class="schedule-filter" data-filter="timeDay">${scheduleDays.map((value) => `<option ${day === value ? "selected" : ""}>${value}</option>`).join("")}</select></label>
        <label>Hora<input class="schedule-filter" data-filter="time" type="time" value="${scheduleFilters.time}" /></label>
      </div>
      <div class="availability-grid">
        ${renderAvailabilityCard("Profesores libres", professors.filter((name) => !busyProfessors.has(name)), "ok")}
        ${renderAvailabilityCard("Profesores ocupados", professors.filter((name) => busyProfessors.has(name)), "busy")}
        ${renderAvailabilityCard("Instalaciones libres", installations.filter((name) => !busyInstallations.has(name)), "ok")}
        ${renderAvailabilityCard("Instalaciones ocupadas", installations.filter((name) => busyInstallations.has(name)), "busy")}
      </div>
    </section>
  `;
}

function renderAvailabilityCard(title, items, tone) {
  return `
    <article class="availability-card ${tone}">
      <h3>${title}</h3>
      <strong>${items.length}</strong>
      <div>${items.slice(0, 18).map((item) => `<span>${item}</span>`).join("") || "<em>Sin registros</em>"}</div>
    </article>
  `;
}

function renderConflictView() {
  const conflicts = scheduleConflicts();
  return `
    <section class="schedule-panel">
      <div class="section-title compact">
        <div><p class="eyebrow">Conflictos</p><h2>Traslapes detectados automaticamente</h2></div>
        <span class="session-pill">${conflicts.length} alertas</span>
      </div>
      <div class="conflict-list">
        ${conflicts.length ? conflicts.map((conflict) => `
          <article class="conflict-item">
            <strong>${conflict.type}</strong>
            <span>${conflict.label}</span>
            <p>${conflict.day} ${conflict.a.start}-${conflict.a.end}: ${conflict.a.discipline} / ${conflict.b.discipline}</p>
            <em>${conflict.a.installation}  -  ${conflict.b.installation}</em>
          </article>
        `).join("") : `<div class="empty-state">No se detectan traslapes con los archivos cargados.</div>`}
      </div>
    </section>
  `;
}

function professorOperationalSummary(professor) {
  return rowsForOperationalSummary(scheduleMasterRows(), professor);
}

function renderProfessorReportView() {
  const professors = scheduleProfessors();
  const professor = scheduleFilters.reportProfessor === "todos" ? professors[0] : scheduleFilters.reportProfessor;
  const rows = scheduleMasterRows().filter((row) => row.professor === professor);
  const summary = professorOperationalSummary(professor);
  return `
    <section class="schedule-panel">
      <div class="section-title compact">
        <div><p class="eyebrow">Reporte individual</p><h2>${professor || "Selecciona profesor"}</h2></div>
        <div class="report-actions">
          <button class="ghost-btn schedule-download" data-download="image">Descargar Imagen</button>
          <button class="primary-btn schedule-download" data-download="pdf">Descargar PDF</button>
        </div>
      </div>
      <div class="schedule-filter-row">
        <label>Profesor<select class="schedule-filter" data-filter="reportProfessor">${professors.map((value) => `<option ${professor === value ? "selected" : ""}>${value}</option>`).join("")}</select></label>
      </div>
      <div id="professorScheduleExport" class="professor-export-card">
        <h3>Horario semanal</h3>
        ${renderWeeklyCalendar(rows, "professor")}
      </div>
      <div class="teacher-summary admin-summary">
        <div><strong>${summary.officialHours.toFixed(1)}</strong><span>Horas oficiales</span></div>
        <div><strong>${summary.bookingHours.toFixed(1)}</strong><span>Horas booking</span></div>
        <div><strong>${summary.totalHours.toFixed(1)}</strong><span>Horas totales</span></div>
        <div><strong>${summary.deadTime.toFixed(1)}</strong><span>Tiempo muerto</span></div>
        <div><strong>${summary.campusHours.toFixed(1)}</strong><span>Tiempo en campus</span></div>
        <div><strong>${summary.efficiency}%</strong><span>Eficiencia operativa</span></div>
      </div>
    </section>
  `;
}

function renderScheduleSimulatorView() {
  if (activeArea !== "clases") return `<div class="permission-strip">El Simulador pertenece a Clases Deportivas.</div>`;
  const rows = classScheduleSimulatorRows;
  return `
    <section class="schedule-panel class-simulator-panel">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">Simulador visual</p>
          <h2>Spinning y Fitness</h2>
        </div>
        <span class="session-pill">${rows.length} clases planeadas  -  ${classScheduleSimulatorCloudReady ? "Supabase activo" : "respaldo local"}</span>
      </div>
      <div class="permission-strip class-simulator-note">
        Este simulador es solo para planeacion visual. No modifica Calificaciones, alumnos, reportes ni la oferta oficial.
      </div>
      ${classSimulatorTeacherConflictMessage ? `
        <div class="class-simulator-conflict-alert" role="alert">
          <strong>Empalme de profesor</strong>
          <span>${escapeHtml(classSimulatorTeacherConflictMessage)}</span>
        </div>
      ` : ""}
      ${renderClassSimulatorForm()}
      <div class="class-simulator-maps">
        ${classSimulatorAreas.map((area) => renderClassSimulatorMap(area)).join("")}
      </div>
    </section>
  `;
}

function renderClassSimulatorForm() {
  const teachers = classSimulatorTeachers();
  return `
    <form id="classSimulatorForm" class="class-simulator-form">
      <label>Profesor
        <select name="teacher_id" required>
          <option value="">Selecciona profesor</option>
          ${teachers.map((teacher) => `<option value="${escapeHtml(teacher.id)}">${escapeHtml(teacher.name)}</option>`).join("")}
        </select>
      </label>
      <label>Disciplina
        <input name="discipline" placeholder="Pilates, Cycling, Funcional" />
      </label>
      <label>Area / instalacion
        <select name="area">
          ${classSimulatorAreas.map((area) => `<option>${area}</option>`).join("")}
        </select>
      </label>
      <label>Hora inicio
        <select name="start_time">${classSimulatorTimes.slice(0, -1).map((time) => `<option value="${time}">${classSimulatorTimeLabel(time)}</option>`).join("")}</select>
      </label>
      <label>Hora fin
        <select name="end_time">${classSimulatorTimes.slice(1).map((time) => `<option value="${time}">${classSimulatorTimeLabel(time)}</option>`).join("")}</select>
      </label>
      <label>Frecuencia
        <details class="class-simulator-day-menu">
          <summary>Selecciona dias</summary>
          <div class="class-simulator-day-options">
            ${classSimulatorDays.map((day) => `
              <label><input type="checkbox" name="days" value="${day}" />${day}</label>
            `).join("")}
          </div>
        </details>
      </label>
      <button class="primary-btn" type="submit">Registrar clase</button>
    </form>
  `;
}

function renderClassSimulatorMap(area) {
  const rows = classSimulatorRowsByArea(area);
  const slotTimes = classSimulatorTimes.slice(0, -1);
  const gridCells = slotTimes.map((time, rowIndex) => `
    <div class="class-simulator-time" style="grid-column:1;grid-row:${rowIndex + 2}">${classSimulatorTimeLabel(time)}</div>
    ${classSimulatorDays.map((day, dayIndex) => `
      <div class="class-simulator-cell" style="grid-column:${dayIndex + 2};grid-row:${rowIndex + 2}" aria-label="${escapeHtml(`${area} ${day} ${time}`)}"></div>
    `).join("")}
  `).join("");
  const gridEvents = rows.map((row) => {
    const dayIndex = classSimulatorDays.indexOf(row.day);
    const startIndex = slotTimes.indexOf(row.start_time);
    if (dayIndex < 0 || startIndex < 0) return "";
    return `
      <div class="class-simulator-event" style="grid-column:${dayIndex + 2};grid-row:${startIndex + 2} / span ${classSimulatorDurationRows(row)}">
        ${renderClassSimulatorBlock(row)}
      </div>
    `;
  }).join("");
  return `
    <article class="class-simulator-map-card">
      <div class="class-simulator-map-heading">
        <div>
          <p class="eyebrow">Mapa de horario</p>
          <h3>${area}</h3>
        </div>
        <span>${rows.length} bloques</span>
      </div>
      <div class="class-simulator-grid">
        <div class="class-simulator-head time-col" style="grid-column:1;grid-row:1">Hora</div>
        ${classSimulatorDays.map((day, dayIndex) => `<div class="class-simulator-head" style="grid-column:${dayIndex + 2};grid-row:1">${day}</div>`).join("")}
        ${gridCells}
        ${gridEvents}
      </div>
    </article>
  `;
}

function renderClassSimulatorBlock(row) {
  const tone = row.area === "Spinning" ? "spinning" : "fitness";
  const teacherConflict = classSimulatorTeacherConflictIds.has(row.id);
  return `
    <div class="class-simulator-class ${tone} ${teacherConflict ? "teacher-conflict" : ""}" data-class-simulator-id="${escapeHtml(row.id)}">
      ${teacherConflict ? `<span class="class-simulator-conflict-badge" title="Empalme de profesor">Alerta Empalme de profesor</span>` : ""}
      <strong>${escapeHtml(row.discipline)}</strong>
      ${row.teacher_name ? `<span>${escapeHtml(row.teacher_name)}</span>` : ""}
      <em>${classSimulatorTimeLabel(row.start_time)} - ${classSimulatorTimeLabel(row.end_time)}</em>
      <div class="class-simulator-class-actions">
        <button type="button" data-delete-class-simulator="${row.id}">Eliminar</button>
      </div>
    </div>
  `;
}

function renderClassScheduleComparison() {
  const comparison = classScheduleComparisonSummary();
  const changed = comparison.added.length + comparison.removed.length;
  return `
    <section class="class-schedule-comparison">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">Comparador de cargas</p>
          <h2>Cambios contra la ultima carga guardada</h2>
        </div>
        <span class="session-pill">${comparison.hasSnapshot ? `${changed} cambios` : "sin snapshot"}</span>
      </div>
      ${comparison.hasSnapshot ? `
        <div class="class-comparison-kpis">
          <div><strong>${comparison.previousCount}</strong><span>Carga anterior</span></div>
          <div><strong>${comparison.currentCount}</strong><span>Carga actual</span></div>
          <div><strong>${comparison.added.length}</strong><span>Nuevos</span></div>
          <div><strong>${comparison.removed.length}</strong><span>Retirados</span></div>
          <div><strong>${comparison.unchanged}</strong><span>Sin cambio</span></div>
        </div>
        <div class="class-comparison-grid">
          ${renderScheduleChangeList("Nuevos registros", comparison.added)}
          ${renderScheduleChangeList("Registros retirados", comparison.removed)}
        </div>
      ` : `<div class="empty-state">Sube o conserva una carga de horarios para empezar a comparar cambios operativos.</div>`}
    </section>
  `;
}

function renderScheduleChangeList(title, rows) {
  return `
    <article>
      <h3>${title}</h3>
      ${rows.length ? rows.slice(0, 8).map((row) => `
        <div class="class-change-row">
          <strong>${escapeHtml(row.discipline || "Sin disciplina")}</strong>
          <span>${escapeHtml(row.professor || "Sin profesor")}  -  ${escapeHtml(row.day || "")} ${escapeHtml(row.start || "")}-${escapeHtml(row.end || "")}</span>
          <em>${escapeHtml(row.installation || "Sin instalacion")}</em>
        </div>
      `).join("") : `<div class="empty-state">Sin cambios en esta categoria.</div>`}
    </article>
  `;
}

function cleanBookingActivity(value) {
  return String(value || "Sin actividad").replace(/^booking\s+/i, "").trim() || "Sin actividad";
}

function bookingDateParts(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return { date: "", day: "Sin fecha", hour: "Sin hora", month: "Sin mes" };
  return {
    date: date.toLocaleDateString("es-MX", { day: "2-digit", month: "2-digit", year: "numeric" }),
    day: date.toLocaleDateString("es-MX", { weekday: "long" }).replace(/^\w/, (char) => char.toUpperCase()),
    hour: date.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" }),
    month: date.toLocaleDateString("es-MX", { month: "short", year: "numeric" })
  };
}

function normalizeBookingReservation(row, index) {
  const activity = cleanBookingActivity(pickColumn(row, ["espacio", "Espacio", "actividad", "Actividad"]));
  const status = String(pickColumn(row, ["status", "Estatus", "estatus"]) || "Sin estatus").trim();
  const type = String(pickColumn(row, ["type", "Tipo", "tipo"]) || "Sin tipo").trim();
  const reservationDate = String(pickColumn(row, ["reservation_date", "Fecha", "fecha", "date"]) || "").trim();
  const parts = bookingDateParts(reservationDate);
  return {
    id: String(pickColumn(row, ["id", "ID"]) || `booking-${index + 1}`).trim(),
    reservationDate,
    status,
    type,
    student: String(pickColumn(row, ["alumno", "Alumno", "matricula", "Matrícula", "Matricula"]) || "").trim().toUpperCase(),
    activity,
    rawSpace: String(pickColumn(row, ["espacio", "Espacio"]) || "").trim(),
    dateLabel: parts.date,
    day: parts.day,
    hour: parts.hour,
    month: parts.month
  };
}

async function importClassBookingReservations(file) {
  const rows = await rowsFromScheduleFile(file);
  const parsed = rows.map(normalizeBookingReservation).filter((row) => row.student || row.activity || row.reservationDate);
  classBookingReservations = parsed;
  saveClassBookingReservations();
  const savedCloud = await saveClassBookingReservationsCloud(parsed, file.name);
  if (savedCloud) await loadClassBookingReservationsCloud();
  addAudit("booking", `${file.name}: ${parsed.length} reservaciones importadas`);
  recordUploadSuccess("clases.booking");
  render();
  toast(savedCloud ? `${parsed.length} reservaciones guardadas en Supabase` : `${parsed.length} reservaciones de Booking cargadas localmente`);
}

function bookingRowsFiltered() {
  const term = normalizeText(classBookingFilters.search);
  return classBookingReservations.filter((row) => {
    const statusMatch = classBookingFilters.status === "todos" || row.status === classBookingFilters.status;
    const typeMatch = classBookingFilters.type === "todos" || row.type === classBookingFilters.type;
    const activityMatch = classBookingFilters.activity === "todos" || row.activity === classBookingFilters.activity;
    const textMatch = !term || [row.student, row.activity, row.status, row.type, row.day, row.hour].some((value) => normalizeText(value).includes(term));
    return statusMatch && typeMatch && activityMatch && textMatch;
  });
}

function groupBookingRows(rows, field) {
  const counts = new Map();
  rows.forEach((row) => {
    const key = row[field] || "Sin dato";
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return Array.from(counts.entries())
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

function bookingStatusLabel(value) {
  const clean = String(value || "").toUpperCase();
  if (clean === "APPROVED") return "Aprobadas";
  if (clean === "PENDING") return "Pendientes";
  if (clean === "CANCELLED") return "Canceladas";
  return value || "Sin estatus";
}

function bookingTypeLabel(value) {
  const clean = String(value || "").toUpperCase();
  if (clean === "ONLINE") return "Online";
  if (clean === "PRESENTIAL") return "Presencial";
  return value || "Sin tipo";
}

function inferBookingProfessor(activity) {
  const cleanActivity = normalizeText(activity);
  const match = scheduleMasterRows().find((row) => normalizeText(row.discipline).includes(cleanActivity) || cleanActivity.includes(normalizeText(row.discipline).replace(/pmt\d/g, "").trim()));
  return match?.professor || "Sin profesor asignado";
}

function bookingEmptyState() {
  return `<div class="empty-state">Carga el CSV de reservaciones para ver este análisis.</div>`;
}

function bookingPercent(value, total) {
  return total > 0 ? Math.round((Number(value || 0) / total) * 100) : 0;
}

function bookingVisualHeader(eyebrow, title, icon) {
  return `
    <header class="booking-visual-header">
      <span class="booking-visual-icon" aria-hidden="true"><i data-lucide="${icon}"></i></span>
      <div><p>${eyebrow}</p><h3>${title}</h3></div>
    </header>
  `;
}

const BOOKING_DAY_ORDER = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function renderBookingActivityBars(rows) {
  const visible = rows.slice(0, 7);
  const max = Math.max(...visible.map((row) => row.count), 1);
  return `
    <article class="booking-card booking-visual-card booking-visual-bars">
      ${bookingVisualHeader("Demanda por servicio", "Actividades con más Booking", "chart-no-axes-column-increasing")}
      ${visible.length ? `<div class="booking-activity-bars">
        ${visible.map((row, index) => {
          const width = Math.max(5, Math.round((row.count / max) * 100));
          return `<div class="booking-activity-row" title="${escapeHtml(row.label)}: ${row.count.toLocaleString("es-MX")} reservaciones">
            <span class="booking-rank-badge">${index + 1}</span>
            <div class="booking-activity-copy"><strong>${escapeHtml(row.label)}</strong><small>${row.count.toLocaleString("es-MX")} reservaciones</small>
              <em><i style="--booking-width:${width}%"></i></em>
            </div>
          </div>`;
        }).join("")}
      </div>` : bookingEmptyState()}
    </article>
  `;
}

function renderBookingStudentLeaderboard(rows) {
  const visible = rows.slice(0, 7);
  return `
    <article class="booking-card booking-visual-card booking-visual-leaderboard">
      ${bookingVisualHeader("Frecuencia individual", "Alumnos que más lo usan", "users-round")}
      ${visible.length ? `<ol class="booking-leaderboard-list">
        ${visible.map((row, index) => `
          <li>
            <span class="booking-leaderboard-position">${index + 1}</span>
            <span class="booking-student-avatar" aria-hidden="true">${escapeHtml(String(row.label || "A").slice(-2).toUpperCase())}</span>
            <strong title="${escapeHtml(row.label)}">${escapeHtml(row.label)}</strong>
            <span>${row.count.toLocaleString("es-MX")} <small>reservaciones</small></span>
          </li>
        `).join("")}
      </ol>` : bookingEmptyState()}
    </article>
  `;
}

function bookingDayRow(rows, label) {
  const target = normalizeText(label);
  return rows.find((row) => normalizeText(row.label) === target) || { label, count: 0 };
}

function renderBookingDayColumns(rows) {
  const ordered = BOOKING_DAY_ORDER.map((day) => bookingDayRow(rows, day));
  const max = Math.max(...ordered.map((row) => row.count), 1);
  return `
    <article class="booking-card booking-visual-card booking-visual-columns">
      ${bookingVisualHeader("Comportamiento semanal", "Días con mayor demanda", "calendar-days")}
      ${rows.length ? `<div class="booking-weekday-chart" aria-label="Reservaciones por día de la semana">
        ${ordered.map((row) => {
          const height = row.count ? Math.max(8, Math.round((row.count / max) * 100)) : 2;
          const peak = row.count === max && row.count > 0 ? " peak" : "";
          return `<div class="booking-weekday-column${peak}" aria-label="${escapeHtml(row.label)}: ${row.count.toLocaleString("es-MX")} reservaciones">
            <strong>${row.count.toLocaleString("es-MX")}</strong>
            <span><i style="--booking-height:${height}%"></i></span>
            <small>${escapeHtml(row.label.slice(0, 3))}</small>
          </div>`;
        }).join("")}
      </div>` : bookingEmptyState()}
    </article>
  `;
}

function renderBookingHourHeatmap(rows) {
  const visible = rows.slice(0, 8);
  const max = Math.max(...visible.map((row) => row.count), 1);
  return `
    <article class="booking-card booking-visual-card booking-visual-heatmap">
      ${bookingVisualHeader("Concentración horaria", "Horarios más usados", "clock-3")}
      ${visible.length ? `<div class="booking-heatmap-grid">
        ${visible.map((row) => {
          const intensity = Math.max(.12, row.count / max);
          return `<div class="booking-visual-heat-cell" style="--booking-intensity:${intensity.toFixed(2)}" aria-label="${escapeHtml(row.label)}: ${row.count.toLocaleString("es-MX")} reservaciones">
            <strong>${escapeHtml(row.label)}</strong><span>${row.count.toLocaleString("es-MX")}</span><small>reservaciones</small>
          </div>`;
        }).join("")}
      </div>` : bookingEmptyState()}
    </article>
  `;
}

function bookingStatusTone(value) {
  const clean = String(value || "").toUpperCase();
  if (clean === "APPROVED") return "teal";
  if (clean === "PENDING") return "gold";
  if (clean === "CANCELLED") return "red";
  return "blue";
}

function renderBookingStatusDonut(rows, total) {
  const visible = rows.filter((row) => row.count > 0);
  let start = 0;
  const segments = visible.map((row) => {
    const end = start + bookingPercent(row.count, total) * 3.6;
    const segment = `var(--${bookingStatusTone(row.label)}) ${start.toFixed(1)}deg ${end.toFixed(1)}deg`;
    start = end;
    return segment;
  }).join(", ");
  return `
    <article class="booking-card booking-visual-card booking-visual-donut">
      ${bookingVisualHeader("Estado de reservaciones", "Estatus", "circle-check-big")}
      ${visible.length ? `<div class="booking-donut-layout">
        <div class="booking-visual-donut-chart" style="--booking-donut:${segments}" role="img" aria-label="Distribución de ${total.toLocaleString("es-MX")} reservaciones por estatus">
          <strong>${total.toLocaleString("es-MX")}</strong><span>reservaciones</span>
        </div>
        <div class="booking-donut-legend">
          ${visible.map((row) => `<div><i class="${bookingStatusTone(row.label)}"></i><span>${escapeHtml(bookingStatusLabel(row.label))}</span><strong>${row.count.toLocaleString("es-MX")}</strong><em>${bookingPercent(row.count, total)}%</em></div>`).join("")}
        </div>
      </div>` : bookingEmptyState()}
    </article>
  `;
}

function renderBookingTypeStack(rows, total) {
  const visible = rows.filter((row) => row.count > 0);
  const online = visible.find((row) => String(row.label).toUpperCase() === "ONLINE")?.count || 0;
  const presential = visible.find((row) => String(row.label).toUpperCase() === "PRESENTIAL")?.count || 0;
  return `
    <article class="booking-card booking-visual-card booking-visual-stack">
      ${bookingVisualHeader("Formato de servicio", "Modalidad", "panels-top-left")}
      ${visible.length ? `<div class="booking-stack-layout">
        <div class="booking-stack-summary"><strong>${total.toLocaleString("es-MX")}</strong><span>reservaciones filtradas</span></div>
        <div class="booking-stacked-bar" aria-label="${online.toLocaleString("es-MX")} online y ${presential.toLocaleString("es-MX")} presenciales">
          ${visible.map((row, index) => `<i class="tone-${index + 1}" style="--booking-share:${bookingPercent(row.count, total)}%" title="${escapeHtml(bookingTypeLabel(row.label))}: ${row.count.toLocaleString("es-MX")}"></i>`).join("")}
        </div>
        <div class="booking-stack-legend">
          ${visible.map((row, index) => `<div><i class="tone-${index + 1}"></i><span>${escapeHtml(bookingTypeLabel(row.label))}</span><strong>${row.count.toLocaleString("es-MX")}</strong><em>${bookingPercent(row.count, total)}%</em></div>`).join("")}
        </div>
      </div>` : bookingEmptyState()}
    </article>
  `;
}

function renderClassBookingDashboard() {
  if (activeArea !== "clases") {
    return `<div class="permission-strip">Booking pertenece al módulo de Clases Deportivas. Selecciona Clases Deportivas para cargar y analizar reservaciones.</div>`;
  }
  const rows = bookingRowsFiltered();
  const allRows = classBookingReservations;
  const uniqueStudents = new Set(rows.map((row) => row.student).filter(Boolean)).size;
  const activities = groupBookingRows(rows, "activity");
  const students = groupBookingRows(rows, "student");
  const days = groupBookingRows(rows, "day");
  const hours = groupBookingRows(rows, "hour");
  const statuses = groupBookingRows(rows, "status");
  const types = groupBookingRows(rows, "type");
  const activityOptions = groupBookingRows(allRows, "activity").map((row) => row.label);
  const statusOptions = groupBookingRows(allRows, "status").map((row) => row.label);
  const typeOptions = groupBookingRows(allRows, "type").map((row) => row.label);
  const topActivity = activities[0]?.label || "Sin datos";
  const topStudent = students[0]?.label || "Sin datos";
  const topProfessor = topActivity === "Sin datos" ? "Sin datos" : inferBookingProfessor(topActivity);
  return `
    <section class="booking-module">
      <div class="permission-strip booking-upload-strip">
        <div>
          <strong>Listas de alumnos de Booking</strong>
          <span>Plantilla esperada: id, reservation_date, status, type, alumno, espacio.</span>
        </div>
        <label class="file-button">
          Cargar reservaciones CSV
          <input type="file" accept=".csv,.xlsx,.xls" id="classBookingReservationsFile" />
        </label>
      </div>
      <div class="booking-kpi-grid">
        <article><span>Reservaciones</span><strong>${rows.length.toLocaleString("es-MX")}</strong><em>${allRows.length.toLocaleString("es-MX")} cargadas</em></article>
        <article><span>Alumnos únicos</span><strong>${uniqueStudents.toLocaleString("es-MX")}</strong><em>por matrícula</em></article>
        <article><span>Actividad líder</span><strong>${escapeHtml(topActivity)}</strong><em>${activities[0]?.count?.toLocaleString("es-MX") || 0} usos</em></article>
        <article><span>Profesor probable</span><strong>${escapeHtml(topProfessor)}</strong><em>cruce con Horarios</em></article>
      </div>
      <div class="booking-filter-row">
        <label>Estatus<select class="booking-filter" data-filter="status"><option value="todos">Todos</option>${statusOptions.map((value) => `<option value="${escapeHtml(value)}" ${classBookingFilters.status === value ? "selected" : ""}>${escapeHtml(bookingStatusLabel(value))}</option>`).join("")}</select></label>
        <label>Tipo<select class="booking-filter" data-filter="type"><option value="todos">Todos</option>${typeOptions.map((value) => `<option value="${escapeHtml(value)}" ${classBookingFilters.type === value ? "selected" : ""}>${escapeHtml(bookingTypeLabel(value))}</option>`).join("")}</select></label>
        <label>Actividad<select class="booking-filter" data-filter="activity"><option value="todos">Todas</option>${activityOptions.map((value) => `<option value="${escapeHtml(value)}" ${classBookingFilters.activity === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}</select></label>
        <label>Buscar<input class="booking-filter" data-filter="search" value="${escapeHtml(classBookingFilters.search)}" placeholder="Matrícula, actividad, hora..." /></label>
      </div>
      <div class="booking-visual-layout">
        <div class="booking-visual-row booking-visual-row-top">
          ${renderBookingActivityBars(activities)}
          ${renderBookingStudentLeaderboard(students)}
          ${renderBookingStatusDonut(statuses, rows.length)}
        </div>
        <div class="booking-visual-row booking-visual-row-bottom">
          ${renderBookingDayColumns(days)}
          ${renderBookingTypeStack(types, rows.length)}
          ${renderBookingHourHeatmap(hours)}
        </div>
      </div>
      <section class="booking-table-panel">
        <div class="class-grade-table-header">
          <div>
            <p class="eyebrow">Detalle operativo</p>
            <h3>Reservaciones filtradas</h3>
          </div>
          <span>${rows.length.toLocaleString("es-MX")} registros</span>
        </div>
        <div class="class-grade-table-wrap booking-table-wrap">
          <table class="class-grade-table">
            <thead><tr><th>ID</th><th>Fecha</th><th>Alumno</th><th>Actividad</th><th>Estatus</th><th>Tipo</th></tr></thead>
            <tbody>
              ${rows.slice(0, 80).map((row) => `
                <tr>
                  <td>${escapeHtml(row.id)}</td>
                  <td><strong>${escapeHtml(row.dateLabel || "Sin fecha")}</strong><small>${escapeHtml(`${row.day} ${row.hour}`)}</small></td>
                  <td>${escapeHtml(row.student || "Sin alumno")}</td>
                  <td><strong>${escapeHtml(row.activity)}</strong><small>${escapeHtml(inferBookingProfessor(row.activity))}</small></td>
                  <td><span class="class-grade-pill ${normalizeText(row.status)}">${escapeHtml(bookingStatusLabel(row.status))}</span></td>
                  <td>${escapeHtml(bookingTypeLabel(row.type))}</td>
                </tr>
              `).join("") || `<tr><td colspan="6">Carga el archivo de reservaciones para comenzar.</td></tr>`}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  `;
}

function bindClassBookingControls() {
  $("#classBookingReservationsFile")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await importClassBookingReservations(file);
    event.target.value = "";
  });
  $$(".booking-filter").forEach((input) => input.addEventListener("input", (event) => {
    classBookingFilters[event.target.dataset.filter] = event.target.value;
    render();
  }));
}



function renderReports(area) {
  const selected = area.id === "general" ? areas[0] : area;
  return `
    <div class="permission-strip">Descargas propuestas con datos agregados. Las listas nominales se sustituyen por matricula y filtros academicos permitidos.</div>
    <div class="reports-list">
      ${selected.reports.map((report) => `
        <div class="report-row">
          <div><strong>${report}</strong><br><span>PDF para lectura y Excel para auditoria operativa.</span></div>
          <button class="ghost-btn report-download" data-report="${report}">Descargar</button>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSystemMap() {
  const systemMap = $("#systemMap");
  if (!systemMap) return;
  const nodes = [
    ["Base de datos", "PostgreSQL en Supabase. Tablas: alumnos_minimos, participaciones, eventos, clases, torneos, accesos, compras, presupuesto, auditoria."],
    ["Autenticacion", "Login por coordinador. Direccion ve todo; coordinadores solo capturan y consultan su area."],
    ["Automatizacion", "Indicadores calculados al guardar capturas: unicos, registros, retencion, ocupacion, acreditacion y presupuesto."],
    ["Exportacion", "PDF ejecutivo, Excel por area, reportes programados y bitacora de cambios."],
    ["Privacidad", "Sin nombres, correos, telefonos ni historial clinico. La matricula es el identificador operativo."]
  ];
  systemMap.innerHTML = nodes.map(([title, text]) => `<div class="map-node"><strong>${title}</strong><span>${text}</span></div>`).join("") + `
    <div class="map-node">
      <strong>Documentos del proyecto</strong>
      <a href="./propuesta-sistema.md" target="_blank">Abrir propuesta funcional</a>
      <a href="./database-schema.sql" target="_blank">Abrir esquema de base de datos</a>
      <a href="./guia-visual.md" target="_blank">Abrir guia visual</a>
    </div>
  `;
}

function labelArea(id) {
  return areas.find((a) => a.id === id)?.name || id;
}

function fieldPurpose(field) {
  const map = {
    Matricula: "Identificador base",
    "Matrícula": "Identificador base",
    Genero: "Segmentación agregada",
    "Género": "Segmentación agregada",
    Carrera: "Análisis académico",
    Semestre: "Análisis por avance",
    "Nivel escolar": "Profesional o posgrado",
    Periodo: "Corte institucional",
    Disciplina: "Oferta deportiva",
    Torneo: "Control competitivo",
    Evento: "Vivencia y activaciones",
    Monto: "Presupuesto"
  };
  return map[field] || "Operación del módulo";
}

function toast(text) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = text;
  document.body.appendChild(node);
  requestAnimationFrame(() => node.classList.add("show"));
  setTimeout(() => {
    node.classList.remove("show");
    setTimeout(() => node.remove(), 250);
  }, 2400);
}

function render() {
  applyTheme();
  renderLogin();
  syncRoleSelector();
  if (!currentUser) return;
  const themeSelect = $("#themeSelect");
  if (themeSelect) themeSelect.hidden = !isLeadership();
  renderNav();
  const area = areas.find((a) => a.id === activeArea) || areas.find((a) => a.id === "general");
  if (area && activeArea !== area.id) activeArea = area.id;
  renderExecutiveKpis();
  renderSystemMap();
  $("#currentTitle").textContent = area.name;
  const evaluationsTab = $("#evaluationsViewButton");
  const gradesTab = $("#gradesViewButton");
  const bookingTab = $("#bookingViewButton");
  const simulatorTab = $("#simulatorViewButton");
  const gymAttendanceTab = $("#gymAttendanceViewButton");
  const gymRegistrationsTab = $("#gymRegistrationsViewButton");
  const vivenciaEventsTab = $("#vivenciaEventsViewButton");
  const semanaTecGradesTab = $("#semanaTecGradesViewButton");
  const semanaTecUploadTab = $("#semanaTecUploadViewButton");
  const representativosUploadTab = $("#representativosUploadViewButton");
  const communicationDiffusionTab = $("#communicationDiffusionViewButton");
  const budgetAllocationTab = $("#budgetAllocationViewButton");
  const budgetRequestTab = $("#budgetRequestViewButton");
  const collaboratorInfographicTab = $("#collaboratorInfographicViewButton");
  const schedulesTab = $(`.segmented button[data-view="schedules"]`);
  const systemTab = $(`.segmented button[data-view="blueprint"]`);
  const reportsTab = $(`.segmented button[data-view="reports"]`);
  const isGym = activeArea === "gimnasio";
  const isVivencia = activeArea === "vivencia";
  const isSemanaTec = activeArea === "semana-tec";
  const isRepresentativos = activeArea === "representativos";
  const isCommunication = activeArea === "comunicacion";
  const isBudget = activeArea === "compras";
  const isIntramuros = activeArea === "intramuros";
  const isGeneral = activeArea === "general";
  const isCollaborators = activeArea === "colaboradores";
  const isPresentation = activeArea === "presentacion";
  $$(".segmented button").forEach((button) => { button.style.order = ""; });
  if (evaluationsTab) evaluationsTab.hidden = activeArea !== "colaboradores";
  if (collaboratorInfographicTab) collaboratorInfographicTab.hidden = !isCollaborators;
  if (gradesTab) gradesTab.hidden = activeArea !== "clases";
  if (bookingTab) bookingTab.hidden = activeArea !== "clases";
  if (simulatorTab) simulatorTab.hidden = activeArea !== "clases";
  if (gymAttendanceTab) gymAttendanceTab.hidden = !isGym;
  if (gymRegistrationsTab) gymRegistrationsTab.hidden = !isGym;
  if (vivenciaEventsTab) vivenciaEventsTab.hidden = !isVivencia && !isCommunication;
  if (semanaTecGradesTab) semanaTecGradesTab.hidden = !isSemanaTec;
  if (semanaTecUploadTab) semanaTecUploadTab.hidden = !isSemanaTec;
  if (representativosUploadTab) representativosUploadTab.hidden = !isRepresentativos;
  if (communicationDiffusionTab) communicationDiffusionTab.hidden = !isCommunication;
  if (budgetAllocationTab) budgetAllocationTab.hidden = !isBudget;
  if (budgetRequestTab) budgetRequestTab.hidden = !isBudget;
  if (schedulesTab) {
    schedulesTab.hidden = isGym || isBudget || isCollaborators || isSemanaTec || isCommunication || isRepresentativos;
    schedulesTab.textContent = isGeneral ? "Calendario" : isIntramuros ? "Cargar Registro de Participantes" : "Horarios";
    if (isGeneral) schedulesTab.style.order = "2";
  }
  if (reportsTab) reportsTab.hidden = isGym || isSemanaTec || isRepresentativos;
  if (systemTab) {
    systemTab.hidden = isGym || isSemanaTec || isRepresentativos || (!isIntramuros && !isLeadership() && !(activeArea === "clases" && canEditArea("clases")));
    systemTab.textContent = isIntramuros ? "Cargar Roles de Juego" : "Sistema";
  }
  if (isCollaborators) {
    if (collaboratorInfographicTab) collaboratorInfographicTab.style.order = "12";
    if (evaluationsTab) evaluationsTab.style.order = "13";
    if (systemTab) systemTab.style.order = "20";
    if (reportsTab) reportsTab.style.order = "30";
  }
  const filtersBand = $(".filters-band");
  if (filtersBand) filtersBand.hidden = !isGeneral;
  const segmentedNav = $(".segmented");
  if (segmentedNav) segmentedNav.hidden = isPresentation;
  if (isSemanaTec && !["dashboard", "semana-tec-grades", "semana-tec-upload"].includes(activeView)) activeView = "dashboard";
  if (!isSemanaTec && ["semana-tec-grades", "semana-tec-upload"].includes(activeView)) activeView = "dashboard";
  if (isRepresentativos && !["dashboard", "representativos-upload"].includes(activeView)) activeView = "dashboard";
  if (!isRepresentativos && activeView === "representativos-upload") activeView = "dashboard";
  if (isGym && !["dashboard", "gym-attendance", "gym-registrations"].includes(activeView)) activeView = "dashboard";
  if (!isGym && ["gym-attendance", "gym-registrations"].includes(activeView)) activeView = "dashboard";
  if (!isVivencia && !isCommunication && activeView === "vivencia-events") activeView = "dashboard";
  if (activeView === "communication-diffusion" && !isCommunication) activeView = "dashboard";
  if (!isBudget && ["budget-allocation", "budget-request"].includes(activeView)) activeView = "dashboard";
  if (activeView === "collaborator-infographic" && !isCollaborators) activeView = "dashboard";
  if (activeView === "blueprint" && !isIntramuros && !isLeadership() && !(activeArea === "clases" && canEditArea("clases"))) activeView = "dashboard";
  if (activeView === "evaluations" && activeArea !== "colaboradores") activeView = "dashboard";
  if (activeView === "grades" && activeArea !== "clases") activeView = "dashboard";
  if (activeView === "booking" && activeArea !== "clases") activeView = "dashboard";
  if (activeView === "simulator" && activeArea !== "clases") activeView = "dashboard";
  $$(".segmented button").forEach((b) => b.classList.toggle("active", b.dataset.view === activeView));
  let contentHtml = "";
  try {
    if (activeView === "dashboard") contentHtml = renderDashboard(area);
    else if (activeView === "capture") contentHtml = renderCapture(area);
    else if (activeView === "gym-attendance") contentHtml = renderGymAttendanceRegistration();
    else if (activeView === "gym-registrations") contentHtml = renderGymStudentRegistration();
    else if (activeView === "vivencia-events") contentHtml = isCommunication ? renderCommunicationEventsView() : renderVivenciaEventsView();
    else if (activeView === "communication-diffusion") contentHtml = renderCommunicationDiffusionView();
    else if (activeView === "budget-allocation") contentHtml = renderBudgetAllocationView();
    else if (activeView === "budget-request") contentHtml = renderBudgetRequestView();
    else if (activeView === "schedules") contentHtml = isGeneral ? renderExecutiveCalendarView() : isIntramuros ? renderIntramurosParticipantUploadView() : renderSchedules(area);
    else if (activeView === "booking") contentHtml = renderClassBookingDashboard();
    else if (activeView === "simulator") contentHtml = renderScheduleSimulatorView();
    else if (activeView === "reports") contentHtml = renderReports(area);
    else if (activeView === "grades") contentHtml = renderClassGrades();
    else if (activeView === "semana-tec-grades") contentHtml = renderSemanaTecGrades();
    else if (activeView === "semana-tec-upload") contentHtml = renderSemanaTecUploadView();
    else if (activeView === "representativos-upload") contentHtml = renderRepresentativosUploadView();
    else if (activeView === "evaluations") contentHtml = renderPhysicalEvaluationsDashboard();
    else if (activeView === "collaborator-infographic") contentHtml = renderCollaboratorInfographicView();
    else contentHtml = isIntramuros ? renderIntramurosRolesDashboard() : renderBlueprint(area);
  } catch (error) {
    console.error("No se pudo renderizar la vista", { activeArea, activeView, area: area?.id, error });
    contentHtml = `<div class="permission-strip">No se pudo cargar esta vista: ${escapeHtml(error?.message || "error desconocido")}</div>`;
  }
  $("#contentArea").innerHTML = contentHtml;
  renderUploadSuccessLabels();
  if (isPresentation) bindExecutivePresentationControls();
  $$(".segmented button[data-view]").forEach((button) => {
    button.onclick = () => {
      if (button.hidden) return;
      activeView = button.dataset.view;
      render();
      if (activeArea === "clases" && activeView === "booking") {
        $("#contentArea").innerHTML = renderClassBookingDashboard();
        bindClassBookingControls();
        window.lucide?.createIcons();
      }
    };
  });
  $$("[data-jump]").forEach((button) => button.addEventListener("click", () => {
    activeArea = button.dataset.jump;
    activeView = button.dataset.targetView || "dashboard";
    render();
  }));
  $$("[data-view-jump]").forEach((button) => button.addEventListener("click", () => {
    activeView = button.dataset.viewJump || "dashboard";
    render();
  }));
  $$("[data-semana-tec-week]").forEach((button) => button.addEventListener("click", () => {
    semanaTecFilters.week = button.dataset.semanaTecWeek || "todas";
    semanaTecFilters.group = "todos";
    render();
  }));
  $$(".semana-tec-filter").forEach((input) => input.addEventListener("input", (event) => {
    semanaTecFilters[event.target.dataset.filter] = event.target.value;
    render();
  }));
  $("#semanaTecSearch")?.addEventListener("input", (event) => {
    semanaTecFilters.search = event.target.value;
    render();
  });
  $$(".representativos-filter").forEach((input) => input.addEventListener("input", (event) => {
    representativosFilters[event.target.dataset.filter] = event.target.value;
    render();
  }));
  $("#representativosSearch")?.addEventListener("input", (event) => {
    representativosFilters.search = event.target.value;
    render();
  });
  $("#downloadSemanaTecTemplate")?.addEventListener("click", downloadSemanaTecTemplate);
  $("#semanaTecFile")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (file) await loadSemanaTecFile(file);
    event.target.value = "";
  });
  $("#semanaTecUploadDrop")?.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.currentTarget.classList.add("dragging");
  });
  $("#semanaTecUploadDrop")?.addEventListener("dragleave", (event) => event.currentTarget.classList.remove("dragging"));
  $("#semanaTecUploadDrop")?.addEventListener("drop", async (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove("dragging");
    const file = event.dataTransfer?.files?.[0];
    if (file) await loadSemanaTecFile(file);
  });
  $("#importSemanaTec")?.addEventListener("click", importSemanaTecDraft);
  $$(".semana-tec-grade-input").forEach((input) => input.addEventListener("change", async (event) => {
    await saveSemanaTecGrade(event.target.dataset.semanaTecKey, event.target.value);
    event.target.value = normalizeSemanaTecGrade(event.target.value);
  }));
  $$('[data-semana-tec-group-upload]').forEach((input) => input.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (file) await uploadSemanaTecGroupGradeFile(event.target.dataset.semanaTecGroupUpload, file);
    event.target.value = "";
  }));
  $$('[data-semana-tec-group-select]').forEach((button) => button.addEventListener("click", () => {
    const groupKey = button.dataset.semanaTecGroupSelect;
    const input = $$('[data-semana-tec-group-upload]').find((control) => control.dataset.semanaTecGroupUpload === groupKey);
    input?.click();
  }));
  $$('[data-semana-tec-group-download]').forEach((button) => button.addEventListener("click", () => {
    downloadSemanaTecGroupGradeFile(button.dataset.semanaTecGroupDownload);
  }));
  $$("[data-planning-detail]").forEach((button) => button.addEventListener("click", () => {
    openPlanningActivityDetail(button, button.dataset.planningDetail, button.dataset.planningInstance);
  }));
  $$("[data-planning-month]").forEach((button) => button.addEventListener("click", () => {
    const areaId = button.dataset.planningArea;
    const monthKey = planningCalendarMonthByArea[areaId];
    const month = button.dataset.planningMonth === "today" ? new Date() : new Date(`${monthKey}-01T00:00:00`);
    if (Number.isNaN(month.getTime())) return;
    if (button.dataset.planningMonth !== "today") month.setMonth(month.getMonth() + (button.dataset.planningMonth === "next" ? 1 : -1));
    planningCalendarMonthByArea[areaId] = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}`;
    selectedPlanningActivityId = "";
    render();
  }));
  $$("[data-intramuros-calendar-layer]").forEach((button) => button.addEventListener("click", () => {
    intramurosCalendarLayer = button.dataset.intramurosCalendarLayer || "all";
    selectedPlanningActivityId = "";
    render();
  }));
  $$("[data-vivencia-month]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.vivenciaMonth;
    const today = new Date();
    if (action === "today") {
      vivenciaCalendarMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
    } else {
      const current = vivenciaCalendarBaseDate(vivenciaVisibleEvents());
      const month = new Date(current.getFullYear(), current.getMonth(), 1);
      month.setMonth(month.getMonth() + (action === "next" ? 1 : -1));
      vivenciaCalendarMonth = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}`;
    }
    render();
  }));
  $$("[data-close-planning-detail]").forEach((button) => button.addEventListener("click", closePlanningActivityDetail));
  $("#planningActivityForm")?.addEventListener("submit", savePlanningActivityOverride);
  $("[data-planning-overlay]")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closePlanningActivityDetail();
  });
  $("#refreshPlanningCalendar")?.addEventListener("click", async () => {
    planningCalendarLoaded = false;
    planningCalendarError = "";
    render();
    await loadPlanningCalendarRows();
    render();
    toast(planningCalendarError ? `No se pudo actualizar el calendario: ${planningCalendarError}` : "Calendario actualizado");
  });
  $("#saveMock")?.addEventListener("click", saveCaptureFromForm);
  $("#classStudentSearch")?.addEventListener("input", (event) => {
    classStudentSearch = event.target.value;
    render();
  });
  $("#clearClassStudentSearch")?.addEventListener("click", () => {
    classStudentSearch = "";
    render();
  });
  $$("[data-class-teachers]").forEach((button) => button.addEventListener("click", () => {
    const key = button.dataset.classTeachers;
    if (!key) return;
    if (expandedClassTeacherRows.has(key)) {
      expandedClassTeacherRows.delete(key);
    } else {
      expandedClassTeacherRows.add(key);
    }
    render();
  }));
  $("#clearLocal")?.addEventListener("click", () => {
    localCaptures = [];
    saveCaptures();
    addAudit("limpieza", "Capturas locales eliminadas");
    render();
    toast("Capturas locales eliminadas");
  });
  $("#uploadStudentDatabase")?.addEventListener("click", () => $("#studentDatabaseCsv")?.click());
  $("#studentDatabaseCsv")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await replaceStudentDatabaseFromCsv(file);
    event.target.value = "";
  });
  $("#executivePeriod")?.addEventListener("input", (event) => {
    executiveReportState.period = event.target.value;
    render();
  });
  $("#executiveWeek")?.addEventListener("input", (event) => {
    executiveReportState.week = Number(event.target.value) || 1;
    executiveReportState.title = `Reporte Ejecutivo Semana ${executiveReportState.week}`;
    render();
  });
  $("#executiveTitle")?.addEventListener("input", (event) => {
    executiveReportState.title = event.target.value;
  });
  $("#downloadExecutivePdf")?.addEventListener("click", () => {
    addAudit("exportacion", `PDF ejecutivo general semana ${executiveReportState.week}`);
    toast("Abriendo impresión para guardar como PDF");
    setTimeout(() => window.print(), 300);
  });
  $("#refreshExecutiveData")?.addEventListener("click", async () => {
    if (currentUser?.auth !== "supabase") {
      toast("Entra con Supabase para actualizar datos compartidos");
      return;
    }
    toast("Actualizando datos ejecutivos");
    await loadSupabaseDataBundle();
    render();
    toast("Dashboard ejecutivo actualizado");
  });
  $("#executivePlanningArea")?.addEventListener("input", (event) => {
    executivePlanningFilters.area = event.target.value;
    render();
  });
  $("#executivePlanningStatus")?.addEventListener("input", (event) => {
    executivePlanningFilters.status = event.target.value;
    render();
  });
  $("#executivePlanningDays")?.addEventListener("input", (event) => {
    executivePlanningFilters.days = event.target.value;
    render();
  });
  $$("[data-download-upload-template]").forEach((button) => button.addEventListener("click", () => downloadParticipationTemplate(button.dataset.downloadUploadTemplate)));
  $$("[data-participation-upload]").forEach((input) => input.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await loadParticipationUploadFile(input.dataset.participationUpload, file);
    event.target.value = "";
  }));
  $$("[data-upload-drop]").forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("dragging");
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("dragging"));
    zone.addEventListener("drop", async (event) => {
      event.preventDefault();
      zone.classList.remove("dragging");
      const file = event.dataTransfer?.files?.[0];
      if (file) await loadParticipationUploadFile(zone.dataset.uploadDrop, file);
    });
  });
  $$("[data-import-participation-upload]").forEach((button) => button.addEventListener("click", async () => {
    await importParticipationUpload(button.dataset.importParticipationUpload);
  }));
  $$("[data-connect-participation-cloud]").forEach((button) => button.addEventListener("click", () => {
    clearSession();
    render();
    toast("Inicia sesión con Supabase para guardar Gamer y Representativos.");
  }));
  $$('[data-download-intramuros-template]').forEach((button) => button.addEventListener("click", () => {
    downloadIntramurosTemplate(button.dataset.downloadIntramurosTemplate);
  }));
  $("#intramurosParticipantsFile")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await importIntramurosParticipants(file);
    event.target.value = "";
  });
  $("#intramurosRolesFile")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await importIntramurosRoles(file);
    event.target.value = "";
  });
  $("#intramurosUploadDrop")?.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.currentTarget.classList.add("dragging");
  });
  $("#intramurosUploadDrop")?.addEventListener("dragleave", (event) => {
    event.currentTarget.classList.remove("dragging");
  });
  $("#intramurosUploadDrop")?.addEventListener("drop", async (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove("dragging");
    const file = event.dataTransfer?.files?.[0];
    if (file) await importIntramurosParticipants(file);
  });
  $("#intramurosRolesUploadDrop")?.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.currentTarget.classList.add("dragging");
  });
  $("#intramurosRolesUploadDrop")?.addEventListener("dragleave", (event) => {
    event.currentTarget.classList.remove("dragging");
  });
  $("#intramurosRolesUploadDrop")?.addEventListener("drop", async (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove("dragging");
    const file = event.dataTransfer?.files?.[0];
    if (file) await importIntramurosRoles(file);
  });
  $$(".intramuros-filter").forEach((input) => input.addEventListener("input", (event) => {
    intramurosFilters[event.target.dataset.filter] = event.target.value;
    render();
  }));
  $("#intramurosSearch")?.addEventListener("input", (event) => {
    intramurosFilters.search = event.target.value;
    render();
  });
  $("#addIntramurosOperationRow")?.addEventListener("click", async () => {
    const row = normalizeIntramurosOperationRow({
      tipo: $("#intramurosOpTipo")?.value,
      torneo: $("#intramurosOpTorneo")?.value,
      periodo: $("#intramurosOpPeriodo")?.value,
      estatus: $("#intramurosOpEstatus")?.value
    });
    if (!row.torneo) {
      toast("Escribe el nombre del torneo");
      return;
    }
    intramurosOperationRows = [...intramurosOperationRows, row];
    saveIntramurosOperationRows();
    const cloudRow = await saveIntramurosOperationRowCloud(row);
    if (cloudRow) {
      intramurosOperationRows = intramurosOperationRows.map((item) => item.id === row.id ? cloudRow : item);
      saveIntramurosOperationRows();
    }
    addAudit("intramuros", `Torneo agregado a mesa Omar: ${row.torneo}`);
    render();
    toast(cloudRow ? "Torneo guardado en Supabase" : "Torneo guardado localmente");
  });
  $$(".intramuros-op-input").forEach((input) => input.addEventListener("change", async (event) => {
    const { opId, opField } = event.target.dataset;
    let updatedRow = null;
    intramurosOperationRows = intramurosOperationRows.map((row) => {
      if (row.id !== opId) return row;
      updatedRow = normalizeIntramurosOperationRow({ ...row, [opField]: event.target.value });
      return updatedRow;
    });
    saveIntramurosOperationRows();
    if (updatedRow?.torneo) {
      const cloudRow = await saveIntramurosOperationRowCloud(updatedRow);
      if (cloudRow) {
        intramurosOperationRows = intramurosOperationRows.map((row) => row.id === cloudRow.id ? cloudRow : row);
        saveIntramurosOperationRows();
      }
    }
    render();
  }));
  $$("[data-delete-intramuros-op]").forEach((button) => button.addEventListener("click", async () => {
    const id = button.dataset.deleteIntramurosOp;
    intramurosOperationRows = intramurosOperationRows.filter((row) => row.id !== id);
    saveIntramurosOperationRows();
    await deleteIntramurosOperationRowCloud(id);
    addAudit("intramuros", "Torneo eliminado de mesa Omar");
    render();
    toast("Torneo eliminado");
  }));
  $$("[data-open-intramuros-tournament]").forEach((button) => button.addEventListener("click", () => {
    selectedIntramurosTournament = button.dataset.openIntramurosTournament;
    render();
  }));
  $("[data-close-intramuros-tournament]")?.addEventListener("click", () => {
    selectedIntramurosTournament = "";
    render();
  });
  $$(".budget-filter").forEach((input) => input.addEventListener("input", (event) => {
    budgetFilters[event.target.dataset.filter] = event.target.value;
    if (event.target.dataset.filter === "period") budgetPeriodTouched = true;
    selectedBudgetRequestEditId = "";
    render();
  }));
  $("#budgetAllocationForm")?.addEventListener("submit", saveBudgetAllocation);
  $("#budgetRequestForm")?.addEventListener("submit", saveBudgetRequest);
  $("#budgetEditRequestForm")?.addEventListener("submit", updateBudgetRequest);
  $("#budgetPeriodForm")?.addEventListener("submit", createBudgetPeriod);
  $("[data-budget-new-period]")?.addEventListener("click", () => {
    budgetPeriodFormOpen = true;
    render();
  });
  $("[data-budget-cancel-period]")?.addEventListener("click", () => {
    budgetPeriodFormOpen = false;
    render();
  });
  $$(".budget-status-select").forEach((input) => input.addEventListener("change", (event) => {
    updateBudgetRequestStatus(event.target.dataset.budgetStatus, event.target.value);
  }));
  $$("[data-budget-edit]").forEach((button) => button.addEventListener("click", () => {
    selectedBudgetRequestEditId = button.dataset.budgetEdit;
    render();
  }));
  $("[data-budget-edit-cancel]")?.addEventListener("click", () => {
    selectedBudgetRequestEditId = "";
    render();
  });
  $$("[data-budget-delete]").forEach((button) => button.addEventListener("click", () => deleteBudgetRequest(button.dataset.budgetDelete)));
  $("[data-budget-new-request]")?.addEventListener("click", () => {
    activeView = "budget-request";
    render();
  });
  $("#vivenciaEventForm")?.addEventListener("submit", saveVivenciaEvent);
  $("#vivenciaImpactGoalForm")?.addEventListener("submit", saveVivenciaImpactGoal);
  $("#communicationEventForm")?.addEventListener("submit", saveCommunicationEvent);
  $("#communicationImpactGoalForm")?.addEventListener("submit", saveCommunicationImpactGoal);
  $("#newCommunicationEvent")?.addEventListener("click", () => {
    selectedCommunicationEventForDetail = "";
    render();
  });
  $("#uploadCommunicationEvents")?.addEventListener("click", () => $("#communicationEventsFile")?.click());
  $("#communicationEventsFile")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await importCommunicationEvents(file);
    event.target.value = "";
  });
  $$('[data-communication-diffusion-upload]').forEach((input) => input.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await uploadCommunicationDiffusionImage(
      input.dataset.communicationDiffusionUpload,
      Number(input.dataset.communicationDiffusionImageIndex || 1),
      file
    );
    event.target.value = "";
  }));
  $$('[data-communication-diffusion-download]').forEach((button) => button.addEventListener("click", async () => {
    await downloadCommunicationDiffusionImage(
      button.dataset.communicationDiffusionDownload,
      Number(button.dataset.communicationDiffusionImageIndex || 1)
    );
  }));
  $$('[data-communication-diffusion-carousel]').forEach((button) => button.addEventListener("click", () => {
    const slotKey = button.dataset.communicationDiffusionCarousel;
    const available = communicationDiffusionImagesForSlot(slotKey).map((image) => Number(image.image_index || 1));
    if (available.length < 2) return;
    const current = Number(communicationDiffusionActiveImage[slotKey] || available[0]);
    const currentPosition = Math.max(0, available.indexOf(current));
    const direction = Number(button.dataset.direction || 1);
    communicationDiffusionActiveImage[slotKey] = available[(currentPosition + direction + available.length) % available.length];
    render();
  }));
  $$('[data-communication-diffusion-carousel-index]').forEach((button) => button.addEventListener("click", () => {
    if (button.disabled) return;
    communicationDiffusionActiveImage[button.dataset.communicationDiffusionCarouselIndex] = Number(button.dataset.imageIndex || 1);
    render();
  }));
  $("#syncCommunicationPlanningEvents")?.addEventListener("click", syncCommunicationEventsFromPlanning);
  $("#openCommunicationParticipantsModal")?.addEventListener("click", () => {
    communicationParticipantsModalOpen = true;
    if (!selectedCommunicationEventForParticipants && communicationEvents[0]) selectedCommunicationEventForParticipants = communicationEvents[0].id;
    render();
  });
  $("#closeCommunicationParticipantsModal")?.addEventListener("click", () => {
    communicationParticipantsModalOpen = false;
    render();
  });
  $("#communicationParticipantsForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const eventId = String(form.get("event_id") || "").trim();
    const file = form.get("participants_file");
    if (!eventId || !(file instanceof File) || !file.name) {
      toast("Selecciona un evento y un archivo de participantes");
      return;
    }
    await importCommunicationParticipants(file, eventId);
  });
  $$('[data-download-event-participants-template]').forEach((button) => button.addEventListener("click", () => {
    downloadEventParticipantsTemplate(button.dataset.downloadEventParticipantsTemplate);
  }));
  $("#newVivenciaEvent")?.addEventListener("click", () => {
    selectedVivenciaEventForDetail = "";
    render();
  });
  $("#uploadVivenciaEvents")?.addEventListener("click", () => $("#vivenciaEventsFile")?.click());
  $("#uploadVivenciaEventImages")?.addEventListener("click", () => $("#vivenciaEventImagesFile")?.click());
  $("#vivenciaEventImagesFile")?.addEventListener("change", async (event) => {
    const files = event.target.files;
    if (!files?.length || !selectedVivenciaEventForDetail) return;
    await uploadVivenciaEventImages(files, selectedVivenciaEventForDetail);
    event.target.value = "";
  });
  $("#vivenciaEventsFile")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await importVivenciaEvents(file);
    event.target.value = "";
  });
  $("#syncVivenciaPlanningEvents")?.addEventListener("click", syncVivenciaEventsFromPlanning);
  $("#openVivenciaParticipantsModal")?.addEventListener("click", () => {
    vivenciaParticipantsModalOpen = true;
    if (!selectedVivenciaEventForParticipants && vivenciaEvents[0]) selectedVivenciaEventForParticipants = vivenciaEvents[0].id;
    render();
  });
  $("#closeVivenciaParticipantsModal")?.addEventListener("click", () => {
    vivenciaParticipantsModalOpen = false;
    render();
  });
  $("#vivenciaParticipantsForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const eventId = String(form.get("event_id") || "").trim();
    const file = form.get("participants_file");
    if (!eventId || !(file instanceof File) || !file.name) {
      toast("Selecciona un evento y un archivo de participantes");
      return;
    }
    await importVivenciaParticipants(file, eventId);
  });
  $$("[data-vivencia-detail]").forEach((button) => button.addEventListener("click", () => {
    selectedVivenciaEventForDetail = button.dataset.vivenciaDetail;
    activeView = "vivencia-events";
    render();
  }));
  $$("[data-communication-detail]").forEach((button) => button.addEventListener("click", () => {
    selectedCommunicationEventForDetail = button.dataset.communicationDetail;
    activeView = "vivencia-events";
    render();
  }));
  $$("[data-communication-delete]").forEach((button) => button.addEventListener("click", () => {
    deleteCommunicationEvent(button.dataset.communicationDelete);
  }));
  $$("[data-vivencia-delete]").forEach((button) => button.addEventListener("click", () => {
    deleteVivenciaEvent(button.dataset.vivenciaDelete);
  }));
  $$("[data-vivencia-image-delete]").forEach((button) => button.addEventListener("click", () => {
    deleteVivenciaEventImage(button.dataset.vivenciaImageDelete);
  }));
  $("#classSimulatorForm")?.addEventListener("submit", registerClassSimulator);
  $$("[data-delete-class-simulator]").forEach((button) => button.addEventListener("click", () => deleteClassSimulatorRow(button.dataset.deleteClassSimulator)));
  $$("[data-schedule-mode]").forEach((button) => button.addEventListener("click", () => {
    scheduleFilters.mode = button.dataset.scheduleMode;
    render();
  }));
  $$(".schedule-filter").forEach((input) => input.addEventListener("input", (event) => {
    scheduleFilters[event.target.dataset.filter] = event.target.value;
    render();
  }));
  $$("[data-schedule-upload]").forEach((input) => input.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await handleScheduleUpload(file, input.dataset.scheduleUpload);
    event.target.value = "";
  }));
  bindClassBookingControls();
  $$(".schedule-download").forEach((button) => button.addEventListener("click", () => downloadProfessorSchedule(button.dataset.download)));
  $$(".simulator-filter").forEach((input) => input.addEventListener("input", (event) => {
    simulatorFilters[event.target.dataset.filter] = event.target.value;
    render();
  }));
  $$(".simulator-field").forEach((input) => input.addEventListener("change", (event) => {
    if (event.target.dataset.field === "scenarioName") {
      simulatorState.scenarioName = event.target.value || "Escenario base";
      simulatorState.updatedAt = new Date().toISOString();
      saveSimulator();
    }
  }));
  $$("[data-sim-select]").forEach((button) => button.addEventListener("click", () => {
    simulatorFilters.selectedId = button.dataset.simSelect;
    render();
  }));
  $$(".simulator-row-field").forEach((input) => input.addEventListener("change", (event) => {
    updateSimulatorRow(event.target.dataset.simId, { [event.target.dataset.field]: event.target.value });
    simulatorFilters.selectedId = event.target.dataset.simId;
    render();
  }));
  $$("[data-sim-move]").forEach((button) => button.addEventListener("click", () => {
    simulatorFilters.selectedId = button.dataset.simId;
    moveSimulatorRow(button.dataset.simId, Number(button.dataset.simMove));
  }));
  $$("[data-sim-day-move]").forEach((button) => button.addEventListener("click", () => {
    const row = simulatorRows().find((item) => item.simId === button.dataset.simId);
    if (!row) return;
    simulatorFilters.selectedId = row.simId;
    updateSimulatorRow(row.simId, { day: dayOffset(row.day, Number(button.dataset.simDayMove)) });
    render();
  }));
  $$(".simulator-block").forEach((block) => block.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", block.dataset.simDrag);
    simulatorFilters.selectedId = block.dataset.simDrag;
  }));
  $$(".simulator-cell").forEach((cell) => {
    cell.addEventListener("dragover", (event) => event.preventDefault());
    cell.addEventListener("drop", (event) => {
      event.preventDefault();
      const simId = event.dataTransfer.getData("text/plain");
      const row = simulatorRows().find((item) => item.simId === simId);
      if (!row) return;
      const duration = timeToMinutes(row.end) - timeToMinutes(row.start);
      const start = cell.dataset.simHour;
      updateSimulatorRow(simId, { day: cell.dataset.simDay, start, end: minutesToTime(timeToMinutes(start) + duration) });
      simulatorFilters.selectedId = simId;
      render();
    });
  });
  $$("[data-simulator-export]").forEach((button) => button.addEventListener("click", () => exportSimulatorProposal(button.dataset.simulatorExport)));
  $("#resetSimulator")?.addEventListener("click", resetSimulatorFromMaster);
  $$(".gym-week-filter").forEach((select) => select.addEventListener("change", (event) => {
    gymWeekSelection[event.target.dataset.facility] = Number(event.target.value);
    render();
  }));
  $$("[data-gym-dashboard-facility]").forEach((button) => button.addEventListener("click", () => {
    gymDashboardFacility = button.dataset.gymDashboardFacility;
    render();
  }));
  $("#gymHeatmapMode")?.addEventListener("change", (event) => {
    gymHeatmapMode = event.target.value;
    render();
  });
  $("#gymAttendanceDate")?.addEventListener("change", (event) => {
    const dayInput = $("#gymAttendanceDay");
    if (dayInput) dayInput.value = gymDayFromDate(event.target.value);
  });
  $("#gymAttendanceForm")?.addEventListener("submit", saveGymAttendance);
  $$("[data-delete-gym-attendance]").forEach((button) => button.addEventListener("click", () => {
    deleteGymAttendance(button.dataset.deleteGymAttendance);
  }));
  $("#gymStudentLookupForm")?.addEventListener("submit", lookupGymStudent);
  $("#saveGymStudentRegistration")?.addEventListener("click", saveGymStudentRegistration);
  $("#uploadGymAttendanceCsv")?.addEventListener("click", () => {
    if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("gimnasio")) {
      toast("Necesitas acceso autorizado de Gimnasio para cargar asistencias");
      return;
    }
    $("#gymAttendanceCsv")?.click();
  });
  $("#gymAttendanceCsv")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await importGymAttendanceCsv(file);
    event.target.value = "";
  });
  $("#clearAudit")?.addEventListener("click", () => {
    auditLog = [];
    saveAuditLog();
    render();
    toast("Bitacora local eliminada");
  });
  $("#configLinkForm")?.addEventListener("submit", saveConfigLinkFromForm);
  $("#cancelConfigLinkEdit")?.addEventListener("click", () => {
    configLinkEditingId = "";
    render();
  });
  $$("[data-edit-config-link]").forEach((button) => button.addEventListener("click", () => editConfigLink(button.dataset.editConfigLink)));
  $$("[data-delete-config-link]").forEach((button) => button.addEventListener("click", () => deleteConfigLink(button.dataset.deleteConfigLink)));
  $$(".collab-filter").forEach((select) => select.addEventListener("input", (event) => {
    collaboratorFilter[event.target.dataset.filter] = event.target.value;
    render();
  }));
  $$("[data-collab-profile]").forEach((button) => button.addEventListener("click", () => {
    selectedCollaboratorInfographicId = button.dataset.collabProfile;
    render();
  }));
  $("[data-close-collab-profile]")?.addEventListener("click", () => {
    selectedCollaboratorInfographicId = "";
    render();
  });
  $$(".collab-cell").forEach((control) => control.addEventListener("change", (event) => {
    const target = event.target;
    const value = target.multiple
      ? [...target.selectedOptions].map((option) => option.value).join(", ")
      : target.value;
    updateCollaboratorCell(target.dataset.rowId, target.dataset.column, value);
  }));
  $$(".collab-week-check").forEach((control) => control.addEventListener("change", (event) => {
    const picker = event.target.closest(".collab-week-picker");
    if (!picker || picker.dataset.disabled === "true") return;
    const value = [...picker.querySelectorAll(".collab-week-check:checked")]
      .map((checkbox) => checkbox.value)
      .join(", ");
    updateCollaboratorCell(picker.dataset.rowId, picker.dataset.column, value);
  }));
  $$(".collab-cell").forEach((control) => control.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    event.target.blur();
  }));
  $("#addCollaboratorRow")?.addEventListener("click", addCollaboratorRow);
  $("#addCollaboratorColumn")?.addEventListener("click", addCollaboratorColumn);
  $("#exportCollaboratorBackup")?.addEventListener("click", exportCollaboratorBackup);
  $("#openCollaboratorPhotoUploader")?.addEventListener("click", () => {
    photoUploaderOpen = true;
    selectedPhotoNomina = selectedPhotoNomina || collaboratorRows()[0]?.__id || "";
    render();
  });
  $("#closeCollaboratorPhotoUploader")?.addEventListener("click", () => {
    photoUploaderOpen = false;
    render();
  });
  $("#collaboratorPhotoNomina")?.addEventListener("change", (event) => {
    selectedPhotoNomina = event.target.value;
  });
  $("#saveCollaboratorPhoto")?.addEventListener("click", uploadCollaboratorPhoto);
  $("#removeCollaboratorPhoto")?.addEventListener("click", removeCollaboratorPhoto);
  $$("[data-photo-row]").forEach((button) => button.addEventListener("click", () => {
    selectedPhotoNomina = button.dataset.photoRow;
    photoUploaderOpen = true;
    render();
  }));
  $("#importCollaboratorsToCloud")?.addEventListener("click", importCollaboratorsToCloud);
  $$(".physical-filter").forEach((select) => select.addEventListener("input", (event) => {
    physicalEvaluationFilter[event.target.dataset.filter] = event.target.value;
    render();
  }));
  $("#refreshPhysicalEvaluations")?.addEventListener("click", async () => {
    await Promise.all([
      loadSupabaseCollaborators({ loadSettings: false }),
      loadPhysicalEvaluations()
    ]);
    const collaboratorIndex = collaboratorPhotoIndex();
    const unlinkedCount = physicalEvaluations.filter((row) => {
      const nominaKey = collaboratorMatchKey(row.collaborator_nomina);
      return !nominaKey || !collaboratorIndex.byNomina.has(nominaKey);
    }).length;
    render();
    toast(unlinkedCount
      ? `Datos actualizados. ${unlinkedCount} evaluaciones sin nómina vinculada no se incluyen en el Salón de la Fama.`
      : "Evaluaciones y colaboradores actualizados");
  });
  $("#openPhysicalHallOfFame")?.addEventListener("click", () => {
    physicalHallOfFameOpen = true;
    physicalHallOfFameTopTest = "";
    render();
  });
  $("#closePhysicalHallOfFame")?.addEventListener("click", () => {
    physicalHallOfFameOpen = false;
    physicalHallOfFameTopTest = "";
    render();
  });
  $$("[data-physical-hof-gender]").forEach((button) => button.addEventListener("click", () => {
    physicalHallOfFameGender = button.dataset.physicalHofGender || "todos";
    render();
  }));
  $$("[data-physical-hof-top]").forEach((button) => button.addEventListener("click", () => {
    physicalHallOfFameTopTest = button.dataset.physicalHofTop || "";
    render();
  }));
  $("#closePhysicalHallOfFameTop")?.addEventListener("click", () => {
    physicalHallOfFameTopTest = "";
    render();
  });
  $("#savePhysicalAccessCode")?.addEventListener("click", changePhysicalAccessCode);
  $("#exportPhysicalEvaluations")?.addEventListener("click", () => downloadPhysicalEvaluationsCsv());
  $$(".class-grade-filter").forEach((control) => control.addEventListener("change", (event) => {
    classGradeFilter[event.target.dataset.filter] = event.target.value;
    classGradePage = 1;
    render();
  }));
  $("#classDashboardBlock")?.addEventListener("change", (event) => {
    classDashboardBlock = event.target.value;
    render();
  });
  $$(".grade-input").forEach((control) => control.addEventListener("change", (event) => {
    updateClassGrade(event.target.dataset.gradeKey, event.target.value);
  }));
  $$(".grade-input").forEach((control) => control.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    event.target.blur();
  }));
  $$("[data-grade-page]").forEach((button) => button.addEventListener("click", () => {
    classGradePage = Number(button.dataset.gradePage);
    render();
  }));
  $("#exportClassGrades")?.addEventListener("click", downloadClassGradesCsv);
  $("#uploadClassGrades")?.addEventListener("click", () => $("#classGradesFile")?.click());
  $$('[data-download-class-template]').forEach((button) => button.addEventListener("click", () => {
    downloadClassTemplate(button.dataset.downloadClassTemplate);
  }));
  $("#classGradesFile")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    await importClassGradesFile(file);
  });
  $$("[data-delete-grade-load]").forEach((button) => button.addEventListener("click", () => {
    deleteClassGradeLoad(button.dataset.deleteGradeLoad, button.dataset.gradeLoadSource);
  }));
  $$("[data-delete-row]").forEach((button) => button.addEventListener("click", () => deleteCollaboratorRow(button.dataset.deleteRow)));
  $$("[data-move-column]").forEach((button) => button.addEventListener("click", () => {
    moveCollaboratorColumn(button.dataset.moveColumn, Number(button.dataset.direction));
  }));
  $$("[data-delete-column]").forEach((button) => button.addEventListener("click", () => deleteCollaboratorColumn(button.dataset.deleteColumn)));
  $$(".report-download").forEach((button) => button.addEventListener("click", () => downloadCsv(button.dataset.report || "reporte")));
}

async function saveGymAttendance(event) {
  event.preventDefault();
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("gimnasio")) {
    toast("Necesitas acceso autorizado de Gimnasio para guardar");
    return;
  }
  const form = new FormData(event.currentTarget);
  const payload = {
    week_number: Number(form.get("week_number")),
    attendance_date: String(form.get("attendance_date") || ""),
    day_of_week: String(form.get("day_of_week") || ""),
    facility: String(form.get("facility") || ""),
    attendee_count: Number(form.get("attendee_count")),
    notes: String(form.get("notes") || "").trim() || null,
    created_by: currentUser.id
  };
  if (!payload.attendance_date || payload.week_number < 1 || payload.attendee_count < 0 || !GYM_DAYS.includes(payload.day_of_week) || !["Wellness", "EMIS"].includes(payload.facility)) {
    toast("Revisa los datos de asistencia");
    return;
  }
  const { error } = await supabaseClient
    .from("gym_attendance_records")
    .upsert(payload, { onConflict: "attendance_date,facility" });
  if (error) {
    console.error(error);
    toast(`No se pudo guardar: ${supabaseErrorDetail(error) || "revisa la activación de Gimnasio"}`);
    return;
  }
  addAudit("gimnasio", `Asistencia ${payload.facility}: ${payload.attendee_count}`);
  await loadGymData();
  activeView = "gym-attendance";
  render();
  toast("Asistencia guardada; tabla semanal actualizada");
}

async function deleteGymAttendance(recordId) {
  const record = gymManualAttendanceRows.find((row) => row.id === recordId);
  if (!record || !canDeleteGymAttendance(record)) {
    toast("No tienes permiso para eliminar esta carga");
    return;
  }
  const description = `${record.facility}, semana ${record.week_number}, ${record.attendance_date}, ${record.attendee_count} asistentes`;
  if (!window.confirm(`¿Eliminar la carga de ${description}? Las gráficas se actualizarán automáticamente.`)) return;
  const { error } = await supabaseClient
    .from("gym_attendance_records")
    .delete()
    .eq("id", recordId);
  if (error) {
    console.error(error);
    toast(`No se pudo eliminar: ${supabaseErrorDetail(error) || "revisa los permisos de Gimnasio"}`);
    return;
  }
  addAudit("gimnasio", `Carga de asistencia eliminada: ${description}`);
  await loadGymData();
  render();
  toast("Carga eliminada y gráficas actualizadas");
}

async function importGymAttendanceCsv(file) {
  if (!supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("gimnasio")) {
    toast("Necesitas acceso autorizado de Gimnasio para cargar asistencias");
    return;
  }
  gymAttendanceImporting = true;
  render();
  try {
    const text = await file.text();
    const { payload, warnings, errors, omitted } = parseGymAttendanceCsv(text);
    if (errors.length) {
      toast(`CSV con errores: fila ${errors[0].row}, ${errors[0].message}`);
      return;
    }
    if (!payload.length) {
      toast("El CSV no tiene asistencias validas");
      return;
    }
    const chunkSize = 500;
    for (let index = 0; index < payload.length; index += chunkSize) {
      const { error } = await supabaseClient
        .from("gym_asistencias")
        .upsert(payload.slice(index, index + chunkSize), { onConflict: "id_origen,matricula,fecha,hora,sitio" });
      if (error) throw error;
    }
    await loadGymData();
    addAudit("gimnasio", `Archivo de asistencias cargado: ${payload.length} filas procesadas`);
    recordUploadSuccess("gimnasio.asistencias");
    const omittedSummary = omitted ? `, ${omitted} omitidas` : "";
    const warningSummary = warnings.length ? `, ${warnings.length} advertencias` : "";
    toast(`Asistencias cargadas: ${payload.length} procesadas${omittedSummary}${warningSummary}`);
  } catch (error) {
    console.error(error);
    toast(`No se pudo cargar asistencias${supabaseErrorDetail(error) ? `: ${supabaseErrorDetail(error)}` : ""}`);
  } finally {
    gymAttendanceImporting = false;
    render();
  }
}

async function lookupGymStudent(event) {
  event.preventDefault();
  const matricula = String(new FormData(event.currentTarget).get("matricula") || "").trim().toUpperCase();
  if (!matricula) return;
  if (!supabaseClient || currentUser?.auth !== "supabase") {
    toast("La búsqueda requiere una sesión Supabase");
    return;
  }
  const result = await supabaseClient
    .from("Base de datos_alumnos")
    .select("*")
    .eq("Matricula", matricula)
    .maybeSingle();
  if (result.error) {
    console.error(result.error);
    gymMasterStudent = null;
    $("#gymStudentLookupResult").innerHTML = `<p class="form-message error">No se pudo consultar la Base Maestra.</p>`;
    return;
  }
  gymMasterStudent = result.data || null;
  $("#gymStudentLookupResult").innerHTML = gymMasterStudent
    ? renderGymStudentDetails(gymMasterStudent)
    : `<p class="form-message error">La matrícula ${escapeHtml(matricula)} no existe en Base de datos_alumnos.</p>`;
  $("#saveGymStudentRegistration")?.addEventListener("click", saveGymStudentRegistration);
}

async function saveGymStudentRegistration() {
  if (!gymMasterStudent || !supabaseClient || currentUser?.auth !== "supabase" || !canEditArea("gimnasio")) {
    toast("Necesitas acceso autorizado de Gimnasio");
    return;
  }
  const matricula = String(gymMasterStudent.Matricula || gymMasterStudent.matricula || "").trim().toUpperCase();
  const payload = {
    matricula,
    student_snapshot: safeGymStudentSnapshot(gymMasterStudent),
    registered_by: currentUser.id
  };
  const { error } = await supabaseClient
    .from("gym_student_registrations")
    .upsert(payload, { onConflict: "matricula" });
  if (error) {
    console.error(error);
    toast(`No se pudo registrar: ${supabaseErrorDetail(error) || "revisa la activación de Gimnasio"}`);
    return;
  }
  addAudit("gimnasio", `Matrícula registrada: ${matricula}`);
  gymMasterStudent = null;
  await loadGymData();
  render();
  toast("Matrícula vinculada con la Base Maestra");
}

async function saveCaptureFromForm() {
  const form = $("#captureForm");
  const formData = new FormData(form);
  const selected = areas.find((a) => a.id === activeArea) || areas[1];
  const row = {
    matricula: String(formData.get("matricula") || "").trim().toUpperCase(),
    genero: String(formData.get("genero") || "No especificado"),
    carrera: String(formData.get("carrera") || ""),
    semestre: Number(formData.get("semestre") || 1),
    nivel: String(formData.get("nivel") || "Profesional"),
    periodo: String(formData.get("periodo") || "AD26"),
    operacion: String(formData.get("operacion") || ""),
    estatus: String(formData.get("estatus") || "Activo"),
    area: selected.id === "general" ? "clases" : selected.id,
    registros: 1,
    acreditado: String(formData.get("estatus") || "") !== "Baja",
    baja: String(formData.get("estatus") || "") === "Baja",
    createdAt: new Date().toISOString()
  };
  if (!/^A0[0-9]{6,8}$/.test(row.matricula)) {
    toast("La matricula debe iniciar con A0 y usar solo numeros");
    return;
  }
  try {
    const savedInCloud = await saveCaptureToSupabase(row);
    if (savedInCloud) {
      addAudit("captura", `Registro Supabase en ${labelArea(row.area)} para ${row.matricula}`);
      activeView = "dashboard";
      render();
      toast("Captura guardada en Supabase");
      return;
    }
  } catch (error) {
    console.error(error);
    toast("Supabase no guardo; dejo respaldo local");
  }
  localCaptures.unshift(row);
  saveCaptures();
  addAudit("captura", `Registro local en ${labelArea(row.area)} para ${row.matricula}`);
  activeView = "dashboard";
  render();
  toast("Captura local guardada y reflejada en indicadores");
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadCsv(name = "reporte") {
  if (activeArea === "colaboradores") {
    addAudit("exportacion", "CSV de colaboradores");
    downloadUniformesCsv(name);
    return;
  }
  if (activeArea === "evaluaciones") {
    downloadPhysicalEvaluationsCsv();
    return;
  }
  if (activeArea === "configuracion") {
    const systemCatalogs = getSystemCatalogs();
    const headers = ["tipo", "campo_1", "campo_2", "campo_3"];
    const csv = [
      headers.join(","),
      ...demoUsers.map((user) => ["permiso", csvEscape(user.name), csvEscape(labelArea(user.area)), csvEscape(user.role === "direccion" ? "Lectura y edicion global" : "Captura y consulta de su modulo")].join(",")),
      ...importPlan.map((row) => ["importacion", csvEscape(row[0]), csvEscape(row[1]), csvEscape(row[2])].join(",")),
      ...validationRules.map((row) => ["validacion", csvEscape(row[0]), csvEscape(row[1]), csvEscape(row[2])].join(",")),
      ...migrationBacklog.map((row) => ["backlog", csvEscape(row[0]), csvEscape(row[1]), csvEscape(row[2])].join(",")),
      ...systemAlerts().map((row) => ["alerta", csvEscape(row.priority), csvEscape(row.module), csvEscape(`${row.message} - ${row.status}`)].join(",")),
      ...roadmapItems.map((row) => ["roadmap", csvEscape(`${row[0]} ${row[1]}`), csvEscape(row[2]), csvEscape(`${row[3]} - ${row[4]}`)].join(",")),
      ...Object.entries(systemCatalogs).flatMap(([name, values]) => values.map((value) => ["catalogo", csvEscape(name), csvEscape(value), ""].join(","))),
      ...scheduledReports.map((row) => ["reporte", csvEscape(`${row[0]} - ${row[1]}`), csvEscape(`${row[2]} / ${row[3]}`), csvEscape(`${row[4]} - ${row[5]}`)].join(",")),
      ...dataModelEntities.map((row) => ["entidad", csvEscape(row[0]), csvEscape(row[1]), csvEscape(`${row[3]} - ${row[4]}`)].join(",")),
      ...dataRelationships.map((row) => ["relacion", csvEscape(row[0]), csvEscape(row[1]), csvEscape(row[2])].join(","))
    ].join("\n");
    downloadBlob(csv, "configuracion-sistema.csv");
    addAudit("exportacion", "Configuracion del sistema");
    toast("Configuracion del sistema descargada");
    return;
  }
  const rows = filteredStudents();
  const headers = ["matricula", "genero", "carrera", "semestre", "nivel", "area", "registros", "estatus", "periodo"];
  const csv = [
    headers.join(","),
    ...rows.map((row) => headers.map((key) => csvEscape(key === "area" ? labelArea(row[key]) : row[key])).join(","))
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${name.toLowerCase().replaceAll(" ", "-")}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  addAudit("exportacion", `CSV de ${labelArea(activeArea)}`);
  toast("Reporte CSV descargado");
}

function downloadPhysicalEvaluationsCsv() {
  const rows = filteredPhysicalEvaluations();
  const testKeys = Object.keys(PHYSICAL_TEST_LABELS);
  const headers = [
    "fecha", "nomina", "colaborador", "periodo", "tipo", "disciplina", "genero",
    "origen", "clasificacion",
    ...testKeys.flatMap((key) => [`${key}_valor`, `${key}_estado`, `${key}_observacion`])
  ];
  const csv = [
    headers.map(csvEscape).join(","),
    ...rows.map((row) => {
      const base = [
        row.evaluated_at || "",
        row.collaborator_nomina || "",
        row.captured_name || "",
        row.period_key || row.semester_label || "",
        physicalStatusLabel(row.evaluation_stage),
        row.discipline || "",
        row.gender || "",
        row.source || "",
        row.classification_status || ""
      ];
      const results = testKeys.flatMap((key) => {
        const result = physicalResult(row, key) || {};
        return [result.numeric_value ?? result.raw_value ?? "", result.result_status || "", result.notes || ""];
      });
      return [...base, ...results].map(csvEscape).join(",");
    })
  ].join("\n");
  downloadBlob(csv, `evaluaciones-fisicas-${new Date().toISOString().slice(0, 10)}.csv`);
  addAudit("exportacion", "Evaluaciones físicas");
  toast("Evaluaciones exportadas");
}

function downloadClassGradesCsv() {
  const headers = [
    "matricula", "clave_materia", "materia", "crn", "grupo",
    "profesor", "carrera", "semestre", "periodo", "bloque", "calificacion"
  ];
  const csv = [
    headers.map(csvEscape).join(","),
    ...filteredClassGrades().map((row) => [
      row.matricula,
      row.subject_code,
      row.subject_name,
      row.crn,
      row.group_number,
      row.teacher_name,
      row.career_code,
      row.semester_label,
      row.period_label,
      classGradeBlockLabel(row),
      row.grade
    ].map(csvEscape).join(","))
  ].join("\n");
  downloadBlob(csv, `calificaciones-clases-${new Date().toISOString().slice(0, 10)}.csv`);
  addAudit("exportacion", "Registro de calificaciones de Clases Deportivas");
  toast("Calificaciones exportadas");
}

function downloadClassTemplate(type) {
  const templates = {
    grades: {
      filename: "plantilla-calificaciones.csv",
      rows: [{ matricula: "A01234567", materia: "ACONDICIONAMIENTO FISICO PMT1", calificacion: "95", periodo: "AD26", clave_materia: "DEP101", CRN: "12345", grupo: "1", profesor: "Nombre del profesor", carrera: "ITC", semestre: "3" }]
    },
    official: {
      filename: "plantilla-programacion-oficial.csv",
      rows: [{ profesor: "Nombre del profesor", disciplina: "Nombre de clase", dia: "Lunes", hora_inicio: "09:00", hora_fin: "10:00", instalacion: "Gimnasio", frecuencia: "Semanal", grupo: "1" }]
    },
    booking: {
      filename: "plantilla-booking.csv",
      rows: [{ profesor: "Nombre del profesor", actividad: "Nombre de actividad", dia: "Lunes", hora_inicio: "09:00", hora_fin: "10:00", instalacion: "Gimnasio", frecuencia: "Semanal" }]
    }
  };
  if (type === "master") {
    if (!window.XLSX) {
      toast("La plantilla maestra requiere el lector de Excel. Intenta de nuevo cuando cargue la página.");
      return;
    }
    const workbook = window.XLSX.utils.book_new();
    const official = templates.official.rows;
    const booking = templates.booking.rows;
    window.XLSX.utils.book_append_sheet(workbook, window.XLSX.utils.json_to_sheet(official), "programacion clases");
    window.XLSX.utils.book_append_sheet(workbook, window.XLSX.utils.json_to_sheet(booking), "booking ofertados");
    window.XLSX.writeFile(workbook, "plantilla-archivo-maestro-indicadores.xlsx");
    toast("Plantilla archivo maestro descargada");
    return;
  }
  const template = templates[type];
  if (!template) return;
  const headers = Object.keys(template.rows[0]);
  const csv = [headers.join(","), ...template.rows.map((row) => headers.map((key) => csvEscape(row[key])).join(","))].join("\n");
  downloadBlob(csv, template.filename);
  toast(`Plantilla ${type === "grades" ? "de calificaciones" : type === "official" ? "de programación oficial" : "de Booking"} descargada`);
}

function downloadBlob(text, filename) {
  const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function handleScheduleUpload(file, type) {
  if (!file || !type) return;
  try {
    if (type === "master") {
      const parsed = await schedulesFromMasterWorkbook(file);
      scheduleState.official = parsed.official;
      scheduleState.booking = parsed.booking;
      scheduleState.errors = parsed.errors;
      scheduleState.sourceMode = "master";
      scheduleState.updatedAt = new Date().toISOString();
      saveSchedules();
      simulatorState = { rows: simulatorBaseRows(), scenarioName: "Escenario desde Calendario Maestro", updatedAt: new Date().toISOString() };
      saveSimulator();
      addAudit("horarios", `${file.name}: maestro con ${parsed.official.length} clases oficiales y ${parsed.booking.length} booking`);
      recordUploadSuccess("clases.horarios.master", scheduleState.updatedAt);
      render();
      toast("Archivo maestro consolidado en Horarios");
      return;
    }
    const rows = await rowsFromScheduleFile(file);
    const parsed = parseScheduleRows(rows, type);
    scheduleState[type] = parsed.validRows;
    scheduleState.errors.master = [];
    scheduleState.errors[type] = parsed.errors;
    scheduleState.sourceMode = "manual";
    scheduleState.updatedAt = new Date().toISOString();
    saveSchedules();
    simulatorState = { rows: simulatorBaseRows(), scenarioName: "Escenario desde Calendario Maestro", updatedAt: new Date().toISOString() };
    saveSimulator();
    addAudit("horarios", `${file.name}: ${parsed.validRows.length} registros validos, ${parsed.errors.length} errores`);
    recordUploadSuccess(`clases.horarios.${type}`, scheduleState.updatedAt);
    render();
    toast(`${type === "official" ? "Programacion Oficial" : "Booking"} cargado`);
  } catch (error) {
    console.error(error);
    if (type === "master") {
      scheduleState.errors.master = [{ row: 0, message: "No pude leer el archivo maestro. Usa el Excel de Indicadores con las hojas programacion clases y booking ofertados." }];
    } else {
      scheduleState.errors[type] = [{ row: 0, message: "No pude leer el archivo. Usa Excel o CSV con encabezados." }];
    }
    saveSchedules();
    render();
    toast("No pude procesar el archivo de horarios");
  }
}

function downloadProfessorSchedule(type) {
  const node = $("#professorScheduleExport");
  if (!node) return;
  if (type === "pdf") {
    addAudit("horarios", "Descarga PDF de horario individual");
    toast("Abriendo impresion para guardar como PDF");
    setTimeout(() => window.print(), 300);
    return;
  }
  const professor = scheduleFilters.reportProfessor === "todos" ? scheduleProfessors()[0] : scheduleFilters.reportProfessor;
  const rows = scheduleMasterRows().filter((row) => row.professor === professor);
  downloadBlob(scheduleSvg(professor, rows), `horario-${(professor || "profesor").toLowerCase().replaceAll(" ", "-")}.svg`);
  addAudit("horarios", "Descarga de horario individual");
  toast("Horario individual descargado");
}

function simulatorExportRows() {
  return simulatorRows().map((row) => ({
    escenario: simulatorState.scenarioName || "Escenario base",
    tipo: row.source === "booking" ? "Booking" : "Clase Oficial",
    profesor: row.professor,
    disciplina: row.discipline,
    dia: row.day,
    hora_inicio: row.start,
    hora_fin: row.end,
    instalacion: row.installation,
    frecuencia: row.frequency || "Semanal",
    grupo: row.group || "",
    cambio_en_simulador: row.draftChanged ? "Si" : "No"
  }));
}

function exportSimulatorProposal(format) {
  const rows = simulatorExportRows();
  if (!rows.length) {
    toast("No hay programacion propuesta para exportar");
    return;
  }
  const filenameBase = `programacion-propuesta-${new Date().toISOString().slice(0, 10)}`;
  if (format === "xlsx" && window.XLSX) {
    const workbook = window.XLSX.utils.book_new();
    const worksheet = window.XLSX.utils.json_to_sheet(rows);
    window.XLSX.utils.book_append_sheet(workbook, worksheet, "Programacion propuesta");
    window.XLSX.writeFile(workbook, `${filenameBase}.xlsx`);
    addAudit("simulador horarios", "Exportacion Excel de programacion propuesta");
    toast("Programacion propuesta exportada en Excel");
    return;
  }
  const headers = Object.keys(rows[0]);
  const csv = [
    headers.map(csvEscape).join(","),
    ...rows.map((row) => headers.map((key) => csvEscape(row[key])).join(","))
  ].join("\n");
  downloadBlob(csv, `${filenameBase}.csv`);
  addAudit("simulador horarios", "Exportacion CSV de programacion propuesta");
  toast("Programacion propuesta exportada en CSV");
}

function escapeSvg(value) {
  return String(value || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function scheduleSvg(professor, rows) {
  const width = 1200;
  const height = 820;
  const left = 84;
  const top = 112;
  const col = 178;
  const rowH = 38;
  const color = professorColor(professor);
  const blocks = rows.map((row) => {
    const dayIndex = scheduleDays.indexOf(row.day);
    const startOffset = Math.max(0, (timeToMinutes(row.start) - 360) / 60);
    const duration = Math.max(.5, (timeToMinutes(row.end) - timeToMinutes(row.start)) / 60);
    const x = left + dayIndex * col + 6;
    const y = top + startOffset * rowH + 6;
    const h = duration * rowH - 8;
    const opacity = row.source === "booking" ? ".38" : "1";
    return `
      <rect x="${x}" y="${y}" width="${col - 12}" height="${h}" rx="8" fill="${color}" opacity="${opacity}"/>
      <text x="${x + 10}" y="${y + 22}" fill="#fff" font-size="13" font-weight="700">${escapeSvg(row.discipline)}</text>
      <text x="${x + 10}" y="${y + 40}" fill="#fff" font-size="11">${escapeSvg(row.installation)}</text>
    `;
  }).join("");
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="${width}" height="${height}" fill="#f4f8f8"/>
      <text x="48" y="52" fill="#16202a" font-family="Arial" font-size="28" font-weight="800">Horario semanal</text>
      <text x="48" y="82" fill="#5f6d7a" font-family="Arial" font-size="16">${escapeSvg(professor)}</text>
      ${scheduleDays.map((day, index) => `<text x="${left + index * col + 10}" y="${top - 18}" fill="#16202a" font-family="Arial" font-size="15" font-weight="800">${day}</text>`).join("")}
      ${scheduleHours.map((hour, index) => `
        <text x="36" y="${top + index * rowH + 24}" fill="#5f6d7a" font-family="Arial" font-size="12">${hour}</text>
        <line x1="${left}" y1="${top + index * rowH}" x2="${width - 44}" y2="${top + index * rowH}" stroke="#d8e1e7"/>
      `).join("")}
      ${scheduleDays.map((day, index) => `<rect x="${left + index * col}" y="${top - 38}" width="${col}" height="${scheduleHours.length * rowH + 38}" fill="none" stroke="#d8e1e7"/>`).join("")}
      ${blocks}
    </svg>
  `;
}

function downloadUniformesCsv(name = "colaboradores") {
  const rows = filteredCollaborators();
  const headers = collaboratorColumns();
  const csv = [
    headers.join(","),
    ...rows.map((row) => headers.map((key) => csvEscape(row[key])).join(","))
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${name.toLowerCase().replaceAll(" ", "-")}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  addAudit("exportacion", "Reporte de colaboradores");
  toast("Reporte de colaboradores descargado");
}

function renderBlueprint(area) {
  const selected = area.id === "general" ? areas[0] : area;
  const classGradesUpload = selected.id === "clases" ? renderClassGradesSystemUpload() : "";
  if (selected.id === "clases" && !isLeadership()) {
    return `<div class="blueprint-grid">${classGradesUpload}</div>`;
  }
  return `
    <div class="blueprint-grid">
      ${classGradesUpload}
      <section class="blueprint-card">
        <h3>Mapa de modulos</h3>
        <p>El menu principal queda organizado por las ocho areas operativas y una vista ejecutiva. Cada modulo comparte el mismo patron para que los coordinadores no aprendan ocho sistemas distintos.</p>
        <div class="chip-list">${areas.map((a) => `<span class="chip">${a.name}</span>`).join("")}</div>
      </section>
      <section class="blueprint-card">
        <h3>Submenus por modulo</h3>
        <p>La navegacion interna recomendada separa captura, seguimiento, indicadores, reportes y configuracion de catalogos.</p>
        <div class="chip-list">${submenus.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
      </section>
      <section class="blueprint-card">
        <h3>Base de datos recomendada</h3>
        <p>PostgreSQL administrado en Supabase. Se mantiene una tabla minima de estudiantes y tablas transaccionales por operacion.</p>
        <ul>${dbTables.map((t) => `<li>${t}</li>`).join("")}</ul>
      </section>
      <section class="blueprint-card">
        <h3>Arquitectura tecnologica</h3>
        <p>Next.js en Vercel para la app, Supabase para base de datos y autenticacion, almacenamiento para archivos, funciones serverless para PDF/Excel y politicas por rol en la base.</p>
        <div class="chip-list">
          <span class="chip">Vercel</span><span class="chip">Next.js</span><span class="chip">Supabase</span><span class="chip">PostgreSQL</span><span class="chip">PDF</span><span class="chip">Excel</span>
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Permisos por rol</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Rol</th><th>Alcance</th><th>Permisos</th></tr></thead>
            <tbody>${roleMatrix.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Definicion del modulo activo: ${selected.name}</h3>
        <div class="module-grid">
          <article class="module-card" data-tone="${selected.tone}">
            <h3>Captura</h3>
            <p>${selected.capture.join(", ")}.</p>
          </article>
          <article class="module-card" data-tone="${selected.tone}">
            <h3>Indicadores automaticos</h3>
            <p>${selected.indicators.join(", ")}.</p>
          </article>
          <article class="module-card" data-tone="${selected.tone}">
            <h3>Graficas sugeridas</h3>
            <p>${selected.charts.join(", ")}.</p>
          </article>
        </div>
      </section>
      <section class="blueprint-card wide">
        <h3>Wireframes funcionales</h3>
        <div class="wireframes">
          <div class="wireframe">
            <strong>Computadora</strong>
            <div class="wire-top"></div>
            <div class="wire-body"><div class="wire-side"></div><div class="wire-main"><div class="wire-kpis"><div class="wire-kpi"></div><div class="wire-kpi"></div><div class="wire-kpi"></div><div class="wire-kpi"></div></div><div class="wire-row"></div><div class="wire-row"></div><div class="wire-row"></div></div></div>
          </div>
          <div class="wireframe">
            <strong>Celular</strong>
            <div class="wire-top"></div>
            <div class="wire-main"><div class="wire-row"></div><div class="wire-row"></div><div class="wire-kpi"></div><div class="wire-kpi"></div><div class="wire-row"></div></div>
          </div>
          <div class="wireframe">
            <strong>Formulario</strong>
            <div class="wire-top"></div>
            <div class="wire-main"><div class="wire-row"></div><div class="wire-row"></div><div class="wire-row"></div><div class="wire-row"></div><div class="wire-kpi"></div></div>
          </div>
        </div>
      </section>
    </div>
  `;
}

renderCareers();
render();
loadPlanningCalendarRows().then(() => render());
loadSupabaseSession().then(async () => {
  await loadExecutivePresentationNotes();
  await syncPendingPresentationHistory();
  await loadPresentationHistory();
  render();
});

document.addEventListener("keydown", (event) => {
  if (executivePresentationHistoryViewer) {
    if (event.key === "ArrowRight") {
      executivePresentationHistoryViewerIndex = Math.min(executivePresentationHistoryViewer.slides.length - 1, executivePresentationHistoryViewerIndex + 1);
      render();
    } else if (event.key === "ArrowLeft") {
      executivePresentationHistoryViewerIndex = Math.max(0, executivePresentationHistoryViewerIndex - 1);
      render();
    } else if (event.key === "Escape") {
      closePresentationHistoryLayer("viewer");
    }
    return;
  }
  if (executivePresentationHistoryReuseTarget || executivePresentationHistorySaveOpen) {
    if (event.key === "Escape") closePresentationHistoryLayer(executivePresentationHistoryReuseTarget ? "reuse" : "save");
    return;
  }
  if (!executivePresentationMode) return;
  if (event.key === "ArrowRight") {
    executivePresentationIndex = Math.min(EXECUTIVE_PRESENTATION_SLIDES.length - 1, executivePresentationIndex + 1);
    render();
  } else if (event.key === "ArrowLeft") {
    executivePresentationIndex = Math.max(0, executivePresentationIndex - 1);
    render();
  } else if (event.key === "Escape") {
    executivePresentationMode = false;
    render();
  }
});

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest?.(".segmented button[data-view]");
  if (!viewButton || viewButton.hidden) return;
  event.preventDefault();
  event.stopPropagation();
  activeView = viewButton.dataset.view;
  render();
}, true);

$$(".segmented button").forEach((button) => button.addEventListener("click", () => {
  activeView = button.dataset.view;
  render();
}));

["periodFilter", "levelFilter", "careerFilter", "genderFilter", "globalSearch", "roleSelect"].forEach((id) => {
  $(`#${id}`).addEventListener("input", (event) => {
    if (id === "roleSelect") {
      const user = demoUsers.find((item) => item.id === event.target.value) || demoUsers[0];
      saveSession(user);
      addAudit("cambio_rol", `Cambio a ${user.name}`);
      activeArea = user.role === "direccion" ? "general" : user.area;
      activeView = "dashboard";
    }
    render();
  });
});

$("#themeSelect").addEventListener("input", (event) => {
  activeTheme = event.target.value;
  localStorage.setItem(THEME_KEY, activeTheme);
  addAudit("tema", `Tema visual: ${activeTheme}`);
  applyTheme();
  toast("Tema visual actualizado");
});

$("#exportExcel").addEventListener("click", () => downloadCsv("recsports-export"));
$("#exportPdf").addEventListener("click", () => {
  addAudit("exportacion", `PDF/impresion de ${labelArea(activeArea)}`);
  toast("Abriendo impresion para guardar como PDF");
  setTimeout(() => window.print(), 350);
});

$("#logoutButton").addEventListener("click", () => {
  addAudit("logout", "Sesion cerrada");
  if (currentUser?.auth === "supabase") {
    supabaseClient?.auth.signOut();
    cloudCaptures = [];
    cloudCollaborators = [];
    physicalEvaluations = [];
    physicalEvaluationsLoaded = false;
    classGrades = [];
    classGradesLoaded = false;
    gymAttendanceRecords = [];
    gymManualAttendanceRows = [];
    gymAsistencias = [];
    gymAsistenciasLoadedCount = 0;
    gymStudentRegistrations = [];
    gymDataLoaded = false;
    gymMasterStudent = null;
    vivenciaEvents = [];
    vivenciaEventMetrics = [];
    vivenciaParticipants = [];
    vivenciaParticipantDetailsCount = 0;
    vivenciaParticipantUploads = [];
    vivenciaEventsLoaded = false;
    vivenciaEventsAvailable = true;
    vivenciaEventImportResult = null;
    vivenciaParticipantImportResult = null;
    selectedVivenciaEventForParticipants = "";
    selectedVivenciaEventForDetail = "";
    vivenciaParticipantsModalOpen = false;
    vivenciaEventImagesUploading = false;
    communicationEvents = [];
    communicationEventsLoaded = false;
    communicationEventsAvailable = true;
    communicationDashboardSettings = { impact_goal: 3800 };
    communicationEventImporting = false;
    communicationEventImportResult = null;
    communicationPlanningSyncing = false;
    selectedCommunicationEventForDetail = "";
    communicationParticipants = [];
    communicationParticipantUploads = [];
    communicationParticipantsAvailable = true;
    communicationParticipantImporting = false;
    communicationParticipantImportResult = null;
    selectedCommunicationEventForParticipants = "";
    communicationParticipantsModalOpen = false;
    communicationDiffusionImages = [];
    communicationDiffusionAvailable = true;
    communicationDiffusionLoading = false;
    communicationDiffusionUploadingSlot = "";
    physicalHallOfFameOpen = false;
    physicalHallOfFameTopTest = "";
    physicalHallOfFameGender = "todos";
    classScheduleSimulatorRows = loadClassScheduleSimulatorLocal();
    classScheduleSimulatorCloudReady = false;
    collaboratorsCloudLoaded = false;
    collaboratorColumnOrder = [];
    collaboratorSettingsLoaded = false;
    cloudStatus = "Supabase listo";
  }
  clearSession();
  render();
  toast("Sesion cerrada");
});

document.addEventListener("mock-colab-save", () => {
  addAudit("colaboradores", "Guardado simulado de colaborador");
  toast("Guardado simulado. En produccion actualizara la tabla de colaboradores.");
});

document.addEventListener("mock-config-save", () => {
  addAudit("configuracion", "Guardado simulado de usuario/catalogo");
  toast("Configuracion simulada guardada localmente");
});

loadUniformesData();
loadClassGradeSeedData().then(() => render());
