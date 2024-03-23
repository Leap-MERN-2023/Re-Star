import { NextFunction, Request, Response } from "express";
import Organization from "../model/organization";
import User from "../model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";

export const addOrg = async (req: IReq, res: Response, next: NextFunction) => {
  const newOrg = req.body;
  const { user } = req;
  console.log("ORG :", newOrg);

  const newOrganization = { ...newOrg, user: user._id };

  const Org = await Organization.create();

  res.status(201).json({
    message: "Шинэ ресторан амжилттай бүртгэгдлээ ",
  });
};

export const getOrg = async (req: IReq, res: Response, next: NextFunction) => {
  const { user } = req;

  const findUser = Organization.findOne({ user: user._id });

  res.status(201).json({
    message: "got successfully",
  });
};


export const deleteOrg = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
   
    const deleteOrg = req.body
    const Org = await Organization.findById(deleteOrg);

    if (!Organization) {
      throw new MyError(`${deleteOrg}-тэй Org олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${deleteOrg}-тэй Org устгалаа.`,
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

    const updateOrgId = req.body;

    if (!updateOrgId) {
      throw new MyError(`${updateOrgId}-тэй Organization олдсонгүй.`, 400);
    }
    // const food = await Organization.findById({name, updateOrgId});


    res.status(200).json({
      message: `${updateOrgId}-тэй Organization шинэчлэгдлээ.`,
     
    });
  } catch (error) {
    next(error);
  }
};
