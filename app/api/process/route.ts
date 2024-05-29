import { InstantOrder } from "@/app/models/instantOrderSchema";
import { ScheduleOrder } from "@/app/models/scheduleOrderSchema";
import { NextRequest, NextResponse } from "next/server";

let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.PAYSTACK_SECRET_KEY}`);

myHeaders.append("Cache-Control", "no-cache");
myHeaders.append("Content-Type", "application/json");

function generateRef(length: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
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

  const url = "https://api.paystack.co/transaction/initialize";
  const fields = {
    email: "mark.ajekevwoda@gmail.com",
    amount: data.price,
    callback_url: data.url,
    metadata: { cancel_action: "http://localhost:3000/api/process" },
    reference: data[0].reference,
  };

  let requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(fields),
    redirect: "follow",
  };

  const res = await fetch(url, requestOptions);
  const d = await res.json();

  return NextResponse.json(d);
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const reference = searchParams.get("reference");

  // return NextResponse.json(
  //   Array.from({ length: 1000 }).map((_) => "NSP-" + generateRef(6))
  // );

  const url = "https://api.paystack.co/transaction/verify/" + reference;

  let requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const res = await fetch(url, requestOptions);
  const checkRes = await res.json();

  if (
    checkRes.data.reference == reference &&
    checkRes.data.status == "success"
  ) {
    await InstantOrder.updateMany(
      { reference: reference },
      { $set: { status: "paid", reference } },
      { new: true }
    );

    await ScheduleOrder.updateMany(
      { reference: reference },
      { $set: { status: "paid", reference } },
      { new: true }
    );

    const instantOrders = await InstantOrder.find({ reference: reference });
    const scheduleOrders = await ScheduleOrder.find({ reference: reference });

    console.log(instantOrders);
    return NextResponse.json({
      data: [...scheduleOrders, ...instantOrders],
      checkRes,
    });
  }
  return NextResponse.error();
};
