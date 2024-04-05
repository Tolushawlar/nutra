import { connect } from "../../connect/connect";
import { Order } from "../../models/orderSchema";
import { NextRequest, NextResponse } from "next/server";

connect();

export const POST = async (req: NextRequest) => {
  const { foodName, image, price, address, plates } = await req.json();

  try {
    const newFood = await Order.create({
      foodName,
      image,
      address,
      plates,
      status: "pending",
      price,
    });
    return NextResponse.json(newFood);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const GET = async (req: NextRequest) => {
  // const { searchParams } = new URL(req.url);
  // const type = searchParams.get("type");
  // const id = searchParams.get("id");

  // if (type == "delete") {
  //   try {
  //     const d = await Food.deleteOne({});
  //     console.log(d);
  //     return NextResponse.json(d);
  //   } catch (error: any) {
  //     throw new Error(error.message);
  //   }
  // }
  try {
    const getFood = await Order.find();
    return NextResponse.json(getFood);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
