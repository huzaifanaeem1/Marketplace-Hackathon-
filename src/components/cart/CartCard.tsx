"use client";

import { useCart } from "@/context/cartContext";
import { CartItem } from "@/types/cartTypes";
import { stringToSlug } from "@/myFunctions/stringToSlug";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartCard = ({
  item,
  isCheckout = false,
}: {
  item: CartItem;
  isCheckout?: boolean;
}) => {
  const { handleDelete, updateQuantity }: any= useCart();

  const increaseQuantity = () => {
    updateQuantity(item._id, item.cartQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.cartQuantity > 1) {
      updateQuantity(item._id, item.cartQuantity - 1);
    }
  };

  return (
    <div className="flex gap-3 justify-center items-center py-7 border-b ">
      <Image
        src={item.image || ""}
        alt="product"
        width={150}
        height={150}
        className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] object-cover object-top"
      />
      <div className="flex justify-center items-start gap-8 sm:gap-40 text-black font-semibold">
        <div className="title lg:mx-10">
          <Link
            href={`/shop/${item.productCategory}/${stringToSlug(
              item.productName
            )}`}
          >
            <h6 className="text-base">{item.productName}</h6>
            <p className="text-[#737373] lg:mt-6 text-[14px] tracking-wide">
              {item.productCategory.toUpperCase()}
            </p>
          </Link>
          <div className="text-[#737373] lg:mb-6 lg:mt-2 text-[14px] tracking-wider flex items-center gap-8">
            <p>Quantity</p>
            <div className="flex items-center gap-2">
              <button
                onClick={decreaseQuantity}
                className="p-1 bg-gray-200 rounded"
              >
                <FaMinus size={12} />
              </button>
              <span>{item.cartQuantity}</span>
              <button
                onClick={increaseQuantity}
                className="p-1 bg-gray-200 rounded"
              >
                <FaPlus size={12} />
              </button>
            </div>
          </div>
          <div className="flex justify-start mt-2 gap-4">
            {!isCheckout ? (
              <button onClick={() => handleDelete(item._id)}>
                <IoTrashOutline className="size-7" />
              </button>
            ) : null}
          </div>
        </div>
        <div>
          <p>${item.price * item.cartQuantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
