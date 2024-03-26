import { NextFunction, Request, Response } from "express";
import cloudinary from "../utils/cloudinary";
import MyError from "../utils/myError";
import Multer from "multer";

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.files) {
      throw new MyError("No file uploaded", 400);
    }

    console.log("File", req.file);

    const images = req.files as Express.Multer.File[];

    for (let image of images) {
      const result = await cloudinary.uploader.upload(image.path);

      console.log("Uploaded:", result.secure_url);
    }
  } catch (error) {
    next(error);
  }
};
