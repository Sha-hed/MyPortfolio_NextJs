import BlogRow from "@/components/BlogRow";
import { GetAllBlog } from "@/components/GetData";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

export const metadata: Metadata = {
  title: "My Portfolio | Dashboard",
  description: "...",
};

const DashboardBlogsPage = async () => {
  const res = await fetch("https://shahed-portfolio-navy.vercel.app/api/blog", {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data;

  // const blogs = await GetAllBlog();

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 my-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold leading-tight text-black dark:text-white">
          All Blogs
        </h2>
        <Link
          href={"/dashboard/blogs/create-blog"}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 mt-5"
        >
          Create New Blog
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="bg-gray-300 text-center text-black">
              <th className="p-3">#</th>
              <th className="p-3">Title</th>
              <th className="p-3">Thumbnail</th>
              {/* <th className="p-3">Live Link</th> */}
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300 text-center">
            {blogs?.map((blog: any, id: any) => (
              <BlogRow key={id} blog={blog} id={id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardBlogsPage;
