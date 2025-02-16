"use client";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";

const HandleDeleteBlog = ({ blogId }: { blogId: string }) => {
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(
          `https://shahed-portfolio-navy.vercel.app/api/blog/${blogId}`,
          {
            method: "DELETE",
          }
        );

        const data = await res.json();
        if (data.data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
        console.log("DELETE house?? ", data);
      }
    });
  };
  return (
    <div className="flex items-center">
      <Link href={`/dashboard/blogs/updateBlog/${blogId}`} className="">
        <FaRegEdit className="text-green-800 text-xl" />
      </Link>
      <button onClick={handleDelete}>
        <MdOutlineDelete className="text-red-700 text-xl ml-2" />
      </button>
    </div>
  );
};

export default HandleDeleteBlog;
