import { connect } from "../../connect/connect";
import { Subscription } from "../../models/subscriptionSchema";
import { SubscriptionOrder } from "../../models/subscriptionOrderSchema";
import { NextRequest, NextResponse } from "next/server";

connect();

export const POST = async (req: NextRequest) => {
  const { subscriptionId, price, address, phone, type, name, image } =
    await req.json();

  if (type == "addSubOrder") {
    try {
      const newSub = await SubscriptionOrder.create({
        subscriptionId,
        address,
        price,
        phone,
      });
      return NextResponse.json(newSub);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  try {
    const newFood = await Subscription.create({
      subscriptionId,
      address,
      price,
      phone,
      name,
      image,
    });
    return NextResponse.json(newFood);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const id = searchParams.get("id");

  if (type == "delete") {
    try {
      const d = await SubscriptionOrder.deleteOne({});
      return NextResponse.json(d);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  if (type == "getSubOrder") {
    try {
      const d = await SubscriptionOrder.find({});
      return NextResponse.json(d);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  try {
    const getFood = await Subscription.find();
    return NextResponse.json(getFood);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
