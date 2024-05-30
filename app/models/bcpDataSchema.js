import mongoose from "mongoose";

const bcpDataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    wonItem: {
      type: String,
    },
    winner: {
      type: Boolean,
    },
    coupon: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const BCPData =
  mongoose.models.BCPData || mongoose.model("BCPData", bcpDataSchema);
