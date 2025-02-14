import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";

const BlogDetails = async ({ params } : any) => {
  const { blogId } = await params;

  const res = await fetch(`http://localhost:3000/api/blog/${blogId}`,{
    cache: "no-store",
  });
  const blog = await res.json();
  const { image, title, description, category } = blog.data;

  return (
    <div className="max-w-6xl mx-auto my-5 p-2">
      <h1 className="text-center font-bold text-2xl dark:text-white underline mb-5">
        {title}
      </h1>
      <div className="flex justify-center">
        <Image
          className="w-full md:w-1/2 text-center border-2 border-gray-900"
          src={image}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className=" my-5">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
