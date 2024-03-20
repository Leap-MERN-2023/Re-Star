import { Router } from "express";
import { getUserById } from "../controller/user";

const router = Router();

router.route("/").get(getUserById);

export default router;
