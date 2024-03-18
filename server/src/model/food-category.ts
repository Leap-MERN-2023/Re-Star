import { Schema, model } from "mongoose";

const FoodCategorySchema = new Schema({
  name: [
    {
      type: String,
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  organization: {
    type: Schema.ObjectId,
    ref: "Organization",
    required: [true, "Organization is required"],
  },
});

const FoodCategory = model("FoodCategory", FoodCategorySchema);

export default FoodCategory;
