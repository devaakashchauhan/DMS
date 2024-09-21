import { Router } from "express";
import { disasterEntry, allDisaster } from "../controller/user.controller.js";

const router = Router();

router.route("/disasterentry").post(disasterEntry);
router.route("/alldisaster").get(allDisaster);

export default router;
