import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: String,
    email: String,
    post: String,
    likes: Number
}, { timestamps: true });

export default mongoose.model('posts', postSchema);