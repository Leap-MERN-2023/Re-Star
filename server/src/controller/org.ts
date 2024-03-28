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
    console.log("findOrg", findOrg);

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
    console.log("all org", allOrgs);

    res.status(201).json({
      message: "got successfully",
      allOrgs,
    });
  } catch (error) {
    next(error);
  }
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

// export const updateOrg = async (
//   req: IReq,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const updateOrg = req.body;

//     const { newUpdate } = req.body;
//     const { user } = req;
//     console.log("user", user._id);
//     console.log("user", updateOrg);

//     const findOrgs = await Organization.findOne({ user: user._id });

//     if (!findOrgs) {
//       throw new MyError(`Хэрэглэгчид бүртгэлтэй Organization олдсонгүй.`, 400);
//     }

//     const findOrg = await Organization.updateOne(
//       {
//         $and: [{ user: user._id }, { _id: updateOrg.id }],
//       },
//       {
//         $set: { ...newUpdate },
//       }
//     );

//     res.status(200).json({
//       message: ` Organization шинэчлэгдлээ.`,
//     });

//     // console.log("first", findOrg);
//     // console.log("success", updatedOrg);
//   } catch (error) {
//     next(error);
//   }
// };

// Adjust the import path accordingly

export const updateOrg = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { newUpdate, orgId } = req.body; // Assuming orgId is provided in the request body
    const { user } = req;

    console.log("User ID:", user._id);
    console.log("Organization ID:", orgId);
    console.log("New Update Data:", newUpdate);

    // Check if the user is the owner of the organization
    const findOrg = await Organization.findOne({
      user: user._id,
      _id: orgId,
    });

    if (!findOrg) {
      throw new MyError(`Organization not found for the user.`, 404);
    }

    // Update the organization based on the organization ID
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
