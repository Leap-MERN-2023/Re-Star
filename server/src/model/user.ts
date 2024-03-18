import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";

const userSchema = new Schema({
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
    select: false,
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
  owner: {
    type: Schema.ObjectId,
    default: "false",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = model("User", userSchema);

export default User;
