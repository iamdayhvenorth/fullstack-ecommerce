import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="bg-[#ffe7d6] p-6 rounded-sm 2xl:max-w-[1300px] mx-auto mt-10">
      <div className="w-full max-w-[1100px] mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="w-1/2 flex flex-col gap-2">
            <span className="uppercase bg-[#2da5f3] py-[6px] px-3 rounded-sm text-white text-sm font-semibold inline-block w-fit">
              SAVE UP TO $200.00
            </span>
            <h3 className="text-4xl font-semibold text-dark">Macbook Pro</h3>
            <p className="text-2xl font-normal text-[#141414]">
              Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
            </p>

            <Link
              href={"/"}
              className="flex items-center bg-[#fa8232] text-white w-fit px-6 py-3 rounded-sm gap-4 font-semibold opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear text-base"
            >
              <span className="block uppercase text-sm">Shop Now</span>
              <FaArrowRight className="mt-[2px]" />
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/silver-macbook-pro.png"
              alt="Silver Macbook Pro"
              width={500}
              height={400}
              className="object-cover"
            />

            <span className="absolute w-[100px] h-[100px] top-6 left-0  rounded-full border-[4px] border-white bg-[#ffcead] flex items-center justify-center font-semibold text-[1.25rem] leading-7 ">
              $1999
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
