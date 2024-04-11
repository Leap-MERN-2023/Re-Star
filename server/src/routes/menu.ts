import { Router } from "express";
import {
  addMenu,
  deleteMenu,
  getMenuByOrgId,
  updateMenu,
} from "../controller/menu";
import { authenticate } from "../middleware/authenticate";
import { upload } from "../middleware/multer";

const router = Router();

router
  .route("/")
  .post(authenticate, upload.single("image"), addMenu)
  .delete(authenticate, deleteMenu);

router.route("/get/:orgId").get(getMenuByOrgId);
router.route("/update").post(authenticate, updateMenu);

export default router;
