# Student Database Template Design

## Goal

Add a secondary `Descargar plantilla` button immediately to the left of the existing `Cargar base de datos` button in `Reporte General -> Reportes -> Base de datos de alumnos`.

## Scope

- Keep the existing upload input, authorization, Supabase persistence, parser, validations, and report structure unchanged.
- Do not add the control to any other upload module.
- Generate a CSV because the current student database input accepts CSV files and no official template file exists in the repository.

## Template contract

The downloaded file is named `plantilla-base-datos-alumnos.csv` and contains exactly these canonical columns, in the order already preferred by the student database module:

1. `Matricula`
2. `Nombre Campus`
3. `Desc Nivel Acad Alumno`
4. `Desc Programa Acad`
5. `Periodo acad`
6. `Genero`
7. `Semestre`

The file includes a UTF-8 BOM and a header row only, so users cannot mistake sample data for real student records.

## UI and behavior

- Render the secondary button before the existing primary upload button.
- Use the existing `ghost-btn` style plus a download icon.
- Keep both buttons in the existing flex action container with equal minimum height and a uniform gap.
- On narrow screens, stack the buttons at full width using the existing mobile breakpoint.
- Clicking the new button downloads the template and shows a confirmation toast.
- Clicking the existing upload button continues to open the unchanged hidden CSV input.

## Testing

- Unit-test the generated CSV contents and filename.
- Unit-test that the secondary button renders before the primary upload button and preserves disabled upload state.
- Verify the app loads the isolated template helper before `app.js` and wires the new click handler.
- Verify the responsive styles cover horizontal alignment and narrow-screen stacking.
- Run the complete existing Node test suite and a JavaScript syntax check.

