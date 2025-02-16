import { GetAllProject } from "@/components/GetData";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio | Project",
  description: "...",
};

const ProjectPage = async () => {
  const res = await fetch(
    "https://shahed-portfolio-navy.vercel.app/api/project",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const projects = data.data;
  // const p1 = projects[0]?.technology;
  // p1?.map((p)=>console.log('Tech ',p))
  // console.log(p1);
  // console.log(projects);

  return (
    <div className="max-w-7xl mx-auto mb-5">
      <h1 className="text-center text-3xl font-bold my-5">All Projects</h1>
      <h1 className="text-center text-xl font-bold">
        I have worked on a wide range of projects. Here are some of my projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mx-5">
        {projects?.map((project: any) => (
          <ProjectCard project={project} key={project._id}></ProjectCard>
        ))}
      </div>
      {/* <div className="flex justify-center my-10">
        <Link
          href={"/"}
          target="_blank"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          View All Project
        </Link>
      </div> */}
    </div>
  );
};

export default ProjectPage;
