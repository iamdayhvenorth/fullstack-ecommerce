// import mongoose from "mongoose"

// const uri = process.env.MONGO_URI as string
// const connectDB = async () => {
//     try {
//         await mongoose.connect(uri)
//         console.log("MongoDB Connected")
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error)
//         process.exit(1)
//     }
// }


import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

let connection: typeof mongoose

const connectDB = async () => {

    try {
        if(!connection) {
            connection = await  mongoose.connect(MONGODB_URI)
         }
     
    } catch (error) {
        throw error
    }
    
}






export default connectDB;
