"use client";

import { Eye, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ProductType } from "../../types";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import ProductPreview from "./ProductPreview";
import { CartItem, useCartStore } from "@/store/cartStore";
import { useWishListStore } from "@/store/wishlistStore";

function ProductCard(props: ProductType) {
  // destructure the props
  const {
    id,
    images,
    alt,
    title,
    price,
    discount,
    initialPrice,
    availability,
    deal,
    rating,
  } = props;

  // shopping cart states and function
  const addToCart = useCartStore((state) => state.addToCart);
  const products = useCartStore((state) => state.products);
  const [openModal, setOpenModal] = useState<boolean>(false);

  // wishlist function
  const addToWishlist = useWishListStore((state) => state.addToWishlist);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };

  const starRatings = (rate: number) => {
    let starArray = [];
    for (let i = 0; i < 5; i++) {
      if (i + 1 < rate) {
        starArray.push(<IoIosStar key={i} color="#fa8232" />);
      } else {
        starArray.push(<IoIosStarHalf key={i} color="#fa8232" />);
      }
    }
    return starArray;
  };

  return (
    <>
      <div className="p-2 border relative overflow-hidden h-full w-full hover:shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)] flex flex-col gap-2">
        {availability ? (
          <>
            <span className="absolute top-2 left-2 bg-[#929fa5] text-white uppercase block text-[0.75rem] leading-4 font-semibold py-[5px] px-[10px] z-10">
              {`${availability}`}
            </span>
          </>
        ) : deal ? (
          <>
            <span
              className={`absolute top-2 left-2 text-white uppercase block text-[0.75rem] leading-4 font-semibold py-[5px] px-[10px] z-10 ${
                deal === "Hot" ? "bg-[#ee5858]" : "bg-[#2da5f3]"
              }`}
            >
              {`${deal}`}
            </span>
          </>
        ) : discount ? (
          <>
            <span className="absolute top-2 left-2 bg-[#efd33d] text-dark uppercase block text-[0.75rem] leading-4 font-semibold py-[5px] px-[10px] z-10">
              {`${discount}% OFF`}
            </span>
          </>
        ) : null}
        <div className="relative overflow-hidden product ">
          <Image
            src={images[0]}
            alt={alt}
            width={150}
            height={120}
            className="h-[150px] w-[180px] object-cover"
          />

          {/* overlay */}
          <div className="absolute top-0 -left-[1000px] w-full  bottom-0 bg-dark/50 z-10 flex justify-center items-center rounded-[2px] overlay transition-all duration-500 ease-in-out">
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  addToWishlist({
                    id,
                    initialPrice,
                    price,
                    title,
                    image: images[0],
                  })
                }
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white transition-colors duration-200 ease-linear hover:text-white hover:bg-[#fa8232] cursor-pointer"
              >
                <Heart size={24} />
              </button>

              <button
                onClick={() => {
                  addToCart({
                    id,
                    initialPrice,
                    price,
                    quantity: 1,
                    title,
                    image: images[0],
                  });
                }}
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white transition-colors duration-200 ease-linear hover:text-white hover:bg-[#fa8232] cursor-pointer"
              >
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
          <div className="flex">{starRatings(rating)}</div>
          <Link
            href={`/products/${id}`}
            className="text-dark font-semibold text-sm line-clamp-1"
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
      {openModal && (
        <ProductPreview handleOpenModal={handleOpenModal} prod={props} />
      )}
    </>
  );
}

export default ProductCard;
