import DashboardNavigation from "@/components/DashboardNavigation";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <DashboardNavigation>
        {children}
      </DashboardNavigation>
    </div>
  );
};

export default DashboardLayout;
