import Image from "next/image";
import React from "react";
import { TopRatedProps } from "../../types";

export default function TopRatedCard({
  src,
  alt,
  price,
  title,
}: TopRatedProps) {
  return (
    <div className="p-4 border rounded-sm flex items-center gap-2">
      <div className="">
        <Image
          src={src}
          alt={alt}
          width={80}
          height={80}
          className="object-cover w-[60px] h-[60px]"
          priority
        />
      </div>
      <div className="flex-1">
        <p className="text-xs text-dark font-normal">
          {title.length > 40 ? title.slice(0, 40) : title}...
        </p>
        <span className="text-xs text-[#2da5f3] font-semibold">${price}</span>
      </div>
    </div>
  );
}
