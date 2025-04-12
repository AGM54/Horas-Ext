import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Login page as main route
  index("routes/auth/login.tsx"),
  
  // Protected routes
  route("dashboard", "routes/browse/index.tsx"),
] satisfies RouteConfig;
