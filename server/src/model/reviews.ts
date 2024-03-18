import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";

const ReviewSchema = new Schema({
  organization: {
    type: Schema.ObjectId,
    ref: "Organization",
    required: [true, "Organization is required"],
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  score: {
    type: Number,
    required: [true, "Score is required"],
    default: 1,
  },
  message: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Review = model("Review", ReviewSchema);

export default Review;
