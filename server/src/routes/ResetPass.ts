import { Router } from "express";
import {
  sendEmailToUser,
  resetPassword,
  verifyOtp,
} from "../controller/ResetPass";

const router = Router();

router.route("/sendEmail").post(sendEmailToUser);
router.route("/verify").post(verifyOtp);
router.route("/reset").put(resetPassword);
router.route("/sendEmail").get(() => "heeloo");

export default router;
