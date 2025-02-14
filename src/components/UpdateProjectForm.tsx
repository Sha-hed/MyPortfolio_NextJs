"use client";

import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const UpdateProjectForm = ({ project }:any) => {
  const router = useRouter()
  const id = project._id;
  const handleSubmit = async (e:FieldValues) => {
    e.preventDefault();
    const title = e.target.title.value;
    const liveLink = e.target.liveLink.value;
    const clientSide = e.target.clientSide.value;
    const serverSide = e.target.serverSide.value;
    const technology = e.target.technology.value;
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
    const project = {
      title,
      liveLink,
      clientSide,
      serverSide,
      technology,
      description,
      image: uploadedFileUrl.url,
    };
    const projectRes = await fetch(`http://localhost:3000/api/project/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/type",
      },
      body: JSON.stringify(project),
    });
    if (projectRes.status === 200) {
      toast.success("Project Updated Successfully!!");
      router.push('/dashboard/projects')
    }
    console.log(projectRes);
    e.target.reset();
  };

  return (
    <div className="w-full md:max-w-4xl p-5 mx-auto my-10">
      <h1 className="text-center font-bold text-3xl underline">
        Update Project
      </h1>
      <div className="text-white uppercase font-bold mt-10 border p-2 md:p-10 rounded-xl shadow-xl dark:shadow-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col space-y-5 text-black dark:text-white"
        >
          <div className="flex justify-between gap-2">
            <div className="flex flex-col w-[48%] md:w-full space-y-2">
              <label htmlFor="">Title</label>
              <input
                defaultValue={project.title}
                className="p-2 rounded-xl outline-none text-black border dark:border-0"
                type="text"
                name="title"
                placeholder="Title"
                id=""
              />
            </div>
            <div className="flex flex-col w-[48%] md:w-full space-y-2">
              <label htmlFor="">Live Link</label>
              <input
                defaultValue={project.liveLink}
                className="p-2 rounded-xl outline-none text-black border dark:border-0"
                type="text"
                name="liveLink"
                placeholder="Enter Live Link"
                id=""
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col w-[48%] md:w-full space-y-2">
              <label htmlFor="">Client Side</label>
              <input
                defaultValue={project.clientSide}
                className="p-2 rounded-xl outline-none text-black border dark:border-0"
                type="text"
                name="clientSide"
                placeholder="Client Side"
                id=""
              />
            </div>
            <div className="flex flex-col w-[48%] md:w-full space-y-2">
              <label htmlFor="">Server Side</label>
              <input
                defaultValue={project.serverSide}
                className="p-2 rounded-xl outline-none text-black border dark:border-0"
                type="text"
                name="serverSide"
                placeholder="Server Side"
                id=""
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col w-[48%] md:w-full space-y-2">
              <label className="uppercase font-bold" htmlFor="">
                Technology Used
              </label>
              <input
                defaultValue={project.technology}
                className="p-2 rounded-xl outline-none text-black border dark:border-0"
                type="text"
                name="technology"
                placeholder="write technology separate by a space"
                id=""
              />
            </div>
            <div className="flex flex-col w-[48%] md:w-full space-y-2">
              <label htmlFor="">Thumbnail</label>
              <input
                className="p-2  outline-none text-black block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                name="image"
              />
            </div>
          </div>
          <label htmlFor="">Description</label>
          <textarea
            defaultValue={project.description}
            className="p-2 rounded-xl outline-none text-black border dark:border-0"
            rows={3}
            name="description"
            placeholder="Description"
            id=""
          ></textarea>
          <div className="mx-auto mt-5">
            <input
              className="cursor-pointer w-full md:w-[500px] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProjectForm;
