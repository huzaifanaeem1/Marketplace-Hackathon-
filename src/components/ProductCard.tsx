
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  name,
  slug,
  category,
  imgUrl,
  price,
  discountPercent,
  colors,
}: {
  name: string;
  slug: string;
  category: string;
  imgUrl: string;
  price: number;
  discountPercent: number;
  colors?: string[];
}) => {
  return (
    <Link
      href={`/shop/${category}/${slug}`}
      className="text-black hover:scale-105 duration-200"
    >
      <div className=" flex justify-center items-center flex-col py-6 px-2 sm:p-5">
        <div className="w-[200px] h-[200px] overflow-hidden object-center object-cover">
          <Image
            className="object-contain object-center rounded "
            alt="product"
            src={imgUrl}
            width={300}
            height={300}
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-3 mt-3 font-semibold">
          <h3 className="">{name}</h3>
          <h4 className="text-[#737373]">{category.toUpperCase()}</h4>
          <div className="flex gap-2">
            <span className="text-[#bdbdbd] line-through">{price}</span>
            <span className="text-[#23856D]">
              {(discountPercent / 100) * price}
            </span>
          </div>

          <div className="flex gap-[5px]">
            {colors &&
              colors?.map((color, index) => (
                <div key={index} className={`${color} w-4 h-4 rounded-[50%]`} />
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
