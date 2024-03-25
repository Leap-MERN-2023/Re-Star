import { Router } from "express";
import {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategory,
} from "../controller/category";

const router = Router();

router.route("/add").post(addCategory);
router.route("/delete").delete(deleteCategory);
router.route("/update").put(updateCategory);
router.route("/get").get(getCategory);

export default router;
