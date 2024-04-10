import { NextFunction, Request, Response } from "express";
import Menu from "../model/menu";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import cloudinary from "../utils/cloudinary";
import Organization from "../model/organization";

export const addMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newMenu = req.body;

    const { orgId, ...newFood } = newMenu;

    if (req.file) {
      const { secure_url } = await cloudinary.uploader.upload(req.file.path);
      newFood.image = secure_url;
    }

    const findMenu = await Menu.findOne({ organization: orgId });

    if (!findMenu) {
      await Menu.create({
        organization: newMenu.orgId,
        foods: {
          name: newMenu.name,
          description: newMenu.description,
          category: newMenu.category,
          price: newMenu.price,
          image: newMenu.image,
        },
      });
      res.status(201).json({
        message: "Post category successfully",
      });
    } else {
      const updateMenuIndex = findMenu.foods.findIndex(
        (e) => e.name === newMenu.name
      );

      if (updateMenuIndex === undefined || updateMenuIndex === -1) {
        const newmenu = findMenu.foods.push({
          ...newFood,
        });

        await findMenu.save();
        res.status(201).json({
          message: "Post menu successfully",
        });
      } else {
        findMenu.foods[updateMenuIndex].name = newMenu.name;
        findMenu.foods[updateMenuIndex].price = newMenu.price;
        findMenu.foods[updateMenuIndex].category = newMenu.category;
        findMenu.foods[updateMenuIndex].description = newMenu.description;
        findMenu.foods[updateMenuIndex].image = newMenu.image;
        await findMenu.save();
        res.status(201).json({
          message: "updated menu successfully",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

export const deleteMenu = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const { deleteId, orgId } = req.body;

  const { user } = req;

  const findOrg = await Organization.findOne({ user: user._id });

  if (!findOrg) {
    throw new MyError("You are not owner of this restaurant", 401);
  }

  const findMenu = await Menu.findOne({ organization: orgId });

  if (!findMenu) {
    throw new MyError("Restaurant does not exist", 401);
  }

  const indexOfMenu = findMenu.foods.findIndex((e: any) => {
    return e._id == deleteId;
  });

  const spliceCount = findMenu.foods.splice(indexOfMenu, 1);

  const menu = await findMenu.save();

  res.status(201).json({
    message: "deleted category successfully",
    menu,
  });
};

export const getMenuByOrgId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { orgId } = req.params;

  const menus = await Menu.find({ organization: orgId });

  res.status(201).json({
    message: "Post category successfully",
    menus,
  });
};
