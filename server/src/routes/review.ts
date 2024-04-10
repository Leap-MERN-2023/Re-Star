import { Router } from "express";
import {
  getReview,
  addReview,
  getReviewById,
  editReview,
  deleteReview,
  averageScore,
} from "../controller/review";

const router = Router();

router.route("/").post(addReview).put(editReview).delete(deleteReview);
router.route("/averageScore").get(averageScore);

router.route("/:id").get(getReviewById);
export default router;
