import { Router } from "express";
import { addFavorite, getFavorite } from "../controller/favorite";
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.route("/").put(authenticate, addFavorite).get(authenticate, getFavorite);

export default router;
