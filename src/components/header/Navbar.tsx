// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useCart } from "@/context/cartContext";
// import { IoMdCart } from "react-icons/io";
// import { IoPersonSharp } from "react-icons/io5";
// import { FaHeart } from "react-icons/fa";
// import { useWishlist } from "@/context/wishlistContext";
// import SearchField from "../searchbar/SearchField";
// import NavLink from "./NavLink";
// import { CgMenuLeftAlt } from "react-icons/cg";

// const Navbar = () => {
//   const { cartItems } = useCart();
//   const { wishlist } = useWishlist();

//   const navLinks = [
//     { id: 1, name: "Home", slug: "/" },
//     { id: 2, name: "Shop", slug: "/shop" },
//     { id: 3, name: "About", slug: "/about" },
//     { id: 4, name: "Pricing", slug: "/pricing" },
//     { id: 5, name: "Contact", slug: "/contact" },
//     { id: 6, name: "Team", slug: "/team" },
//   ];
 
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => setIsOpen(!isOpen);

//   return (
//     <div className="w-full bg-[#272343] text-white fixed top-0 left-0 z-50">
//       <div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-xl lg:text-3xl font-bold">
//           Stylezy
//         </Link>

//         {/* Large Screen Nav Links */}
//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <NavLink key={link.id} name={link.name} slug={link.slug} onclick={function (): void {
//               throw new Error("Function not implemented.");
//             } } />
//           ))}
//         </div>

//         {/* Search Field */}
//         <div className="hidden lg:flex">
//           <SearchField />
//         </div>

//         {/* Icons Section */}
//         <div className="flex items-center gap-6">
//           <div className="hidden lg:flex items-center gap-2">
//             <IoPersonSharp className="w-6 h-6" />
//             <span>
//               <Link href="/login" className="hover:underline">
//                 Login
//               </Link>{" "}
//               /{" "}
//               <Link href="/signup" className="hover:underline">
//                 Register
//               </Link>
//             </span>
//           </div>

//           <Link href="/cart" className="relative flex items-center">
//             <IoMdCart className="w-6 h-6 hover:text-gray-500" />
//             <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
//               {cartItems.length}
//             </span>
//           </Link>

//           <Link href="/wishlist" className="hidden md:flex items-center">
//             <FaHeart className="w-6 h-6 hover:text-gray-500" />
//             <span className="text-white">{wishlist.length}</span>
//           </Link>

//           {/* Mobile Hamburger Menu */}
//           <button
//             className="block md:hidden focus:outline-none"
//             onClick={toggleNavbar}
//           >
//             <CgMenuLeftAlt 
//               className="w-6 h-6 text-white"
//             />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`fixed inset-0 bg-[#272343] text-white transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col items-center justify-center h-full space-y-6">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.id}
//               name={link.name}
//               slug={link.slug}
//               onclick={() => setIsOpen(false)}
//             />
//           ))}
//           <SearchField />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import NavLink from "./NavLink";
import { useCart } from "@/context/cartContext";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "@/context/wishlistContext";
import SearchField from "../searchbar/SearchField";
import { FaShirt } from "react-icons/fa6";

const Navbar = () => {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

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

  return (
    <div className="w-full bg-[#272343] text-white fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl lg:text-3xl font-bold flex items-center gap-2 text-white">
  <FaShirt className="text-white" /> Stylezy
</Link>


        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center gap-8">
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
            <IoMdCart className="w-6 h-6 hover:text-gray-500" />
            <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
              {cartItems.length}
            </span>
          </Link>

          <Link href="/wishlist" className="flex items-center">
            <FaHeart className="w-6 h-6 hover:text-gray-500" />
            <span className="text-white"> {wishlist.length} </span>
          </Link>

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
        className={`fixed inset-0 bg-[#272343] text-white transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={toggleNavbar}
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              name={link.name}
              slug={link.slug}
              onclick={toggleNavbar}
            />
          ))}
          <SearchField />
          <div className="flex gap-4">
            <Link href="/cart" className="relative flex items-center">
              <IoMdCart className="w-8 h-8 hover:text-gray-500" />
              <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
                {cartItems.length}
              </span>
            </Link>
            <Link href="/wishlist" className="flex items-center">
              <FaHeart className="w-8 h-8 hover:text-gray-500" />
              <span className="text-white">{wishlist.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
