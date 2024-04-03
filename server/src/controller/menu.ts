import { NextFunction, Request, Response } from "express";
import Menu from "../model/menu";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import cloudinary from "../utils/cloudinary";

export const addMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newMenu = req.body;

    const { orgId, ...newFood } = newMenu;
    console.log("Req Body :", req.body);
    console.log("org", orgId);

    if (req.file) {
      const { secure_url } = await cloudinary.uploader.upload(req.file.path);
      newFood.image = secure_url;
    }

    const findMenu = await Menu.findOne({ organization: orgId });

    console.log("findmenu", findMenu);
    console.log("findmenu", findMenu);
    console.log("orgId", orgId);
    if (!findMenu) {
      console.log("first");
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
      console.log("second");
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
    console.log("err", error);
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

  const findMenu = Menu.findOne({ organization: user._id });

  const findIndexOfMenu = (e: any) => {
    return e._id == deleteId;
  };

  res.status(200).json({
    message: `Захиалгыг амжилттай устгалаа`,
  });

  res.status(201).json({
    message: "deleted category successfully",
  });
};

export const getMenuByOrgId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { orgId } = req.params;

  const orgMenus = await Menu.find({ organization: orgId });
  console.log("ALl", orgMenus);

  res.status(201).json({
    message: "Post category successfully",
    orgMenus,
  });
};
