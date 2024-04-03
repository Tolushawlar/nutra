import { connect } from "../../connect/connect"
import { Food } from "../../models/foodSchema";
import { NextResponse } from "next/server"

connect()

export const POST = async (req) => {
    const { foodName, image, isInstant, categories, price, isAvailable } = await req.json();

    try {
        const newFood = await Food.create({ foodName, image, isInstant, categories, price, isAvailable })
        return NextResponse.json(newFood)
    } catch (error) {
        throw new Error(error.message)
    }
}

export const GET = async () => {
    try {
        const getFood = await Food.find()
        return NextResponse.json(getFood)
    } catch (error) {
        throw new Errow(error.message)
    }
}