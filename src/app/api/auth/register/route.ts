import connectDB from "@/lib/mongodb";
import User from "@/models/userModel";
import { signupSchema } from "@/schemas/userSchema";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"



export async function POST(request:Request) {
  const body = await request.json()
  
  try {
    const result = signupSchema.safeParse({...body})

  if(!result.success) {
    return NextResponse.json({ success: false,error: result.error.issues}, { status: 404 });
  }

  // conncect to the database
    await connectDB();

    // check if email exist
    const duplicateUser = await User.findOne({ email: result.data.email });
    if (duplicateUser) {
      return NextResponse.json({ message: "Email already exists" }, { status: 400 });
    }

    // hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(result.data.password, salt)

    // save to the db
    const newUser = await User.create({...result.data,password:hashedPassword});

    return NextResponse.json({
      success: true,  
      message: "User registered successfully", 
      user: newUser
      }, 
      { status: 201 });
    
  } catch (error) {
    return NextResponse.json({ message: "An error occurred while registering user" }, { status: 500 });
  }
  }


  // export async function GET () {
  //   const COUNTRY_API = "https://countriesnow.space/api/v0.1/countries"
    
  //   try{
  //     const res = await fetch(COUNTRY_API)
  //     const result = await res.json()
  //     return NextResponse.json(result.data,{status: 200})
  //   }catch(err) {
   
  //     return NextResponse.json({message: "Failed to fetch countries"},{status: 500})
  //   }
  // }