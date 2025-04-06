import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Rutas públicas
  index("routes/auth/login.tsx"),

  // Rutas protegidas
  route("routes/browse/index.tsx", "routes/browse/index.tsx"),
] satisfies RouteConfig;
