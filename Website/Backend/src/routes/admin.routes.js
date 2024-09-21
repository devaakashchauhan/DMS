import { Router } from "express";
import {
  loginAdmin,
  logoutAdmin,
  getCurrentAdmin,
  getAllDisaster,
  deleteDisaster,
  updateStatus,
} from "../controller/admin.controller.js";
import { verifyJWTAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/login").post(loginAdmin);
router.route("/getcurrentadmin").get(verifyJWTAdmin, getCurrentAdmin);
router.route("/logout").get(verifyJWTAdmin, logoutAdmin);
router.route("/alldisaster").get(verifyJWTAdmin, getAllDisaster);
router.route("/deletedisaster").post(verifyJWTAdmin, deleteDisaster);
router.route("/updatestatus").post(verifyJWTAdmin, updateStatus);

export default router;
