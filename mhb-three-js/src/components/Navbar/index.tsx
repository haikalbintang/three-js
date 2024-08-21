"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { styles } from "@/styles/styles";
import { navLinks } from "@/constants";
import { logo, menu, close } from "../../../public/assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src="/logo-color.svg"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          ></Image>
          <p className="text-white text-lg font-semibold cursor-pointer">
            HaikalBintang|<span>M</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-lg font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-36 z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-base`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <Link href={`#${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
