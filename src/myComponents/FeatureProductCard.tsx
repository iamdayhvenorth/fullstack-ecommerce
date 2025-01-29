import { Eye, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function FeatureProductCard() {
  return (
    <div className="border h-full product relative overflow-hidden">
      {/* overlay */}
      <div className="absolute top-0 -left-[1000px] w-full  bottom-0 bg-dark/50 flex justify-center items-center overlay transition-all duration-500 ease-in-out z-20">
        <div className="flex items-center gap-2">
          <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white transition-colors duration-200 ease-linear hover:text-white hover:bg-[#fa8232] cursor-pointer">
            <Heart size={24} />
          </button>

          <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white transition-colors duration-200 ease-linear hover:text-white hover:bg-[#fa8232] cursor-pointer">
            <ShoppingCart size={24} />
          </button>

          <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white transition-colors duration-200 ease-linear hover:text-white hover:bg-[#fa8232] cursor-pointer">
            <Eye size={24} />
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/images/white-airconditioner.png"
          alt="Air Conditioner"
          width={202}
          height={172}
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col p-2 gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#fa8232] flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <span className="text-[#77878f] text-sm font-normal inline-block">
            (738)
          </span>
        </div>
        <p className="text-dark text-sm font-normal">
          TOZO T6 True Wireless Earbuds Bluetooth Headphone...
        </p>

        <span className="text-[#2da5f3] font-semibold inline-block text-sm">
          $2300
        </span>
      </div>
    </div>
  );
}
