import Link from "next/link";
import React, { ReactNode } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";


const DashboardNavigation = ({ children }: { children: ReactNode }) => {
  const dashboardMenus = [
    {
      menuLabel: "Dashboard",
      menuLink: "/dashboard",
      menuIcon: <LuLayoutDashboard />,
    },
    {
      menuLabel: "Category",
      menuLink: "/category",
      menuIcon: <MdCategory />,
    }, {
      menuLabel: "Menu",
      menuLink: "/menu",
      menuIcon: <MdRestaurantMenu />,
    },
  ];
  return (
    <div className="flex">
      <ul className="menu bg-base-200 w-56 [&_li>*]:rounded-none p-0">
        {dashboardMenus.map((menu, index) => (
          <li key={index} className="p-1">
            <Link href={menu.menuLink}>
              {menu.menuIcon}
              {menu.menuLabel}
              {/* <span className="badge badge-xs">99+</span> */}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex-grow pl-3">
        {children}
      </div>
    </div>
  );
};

export default DashboardNavigation;
