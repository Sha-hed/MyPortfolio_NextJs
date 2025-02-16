import { GetAllProject } from "@/components/GetData";
import ProjectRow from "@/components/ProjectRow";

import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio | Dashboard",
  description: "...",
};

const DashboardProjects = async () => {
  const res = await fetch(
    "https://shahed-portfolio-navy.vercel.app/api/project",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const projects = data.data;

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 my-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold leading-tight text-black dark:text-white">
            My Projects
          </h2>
          <Link
            href="/dashboard/projects/create-project"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xl px-5 py-2.5"
          >
            Add Project
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-300 text-center text-black">
                <th className="p-3">#</th>
                <th className="p-3">Title</th>
                <th className="p-3">Thumbnail</th>
                <th className="p-3">Live Link</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="border-b bg-gray-50 border-gray-300 text-center">
              {projects?.map((project: any, id: any) => (
                <ProjectRow key={project._id} project={project} id={id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardProjects;
