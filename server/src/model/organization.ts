import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";

const OrganizationSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "Name is unique"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  images: [
    {
      type: String,
      required: [true, "Image is required"],
    },
  ],
  category: {
    // type: Schema.ObjectId,
    type: String,
    ref: "Category",
    required: [true, "Category is required"],
  },
  description: {
    type: String,
    default: "",
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  openTime: {
    type: String,
    required: [true, "Open time is required"],
  },
  closeTime: {
    type: String,
    required: [true, "Close time is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  role: {
    type: String,
    enum: ["pending", "approved", "banned"],
    default: "pending",
  },
});

const Organization = model("Organization", OrganizationSchema);

export default Organization;
