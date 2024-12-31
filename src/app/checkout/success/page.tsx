import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function CheckoutSuccess() {
  return (
    <section className="p-10">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div className="flex items-center justify-center">
          <div className=" rounded-sm max-w-[424px] shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)] flex flex-col gap-4 items-center p-4">
            <FaRegCircleCheck className="text-6xl text-green-600" />

            <div>
              <h3 className="font-semibold text-2xl text-dark text-center">
                Your order is successfully placed
              </h3>

              <p className="font-normal text-sm text-center text-[#5f6c72] my-3">
                Your order has been successfully processed. You will receive a
                confirmation email shortly.
              </p>
            </div>

            <div className="w-full flex gap-3">
              <button className="border border-[#fa8232] text-[#fa8232] uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3">
                Go to Dashboard
              </button>

              <button
                type="submit"
                className="bg-[#fa8232] text-white uppercase w-full rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear"
              >
                View Order
                <FaArrowRight className="mt-[1px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
