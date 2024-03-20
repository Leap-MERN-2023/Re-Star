import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";

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
    const { userData } = req.body;
    const { user } = req;

    if (!userData) {
      throw new MyError(`Хэрэглэгчийн мэдээлэл дутуу байна.`, 400);
    }

    const findUser = await User.updateMany(
      { _id: user._id },
      {
        $set: {
          name: userData.name,
          password: userData.password,
          email: userData.email,
        },
      }
    );

    res.status(201).json({
      message: "Хэрэглэгчийн мэдээлэл амжилттай өөрчиллөө.",
      findUser,
    });
    console.log("successfully changed user data", findUser);
  } catch (error) {
    next(error);
  }
};
