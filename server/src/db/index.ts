import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";   //used .js -> have to verify and correct it for good practices


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoBD connection error", error);
        process.exit(1);
    }
}

export default connectDB;