import { Router } from "express";
import { getReview, addReview } from "../controller/review";

const router = Router();

router.route("/").get(getReview).post(addReview);

export default router;
