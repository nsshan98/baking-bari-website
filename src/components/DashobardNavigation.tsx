import Link from "next/link";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";

const DashobardNavigation = () => {
  const dashboardMenus = [
    {
      menuLabel: "Dashboard",
      menuLink: "/dashboard",
      menuIcon: <LuLayoutDashboard />,
    },
    {
      menuLabel: "Dashboard",
      menuLink: "/dashboard",
      menuIcon: <LuLayoutDashboard />,
    },
  ];
  return (
    <div>
      <ul className="menu bg-base-200 w-56 [&_li>*]:rounded-none p-0">
        {dashboardMenus.map((menu, index) => (
          <li key={index} className="p-1">
            <Link href={menu.menuLink}>
              {menu.menuIcon}
              {menu.menuLabel}
              <span className="badge badge-xs">99+</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashobardNavigation;
