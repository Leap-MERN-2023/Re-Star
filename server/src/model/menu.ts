import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";

const MenuSchema = new Schema({
  organization: {
    type: Schema.ObjectId,
    ref: "Organization",
    required: [true, "Organization is required"],
  },
  foods: [
    {
      name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
        maxLength: [50, "category can not be longer than 50"],
      },
      description: {
        type: String,
        required: [true, "category is required"],
        default: "",
      },
      price: {
        type: Number,
        default: 0,
        required: [true, "price is required "],
      },
      image: {
        type: String,
        default: "no-category-photo",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Review = model("Review", MenuSchema);

export default Review;
