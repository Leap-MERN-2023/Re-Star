import { NextFunction, Request, Response } from "express";
import Category from "../model/category";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";

export const addCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newCategory = req.body;
  console.log("new review :", newCategory);

  const user = await Category.create({ ...newCategory });

  res.status(201).json({
    message: "Post review successfully",
  });
};
