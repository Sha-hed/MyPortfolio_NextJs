import BlogCard from "@/components/BlogCard";
import { GetAllBlog } from "@/components/GetData";
import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio | Blog",
  description: "...",
};

const BlogPage = async () => {
  const res = await fetch("https://shahed-portfolio-navy.vercel.app/api/blog", {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data;
  return (
    <div className="max-w-7xl mx-auto mb-5">
      <h1 className="text-center text-3xl font-bold my-5">All Blogs</h1>
      <h1 className="text-center text-xl font-bold">
        Explore Code, Tech, and Innovation
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mx-5">
        {blogs?.map((blog: any) => (
          <BlogCard blog={blog} key={blog._id}></BlogCard>
        ))}
      </div>
      {/* <div className="flex justify-center my-10">
        <Link
          href={"/blog"}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          View All Blogs
        </Link>
      </div> */}
    </div>
  );
};

export default BlogPage;
