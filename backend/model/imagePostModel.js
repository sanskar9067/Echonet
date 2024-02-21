import mongoose from 'mongoose';

const imagePostModel = new mongoose.Schema({
    name: String,
    email: String,
    post: String,
    location: String,
    likes: Number
})

export default mongoose.model('imageposts', imagePostModel);