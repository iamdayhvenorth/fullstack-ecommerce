import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WishList() {
  return (
    <section className="p-6">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div className="divide-y border">
          <div className="py-3 px-4">
            <h2 className="font-medium text-dark text-sm uppercase">
              Wishlist
            </h2>
          </div>

          <table className="w-full">
            <thead className="border-y bg-[#e4e7e9] text-sm text-dark font-medium uppercase">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {[...Array(4)].map((_, idx) => (
                <tr className="text-dark text-sm" key={idx}>
                  <td>
                    <div className="flex items-center gap-2">
                      <Image
                        src={"/images/white-drone.png"}
                        alt="image"
                        height={72}
                        width={72}
                      />
                      <Link
                        href={`/products/productid`}
                        className="max-w-[410px] line-clamp-2"
                      >
                        Bose Sport Earbuds - Wireless Earphones - Bluetooth In
                        Ear Headphones for Workouts and Running, Triple Black
                      </Link>
                    </div>
                  </td>
                  <td>
                    <span className="flex gap-2">
                      <del>$1200</del>
                      <span className="font-medium">$999</span>
                    </span>
                  </td>
                  <td className={`text-[#2db224] uppercase`}>In Stock</td>
                  <td>
                    <div className="flex gap-2 items-center relative">
                      <button className="text-sm font-medium text-white uppercase px-3 py-2 rounded-[2px] bg-[#fa8232]">
                        Add to cart
                      </button>

                      <span className="w-6 h-6 flex items-center justify-center border rounded-full text-dark hover:text-[#fa8232] hover:border-[#fa8232] cursor-pointer absolute top-1/2 right-0 -translate-y-1/2">
                        <X size={16} />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
