import React from "react";
import { BlogProps } from "../../types";
import Link from "next/link";
import { Calendar, CircleUserRound, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import moment from "moment";

export default function BlogCard(props: BlogProps) {
  // destructure all props
  const {
    title,
    author,
    date,
    alt,
    category,
    comments,
    description,
    id,
    image,
  } = props;
  return (
    <div className="shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)] p-4 rounded-sm">
      <div>
        <Image
          src={image}
          alt={alt}
          width={320}
          height={200}
          className="object-cover  rounded-sm"
        />
      </div>
      <div className="mt-3">
        <div>
          <div className="flex gap-3 items-center">
            <span className="flex items-center gap-1 font-normal text-xs text-[#475156]">
              <CircleUserRound size={18} className="text-[#fa8232]" />
              {author}
            </span>
            <span className="flex items-center gap-1 font-normal text-xs text-[#475156]">
              <Calendar size={18} className="text-[#fa8232]" />
              {moment(date).format("D MMM, YYYY")}
            </span>

            <span className="flex items-center gap-1 font-normal text-xs text-[#475156]">
              <MessageCircleMore size={18} className="text-[#fa8232]" />
              {comments}
            </span>
          </div>

          <h3 className="font-medium text-base text-dark my-3">
            {title.length > 50 ? `${title.slice(0, 50)}...` : title}
          </h3>

          <p className="text-[#77878f] text-sm font-normal line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-4">
          <Link
            href={`/blog/${id}`}
            className="flex items-center text-[#fa8232] px-6 py-2 rounded-sm gap-4 font-semibold  transition-all duration-200 ease-linear text-sm border border-[#fa8232] w-fit hover:text-white hover:bg-[#fa8232]"
          >
            <span className="block uppercase text-sm">Read More</span>
            <FaArrowRight className="mt-[2px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
