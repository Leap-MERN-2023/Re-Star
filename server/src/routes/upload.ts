import { Router } from "express";
import multer from "multer";

import { uploadFile } from "../controller/upload";
import { upload } from "../middleware/multer";

const router = Router();

router.route("/").post(upload.single("images"), uploadFile);

export default router;
