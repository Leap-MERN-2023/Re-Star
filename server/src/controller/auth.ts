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
    console.log("begin");
    const { userEmail, userPassword } = req.body;
    console.log("req.body", req.body);

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

    console.log("token", token);

    res.status(201).json({
      message: "Хэрэглэгч амжилттай нэвтэрлээ",
      token,
      user: otherParams,
    });

    console.log("Хэрэглэгч амжилттай нэвтэрлээ", user);
  } catch (error) {
    next(error);
  }
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newUser = req.body;
  console.log("user", newUser);
  const user = await User.create({ ...newUser });

  res.status(201).json({
    message: "Шинэ хэрэглэгч амжилттай бүртгэгдлээ ",
    user,
  });
};
