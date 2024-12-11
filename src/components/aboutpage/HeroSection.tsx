import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center h-screen text-myHeading bg-white body-font sm:pt-20"
      // style={{ backgroundImage: "url('/banners/hero.jpg')" }}
    >
      <div className="container mx-auto flex px-24 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 mt-20 md:pl-16 flex flex-col md:items-start md:text-left mb-16 sm:mb-0 items-center text-center gap-6">
          <h3 className="font-semibold">ABOUT COMPANY</h3>
          <h1 className="title-font text-4xl sm:text-5xl font-bold mt-2 ">
            ABOUT US
          </h1>
          <p className=" text-myGry  font-medium leading-relaxed">
            We know how large objects will act, <br /> but things on a small
            scale.
          </p>
          <button
            type="button"
            className="bg-myBlue text-white font-semibold px-6 py-3 rounded-md hover:scale-105 duration-200"
          >
            Get Qoute Now
          </button>
        </div>
        <div>
          <Image src={"/about/hero.png"} alt="" width={500} height={700} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
