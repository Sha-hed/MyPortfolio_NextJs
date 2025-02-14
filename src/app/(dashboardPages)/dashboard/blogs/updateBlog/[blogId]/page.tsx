import { GetSingleBlog } from "@/components/GetData";
import UpdateBlogForm from "@/components/UpdateBlogForm";


const page = async ({ params } : any) => {
  const { blogId } = await params;

  const blog = await GetSingleBlog(blogId)

  console.log('Update Blog ', blog);


  return (
    <div>
      <UpdateBlogForm blog={blog}/>
    </div>
  );
};

export default page;
