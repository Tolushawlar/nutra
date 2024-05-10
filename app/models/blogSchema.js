import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true 
    },
    categories: {
        type: [String],
        required: true
    },
    readTime: {
        type: Number,
        required: true
    },
},
    { timestamps: true }
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)