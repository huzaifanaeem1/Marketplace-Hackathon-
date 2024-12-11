import React from "react";
import Image from "next/image";
import { CategoryCard, AllProducts, Payment, Pagination } from "@/components/";

const page = () => {
  const categories = [
    {
      id: 1,
      name: "CLOTHS",
      itemCount: 5,
      imgUrl: "/categories/card-cover-1.png",
    },
    {
      id: 2,
      name: "CLOTHS",
      itemCount: 5,
      imgUrl: "/categories/card-cover-2.png",
    },
    {
      id: 3,
      name: "CLOTHS",
      itemCount: 5,
      imgUrl: "/categories/card-cover-3.png",
    },
    {
      id: 4,
      name: "CLOTHS",
      itemCount: 5,
      imgUrl: "/categories/card-cover-4.png",
    },
    {
      id: 5,
      name: "CLOTHS",
      itemCount: 5,
      imgUrl: "/categories/card-cover-5.png",
    },
  ];
  return (
    <div className="pt-40 bg-[#fafafa] text-black">
      <div>
        {/* shop header */}
        <div className=" w-full flex flex-col sm:flex-row gap-6 sm:gap-0 justify-start sm:justify-between items-center mb-20 px-12 bg-[#fafafa]">
          <h1 className="text-3xl font-bold">Shop</h1>
          <div className="flex justify-center items-center gap-4 font-semibold">
            <h3>Home</h3>
            <Image
              src={"/icons/left-icon.png"}
              alt="left"
              width={8.62}
              height={16}
            />
            <h3 className="text-myGry">Shop</h3>
          </div>
        </div>
        {/* shop categories */}
        <div className="flex justify-center items-center flex-wrap gap-4 bg-[#fafafa]">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category.name}
              itemCount={category.itemCount}
              imgUrl={category.imgUrl}
            />
          ))}
        </div>
        {/* filtered area */}
        <div className="flex items-center md:px-28 py-6 mt-16 gap-8 md:gap-0 justify-between font-semibold text-myGry flex-col md:flex-row bg-white ">
          <div className="">Showing all 12 results</div>
          <div className="flex justify-center items-center gap-7">
            Views:
            <Image src={"/icons/view1.png"} alt="view" width={14} height={14} />
            <Image src={"/icons/view2.png"} alt="view" width={14} height={14} />
          </div>
          <div className="flex justify-center items-center gap-4">
            <button className="flex justify-center items-center gap-2 font-normal border border-gray-300 rounded-lg px-6 py-3">
              Popularity
              <Image
                src={"/icons/dropdown1.png"}
                alt="dropdown"
                width={14}
                height={14}
              />
            </button>
            <button className="bg-myBlue rounded-lg px-6 py-3 text-white">
              Filter
            </button>
          </div>
        </div>

        {/* All products */}
        <AllProducts />
        <Pagination />
        <Payment />
      </div>
    </div>
  );
};

export default page;
