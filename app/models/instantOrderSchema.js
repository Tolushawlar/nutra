import mongoose from "mongoose";

const instantOrderSchema = new mongoose.Schema(
  {
    foodId: {
      type: String,
      required: true,
    },
    foodName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    plates: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const InstantOrder =
  mongoose.models.InstantOrder ||
  mongoose.model("InstantOrder", instantOrderSchema);
