import { connect } from "../../connect/connect";
import { Blog } from "../../models/blogSchema";
import { NextRequest, NextResponse } from "next/server";

connect();

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const filter = searchParams.get("type");

  if (type == "delete") {
    try {
      const d = await Blog.deleteOne({});
      console.log(d);
      return NextResponse.json(d);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  try {
    const getBlog = await Blog.find();
    return NextResponse.json(getBlog);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
