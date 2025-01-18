"use client";

import { CartItem, useCart } from "@/context/cartContext";
import { stringToSlug } from "@/myFunctions/stringToSlug";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";

const CartCard = ({ item }: { item: CartItem }) => {
  const { handleDelete } = useCart();
  return (
    <div className="flex gap-3 justify-center items-center py-7 border-b ">
      <Image
        src={item.image}
        alt="product"
        width={150}
        height={150}
        className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] object-cover object-top"
      />
      <div className="flex justify-center items-start gap-8 sm:gap-40 text-black font-semibold">
        <div className="title  lg:mx-10">
          <Link
            href={`/shop/${item.productCategory}/${stringToSlug(
              item.productName
            )}`}
          >
            <h6 className="text-base">{item.productName}</h6>
            <p className="text-[#737373] lg:mt-6  text-[14px] tracking-wide">
              {item.productCategory.toUpperCase()}
            </p>
            <div className="text-[#737373] lg:mb-6 lg:mt-2 text-[14px] tracking-wider flex items-center  gap-8">
              <p>
                Size <span>{item.size}</span>
              </p>
              <p>
                Quantity <span>{item.quantity}</span>
              </p>
            </div>
          </Link>
          <div className="flex justify-start mt-2 gap-4">
            <CiHeart className="size-7" />
            <button onClick={() => handleDelete(item._id)}>
              <IoTrashOutline className="size-7" />
            </button>
          </div>
        </div>
        <div className="">
          <p>${item.price * item.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
