import { blogLists, popularTags } from "@/data";
import {
  Box,
  Calendar,
  CircleUserRound,
  MessageCircleMore,
  RefreshCcw,
  Search,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaLink,
} from "react-icons/fa";

export default function BlogDetailPage() {
  const blogCats = new Set(blogLists.map((item) => item.category));
  const categories = [...blogCats];
  const latestBlogs = blogLists.slice(0, 3);

  return (
    <section className="p-6">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div className="flex flex-col gap-5">
          {/* hero section */}
          <section>
            <Image
              src="/images/blog-detail.png"
              alt=""
              width={1100}
              height={740}
              className="object-cover"
            />
          </section>

          {/* blog content details */}
          <section className="flex gap-5">
            {/* left section */}
            <div className="flex-1">
              <section className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <span className="flex items-center gap-1 font-normal text-sm text-[#475156]">
                    <Box size={24} className="text-[#fa8232]" />
                    Electronics
                  </span>

                  <span className="flex items-center gap-1 font-normal text-sm text-[#475156]">
                    <CircleUserRound size={24} className="text-[#fa8232]" />
                    Marvin McKinney
                  </span>
                  <span className="flex items-center gap-1 font-normal text-sm text-[#475156]">
                    <Calendar size={24} className="text-[#fa8232]" />8 Sep, 2020
                  </span>

                  <span className="flex items-center gap-1 font-normal text-sm text-[#475156]">
                    <MessageCircleMore size={24} className="text-[#fa8232]" />
                    738
                  </span>
                </div>

                <h2 className="font-semibold text-dark text-2xl">
                  How artist collective Meow Wolf’s website complements their
                  immersive venues
                </h2>

                <div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <div>
                          <Image
                            src="/images/comment-avatar.png"
                            alt="avatar"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-medium text-base text-dark">
                          Cameron Williamson
                        </h3>
                      </div>

                      <div className="icon-container flex gap-2">
                        <span className="bg-[#25d366]">
                          <FaWhatsapp />
                        </span>
                        <span className="bg-[#3b5998]">
                          <FaFacebookF />
                        </span>
                        <span className="bg-[#1da1f2]">
                          <FaTwitter />
                        </span>
                        <span className="bg-[#0077b5]">
                          <FaLinkedinIn />
                        </span>
                        <span className="bg-[#cb2027]">
                          <FaPinterestP />
                        </span>
                        <span className="bg-[#77878f]">
                          <FaLink />
                        </span>
                      </div>
                    </div>

                    <p className="text-base font-normal text-[#475156] my-2">
                      Sed a laoreet erat, in vehicula erat. Vivamus a viverra
                      ipsum, ut interdum tellus. Donec quis ex quis metus
                      sodales facilisis ut nec ex. Ut commodo lacus vel odio
                      venenatis, sit amet lacinia lacus cursus. Ut sodales
                      laoreet dapibus. Sed aliquam nisl odio, sed blandit erat
                      placerat sed. Mauris eleifend, magna in convallis congue,
                      orci est fermentum leo, at tincidunt massa ligula semper
                      dolor. Nunc tristique enim in risus tristique rutrum eget
                      ac eros.
                    </p>

                    <article className="flex gap-4 border-l-2 border-[#fa8232] bg-[#fff3eb] p-5">
                      <BiSolidQuoteAltLeft className="text-6xl text-[#fa8232]" />
                      <p className="text-lg font-normal text-dark max-w-[710px]">
                        Vintage meets vogue is the only way to describe this
                        serif typeface. Neue World encompasses the mode
                        high-fashion aesthetic of the 1960s with a commercial
                        take.
                      </p>
                    </article>

                    <p className="text-base font-normal text-[#475156] my-2">
                      Mauris fermentum faucibus risus a efficitur. Morbi sit
                      amet arcu turpis. Ut nisl velit, mattis at augue vel,
                      molestie egestas justo. Aliquam elementum nibh neque, eu
                      ornare nunc feugiat sed. Aliquam erat volutpat. Praesent
                      vitae orci blandit, semper felis ac, interdum lacus.
                    </p>

                    <p className="text-base font-normal text-[#475156] my-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed iaculis nunc urna, id lobortis elit dapibus et. Etiam
                      ultricies leo justo, nec vehicula augue auctor et. Sed
                      finibus volutpat dui. Nunc vitae urna dictum tellus luctus
                      tincidunt quis feugiat dolor. Aliquam malesuada tristique
                      urna, quis ornare diam venenatis quis. Nunc ligula lectus,
                      posuere sit amet ultrices ut, porttitor efficitur mauris.
                      Aliquam bibendum vitae turpis sed molestie. Donec massa
                      lorem, semper vel pellentesque ut, ultrices in enim. Sed
                      fringilla, mi porttitor sodales vehicula, felis enim
                      gravida nisi, at mollis ante leo et ligula. Quisque non
                      aliquam eros, in aliquet tellus. Mauris ullamcorper quam
                      erat, vehicula rhoncus velit interdum eget.
                    </p>

                    <div className="flex gap-3 ">
                      <div className="w-1/2">
                        <Image
                          src="/images/robot.png"
                          alt="Robot"
                          width={424}
                          height={424}
                          className="object-cover"
                        />
                      </div>
                      <div className="w-1/2">
                        <Image
                          src="/images/tezos.png"
                          alt="Tezos"
                          width={424}
                          height={424}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <p className="text-base font-normal text-[#475156] my-2">
                      Proin pulvinar quam at aliquet sagittis. Quisque laoreet
                      luctus bibendum. Aenean in dignissim orci. Suspendisse at
                      augue eget neque dictum vestibulum eu ac orci. Integer
                      imperdiet lectus nec urna mollis euismod. Proin et risus
                      nulla. Cras at diam in risus feugiat accumsan. Nulla sit
                      amet blandit mi, a convallis mauris. Quisque lacus dolor,
                      cursus ac quam ac, tempus ultrices sem. Ut porttitor..
                    </p>
                  </div>
                </div>
              </section>

              {/* comment form */}
              <section className="mt-3">
                <h2 className="font-medium text-dark text-base">
                  Leave a Comment
                </h2>

                <form className="py-4 flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="full-name"
                        className="text-sm font-medium text-dark"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        required
                        autoComplete="off"
                        className="border rounded-sm text-sm p-2"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="email-address"
                        className="text-sm font-medium text-dark"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email-address"
                        id="email-address"
                        required
                        autoComplete="off"
                        className="border rounded-sm text-sm p-2"
                      />
                    </div>

                    <div className="flex flex-col gap-1 col-span-2">
                      <label
                        htmlFor="comment"
                        className="text-sm font-medium text-dark"
                      >
                        Description
                      </label>
                      <textarea
                        name="comment"
                        id="comment"
                        required
                        placeholder="What’s your thought about this blog..."
                        className="min-h-[124px] resize-y p-2 text-sm border rounded-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#fa8232] text-white uppercase rounded-sm p-2 font-semibold opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear w-fit text-sm"
                  >
                    Post Comment
                  </button>
                </form>
              </section>

              {/* comment lists */}
              <section className="mt-3">
                <h2 className="font-medium text-dark text-base">Comments</h2>

                <div className="py-4">
                  {[...Array(5)].map((_, idx) => (
                    <div
                      className="flex gap-3 border-b last:border-none py-3"
                      key={idx}
                    >
                      <div>
                        <Image
                          src="/images/comment-avatar.png"
                          alt="avatar"
                          width={60}
                          height={60}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-dark text-sm font-medium">
                          Annette Black{" "}
                          <span className="font-normal">. 26 Apr, 2021</span>
                        </h5>
                        <p className="text-[#475156] text-sm font-normal">
                          In a nisi commodo, porttitor ligula consequat,
                          tincidunt dui. Nulla volutpat, metus eu aliquam
                          malesuada, elit libero venenatis urna, consequat
                          maximus arcu diam non diam.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="border border-[#fa8232] text-[#fa8232] uppercase rounded-sm p-2 font-semibold text-sm flex items-center justify-center gap-2 w-fit hover:bg-[#fa8232] hover:text-white transition-colors duration-150 ease-linear">
                  <RefreshCcw size={18} />
                  Load More
                </button>
              </section>
            </div>

            {/* right section */}
            <section className="flex flex-col gap-3">
              <div className="p-4 border rounded-sm">
                <h2 className="text-base font-medium text-dark">Search</h2>

                <form className="flex border items-center p-2 rounded-sm mt-3">
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
              </div>

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
                      <label
                        htmlFor={cat}
                        className="cursor-pointer select-none"
                      >
                        {cat}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* latest blog */}
              <div className="border rounded-sm p-4">
                <h2 className="font-medium text-dark text-base">
                  Latest Blogs
                </h2>

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
                <h2 className="font-medium text-dark text-base">
                  Popular Tags
                </h2>

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
          </section>
        </div>
      </div>
    </section>
  );
}
