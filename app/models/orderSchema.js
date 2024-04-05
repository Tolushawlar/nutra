import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    plates: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order =
  mongoose.models.Order || mongoose.model("Order", orderSchema);
