import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";
import bcrypt from "bcrypt";

export const getUserById = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body;
    const findUser = await User.findById(user._id);

    res.status(200).json({
      message: `Захиалгыг амжилттай авлаа`,
      findUser,
    });
  } catch (error) {
    next(error);
  }
};

export const checkPass = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req;
    const { pass } = req.body;

    const find = await User.findOne({ email: user.email })
      .select("+password")
      .lean();

    if (!user) {
      throw new MyError(`Хэрэглэгч олдсонгүй`, 400);
    }

    const isValid = await bcrypt.compare(pass, find!.password);

    if (!isValid) {
      throw new MyError(`Нууц үг буруу байна`, 400);
    }

    res.status(200).json({
      message: `Захиалгыг амжилттай авлаа`,
      isValid: true,
    });
  } catch (error) {
    next(error);
  }
};

export const changeUserData = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { changedUser } = req.body;
    const { user } = req;

    if (!changedUser) {
      throw new MyError(`Хэрэглэгчийн мэдээлэл дутуу байна.`, 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(changedUser.password, salt);

    const findUser = await User.findByIdAndUpdate(
      { _id: user._id },
      {
        name: changedUser.name,
        password: hashedPassword,
        email: changedUser.email,
      }
    );

    await findUser?.save();

    res.status(201).json({
      message: "Хэрэглэгчийн мэдээлэл амжилттай өөрчиллөө.",
      changedUser,
    });
  } catch (error) {
    next(error);
  }
};
