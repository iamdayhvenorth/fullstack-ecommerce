import { blogLists, popularTags } from "@/data";
import BlogCard from "@/myComponents/BlogCard";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

export default function BlogPage() {
  const blogCats = new Set(blogLists.map((item) => item.category));
  const categories = [...blogCats];
  const latestBlogs = blogLists.slice(0, 3);

  return (
    <section className="p-6">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div className="flex gap-5">
          {/* left section */}
          <section className="flex flex-col gap-3">
            {/* category for filtering */}
            <div className="border rounded-sm p-4 flex flex-col gap-3">
              <h2 className="font-medium text-dark text-base">Category</h2>

              <ul className="flex flex-col gap-1">
                <li className="text-sm font-normal text-dark flex items-center gap-2">
                  <input
                    type="radio"
                    id="all"
                    name="category"
                    className="h-5 w-5 cursor-pointer"
                  />
                  <label htmlFor="all" className="cursor-pointer select-none">
                    All
                  </label>
                </li>

                {categories.map((cat) => (
                  <li
                    key={cat}
                    className="text-sm font-normal text-dark flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      id={cat}
                      name="category"
                      className="h-5 w-5 cursor-pointer"
                    />
                    <label htmlFor={cat} className="cursor-pointer select-none">
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* latest blog */}
            <div className="border rounded-sm p-4">
              <h2 className="font-medium text-dark text-base">Latest Blogs</h2>

              <div className="flex flex-col gap-3 py-3">
                {latestBlogs.map((blog) => (
                  <div key={blog.id} className="flex gap-3 items-center">
                    <div>
                      <Image
                        src={blog.image}
                        alt={blog.alt}
                        height={80}
                        width={90}
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-dark max-w-[250px]">
                        {blog.title.length > 50
                          ? `${blog.title.slice(0, 50)}...`
                          : blog.title}
                      </h3>

                      <span className="text-sm text-[#77878f] font-normal">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="border rounded-sm p-4">
              <h2 className="font-medium text-dark text-base">Gallery</h2>

              <div className="grid grid-cols-4 py-3 gap-3">
                <Image
                  src="/images/gallery-1.png"
                  alt="Gallery"
                  width={80}
                  height={80}
                />
                <Image
                  src="/images/gallery-2.png"
                  alt="Gallery"
                  width={80}
                  height={80}
                />
                <Image
                  src="/images/gallery-1.png"
                  alt="Gallery"
                  width={80}
                  height={80}
                />
                <Image
                  src="/images/gallery-2.png"
                  alt="Gallery"
                  width={80}
                  height={80}
                />
                <Image
                  src="/images/gallery-2.png"
                  alt="Gallery"
                  width={80}
                  height={80}
                />
                <Image
                  src="/images/gallery-1.png"
                  alt="Gallery"
                  width={80}
                  height={80}
                />
                <Image
                  src="/images/gallery-2.png"
                  alt="Gallery"
                  width={80}
                  height={80}
                />
                <Image
                  src="/images/gallery-1.png"
                  alt="Gallery"
                  width={80}
                  height={80}
                />
              </div>
            </div>

            {/* Popular tags */}
            <div className="border rounded-sm p-4">
              <h2 className="font-medium text-dark text-base">Popular Tags</h2>

              <ul className="flex gap-2 flex-wrap py-3 max-w-[350px]">
                {popularTags.map((tag) => (
                  <li
                    key={tag}
                    className="py-[6px] px-3 border rounded-sm text-dark text-sm font-medium hover:border-[#fa8232] hover:bg-[#fff3eb] transition-colors duration-200 ease-linear w-fit select-none"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* right section for blog lists */}
          <section className="rounded-sm  flex-1 flex flex-col gap-4">
            {/* search section */}
            <div className="grid grid-cols-2 gap-3">
              <form className="flex border items-center p-2 rounded-sm ">
                <input
                  type="text"
                  name="search"
                  placeholder="search"
                  required
                  autoComplete="off"
                  className="flex-1 text-sm"
                />
                <Search
                  size={20}
                  className="text-dark cursor-pointer hover:text-[#fa8232] transition-colors duration-150 ease-linear"
                />
              </form>

              <div className="flex gap-3 items-center justify-end">
                <span className="text-sm font-medium text-dark ">Sort by:</span>

                <div className="relative inline-block">
                  <select className="block  appearance-none border text-dark p-2  pr-10 rounded leading-tight text-sm focus:outline-none">
                    <option className="option">Most Popular</option>
                    <option className="option">Recent</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-dark">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Blog list */}
            <div className="grid grid-cols-2 gap-3">
              {blogLists.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>

            {/* Pagination */}
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
          </section>
        </div>
      </div>
    </section>
  );
}
