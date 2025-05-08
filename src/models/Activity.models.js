import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: "Unknown"
    },
    dateTime: {
        type: Date,
        default: Date.now 
    }
});

export const Activity = mongoose.model("Activity", ActivitySchema);