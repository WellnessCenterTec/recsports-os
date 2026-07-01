-- WellSync - Reemplazo seguro de Calificaciones por periodo
-- Permite que Clases/Direccion/Admin borren el periodo anterior antes de cargar
-- la nueva version del archivo de calificaciones.

grant delete on public.class_grades to authenticated;

drop policy if exists "class grades delete classes and leadership" on public.class_grades;
create policy "class grades delete classes and leadership"
on public.class_grades
for delete
to authenticated
using (
  public.current_app_role() in ('admin', 'direccion')
  or public.current_area_key() = 'clases'
);
