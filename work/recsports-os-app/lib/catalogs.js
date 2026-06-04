export const areas = [
  {
    id: "general",
    name: "Ejecutivo general",
    source: "Reporte final, Reporte Automatizado, Sofi 2",
    tone: "blue",
    capture: ["Periodo", "Matricula", "Genero", "Carrera", "Semestre", "Nivel escolar", "Area de participacion"],
    indicators: ["Alumnos unicos impactados", "Registros por servicio", "Participacion cruzada", "Distribucion por carrera", "Distribucion por nivel", "Retencion global"],
    charts: ["Embudo de participacion", "Participacion por area", "Mapa de calor por semana", "Distribucion por perfil academico"],
    reports: ["Resumen ejecutivo PDF", "Base agregada Excel", "Cruce de participacion por area"]
  },
  {
    id: "clases",
    name: "Clases Deportivas",
    source: "Programacion Clases, CD Lista de Alumnos, CD Indicadores clases",
    tone: "green",
    capture: ["Matricula", "Disciplina", "CRN", "Grupo", "Calificacion/estatus", "Periodo"],
    indicators: ["Inscritos Banner", "Bajas", "NP", "Acreditados", "Ocupacion", "Alumnos unicos"],
    charts: ["Acreditados vs bajas", "Ocupacion por disciplina", "Genero por disciplina"],
    reports: ["Lista por disciplina", "Reporte de acreditacion", "Ocupacion por horario"]
  },
  {
    id: "gimnasio",
    name: "Gimnasio",
    source: "Gym Indicadores, Gym Lista de Alumnos",
    tone: "gold",
    capture: ["Matricula", "Fecha de acceso", "Sede", "Tipo de servicio", "Periodo"],
    indicators: ["Accesos diarios", "Accesos semanales", "Matriculas unicas", "Frecuencia promedio", "EMIS"],
    charts: ["Trafico por dia", "Semanas con mayor uso", "Profesional vs Posgrado"],
    reports: ["Bitacora de accesos", "Reporte semanal de asistencia", "Export de usuarios unicos"]
  },
  {
    id: "intramuros",
    name: "Intramuros",
    source: "Intra Indicadores LiFE, Intra Lista de Alumnos, Intra Jornadas",
    tone: "red",
    capture: ["Matricula", "Torneo", "Equipo", "Rama", "Jornada", "Estatus"],
    indicators: ["Equipos inscritos", "Alumnos por torneo", "Juegos programados", "Juegos por default", "Retencion", "Bajas"],
    charts: ["Retencion por torneo", "Equipos por rama", "Juegos realizados vs default"],
    reports: ["Rol de jornadas", "Cedula de equipos", "Reporte de retencion"]
  },
  {
    id: "vivencia",
    name: "Vivencia",
    source: "Vivencia Fechas, Vivencia Lista de Alumnos",
    tone: "lav",
    capture: ["Matricula", "Evento", "Fecha", "Clasificacion", "Meta", "Asistencia"],
    indicators: ["Eventos realizados", "Participantes", "Cumplimiento de meta", "Hombres/Mujeres", "Eventos insignia"],
    charts: ["Meta vs asistencia", "Eventos por clasificacion", "Participacion por semestre"],
    reports: ["Calendario de eventos", "Reporte de cumplimiento", "Lista agregada por evento"]
  },
  {
    id: "comunicacion",
    name: "Comunicacion",
    source: "Infografia Wellness LIVE, Servicios e inscritos",
    tone: "blue",
    capture: ["Campana", "Canal", "Area", "Periodo", "Alcance", "Clics", "Conversiones"],
    indicators: ["Alcance", "Conversion a registro", "Servicios promovidos", "Participacion atribuida"],
    charts: ["Conversion por canal", "Impacto por area", "Tendencia de campanas"],
    reports: ["Reporte de campanas", "Conversion por area", "Resumen para direccion"]
  },
  {
    id: "representativos",
    name: "Representativos",
    source: "Repres Lista, Uniformes",
    tone: "green",
    capture: ["Matricula", "Deporte", "Rama", "Coach", "Temporada", "Estatus"],
    indicators: ["Atletas activos", "Equipos por deporte", "Distribucion por genero", "Uniformes pendientes"],
    charts: ["Atletas por deporte", "Rama por equipo", "Estatus de uniforme"],
    reports: ["Roster por coach", "Uniformes por atleta", "Reporte de temporada"]
  },
  {
    id: "gamer",
    name: "Gamer",
    source: "Gamer Lista",
    tone: "lav",
    capture: ["Matricula", "Actividad gamer", "Torneo", "Fecha", "Estatus"],
    indicators: ["Participantes unicos", "Eventos gamer", "Reincidencia", "Distribucion por carrera"],
    charts: ["Participacion por torneo", "Perfil academico", "Tendencia mensual"],
    reports: ["Lista de participantes", "Reporte de torneos", "Ranking agregado"]
  },
  {
    id: "colaboradores",
    name: "Colaboradores",
    source: "Uniformes, Pruebas fisicas, Gimnasio, Historial de profesores, layouts AD26 y Verano26",
    tone: "blue",
    capture: ["Nomina", "Colaborador", "Puesto", "Coordinador", "Talla playera", "Talla pants", "Correo", "Cumpleanos", "Genero", "Primeros auxilios", "Contacto de emergencia"],
    indicators: ["Colaboradores registrados", "Uniformes por talla", "Cursos completados", "Primeros auxilios", "Asistencia a gimnasio", "Contratos por layout"],
    charts: ["Tallas de playera", "Cursos por coordinador", "Primeros auxilios", "Asistencia a gimnasio", "Costo de contratos"],
    reports: ["Directorio de colaboradores", "Reporte de uniformes", "Pruebas fisicas", "Layouts de contratacion"]
  },
  {
    id: "compras",
    name: "Compras y Presupuesto",
    source: "Uniformes, Elisa, controles presupuestales propuestos",
    tone: "gold",
    capture: ["Solicitud", "Area", "Proveedor", "Monto", "Estatus", "Fecha requerida"],
    indicators: ["Presupuesto ejercido", "Comprometido", "Disponible", "Ordenes pendientes", "Costo por participante"],
    charts: ["Gasto por area", "Presupuesto vs real", "Estatus de compras"],
    reports: ["Solicitudes por area", "Presupuesto mensual", "Ordenes de compra"]
  },
  {
    id: "configuracion",
    name: "Configuracion",
    source: "Administracion del sistema",
    tone: "blue",
    capture: ["Usuario", "Rol", "Area", "Permiso", "Catalogo", "Estado"],
    indicators: ["Usuarios activos", "Roles configurados", "Catalogos activos", "Importaciones pendientes", "Politicas de datos"],
    charts: ["Usuarios por rol", "Permisos por modulo", "Estado de importaciones"],
    reports: ["Matriz de permisos", "Catalogos del sistema", "Bitacora de auditoria"]
  }
];

