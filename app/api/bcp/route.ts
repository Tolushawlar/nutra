import axios from "axios";
import { connect } from "../../connect/connect";
import { BCPData } from "../../models/bcpDataSchema";
import { NextRequest, NextResponse } from "next/server";
import codes from "./codes";

connect();

export const POST = async (req: NextRequest) => {
  const { name, phone, email, coupon } = await req.json();

  console.log(codes.includes(coupon));
  if (!codes.includes(coupon))
    return NextResponse.json({ error: "codes not legit" }, { status: 404 });
  try {
    const newMessage = await BCPData.create({
      name,
      phone,
      email,
      coupon,
    });
    return NextResponse.json(newMessage);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const coupon = searchParams.get("coupon");

  if (type == "delete") {
    try {
      const d = await BCPData.deleteOne({});
      console.log(d);
      return NextResponse.json(d);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  try {
    const getMessage = await BCPData.find({ coupon, winner: true });
    return NextResponse.json(getMessage);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
