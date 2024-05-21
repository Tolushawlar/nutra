import { connect } from "../../connect/connect";
import { ScheduleOrder } from "../../models/scheduleOrderSchema";
import { NextRequest, NextResponse } from "next/server";

connect();

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  try {
    const newOrders = await Promise.all(
      Object.entries(data).map(async (dd: any) => {
        if (dd[0] == "delivery") return;
        let d = dd[1];

        const newOrder = await ScheduleOrder.create({
          foodId: d._id,
          foodName: d.foodName,
          image: d.image,
          name: data.delivery.name,
          phone: data.delivery.phone,
          address: data.delivery.address,
          dayTime: `Day: ${d.data.day} -- Time: ${d.data.time}`,
          price: d.price,
          plates: d.plates ?? 1,
          status: "pending payment",
          reference: "null",
        });
        return newOrder;
      })
    );
    return NextResponse.json(newOrders);
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
      const d = await ScheduleOrder.deleteOne({});
      console.log(d);
      return NextResponse.json(d);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  try {
    const getFood = await ScheduleOrder.find();
    return NextResponse.json(getFood);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