export const demoUsers = [
  { id: "dir", name: "Direccion Deportiva", role: "direccion", area: "general" },
  { id: "coord-clases", name: "Coord. Clases Deportivas", role: "coordinador", area: "clases" },
  { id: "coord-gym", name: "Coord. Gimnasio", role: "coordinador", area: "gimnasio" },
  { id: "coord-intra", name: "Coord. Intramuros", role: "coordinador", area: "intramuros" },
  { id: "coord-vivencia", name: "Coord. Vivencia", role: "coordinador", area: "vivencia" },
  { id: "coord-com", name: "Coord. Comunicacion", role: "coordinador", area: "comunicacion" },
  { id: "coord-rep", name: "Coord. Representativos", role: "coordinador", area: "representativos" },
  { id: "coord-gamer", name: "Coord. Gamer", role: "coordinador", area: "gamer" },
  { id: "coord-colab", name: "Coord. Colaboradores", role: "coordinador", area: "colaboradores" },
  { id: "compras", name: "Compras y Presupuesto", role: "compras", area: "compras" }
];

export const careers = ["ITC", "LAF", "LIN", "MC", "LNB", "ARQ", "IMT", "LAE", "MNA", "DCA"];
export const genders = ["Femenino", "Masculino", "No especificado"];
export const activities = ["clases", "gimnasio", "intramuros", "vivencia", "representativos", "gamer"];

export const seedStudents = Array.from({ length: 180 }, (_, i) => ({
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
