import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";

const favoriteSchema = new Schema({
  organizations: [
    {
      type: Schema.ObjectId,
      required: true,
    },
  ],
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: [true, "Name is required"],
    default: "false",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Favorite = model("Favorite", favoriteSchema);

export default Favorite;
