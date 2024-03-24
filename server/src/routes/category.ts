import { Router } from "express";
import { addCategory } from "../controller/category";

const router = Router();

router.route("/add").post(addCategory);

export default router;
