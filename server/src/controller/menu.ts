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
          image: newFood.image,
        },
      });
      res.status(201).json({
        message: "Post category successfully",
      });
    } else {
      const newmenu = findMenu.foods.push({
        ...newFood,
      });

      await findMenu.save();
      res.status(201).json({
        message: "Post menu successfully",
      });
    }
  } catch (error) {
    next(error);
    console.log("error", error);
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

export const updateMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("start");
    const newMenu = req.body;
    console.log("req.body", req.body);
    console.log("newMenu", req.body.orgId);

    const { orgId, ...newFood } = newMenu;
    const findMenu = await Menu.findOne({ organization: orgId });

    if (!findMenu) {
      throw new MyError("Organization does not exit", 404);
    }

    const updateMenuIndex = findMenu.foods.findIndex(
      (e) => e._id?.toString() == newMenu.menuId
    );
    console.log("first");

    if (updateMenuIndex === undefined || updateMenuIndex === -1) {
      throw new MyError("Food does not exist", 404);
    }

    findMenu.foods[updateMenuIndex].name = newMenu.name;
    findMenu.foods[updateMenuIndex].price = newMenu.price;
    findMenu.foods[updateMenuIndex].category = newMenu.category;
    findMenu.foods[updateMenuIndex].description = newMenu.description;
    await findMenu.save();
    res.status(201).json({
      message: "updated menu successfully",
    });

    await findMenu.save();
    res.status(201).json({
      message: "Post menu successfully",
    });
  } catch (error) {
    next(error);
  }
};
