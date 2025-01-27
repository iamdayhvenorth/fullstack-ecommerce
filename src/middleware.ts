// export {auth as middleware} from "@/auth";

import { NextRequest, NextResponse } from "next/server"
import authConfig from "./auth.config"
import NextAuth from "next-auth"
 
// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)
 

const protectedRoutes = "/account"
const publicRoutes = ["/","/about"]
const authRoutes = ["/login","/register"]
const apiRoutes = ["/api/auth"]

const { auth } = NextAuth(authConfig)
export default auth(async (req) => {
  
  const isLoggedIn = !!req.auth
  const {nextUrl} = req
  const isProtected = nextUrl.pathname.startsWith(protectedRoutes)
  const isPublic = publicRoutes.includes(nextUrl.pathname)
  const isApiRoutes = apiRoutes.includes(nextUrl.pathname)
  const url = "http://localhost:3000"
  
  // if it is api/auth route
  if(isApiRoutes) return

  // if we are logged in but it is an auth route just redirect to home/dashboard
  if(isLoggedIn && (authRoutes.includes(nextUrl.pathname))) {
    return Response.redirect(url)
  }

  if((authRoutes.includes(nextUrl.pathname)) && !isLoggedIn) {
    return
  }
  // // if we are not logged in but it is a public route no-restrictions
  // if(!isLoggedIn && isPublic) return

  // if we are not logged in but it is a private route allow-restrictions/redirect
  if(!isLoggedIn && isProtected) {
    return Response.redirect(`${url}/login`)
  }

  
  return
})


export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)'],
}