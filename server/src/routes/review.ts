import { Router } from "express";
import {
  getReview,
  addReview,
  getReviewById,
  updateReview,
  deleteReview,
} from "../controller/review";

const router = Router();

router
  .route("/")
  .post(addReview)
  .get(getReviewById)
  .put(updateReview)
  .delete(deleteReview);

export default router;
