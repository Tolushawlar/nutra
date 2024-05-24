import mongoose from "mongoose";

const subscriptionOrderSchema = new mongoose.Schema(
  {
    subscriptionId: {
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
    phone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const SubscriptionOrder =
  mongoose.models.SubscriptionOrder ||
  mongoose.model("subscriptionOrder", subscriptionOrderSchema);
