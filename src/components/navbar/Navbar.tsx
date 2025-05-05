"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  const handleClick = () => {
    router.refresh();
  };
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
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Click
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
