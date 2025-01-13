"use client";

import { useCartStore } from "@/store/cartStore";
import { MoveLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ShoppingCart() {
  const products = useCartStore((state) => state.products);
  const total = useCartStore((state) => state.total);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);

  return (
    <>
      {products.length > 0 ? (
        <section className="p-6">
          <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
            <div className="flex gap-3">
              <div className="border rounded-sm h-fit">
                <div className="p-4">
                  <h3 className="font-medium text-lg text-dark text-left">
                    Shopping Cart
                  </h3>
                </div>

                <table>
                  <thead>
                    <tr className="bg-[#e4e7e9] text-xs font-medium uppercase text-[#475156]">
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((prod) => (
                      <tr key={prod.id}>
                        <td className="product">
                          <span
                            className=""
                            onClick={() => removeFromCart(prod.id)}
                          >
                            <X />
                          </span>
                          <span className="block">
                            <Image
                              src={prod.image}
                              alt="Led TV"
                              width={70}
                              height={70}
                            />
                          </span>
                          <span>
                            4K UHD LED Smart TV with Chromecast Built-in
                          </span>
                        </td>
                        <td className="price">
                          <span className="flex gap-2">
                            <del>${prod.initialPrice}</del>
                            <span className="font-medium">${prod?.price}</span>
                          </span>
                        </td>
                        <td className="quantity">
                          <button
                            onClick={() => decreaseQty(prod.id)}
                            className="font-medium text-base text-dark hover:text-red-600 transition-colors duration-200 ease-linear"
                          >
                            -
                          </button>
                          <span>
                            {prod.quantity < 10
                              ? `0${prod.quantity}`
                              : prod.quantity}
                          </span>
                          <button
                            onClick={() => increaseQty(prod.id)}
                            className="font-medium text-base text-dark hover:text-green-600 transition-colors duration-200 ease-linear"
                          >
                            +
                          </button>
                        </td>
                        <td className="sub-total">
                          ${prod?.quantity * prod?.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="border-t p-4 flex items-center justify-between">
                  <Link href={`/products`} className="btn">
                    <MoveLeft />
                    Return to Shop
                  </Link>
                  <button onClick={() => clearCart()} className="btn">
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <div className="border rounded-sm p-4">
                  <h3 className="font-medium text-lg text-dark text-left">
                    Cart Total
                  </h3>

                  <div className="border-b py-4 space-y-3">
                    <div className="flex items-center justify-between text-dark font-normal text-sm">
                      <span className="text-[#5f6c72]">Sub-total</span>
                      <span className="font-medium">{`$${total}`}</span>
                    </div>

                    <div className="flex items-center justify-between text-dark font-normal text-sm">
                      <span className="text-[#5f6c72]">Shipping</span>
                      <span className="font-medium">Free</span>
                    </div>

                    <div className="flex items-center justify-between text-dark font-normal text-sm">
                      <span className="text-[#5f6c72]">Discount</span>
                      <span className="font-medium">$24</span>
                    </div>

                    <div className="flex items-center justify-between text-dark font-normal text-sm">
                      <span className="text-[#5f6c72]">Tax</span>
                      <span className="font-medium">$61.99</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-3">
                    <div className="flex items-center justify-between text-dark font-semibold text-base">
                      <span className="text-[#5f6c72]">Total</span>
                      <span className="uppercase">{`$${
                        total + 61.99 + 24
                      } USD`}</span>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#fa8232] text-white uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear"
                    >
                      Proceed to Checkout
                      <FaArrowRight className="mt-[1px]" />
                    </button>
                  </div>
                </div>

                <div className="border rounded-sm">
                  <div className="p-4">
                    <h3 className="font-medium text-lg text-dark text-left">
                      Coupon Code
                    </h3>
                  </div>

                  <form className="p-4 border-t flex flex-col gap-3">
                    <input
                      type="text"
                      required
                      autoComplete="off"
                      className="border p-2 w-full rounded-sm text-sm"
                      placeholder="Enter your coupon code"
                    />
                    <button className="t border rounded-sm p-2 uppercase font-semibold text-[#2da5f3] border-[#2da5f3] hover:bg-[#2da5f3] hover:text-white transition-colors duration-200 ease-linear text-sm">
                      Apply Coupon
                    </button>
                  </form>
                </div>
              </div>
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
                Cart is Empty
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
