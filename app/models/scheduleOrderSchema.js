import mongoose from "mongoose";

const scheduleOrderSchema = new mongoose.Schema(
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
      required: true,
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
    dayTime: {
      type: String,
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

export const ScheduleOrder =
  mongoose.models.ScheduleOrder ||
  mongoose.model("ScheduleOrder", scheduleOrderSchema);
