"use client";

import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

type Blog = {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

const UpdateBlogForm = ({ blog }: { blog: Blog }) => {
  const id = blog._id;
  const router  = useRouter()

  const handleSubmit = async (e:FieldValues) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const image = e.target.image.files[0];
    if (!image) {
      return Swal.fire("File is required");
    }
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "kazishahed");
    data.append("cloud_name", "dsvcr6xza");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dsvcr6xza/image/upload",
      { method: "POST", body: data }
    );

    const uploadedFileUrl = await res.json();
    const blog = {
      title,
      category,
      description,
      image: uploadedFileUrl.url,
    };

    const blogRes = await fetch(`http://localhost:3000/api/blog/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    if (blogRes.status === 200) {
      toast.success("Blog Updated Successfully!");
      router.push('/dashboard/blogs')
    }
    console.log("Update Blog ?", blogRes);
    e.target.reset();
  };

  return (
    <div className="w-full md:max-w-4xl p-5 mx-auto my-10">
      <h1 className="text-center font-bold text-3xl underline">Update Blog</h1>
      <div className="text-white uppercase font-bold mt-10 border p-2 md:p-10 rounded-xl shadow-xl dark:shadow-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col space-y-5 text-black dark:text-white"
        >
          <div className="flex justify-between gap-5">
            <div className="flex flex-col w-full space-y-2">
              <label htmlFor="">Title</label>
              <input
                defaultValue={blog.title}
                className="p-2 rounded-xl outline-none text-black border dark:border-0"
                type="text"
                name="title"
                placeholder="Title"
                id=""
              />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <label htmlFor="">Category</label>
              {/* <input
                className="p-2 rounded-xl outline-none text-black border dark:border-0"
                type="text"
                name="liveLink"
                id=""
              /> */}
              <select
                defaultValue={blog.category}
                name="category"
                className="p-3 rounded-xl outline-none text-black"
              >
                <option value="Technology">Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Leadership">Leadership</option>
                <option value="Business">Business</option>
              </select>
            </div>
          </div>
          <label htmlFor="">Description</label>
          <textarea
            defaultValue={blog.description}
            className="p-2 rounded-xl outline-none text-black border dark:border-0"
            rows={3}
            name="description"
            placeholder="Description"
            id=""
          ></textarea>
          <div className="flex flex-col w-1/2 space-y-2">
            <label htmlFor="">Thumbnail</label>
            <input
              className="p-2  outline-none text-black block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              name="image"
            />
          </div>
          <div className="mx-auto mt-5">
            <input
              className="cursor-pointer w-full md:w-[500px] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlogForm;
