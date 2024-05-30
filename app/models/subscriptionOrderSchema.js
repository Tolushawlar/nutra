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
    name: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
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
  mongoose.model("SubscriptionOrder", subscriptionOrderSchema);

// module.export={ SubscriptionOrder}
