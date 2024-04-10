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
    console.log("new review :", newReview);

    const user = await Review.create({ ...newReview });

    res.status(201).json({
      message: "Post review successfully",
    });
  } catch (error) {
    console.log(error);
  }
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
    console.log("12==>");
    console.log("HIII", req.params);
    const orgReview = await Review.find({
      organization: req.params.id,
    }).populate("user");
    console.log("org.Rev", orgReview);

    res.status(201).json({ orgReview });
    res.send({ orgReview });
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

export const editReview = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Hi editReview");
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
    console.log("Error in edit review", error);
  }
};
