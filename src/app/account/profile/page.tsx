import AddressForm from "@/myComponents/AddressForm";
import BillingAddressForm from "@/myComponents/BillingAddressForm";
import PasswordForm from "@/myComponents/PasswordForm";
import ProfileForm from "@/myComponents/ProfileForm";
import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <section className="flex flex-col gap-3">
      {/* Personal info */}
      <section className="border divide-y">
        <h2 className="p-2 text-dark font-medium text-sm uppercase">
          Account Setting
        </h2>
        <div className="p-2 flex gap-4">
          <div>
            <Image
              src={"/images/Avatar.png"}
              alt="Avatar"
              height={170}
              width={170}
              className="cursor-pointer"
            />
          </div>
          <div className="flex-1 w-full focus:outline-none text-dark font-normal text-sm p-1">
            <ProfileForm />
          </div>
        </div>
      </section>

      {/* profile address */}
      <section className="w-full flex gap-3">
        <div className="border  w-1/2 divide-y">
          <h2 className="p-2 text-dark font-medium text-sm uppercase ">
            Billing Address
          </h2>

          <div className="p-2">
            <BillingAddressForm />
          </div>
        </div>

        <div className="border divide-y w-1/2">
          <h2 className="p-2 text-dark font-medium text-sm uppercase">
            Shipping Address
          </h2>

          <div className="p-2">
            <AddressForm />

            <div className="mt-4">
              <button className="text-sm font-semibold text-white bg-[#fa8232] py-2 px-3 rounded-[2px] opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in uppercase w-fit">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Password changes */}
      <section>
        <div className="border divide-y">
          <h2 className="p-2 text-dark font-medium text-sm uppercase ">
            Change Password
          </h2>

          <div className="p-2">
            <PasswordForm />
          </div>
        </div>
      </section>
    </section>
  );
}
