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

  const findOrg = await Organization.findOne({ user: user._id }).lean();
  console.log("findOrg", findOrg);

  res.status(201).json({
    message: "got successfully",
    findOrg,
    haveOrg: true,
  });
};

export const getOrg = async (req: IReq, res: Response, next: NextFunction) => {
  const userOrgs = await Organization.find();

  res.status(201).json({
    message: "got successfully",
    userOrgs,
  });
};

export const deleteOrg = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params;
    const { user } = req;

    const findOrg = await Organization.findOne({ user: user.id });

    if (!findOrg) {
      throw new MyError(` Orgization  олдсонгүй.`, 400);
    }

    const data = findOrg.deleteOne({ _id: id });
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

    const { newUpdate } = req.body;
    const { user } = req;

    const findOrg = await Organization.updateOne(
      {
        $and: [{ user: user._id }, { _id: updateOrg.id }],
      },
      {
        ...newUpdate,
      }
    );

    if (!findOrg) {
      throw new MyError(`Хэрэглэгчид бүртгэлтэй Organization олдсонгүй.`, 400);
    }
    console.log("first", findOrg);

    res.status(200).json({
      message: ` Organization шинэчлэгдлээ.`,
      findOrg,
    });
    console.log("success");
  } catch (error) {
    next(error);
  }
};
