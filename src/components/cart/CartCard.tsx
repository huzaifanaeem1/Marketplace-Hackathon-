import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";

const CartCard = ({ img }: { img: string }) => {
  return (
    <div className="flex gap-3 justify-center items-center py-7 border-b ">
      <Image
        src={img}
        alt="product"
        width={150}
        height={150}
        className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] object-cover object-top"
      />
      <div className="flex justify-center items-start gap-8 sm:gap-40 text-black font-semibold">
        <div className="title  lg:mx-10">
          <h6 className="text-base">Graphic Design</h6>
          <p className="text-[#737373] lg:mt-6  text-[14px] tracking-wide">
            English Department
          </p>
          <div className="text-[#737373] lg:mb-6 lg:mt-2 text-[14px] tracking-wider flex items-center  gap-8">
            <p>
              Size <span>L</span>
            </p>
            <p>
              Quantity <span>1</span>
            </p>
          </div>
          <div className="flex justify-start mt-2 gap-4">
            <CiHeart className="size-7" />
            <IoTrashOutline className="size-7" />
          </div>
        </div>
        <div className="">
          <p>$6.48</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
