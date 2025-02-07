"use client";

import Image from "next/image";
import { Suspense } from "react";
import SearchParams from "@/components/searchbar/SearchParams";

const SearchPage = () => {

  return (
    <div className="pt-40 bg-[#fafafa] text-black">
      {/* Search header */}
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

      <Suspense fallback={<div>Loading...</div>}>
        <SearchParams />
      </Suspense>
    </div>
  );
};

export default SearchPage;