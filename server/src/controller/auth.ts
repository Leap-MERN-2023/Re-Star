import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import MyError from "../utils/myError";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userEmail, userPassword } = req.body;

    const user = await User.findOne({ email: userEmail })
      .select("+password")
      .lean();

    if (!user) {
      throw new MyError(`Хэрэглэгч олдсонгүй`, 400);
    }

    const isValid = await bcrypt.compare(userPassword, user.password);

    if (!isValid) {
      throw new MyError(`Нууц үг буруу байна`, 400);
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    const { password, ...otherParams } = user;

    res.status(201).json({
      message: "Хэрэглэгч амжилттай нэвтэрлээ",
      token,
      user: otherParams,
    });
  } catch (error) {
    next(error);
  }
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body;

    const isExist = await User.findOne({ email: newUser.email });

    if (isExist) {
      throw new MyError("User is registered, go to login", 400);
    }

    const user = await User.create({ ...newUser });

    res.status(201).json({
      message: "Шинэ хэрэглэгч амжилттай бүртгэгдлээ ",
      user,
    });
  } catch (error) {
    next(error);
  }
};
