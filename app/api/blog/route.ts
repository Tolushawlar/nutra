import { connect } from "../../connect/connect";
import { Blog } from "../../models/blogSchema";
import { NextRequest, NextResponse } from "next/server";

connect();


export const POST = async (req: NextRequest) => {
  const { title, content, image, mastImage, featured, readTime } =
    await req.json();

  try {
    const newBlog = await Blog.create({
      title, content, image, mastImage, featured, readTime
    });
    return NextResponse.json(newBlog);
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
