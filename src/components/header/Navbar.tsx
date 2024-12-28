"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      slug: "/",
    },
    {
      id: 2,
      name: "Shop",
      slug: "/shop",
    },
    {
      id: 3,
      name: "About",
      slug: "/about",
    },
    {
      id: 4,
      name: "Blog",
      slug: "/blog",
    },
    {
      id: 5,
      name: "Contact",
      slug: "/contact",
    },
    {
      id: 6,
      name: "Pages",
      slug: "/pages",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full sm:py-4 sm:px-6 bg-white px-2 py-2 flex justify-between items-center border-b m-auto ">
      <div className="flex justify-center items-center gap-28">
        {/* Logo */}
        <Link
          href={"/"}
          className="sm:text-3xl text-xl font-bold text-myHeading"
        >
          Bandage
        </Link>

        {/* Large-screen Nav Links */}
        <div className="hidden md:flex gap-6 items-center w-fit text-black">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              name={link.name}
              slug={link.slug}
              onclick={() => setIsOpen(false)}
            />
          ))}
        </div>
      </div>

      {/* Mob navlinks */}
      <nav
        className={`fixed top-10 sm:top-36 right-0 bg-white backdrop-blur-md p-6 w-full h-screen transform duration-300 ease-in-out z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 justify-center h-full">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              name={link.name}
              slug={link.slug}
              onclick={() => setIsOpen(false)}
            />
          ))}
        </div>
      </nav>

      {/*  */}
      <div className="flex justify-center items-center gap-7">
        <div className="hidden lg:flex gap-2 items-center font-semibold text-[#23A6F0]">
          <Image src={"/icons/person.png"} alt="auth" width={12} height={12} />
          <span>
            <Link href={"/login"} className="hover:underline">
              Login{" "}
            </Link>
            /
            <Link href={"/signup"} className="hover:underline">
              {" "}
              Register
            </Link>{" "}
          </span>
        </div>
        <Link href="/search" className=" overflow-hidden">
          <Image
            src={"/icons/search.png"}
            alt={"search"}
            width={15}
            height={15}
          />
        </Link>
        <Link
          href={"/cart"}
          className="flex justify-center gap-1 items-center overflow-hidden"
        >
          <Image src={"/icons/cart.png"} alt={"cart"} width={15} height={15} />
          <span className="text-[#23A6F0]">1</span>
        </Link>
        <Link
          href="/wishlist"
          className="hidden md:flex justify-center items-center gap-1 overflow-hidden"
        >
          <Image
            src={"/icons/wishlist.png"}
            alt={"wishlist"}
            width={15}
            height={15}
          />
          <span className="text-[#23A6F0]">1</span>
        </Link>
        <button
          className="text-secondary focus:outline-none md:hidden z-200"
          onClick={toggleNavbar}
        >
          <Image
            src={"/icons/menu-icon.png"}
            alt="menu"
            width={22.86}
            height={13.71}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
