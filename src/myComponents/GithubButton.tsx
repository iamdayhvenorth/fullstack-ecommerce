"use client";

import { FaGithub } from "react-icons/fa";
import { githubLogin } from "@/actions/auth";

export default function GithubButton() {
  return (
    <button
      onClick={() => githubLogin()}
      type="button"
      className="flex items-center gap-3 justify-center border p-2 rounded-sm text-base font-medium"
    >
      <FaGithub />
      Continue with github
    </button>
  );
}
