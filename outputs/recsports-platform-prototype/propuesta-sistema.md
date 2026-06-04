# Propuesta de Plataforma Web RecSports OS

## Objetivo

Sustituir el archivo de indicadores por una plataforma web donde los coordinadores capturen informacion directamente y los indicadores se calculen automaticamente, sin depender de Excel o Google Sheets para operar.

## Principio de privacidad

El sistema solo debe almacenar los datos personales minimos autorizados:

- Matricula
- Genero
- Carrera
- Semestre
- Nivel escolar: Profesional o Posgrado

No se almacenan nombres, telefonos, correos, fecha de nacimiento, historial clinico, padecimientos, medicamentos ni comentarios sensibles.

## Areas principales

- Clases Deportivas
- Gimnasio
- Intramuros
- Vivencia
- Comunicacion
- Representativos
- Gamer
- Colaboradores
- Compras y Presupuesto

## Menu principal

- Dashboard Ejecutivo
- Clases Deportivas
- Gimnasio
- Intramuros
- Vivencia
- Comunicacion
- Representativos
- Gamer
- Colaboradores
- Compras y Presupuesto
- Configuracion

## Submenus por area

- Dashboard
- Captura
- Participantes
- Calendario
- Indicadores
- Reportes
- Configuracion

## Dashboard Ejecutivo

Indicadores recomendados:

- Alumnos unicos impactados
- Registros totales
- Participacion por area
- Participacion cruzada entre areas
- Distribucion por genero
- Distribucion por carrera
- Distribucion por semestre
- Distribucion por nivel escolar
- Retencion global
- Cumplimiento de metas por area

Graficas recomendadas:

- Barras: participacion por area
- Linea: tendencia semanal o mensual
- Dona: distribucion por nivel escolar
- Barras apiladas: genero por area
- Tabla ejecutiva: metas, avance, variacion y estatus

## Modulos por area

### Clases Deportivas

Captura:

- Matricula
- Genero
- Carrera
- Semestre
- Nivel escolar
- Periodo
- Disciplina
- CRN
- Grupo
- Estatus: inscrito, baja, NP, acreditado

Indicadores:

- Inscritos
- Bajas
- NP
- Acreditados
- Ocupacion por grupo
- Alumnos unicos
- Participacion por genero, carrera, semestre y nivel

Reportes:

- Lista por disciplina
- Acreditacion por grupo
- Ocupacion por horario
- Resumen por periodo

### Gimnasio

Captura:

- Matricula
- Genero
- Carrera
- Semestre
- Nivel escolar
- Fecha de acceso
- Sede o servicio
- Periodo

Indicadores:

- Accesos diarios
- Accesos semanales
- Matriculas unicas
- Frecuencia promedio
- Accesos por nivel escolar
- Accesos por carrera

Reportes:

- Bitacora de accesos
- Reporte semanal
- Usuarios unicos por periodo

### Intramuros

Captura:

- Matricula
- Genero
- Carrera
- Semestre
- Nivel escolar
- Torneo
- Equipo
- Rama
- Jornada
- Estatus

Indicadores:

- Equipos inscritos
- Alumnos por torneo
- Juegos programados
- Juegos realizados
- Juegos por default
- Bajas
- Retencion

Reportes:

- Cedula de equipos
- Rol de jornadas
- Reporte de retencion
- Resumen por torneo

### Vivencia

Captura:

- Matricula
- Genero
- Carrera
- Semestre
- Nivel escolar
- Evento
- Fecha
- Clasificacion
- Meta
- Asistencia

Indicadores:

- Eventos realizados
- Participantes
- Cumplimiento de meta
- Participacion por semestre
- Participacion por carrera

Reportes:

- Calendario de eventos
- Cumplimiento de metas
- Participantes por evento

### Comunicacion

Captura:

- Campana
- Canal
- Area
- Periodo
- Alcance
- Clics
- Conversiones

Indicadores:

- Alcance total
- Conversion a registro
- Conversion por canal
- Participacion atribuida por area

Reportes:

- Reporte de campanas
- Conversion por canal
- Resumen mensual

### Representativos

Captura:

- Matricula
- Genero
- Carrera
- Semestre
- Nivel escolar
- Deporte
- Rama
- Coach
- Temporada
- Estatus

Indicadores:

- Atletas activos
- Atletas por deporte
- Distribucion por genero
- Distribucion por carrera
- Uniformes pendientes

Reportes:

- Roster por deporte
- Roster por coach
- Uniformes por atleta

### Gamer

Captura:

- Matricula
- Genero
- Carrera
- Semestre
- Nivel escolar
- Torneo o actividad
- Fecha
- Estatus

Indicadores:

- Participantes unicos
- Eventos realizados
- Reincidencia
- Distribucion por carrera
- Distribucion por semestre

Reportes:

