// import Image from "next/image";

import BannerPage from "@/components/Banner";
import Skills from "@/components/Skills";
//import BlogPage from "./blog/page";
//import ProjectPage from "./project/page";
import BlogFile from "@/components/BlogFile";
import ProjectFile from "@/components/ProjectFile";

// import Navbar from "@/components/Navbar";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Portfolio | Home',
  description: '...',
}

export default function Home() {
  return (
    <div className="">
      <BannerPage />
      <Skills />
      <ProjectFile />
      <BlogFile />
    </div>
  );
}
