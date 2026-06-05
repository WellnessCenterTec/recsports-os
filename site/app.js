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
const THEME_KEY = "recsports_os_theme";
const SESSION_KEY = "recsports_os_session";
const AUDIT_KEY = "recsports_os_audit_log";
const UNIFORMES_DATA_URL = "./uniformes-data.json";
const SUPABASE_ENV = window.RECSPORTS_ENV || {};
const supabaseClient = window.supabase && SUPABASE_ENV.SUPABASE_URL && SUPABASE_ENV.SUPABASE_ANON_KEY
  ? window.supabase.createClient(SUPABASE_ENV.SUPABASE_URL, SUPABASE_ENV.SUPABASE_ANON_KEY)
  : null;
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

let activeArea = "general";
let activeView = "dashboard";
let localCaptures = loadCaptures();
let activeTheme = localStorage.getItem(THEME_KEY) || "tec";
let currentUser = loadSession();
let cloudCaptures = [];
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
  await loadSupabaseCaptures();
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
    setFeedback(`El usuario existe, pero falta permiso en RecSports OS. Detalle: ${profileError?.message || "perfil no activo"}`, "error");
    toast("El usuario existe, pero falta permiso en RecSports OS");
    return;
  }
  saveSession(profileToSession(profile, authUser));
  addAudit("login", `Ingreso Supabase como ${currentUser.name}`);
  activeArea = currentUser.role === "direccion" || currentUser.role === "admin" ? "general" : currentUser.area;
  activeView = "dashboard";
  await loadSupabaseCaptures();
  render();
  toast(`Sesion Supabase: ${currentUser.name}`);
}

