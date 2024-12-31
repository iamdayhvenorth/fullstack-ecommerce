import PaymentCard from "@/myComponents/PaymentCard";
import { ArrowRight, Box, CircleEllipsis, Files, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrMastercard } from "react-icons/gr";
import { RiVisaLine } from "react-icons/ri";

function Dashboard() {
  return (
    <section className="w-full border p-4 flex flex-col gap-4">
      <div>
        <h2 className="font-semibold text-dark text-lg"> Hello, Kevin</h2>

        <p className="text-sm text-dark font-normal max-w-[420px] my-2">
          From your account dashboard. you can easily check & view your
          <span className="text-[#2da5f3] font-medium"> Recent Orders</span>,
          manage your{" "}
          <span className="text-[#2da5f3] font-medium">
            Shipping and Billing Addresses
          </span>{" "}
          and edit your{" "}
          <span className="text-[#2da5f3] font-medium">Password</span> and{" "}
          <span className="text-[#2da5f3] font-medium">Account Details</span>.
        </p>
      </div>

      {/* personal information grid*/}
      <section className="grid grid-cols-3 gap-4">
        {/* accout col */}
        <div className="border divide-y">
          <h3 className="font-medium text-dark text-sm p-2 uppercase">
            Account Info
          </h3>

          <div className="p-2 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image
                src={"/images/member2.png"}
                alt="Profile"
                height={40}
                width={40}
              />

              <div>
                <h4 className="text-dark font-semibold text-sm">
                  Kevin Gilbert
                </h4>
                <p className="text-xs text-dark font-medium">
                  Dhaka - 1207, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-dark font-medium text-xs">
                Email :
                <span className="font-normal"> kevin.gilbert@gmail.com</span>
              </p>
              <p className="text-dark font-medium text-xs">
                Sec Email :
                <span className="font-normal"> kevin.gilbert@gmail.com</span>
              </p>
              <p className="text-dark font-medium text-xs">
                Phone :<span className="font-normal"> +1-202-555-0118</span>
              </p>
            </div>

            <div>
              <button className="text-xs py-2 px-4 border border-[#2da5f3] uppercase font-semibold text-[#2da5f3] hover:bg-[#2da5f3] hover:text-white transition-colors duration-200 ease-linear cursor-pointer w-fit rounded-[2px]">
                Edit Account
              </button>
            </div>
          </div>
        </div>

        {/* billing address col */}
        <div className="border divide-y ">
          <h3 className="font-medium text-dark text-sm p-2 uppercase">
            Billing Address
          </h3>

          <div className="p-2 flex flex-col gap-[5px]">
            <h4 className="text-dark font-semibold text-sm">Kevin Gilbert</h4>
            <p className="text-dark font-normal text-xs">
              East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C,
              Flat No. 5D, Dhaka - 1200, Bangladesh
            </p>
            <p className="text-dark font-medium text-xs">
              Email :
              <span className="font-normal"> kevin.gilbert@gmail.com</span>
            </p>

            <p className="text-dark font-medium text-xs">
              Phone :<span className="font-normal"> +1-202-555-0118</span>
            </p>

            <div>
              <button className="text-xs py-2 px-4 border border-[#2da5f3] uppercase font-semibold text-[#2da5f3] hover:bg-[#2da5f3] hover:text-white transition-colors duration-200 ease-linear cursor-pointer w-fit rounded-[2px]">
                Edit Address
              </button>
            </div>
          </div>
        </div>

        {/* order statistics col*/}
        <div className=" grid  grid-cols-1 gap-4">
          <div className="flex items-center gap-3 bg-[#eaf6fe] p-3">
            <span className="flex items-center justify-center w-11 h-11 bg-white text-[#2da5f3] rounded-[2px]">
              <Rocket size={24} />
            </span>

            <span>
              <h5 className="font-semibold text-black text-sm">154</h5>
              <span className="text-dark font-normal text-sm">
                Total Orders
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3 bg-[#fff3eb] p-3">
            <span className="flex items-center justify-center w-11 h-11 bg-white text-[#fa8232] rounded-[2px]">
              <CircleEllipsis size={24} />
            </span>

            <span>
              <h5 className="font-semibold text-black text-sm">05</h5>
              <span className="text-dark font-normal text-sm">
                Pending Orders
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3 bg-[#eaf7e9] p-3">
            <span className="flex items-center justify-center w-11 h-11 bg-white text-[#2db224] rounded-[2px]">
              <Box size={24} />
            </span>

            <span>
              <h5 className="font-semibold text-black text-sm">149</h5>
              <span className="text-dark font-normal text-sm">
                Completed Orders
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* payment option */}
      <section className="border divide-y">
        <div className="flex p-2 justify-between">
          <h3 className="font-medium text-dark text-sm uppercase">
            Payment Options
          </h3>

          <Link
            href={"/account/payment"}
            className="flex items-center text-sm text-[#fa8232] gap-2 font-medium"
          >
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* crads */}
        <div className="p-2 flex gap-4">
          <PaymentCard
            balance={"95, 400.00"}
            cardBrand={"/images/visa.png"}
            cardHolderName="Kevin Gilbert"
            cardColor="bg-gradient-to-b from-[#1b6392] to-[#124261]"
            cardNumber="**** **** **** 4567"
          />

          <PaymentCard
            balance={"87, 583.00"}
            cardBrand={"/images/master_card.png"}
            cardHolderName="Kevin Gilbert"
            cardColor="bg-gradient-to-b from-[#248e1d] to-[#2db224]"
            cardNumber="**** **** **** 1761"
          />
        </div>
      </section>

      {/* Recent order */}
      <section className="border">
        <div className="flex p-2 justify-between">
          <h3 className="font-medium text-dark text-sm uppercase">
            Recent Orders
          </h3>

          <Link
            href={"/account/order"}
            className="flex items-center text-sm text-[#fa8232] gap-2 font-medium"
          >
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <table className="w-full">
          <thead className="border-y bg-[#e4e7e9] text-sm text-dark font-medium">
            <tr className="uppercase">
              <th>Order Id</th>
              <th>Status</th>
              <th>Date</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-dark text-sm">
              <td className="font-medium">#9754765</td>
              <td className="text-[#fa8232] uppercase font-semibold">
                In Progress
              </td>
              <td>Dec 30, 2019 07:52</td>
              <td>$80 (5products)</td>
              <td className="text-[#2da5f3] font-semibold">
                <Link href={`/account/order/9754765`}>View Details</Link>
              </td>
            </tr>

            <tr className="text-dark text-sm">
              <td className="font-medium">#9754577</td>
              <td className="text-[#ee5858] uppercase font-semibold">
                Cancelled
              </td>
              <td>Dec 30, 2019 07:52</td>
              <td>$80 (5product)</td>
              <td className="text-[#2da5f3] font-semibold">
                <Link href={`/account/order/9754577`}>View Details</Link>
              </td>
            </tr>

            <tr className="text-dark text-sm">
              <td className="font-medium">#9754655</td>
              <td className="text-[#2db224] uppercase font-semibold">
                Completed
              </td>
              <td>Dec 30, 2019 07:52</td>
              <td>$80 (5product)</td>
              <td className="text-[#2da5f3] font-semibold">
                <Link href={`/account/order/9754655`}>View Details</Link>
              </td>
            </tr>
            <tr className="text-dark text-sm">
              <td className="font-medium">#9754765</td>
              <td className="text-[#fa8232] uppercase font-semibold">
                In Progress
              </td>
              <td>Dec 30, 2019 07:52</td>
              <td>$80 (5products)</td>
              <td className="text-[#2da5f3] font-semibold">
                <Link href={`/account/order/9754765`}>View Details</Link>
              </td>
            </tr>

            <tr className="text-dark text-sm">
              <td className="font-medium">#9754577</td>
              <td className="text-[#ee5858] uppercase font-semibold">
                Cancelled
              </td>
              <td>Dec 30, 2019 07:52</td>
              <td>$80 (5product)</td>
              <td className="text-[#2da5f3] font-semibold">
                <Link href={`/account/order/9754577`}>View Details</Link>
              </td>
            </tr>

            <tr className="text-dark text-sm">
              <td className="font-medium">#9754655</td>
              <td className="text-[#2db224] uppercase font-semibold">
                Completed
              </td>
              <td>Dec 30, 2019 07:52</td>
              <td>$80 (5product)</td>
              <td className="text-[#2da5f3] font-semibold">
                <Link href={`/account/order/9754655`}>View Details</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default Dashboard;
