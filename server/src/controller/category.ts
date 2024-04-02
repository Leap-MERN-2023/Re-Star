import { NextFunction, Request, Response } from "express";
import Category from "../model/category";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import Organization from "../model/organization";
import cloudinary from "../utils/cloudinary";

export const addCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newCategory = req.body;

  if (!req.file) {
    throw new MyError("Pic", 400);
  } else {
    const { secure_url } = await cloudinary.uploader.upload(req.file.path);

    newCategory.image = secure_url;
  }

  const category = await Category.create({ ...newCategory });

  res.status(201).json({
    message: "Post category successfully",
    category,
  });
};
export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { deleteId } = req.body;

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
