import { Router } from "express";
import {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategory,
} from "../controller/category";
import { authenticate } from "../middleware/authenticate";
import { upload } from "../middleware/multer";

const router = Router();

router.route("/add").post(authenticate, upload.single("image"), addCategory);
router.route("/delete").delete(deleteCategory);
router.route("/update").put(updateCategory);
router.route("/get").get(getCategory);

export default router;
