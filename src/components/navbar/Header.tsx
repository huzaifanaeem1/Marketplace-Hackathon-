"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full sm:py-4 sm:px-6 bg-white px-2 py-2 flex justify-between items-center border-b m-auto ">
      <div className="flex justify-center items-center gap-28">
        <h1 className="sm:text-3xl text-xl font-bold text-myHeading">
          Bandage
        </h1>
        <div className="hidden md:flex gap-6 items-center w-fit text-black">
          <Link
            onClick={() => setIsOpen(false)}
            href="/"
            className="text-base font-semibold hover:underline text-myGry"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/shop"
            className="text-base flex gap-1 font-semibold hover:underline text-myGry"
          >
            Shop
            <Image
              src={"/icons/dropdown1.png"}
              alt="dropdown"
              width={7}
              height={10}
            />
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold hover:underline text-myGry"
          >
            About
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold hover:underline text-myGry"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold hover:underline text-myGry"
          >
            Contact
          </Link>
          <Link
            href="/pages"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold hover:underline text-myGry"
          >
            Pages
          </Link>
        </div>
      </div>

      {/*  */}
      <nav
        className={`fixed top-10 sm:top-36 right-0 bg-white backdrop-blur-md p-6 w-full h-screen transform duration-300 ease-in-out z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 justify-center h-full">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold hover:underline text-myGry"
          >
            Home
          </Link>
          <Link
            href="/shop"
            onClick={() => setIsOpen(false)}
            className="text-base flex gap-1 font-semibold hover:underline text-myGry"
          >
            Shop
            <Image
              src={"/icons/dropdown.png"}
              alt="dropdown"
              width={5.71}
              height={10}
            />
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold hover:underline text-myGry"
          >
            About
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold hover:underline text-myGry"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold hover:underline text-myGry"
          >
            Contact
          </Link>
          <Link
            href="/pages"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold hover:underline text-myGry"
          >
            Pages
          </Link>
        </div>
      </nav>

      {/*  */}
      <div className="flex justify-center items-center gap-7">
        <div className="hidden lg:flex gap-2 items-center font-semibold text-[#23A6F0]">
          <Image src={"/icons/person.png"} alt="auth" width={12} height={12} />
          <span>Login / Register</span>
        </div>
        <Link href="/search" className=" overflow-hidden">
          <Image
            src={"/icons/search.png"}
            alt={"search"}
            width={15}
            height={15}
            className="w-full h-full object-cover"
          />
        </Link>
        <Link
          href={"/cart"}
          className="flex justify-center items-center gap-1 overflow-hidden"
        >
          <Image
            src={"/icons/cart.png"}
            alt={"cart"}
            width={15}
            height={15}
            className="w-full h-full object-cover"
          />
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
            className="w-full h-full object-cover"
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

export default Header;
