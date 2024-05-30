import { Subscription } from "@/app/models/subscriptionSchema";
import { connect } from "../../connect/connect";
import { Food } from "../../models/foodSchema";
import { NextRequest, NextResponse } from "next/server";

connect();

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  console.log(body);
  // return NextResponse.json("newSub");
  try {
    const newSub = await Subscription.create(
      body.map((body: any, i: number) => {
        return {
          "Week 1": body["Week 1"],
          "Week 2": body["Week 2"],
          "Week 3": body["Week 3"],
          "Week 4": body["Week 4"],
          options: body.option,
          price: body.price,
        };
      })
    );
    console.log(newSub);
    return NextResponse.json(newSub);
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
      const d = await Food.deleteOne({});
      console.log(d);
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
