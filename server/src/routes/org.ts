import { Router } from "express";
import { addOrg, deleteOrg, getOrg, updateOrg } from "../controller/org";
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.route("/").get(authenticate, getOrg)
router.route("/add").post(addOrg);
router.route("/update").put(authenticate, updateOrg);
router.route("/delete").delete(authenticate, deleteOrg)

export default router;
