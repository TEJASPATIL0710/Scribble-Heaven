import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgMagenta);
    } catch (error) {
        console.log(`MongoDB connection error: ${error}`.bgRed.white);
    }
}

export default connectDB;