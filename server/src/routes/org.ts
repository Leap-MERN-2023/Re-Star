import { Router } from "express";
import {
  addOrg,
  deleteOrg,
  getOrg,
  updateOrg,
  getOrgById,
  getUserOrgById,
  updateOrgPic,
  changeStatus,
  searchOrgByNameAndCategory,
  searchMapByCategory,
} from "../controller/org";

import { authenticate, authorize } from "../middleware/authenticate";
import { upload } from "../middleware/multer";

const router = Router();

router.route("/user").get(authenticate, getUserOrgById);
router.route("/add").post(authenticate, upload.array("images"), addOrg);
router.route("/changeStatus").post(authenticate, changeStatus);
router.route("/update").put(authenticate, updateOrg);
router
  .route("/picUpload")
  .put(authenticate, upload.single("image"), updateOrgPic);
router.route("/delete/:id").delete(authenticate, deleteOrg);
router.route("/:id").get(getOrgById);
router.route("/").get(getOrg);
router
  .route(`/search/name/:name?/cate/:category?`)
  .get(searchOrgByNameAndCategory);
router.route(`/cate/:category`).get(searchMapByCategory);

export default router;
