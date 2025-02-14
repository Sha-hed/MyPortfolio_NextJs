import { GetSingleProject } from "@/components/GetData";
import UpdateProjectForm from "@/components/UpdateProjectForm";

const page = async ({ params } : any) => {
  const {projectId} = await params;
  const project = await GetSingleProject(projectId);

  return (
    <div>
      <UpdateProjectForm project={project} />
    </div>
  );
};

export default page;
