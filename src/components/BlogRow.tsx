"use client"
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import HandleDeleteBlog from "./HandleDeleteBlog";

const BlogRow = ({ blog, id }: { blog: any; id: number }) => {
  return (
      <tr className="border font-semibold text-black" key={blog._id}>
        <td>{id + 1}</td>
        <td>{blog.title}</td>
        <td className="flex justify-center">
          <Image
            className="flex items-center"
            src={blog.image}
            alt=""
            width={100}
            height={100}
          />
        </td>
        <td>
          {/* <button className="">
            <FaRegEdit className="text-green-800 text-xl" />
          </button>
          <button>
            <MdOutlineDelete className="text-red-700 text-xl ml-2" />
          </button> */}
          <HandleDeleteBlog blogId={blog._id}/>
        </td>
      </tr>
  );
};

export default BlogRow;
