import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavCopy from "@/components/NavCopy";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="h-[100px]">
        <NavCopy />
      </div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
