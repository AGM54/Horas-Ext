import { route } from "@react-router/dev/routes";

const browseRoutes = route(
  "dashboard",
  "modules/browse/components/DashboardContainer/index.tsx",
  [
    route("cursos",      "modules/browse/pages/Cursos/index.tsx"),
    route("notas",       "modules/browse/pages/Notas/index.tsx"),
    route("maestros",    "modules/browse/pages/Profesores/index.tsx"), 
    route("estudiantes", "modules/browse/pages/Estudiantes/index.tsx"),
    route(
      "estudiantes/:id",
      "modules/browse/pages/Estudiantes/DetalleEstudiante/index.tsx"
    ),
  ]
);

export default browseRoutes;
