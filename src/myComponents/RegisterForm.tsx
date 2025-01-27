"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser, SignupData } from "@/actions/auth";
import { signupSchema } from "@/schemas/userSchema";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  // const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setsuccess] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupData) => {
    setError("");
    setsuccess("");

    const res = await registerUser(data);
    if (res.success && res.message) {
      setsuccess(res.message);
      toast.success(res.message);
      reset();
    }
    if (!res.success && res.error) {
      toast.error(res.error);
      setError(res.error);
    }
  };

  return (
    <form className="p-6 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-dark mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className={`border p-2 w-full rounded-sm text-sm `}
          autoComplete="off"
        />

        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email_address"
          className="text-sm font-medium text-dark mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email_address"
          {...register("email")}
          className={`border p-2 w-full rounded-sm text-sm `}
          autoComplete="off"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="pass" className="text-sm  text-dark font-medium">
          Password
        </label>

        <input
          type="password"
          id="pass"
          {...register("password")}
          placeholder="8+ characters"
          className={`border p-2 w-full rounded-sm text-sm `}
          autoComplete="off"
        />

        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="pass" className="text-sm  text-dark font-medium">
          Confirm Password
        </label>

        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
          placeholder="8+ characters"
          className={`border p-2 w-full rounded-sm text-sm `}
          autoComplete="off"
        />

        {errors.confirmPassword && (
          <p className="text-sm text-red-600">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && <p className="text-sm text-green-600">{success}</p>}

      <div className="flex gap-2 items-start">
        <input type="checkbox" id="privacy" className={"mt-[6px] w-5 h-5"} />
        <label
          className="max-w-[310px] text-dark text-sm font-normal"
          htmlFor="privacy"
        >
          Are you sure you agree to Clicon{" "}
          <span className="text-[#2da5f3] font-medium">Terms of Condition</span>{" "}
          and{" "}
          <span className="text-[#2da5f3] font-medium">Privacy Policy.</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#fa8232] text-white uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear disabled:bg-slate-500"
      >
        Sign Up
        <FaArrowRight className="mt-[2px]" />
      </button>

      <p className="text-sm font-normal text-dark">
        Already have an account ?{" "}
        <Link href="/login" className="text-[#2da5f3] hover:underline">
          {" "}
          Sign in
        </Link>
      </p>

      <div className="relative my-3">
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
          Sign up with Google
        </button>
        {/* <button
          type="button"
          className="flex items-center gap-3 justify-center border p-2 rounded-sm text-base font-medium"
        >
          <Image
            src="/images/apple-logo.png"
            alt="Google Logo"
            width={35}
            height={30}
          />
          Sign up with Apple
        </button> */}
      </div>
    </form>
  );
}
