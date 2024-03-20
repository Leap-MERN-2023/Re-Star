import { Router } from "express";
import { addOrg } from "../controller/org";

const router = Router();

router.route("/add").post(addOrg);

export default router;
