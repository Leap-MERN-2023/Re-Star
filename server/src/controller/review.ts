import { NextFunction, Request, Response } from "express";
import Review from "../model/reviews";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";

export const addReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newReview = req.body;

    const user = await Review.create({ ...newReview });

    res.status(201).json({
      message: "Post review successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getReview = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviews = await Review.find();
    res.status(201).json({
      message: "Get all review successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getReviewById = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const orgReview = await Review.find({
      organization: req.params.id,
    }).populate("user");

    res.status(201).json({ orgReview });
    res.send({ orgReview });
  } catch (error) {
    next(error);
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
    next(error);
  }
};

export const editReview = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const findReview = await Review.findByIdAndUpdate(
      { _id: req.body.data.reviewId },
      {
        score: req.body.data.editedScore,
        message: req.body.data.editedMessage,
      }
    );

    findReview?.save();

    res
      .status(201)
      .json({ message: "Heregchinn review amjilttai uurchlugluu" });
  } catch (error) {
    next(error);
  }
};
