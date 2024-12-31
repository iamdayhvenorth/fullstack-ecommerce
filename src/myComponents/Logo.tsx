import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
        <span className="w-5 h-5 rounded-full border-2 border-darkBlue" />
      </span>
      <h2 className="uppercase font-semibold text-white text-2xl">Clicon</h2>
    </Link>
  );
}
