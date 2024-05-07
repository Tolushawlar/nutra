import { NextRequest, NextResponse } from "next/server";

let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.PAYSTACK_SECRET_KEY}`);

myHeaders.append("Cache-Control", "no-cache");
myHeaders.append("Content-Type", "application/json");

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  // console.log(data);
  // return NextResponse.json({ d: "newFood" });
  const url = "https://api.paystack.co/transaction/initialize";
  const fields = {
    email: "mark.ajekevwoda@email.com",
    amount: data["0"].price,
    callback_url: "http://localhost:3000/api/process",
    metadata: { cancel_action: "http://localhost:3000/api/process" },
    reference: data["0"]._id,
  };

  let requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(fields),
    redirect: "follow",
  };

  const res = await fetch(url, requestOptions);

  console.log(await res.json());

  return NextResponse.json({ d: "newFood" });
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const trxref = searchParams.get("trxref");
  const reference = searchParams.get("reference");

  const url = "https://api.paystack.co/transaction/verify/" + reference;

  let requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const res = await fetch(url, requestOptions);

  console.log(await res.json());

  return NextResponse.json({ d: "newFood" });
};
