"use client";

import { googleLogin } from "@/actions/auth";
import { FaGoogle } from "react-icons/fa";

export default function GoogleButton() {
  return (
    <button
      onClick={() => googleLogin()}
      type="button"
      className="flex items-center gap-3 justify-center border p-2 rounded-sm text-base font-medium"
    >
      <FaGoogle />
      Continue with google
    </button>
  );
}
