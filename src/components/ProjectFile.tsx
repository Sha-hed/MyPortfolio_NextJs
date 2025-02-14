import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { GetAllProject } from "./GetData";

const ProjectFile = async () => {
  const res = await fetch("http://localhost:3000/api/project",{
    cache: 'no-store'
  });
  const data = await res.json();
  const projects = data.data;

  return (
    <div className="max-w-7xl mx-auto mt-32">
      <h1 className="text-center text-3xl font-bold my-5">Projects</h1>
      <h1 className="text-center text-xl font-bold">
        I have worked on a wide range of projects. Here are some of my projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mx-5">
        {projects?.slice(0, 3).map((project: any) => (
          <ProjectCard project={project} key={project._id}></ProjectCard>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link
          href={"/project"}
          className="text-gray-900 bg-white border border-black focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          View All Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectFile;
