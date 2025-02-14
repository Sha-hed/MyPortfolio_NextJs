
"use client";
import Image from "next/image";
import HandleEditDeleteProject from "./HandleEditDeleteProject";
// import HandleEditDeleteProject from "@/components/handleEditDeleteProject";

const ProjectRow = ({ project, id }: { project: any; id: number }) => {
  return (
    <tr className="border font-semibold text-black">
      <td>{id + 1}</td>
      <td>{project.title}</td>
      <td className="flex justify-center">
        <Image src={project.image} alt="" width={100} height={100} />
      </td>
      <td>
        <a className="hover:underline" href={project.liveLink} target="_blank">
          Click Here
        </a>
      </td>
      <td>
        <HandleEditDeleteProject projectId={project._id} />
      </td>
    </tr>
  );
};

export default ProjectRow;
