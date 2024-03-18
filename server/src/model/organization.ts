import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";

const OrganizationSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
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
    type: Schema.ObjectId,
    ref: "Category",
    required: [true, "Category is required"],
  },
  description: {
    type: Schema.ObjectId,
    ref: "Description",
    required: [true, "Description is required"],
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Organization = model("Organization", OrganizationSchema);

export default Organization;
