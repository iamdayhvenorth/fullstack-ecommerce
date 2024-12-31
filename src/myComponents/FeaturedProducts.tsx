import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import FeatureProductCard from "./FeatureProductCard";

export default function FeaturedProducts() {
  return (
    <section className="py-6">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-3">
            <div className="bg-[#f3de6d] rounded-sm overflow-hidden flex flex-col gap-2">
              <div className="flex flex-col items-center gap-2 pt-6">
                <span className="font-semibold text-sm text-center uppercase text-[#be4646]">
                  Computer & Accessories
                </span>
                <h2 className="text-[2rem] leading-10 text-center font-semibold text-dark">
                  32% Discount
                </h2>
                <p className="text-[#475156] text-base font-normal text-center">
                  For all ellectronics products
                </p>

                <p className="flex items-center gap-2 text-nowrap text-sm">
                  offer ends in :
                  <span className="uppercase bg-white font-semibold p-2 rounded-sm">
                    Ends of Christmas
                  </span>
                </p>

                <Link
                  href={"/"}
                  className="flex items-center bg-[#fa8232] text-white w-fit  py-3 px-[2rem] rounded-sm gap-4 font-semibold opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear text-sm mt-2"
                >
                  <span className="block uppercase text-sm">Shop Now</span>
                  <FaArrowRight className="mt-[2px]" />
                </Link>
              </div>

              <div className="">
                <Image
                  src="/images/accessories.png"
                  alt="Computer &Accessories"
                  width={312}
                  height={400}
                  className="object-cover h-[366px]"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-dark">
                  Featured Products
                </h3>

                <Link
                  href={"#"}
                  className="flex items-center gap-2 text-[#fa8232] font-semibold text-sm "
                >
                  <span>Browse All Contact</span>
                  <FaArrowRight className="mt-1" size={14} />
                </Link>
              </div>

              <div className=" mt-2 grid grid-cols-4  gap-3">
                {/* <div className="border h-[320px]">
                <div>
                  <Image
                    src="/images/white-airconditioner.png"
                    alt="Air Conditioner"
                    width={202}
                    height={172}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-2 gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#fa8232] flex gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <span className="text-[#77878f] text-sm font-normal inline-block">
                      (738)
                    </span>
                  </div>
                  <p className="text-dark text-sm font-normal">
                    {"TOZO T6 True Wireless Earbuds Bluetooth Headphone"
                      .length > 40
                      ? "TOZO T6 True Wireless Earbuds Bluetooth..."
                      : "TOZO T6 True Wireless Earbuds Bluetooth Headphone"}
                  </p>

                  <span className="text-[#2da5f3] font-semibold inline-block text-sm">
                    $2300
                  </span>
                </div>
              </div> */}

                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className=" w-1/2 p-4 rounded-sm flex items-center gap-2 bg-[#f2f4f5]">
              <div className="w-1/2 flex flex-col gap-2">
                <span className="uppercase bg-[#2da5f3] py-[6px] px-3 rounded-sm text-white text-sm font-semibold inline-block w-fit">
                  Introducing
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-dark">
                  New Apple Homepod Mini
                </h3>
                <p className="text-sm font-normal text-[#141414]">
                  Jam-packed with innovation, HomePod mini delivers
                  unexpectedly.
                </p>

                <Link
                  href={"/"}
                  className="flex items-center bg-[#fa8232] text-white w-fit px-4 py-2 rounded-sm gap-4 font-semibold opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear text-xs md:text-sm"
                >
                  <span className="block uppercase text-sm">Shop Now</span>
                  <FaArrowRight className="mt-[2px]" />
                </Link>
              </div>
              <div>
                <Image
                  src="/images/boom-box-xy.png"
                  alt="Boom Box Round"
                  width={240}
                  height={240}
                />
              </div>
            </div>

            <div className="bg-dark text-white flex items-center p-4 rounded-sm justify-center w-1/2">
              <div className="flex flex-col gap-2 ">
                <span className="text-sm block w-fit bg-[#ebc80c] uppercase font-medium py-[6px] px-3 rounded-sm text-dark">
                  Introducing New
                </span>

                <h3 className="capitalize text-xl md:text-2xl font-semibold">
                  Xiaomi Mi 11 Ultra 12GB+256GB
                </h3>

                <p className="text-sm font-normal text-white">
                  Data provided by internal laboratories. Industry measurment.
                </p>

                <Link
                  href={"/"}
                  className="flex items-center bg-[#fa8232] text-white w-fit px-4 py-2 rounded-sm gap-4 font-semibold opacity-95 hover:opacity-100 transition-opacity duration-200 ease-linear text-xs md:text-sm"
                >
                  <span className="block uppercase text-sm">Shop Now</span>
                  <FaArrowRight className="mt-[2px]" />
                </Link>
              </div>

              <div className="relative">
                <Image
                  src="/images/white-xiaomi.png"
                  alt="Boom Box Round"
                  width={300}
                  height={300}
                />

                <div className="absolute top-3 right-3 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2da5f3] text-white flex items-center justify-center text-sm font-semibold">
                  $590
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse gap-3">
            <div className=" rounded-sm overflow-hidden flex flex-col gap-3 ">
              <div className="flex flex-col  items-center bg-[#f7e99e] p-6 gap-2 overflow-hidden">
                <Image
                  src="/images/black-xiaomi-airpod.png"
                  alt="Black Xiaomi Airpod"
                  width={108}
                  height={108}
                  className="object-cover"
                />

                <div className="flex flex-col gap-2 -mt-3 text-center max-w-[248px]">
                  <h2 className="text-center font-semibold text-[1.75rem] leading-8">
                    Xiaomi True Wireless Earbuds
                  </h2>

                  <p className="text-sm font-normal text-[#475156]">
                    Escape the noise, It’s time to hear the magic with Xiaomi
                    Earbuds.
                  </p>

                  <p className="flex items-center justify-center gap-2 text-nowrap text-sm">
                    Only for :
                    <span className="uppercase bg-white font-semibold py-2 px-5 rounded-sm">
                      $299 USD
                    </span>
                  </p>
                </div>

                <Link
                  href={"/"}
                  className="flex items-center bg-[#fa8232] text-white w-full justify-center px-4 py-3 rounded-sm gap-4 font-semibold opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear text-sm mt-3"
                >
                  <span className="block uppercase text-sm">Shop Now</span>
                  <FaArrowRight className="mt-[2px]" />
                </Link>
              </div>

              <div className="bg-[#124261] p-6 flex-1 rounded-sm flex flex-col gap-2 items-center">
                <span className="block px-3 py-[6px] rounded-sm uppercase text-white text-sm font-semibold bg-white/15">
                  Summer Sales
                </span>
                <h2 className="text-[1.75rem] leading-8 text-center font-semibold text-white uppercase">
                  37% Discount
                </h2>
                <p className="text-lg font-normal text-white">
                  only for <span className="text-[#ebc80c]">SmartPhone</span>{" "}
                  product
                </p>

                <Link
                  href={"/"}
                  className="flex items-center bg-[#2da5f3] text-white w-full justify-center px-4 py-3 rounded-sm gap-4 font-semibold opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear text-sm mt-3"
                >
                  <span className="block uppercase text-sm">Shop Now</span>
                  <FaArrowRight className="mt-[2px]" />
                </Link>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-dark">
                  Featured Products
                </h3>

                <Link
                  href={"#"}
                  className="flex items-center gap-2 text-[#fa8232] font-semibold text-sm "
                >
                  <span>Browse All Contact</span>
                  <FaArrowRight className="mt-1" size={14} />
                </Link>
              </div>

              <div className=" mt-2 grid grid-cols-4  gap-3">
                {/* <div className="border h-[320px]">
                <div>
                  <Image
                    src="/images/white-airconditioner.png"
                    alt="Air Conditioner"
                    width={202}
                    height={172}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-2 gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#fa8232] flex gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <span className="text-[#77878f] text-sm font-normal inline-block">
                      (738)
                    </span>
                  </div>
                  <p className="text-dark text-sm font-normal">
                    {"TOZO T6 True Wireless Earbuds Bluetooth Headphone"
                      .length > 40
                      ? "TOZO T6 True Wireless Earbuds Bluetooth..."
                      : "TOZO T6 True Wireless Earbuds Bluetooth Headphone"}
                  </p>

                  <span className="text-[#2da5f3] font-semibold inline-block text-sm">
                    $2300
                  </span>
                </div>
              </div> */}

                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
                <FeatureProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
