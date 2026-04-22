import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGDB_LIVE_URI)
        if (conn) {
            console.log(`Database is connected: ${conn.connection.host}`)
        } else {
            console.log(`Database isn't connected`)
        }
    } catch (error) {
        console.log("ERR:", error)
    }
}