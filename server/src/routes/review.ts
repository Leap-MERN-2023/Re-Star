import { Router } from "express";
import {
  getReview,
  addReview,
  getReviewById,
  editReview,
  deleteReview,
} from "../controller/review";

const router = Router();

router.route("/").post(addReview).put(editReview).delete(deleteReview);

router.route("/:id").get(getReviewById);
export default router;
