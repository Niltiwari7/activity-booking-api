import mongoose from "mongoose";


export const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL).then(()=>{
            console.log("Connected to DataBase");
        })
    } catch (error) {
        console.error(error);
    }
}