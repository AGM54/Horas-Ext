// app/routes.ts
import { type RouteConfig, route } from "@react-router/dev/routes";

export default [

  route("/", "routes/auth/login.tsx"),

  route("dashboard", "routes/browse/index.tsx", [
    route("cursos", "routes/browse/cursos.tsx"),
   
  ]),
] satisfies RouteConfig;
