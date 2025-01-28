"use client";

import { resetPassword, ResetPasswordForm } from "@/actions/auth";
import { resetPasswordSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const userId = searchParams.get("userId");
  console.log(token);
  console.log(userId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordForm) => {
    const res = await resetPassword(data, token, userId);
    if (res.success && res.message) {
      toast.success(res.message);
      reset();
      redirect("/login");
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
            <div className="p-4 border-b">
              <h1 className="text-2xl text-center">Reset Password</h1>
              <p className="text-center mt-2 max-w-[320px] mx-auto text-dark text-sm">
                Please enter your new password
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 p-6 "
            >
              <div>
                <label
                  htmlFor="password"
                  className="text-sm  text-dark font-medium"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  className={`border p-2 w-full rounded-sm text-sm ${
                    errors.password ? "border-red-600" : ""
                  }`}
                  autoComplete="off"
                />
                {errors.password && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="cPassword"
                  className="text-sm  text-dark font-medium"
                >
                  Confirm Password
                </label>

                <input
                  type="password"
                  id="cPassword"
                  {...register("confirmPassword")}
                  className={`border p-2 w-full rounded-sm text-sm ${
                    errors.confirmPassword ? "border-red-600" : ""
                  }`}
                  autoComplete="off"
                />
                {errors.confirmPassword && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#fa8232] text-white uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear disabled:bg-slate-500"
              >
                Reset Password
                <FaArrowRight className="mt-[1px]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
