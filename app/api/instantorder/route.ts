import { connect } from "../../connect/connect";
import { Message } from "../../models/messageSchema";
import { InstantOrder } from "../../models/instantOrderSchema";
import { NextRequest, NextResponse } from "next/server";

connect();

function generateRef(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  console.log(data);
  try {
    const newOrders = await Promise.all(
      Object.entries(data).map(async (dd: any) => {
        if (dd[0] == "delivery") return;
        let d = dd[1];

        const newOrder = await InstantOrder.create({
          foodId: d._id,
          foodName: d.foodName,
          image: d.image,
          name: data.name,
          phone: data.phone,
          address: data.address,
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
      const d = await InstantOrder.deleteOne({});
      console.log(d);
      return NextResponse.json(d);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  try {
    const getMessage = await InstantOrder.find();
    console.log(getMessage);
    return NextResponse.json(getMessage);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
