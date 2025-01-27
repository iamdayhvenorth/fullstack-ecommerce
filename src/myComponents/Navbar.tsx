"use client";

import {
  ChevronDown,
  CircleHelp,
  Flame,
  GitCompare,
  Headphones,
  Heart,
  MapPin,
  PhoneCall,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import Logo from "./Logo";
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import LoginPopup from "./LoginPopup";
import CartPopup from "./CartPopup";
import CategoryPopup from "./CategoryPopup";
import { useCartStore } from "@/store/cartStore";
import { usePathname } from "next/navigation";
import { useWishListStore } from "@/store/wishlistStore";
import { navLinks } from "@/data";

export default function Navbar() {
  const products = useCartStore((state) => state.products);
  const wishlist = useWishListStore((state) => state.products);
  const totalQty =
    products.length > 0
      ? products.map((x) => x.quantity).reduce((a, b) => a + b)
      : 0;

  const pathname = usePathname();

  return (
    <header>
      {/* ads */}
      <div className="bg-dark p-4 hidden md:block">
        <div className="w-full max-w-[1100px] mx-auto flex justify-between items-center">
          <div className="text-white flex gap-2 items-center">
            <span className="inline-block bg-[#d3ba2c] py-1 px-2  text-black font-semibold text-sm -rotate-3">
              Black
            </span>
            <span className="font-semibold">Friday</span>
          </div>

          <div className="flex gap-1 text-white items-center">
            <span className="text-xs">Up to</span>
            <span className="text-[#ebc80c] text-lg font-semibold">59%</span>
            <span className="uppercase text-xs">off</span>
          </div>

          <button className="bg-[#ebc80c] px-3 py-2 rounded-sm font-semibold flex items-center gap-2 uppercase text-xs">
            <span>shop now</span>
          </button>
        </div>
      </div>

      <nav className="w-full bg-darkBlue">
        {/* welcome greeting */}
        <div className="w-full max-w-[1100px] p-4 mx-auto flex justify-between items-center flex-col md:flex-row gap-1">
          <p className="text-white text-sm">
            welcome to clicon online ecommerce store.
          </p>

          <div className="text-white flex items-center">
            <div className="flex items-center gap-2 pr-4 border-r">
              {/* social icons */}
              <p>Follow us : </p>
              <div className="flex gap-2 items-center mt-1">
                <FaInstagram className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
                <FaFacebookF className="cursor-pointer" />
                <FaPinterest className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center gap-3 pl-4">
              <span>Eng</span>
              <span>USD</span>
            </div>
          </div>
        </div>

        <hr />

        <div className="w-full max-w-[1100px] p-4 mx-auto flex justify-between items-center">
          {/* logo */}
          <Logo />

          {/* search form */}
          <form className="flex items-center w-[45%] rounded-sm  pl-2 pr-5  bg-white">
            <input
              type="text"
              placeholder=" search for product..."
              className="bg-transparent outline-none flex-1 p-2"
            />
            <Search className="text-black cursor-pointer" />
          </form>

          {/* icons */}

          <div className="text-white flex items-center gap-4">
            <div className="relative cart">
              <Link
                href="/shopping-cart"
                className={`hover:text-[#fa8232] ${
                  pathname.includes("/shopping-cart") ? "text-[#fa8232]" : ""
                }`}
              >
                {totalQty > 0 ? (
                  <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-[#fa8232] rounded-full text-white font-medium text-xs ">
                    {totalQty}
                  </span>
                ) : null}
                <ShoppingCart />
              </Link>

              {/* cart popup */}
              {!pathname.includes("shopping-cart") && <CartPopup />}
            </div>

            <div className="favorite relative">
              <Link
                href="/wishlist"
                className={`hover:text-[#fa8232] ${
                  pathname.includes("/wishlist") ? "text-[#fa8232]" : ""
                }`}
              >
                {wishlist.length > 0 ? (
                  <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-[#fa8232] rounded-full text-white font-medium text-xs ">
                    {wishlist.length}
                  </span>
                ) : null}
                <Heart />
              </Link>
            </div>

            <div className="account relative">
              <Link
                href="/login"
                className={`hover:text-[#fa8232] ${
                  pathname.includes("/login") ? "text-[#fa8232]" : ""
                }`}
              >
                <UserRound />
              </Link>
              {/* sign in popup */}
              {!pathname.includes("/login") && <LoginPopup />}
            </div>
          </div>
        </div>
      </nav>

      <div className="shadow-md">
        <div className="w-full max-w-[1100px] p-4 mx-auto flex justify-between items-center">
          {/* left content */}
          <ul className="flex items-center gap-2">
            <li className="relative category">
              <div className="flex items-center gap-3 py-2 px-4 bg-[#f2f4f5] rounded text-sm cursor-pointer">
                <span>All Category</span>
                <ChevronDown size={14} className="mt-1" />
              </div>

              {/* Category popup */}
              <CategoryPopup />
            </li>

            {navLinks.map((navlink) => (
              <li key={navlink.label}>
                <Link
                  href={navlink.path}
                  className={`flex items-center gap-1 py-2 px-2 rounded hover:bg-[#f2f4f5] hover:text-[#fa8232]  text-sm cursor-pointer ${
                    pathname.includes(navlink.path)
                      ? "text-[#fa8232] bg-[#f2f4f5] "
                      : ""
                  }`}
                >
                  <navlink.icon size={14} />
                  <span>{navlink.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* right content */}
          <Link href="/" className="flex items-center gap-1">
            <PhoneCall size={16} />
            <span>+1-202-555-0104</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
