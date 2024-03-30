import { Router } from "express";
import {
  addFavorite,
  deleteFavorite,
  getFavorite,
} from "../controller/favorite";
import { authenticate } from "../middleware/authenticate";

const router = Router();

router
  .route("/")
  .put(authenticate, addFavorite)
  .get(authenticate, getFavorite)
  .delete(authenticate, deleteFavorite);

export default router;
