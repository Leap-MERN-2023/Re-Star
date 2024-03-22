import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";
import bcrypt from "bcrypt";

export const getUserById = async (
  req: Request,
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

export const changeUserData = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { changedUser } = req.body;
    const { user } = req;

    console.log("userID", user);
    console.log("changedUser", changedUser);

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
    console.log("DONE");

    await findUser?.save();
    res.status(201).json({
      message: "Хэрэглэгчийн мэдээлэл амжилттай өөрчиллөө.",
      changedUser,
    });
    console.log("successfully changed user data", changedUser);
  } catch (error) {
    next(error);
  }
};
