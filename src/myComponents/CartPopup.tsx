"use client";

import { cartProducts } from "@/data";
import { useCartStore } from "@/store/cartStore";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CartPopup() {
  const products = useCartStore((state) => state.products);
  const total = useCartStore((state) => state.total);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);

  return (
    <div className="absolute bg-white text-dark rounded-sm top-8 right-0 w-[350px] z-10 shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)] popup invisible transition-all duration-300 ease-in ">
      <h2 className="p-4 text-base font-medium text-dark">
        Shopping Cart
        <span className="font-normal">{`(${products.length})`}</span>
      </h2>

      <div className="border-y p-4 flex flex-col gap-3  max-h-[400px] overflow-y-auto">
        {products.length > 0 ? (
          products?.map(({ id, image, price, quantity, title }) => (
            <div className="flex gap-3 items-center" key={`${id}`}>
              <div className="w-[60px] h-[60px]">
                <Image
                  src={`${image}`}
                  alt={`alt`}
                  width={60}
                  height={60}
                  className="w-full"
                />
              </div>

              <div className="flex w-full items-center gap-2">
                <div className="flex-1 ">
                  <h4 className="text-dark w-full text-sm font-medium line-clamp-2">
                    {title}
                  </h4>
                  <span className="flex gap-2 text-sm text-dark">
                    <span className="font-normal">{`${quantity}`} x </span>
                    <span className="text-[#2da5f3] font-semibold">
                      ${`${price}`}
                    </span>
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(id)}
                      className="bg-gray-400 w-5 h-5 flex items-center justify-center rounded-[2px] font-medium text-base text-dark hover:text-red-600 transition-colors duration-200 ease-linear"
                    >
                      -
                    </button>
                    <span className="font-medium">{quantity}</span>
                    <button
                      onClick={() => increaseQty(id)}
                      className="bg-gray-400 w-5 h-5 flex items-center justify-center rounded-[2px] font-medium text-base text-dark hover:text-green-600 transition-colors duration-200 ease-linear"
                    >
                      +
                    </button>
                  </div>
                </div>

                <span className="w-6 h-6 " onClick={() => removeFromCart(id)}>
                  <X
                    size={16}
                    className="text-dark hover:text-[#fa8232] transition-colors duration-200 ease-linear cursor-pointer "
                  />
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-sm text-gray-500">No items in the cart.</p>
          </div>
        )}
      </div>

      {products.length > 0 ? (
        <div className="p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm text-dark">Sub-Total:</span>
            <span className="text-dark font-medium text-sm">${total}</span>
          </div>

          <button
            type="submit"
            className="bg-[#fa8232] text-white uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear"
          >
            Checkout Now
            <FaArrowRight className="mt-[1px]" />
          </button>

          <Link
            href={`/shopping-cart`}
            className="border border-[#fa8232] text-[#fa8232] uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3"
          >
            View Cart
          </Link>
        </div>
      ) : null}
    </div>
  );
}
