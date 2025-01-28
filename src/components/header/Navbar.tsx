"use client";

import Link from "next/link";
import Image from "next/image";
import React, { Suspense, use, useEffect, useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import NavLink from "./NavLink";
import { useCart } from "@/context/cartContext";
import { IoMdCart } from "react-icons/io";
import { FaCheck, FaHeart } from "react-icons/fa";
import { useWishlist } from "@/context/wishlistContext";
import { IoPersonSharp } from "react-icons/io5";
import UserIcon from "../user-icon/UserIcon";
import SearchField from "../searchbar/SearchField";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };
  const pathName = usePathname();

  const navLinks = [
    { id: 1, name: "Home", slug: "/" },
    { id: 2, name: "Shop", slug: "/shop" },
    { id: 3, name: "About", slug: "/about" },
    { id: 4, name: "Pricing", slug: "/pricing" },
    { id: 5, name: "Contact", slug: "/contact" },
    { id: 6, name: "Team", slug: "/team" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    } 
  }, [isOpen]);
  return ( 
    <div className="w-full bg-myHeading text-myWht fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl lg:text-3xl font-bold flex items-center gap-2 text-white"
        >
          <Image src={"/home/stylezy-white.png"} alt={"Stylezy-Logo"} width={120} height={100} />
        </Link>

        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <NavLink key={link.id} name={link.name} slug={link.slug} onclick={function (): void {
              throw new Error("Function not implemented.");
            } } />
          ))} 
          <SearchField />
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6">
          <Link href="/cart" className="relative flex items-center">
            <IoMdCart className="w-6 h-6 hover:text-gray-500 text-white" />
            <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
              {cartItems.length}
            </span>
          </Link>

          <Link href="/wishlist" className="flex items-center">
            <FaHeart className="w-6 h-6 hover:text-gray-500 text-white" />
            <span className="text-white"> {wishlist.length} </span>
          </Link>

          <div className="text-white  hover:text-myGry">
          <Suspense
            fallback={
              <div className="w-6 h-6 animate-pulse bg-white text-white rounded-full" />
            }
          >
            <UserIcon  />
          </Suspense>
          </div>
          {/* Mobile Hamburger Menu */}
          <button
            className="block lg:hidden focus:outline-none"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <IoMdClose className="w-6 h-6 text-white" />
            ) : (
              <CgMenuLeftAlt className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-myHeading text-white transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={toggleNavbar}
          >
            ✕
          </button>
          <div className="flex items-center justify-center gap-2 sm:text-left text-center w-full sm:w-auto mt-4 sm:mt-0">
            <span className="text-myGry">
              <FaCheck className="w-6 h-6" />
            </span>
            <span className="text-lg font-semibold text-myGry">
              Get 10% Off Your First Order!
            </span>
          </div>
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              name={link.name}
              slug={link.slug}
              onclick={toggleNavbar}
              isActive={link.slug === pathName}
            />
          ))}

          {/* Cart & Wishlist */}
          <div className="flex gap-4">
            <Link
              href="/cart"
              className="relative flex items-center"
              onClick={toggleNavbar}
            >
              <IoMdCart className="w-8 h-8 hover:text-gray-500" />
              <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
                {cartItems.length}
              </span>
            </Link>
            <Link
              href="/wishlist"
              className="flex items-center"
              onClick={toggleNavbar}
            >
              <FaHeart className="w-8 h-8 hover:text-gray-500" />
              <span className="text-white">{wishlist.length}</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <a href="/sign-in" className="flex items-center gap-1">
              <IoPersonSharp className="w-6 h-6" />
              <span>Profile</span>
            </a>
          </div>

          {/* Language Dropdown */}
          <div className="flex items-center gap-2 xl:gap-6 w-full sm:w-auto mt-4 sm:mt-0 justify-center sm:justify-start">
            <div className="relative flex items-center gap-2">
              <span>{selectedLanguage}</span>
              <IoIosArrowDown
                className="cursor-pointer text-base hover:text-gray-500"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute top-full mt-1 bg-white text-myHeading text-sm rounded shadow-md z-10">
                  <div
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleLanguageChange("English");
                      toggleNavbar(); // Close navbar after selection
                    }}
                  >
                    English
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleLanguageChange("Urdu");
                      toggleNavbar(); // Close navbar after selection
                    }}
                  >
                    Urdu
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleLanguageChange("Chinese");
                      toggleNavbar(); // Close navbar after selection
                    }}
                  >
                    Chinese
                  </div>
                </div>
              )}
              <Link href="/contact" className="flex items-center gap-1">
                <Image
                  src={"/icons/call-icon.png"}
                  alt="call"
                  width={16}
                  height={12}
                />
                <span>Need Help</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


