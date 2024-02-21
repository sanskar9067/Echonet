import mongoose from 'mongoose';
const url = 'mongodb+srv://sanskarsinha:qwerty12345@ecom.xg97s3o.mongodb.net/echonet';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url);
        console.log(`Connected to DB: ${conn.connection.host}`);
    }
    catch (err) {
        console.log(err);
    }
}

export default connectDB;