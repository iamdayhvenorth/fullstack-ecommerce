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

export default function Navbar() {
  const products = useCartStore((state) => state.products);
  const totalQty =
    products.length > 0
      ? products.map((x) => x.quantity).reduce((a, b) => a + b)
      : 0;

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
              <Link href="/shopping-cart">
                <div className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-white rounded-full text-black text-xs ">
                  {totalQty}
                </div>
                <ShoppingCart />
              </Link>

              {/* cart popup */}
              <CartPopup />
            </div>

            <div className="favorite relative">
              <Link href="/wishlist">
                <Heart className="cursor-pointer" />
              </Link>
            </div>

            <div className="account relative">
              <Link href="/login">
                <UserRound />
              </Link>
              {/* sign in popup */}
              <LoginPopup />
            </div>
          </div>
        </div>
      </nav>

      <div className="shadow-md">
        <div className="w-full max-w-[1100px] p-4 mx-auto flex justify-between items-center">
          {/* left content */}
          <div className="flex items-center gap-2">
            <div className="relative category">
              <div className="flex items-center gap-3 py-2 px-4 bg-[#f2f4f5] rounded text-sm cursor-pointer">
                <span>All Category</span>
                <ChevronDown size={14} className="mt-1" />
              </div>

              {/* Category popup */}
              <CategoryPopup />
            </div>

            <Link
              href="/track-order"
              className="flex items-center gap-1 py-2 px-2 rounded hover:bg-[#f2f4f5]  text-sm cursor-pointer"
            >
              <MapPin size={14} />
              <span>Track Order</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-1 py-2 px-2 rounded hover:bg-[#f2f4f5]  text-sm cursor-pointer"
            >
              <GitCompare size={14} />
              <span>About Us</span>
            </Link>

            <Link
              href="/support"
              className="flex items-center gap-1 py-2 px-2 rounded hover:bg-[#f2f4f5]  text-sm cursor-pointer"
            >
              <Headphones size={14} />
              <span>Customer Support</span>
            </Link>

            <Link
              href="/blog"
              className="flex items-center gap-1 py-2 px-2 rounded hover:bg-[#f2f4f5]  text-sm cursor-pointer"
            >
              <Flame size={14} />
              <span>Blog</span>
            </Link>

            <Link
              href="/help"
              className="flex items-center gap-1 py-2 px-2 rounded hover:bg-[#f2f4f5]  text-sm cursor-pointer"
            >
              <CircleHelp size={14} />
              <span>Need Help</span>
            </Link>
          </div>

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
