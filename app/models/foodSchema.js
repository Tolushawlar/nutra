import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isInstant: {
        type: Boolean,
        required: true 
    },
    categories: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        required: true
    }
},
    { timestamps: true }
);

export const Food = mongoose.models.Food || mongoose.model("Food", foodSchema)