import connectDB from "@/lib/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

interface RequestBody {
    email: string
    password: string
}

export async function POST (req:Request) {
    const {email,password}:RequestBody = await req.json()

    if (!email || !password) {
        return NextResponse.json({success: false, message: "Email and Password required"},{status:400});
    }

    // check if user exist in the db
    const isValidUser = await User.findOne({email})

    if(!isValidUser) {
        return NextResponse.json({success: false, message: "Invalid Credentials"},{status:400});
    }

    // check if passwword match
    const passwordMatch = await bcrypt.compare(password,isValidUser.password)

    if(!passwordMatch) {
        return NextResponse.json({success: false, message: "Invalid Credentials"},{status:400});
    }

    return NextResponse.json({success: true, message: "user successfully logged in"},{status:200});
}