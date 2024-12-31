import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function LoginPage() {
  return (
    <section className="p-10">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div className="flex items-center justify-center">
          <div className=" rounded-sm max-w-[424px] shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)]">
            <div>
              <h2 className="form-header">Sign In</h2>
            </div>

            <form className="p-6 flex flex-col gap-4">
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

              <p className="text-sm font-normal text-dark">
                Dont have an account ?{" "}
                <Link
                  href="/register"
                  className="text-[#2da5f3] hover:underline"
                >
                  {" "}
                  Sign up
                </Link>
              </p>

              <div className="relative">
                <hr />
                <span className="absolute left-1/2 -top-[14px] -translate-x-1/2 bg-white text-base font-normal text-dark">
                  or
                </span>
              </div>

              <div className="w-full flex flex-col gap-2">
                <button
                  type="button"
                  className="flex items-center gap-3 justify-center border p-2 rounded-sm text-base font-medium "
                >
                  <Image
                    src="/images/Google-logo.png"
                    alt="Google Logo"
                    width={30}
                    height={30}
                  />
                  Login with Google
                </button>
                <button
                  type="button"
                  className="flex items-center gap-3 justify-center border p-2 rounded-sm text-base font-medium"
                >
                  <Image
                    src="/images/apple-logo.png"
                    alt="Google Logo"
                    width={35}
                    height={30}
                  />
                  Login with Apple
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
