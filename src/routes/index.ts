import { Router } from "express";

import { userRoutes } from "./users-route";
import { sessionsRoutes } from "./session-route";
import { deliveriesRoutes } from "./deliveries-route";
import { deliveryLogsRoutes } from "./delivery-logs-route";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/deliveries", deliveriesRoutes);
routes.use("/delivery-logs", deliveryLogsRoutes);

export { routes };
