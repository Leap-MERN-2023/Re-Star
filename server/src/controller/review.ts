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

export const getReviewById = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const orgReview = await Review.find({ organization: req.body.orgId });
    console.log("org.Rev", orgReview);
    res.status(201).json({ orgReview });
    res.send({ orgReview });
  } catch (error) {
    console.log(error);
  }
};

export const updateReview = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { changedReview } = req.body;
    const findReview = await Review.findByIdAndUpdate(
      {
        _id: req.body.reviewId,
      },
      {
        message: changedReview.message,
        score: changedReview.score,
      }
    );
    findReview?.save();
    res.status(201).json({
      message: "Хэрэглэгчийн review амжилттай өөрчиллөө.",
      changedReview,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteReview = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const findReview = await Review.findByIdAndDelete({
      _id: req.body.reviewId,
    });
    res.status(201).json({ message: "Heregchinn review amjilttai ustgagdlaa" });
  } catch (error) {
    console.log(error);
  }
};
