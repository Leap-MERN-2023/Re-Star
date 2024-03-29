import { NextFunction, Request, Response } from "express";
import Menu from "../model/menu";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import Organization from "../model/organization";

export const addMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {newFood }= req.body;
  const orgId = req.body
  console.log("new category :", newFood);


  const findOrg = await Menu.findOne({organization:orgId});
   findOrg?.foods.create({newFood})


  res.status(201).json({
    message: "Post category successfully",
  });
};

export const deleteMenu = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const { deleteId } = req.body;
  const { user } = req;

  const findMenu = Menu.findOne({ _id: user._id });

  res.status(201).json({
    message: "deleted category successfully",
  });
};

export const updateMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const updateMenu = req.body;
  console.log("new Menu :", updateMenu);

  const findMenu = await Menu.findByIdAndUpdate(
    {
      _id: updateMenu.id,
    },
    {
      name: updateMenu.name,
      image: updateMenu.image,
      description: updateMenu.description,
    }
  );

  res.status(201).json({
    message: "Post Menu successfully",
  });
};

export const getMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { orgId } = req.body;
  const AllMenu = await Menu.find({ _id: orgId });
  console.log("ALl", AllMenu);

  res.status(201).json({
    message: "Post category successfully",
    AllMenu,
  });
};