async function saveCaptureToSupabase(row) {
  if (!supabaseClient || currentUser?.auth !== "supabase") return false;
  const studentPayload = {
    matricula: row.matricula,
    genero: row.genero,
    carrera: row.carrera,
    semestre: row.semestre,
    nivel_escolar: row.nivel
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
  if (currentUser.role === "compras") return areas.filter((area) => area.id === "compras");
  return areas.filter((area) => area.id === currentUser.area);
}

function canEditArea(areaId) {
  if (!currentUser) return false;
  if (["admin", "direccion"].includes(currentUser.role)) return true;
  if (currentUser.role === "compras") return areaId === "compras";
  return currentUser.area === areaId;
}

function allParticipationRows() {
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

function genderLabel(row) {
  const value = String(row["Genero"] || row["Género"] || "").trim().toLowerCase();
  if (value.startsWith("muj")) return "Mujer";
  if (value.startsWith("hom")) return "Hombre";
  return "Sin dato";
}

function shirtSizeByGender(rows) {
  const order = ["XS", "S", "M", "L", "XL", "XXL"];
  const bySize = rows.reduce((acc, row) => {
    const size = row["Playeras Joma"] || "Sin dato";
    const gender = genderLabel(row);
    if (!acc[size]) acc[size] = { label: size, Mujer: 0, Hombre: 0, "Sin dato": 0, total: 0 };
    acc[size][gender] += 1;
    acc[size].total += 1;
    return acc;
  }, {});
  return Object.values(bySize).sort((a, b) => {
    if (b.total !== a.total) return b.total - a.total;
    return order.indexOf(a.label) - order.indexOf(b.label);
  });
}

function collaboratorRows() {
  return recordsFor("Uniformes");
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
  if (!allowed.some((area) => area.id === activeArea)) {
    activeArea = currentUser?.area || "general";
  }
  $("#areaNav").innerHTML = allowed.map((area) => `
    <button class="nav-item ${area.id === activeArea ? "active" : ""}" data-area="${area.id}">
      <span>${area.name}</span>
      <small>${area.id === "general" ? "Dir." : "Área"}</small>
    </button>
  `).join("");
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
      <section class="login-card" aria-label="Acceso RecSports OS">
        <div class="login-visual">
          <div>
            <div class="brand-mark">RS</div>
            <p class="eyebrow" style="color:#f0b323">Piloto web</p>
            <h1>RecSports OS</h1>
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

function renderDashboard(area) {
  if (area.id === "colaboradores") return renderCollaboratorsDashboard();
  if (area.id === "configuracion") return renderConfigurationDashboard();
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
  const classTeachersMarkup = area.id === "clases" ? renderClassTeacherPerformance() : "";
  const classIndicatorsMarkup = area.id === "clases" ? renderClassDisciplineIndicators() : "";
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
    </div>
    ${classIndicatorsMarkup}
    ${classTeachersMarkup}
    <div class="module-grid">${moduleCards}</div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Matrícula</th><th>Género</th><th>Carrera</th><th>Semestre</th><th>Nivel</th><th>Área</th><th>Registros</th></tr></thead>
        <tbody>${data.slice(0, 14).map((s) => `<tr><td>${s.matricula}</td><td>${s.genero}</td><td>${s.carrera}</td><td>${s.semestre}</td><td>${s.nivel}</td><td>${labelArea(s.area)}</td><td>${s.registros}</td></tr>`).join("")}</tbody>
      </table>
    </div>
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
  const shirtSizes = countBy(rows, "Playeras Joma");
  const shirtGenderRows = shirtSizeByGender(rows);
  const pantSizes = countBy(rows, "Talla pants");
  const coordinators = countBy(rows, "Coordinador");
  const allRows = collaboratorRows();
  const coordinatorOptions = [...new Set(allRows.map((row) => row["Coordinador"]).filter(Boolean))].sort();
  const shirtOptions = [...new Set(allRows.map((row) => row["Playeras Joma"]).filter(Boolean))].sort();
  const maxSize = Math.max(...shirtGenderRows.map((row) => row.total), 1);
  const maxCoord = Math.max(...Object.values(coordinators), 1);
  return `
    <div class="permission-strip">Este modulo usa la informacion completa autorizada del archivo Uniformes de Equipo RecSports 26.xlsx.</div>
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
    <div class="kpi-grid">
      <div class="kpi"><span>Colaboradores</span><strong>${metrics.collaborators}</strong><em>registros de uniformes</em></div>
      <div class="kpi"><span>Primeros auxilios</span><strong>${metrics.firstAid}</strong><em>colaboradores marcados</em></div>
      <div class="kpi"><span>Promedio cursos</span><strong>${metrics.courseAvg}%</strong><em>avance promedio</em></div>
      <div class="kpi"><span>Contratos/layouts</span><strong>${metrics.contracts}</strong><em>AD26 + Verano26</em></div>
    </div>
    <div class="charts-grid">
      <div class="chart-panel">
        <h3>Playeras Joma por talla</h3>
        <div class="gender-legend" aria-label="Leyenda por genero">
          <span><i class="legend-dot women"></i>Mujeres</span>
          <span><i class="legend-dot men"></i>Hombres</span>
          <span><i class="legend-dot unknown"></i>Sin dato</span>
        </div>
        ${shirtGenderRows.map((row) => `
          <div class="bar-row gender-row">
            <span>${row.label}</span>
            <div>
              <div class="bar-track gender-track">
                <div class="bar-fill segmented-fill" style="width:${Math.round(row.total / maxSize * 100)}%">
                  ${row.Mujer ? `<span class="segment women" style="width:${Math.round(row.Mujer / row.total * 100)}%" title="Mujeres: ${row.Mujer}"></span>` : ""}
                  ${row.Hombre ? `<span class="segment men" style="width:${Math.round(row.Hombre / row.total * 100)}%" title="Hombres: ${row.Hombre}"></span>` : ""}
                  ${row["Sin dato"] ? `<span class="segment unknown" style="width:${Math.round(row["Sin dato"] / row.total * 100)}%" title="Sin dato: ${row["Sin dato"]}"></span>` : ""}
                </div>
              </div>
              <div class="gender-breakdown">
                <span>M ${row.Mujer}</span>
                <span>H ${row.Hombre}</span>
                ${row["Sin dato"] ? `<span>Sin dato ${row["Sin dato"]}</span>` : ""}
              </div>
            </div>
            <strong>${row.total}</strong>
          </div>
        `).join("")}
      </div>
      <div class="chart-panel">
        <h3>Colaboradores por coordinador</h3>
        ${Object.entries(coordinators).slice(0, 8).map(([label, value]) => `
          <div class="bar-row">
            <span>${label}</span>
            <div class="bar-track"><div class="bar-fill" style="width:${Math.round(value / maxCoord * 100)}%"></div></div>
            <strong>${value}</strong>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="charts-grid">
      <div class="chart-panel">
        <h3>Talla pants</h3>
        ${Object.entries(pantSizes).map(([label, value]) => `
          <div class="bar-row">
            <span>${label}</span>
            <div class="bar-track"><div class="bar-fill" style="width:${Math.round(value / Math.max(...Object.values(pantSizes), 1) * 100)}%"></div></div>
            <strong>${value}</strong>
          </div>
        `).join("")}
      </div>
      <div class="chart-panel">
        <h3>Operacion del modulo</h3>
        <div class="donut" data-label="${metrics.physicalTests} pruebas"></div>
        <p class="hero-copy">Incluye pruebas fisicas, asistencia a gimnasio, historial de profesores, contactos de emergencia y layouts de contratacion.</p>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Nomina</th><th>Colaborador</th><th>Puesto</th><th>Coordinador</th><th>% cursos</th><th>Playera</th><th>Pants</th><th>Correo</th><th>Genero</th><th>Primeros auxilios</th></tr>
        </thead>
        <tbody>
          ${rows.slice(0, 35).map((row) => `
            <tr>
              <td>${row["Nomina"] || ""}</td>
              <td>${row["Colaboradores"] || ""}</td>
              <td>${row["Puesto"] || ""}</td>
              <td>${row["Coordinador"] || ""}</td>
              <td>${row["% de cursos"] || ""}</td>
              <td>${row["Playeras Joma"] || ""}</td>
              <td>${row["Talla pants"] || ""}</td>
              <td>${row["correo institucional"] || ""}</td>
              <td>${row["Genero"] || ""}</td>
              <td>${row["Primeros auxilios"] || ""}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
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
  const area = areas.find((a) => a.id === activeArea);
  renderNav();
  renderExecutiveKpis();
  renderSystemMap();
  $("#currentTitle").textContent = area.name;
  $$(".segmented button").forEach((b) => b.classList.toggle("active", b.dataset.view === activeView));
  $("#contentArea").innerHTML = activeView === "dashboard" ? renderDashboard(area) : activeView === "capture" ? renderCapture(area) : activeView === "reports" ? renderReports(area) : renderBlueprint(area);
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
  $$(".report-download").forEach((button) => button.addEventListener("click", () => downloadCsv(button.dataset.report || "reporte")));
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

function downloadUniformesCsv(name = "colaboradores") {
  const rows = filteredCollaborators();
  const headers = ["Nomina", "Colaboradores", "Puesto", "Coordinador", "% de cursos", "Playeras Joma", "Talla pants", "correo institucional", "Fecha cumpleaños", "Genero", "Primeros auxilios", "Asistencia a gimnasio de colaboradores", "Contacto de emergencia", "Numero 1", "Numero 2"];
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
