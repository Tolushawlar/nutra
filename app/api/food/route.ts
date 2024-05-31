import { connect } from "../../connect/connect";
import { Food } from "../../models/foodSchema";
import { NextRequest, NextResponse } from "next/server";

connect();

export const POST = async (req: NextRequest) => {
  const { foodName, image, isInstant, categories, price, isAvailable } =
    await req.json();

  try {
    const newFood = await Food.create({
      foodName,
      image,
      isInstant,
      categories,
      price,
      isAvailable,
    });
    return NextResponse.json(newFood);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
 
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  console.log(req.url)

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
    const getFood = await Food.findById(id);
    return NextResponse.json(getFood);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
