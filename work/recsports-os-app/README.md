# RecSports OS App

Base local en Next.js para convertir el prototipo RecSports OS en una aplicacion formal.

## Estado actual

- Estructura Next.js creada.
- Catalogos separados en `lib/catalogs.js`.
- Pantalla principal migrada a React en `app/page.jsx`.
- Estilos del prototipo integrados en `app/prototype.css`.
- Datos de uniformes disponibles en `public/uniformes-data.json`.
- Variables Supabase preparadas en `.env.example`.

## Pendiente tecnico

Este entorno local no incluye `npm`, `pnpm` ni `yarn`, por eso no se pudieron instalar las dependencias de Next.js aqui.

Cuando haya gestor de paquetes disponible:

```bash
npm install
npm run dev
```

La app quedara disponible en:

```text
http://127.0.0.1:4174
```

## Siguiente conexion

1. Instalar `@supabase/supabase-js`.
2. Copiar `.env.example` a `.env.local`.
3. Agregar URL y anon key de Supabase.
4. Reemplazar almacenamiento local por queries a PostgreSQL.
