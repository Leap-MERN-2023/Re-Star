import { NextFunction, Request, Response } from "express";
import Review from "../model/reviews";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";

export const addReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newReview = req.body;
  console.log("new review :", newReview);

  const user = await Review.create({ ...newReview });

  res.status(201).json({
    message: "Post review successfully",
  });
};

export const getReview = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const reviews = await Review.find();
  res.status(201).json({
    message: "Get all review successfully",
  });
};
