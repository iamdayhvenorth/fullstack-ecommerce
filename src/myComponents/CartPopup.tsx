import { cartProducts } from "@/data";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CartPopup() {
  return (
    <div className="absolute bg-white text-dark rounded-sm top-8 right-0 w-[350px] z-10 shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)] popup invisible transition-all duration-300 ease-in ">
      <h2 className="p-4 text-base font-medium text-dark">
        Shopping Cart <span className="font-normal">(02)</span>
      </h2>

      <div className="border-y p-4 flex flex-col gap-3">
        {cartProducts.map(({ alt, id, image, price, quantity, title }) => (
          <div className="flex gap-3 items-center" key={`${id}`}>
            <div className="border">
              <Image src={`${image}`} alt={`${alt}`} width={80} height={80} />
            </div>

            <div>
              <h4 className="text-dark text-sm font-medium">
                {title.length > 45 ? `${title.slice(0, 44)}...` : title}
              </h4>
              <span className="flex gap-2 text-sm text-dark">
                <span className="font-normal">{`${quantity}`} x </span>
                <span className="text-[#2da5f3] font-semibold">
                  ${`${price}`}
                </span>
              </span>
            </div>

            <X
              size={20}
              className="text-dark hover:text-[#fa8232] transition-colors duration-200 ease-linear cursor-pointer "
            />
          </div>
        ))}
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm text-dark">Sub-Total:</span>
          <span className="text-dark font-medium text-sm">$2038.00 USD</span>
        </div>

        <button
          type="submit"
          className="bg-[#fa8232] text-white uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear"
        >
          Checkout Now
          <FaArrowRight className="mt-[1px]" />
        </button>

        <button className="border border-[#fa8232] text-[#fa8232] uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3">
          View Cart
        </button>
      </div>
    </div>
  );
}
