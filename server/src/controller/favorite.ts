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

    const favorites = await findFavorite?.save();
    res.status(201).json({
      message: "Post favorite successfully",
      favorites,
    });
  }
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
  try {
    const { orgId } = req.body;
    const findFavorite = await Favorite.findOne({ user: req.user._id });
    const findIndex = findFavorite?.organizations.findIndex(
      (el) => el.toString() === orgId
    );
    console.log("findindex in delFav", findIndex);
    if (!findFavorite) {
      console.log("Favorites bhgui bna");
    } else {
      findFavorite.organizations.splice(findIndex!, 1);

      console.log("findFavs in delFav", findFavorite);
      const favorites = await findFavorite.save();

      res.status(201).json({
        message: `Get all favorite successfully`,
        favorites,
      });
    }
    res.send("delete Fav success");
  } catch (error) {
    console.log("error in delFav back", error);
  }
};
