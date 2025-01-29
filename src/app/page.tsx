import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { Box, CreditCard, Headphones, Trophy } from "lucide-react";
import BestDeals from "@/myComponents/BestDeals";
import Categories from "@/myComponents/Categories";
import FeaturedProducts from "@/myComponents/FeaturedProducts";
import Banner from "@/myComponents/Banner";
import TopRated from "@/myComponents/TopRated";
import NewsLetter from "@/myComponents/NewsLetter";
import Blog from "@/myComponents/LatestBlog";

export default async function Home() {
  return (
    <>
      <section className="w-full">
        <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:row-span-2 md:col-span-2 p-6  bg-[#f2f4f5] rounded-sm">
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#2da5f3] uppercase text-xs font-semibold">
                    <span className="block h-1 w-[40px] bg-[#2da5f3]"></span>
                    <span className="block text-nowrap">
                      The Besy Place To Be
                    </span>
                  </div>
                  <h2 className="text-2xl text-nowrap md:text-wrap md:text-3xl font-semibold">
                    Xbox Consoles
                  </h2>
                  <p className="text-sm max-w-[300px]">
                    Save up to 50% on select Xbox games. Get 3 months of PC Game
                    for $2 USD.
                  </p>

                  <Link
                    href={"/"}
                    className="flex items-center bg-[#fa8232] text-white w-fit px-4 py-2 rounded-sm gap-4 font-semibold opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear text-xs md:text-sm"
                  >
                    <span className="block uppercase text-sm">Shop Now</span>
                    <FaArrowRight className="mt-[2px]" />
                  </Link>
                </div>

                <div className="p-4 relative">
                  <Image
                    className="object-cover"
                    src="/images/xbox.png"
                    alt="Xbox Image"
                    width={300}
                    height={400}
                    priority
                  />

                  <div className="absolute top-3 right-3 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2da5f3] text-white flex items-center justify-center text-sm font-semibold">
                    $299
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark text-white flex items-center p-4 rounded-sm justify-center">
              <div className="flex flex-col gap-1 ">
                <span className="text-sm block text-[#ebc80c] uppercase font-medium">
                  Summer Sales
                </span>
                <h3 className="capitalize text-xl md:text-2xl font-semibold">
                  New Google Pixel 6 Pro
                </h3>
                <Link
                  href={"/"}
                  className="flex items-center bg-[#fa8232] text-white w-fit px-4 py-2 rounded-sm gap-4 font-semibold opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear text-xs md:text-sm"
                >
                  <span className="block uppercase text-sm">Shop Now</span>
                  <FaArrowRight className="mt-[2px]" />
                </Link>
              </div>

              <div className="relative">
                <Image
                  className="object-cover"
                  src="/images/google-pixel.png"
                  alt="Google Pixel 6 Pro Image"
                  width={300}
                  height={300}
                  priority
                />

                <span className="absolute py-2 px-4 rounded-sm bg-[#efd33d] text-black font-semibold text-base uppercase -top-2 left-12">
                  29% Off
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center bg-[#f2f4f5] p-4 rounded-sm gap-3">
              <div>
                <Image
                  className="object-cover"
                  src="/images/black-airpod.png"
                  alt="Black-airpod"
                  width={150}
                  height={150}
                  priority
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl md:text-2xl font-semibold text-dark">
                  Xiaomi FlipBuds Pro
                </h3>
                <span className="text-base font-semibold text-[#2da5f3]">
                  $299
                </span>
                <Link
                  href={"/"}
                  className="flex items-center bg-[#fa8232] text-white w-fit px-4 py-2 rounded-sm gap-4 font-semibold opacity-85 hover:opacity-100 transition-opacity duration-200 ease-linear text-xs md:text-sm"
                >
                  <span className="block uppercase text-sm">Shop Now</span>
                  <FaArrowRight className="mt-[2px]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full border bprder-red-900 p-4 mt-3 grid grid-cols-4 gap-6">
            <div className="flex items-center gap-4 border-r px-2">
              <Box size={30} className="text-[#5f6c72]" />
              <div className="flex flex-col gap-1">
                <h4 className="uppercase font-medium text-sm">
                  Fatest Delivery
                </h4>
                <span className="block font-normal text-xs text-[#5f6c72]">
                  Delivery in 24/hr
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 border-r px-2">
              <Trophy size={30} className="text-[#5f6c72]" />
              <div className="flex flex-col gap-1">
                <h4 className="uppercase font-medium text-sm">
                  24 Hours Return
                </h4>
                <span className="block font-normal text-xs text-[#5f6c72]">
                  100% money-back guarantee
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 border-r px-2">
              <CreditCard size={30} className="text-[#5f6c72]" />
              <div className="flex flex-col gap-1">
                <h4 className="uppercase font-medium text-sm">
                  Secure Payment
                </h4>
                <span className="block font-normal text-xs text-[#5f6c72]">
                  Your money is safe
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 px-2">
              <Headphones size={30} className="text-[#5f6c72]" />
              <div className="flex flex-col gap-1">
                <h4 className="uppercase font-medium text-sm">Support 24/7</h4>
                <span className="block font-normal text-xs text-[#5f6c72]">
                  Live contact/message
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BestDeals />
      <Categories />
      <FeaturedProducts />
      <Banner />
      <TopRated />
      <Blog />
      <NewsLetter />
    </>
  );
}
