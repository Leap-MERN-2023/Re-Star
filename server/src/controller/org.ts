import { NextFunction, Request, Response } from "express";
import Organization from "../model/organization";
import User from "../model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import cloudinary from "../utils/cloudinary";
import Multer from "multer";

export const addOrg = async (req: IReq, res: Response, next: NextFunction) => {
  const newOrg = req.body;
  const { user } = req;

  const newOrganization = { ...newOrg, user: user._id };
  const images: string[] = [];

  const files = req.files as Express.Multer.File[];

  if (!files) {
    throw new MyError("No file uploaded", 400);
  } else {
    for (let file of files) {
      const { secure_url } = await cloudinary.uploader.upload(file.path);

      images.push(secure_url);
    }
    newOrganization.images = images;

    const org = await Organization.create(newOrganization);
  }

  res.status(201).json({
    message: "Шинэ ресторан амжилттай бүртгэгдлээ ",
  });
  console.log("successfully");
};

export const getOrgById = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const { user } = req;

  const org = Organization.findOne({ user: user._id });

  res.status(201).json({
    message: "got successfully",
    org,
  });
};

export const getOrg = async (req: IReq, res: Response, next: NextFunction) => {
  const allOrg = await Organization.find();

  res.status(201).json({
    message: "got successfully",
    allOrg,
  });
};

export const deleteOrg = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const deleteOrg = req.body;
    const { user } = req;

    const findOrg = await Organization.findOne({ user: user.id });

    if (!findOrg) {
      throw new MyError(` Orgization  олдсонгүй.`, 400);
    }

    const data = findOrg.deleteOne({ _id: deleteOrg.id });
    await findOrg.save();

    res.status(200).json({
      message: `Organization устгалаа.`,
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrg = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const updateOrg = req.body;
    const { user } = req;

    const findOrg = await Organization.findById({ _id: updateOrg.id });

    if (!findOrg) {
      throw new MyError(` Organization олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: ` Organization шинэчлэгдлээ.`,
    });
  } catch (error) {
    next(error);
  }
};
