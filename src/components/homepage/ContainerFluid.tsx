import React from "react";
import Image from "next/image";

const ContainerFluid = () => {
  return (
    <section className="bg-white text-black body-font">
      <div className="flex justify-center items-center gap-12 flex-col-reverse px-6 mt-20 md:mt-0 md:flex-row">
        <div className=" rounded-xl">
          {/* Image */}
          <Image src="/summer.png" alt={"summer"} width={600} height={600} />
        </div>
        <div className=" flex justify-center items-center  md:items-start flex-col gap-5">
          <h3 className="font-semibold text-myGry text-base sm:text-lg">
            SUMMER 2025
          </h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold title-font text-center sm:text-left text-[#272343]">
            Part of the Neutral <br /> Universe
          </h1>
          <p className="text-[#737373] text-sm sm:text-base font-medium leading-relaxed max-w-[600px] text-center ">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex justify-center flex-col sm:flex-row gap-4 font-semibold">
            <button
              type="button"
              className="bg-[#272343] hover:bg-white border-2 border-[#272343] hover:border-[#272343] text-white hover:text-[#272343] px-8 py-3 rounded-md hover:scale-105 duration-200"
            >
              BUY NOW
            </button>
            <button
              type="button"
              className="border-2 border-[#272343] text-[#272343] hover:text-white  hover:bg-[#272343] px-8 py-3 rounded-md hover:scale-105 duration-200"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerFluid;
