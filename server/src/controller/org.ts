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
  try {
    const findOrg = await Organization.findById({ _id: req.params.id });

    res.status(201).json({
      message: "got successfully",
      findOrg,
      haveOrg: true,
    });
  } catch (error) {
    console.log("getOrgById ERROR", error);
  }
};

export const getOrg = async (req: IReq, res: Response, next: NextFunction) => {
  try {
    const allOrgs = await Organization.find();

    res.status(201).json({
      message: "got successfully",
      allOrgs,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserOrgById = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const { user } = req;

  const findOrg = await Organization.findOne({ user: user._id })
    .populate("category")
    .lean();

  res.status(201).json({
    message: "got successfully",
    findOrg,
    haveOrg: true,
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
    const { newUpdate, orgId } = req.body;
    const { user } = req;

    const findOrg = await Organization.findOne({
      user: user._id,
      _id: orgId,
    });

    if (!findOrg) {
      throw new MyError(`Organization not found for the user.`, 404);
    }

    const updatedOrg = await Organization.updateOne(
      { _id: orgId },
      { $set: { ...newUpdate } }
    );

    if (updatedOrg.modifiedCount === 0) {
      throw new MyError(`Organization not updated.`, 500);
    }

    res.status(200).json({
      message: `Organization updated successfully.`,
    });
  } catch (error) {
    next(error);
  }
};
export const updateOrgPic = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { orgId } = req.body;
    const { user } = req;

    const findOrg = await Organization.findOne({
      user: user._id,
      _id: orgId,
    });

    if (!findOrg) {
      throw new MyError(`Organization not found for the user.`, 404);
    }

    const file = req.file as Express.Multer.File;

    const { secure_url } = await cloudinary.uploader.upload(file.path);

    findOrg.images.push(secure_url);
    const org = await findOrg.save();

    res.status(200).json({
      message: `Organization updated successfully.`,
    });
  } catch (error) {
    next(error);
  }
};

export const changeStatus = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user: { role },
    } = req;
    console.log("role", role);
    console.log("role", typeof role);

    if (role !== "admin") {
      throw new MyError("You can not do this action", 200);
    }

    const { orgId, status } = req.body;

    const findOrg = await Organization.findOne({ _id: orgId });
    if (!findOrg) {
      throw new MyError("Restaurant does not exist", 404);
    }
    findOrg.role = status;
    await findOrg.save();

    res.status(200).json({
      message: `Organization status changed successfully.`,
    });
  } catch (error) {
    next(error);
  }
};
