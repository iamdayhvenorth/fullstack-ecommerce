"use client";

import { useState } from "react";
import Image from "next/image";
import { BestDealProps } from "../../types";
import { Eye, Heart, ShoppingCart, X } from "lucide-react";
import ProductPreview from "./ProductPreview";
import Link from "next/link";

export default function DealCard(props: BestDealProps) {
  // destructure all props
  const {
    price,
    discount,
    availability,
    initialPrice,
    title,
    alt,
    src,
    deal,
    id,
  } = props;

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className="p-2 border relative overflow-hidden h-full w-full">
        {/* overlay */}
        {/* <div className="absolute top-0 -left-[1000px] w-full  bottom-0 bg-dark/50 flex justify-center items-center overlay transition-all duration-500 ease-in-out z-20">
        <div className="flex items-center gap-2">
          <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white transition-colors duration-200 ease-linear hover:text-white hover:bg-[#fa8232] cursor-pointer">
            <Heart size={24} />
          </button>

          <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white transition-colors duration-200 ease-linear hover:text-white hover:bg-[#fa8232] cursor-pointer">
            <ShoppingCart size={24} />
          </button>

          <button
            className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white transition-colors duration-200 ease-linear hover:text-white hover:bg-[#fa8232] cursor-pointer"
            onClick={handleClick}
          >
            <Eye size={24} />
          </button>
        </div>
      </div> */}

        {availability ? (
          <>
            <span className="absolute top-2 left-2 bg-[#929fa5] text-white uppercase block text-[0.75rem] leading-4 font-semibold py-[5px] px-[10px] z-10">
              {`${availability}`}
            </span>
          </>
        ) : deal ? (
          <>
            <span className="absolute top-2 left-2 bg-[#ee5858] text-white uppercase block text-[0.75rem] leading-4 font-semibold py-[5px] px-[10px] z-10">
              {`${deal}`}
            </span>
          </>
        ) : discount ? (
          <>
            <span className="absolute top-2 left-2 bg-[#efd33d] text-dark uppercase block text-[0.75rem] leading-4 font-semibold py-[5px] px-[10px] z-10">
              {`${discount}`}
            </span>
          </>
        ) : null}

        <div className="relative overflow-hidden product">
          <Image
            src={src}
            alt={alt}
            width={200}
            height={180}
            className="object-cover"
          />

          {/* overlay */}
          <div className="absolute top-0 -left-[1000px] w-full  bottom-0 bg-dark/50 z-10 flex justify-center items-center rounded-sm overlay transition-all duration-500 ease-in-out">
            <div className="flex items-center gap-2">
              <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white transition-colors duration-200 ease-linear hover:text-white hover:bg-[#fa8232] cursor-pointer">
                <Heart size={24} />
              </button>

              <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white transition-colors duration-200 ease-linear hover:text-white hover:bg-[#fa8232] cursor-pointer">
                <ShoppingCart size={24} />
              </button>

              <button
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white transition-colors duration-200 ease-linear hover:text-white hover:bg-[#fa8232] cursor-pointer"
                onClick={() => handleOpenModal()}
              >
                <Eye size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href={`/products/${id}`}
            className="text-dark font-semibold text-sm line-clamp-2"
          >
            {title}
          </Link>
          <div className="text-sm flex items-center gap-2">
            {initialPrice && (
              <del className="text-[#929fa5]">${initialPrice}</del>
            )}
            <span className="text-[#2da5f3] font-semibold inline-block">
              ${price}
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModal && <ProductPreview handleOpenModal={handleOpenModal} />}
    </>
  );
}
