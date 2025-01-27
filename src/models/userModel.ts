import { LoginData } from "@/actions/auth"
import mongoose from "mongoose"

// interface UserWithCredentials {
//     name: string
//     email: string
//     password: string
//     role?: string
//     provider: "Credentials" | "Google" | "Github"
//     lastLogin?: Date
// }


const userSchema = new mongoose.Schema({
    name: {
        type: String,
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
    roles: {
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    },
    provider: {
        type: String,
        enum: ["Credentials", "Google", "Github"],
        default: "Credentials"
    },
    lastLogin: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true,
})



const User = mongoose.models.User ||  mongoose.model("User", userSchema)

export const createFromModel = async (data:LoginData) => {
   return await User.findOne({email:data.email})
}

export default User