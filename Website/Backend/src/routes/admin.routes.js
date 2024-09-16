import { Router } from "express";
import {
  loginAdmin,
  logoutAdmin,
  getCurrentAdmin,
  getAllDisaster,
  deleteDisaster,
  updateStatus,
  disasterType,
  statusType,
  levelType,
} from "../controller/admin.controller.js";
import { verifyJWTAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/login").post(loginAdmin);

//secure routes
router.route("/getcurrentadmin").post(verifyJWTAdmin, getCurrentAdmin);
router.route("/logout").post(verifyJWTAdmin, logoutAdmin);

// disaster routes for admin
router.route("/alldisaster").post(verifyJWTAdmin, getAllDisaster);
router.route("/deletedisaster").post(verifyJWTAdmin, deleteDisaster);
router.route("/updatestatus").post(verifyJWTAdmin, updateStatus);

router.route("/disastertype").post(verifyJWTAdmin, disasterType);
router.route("/statustype").post(verifyJWTAdmin, statusType);
router.route("/leveltype").post(verifyJWTAdmin, levelType);

export default router;
