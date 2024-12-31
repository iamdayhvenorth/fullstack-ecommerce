import ProductDetailsCard from "@/myComponents/ProductDetailsCard";
import TopRated from "@/myComponents/TopRated";
import { Award, CreditCard, Handshake, Headphones, Truck } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <section className="p-6">
      {/* Product details */}
      <section>
        <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
          <div>
            <ProductDetailsCard cName="bg-white p-5 rounded-sm flex gap-5 " />
          </div>
        </div>
      </section>

      {/* Overview & Description */}
      <section>
        <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
          <div className="border">
            <div className="flex justify-center gap-2">
              <h3 className="py-3 px-5 text-center border-b-2 border-[#fa8232] text-base text-[#5f6c72] cursor-pointer font-semibold">
                Description
              </h3>
              <h3 className="py-3 px-5 text-center hover:border-b-2 hover:border-[#fa8232] transition-colors duration-150 ease-in-out text-base text-[#5f6c72] cursor-pointer">
                Additional information
              </h3>
              <h3 className="py-3 px-5 text-center hover:border-b-2 hover:border-[#fa8232] transition-colors duration-150 ease-in-out text-base text-[#5f6c72] cursor-pointer">
                Specification
              </h3>
              <h3 className="py-3 px-5 text-center hover:border-b-2 hover:border-[#fa8232] transition-colors duration-150 ease-in-out text-base text-[#5f6c72] cursor-pointer">
                Review
              </h3>
            </div>

            <div className="border-t p-4 flex gap-3">
              <div>
                <h4 className="font-semibold text-base text-dark">
                  Description
                </h4>
                <p className="font-normal text-sm text-gray-600 max-w-[550px] my-2">
                  The most powerful MacBook Pro ever is here. With the
                  blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                  designed for pros — you get groundbreaking performance and
                  amazing battery life. Add to that a stunning Liquid Retina XDR
                  display, the best camera and audio ever in a Mac notebook, and
                  all the ports you need. The first notebook of its kind, this
                  MacBook Pro is a beast. M1 Pro takes the exceptional
                  performance of the M1 architecture to a whole new level for
                  pro users.
                </p>

                <p className="font-normal text-sm text-gray-600 max-w-[550px]">
                  Even the most ambitious projects are easily handled with up to
                  10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and
                  dedicated encode and decode media engines that support H.264,
                  HEVC, and ProRes codecs.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-base text-dark">Features</h4>

                <div className="flex flex-col gap-1">
                  <span className="text-dark text-sm font-normal flex gap-2">
                    <Award size={16} className="text-[#fa8232]" />
                    Free 1 Year Warranty
                  </span>
                  <span className="text-dark text-sm font-normal flex  gap-2">
                    <Truck size={16} className="text-[#fa8232]" />
                    Free Shipping & Fasted Delivery
                  </span>
                  <span className="text-dark text-sm font-normal flex  gap-2">
                    <Handshake size={16} className="text-[#fa8232]" />
                    100% Money-back guarantee
                  </span>
                  <span className="text-dark text-sm font-normal flex  gap-2">
                    <Headphones size={16} className="text-[#fa8232]" />
                    24/7 Customer support
                  </span>
                  <span className="text-dark text-sm font-normal flex  gap-2">
                    <CreditCard size={16} className="text-[#fa8232]" />
                    Secure payment method
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 pl-4 border-l">
                <h4 className="font-semibold text-base text-dark">
                  Shipping Information
                </h4>

                <div className="flex flex-col gap-2">
                  <p className="font-medium text-sm text-dark flex gap-2 text-nowrap">
                    Courier:
                    <span className="font-normal text-[#5f6c72]">
                      up to one week, $19.00
                    </span>
                  </p>
                  <p className="font-medium text-sm text-dark flex gap-2 text-nowrap">
                    Local Shipping:
                    <span className="font-normal text-[#5f6c72]">
                      2 - 4 days, free shipping
                    </span>
                  </p>
                  <p className="font-medium text-sm text-dark flex gap-2 text-nowrap">
                    UPS Ground Shipping:
                    <span className="font-normal text-[#5f6c72]">
                      4 - 6 days, $29.00
                    </span>
                  </p>
                  <p className="font-medium text-sm text-dark flex gap-2 text-nowrap">
                    Unishop Global Export:
                    <span className="font-normal text-[#5f6c72]">
                      3 - 4 days, $39.00
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toprated Products */}
      <TopRated />
    </section>
  );
}
