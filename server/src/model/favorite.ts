import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";

const favoriteSchema = new Schema({
  organizations: [{ type: Schema.Types.ObjectId, ref: "Organization" }],
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: [true, "User is is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Favorite = model("Favorite", favoriteSchema);

export default Favorite;
