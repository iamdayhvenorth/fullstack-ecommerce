"use client";

import { ForgotPassEmail, forgotPassword } from "@/actions/auth";
import { forgotPasswordSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPassEmail>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPassEmail) => {
    const res = await forgotPassword(data);
    if (res.success && res.message) {
      toast.success(res.message);
      reset();
    }
    if (!res.success && res.message) {
      toast.success(res.message);
      reset();
    }

    if (res.error) {
      toast.error(res.error);
    }
  };
  return (
    <section className="p-10">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div className="flex items-center justify-center">
          <div className="rounded-sm max-w-[424px] shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)]">
            <div className="p-4">
              <h1 className="text-2xl text-center">Forgot Password</h1>
              <p className="text-center mt-2 max-w-[320px] mx-auto text-dark text-sm">
                Enter the email address or mobile phone number associated with
                your Clicon account.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 p-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-dark mb-1"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  {...register("email")}
                  className={`border p-2 w-full rounded-sm text-sm ${
                    errors.email ? "border-red-600" : ""
                  }`}
                  autoComplete="off"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <p className="text-sm font-normal text-dark">
                  Already have an account ?{" "}
                  <Link
                    href="/login"
                    className="text-[#2da5f3] hover:underline"
                  >
                    Sign in
                  </Link>
                </p>

                <p className="text-sm font-normal text-dark">
                  Dont have an account ?{" "}
                  <Link
                    href="/register"
                    className="text-[#2da5f3] hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#fa8232] text-white uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear disabled:bg-slate-500"
              >
                Send Code
                <FaArrowRight className="mt-[1px]" />
              </button>
            </form>

            <div className="p-4 border-t">
              <p className=" max-w-[330px] text-dark text-sm">
                You may contact{" "}
                <Link href="/" className="text-[#fa8232]">
                  Customer Service
                </Link>{" "}
                for help restoring access to your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
