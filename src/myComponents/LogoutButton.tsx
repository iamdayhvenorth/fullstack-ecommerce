"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const logout = async () => {
    await signOut();
  };

  return (
    <button onClick={() => logout()} className="flex items-center gap-2">
      <LogOut /> <span>Logout</span>
    </button>
  );
}
