import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import { popularTags } from "@/data";

export default function Footer() {
  return (
    <footer className="pt-6 bg-dark">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4 text-white pb-10">
        <div className="flex justify-center items-start gap-10">
          {/* Contacts */}
          <div className="flex flex-col gap-3">
            <Logo />
            <div>
              <div className="flex flex-col">
                <span className="block font-normal text-sm text-[#77878f]">
                  Customer Support :
                </span>
                <span className="text-base font-medium text-white">
                  (629) 555-0129
                </span>
              </div>
              <p className="my-3 max-w-[248px] text-base font-normal text-[#adb7bc]">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <span>info@kinbo.com</span>
            </div>
          </div>

          {/* Top Category */}
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-base text-white uppercase">
              Top Category
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="text-sm font-medium text-[#929fa5]">
                Computer & Laptop
              </li>
              <li className="text-sm font-medium text-[#929fa5]">SmartPhone</li>
              <li className="text-sm font-medium text-[#929fa5]">Headphone</li>
              <li className="flex items-center gap-2 font-medium">
                <span className="w-6 h-[2px] bg-[#ebc80c] block" /> Accessories
              </li>
              <li className="text-sm font-medium text-[#929fa5]">
                Camera & Photo
              </li>
              <li className="text-sm font-medium text-[#929fa5]">TV & Homes</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-base text-white uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="text-sm font-medium text-[#929fa5]">
                Shop Product
              </li>
              <li className="text-sm font-medium text-[#929fa5]">
                Shopping Cart
              </li>
              <li className="text-sm font-medium text-[#929fa5]">Headphone</li>

              <li className="text-sm font-medium text-[#929fa5]">Wishlist</li>
              <li className="text-sm font-medium text-[#929fa5]">
                Track Order
              </li>
              <li className="text-sm font-medium text-[#929fa5]">
                Customer Help
              </li>
              <li className="text-sm font-medium text-[#929fa5]">
                Track About Us
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-base text-white uppercase">
              Download App
            </h3>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-2 py-4 px-5 rounded-sm bg-[#303639] text-white w-[176px]">
                <Image
                  src="/images/google-store.svg"
                  alt="Google Store"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col items-start">
                  <span className="text-[0.6875rem] leading-[0.8125rem] text-white">
                    Get it now
                  </span>
                  <span>Google Play</span>
                </div>
              </button>

              <button className="flex items-center gap-2 py-4 px-5 rounded-sm bg-[#303639] text-white w-[176px]">
                <Image
                  src="/images/apple-store.svg"
                  alt="Apple Store"
                  width={32}
                  height={32}
                />

                <div className="flex flex-col items-start">
                  <span className="text-[0.6875rem] leading-[0.8125rem] text-white">
                    Get it now
                  </span>
                  <span>Apple Store</span>
                </div>
              </button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="font-medium text-base text-white uppercase">
              Popular Tags
            </h3>
            <ul className="flex gap-2 flex-wrap">
              {popularTags.map((tag) => (
                <li
                  key={tag}
                  className="py-[6px] px-3 border rounded-sm text-white text-sm font-medium hover:border-white hover:bg-[#303639] transition-colors duration-200 ease-linear w-fit"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t p-4">
        <p className="text-sm text-center text-[#adb7bc] font-normal">
          Kinbo - eCommerce Template &copy; {new Date().getFullYear()}. Designed
          by DaveCodeSolution
        </p>
      </div>
    </footer>
  );
}
