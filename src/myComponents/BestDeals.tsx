"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import DealCard from "./DealCard";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { products } from "@/data";

export default function BestDeals() {
  const productCard = products.map((item) => (
    <DealCard key={item.id} {...item} />
  ));

  return (
    <section className="py-6">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-2xl text-dark">Best Deals</h3>
              <span className="text-base font-normal text-black block">
                Deals ends in
              </span>
              <span className="block bg-[#f3de6d] px-3 py-[6px] rounded-sm">
                16d : 21h : 57m : 23s
              </span>
            </div>

            <Link
              href={"/products"}
              className="flex items-center gap-2 text-[#2da5f3] font-semibold text-sm "
            >
              <span>Browse All Products</span>
              <FaArrowRight className="mt-1" />
            </Link>
          </div>

          <div className="mt-3 grid grid-cols-5">
            <div className="border row-span-2 py-4 px-2 relative flex flex-col gap-4">
              <div>
                <Image
                  src="/images/ps5.png"
                  alt="PS5"
                  width={280}
                  height={260}
                  priority
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#ebc80c] flex gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>

                  <span className="text-[#77878f] text-sm font-normal">
                    (52,677)
                  </span>
                </div>

                <p className="font-medium text-dark text-base">
                  Xbox Series S - 512GB SSD Console with Wireless Controller -
                  EU Versio...
                </p>

                <div className="text-sm flex items-center gap-2 my-3">
                  <del className="text-[#929fa5]">$865.99</del>
                  <span className="text-[#2da5f3] font-semibold inline-block">
                    $442.12
                  </span>
                </div>

                <p className="text-[#5f6c72] text-sm font-noemal">
                  Games built using the Xbox Series X|S development kit showcase
                  unparalleled load times, visuals.
                </p>
              </div>

              <div className="flex gap-1">
                <button className="bg-[#ffe7d6] w-[40px] h-[40px] flex items-center justify-center rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear">
                  <Heart size={18} />
                </button>
                <button className="flex items-center gap-2 uppercase text-nowrap text-sm bg-[#fa8232] text-white font-bold px-1 rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear">
                  <ShoppingCart size={18} /> <span>Add To Cart</span>
                </button>
                <button className="bg-[#ffe7d6] w-[40px] h-[40px] flex items-center justify-center rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear">
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {productCard}
          </div>
        </div>
      </div>
    </section>
  );
}
