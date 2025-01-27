"use client";

import { SessionProvider } from "next-auth/react";

interface Prop {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Prop) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
