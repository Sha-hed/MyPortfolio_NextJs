import Image from "next/image";
import Link from "next/link";

const ProjectDetails = async ({ params }: any) => {
  const { projectId } = await params;
  const res = await fetch(
    `https://shahed-portfolio-navy.vercel.app/api/project/${projectId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const project = data?.data;

  const {
    title,
    image,
    description,
    technology,
    liveLink,
    clientSide,
    serverSide,
  } = project;

  const tc = technology.split(" ");

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center font-bold text-3xl my-5 underline text-blue-400">
        {project.title}
      </h1>
      <div className="flex flex-col md:flex-row gap-5 p-5 items-center">
        <div className="w-full md:w-1/2">
          <Image
            className="border border-gray-900"
            src={project.image}
            alt=""
            width={600}
            height={600}
          ></Image>
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-5">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-400">{title}</span>
          </h1>
          <p>{description}</p>
          <div className="flex">
            <h1 className="text-blue-400">
              Technology Used in this project are :
            </h1>
            <div className="flex flex-wrap gap-x-5">
              {tc?.map((tech: any, id: any) => (
                <p className="" key={id}>
                  {tech}
                </p>
              ))}
            </div>
          </div>
          <div className="flex justify-around mt-5">
            <Link
              href={liveLink}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Live Site
            </Link>
            <Link
              href={clientSide}
              target="_blank"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Github Client
            </Link>
            <Link
              href={serverSide}
              target="_blank"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Github Server
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
