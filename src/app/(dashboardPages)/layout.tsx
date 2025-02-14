import DashboardNavbar from "@/components/DashboardNavbar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
      <DashboardNavbar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
