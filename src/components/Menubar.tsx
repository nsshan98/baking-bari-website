"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

export default function Menubar() {
  const menuItems = [
    {
      item: "Home",
      path: "/",
    },
    // {
    //   item: "About",
    //   path: "/about",
    // },
    {
      item: "Menu",
      path: "/menu",
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-36 p-2 shadow"
          >
            {menuItems.map((menu, index) => (
              <li key={index}>
                <Link href={menu.path}>{menu.item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={logo} alt="logo" width={50} height={50} />
          <p className="text-xl font-semibold">Baking Bari</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((menu, index) => (
            <li key={index}>
              <Link href={menu.path}>{menu.item}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <Link className="btn" href="/signup">
          Sign Up
        </Link>
        <Link className="btn" href="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
