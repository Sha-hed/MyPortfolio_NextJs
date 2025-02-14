
import Ban from "@/components/Ban";
import BannerPage from "@/components/Banner";
import Blog from "@/components/Blog";
import ProjectFile from "@/components/ProjectFile";
import Skill from "@/components/Skill";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio | Home",
  description: "...",
};

export default function Home() {
  return (
    <div>
      <Ban/>
      <Skill/>
      <ProjectFile />
      <Blog/>
    </div>
  );
}
