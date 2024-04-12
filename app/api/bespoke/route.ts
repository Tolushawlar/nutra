import { connect } from "../../connect/connect";
import { Message } from "../../models/messageSchema";
import { NextRequest, NextResponse } from "next/server";

connect();

export const POST = async (req: NextRequest) => {
  const { name, phone, location, message } = await req.json();

  try {
    const newMessage = await Message.create({
      name,
      phone,
      location,
      message,
    });
    return NextResponse.json(newMessage);
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
      const d = await Message.deleteOne({});
      console.log(d);
      return NextResponse.json(d);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  try {
    const getMessage = await Message.find();
    return NextResponse.json(getMessage);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
