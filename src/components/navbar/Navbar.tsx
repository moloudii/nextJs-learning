"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const navs = [
    { title: "home", link: "/" },
    { title: "about", link: "/about" },
  ];
  return (
    <div className="p-4 border-b ">
      <nav>
        <ul className="flex">
          {navs.map((nav, index) => (
            <li className="mr-4" key={index}>
              <Link
                href={nav.link}
                className={`${
                  pathname === nav.link
                    ? "!text-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
