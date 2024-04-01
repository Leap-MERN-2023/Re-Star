import { Router } from "express";
import {
  getReview,
  addReview,
  getReviewById,
  updateReview,
  deleteReview,
} from "../controller/review";

const router = Router();

router.route("/").post(addReview).put(updateReview).delete(deleteReview);

router.route("/:id").get(getReviewById);
export default router;
