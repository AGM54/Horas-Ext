import {route}  from "@react-router/dev/routes"

const browseRoutes = route("dashboard", "modules/browse/components/DashboardContainer/index.tsx", [
    route("cursos", "modules/browse/pages/Cursos/index.tsx"),
    route("notas", "modules/browse/pages/Notas/index.tsx"),  
  ])

export default browseRoutes