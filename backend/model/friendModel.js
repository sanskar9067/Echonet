import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
    userEmail: String,
    friendEmail: String
}, { timestamps: true });

export default mongoose.model("friends", friendSchema);