import { SignupData } from "@/actions/auth"
import { auth } from "@/auth"
import axios, { AxiosError } from "axios"



export const createUser = async (data:SignupData) => {
    try {
        const user = await axios.post("/api/auth/register",data)
        console.log(user)
    } catch (error) {
        // let errorMsg = ""
        if (error instanceof  AxiosError) {
            throw new Error(error.response?.data.message)
        }
        return error
        
    }
}