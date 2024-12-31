import {
  ChevronDown,
  Copy,
  Facebook,
  GitCompare,
  Heart,
  Instagram,
  Minus,
  Plus,
  ShoppingCart,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ProductType } from "../../types";

export default function ProductDetailsCard({
  cName,
  prod,
}: {
  cName: string;
  prod: ProductType;
}) {
  return (
    <section className={cName}>
      <div className="relative flex flex-col gap-3 w-[70%] h-fit">
        <div className="border rounded-sm flex justify-center items-center">
          <Image
            src={prod.images[0]}
            alt="Product Preview"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>

        <div className="flex gap-2">
          {prod.images.map((img, idx) => (
            <div
              className="border hover:border-[#fa8232] rounded-[2px] cursor-pointer"
              key={idx}
            >
              <Image
                src={img}
                alt="Product Preview"
                width={60}
                height={60}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* right details */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex gap-1 items-center text-sm font-normal">
          <p className="flex text-[#fa8232]">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} />
            ))}
          </p>

          <span className="font-medium text-dark">4.7 Star Rating</span>
          <span className="text-[#5f6c72]">(21,671 User feedback)</span>
        </div>

        <p className="font-normal text-lg text-dark">
          2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD
          Storage) - Space Gray
        </p>

        <ul className="grid grid-cols-2 gap-2 text-sm text-[#5f6c72]">
          <li>
            Sku: <span className="font-medium text-dark">A264671</span>
          </li>
          <li>
            Availability:{" "}
            <span className="font-medium text-green-400">In Stock</span>
          </li>
          <li>
            Brand: <span className="font-medium text-dark">Apple</span>
          </li>
          <li>
            Category:{" "}
            <span className="font-medium text-dark">Electronics Devices</span>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-base text-[#2da5f3]">$690</span>
          <del className="font-normal text-base text-[#77878f]">$1000</del>
          <span className="py-1 px-2 rounded-[2px] text-dark bg-[#efd33d] font-semibold text-sm uppercase">
            21% Off
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-dark font-medium">Color</span>
            <div className="flex gap-2">
              <span className="h-10 w-10 rounded-full bg-gray-400 inline-block cursor-pointer hover:border-2 hover:border-[#fa8232]"></span>
              <span className="h-10 w-10 rounded-full bg-green-400 inline-block cursor-pointer hover:border-2 hover:border-[#fa8232]"></span>
              <span className="h-10 w-10 rounded-full bg-blue-400 inline-block cursor-pointer hover:border-2 hover:border-[#fa8232]"></span>
              <span className="h-10 w-10 rounded-full bg-black inline-block cursor-pointer border-2 border-[#fa8232] hover:border-2 hover:border-[#fa8232]"></span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-dark font-medium">Size</span>
            <div className="relative inline-block w-full h-fit">
              <select className="block  appearance-none border w-full text-dark p-2  pr-10 rounded-[2px] leading-tight text-sm focus:outline-none">
                <option className="option">
                  14-inch Liquid Retina XDR display
                </option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 flex items-center px-2 text-dark">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-dark font-medium">Memory</span>
            <div className="relative inline-block w-full h-fit">
              <select className="block  appearance-none border w-full text-dark p-2  pr-10 rounded-[2px] leading-tight text-sm focus:outline-none">
                <option className="option">16GB unified memory</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 flex items-center px-2 text-dark">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-dark font-medium">Storage</span>
            <div className="relative inline-block w-full h-fit">
              <select className="block  appearance-none border w-full text-dark p-2  pr-10 rounded-[2px] leading-tight text-sm focus:outline-none">
                <option className="option">1TV SSD Storage</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 flex items-center px-2 text-dark">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center justify-between py-2 px-4 border rounded-[2px] w-[40%] mr-3">
            <button className="text-dark hover:text-red-600 transition-colors duration-150 ease-linear">
              <Minus size={20} />
            </button>
            <span className="text-dark font-medium text-base select-none">
              01
            </span>
            <button className="text-dark hover:text-green-600 transition-colors duration-150 ease-linear">
              <Plus size={20} />
            </button>
          </div>

          <button className="flex-1 text-white uppercase font-semibold text-sm opacity-80 bg-[#fa8232] rounded-[2px] py-2 px-5 hover:opacity-100 transition-opacity duration-200 ease-linear flex items-center justify-center gap-2">
            Add to Cart
            <ShoppingCart className="ml-2 w-4 h-4" />
          </button>
          <div></div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-sm flex items-center gap-2 cursor-pointer text-dark hover:text-[#fa8232] transition-colors duration-150 ease-linear">
              <Heart size={18} /> Add to Wishlist
            </span>
            <span className="text-sm flex items-center gap-2 cursor-pointer text-dark hover:text-[#fa8232] transition-colors duration-150 ease-linear">
              <GitCompare size={18} /> Add to Compare
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <span>Share Product : </span>
            <Copy
              size={16}
              className="text-dark hover:text-[#fa8232] transition-colors duration-150 ease-linear cursor-pointer"
            />
            <Facebook
              size={16}
              className="text-dark hover:text-[#fa8232] transition-colors duration-150 ease-linear cursor-pointer"
            />
            <Twitter
              size={16}
              className="text-dark hover:text-[#fa8232] transition-colors duration-150 ease-linear cursor-pointer"
            />
            <Instagram
              size={16}
              className="text-dark hover:text-[#fa8232] transition-colors duration-150 ease-linear cursor-pointer"
            />
          </div>
        </div>

        <div className="border rounded-[2px] p-2">
          <p className="text-dark font-normal text-sm mb-2">
            100% Guarantee Safe Checkout
          </p>
          <div>
            <Image
              src="/images/cards.png"
              alt="Cards"
              height={18}
              width={312}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
