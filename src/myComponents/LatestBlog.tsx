import { blogLists } from "@/data";
import React from "react";
import BlogCard from "./BlogCard";

export default function LatestBlog() {
  const blogs = blogLists.slice(0, 3);
  const latestBlogs = blogs.map((blog) => <BlogCard key={blog.id} {...blog} />);
  return (
    <section className="py-6 bg-[#f2f4f5]">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div>
          <h1 className="text-center text-3xl font-semibold text-dark mb-4">
            Latest News
          </h1>
          <div className="grid grid-cols-3 gap-3">{latestBlogs}</div>
        </div>
      </div>
    </section>
  );
}
