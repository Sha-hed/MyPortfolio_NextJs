// import { Link } from 'react-router-dom';
// import Logo from '../assets/images/Shahed.jpg'
"use client";
import Link from "next/link";
import Logo from "../assets/images/PortLogo.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <div className="bg-gray-900 p-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Image
                src={Logo}
                alt="logo image"
                width={150}
                height={150}
              ></Image>
            </div>
            <div className="text-xl font-bold space-x-5 hidden md:flex">
              <Link href={"/"}>Home</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/project"}>Project</Link>
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/dashboard/projects"}>Dashboard</Link>
            </div>
            <div className="hidden md:block">
              <Link
                href={"/login"}
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Login
              </Link>
            </div>
            <div className="md:hidden">
              {/* <Link href={'/login'} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Login
            </Link> */}
              <button onClick={() => setOpen(!open)}>
                <MdOutlineMenu className="text-2xl" />
              </button>
            </div>
          </div>
          {/* <hr className="my-5"/> */}
        </div>
      </div>
      {/* <div
        className={`fixed top-[100px] left-0 w-[200px] bg-white min-h-screen shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="text-xl font-bold space-y-5 flex flex-col justify-center p-5 text-black">
          <Link href={"/"}>Home</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/project"}>Project</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/dashboard/projects"}>Dashboard</Link>
          <Link
            href={"/login"}
            className="w-[80px] px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Login
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
