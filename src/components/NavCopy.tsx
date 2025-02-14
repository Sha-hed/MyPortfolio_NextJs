"use client";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";
import Logo from "../assets/images/PortLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/blog",
    title: "Blogs",
  },
  {
    path: "/project",
    title: "Projects",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "/dashboard/projects",
    title: "Dashboard",
  },
  {
    path: "/login",
    title: "Login",
  },
];

const NavCopy = () => {
  const pathName = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [anywhere, setAnyWhere] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePath = () => {
    setOpen(!open);
  };
  const handlePath2 = () => {
    setAnyWhere(!anywhere);
  };

  return (
    <div className="">
      <div className="bg-black dark:bg-gray-900 dark:text-white absolute z-10 w-full flex justify-between md:px-32 py-5 text-white text-lx">
        <div className="w-[150px] object-cover">
          <Image width={100} height={100} src={Logo} alt="" />
        </div>
        <div className="hidden md:flex space-x-10 font-bold text-xl">
          {navLinks.map(({ path, title }, id) => (
            <Link
              key={id}
              href={path}
              className={`${
                pathName === path
                  ? "border-b-2 border-white"
                  : "relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
              }`}
            >
              {title}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        {/* For Responsiveness */}
        <div className="flex md:hidden space-x-5">
          <ThemeToggle />
          {!open && (
            <button onClick={() => setOpen(!open)}>
              <IoMenu className="bg-gray-600 p-1 text-3xl" />
            </button>
          )}
        </div>
        <div
          className={`absolute top-0 left-0 z-20 bg-gray-900 text-white w-full h-screen transition-transform duration-500 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="py-5">
            <div className="flex justify-between">
              <div className="w-[150px] object-cover">
                <Image height={100} width={100} src={Logo} alt="" />
              </div>
              {open && (
                <button onClick={() => setOpen(!open)}>
                  <RiCloseLargeLine className="bg-gray-600 p-1 text-3xl" />
                </button>
              )}
            </div>
            <hr className="my-5" />
            <div className="flex flex-col px-5 space-y-3">
              {navLinks.map(({ path, title }, id) => (
                <Link
                  onClick={handlePath}
                  key={id}
                  href={path}
                  className={`${
                    pathName === path
                      ? "border-b-2 border-white w-[50px]"
                      : "relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                  }`}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div
          className={`fixed z-10 top-0 left-0 w-full flex justify-between md:px-32 py-5 bg-gray-900 opacity-75 transition-transform duration-500 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          } text-white text-lg`}
        >
          <div className="w-[150px] object-cover">
            <Image width={100} height={100} src={Logo} alt="" />
          </div>
          <div className="flex space-x-5 font-semibold text-xl">
            {navLinks.map(({ path, title }, id) => (
              <Link
                key={id}
                href={path}
                className={`${
                  pathName === path
                    ? "border-b-2 border-white"
                    : "relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                }`}
              >
                {title}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div
          className={`fixed z-20 top-0 left-0 w-full flex justify-between md:px-32 py-5 bg-black opacity-75 transition-transform duration-500 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          } text-white text-lg`}
        >
          <div className="w-[150px] object-cover">
            <Image height={100} width={100} src={Logo} alt="" />
          </div>
          <div className="flex md:hidden px-2 space-x-3">
            <ThemeToggle />
            {!anywhere && (
              <button onClick={() => setAnyWhere(!anywhere)}>
                <IoMenu className="bg-gray-600 p-1 text-3xl" />
              </button>
            )}
          </div>
          <div
            className={`absolute top-0 left-0 z-20 bg-gray-900 text-white w-full h-screen transition-transform duration-500 ${
              anywhere ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="py-5">
              <div className="flex justify-between">
                <div className="w-[150px] object-cover">
                  <Image width={100} height={100} src={Logo} alt="" />
                </div>
                <ThemeToggle />
                {anywhere && (
                  <button onClick={() => setAnyWhere(!anywhere)}>
                    <RiCloseLargeLine className="bg-blue-400 p-1 text-3xl" />
                  </button>
                )}
              </div>
              <hr className="my-5" />
              <div className="flex flex-col px-5 space-y-3">
                {navLinks.map(({ path, title }, id) => (
                  <Link
                    onClick={handlePath2}
                    key={id}
                    href={path}
                    className={`${
                      pathName === path
                        ? "border-b-2 border-white w-[50px]"
                        : "relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                    }`}
                  >
                    {title}
                  </Link>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCopy;
