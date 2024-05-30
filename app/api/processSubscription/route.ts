import { SubscriptionOrder } from "@/app/models/subscriptionOrderSchema";
import { NextRequest, NextResponse } from "next/server";

let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.PAYSTACK_SECRET_KEY}`);

myHeaders.append("Cache-Control", "no-cache");
myHeaders.append("Content-Type", "application/json");

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  console.log(data);

  const url = "https://api.paystack.co/transaction/initialize";
  const fields = {
    email: "mark.ajekevwoda@gmail.com",
    amount: data.price,
    callback_url: data.url,
    metadata: { cancel_action: data.url + "/api/processcancel" },
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
    await SubscriptionOrder.updateOne(
      { reference: reference },
      { $set: { status: "paid" } },
      { new: true }
    );

    const subOrders = await SubscriptionOrder.find({ reference: reference });

    console.log(subOrders);
    return NextResponse.json({
      data: [subOrders],
      checkRes,
    });
  }
  return NextResponse.error();
};
