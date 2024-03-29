import { Router } from "express";
import { changeUserData, getUserById, checkPass } from "../controller/user";
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.route("/").get(getUserById).put(authenticate, changeUserData);
router.route("/check").post(authenticate, checkPass);

export default router;
