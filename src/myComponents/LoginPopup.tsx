import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function LoginPopup() {
  return (
    <div className="absolute bg-white text-dark p-4 rounded-sm top-8 right-0 w-[350px] z-10 shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)] popup invisible transition-all duration-300 ease-in ">
      <div>
        <h2 className="text-center text-dark font-semibold py-2 text-xl">
          Sign in to your account
        </h2>

        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-dark mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border p-2 w-full rounded-sm text-sm"
              required
              autoComplete="off"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label
                htmlFor="password"
                className="text-sm  text-dark font-medium"
              >
                Password
              </label>
              <Link
                href={"/login/forget-password"}
                className="text-sm font-medium text-[#2da5f3]"
              >
                Forgot Password
              </Link>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              className="border p-2 w-full rounded-sm text-sm"
              required
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="bg-[#fa8232] text-white uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear"
          >
            Sign In
            <FaArrowRight className="mt-[1px]" />
          </button>

          <p className="text-sm text-dark fornt-normal text-center">
            Dont have an account ?
          </p>

          <Link
            href="/register"
            className="border border-[#fa8232] text-[#fa8232] uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3"
          >
            Create Account
            <FaArrowRight className="mt-[1px]" />
          </Link>
        </form>
      </div>
    </div>
  );
}
