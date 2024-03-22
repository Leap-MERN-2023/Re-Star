import { Router } from "express";
import { changeUserData, getUserById } from "../controller/user";
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.route("/").get(getUserById).put(authenticate, changeUserData);

export default router;
