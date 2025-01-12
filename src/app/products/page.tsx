import {
  categories,
  brands,
  popularTags,
  price_ranges,
  allProducts,
} from "@/data";
import ProductCard from "@/myComponents/ProductCard";
import { MoveRight, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

export default function page() {
  return (
    <section className="p-6">
      <div className="w-full max-w-[1100px] mx-auto  px-4">
        <div className="flex gap-4">
          {/* left filter section */}
          <section className="flex flex-col gap-4">
            {/* categories */}
            <div className="border-b">
              <h2 className="uppercase font-medium text-base text-dark">
                Category
              </h2>

              <ul className="flex flex-col gap-1 py-2">
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className="flex items-center gap-1 text-sm font-normal text-gray-700"
                  >
                    <input
                      type="radio"
                      id={cat.name}
                      name="category"
                      className="cursor-pointer"
                    />
                    <label className="cursor-pointer" htmlFor={cat.name}>
                      {cat.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* price ranges */}
            <div className="border-b">
              <h2 className="uppercase font-medium text-base text-dark">
                Price Ranges
              </h2>

              <div className="max-w-[250px] flex gap-4 my-2">
                <input
                  type="number"
                  min={0}
                  placeholder="Min price"
                  className="border rounded-sm p-1 w-1/2 text-sm font-normal text-gray-500"
                />
                <input
                  type="number"
                  min={0}
                  placeholder="Max price"
                  className="border rounded-sm p-1 w-1/2 text-sm font-normal text-gray-500"
                />
              </div>
              <ul className="flex flex-col gap-1 py-2">
                {price_ranges.map((price) => (
                  <li
                    key={price}
                    className="flex items-center gap-1 text-sm font-normal text-gray-700"
                  >
                    <input
                      type="radio"
                      id={price}
                      name="price"
                      className="cursor-pointer"
                    />
                    <label className="cursor-pointer" htmlFor={price}>
                      {price}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* brands */}
            <div className="border-b">
              <h2 className="uppercase font-medium text-base text-dark">
                Brands
              </h2>

              <ul className="grid grid-cols-2 py-2 gap-x-6 gap-y-1">
                {brands.map((brand) => (
                  <li
                    key={brand}
                    className="flex items-center gap-1 text-sm font-normal text-gray-700"
                  >
                    <input
                      type="checkbox"
                      id={brand}
                      name="brand"
                      className="cursor-pointer"
                    />
                    <label className="cursor-pointer" htmlFor={brand}>
                      {brand}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular tags */}
            <div>
              <h2 className="uppercase font-medium text-base text-dark">
                Popular Tags
              </h2>

              <ul className="flex gap-2 flex-wrap py-2 max-w-[250px]">
                {popularTags.map((tag) => (
                  <li
                    key={tag}
                    className="py-[6px] px-2 border rounded-sm text-dark text-sm font-medium hover:border-[#fa8232] hover:bg-[#fff3eb] transition-colors duration-200 ease-linear w-fit select-none"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {/* display banner */}
            <div className="w-[250px] border-[2px] border-[#ffe7d6] flex flex-col gap-4 p-4 rounded-sm">
              <div className="w-full flex justify-center">
                <Image
                  src="/images/banner_prod.png"
                  alt="banner"
                  width={180}
                  height={180}
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <div>
                  <Image
                    src="/images/watch_series.png"
                    alt="Watch"
                    width={132}
                    height={51}
                  />
                </div>
                <p className="text-dark font-semibold text-lg text-center">
                  Heavy on Features. Light on Price.
                </p>
                <p className="text-sm font-normal text-dark flex items-center gap-1">
                  Only for :
                  <span className="text-dark text-sm font-semibold rounded-[2px] bg-[#f3de6d] py-1 px-2">
                    $299 USD
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button className="flex items-center justify-center uppercase text-white bg-[#fa8232] p-2 rounded-[2px] text-sm font-semibold gap-2 w-full">
                  <span>
                    <ShoppingCart />
                  </span>
                  Add to cart
                </button>

                <button className="flex items-center justify-center uppercase text-[#fa8232] border  border-[#fa8232] p-2 rounded-[2px] text-sm font-semibold gap-2 w-full hover:text-white hover:bg-[#fa8232] transition-colors duration-200 ease-linear">
                  View Details
                  <span>
                    <MoveRight />
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* right products section */}
          <section className="flex-1 flex flex-col gap-4">
            {/* top search and sort section */}
            <div className="flex justify-between items-center">
              <form className="flex items-center w-[400px] border text-sm p-2 rounded-sm text-dark">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  required
                  className="flex-1"
                />
                <button type="submit">
                  <Search size={16} />
                </button>
              </form>

              <div className="flex gap-2 items-center text-sm text-dark">
                <span className="font-medium">Sort by : </span>
                <select className=" border rounded-sm p-2 focus:outline-none">
                  <option value="asc">Price low to high</option>
                  <option value="desc">Price high to low</option>
                </select>
              </div>
            </div>

            {/* active filters */}
            <div className="w-full bg-[#f2f4f5] px-2 py-3 flex items-center justify-between text-sm">
              <div className="flex gap-2">
                <span>Active filters:</span>
                <span className="font-medium">Electronic Devices</span>
              </div>
              <div>
                <span className="font-medium">{allProducts.length}</span>{" "}
                result(s) found
              </div>
            </div>

            {/* products container */}
            <div className="grid grid-cols-4 gap-4">
              {allProducts.map((prod) => (
                <ProductCard key={prod.id} {...prod} />
              ))}
            </div>

            {/* Pagination */}
            {allProducts.length > 0 ? (
              <div className="p-4 flex items-center justify-center gap-2">
                <span className="w-10 h-10 rounded-full border border-[#fa8232] text-[#fa8232] flex items-center justify-center cursor-pointer hover:text-white hover:bg-[#fa8232] transition-colors duration-150 ease-linear">
                  <IoMdArrowBack />
                </span>

                {[...Array(6)].map((_, idx) => (
                  <span
                    key={idx}
                    className="w-10 h-10 rounded-full border  text-dark flex items-center justify-center cursor-pointer hover:text-white hover:border-[#fa8232] hover:bg-[#fa8232] transition-colors duration-150 ease-linear text-sm"
                  >
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                ))}

                <span className="w-10 h-10 rounded-full border border-[#fa8232] text-[#fa8232] flex items-center justify-center cursor-pointer hover:text-white hover:bg-[#fa8232] transition-colors duration-150 ease-linear">
                  <IoMdArrowForward />
                </span>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </section>
  );
}
