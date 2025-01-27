import { LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import GoogleButton from "./GoogleButton";
import GithubButton from "./GithubButton";
import { useSession } from "next-auth/react";
import LogoutButton from "./LogoutButton";
import LoginForm from "./LoginForm";

export default function LoginPopup() {
  const { data: session } = useSession();
  // const session = await auth();

  return (
    <div className="absolute bg-white text-dark p-4 rounded-sm top-8 right-0 w-[350px] z-10 shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)] popup invisible transition-all duration-300 ease-in ">
      {session ? (
        <ul>
          <li>
            <Link href="/account/dashboard">Dashboard</Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      ) : (
        <div>
          <h2 className="text-center text-dark font-semibold py-2 text-xl">
            Sign in to your account
          </h2>
          <LoginForm />
          <p className="text-sm text-dark fornt-normal text-center mb-2">
            Dont have an account ?
          </p>

          <Link
            href="/register"
            className="border border-[#fa8232] text-[#fa8232] uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3"
          >
            Create Account
            <FaArrowRight className="mt-[1px]" />
          </Link>
        </div>
      )}
    </div>
  );
}
