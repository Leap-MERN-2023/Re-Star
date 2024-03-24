import { Router } from "express";
import { addOrg, deleteOrg, getOrg, updateOrg } from "../controller/org";

import { authenticate } from "../middleware/authenticate";
import { upload } from "../middleware/multer";

const router = Router();

router.route("/").get(authenticate, getOrg);
router.route("/add").post(upload.single("image"), addOrg);
router.route("/update").put(authenticate, updateOrg);
router.route("/delete").delete(authenticate, deleteOrg);
router.route("/add").post(authenticate, addOrg);

export default router;
