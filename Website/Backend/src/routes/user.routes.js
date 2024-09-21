import { Router } from "express";
import {
  disasterEntry,
  allDisaster,
  oneDisaster,
} from "../controller/user.controller.js";

const router = Router();

router.route("/disasterentry").post(disasterEntry);
router.route("/alldisaster").get(allDisaster);
router.route("/onedisaster/:id").get(oneDisaster);

export default router;
