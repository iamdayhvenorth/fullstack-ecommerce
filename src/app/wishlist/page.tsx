"use client";

import { CartItem, useCartStore } from "@/store/cartStore";
import { useWishListStore } from "@/store/wishlistStore";
import { Loader, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WishList() {
  // wishlist states
  const products = useWishListStore((state) => state.products);
  const removeFromList = useWishListStore((state) => state.removeFromList);
  const clearList = useWishListStore((state) => state.clearList);

  // cartlist
  const addToCart = useCartStore((state) => state.addToCart);
  const handleClick = (item: CartItem) => {
    addToCart(item);
  };

  return (
    <>
      {products.length > 0 ? (
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
                  {/* Add your wishlist items here */}
                  {products.map((prod, idx) => (
                    <tr className="text-dark text-sm" key={idx}>
                      <td>
                        <div className="flex items-center gap-6">
                          <Image
                            src={prod.image}
                            alt="image"
                            height={80}
                            width={80}
                          />
                          <Link
                            href={`/products/productid`}
                            className="max-w-[410px] line-clamp-2 text-base font-medium"
                          >
                            {prod.title}
                          </Link>
                        </div>
                      </td>
                      <td>
                        <span className="flex gap-2">
                          {prod.initialPrice && <del>${prod.initialPrice}</del>}
                          <span className="font-medium">${prod.price}</span>
                        </span>
                      </td>
                      <td className={`text-[#2db224] uppercase`}>In Stock</td>
                      <td>
                        <div className="flex gap-2 items-center relative">
                          <button
                            onClick={() =>
                              handleClick({ ...prod, quantity: 1 })
                            }
                            className="text-sm font-medium text-white uppercase px-3 py-2 rounded-[2px] bg-[#fa8232]"
                          >
                            Add to cart
                          </button>

                          <button
                            onClick={() => removeFromList(prod.id)}
                            className="w-6 h-6 flex items-center justify-center border rounded-full text-dark hover:text-[#fa8232] hover:border-[#fa8232] absolute top-1/2 right-0 -translate-y-1/2"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : (
        <section className="p-10">
          <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
            <div className="flex items-center justify-center flex-col space-y-10">
              <div>
                <Image
                  src="/images/empty-cart.png"
                  alt="Empty Cart"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>

              <h3 className="font-medium text-lg text-dark text-left">
                Wishlist is Empty
              </h3>

              <div className="flex gap-4 items-center">
                <Link
                  href={"/"}
                  className="text-base font-semibold text-[#fa8232] hover:font-bold border rounded-[2px] border-[#fa8232] py-2 px-3 "
                >
                  Back Home
                </Link>
                <Link
                  href={"/products"}
                  className="text-base font-semibold text-[#fa8232] hover:font-bold border rounded-[2px] border-[#fa8232] py-2 px-3 "
                >
                  Go to Shop
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
