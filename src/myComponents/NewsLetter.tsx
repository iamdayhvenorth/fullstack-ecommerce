import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function NewsLetter() {
  return (
    <section className="bg-darkBlue p-6">
      <div className="w-full max-w-[1100px] mx-auto px-4 flex ">
        <div className="max-w-[620px] mx-auto p-2 flex flex-col gap-3">
          <h2 className="text-center font-semibold text-white text-3xl">
            Subscribe to our newsletter
          </h2>
          <p className="text-center font-normal text-base text-white/70">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>

          <form className=" rounded-sm p-3 flex gap-3 bg-white shadow-md">
            <input
              type="text"
              className="flex-1 p-2 bg-transparent outline-none"
              placeholder="Email address"
              autoComplete="off"
              required
            />

            <button className="flex items-center bg-[#fa8232] text-white w-fit px-4 py-2 rounded-sm gap-4 opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear text-sm font-bold">
              <span className="block uppercase text-sm">Subscribe</span>
              <FaArrowRight className="mt-[2px]" />
            </button>
          </form>

          <div className="flex gap-4 justify-center">
            <Image
              src="/images/google.svg"
              alt="samsung"
              width={72}
              height={72}
            />
            <Image
              src="/images/amazon.svg"
              alt="samsung"
              width={72}
              height={72}
            />
            <Image
              src="/images/philips.svg"
              alt="samsung"
              width={72}
              height={72}
            />
            <Image
              src="/images/toshiba.svg"
              alt="samsung"
              width={72}
              height={72}
            />
            <Image
              src="/images/samsung.svg"
              alt="samsung"
              width={72}
              height={72}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
