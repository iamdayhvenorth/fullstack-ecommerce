import { CircleAlert } from "lucide-react";
import React from "react";

export default function TrackOrder() {
  return (
    <section className="p-10">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-dark">
              Track Your Order
            </h1>
            <p className="text-dark text-sm font-normal max-w-[700px] py-2">
              To track your order please enter your order ID in the input field
              below and press the “Track Order” button. this was given to you on
              your receipt and in the confirmation email you should have
              received.
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <div>
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <label
                    htmlFor="orderId"
                    className="text-dark font-medium text-sm"
                  >
                    Order ID
                  </label>
                  <input
                    type="text"
                    name="orderId"
                    id="orderId"
                    required
                    placeholder="ID..."
                    className="border p-2 rounded-sm text-sm w-[350px] "
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-dark font-medium text-sm"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    placeholder="Email address"
                    className="border p-2 rounded-sm text-sm w-[350px]"
                  />
                </div>
              </div>

              <p className="flex items-center gap-2 text-dark text-sm font-normal my-3">
                <CircleAlert />
                Order ID that was sent to your email address.
              </p>
            </div>

            <button
              type="submit"
              className="uppercase text-white bg-[#fa8232] rounded-sm py-2 px-6 text-sm font-semibold opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear w-fit"
            >
              Track Order
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
