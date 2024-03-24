import { NextFunction, Request, Response } from "express";
import Organization from "../model/organization";
import User from "../model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import cloudinary from "../utils/cloudinary";

export const addOrg = async (req: IReq, res: Response, next: NextFunction) => {
  const newOrg = req.body;
  const { user } = req;

  console.log("ORG :", newOrg);
  console.log("user Req:", user);

  const newOrganization = { ...newOrg, user: user._id };

  if (!req.file) {
    throw new MyError("No file uploaded", 400);
  }

  console.log("File", req.files);

  const images = req.files as Express.Multer.File[];

  for (let image of images) {
    const { secure_url } = await cloudinary.uploader.upload(image.path);

    console.log("Uploaded:", secure_url);
    newOrganization.images.push(secure_url);
  }

  console.log("New", newOrganization);

  const Org = await Organization.create(newOrganization);

  res.status(201).json({
    message: "Шинэ ресторан амжилттай бүртгэгдлээ ",
  });
};

export const getOrg = async (req: IReq, res: Response, next: NextFunction) => {
  const { user } = req;

  const findOrg = Organization.findOne({ user: user._id });

  res.status(201).json({
    message: "got successfully",
    findOrg,
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
