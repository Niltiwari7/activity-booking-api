import mongoose from "mongoose";

const FullNameSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

const UserSchema = new mongoose.Schema({
    fullName: {
        type: FullNameSchema,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

export const User = mongoose.model("User", UserSchema);