import { NextFunction, Request, Response } from "express";
import Organization from "../model/organization";
import User from "../model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";

export const addOrg = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newOrganization = req.body;
  console.log("ORG :", newOrganization);

  const user = await Organization.create({ ...newOrganization });

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