- Lista de participantes
- Reporte de torneos
- Ranking agregado

### Colaboradores

Fuente:

- Uniformes de Equipo RecSports 26.xlsx
- Pestañas: Uniformes, Pruebas fisicas, Gimnasio, Historial de profesores, Form Responses, layAd26 y Verano26.

Captura:

- Nomina
- Nombre del colaborador
- Puesto
- Coordinador
- Avance de cursos
- Talla de playera
- Talla de pants
- Correo institucional
- Cumpleaños
- Genero
- Eventos de integracion
- Primeros auxilios
- Asistencia a gimnasio de colaboradores
- Contactos de emergencia
- Datos de layouts de contratacion

Indicadores:

- Colaboradores registrados
- Uniformes por talla
- Avance promedio de cursos
- Colaboradores con primeros auxilios
- Asistencia a gimnasio
- Pruebas fisicas registradas
- Contratos por periodo
- Sueldo total por layout

Reportes:

- Directorio de colaboradores
- Reporte de uniformes
- Reporte de pruebas fisicas
- Historial de profesores
- Layouts de contratacion AD26 y Verano26

### Compras y Presupuesto

Captura:

- Area solicitante
- Concepto
- Proveedor
- Monto
- Fecha requerida
- Estatus
- Relacion con evento, equipo o modulo

Indicadores:

- Presupuesto ejercido
- Presupuesto comprometido
- Presupuesto disponible
- Ordenes pendientes
- Gasto por area
- Costo por participante

Reportes:

- Presupuesto mensual
- Solicitudes por area
- Ordenes pendientes
- Gasto por periodo

## Roles y permisos

- Direccion Deportiva: lectura global, reportes ejecutivos, aprobaciones y auditoria.
- Coordinador de area: captura y consulta exclusivamente de su area.
- Compras y Presupuesto: captura y consulta exclusivamente del modulo de compras y presupuesto.
- Consulta: dashboards agregados sin acceso a datos de captura.
- Administrador: usuarios, catalogos, permisos y configuracion.

## Prototipo actual

La prueba local ya incluye:

- Login simulado por perfil.
- Sesion persistente en el navegador.
- Cambio de rol desde la barra superior para pruebas.
- Permisos por area.
- Capturas guardadas localmente.
- Exportacion CSV.
- Impresion para PDF.
- Centro de importaciones para controlar fuentes, reglas y pendientes de migracion.
- Bitacora de auditoria local para registrar login, capturas, exportaciones, configuracion y cambios de rol.

En produccion, el login simulado debe sustituirse por Supabase Auth o SSO institucional, y las capturas locales por tablas PostgreSQL.

## Centro de importaciones

Antes de cargar datos historicos a produccion, cada fuente debe pasar por un flujo de validacion:

- Identificar fuente.
- Confirmar campos permitidos.
- Normalizar catalogos.
- Detectar duplicados.
- Validar campos requeridos.
- Registrar errores.
- Aprobar importacion.
- Guardar bitacora de carga.

Reglas clave:

- Indicadores: importar solo datos permitidos de alumnos y datos operativos por modulo.
- Historial clinico: no se importa al sistema operativo.
- Uniformes: se importa completo al modulo Colaboradores por autorizacion expresa.
- Compras: se importa cuando se cierre estructura de presupuesto.
- Catalogos: deben existir antes de cargar operaciones masivas.

## Auditoria

En produccion cada accion relevante debe registrarse:

- Inicio y cierre de sesion.
- Cambio de rol o perfil activo.
- Altas, ediciones y bajas de registros.
- Exportaciones PDF o Excel.
- Cambios de configuracion.
- Importaciones y errores de carga.
- Limpieza o correccion masiva de datos.

La bitacora debe guardar:

- Usuario.
- Rol.
- Area.
- Accion.
- Entidad afectada.
- Fecha y hora.
- Detalle breve.

## Filtros recomendados

- Periodo
- Area
- Disciplina, evento o torneo
- Genero
- Carrera
- Semestre
- Nivel escolar
- Estatus
- Fecha
- Responsable o coordinador

## Arquitectura recomendada

- Frontend: Next.js
- Hosting: Vercel
- Base de datos: Supabase PostgreSQL
- Autenticacion: Supabase Auth
- Permisos: Row Level Security por rol y area
- Exportacion: funciones serverless para Excel y PDF
- Buscador global: busqueda por modulo, matricula, evento, torneo, disciplina o reporte
- Auditoria: bitacora de cambios por usuario

## Roadmap sugerido

1. MVP local validado con coordinadores.
2. Version Vercel/Supabase con login y base real.
3. Capturas por area y dashboards automaticos.
4. Exportaciones oficiales PDF/Excel.
5. Permisos finos y auditoria.
6. Migracion de datos historicos depurados.
7. Piloto institucional.
8. Liberacion controlada.
