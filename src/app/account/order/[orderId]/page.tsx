"use client";

import {
  ArrowLeft,
  CalendarCheck,
  CheckCheck,
  CircleCheck,
  MapPin,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function OrderDetails() {
  const router = useRouter();
  const { orderId } = useParams();

  return (
    <section className="border">
      <div className="p-4">
        <button
          className="text-dark font-semibold text-sm uppercase cursor-pointer flex items-center gap-2"
          onClick={() => router.back()}
        >
          <ArrowLeft />
          <span>Order Details</span>
        </button>
      </div>

      <section className="p-4 border-y">
        <div className="flex items-center justify-between border rounded-[2px] bg-[#f7e99e] p-4">
          <div>
            <h4 className="font-medium text-base text-dark">
              Order ID: #{orderId}
            </h4>
            <p className="font-normal text-xs text-dark">
              4 product . Order Placed on 17 Jan, 2021 at 07:32 PM
            </p>
          </div>

          <span className="font-semibold text-xl text-[#2da5f3]">$1199.00</span>
        </div>
      </section>

      {/* order activity */}
      <section className="p-4 select-none">
        <div className="pb-4">
          <h4 className="font-medium text-sm uppercase text-dark">
            Order Activity
          </h4>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border flex items-center justify-center bg-[#d5f0d3] text-[#2db224]">
              <CheckCheck size={20} />
            </div>

            <div>
              <h4 className="font-medium text-sm text-dark">
                Your order has been delivered. Thank you for shopping at Clicon!
              </h4>
              <p className="font-normal text-xs text-dark">
                23 Jan, 2021 at 7:32 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border flex items-center justify-center bg-[#d5edfd] text-[#2da5f3]">
              <MapPin size={20} />
            </div>

            <div>
              <h4 className="font-medium text-sm text-dark">
                Your order has reached at last mile hub.
              </h4>
              <p className="font-normal text-xs text-dark">
                22 Jan, 2021 at 8:00 AM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border flex items-center justify-center bg-[#d5edfd] text-[#2da5f3]">
              <UserRound size={20} />
            </div>

            <div>
              <h4 className="font-medium text-sm text-dark">
                Our delivery man (John Wick) Has picked-up your order for
                delvery.
              </h4>
              <p className="font-normal text-xs text-dark">
                23 Jan, 2021 at 2:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border flex items-center justify-center bg-[#d5f0d3] text-[#2db224]">
              <CircleCheck size={20} />
            </div>

            <div>
              <h4 className="font-medium text-sm text-dark">
                Your order is successfully verified.
              </h4>
              <p className="font-normal text-xs text-dark">
                20 Jan, 2021 at 7:32 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border flex items-center justify-center bg-[#d5edfd] text-[#2da5f3]">
              <CalendarCheck size={20} />
            </div>

            <div>
              <h4 className="font-medium text-sm text-dark">
                Your order has been confirmed.
              </h4>
              <p className="font-normal text-xs text-dark">
                19 Jan, 2021 at 2:61 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* order products & address*/}
      <section>
        <div className="p-4 border-y">
          <h4 className="font-medium text-dark text-sm uppercase">
            Product <span>(02)</span>
          </h4>
        </div>

        {/* product table */}
        <table className="w-full">
          <thead className="text-dark text-sm font-medium uppercase bg-[#e4e7e9]">
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub-Total</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr className="text-dark text-sm ">
              <td className="flex gap-4 items-center">
                <Image
                  src="/images/black-iphone.png"
                  alt="Iphone"
                  width={70}
                  height={70}
                />

                <div>
                  <h4 className="font-medium text-sm text-[#2da5f3]">
                    Iphone 14 Pro Max
                  </h4>
                  <p className="font-normal text-xs text-dark max-w-[300px] line-clamp-2">
                    Google Pixel 6 Pro - 5G Android Phone - Unlocked Smartphone
                    with Advanced Pixel
                  </p>
                </div>
              </td>
              <td>$899</td>
              <td>x1</td>
              <td className="font-medium">$899</td>
            </tr>

            <tr className="text-dark text-sm ">
              <td className="flex gap-4 items-center">
                <Image
                  src="/images/black-iphone.png"
                  alt="Iphone"
                  width={70}
                  height={70}
                />

                <div>
                  <h4 className="font-medium text-sm text-[#2da5f3]">
                    Iphone 14 Pro Max
                  </h4>
                  <p className="font-normal text-xs text-dark max-w-[300px] line-clamp-2">
                    Google Pixel 6 Pro - 5G Android Phone - Unlocked Smartphone
                    with Advanced Pixel
                  </p>
                </div>
              </td>
              <td>$30</td>
              <td>x2</td>
              <td className="font-medium">$60</td>
            </tr>
          </tbody>
        </table>

        {/* address */}
        <div className="border-t grid grid-cols-3 gap-4 divide-x">
          {/* billing address */}
          <div className="p-4">
            <h4 className="font-medium text-dark text-sm mb-2">
              Billing Address
            </h4>

            <div>
              <h5 className="text-dark font-medium text-xs mb-2">
                Kevin Gilbert
              </h5>
              <p className="text-dark font-normal text-xs">
                East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
              </p>

              <p className="text-dark font-medium text-xs my-2">
                Phone Number:{" "}
                <span className="font-normal"> +1-202-555-0118</span>
              </p>
              <p className="text-dark font-medium text-xs">
                Email:{" "}
                <span className="font-normal"> kevin.gilbert@gmail.com</span>
              </p>
            </div>
          </div>

          {/* shipping address */}
          <div className="p-4">
            <h4 className="font-medium text-dark text-sm mb-2">
              Shipping Address
            </h4>

            <div className="text-sm">
              <h5 className="text-dark font-medium text-xs mb-2">
                Kevin Gilbert
              </h5>
              <p className="text-dark font-normal text-xs">
                East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
              </p>

              <p className="text-dark font-medium text-xs my-2">
                Phone Number:{" "}
                <span className="font-normal"> +1-202-555-0118</span>
              </p>
              <p className="text-dark font-medium text-xs">
                Email:{" "}
                <span className="font-normal"> kevin.gilbert@gmail.com</span>
              </p>
            </div>
          </div>

          {/* orser notes */}
          <div className="p-4">
            <h4 className="font-medium text-dark text-sm mb-2">Order Notes</h4>

            <div>
              <p className="text-dark font-normal text-xs">
                Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare,
                eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam
                magna odio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
