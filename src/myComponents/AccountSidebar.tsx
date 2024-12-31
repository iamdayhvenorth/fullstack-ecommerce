"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  CreditCard,
  Heart,
  Layers,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { accountLinks } from "@/data";
import Link from "next/link";

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <section className="shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)] rounded-sm overflow-hidden h-fit">
      <ul className="flex flex-col w-[250px]">
        {accountLinks.map(({ Icon, id, path, title }) => (
          <li key={id}>
            <Link
              href={path}
              className={`hover:text-white hover:bg-[#fa8232] p-2 pl-4 text-base flex items-center gap-3 border-b last:border-b-0  ${
                pathname.includes(path)
                  ? "bg-[#fa8232] text-white"
                  : "text-dark bg-transparent"
              }`}
            >
              <span className="text-xs">{<Icon />}</span> <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
