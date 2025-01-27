"use client";

import { changePassword, UpdatePassword } from "@/actions/auth";
import { changePasswordSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function PasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UpdatePassword>({
    resolver: zodResolver(changePasswordSchema),
  });

  const handlePasswordChange = async (data: UpdatePassword) => {
    const res = await changePassword(data);
    if (res.success && res.message) {
      toast.success(res.message);
      reset();
    }
    if (!res.success && res.error) {
      toast.error(res.error);
    }
  };
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(handlePasswordChange)}
    >
      <label className="text-dark font-medium text-sm">
        <span className="block mb-2">Current Password</span>
        <div
          className={`border py-[6px] px-2 rounded-[2px] flex items-center gap-2 ${
            errors.oldPassword ? "border-red-600" : ""
          }`}
        >
          <input
            type="password"
            id="oldPassword"
            placeholder="Enter your old password"
            className="border-none text-sm flex-1"
            {...register("oldPassword")}
          />
          <span className="cursor-pointer">
            <Eye size={16} />
          </span>
        </div>
        {errors.oldPassword && (
          <p className="text-sm text-red-600 mt-2">
            {errors.oldPassword.message}
          </p>
        )}
      </label>

      <label className="text-dark font-medium text-sm">
        <span className="block mb-2">New Password</span>
        <div
          className={`border py-[6px] px-2 rounded-[2px] flex items-center gap-2 ${
            errors.newPassword ? "border-red-600" : ""
          }`}
        >
          <input
            type="password"
            id="newPassword"
            className="border-none text-sm flex-1"
            {...register("newPassword")}
            placeholder="8+ characters"
          />
          <span className="cursor-pointer">
            <Eye size={16} />
          </span>
        </div>

        {errors.newPassword && (
          <p className="text-sm text-red-600 mt-2">
            {errors.newPassword.message}
          </p>
        )}
      </label>

      <label className="text-dark font-medium text-sm">
        <span className="block mb-2">Confirm Password</span>
        <div
          className={`border py-[6px] px-2 rounded-[2px] flex items-center gap-2 ${
            errors.confirmNewPassword ? "border-red-600" : ""
          }`}
        >
          <input
            type="password"
            id="confirmNewPassword"
            placeholder="Confirm new password"
            className="border-none text-sm flex-1"
            {...register("confirmNewPassword")}
          />
          <span className="cursor-pointer">
            <Eye size={16} />
          </span>
        </div>

        {errors.confirmNewPassword && (
          <p className="text-sm text-red-600 mt-2">
            {errors.confirmNewPassword.message}
          </p>
        )}
      </label>

      <div className="mt-4">
        <button
          disabled={isSubmitting}
          className="text-sm font-semibold text-white bg-[#fa8232] py-2 px-3 rounded-[2px] opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in uppercase w-fit disabled:bg-slate-500 disabled:cursor-not-allowed"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
