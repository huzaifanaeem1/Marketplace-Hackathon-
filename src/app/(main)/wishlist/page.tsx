"use client";

import React from "react";
import { useWishlist } from "@/context/wishlistContext";
import Link from "next/link";
import Image from "next/image";
import WishListCard from "@/components/wishlist/WishListCard";

const Wishlist = () => {
  const { wishlist, } = useWishlist();

  return (
    <section className="pt-32">
      <div className="container mx-auto px-8">
        <div className="flex justify-center items-center flex-col gap-5 mt-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-myHeading">WishList</h2>
          <div className="flex justify-center items-center gap-4 font-semibold mt-3 pb-12">
            <h3>
              <Link href={"/"}>Home</Link>
            </h3>
            <Image
              src={"/icons/left-icon.png"}
              alt="left"
              width={8.62}
              height={16}
            />
            <h3 className="text-myGry">
              <Link href={"/wishlist"}>wishlist</Link>
            </h3>
          </div>
        </div>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product: any) => (
              <WishListCard product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <p className="text-center text-myGry mt-12">Your wishlist is empty.</p>
          
        )}
      </div>
      <hr className="border-t-2 border-myGry my-4 mx-6 mt-20" />
    </section>
  );
};

export default Wishlist;
