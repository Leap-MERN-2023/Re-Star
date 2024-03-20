import { NextFunction, Request, Response } from "express";
import Organization from "../model/organization";
import User from "../model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import MyError from "../utils/myError";

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

export const getOrg = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const findUser = Organization.find();
  res.status(201).json({
    message: "Шинэ ресторан амжилттай бүртгэгдлээ ",
  });
};
