import { NextFunction, Request, Response } from "express";
import Review from "../model/reviews";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import Favorite from "../model/favorite";

export const addFavorite = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const { orgId } = req.body;
  console.log("userIdFav", req.user._id);

  const findFavorite = await Favorite.findOne({ user: req.user._id }).populate(
    "organizations"
  );
  console.log("findFav", findFavorite);

  if (!findFavorite) {
    await Favorite.create({
      user: req.user._id,
      organizations: [orgId],
    });
  } else {
    findFavorite.organizations.push(orgId);

    await findFavorite?.save();
  }

  res.status(201).json({
    message: "Post favorite successfully",
  });
};

export const getFavorite = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const favorites = await Favorite.findOne({ user: req.user._id }).populate(
    "organizations"
  );
  res.status(201).json({
    message: `Get all favorite successfully`,
    favorites,
  });
};
export const deleteFavorite = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const { orgId } = req.body;
  const findFavorite = await Favorite.findOne({ user: req.user._id });
  const findIndex = findFavorite?.organizations.findIndex((el) => el === orgId);
  if (!findFavorite) {
    console.log("Favorites bhgui bna");
  } else {
    if (findIndex) {
      findFavorite.organizations.splice(findIndex, 1);
    }
  }
};
