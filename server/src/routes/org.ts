import { Router } from "express";
import {
  addOrg,
  deleteOrg,
  getOrg,
  updateOrg,
  getOrgById,
} from "../controller/org";

import { authenticate } from "../middleware/authenticate";
import { upload } from "../middleware/multer";

const router = Router();

router.route("/").get(getOrg);
router.route("/:id").get(getOrgById);
router.route("/add").post(authenticate, upload.array("images"), addOrg);
router.route("/update").put(authenticate, updateOrg);
router.route("/delete/:id").delete(authenticate, deleteOrg);
router.route("/").get(getOrg);

export default router;
