
"use client";
import { TypeAnimation } from "react-type-animation";

import { IoMdDownload } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import facebook from "../assets/SocioIcons/facebook.svg";
import instagram from "../assets/SocioIcons/instagram.svg";
import linkedin from "../assets/SocioIcons/linkedin.svg";
import twitter from "../assets/SocioIcons/twitter.svg";

import pp from "../assets/images/Shahed.jpg";
import Image from "next/image";
import Link from "next/link";
//import { useEffect, useState } from "react";

const Ban= () => {

  const handleDownloadResume = () => {
    console.log("Download Resume");
  };

  return (
    <div className="max-w-6xl mx-auto min-h-[500px] flex justify-center items-center px-3 pt-10">
      <div className="flex flex-col-reverse md:flex-row gap-3">
        {/* Banner Details */}
        <div className="w-full md:w-[60%] font-bold flex flex-col space-y-3">
          <h1 className="text-2xl md:text-4xl">Hi, I am</h1>
          {/* <h1 className="text-2xl md:text-4xl">Kazi Mohammad Shahed</h1>
          <h1 className="text-2xl md:text-4xl">I am a Junior MERN Stack Developer</h1> */}
          <TypeAnimation
            sequence={["Kazi Mohammad Shahed", 1000]}
            speed={75}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              "I am a Junior React Developer",
              1000,
              "I am a Junior Frontend Developer",
              1000,
              "I am a Junior MERN Stack Developer",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          <p className="text-lg md:text-xl">
            I am a motivated and versatile Junior Web Developer, always eager to
            take on new challenges. With a passion for learning, I am dedicated
            to delivering high-quality code and user-friendly web solutions.
            With a positive attitude and a growth mindset, I am ready to make a
            meaningful contribution to any development team and achieve great
            things in the world of web development.
          </p>
          <div className="flex gap-10 py-5">
            <Link
              href="https://www.facebook.com/kazi.m.shahed.3"
              target="_blank"
            >
              <Image src={facebook} alt="f" width={30} height={30} />
            </Link>
            <Link
              href="https://www.instagram.com/kazimd.shahed/?hl=en"
              target="_blank"
            >
              <Image src={instagram} alt="f" width={30} height={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kazimdshahed/"
              target="_blank"
            >
              <Image src={linkedin} alt="f" width={30} height={30} />
            </Link>
            <Link href="https://x.com/KaziMohamm1908" target="_blank">
              <Image src={twitter} alt="f" width={30} height={30} />
            </Link>
          </div>
          <div onClick={handleDownloadResume} className="flex">
            <Link href={'https://drive.google.com/file/d/1rV6aaG0JPK2GMfIi5TroNYFssP67V-MU/view?usp=sharing'} target="_blank" className="flex items-center gap-2.5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
             <IoMdDownload className="text-xl"/> Download Resume
            </Link>
          </div>
        </div>
        {/* Banner Pic */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="w-full md:w-[40%] flex justify-center items-center"
        >
          <div className="w-72 hover:scale-105 border-4 border-red-900 rounded-full p-5 bg-gray-900">
            {/* <img className='rounded-full' src={SS} alt="" /> */}
            <Image
              src={pp}
              className="rounded-full"
              alt="profilePicture"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ban;
