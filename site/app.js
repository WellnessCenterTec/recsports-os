const areas = [
  {
    id: "general",
    name: "Ejecutivo general",
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
    source: "Repres Lista, Uniformes",
    capture: ["Matrícula", "Deporte", "Rama", "Coach", "Temporada", "Estatus"],
    indicators: ["Atletas activos", "Equipos por deporte", "Distribución por género", "Uniformes pendientes"],
    charts: ["Atletas por deporte", "Rama por equipo", "Estatus de uniforme"],
    reports: ["Roster por coach", "Uniformes por atleta", "Reporte de temporada"]
  },
  {
    id: "gamer",
    name: "Gamer",
    tone: "lav",
    source: "Gamer Lista",
    capture: ["Matrícula", "Actividad gamer", "Torneo", "Fecha", "Estatus"],
    indicators: ["Participantes únicos", "Eventos gamer", "Reincidencia", "Distribución por carrera"],
    charts: ["Participación por torneo", "Perfil académico", "Tendencia mensual"],
    reports: ["Lista de participantes", "Reporte de torneos", "Ranking agregado"]
  },
  {
    id: "colaboradores",
    name: "Colaboradores",
    tone: "blue",
    source: "Uniformes, Pruebas fisicas, Gimnasio, Historial de profesores, layouts AD26 y Verano26",
    capture: ["Nómina", "Colaborador", "Puesto", "Coordinador", "Talla playera", "Talla pants", "Correo", "Cumpleaños", "Género", "Primeros auxilios", "Contacto de emergencia"],
    indicators: ["Colaboradores registrados", "Uniformes por talla", "Cursos completados", "Primeros auxilios", "Asistencia a gimnasio", "Contratos por layout"],
    charts: ["Tallas de playera", "Cursos por coordinador", "Primeros auxilios", "Asistencia a gimnasio", "Costo de contratos"],
    reports: ["Directorio de colaboradores", "Reporte de uniformes", "Pruebas fisicas", "Layouts de contratacion"]
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
const activities = ["clases", "gimnasio", "intramuros", "vivencia", "representativos", "gamer"];
const STORAGE_KEY = "recsports_os_local_captures";
const SCHEDULE_KEY = "recsports_os_class_schedules";
const SIMULATOR_KEY = "recsports_os_schedule_simulator";
const CLASS_SIMULATOR_KEY = "wellsync_spinning_fitness_simulator";
const THEME_KEY = "recsports_os_theme";
const SESSION_KEY = "recsports_os_session";
const AUDIT_KEY = "recsports_os_audit_log";
const UNIFORMES_DATA_URL = "./uniformes-data.json";
const CLASS_GRADES_DATA_URL = "./class-grades-data.json";
const BASE_COLLABORATOR_COLUMNS = [
  "Nomina",
  "Colaboradores",
  "Puesto",
  "Coordinador",
  "% de cursos",
  "Playeras Joma",
  "Talla pants",
  "correo institucional",
  "Genero",
  "Primeros auxilios"
];
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
const dataModelEntities = [
  ["students_minimal", "Alumnos", "Matricula, genero, carrera, semestre, nivel escolar", "Media", "Base de segmentacion permitida"],
  ["participations", "Todos los modulos de alumnos", "Matricula, area, periodo, fecha, estatus, operacion", "Media", "Registro transaccional de participacion"],
  ["classes", "Clases Deportivas", "Disciplina, CRN, grupo, cupo, horario", "Baja", "Oferta academico-deportiva"],
  ["events", "Vivencia / Comunicacion", "Evento, fecha, meta, clasificacion", "Baja", "Eventos y activaciones"],
  ["tournaments", "Intramuros", "Torneo, tipo, rama, periodo, estatus", "Baja", "Competencias internas"],
  ["collaborators", "Colaboradores", "Nomina, nombre, contacto, uniformes, cursos", "Alta", "Informacion completa autorizada"],
  ["collaborator_physical_tests", "Colaboradores", "Pruebas fisicas y asistencia", "Alta", "Seguimiento interno autorizado"],
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
  { id: "dir", name: "Dirección Deportiva", role: "direccion", area: "general", label: "Dirección Deportiva" },
  { id: "coord-clases", name: "Coord. Clases Deportivas", role: "coordinador", area: "clases", label: "Clases Deportivas" },
  { id: "coord-gym", name: "Coord. Gimnasio", role: "coordinador", area: "gimnasio", label: "Gimnasio" },
  { id: "coord-intra", name: "Coord. Intramuros", role: "coordinador", area: "intramuros", label: "Intramuros" },
  { id: "coord-vivencia", name: "Coord. Vivencia", role: "coordinador", area: "vivencia", label: "Vivencia" },
  { id: "coord-com", name: "Coord. Comunicación", role: "coordinador", area: "comunicacion", label: "Comunicación" },
  { id: "coord-rep", name: "Coord. Representativos", role: "coordinador", area: "representativos", label: "Representativos" },
  { id: "coord-gamer", name: "Coord. Gamer", role: "coordinador", area: "gamer", label: "Gamer" },
  { id: "coord-colab", name: "Coord. Colaboradores", role: "coordinador", area: "colaboradores", label: "Colaboradores" },
  { id: "compras", name: "Compras y Presupuesto", role: "compras", area: "compras", label: "Compras y Presupuesto" }
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

let activeArea = "general";
let activeView = "dashboard";
let localCaptures = loadCaptures();
let scheduleState = loadSchedules();
let scheduleFilters = { professor: "todos", day: "todos", discipline: "todos", installation: "todos", mode: "professors", timeDay: "Lunes", time: "09:00", reportProfessor: "todos" };
let simulatorState = loadSimulator();
let simulatorFilters = { selectedId: "", day: "todos", professor: "todos", installation: "todos", availabilityDay: "Lunes", availabilityTime: "09:00", installationView: "todos" };
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
let gymAttendanceRecords = [];
let gymAsistencias = [];
let gymManualAttendanceRows = [];
let gymStudentRegistrations = [];
let gymDataLoaded = false;
let gymAsistenciasLoadedCount = 0;
let gymAttendanceImporting = false;
let gymMasterStudent = null;
let gymWeekSelection = { Wellness: 20, EMIS: 20 };
let gymHeatmapMode = "average";
let gymHeatmapFacility = "Wellness";
let vivenciaEvents = [];
let vivenciaEventMetrics = [];
let vivenciaParticipants = [];
let vivenciaEventsLoaded = false;
let vivenciaEventsAvailable = true;
let vivenciaEventImporting = false;
let vivenciaEventImportResult = null;
let vivenciaParticipantImporting = false;
let vivenciaParticipantImportResult = null;
let selectedVivenciaEventForParticipants = "";
let selectedVivenciaEventForDetail = "";
let classGradePage = 1;
let classGradeFilter = {
  search: "",
  period: "todos",
  teacher: "todos",
  subject: "todos",
  career: "todos",
  status: "todos"
};
let physicalEvaluationFilter = {
  period: "todos",
  stage: "todos",
  discipline: "todos",
  collaborator: "todos",
  gender: "todos",
  classification: "todos",
  test: "cooper_12m"
};
let collaboratorColumnOrder = [];
let collaboratorSettingsLoaded = false;
let photoUploaderOpen = false;
let selectedPhotoNomina = "";
let cloudStatus = supabaseClient ? "Conectando Supabase" : "Demo local";
let uniformesData = {};
let uniformesLoaded = false;
let collaboratorFilter = { coordinator: "todos", shirt: "todos", firstAid: "todos" };
let auditLog = loadAuditLog();

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
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
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

function profileToSession(profile, authUser) {
  const role = profile?.role || "consulta";
  const area = role === "direccion" || role === "admin" ? "general" : (profile?.area_key || "general");
  return {
    id: authUser?.id || profile?.id || "supabase-user",
    name: profile?.display_name || authUser?.email || "Usuario Supabase",
    email: authUser?.email || profile?.email || "",
    role,
    area,
    globalAccess: ["coordinador", "consulta"].includes(role) && !profile?.area_key,
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

function studentDatabaseFromCloud(row) {
  const matricula = row.Matricula || row.matricula || "";
  const nivelRaw = row["Desc Nivel Acad Alumno"] || row.nivel_escolar || row.grado_escolar || "";
  return {
    matricula,
    genero: row.Genero || row.genero || "No especificado",
    carrera: row["Desc Programa Acad"] || row.Carrera || row.carrera || "Sin carrera",
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

async function loadStudentDatabase() {
  if (!supabaseClient || currentUser?.auth !== "supabase") return;
  const { data, error } = await supabaseClient
    .from("Base de datos_alumnos")
    .select("*")
    .order("Matricula", { ascending: true })
    .limit(12000);
  if (error) {
    studentDatabaseLoaded = false;
    console.error(error);
    const detail = supabaseErrorDetail(error);
    toast(`No pude leer Base de datos_alumnos${detail ? `: ${detail}` : ""}`);
    return;
  }
  cloudStudentDatabase = (data || []).map(studentDatabaseFromCloud);
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
  gymDataLoaded = true;
}

function studentFromDatabase(matricula) {
  return cloudStudentDatabase.find((student) => student.matricula === matricula);
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
    const carrera = String(values[columns.programaDesc] || values[columns.carrera] || "").trim();
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
        carrera: row["Desc Programa Acad"] || row.Carrera || "Sin carrera",
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
  const { data, error } = await supabaseClient
    .from("participations")
    .select("id, matricula, area_key, period_key, status, operation_label, metadata, created_at, students_minimal(genero, carrera, semestre, nivel_escolar)")
    .order("created_at", { ascending: false })
    .limit(800);
  if (error) {
    cloudStatus = "Supabase conectado, pendiente permisos";
    toast("No pude leer capturas de Supabase todavia");
    return;
  }
  cloudCaptures = (data || []).map(participationFromCloud);
  cloudStatus = "Supabase conectado";
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
    console.error(error);
    return;
  }
  const [metricsResult, participantsResult] = await Promise.all([
    supabaseClient
      .from("vivencia_event_metrics")
      .select("*")
      .order("event_date", { ascending: false })
      .limit(1500),
    supabaseClient
      .from("vivencia_participant_details")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(12000)
  ]);
  if (metricsResult.error || participantsResult.error) {
    console.warn(metricsResult.error || participantsResult.error);
  }
  vivenciaEventsAvailable = true;
  vivenciaEvents = data || [];
  vivenciaEventMetrics = metricsResult.error ? [] : (metricsResult.data || []);
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
  const matriculaColumn = firstRow.findIndex((header) => ["matricula", "matricula alumno", "matricula participante", "id", "alumno"].includes(header));
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
    vivenciaParticipantImportResult = {
      loaded,
      omitted: parsed.omitted + duplicates,
      warnings: [
        ...parsed.warnings,
        ...(duplicates ? [{ row: 0, message: `${duplicates} matriculas ya estaban cargadas en este evento; se omitieron duplicados` }] : [])
      ],
      source: `${file.name} -> ${eventRow.event_name}`
    };
    addAudit("vivencia", `${loaded} participantes importados para ${eventRow.event_name}`);
    await loadVivenciaEvents();
    toast(`Participantes cargados: ${loaded}`);
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
    selectedVivenciaEventForParticipants = "";
    render();
  }
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

async function loadSupabaseCollaborators() {
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
  cloudCollaborators = (data || []).map(collaboratorFromCloud);
  await loadCollaboratorPhotoUrls();
  collaboratorsCloudLoaded = true;
  await loadCollaboratorTableSettings();
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
    source_name: "CD Lista de Alumnos",
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

async function loadClassGrades() {
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
  if (!classGrades.length) await importInitialClassGrades();
}

function allClassGradeRows() {
  return classGradesLoaded && classGrades.length ? classGrades : classGradeSeedRows;
}

function normalizeClassGrade(value) {
  const normalized = String(value ?? "").trim().toUpperCase().replace(",", ".");
  if (!normalized) return "";
  if (["BAJA", "NP"].includes(normalized)) return normalized;
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
  addAudit("calificacion", `${row.matricula} · ${row.subject_name}: ${grade || "pendiente"}`);
  render();
  toast("Calificación guardada");
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
  const { data, error } = await supabaseClient.storage
    .from("collaborator-photos")
    .createSignedUrls(paths, 60 * 60);
  if (error) {
    console.error(error);
    return;
  }
  const urls = new Map((data || []).map((item) => [item.path, item.signedUrl]));
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

async function updateCollaboratorCell(rowId, column, value) {
  if (!supabaseClient || !canManageStructure()) return;
  const row = cloudCollaborators.find((item) => item.__id === rowId);
  if (!row) {
    toast("No encontré el registro para actualizar");
    return;
  }
  const nextValue = typeof value === "string" ? value.trim() : value;
  if (column === "Nomina" && !nextValue) {
    toast("La nómina no puede quedar vacía");
    render();
    return;
  }
  if (column === "Colaboradores" && !nextValue) {
    toast("El nombre no puede quedar vacío");
    render();
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
    return;
  }
  addAudit("colaboradores", `${column} actualizado para ${payload.nomina}`);
  await loadSupabaseCollaborators();
  render();
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
  if (!supabaseClient || !canManageStructure()) return;
  const row = cloudCollaborators.find((item) => item.__id === rowId);
  if (!row) return;
  if (!window.confirm(`¿Eliminar a ${row.Colaboradores || rowId}? Esta acción se guardará en la base.`)) return;
  const { error } = await supabaseClient.from("collaborators").delete().eq("nomina", rowId);
  if (error) {
    console.error(error);
    toast("No se pudo eliminar el registro");
    return;
  }
  if (row.__photoPath) {
    await supabaseClient.storage.from("collaborator-photos").remove([row.__photoPath]);
  }
  addAudit("colaboradores", `Baja de ${rowId} - ${row.Colaboradores || ""}`);
  await loadSupabaseCollaborators();
  render();
  toast("Registro eliminado y gráficas actualizadas");
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

async function loadSupabaseSession() {
  if (!supabaseClient) return;
  const { data: sessionData } = await supabaseClient.auth.getSession();
  const authUser = sessionData?.session?.user;
  if (!authUser) {
    cloudStatus = "Supabase listo";
    return;
  }
  const { profile, error } = await fetchMyProfile();
  if (error || !profile?.active) {
    cloudStatus = error?.message || "Usuario sin perfil RecSports";
    return;
  }
  saveSession(profileToSession(profile, authUser));
  activeArea = currentUser.role === "direccion" || currentUser.role === "admin" ? "general" : currentUser.area;
  await Promise.all([loadStudentDatabase(), loadSupabaseCaptures(), loadSupabaseCollaborators(), loadPhysicalEvaluations(), loadClassGrades(), loadGymData(), loadClassScheduleSimulatorCloud(), loadVivenciaEvents()]);
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
  await Promise.all([loadStudentDatabase(), loadSupabaseCaptures(), loadSupabaseCollaborators(), loadPhysicalEvaluations(), loadClassGrades(), loadGymData(), loadClassScheduleSimulatorCloud(), loadVivenciaEvents()]);
  render();
  toast(`Sesion Supabase: ${currentUser.name}`);
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
  return areas.filter((area) => area.id === currentUser.area);
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
  return [...BASE_COLLABORATOR_COLUMNS, ...custom];
}

function collaboratorColumns() {
  const known = knownCollaboratorColumns();
  if (!collaboratorColumnOrder.length) return known;
  return collaboratorColumnOrder.filter((column) => known.includes(column));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function collaboratorEditorControl(row, column, editable) {
  const value = row[column] ?? "";
  const disabled = editable ? "" : "disabled";
  const common = `class="collab-cell" data-row-id="${escapeHtml(row.__id || row.Nomina)}" data-column="${escapeHtml(column)}" ${disabled}`;
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
            ${rows.map((row) => `<option value="${escapeHtml(row.__id)}" ${row.__id === selected.__id ? "selected" : ""}>${escapeHtml(row.Colaboradores)} · ${escapeHtml(row.Nomina)}</option>`).join("")}
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
          <button type="button" data-move-column="${escapeHtml(column)}" data-direction="-1" ${index === 0 ? "disabled" : ""} title="Mover a la izquierda" aria-label="Mover ${escapeHtml(column)} a la izquierda">←</button>
          <button type="button" data-move-column="${escapeHtml(column)}" data-direction="1" ${index === columns.length - 1 ? "disabled" : ""} title="Mover a la derecha" aria-label="Mover ${escapeHtml(column)} a la derecha">→</button>
          <button type="button" class="column-delete" data-delete-column="${escapeHtml(column)}" ${protectedColumn ? "disabled" : ""} title="${protectedColumn ? "Campo obligatorio" : "Eliminar columna"}" aria-label="Eliminar columna ${escapeHtml(column)}">×</button>
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
  if (!result) return "—";
  if (result.numeric_value !== null && result.numeric_value !== undefined && result.numeric_value !== "") {
    return `${Number(result.numeric_value).toLocaleString("es-MX", { maximumFractionDigits: 2 })}`;
  }
  if (result.raw_value) return result.raw_value;
  return {
    lesion: "Lesión",
    contraindicacion: "Contraindicación",
    otro: "Otro motivo",
    no_realizada: "No realizada"
  }[result.result_status] || "—";
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
  return `
    ${noData}
    <div class="physical-dashboard-actions">
      <div>
        <p class="eyebrow">WellSync</p>
        <h3>Evaluaciones físicas de colaboradores</h3>
        <p class="hero-copy">Las capturas nuevas se guardan en Supabase; los históricos incompletos permanecen identificados como pendientes.</p>
      </div>
      <div class="table-actions">
        <a class="primary-btn physical-public-link" href="./evaluaciones-fisicas.html" target="_blank" rel="noopener">Abrir formulario público</a>
        <button class="ghost-btn" id="refreshPhysicalEvaluations" type="button">Actualizar datos</button>
      </div>
    </div>
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
    <div class="charts-grid">
      <div class="chart-panel">
        <h3>Resultados históricos disponibles</h3>
        <p class="hero-copy">Cantidad de resultados numéricos conservados por prueba.</p>
        ${comparisonRows.map((row) => `
          <div class="bar-row">
            <span>${PHYSICAL_TEST_LABELS[row.testKey]}</span>
            <div class="bar-track"><div class="bar-fill" style="width:${Math.round(row.stats.count / coverageMax * 100)}%"></div></div>
            <strong>${row.stats.count}</strong>
          </div>
        `).join("")}
      </div>
      <div class="chart-panel">
        <h3>Evolución: ${PHYSICAL_TEST_LABELS[selectedTest]}</h3>
        <p class="hero-copy">Promedio por fecha en ${PHYSICAL_TEST_UNITS[selectedTest]}.</p>
        <div class="physical-timeline">
          ${timeline.map((item) => `
            <div class="physical-timeline-row">
              <span>${new Date(`${item.date}T12:00:00`).toLocaleDateString("es-MX", { year: "2-digit", month: "short" })}</span>
              <div class="bar-track"><div class="bar-fill physical-stage-bar" style="width:${Math.max(3, Math.round(item.average / timelineMax * 100))}%"></div></div>
              <strong>${item.average.toFixed(1)}</strong>
            </div>
          `).join("") || "<p class='hero-copy'>Esta prueba todavía no tiene valores numéricos clasificables.</p>"}
        </div>
      </div>
    </div>
    <div class="table-wrap physical-comparison-table">
      <table>
        <thead><tr><th>Prueba</th><th>Promedio histórico</th><th>Mínimo</th><th>Máximo</th><th>Resultados</th><th>Inicial</th><th>Final</th></tr></thead>
        <tbody>
          ${comparisonRows.map((row) => `
            <tr>
              <td>${PHYSICAL_TEST_LABELS[row.testKey]} <small>${PHYSICAL_TEST_UNITS[row.testKey]}</small></td>
              <td><strong>${row.stats.average === null ? "Sin datos" : row.stats.average.toFixed(1)}</strong></td>
              <td>${row.stats.min === null ? "—" : row.stats.min.toFixed(1)}</td>
              <td>${row.stats.max === null ? "—" : row.stats.max.toFixed(1)}</td>
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
    comunicacion: "megaphone",
    representativos: "medal",
    gamer: "gamepad-2",
    colaboradores: "users",
    compras: "wallet-cards",
    configuracion: "settings"
  };
  if (!allowed.some((area) => area.id === activeArea)) {
    activeArea = currentUser?.area || "general";
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
  $$(".nav-item").forEach((button) => button.addEventListener("click", () => {
    activeArea = button.dataset.area;
    activeView = "dashboard";
    render();
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
        week_number: gymSemesterWeekFromDate(row.fecha, startDate),
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
  const max = Math.max(1, ...rows.map((row) => Number(row.value) || 0));
  return rows.map((row) => {
    const value = Number(row.value) || 0;
    const height = Math.max(value ? 10 : 2, Math.round(value / max * 100));
    return `
      <div class="gym-column-item">
        <strong>${value.toLocaleString("es-MX", { maximumFractionDigits: 0 })}</strong>
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

function gymHeatmapRows(facility = gymHeatmapFacility, mode = gymHeatmapMode) {
  const matrix = {};
  const dateCountsByDay = GYM_DAYS.reduce((acc, day) => {
    acc[day] = new Set();
    return acc;
  }, {});
  gymAsistencias.filter((row) => normalizeGymSite(row.sitio) === facility).forEach((row) => {
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
  const rows = gymHeatmapRows(gymHeatmapFacility, gymHeatmapMode);
  const max = Math.max(1, ...rows.flatMap((row) => Object.values(row.values)));
  const totalTimedVisits = gymAsistencias
    .filter((row) => normalizeGymSite(row.sitio) === gymHeatmapFacility && gymHeatmapHour(row.hora))
    .length;
  const valueLabel = gymHeatmapMode === "average" ? "promedio por día equivalente" : "visitas acumuladas";
  const modeLabel = gymHeatmapMode === "average" ? "Promedio activo" : "Total acumulado activo";
  const formatHeatmapValue = (value) => gymHeatmapMode === "average"
    ? value.toLocaleString("es-MX", { maximumFractionDigits: 1 })
    : value.toLocaleString("es-MX", { maximumFractionDigits: 0 });
  const controls = `
    <div class="gym-heatmap-controls">
      <div class="gym-heatmap-control-group">
        <span>Instalaci&oacute;n</span>
        <div class="segmented small" aria-label="Instalacion del mapa de calor">
          ${["Wellness", "EMIS"].map((facility) => `<button type="button" class="${gymHeatmapFacility === facility ? "active" : ""}" data-gym-heatmap-facility="${facility}">${facility}</button>`).join("")}
        </div>
      </div>
      <label>C&aacute;lculo
        <select id="gymHeatmapMode" aria-label="Calculo del mapa de calor">
          <option value="average" ${gymHeatmapMode === "average" ? "selected" : ""}>Promedio</option>
          <option value="total" ${gymHeatmapMode === "total" ? "selected" : ""}>Total acumulado</option>
        </select>
      </label>
    </div>
  `;
  if (!rows.length) {
    return `${controls}<p class="form-message">Aun no hay asistencias historicas con hora para ${gymHeatmapFacility}. Sube el CSV de asistencias con la columna hora.</p>`;
  }
  return `
    ${controls}
    <div class="gym-heatmap-legend" aria-label="Escala de ocupacion">
      <span><i class="low"></i>Baja</span>
      <span><i class="medium"></i>Media</span>
      <span><i class="high"></i>Alta</span>
      <strong>${totalTimedVisits.toLocaleString("es-MX")} visitas con hora · ${modeLabel}</strong>
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

function gymWeeklyRows(facility) {
  const lastWeek = gymWeekSelection[facility] || gymMaxWeek();
  return Array.from({ length: lastWeek }, (_, index) => {
    const week = index + 1;
    const value = gymAttendanceRecords
      .filter((row) => row.facility === facility && Number(row.week_number) === week)
      .reduce((sum, row) => sum + Number(row.attendee_count || 0), 0);
    return { label: `S${week}`, value };
  });
}

function renderGymDashboard() {
  const dailyRows = GYM_DAYS.map((day) => {
    const records = gymAttendanceRecords.filter((row) => row.day_of_week === day);
    const total = records.reduce((sum, row) => sum + Number(row.attendee_count || 0), 0);
    return { label: day, value: records.length ? total / records.length : 0 };
  });
  const emptyMessage = !gymDataLoaded
    ? `<p class="form-message">Activa las tablas de Gimnasio en Supabase para comenzar.</p>`
    : !gymAttendanceRecords.length
      ? `<p class="form-message">Aún no hay asistencias. Captura el primer registro para alimentar las gráficas.</p>`
      : "";
  return `
    <div class="gym-dashboard">
      <section class="chart-panel gym-daily-chart">
        <div class="gym-chart-heading">
          <div><p class="eyebrow">Asistencia</p><h3>Promedio diario</h3></div>
          <span>Promedio de asistentes registrados</span>
        </div>
        ${emptyMessage}
        <div class="gym-bars">${gymBarRows(dailyRows)}</div>
      </section>
      ${["Wellness", "EMIS"].map((facility) => `
        <section class="chart-panel gym-week-chart">
          <div class="gym-chart-heading">
            <div><p class="eyebrow">${facility}</p><h3>Asistencia semanal</h3></div>
            <select class="gym-week-filter" data-facility="${facility}" aria-label="Semanas visibles de ${facility}">
              ${gymWeekOptions(gymWeekSelection[facility])}
            </select>
          </div>
          <div class="gym-week-columns">${gymColumnBars(gymWeeklyRows(facility))}</div>
        </section>
      `).join("")}
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

function renderDashboard(area) {
  if (area.id === "colaboradores") return renderCollaboratorsDashboard();
  if (area.id === "configuracion") return renderConfigurationDashboard();
  if (area.id === "gimnasio") return renderGymDashboard();
  if (area.id === "clases") return renderClassesDashboard();
  if (area.id === "vivencia") return renderVivenciaDashboard();
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

function renderClassesDashboard() {
  return `
    <section class="permission-strip">
      <div>
        <p class="eyebrow">Clases Deportivas</p>
        <strong>Indicadores específicos del área</strong>
        <p class="hero-copy">Este espacio queda preparado exclusivamente para gráficas de programación, inscripción, acreditación, ocupación y desempeño de clases.</p>
      </div>
    </section>
    ${renderClassTeacherPerformance()}
  `;
}

function renderClassDisciplineIndicators() {
  return `
    <section class="class-indicators-panel">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">CD Indicadores clases</p>
          <h2>Indicadores por disciplina y periodo</h2>
        </div>
        <span class="session-pill">PMT1 + PMT2</span>
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
            </tr>
          </thead>
          <tbody>
            ${classDisciplineIndicators.map((row) => `
              <tr class="${row.period === "PMT2" ? "period-two" : "period-one"} ${row.total ? "period-total" : ""}">
                <td>${row.discipline}</td>
                <td>${row.banner}</td>
                <td>${row.bajas}</td>
                <td>${row.np}</td>
                <td>${row.finished}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderClassTeacherPerformance() {
  const totals = classTeacherPerformance.reduce((acc, row) => {
    acc.total += row.total;
    acc.approved += row.approved;
    acc.failed += row.failed;
    return acc;
  }, { total: 0, approved: 0, failed: 0 });
  const approvedRate = totals.total ? Math.round((totals.approved / totals.total) * 100) : 0;
  const failedRate = totals.total ? 100 - approvedRate : 0;
  return `
    <section class="teacher-performance">
      <div class="section-title compact">
        <div>
          <p class="eyebrow">CD Lista de Alumnos</p>
          <h2>Profesores por % de aprobados y reprobados</h2>
        </div>
        <span class="session-pill">${classTeacherPerformance.length} profesores · ${totals.total} registros</span>
      </div>
      <div class="teacher-summary">
        <div><strong>${approvedRate}%</strong><span>Aprobados global</span></div>
        <div><strong>${failedRate}%</strong><span>Reprobados / bajas</span></div>
        <div><strong>${totals.approved}</strong><span>Aprobados</span></div>
        <div><strong>${totals.failed}</strong><span>Reprobados</span></div>
      </div>
      <div class="teacher-list">
        ${classTeacherPerformance.map((row) => `
          <article class="teacher-row">
            <div class="teacher-meta">
              <strong>${row.teacher}</strong>
              <span>${row.total} alumnos · ${row.approved} aprobados · ${row.failed} reprobados/bajas</span>
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
    </section>
  `;
}

function classGradeStatus(row) {
  const value = String(row.grade || "").trim().toUpperCase();
  if (!value) return "pendiente";
  if (value === "BAJA") return "baja";
  if (value === "NP") return "np";
  return "capturada";
}

function vivenciaMetricParticipants(row) {
  return Number(row.unique_participants || row.participant_records || row.reported_total_participants || 0);
}

function vivenciaEventParticipants(eventId) {
  return vivenciaParticipants.filter((participant) => participant.event_id === eventId);
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
            <span>${escapeHtml(event.responsible_name || "Responsable pendiente")} · Meta ${event.participation_goal ?? "sin meta"}</span>
          </div>
          <em>${event.is_signature_event ? "Insignia" : escapeHtml(event.status || "planeado")}</em>
        </article>
      `).join("")}
    </div>
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
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const inFifteen = new Date(today);
  inFifteen.setDate(today.getDate() + 15);
  const realized = vivenciaEventMetrics.filter((row) => row.status === "realizado" || new Date(`${row.event_date}T12:00:00`) <= today);
  const upcoming = vivenciaEvents
    .filter((event) => {
      const date = new Date(`${event.event_date}T12:00:00`);
      return !Number.isNaN(date.getTime()) && date >= today && date <= inFifteen;
    })
    .sort((a, b) => String(a.event_date).localeCompare(String(b.event_date)));
  const uniqueMatriculas = new Set(vivenciaParticipants.map((participant) => normalizeMatricula(participant.matricula)).filter(Boolean));
  const participantTotal = vivenciaEventMetrics.reduce((sum, row) => sum + vivenciaMetricParticipants(row), 0);
  const studentBaseTotal = cloudStudentDatabase.length || uniqueMatriculas.size || 1;
  const impact = Math.round((uniqueMatriculas.size / studentBaseTotal) * 100);
  const eventRows = vivenciaEventMetrics
    .map((row) => ({ label: row.event_name || "Evento sin nombre", value: vivenciaMetricParticipants(row) }))
    .filter((row) => row.value > 0)
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);
  const goalRows = vivenciaEventMetrics
    .filter((row) => Number(row.participation_goal || 0) > 0)
    .map((row) => ({ label: row.event_name || "Evento sin nombre", goal: Number(row.participation_goal || 0), result: vivenciaMetricParticipants(row) }))
    .sort((a, b) => b.result - a.result)
    .slice(0, 8);
  const monthRowsMap = new Map();
  vivenciaEventMetrics.forEach((row) => {
    const key = vivenciaMonthLabel(row.event_date);
    monthRowsMap.set(key, (monthRowsMap.get(key) || 0) + vivenciaMetricParticipants(row));
  });
  const monthRows = [...monthRowsMap.entries()].map(([label, value]) => ({ label, value }));
  const careerRows = groupVivenciaParticipants("carrera").slice(0, 10);
  const genderRows = groupVivenciaParticipants("genero").slice(0, 8);
  return `
    <section class="vivencia-dashboard">
      <div class="permission-strip">
        <span>Dashboard conectado a Supabase: eventos + matriculas por evento + Base de datos_alumnos.</span>
        <span>${vivenciaEvents.length} eventos · ${uniqueMatriculas.size} participantes unicos</span>
      </div>
      <div class="kpi-grid">
        <div class="kpi"><span>Eventos realizados</span><strong>${realized.length}</strong><em>realizados o con fecha vencida</em></div>
        <div class="kpi"><span>Participantes acumulados</span><strong>${participantTotal}</strong><em>por evento</em></div>
        <div class="kpi"><span>Participantes unicos</span><strong>${uniqueMatriculas.size}</strong><em>por matricula</em></div>
        <div class="kpi"><span>% impacto alumnado</span><strong>${impact}%</strong><em>vs Base Maestra</em></div>
        <div class="kpi"><span>Proximos 15 dias</span><strong>${upcoming.length}</strong><em>eventos calendarizados</em></div>
        <div class="kpi"><span>Eventos insignia</span><strong>${realized.filter((row) => row.is_signature_event).length}</strong><em>realizados</em></div>
      </div>
      <div class="charts-grid vivencia-dashboard-grid">
        <article class="chart-panel">
          <h3>Participacion por evento</h3>
          ${renderVivenciaBars(eventRows)}
        </article>
        <article class="chart-panel">
          <h3>Meta vs resultado</h3>
          ${renderVivenciaGoalBars(goalRows)}
        </article>
        <article class="chart-panel">
          <h3>Participacion por carrera</h3>
          ${renderVivenciaBars(careerRows, { total: uniqueMatriculas.size })}
        </article>
        <article class="chart-panel">
          <h3>Participacion por genero</h3>
          ${renderVivenciaBars(genderRows, { total: uniqueMatriculas.size, compact: true })}
        </article>
        <article class="chart-panel">
          <h3>Top eventos con mayor impacto</h3>
          ${renderVivenciaBars(eventRows.slice(0, 6), { compact: true })}
        </article>
        <article class="chart-panel">
          <h3>Participacion por mes</h3>
          ${renderVivenciaBars(monthRows)}
        </article>
        <article class="chart-panel vivencia-upcoming-panel">
          <div class="chart-title-row">
            <div>
              <p class="eyebrow">Calendario</p>
              <h3>Proximos eventos</h3>
            </div>
            <span>15 dias</span>
          </div>
          ${renderVivenciaUpcoming(upcoming)}
        </article>
      </div>
    </section>
  `;
}

function filteredClassGrades() {
  const search = classGradeFilter.search.trim().toLowerCase();
  return allClassGradeRows()
    .filter((row) => classGradeFilter.period === "todos" || row.period_label === classGradeFilter.period)
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
  return [...new Set(allClassGradeRows().map((row) => row[key]).filter(Boolean))]
    .sort((a, b) => String(a).localeCompare(String(b), "es"));
}

function renderClassGrades() {
  const rows = filteredClassGrades();
  const totalRows = allClassGradeRows();
  const pageSize = 100;
  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));
  classGradePage = Math.min(classGradePage, pageCount);
  const pageRows = rows.slice((classGradePage - 1) * pageSize, classGradePage * pageSize);
  const captured = totalRows.filter((row) => classGradeStatus(row) === "capturada").length;
  const bajas = totalRows.filter((row) => classGradeStatus(row) === "baja").length;
  const pending = totalRows.filter((row) => classGradeStatus(row) === "pendiente").length;
  const editable = currentUser?.auth === "supabase" && canEditArea("clases") && classGradesAvailable;
  const periods = classGradeOptions("period_label");
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
        <button class="ghost-btn" type="button" id="exportClassGrades">Exportar Excel</button>
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
        <label>Periodo
          <select class="class-grade-filter" data-filter="period">
            <option value="todos">Todos</option>
            ${periods.map((value) => `<option value="${escapeHtml(value)}" ${classGradeFilter.period === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
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
              <th>Periodo</th>
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
                <td>${escapeHtml(row.period_label)}</td>
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
        <button type="button" class="ghost-btn" data-grade-page="${classGradePage - 1}" ${classGradePage <= 1 ? "disabled" : ""} aria-label="Página anterior">←</button>
        <span>Página ${classGradePage} de ${pageCount}</span>
        <button type="button" class="ghost-btn" data-grade-page="${classGradePage + 1}" ${classGradePage >= pageCount ? "disabled" : ""} aria-label="Página siguiente">→</button>
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

function renderConfigurationDashboard() {
  const systemCatalogs = getSystemCatalogs();
  return `
    <div class="permission-strip">Panel exclusivo para Direccion Deportiva y administracion del sistema.</div>
    <div class="kpi-grid">
      <div class="kpi"><span>Usuarios demo</span><strong>${demoUsers.length}</strong><em>perfiles base</em></div>
      <div class="kpi"><span>Modulos</span><strong>${areas.length - 1}</strong><em>areas operativas</em></div>
      <div class="kpi"><span>Fuentes</span><strong>2</strong><em>Indicadores + Uniformes</em></div>
      <div class="kpi"><span>Privacidad</span><strong>Activa</strong><em>politica por modulo</em></div>
    </div>
    <div class="blueprint-grid">
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
            <p>Importacion completa autorizada para Colaboradores: uniformes, pruebas fisicas, contactos, layouts y gimnasio.</p>
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
      <div class="chart-panel">
        <h3>Operacion del modulo</h3>
        <div class="donut" data-label="${metrics.physicalTests} pruebas"></div>
        <p class="hero-copy">Incluye pruebas fisicas, asistencia a gimnasio, historial de profesores, contactos de emergencia y layouts de contratacion.</p>
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
              <td class="row-actions-cell"><button class="delete-row-btn" data-delete-row="${escapeHtml(row.__id || row.Nomina)}" type="button" ${directEdit ? "" : "disabled"} title="Eliminar fila">×</button></td>
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
  return `
    <div class="vivencia-import-summary ${result.blocked ? "blocked" : ""}">
      <div>
        <strong>${escapeHtml(result.source)}</strong>
        <span>${result.blocked ? "Carga detenida por errores obligatorios" : "Carga procesada correctamente"}</span>
      </div>
      <div class="vivencia-import-counts">
        <span><strong>${result.loaded}</strong> cargados</span>
        <span><strong>${result.omitted}</strong> omitidos</span>
        <span><strong>${result.warnings.length}</strong> advertencias</span>
      </div>
      ${result.warnings.length ? `
        <details>
          <summary>Ver detalle</summary>
          ${result.warnings.slice(0, 12).map((warning) => `<p>${warning.row ? `Fila ${warning.row}: ` : ""}${escapeHtml(warning.message)}</p>`).join("")}
        </details>
      ` : ""}
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
            <th>Fuente</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${vivenciaEvents.map((row) => {
            const metrics = metricsByEvent.get(row.id);
            const calculated = vivenciaMetricParticipants(metrics || row);
            return `
              <tr>
                <td>${escapeHtml(row.event_date || "")}</td>
                <td>
                  <strong>${escapeHtml(row.event_name || "")}</strong>
                  ${row.discipline ? `<span>${escapeHtml(row.discipline)}</span>` : ""}
                  ${row.is_signature_event ? `<em>Evento insignia</em>` : ""}
                </td>
                <td>${escapeHtml(row.campus || "")}</td>
                <td>${escapeHtml(row.classification || "Sin clasificar")}</td>
                <td>${row.participation_goal ?? "Sin meta"}</td>
                <td>
                  <strong>${calculated}</strong>
                  <span>${Number(metrics?.unique_participants || 0) ? "por matriculas" : "reportados"}</span>
                </td>
                <td>${escapeHtml(row.responsible_name || "Sin asignar")}</td>
                <td><span class="vivencia-status ${escapeHtml(row.status || "planeado")}">${escapeHtml(row.status || "planeado")}</span></td>
                <td>${escapeHtml(row.source_name === "captura_manual" ? "Captura manual" : row.source_name || "Sin fuente")}</td>
                <td>
                  <button class="ghost-btn compact-action" data-vivencia-detail="${escapeHtml(row.id)}" ${editable ? "" : "disabled"}>Detalle</button>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
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
          <div class="vivencia-bulk-upload">
            <div>
              <strong>Carga masiva de eventos</strong>
              <span>Acepta CSV, XLSX o XLS. Requiere Nombre del evento y Fecha del evento. Si no trae campus, se guarda como Monterrey.</span>
            </div>
            <button class="ghost-btn" id="uploadVivenciaEvents" type="button" ${editable && !vivenciaEventImporting ? "" : "disabled"}>
              ${vivenciaEventImporting ? "Procesando archivo..." : "Cargar CSV o Excel"}
            </button>
            <input id="vivenciaEventsFile" type="file" accept=".csv,.xlsx,.xls" hidden />
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
      <span>${rows.length} eventos PMT1 · ${conflicts.length} conflictos</span>
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
      <label class="file-button">
        Subir archivo maestro
        <input type="file" accept=".xlsx,.xls" data-schedule-upload="master" />
      </label>
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
        <p class="eyebrow">Respaldo manual · ${sourceLabel}</p>
        <h3>${title}</h3>
        <p>Usar solo si el archivo maestro no trae esta hoja o si se quiere actualizar esta fuente manualmente.</p>
      </div>
      <label class="file-button">
        ${title}
        <input type="file" accept=".xlsx,.xls,.csv" data-schedule-upload="${type}" />
      </label>
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
        <span class="session-pill">Solido = oficial · Transparente = booking</span>
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
            <em>${conflict.a.installation} · ${conflict.b.installation}</em>
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
        <span class="session-pill">${rows.length} clases planeadas · ${classScheduleSimulatorCloudReady ? "Supabase activo" : "respaldo local"}</span>
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
      ${teacherConflict ? `<span class="class-simulator-conflict-badge" title="Empalme de profesor">⚠ Empalme de profesor</span>` : ""}
      <strong>${escapeHtml(row.discipline)}</strong>
      ${row.teacher_name ? `<span>${escapeHtml(row.teacher_name)}</span>` : ""}
      <em>${classSimulatorTimeLabel(row.start_time)} - ${classSimulatorTimeLabel(row.end_time)}</em>
      <div class="class-simulator-class-actions">
        <button type="button" data-delete-class-simulator="${row.id}">Eliminar</button>
      </div>
    </div>
  `;
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
  const area = areas.find((a) => a.id === activeArea);
  renderNav();
  renderExecutiveKpis();
  renderSystemMap();
  $("#currentTitle").textContent = area.name;
  const evaluationsTab = $("#evaluationsViewButton");
  const gradesTab = $("#gradesViewButton");
  const simulatorTab = $("#simulatorViewButton");
  const gymAttendanceTab = $("#gymAttendanceViewButton");
  const gymRegistrationsTab = $("#gymRegistrationsViewButton");
  const vivenciaEventsTab = $("#vivenciaEventsViewButton");
  const systemTab = $(`.segmented button[data-view="blueprint"]`);
  const isGym = activeArea === "gimnasio";
  const isVivencia = activeArea === "vivencia";
  if (evaluationsTab) evaluationsTab.hidden = activeArea !== "colaboradores";
  if (gradesTab) gradesTab.hidden = activeArea !== "clases";
  if (simulatorTab) simulatorTab.hidden = activeArea !== "clases";
  if (gymAttendanceTab) gymAttendanceTab.hidden = !isGym;
  if (gymRegistrationsTab) gymRegistrationsTab.hidden = !isGym;
  if (vivenciaEventsTab) vivenciaEventsTab.hidden = !isVivencia;
  $$(`.segmented button[data-view="schedules"], .segmented button[data-view="reports"]`)
    .forEach((button) => { button.hidden = isGym; });
  if (systemTab) systemTab.hidden = isGym || !isLeadership();
  const filtersBand = $(".filters-band");
  if (filtersBand) filtersBand.hidden = isGym;
  if (isGym && !["dashboard", "gym-attendance", "gym-registrations"].includes(activeView)) activeView = "dashboard";
  if (!isGym && ["gym-attendance", "gym-registrations"].includes(activeView)) activeView = "dashboard";
  if (!isVivencia && activeView === "vivencia-events") activeView = "dashboard";
  if (activeView === "blueprint" && !isLeadership()) activeView = "dashboard";
  if (activeView === "evaluations" && activeArea !== "colaboradores") activeView = "dashboard";
  if (activeView === "grades" && activeArea !== "clases") activeView = "dashboard";
  if (activeView === "simulator" && activeArea !== "clases") activeView = "dashboard";
  $$(".segmented button").forEach((b) => b.classList.toggle("active", b.dataset.view === activeView));
  $("#contentArea").innerHTML = activeView === "dashboard"
    ? renderDashboard(area)
    : activeView === "capture"
      ? renderCapture(area)
      : activeView === "gym-attendance"
        ? renderGymAttendanceRegistration()
        : activeView === "gym-registrations"
          ? renderGymStudentRegistration()
          : activeView === "vivencia-events"
            ? renderVivenciaEventsView()
      : activeView === "schedules"
        ? renderSchedules(area)
        : activeView === "simulator"
          ? renderScheduleSimulatorView()
        : activeView === "reports"
          ? renderReports(area)
          : activeView === "grades"
            ? renderClassGrades()
            : activeView === "evaluations"
              ? renderPhysicalEvaluationsDashboard()
              : renderBlueprint(area);
  $$("[data-jump]").forEach((button) => button.addEventListener("click", () => {
    activeArea = button.dataset.jump;
    activeView = "dashboard";
    render();
  }));
  $("#saveMock")?.addEventListener("click", saveCaptureFromForm);
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
  $("#vivenciaEventForm")?.addEventListener("submit", saveVivenciaEvent);
  $("#newVivenciaEvent")?.addEventListener("click", () => {
    selectedVivenciaEventForDetail = "";
    render();
  });
  $("#uploadVivenciaEvents")?.addEventListener("click", () => $("#vivenciaEventsFile")?.click());
  $("#vivenciaEventsFile")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await importVivenciaEvents(file);
    event.target.value = "";
  });
  $$("[data-vivencia-participants]").forEach((button) => button.addEventListener("click", () => {
    selectedVivenciaEventForParticipants = button.dataset.vivenciaParticipants;
    $("#vivenciaParticipantsFile")?.click();
  }));
  $$("[data-vivencia-detail]").forEach((button) => button.addEventListener("click", () => {
    selectedVivenciaEventForDetail = button.dataset.vivenciaDetail;
    render();
  }));
  $("#vivenciaParticipantsFile")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file || !selectedVivenciaEventForParticipants) return;
    await importVivenciaParticipants(file, selectedVivenciaEventForParticipants);
    event.target.value = "";
  });
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
  $$("[data-gym-heatmap-facility]").forEach((button) => button.addEventListener("click", () => {
    gymHeatmapFacility = button.dataset.gymHeatmapFacility;
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
  $$(".collab-filter").forEach((select) => select.addEventListener("input", (event) => {
    collaboratorFilter[event.target.dataset.filter] = event.target.value;
    render();
  }));
  $$(".collab-cell").forEach((control) => control.addEventListener("change", (event) => {
    updateCollaboratorCell(event.target.dataset.rowId, event.target.dataset.column, event.target.value);
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
    await loadPhysicalEvaluations();
    render();
    toast("Evaluaciones actualizadas");
  });
  $("#savePhysicalAccessCode")?.addEventListener("click", changePhysicalAccessCode);
  $("#exportPhysicalEvaluations")?.addEventListener("click", () => downloadPhysicalEvaluationsCsv());
  $$(".class-grade-filter").forEach((control) => control.addEventListener("change", (event) => {
    classGradeFilter[event.target.dataset.filter] = event.target.value;
    classGradePage = 1;
    render();
  }));
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
  activeView = "dashboard";
  render();
  toast("Asistencia guardada y gráficas actualizadas");
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
    "profesor", "carrera", "semestre", "periodo", "calificacion"
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
      row.grade
    ].map(csvEscape).join(","))
  ].join("\n");
  downloadBlob(csv, `calificaciones-clases-${new Date().toISOString().slice(0, 10)}.csv`);
  addAudit("exportacion", "Registro de calificaciones de Clases Deportivas");
  toast("Calificaciones exportadas");
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
  return `
    <div class="blueprint-grid">
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
loadSupabaseSession().then(() => render());

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
    vivenciaEventsLoaded = false;
    vivenciaEventsAvailable = true;
    vivenciaEventImportResult = null;
    vivenciaParticipantImportResult = null;
    selectedVivenciaEventForParticipants = "";
    selectedVivenciaEventForDetail = "";
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
