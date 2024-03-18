import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatarImg?: string;
  otp?: string;
  role: "admin" | "user" | "moderator";
  createdAt?: Date;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 6,
    // select: false,
  },
  avatarImg: {
    type: String,
  },
  otp: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    enum: ["admin", "user", "moderator"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = model<IUser>("User", userSchema);

export default User;
