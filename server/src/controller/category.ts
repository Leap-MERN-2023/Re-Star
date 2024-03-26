import { NextFunction, Request, Response } from "express";
import Category from "../model/category";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import Organization from "../model/organization";

export const addCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newCategory = req.body;
  console.log("new category :", newCategory);

  const user = await Category.create({ ...newCategory });

  res.status(201).json({
    message: "Post category successfully",
  });
};
export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { deleteId } = req.body;
  console.log("delete category Id:", deleteId);

  await Category.deleteOne({ _id: deleteId });

  res.status(201).json({
    message: "deleted category successfully",
  });
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const updateCategory = req.body;
  console.log("new category :", updateCategory);

  const findCategory = await Category.findByIdAndUpdate(
    {
      _id: updateCategory.id,
    },
    {
      name: updateCategory.name,
      image: updateCategory.image,
      description: updateCategory.description,
    }
  );

  res.status(201).json({
    message: "Post category successfully",
  });
};

export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categories = await Category.find();

  res.status(201).json({
    message: "Post category successfully",
    categories,
  });
};
