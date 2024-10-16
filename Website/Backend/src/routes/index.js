import Router from "express";
import userRoutes from "../routes/user.routes.js";
import adminRoutes from "../routes/admin.routes.js";

const router = Router();

router.use(
  "/user",
  // #swagger.tags = ['User']
  userRoutes,
);

router.use(
  "/admin",
  // #swagger.tags = ['Admin']
  adminRoutes,
);

export default router;
