import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";

const DescriptionSchema = new Schema({
  organization: {
    type: Schema.ObjectId,
    required: [true, "Name is required"],
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: [true, "Name is required"],
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
});

const Description = model("Description", DescriptionSchema);

export default Description;
