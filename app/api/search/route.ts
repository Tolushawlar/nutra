import { connect } from "../../connect/connect";
import { Blog } from "../../models/blogSchema";
import { NextRequest, NextResponse } from "next/server";
import { Food } from "@/app/models/foodSchema";

connect();

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const filter = searchParams.get("filter");
  const query = searchParams.get("query");

  console.log(query);

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
    let regex = new RegExp(query!, "i");

    const getBlog = await Blog.find();

    if (filter == "price" && query != undefined) {
      const [lower, upper]: string[] = query.split(",");
      const getFoodByPrice = await Food.find({
        price: { $gt: lower, $lt: upper },
      });

      console.log(getFoodByPrice);
      return NextResponse.json(getFoodByPrice);
    }
    if (filter == "both" && query != undefined) {
      const [lower, upper, name]: string[] = query.split(",");
      let regex = new RegExp(name!, "i");
      const getFoodByPrice = await Food.find({
        price: { $gt: lower, $lt: upper },
        foodName: { $regex: regex },
      });

      console.log(getFoodByPrice);
      return NextResponse.json(getFoodByPrice);
    }
    if (filter == "foodname") {
      const getFoodByName = await Food.find({
        foodName: { $regex: regex },
      });

      console.log(getFoodByName);
      return NextResponse.json(getFoodByName);
    }
    return NextResponse.json("getFoodByName");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
