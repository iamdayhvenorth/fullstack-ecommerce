import { Eye } from "lucide-react";
import React from "react";

export default function PasswordForm() {
  return (
    <form className="flex flex-col gap-2">
      <label className="text-dark font-medium text-sm">
        <span className="block mb-2">Current Password</span>
        <div className="border py-[6px] px-2 rounded-[2px] flex items-center gap-2">
          <input type="password" className="border-none text-sm flex-1" />
          <span className="cursor-pointer">
            <Eye size={16} />
          </span>
        </div>
      </label>

      <label className="text-dark font-medium text-sm">
        <span className="block mb-2">New Password</span>
        <div className="border py-[6px] px-2 rounded-[2px] flex items-center gap-2">
          <input
            type="password"
            className="border-none text-sm flex-1"
            placeholder="8+ characters"
          />
          <span className="cursor-pointer">
            <Eye size={16} />
          </span>
        </div>
      </label>

      <label className="text-dark font-medium text-sm">
        <span className="block mb-2">Confirm Password</span>
        <div className="border py-[6px] px-2 rounded-[2px] flex items-center gap-2">
          <input type="password" className="border-none text-sm flex-1" />
          <span className="cursor-pointer">
            <Eye size={16} />
          </span>
        </div>
      </label>
    </form>
  );
}
