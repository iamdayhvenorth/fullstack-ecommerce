import React, { useState } from "react";
import GoogleButton from "./GoogleButton";
import GithubButton from "./GithubButton";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { LoginData, loginWithCredentials } from "@/actions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/userSchema";
import toast from "react-hot-toast";

export default function LoginForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setsuccess] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    const user = await loginWithCredentials(data);
    if (user?.success) {
      toast.success("User Logged in");
    } else if (!user?.success && user?.error) {
      toast.error(user.error);
    }
  };

  return (
    <form className="p-6 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-dark mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`border p-2 w-full rounded-sm text-sm `}
          autoComplete="off"
        />

        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="password" className="text-sm  text-dark font-medium">
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
          {...register("password")}
          className={`border p-2 w-full rounded-sm text-sm `}
          autoComplete="off"
        />

        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && <p className="text-sm text-green-600">{success}</p>}

      <button
        disabled={isSubmitting}
        className="bg-[#fa8232] text-white uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear disabled:bg-slate-500 disabled:cursor-not-allowed"
      >
        Sign In
        <FaArrowRight className="mt-[1px]" />
      </button>

      <p className="text-sm font-normal text-dark">
        Dont have an account ?{" "}
        <Link href="/register" className="text-[#2da5f3] hover:underline">
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
        <GoogleButton />
        <GithubButton />
      </div>
    </form>
  );
}
