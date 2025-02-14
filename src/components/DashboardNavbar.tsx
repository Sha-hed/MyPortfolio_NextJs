// import Admin from '../assets/images/Admin.png';
import Admin from "../assets/images/Admin.png";
import { MdOutlineMessage } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { FaBlogger, FaBookReader, FaHome } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { IoIosContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";

const DashboardNavbar = () => {
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row md:block md:w-64 h-[350px] md:min-h-screen bg-black text-white dark:bg-gray-900">
        <div className="flex flex-col justify-center items-center p-5">
          <div className="w-20 rounded-full">
            <Image
              src={Admin}
              width={100}
              height={100}
              className="rounded-full border-4 p-1"
              alt=""
            />
          </div>
          <h1 className="uppercase text-2xl font-semibold my-1">Dashboard</h1>
          {/* <li className="list-none border py-1 px-2"><Link href={"/dashboard"}>Overview</Link></li> */}
          <div className="w-full mx-auto my-3 border"></div>
        </div>
        <div className="flex flex-row md:flex-col">
          <div className="flex items-center gap-2 mx-3">
            <GrProjects className="text-xl" />
            <li className="list-none">
              <Link href="/dashboard/projects">Manage Project</Link>
            </li>
          </div>
          <div className="flex items-center gap-2 m-3">
            <FaBookReader className="text-xl" />
            <li className="list-none">
              <Link href="/dashboard/blogs">Manage Blog</Link>
            </li>
          </div>
          <div className="flex items-center gap-2 mx-3 md:mb-3">
            <MdOutlineMessage className="text-xl" />
            <li className="list-none">
              <Link href="/dashboard/messages">Messages</Link>
            </li>
          </div>
          {/* <div className="flex items-center gap-2 mx-3 mb-3">
                    <FaUser className="text-xl" />
                    <li className="list-none"><Link href='/dashboard/addFlight'>Manage Users</Link></li>
                </div> */}
        </div>
        <div className="w-full mx-auto my-3 border divide-dotted"></div>
        <div className="flex flex-row md:flex-col justify-around">
          <div className="flex items-center gap-2 mx-3 mb-3">
            <FaHome className="text-xl" />
            <li className="list-none">
              <Link href="/">Home</Link>
            </li>
          </div>
          <div className="flex items-center gap-2 mx-3 mb-3">
            <FaBlogger className="text-xl" />
            <li className="list-none">
              <Link href="/blog">Blog</Link>
            </li>
          </div>
          <div className="flex items-center gap-2 mx-3 mb-3">
            <FaDiagramProject className="text-xl" />
            <li className="list-none">
              <Link href="/project">Project</Link>
            </li>
          </div>
          <div className="flex items-center gap-2 mx-3 mb-3">
            <IoIosContact className="text-xl" />
            <li className="list-none">
              <Link href="/contact">Contact</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
