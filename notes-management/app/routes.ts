// this is the main routing configuration for the whole app
import { type RouteConfig } from "@react-router/dev/routes";
import authRoutes from "./modules/auth/navigation/routes";
import browseRoutes from "./modules/browse/navigation/routes";

export default [
 ...authRoutes,
  browseRoutes
] satisfies RouteConfig;
