import mongoose, { mongo } from "mongoose"

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB connected successfully")
    } catch (error) {
        console.log("Error", error)
    }
}

export default connectDB