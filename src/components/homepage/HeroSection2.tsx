import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center h-screen body-font text-[#272343] relative"
      style={{ backgroundImage: 'url("/home/home-bg.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-0" /> {/* Semi-transparent overlay */}
      <div className="container mx-auto flex justify-center items-center h-full relative">
        <div className="text-center flex flex-col items-center gap-6">
          <h3 className="font-semibold text-white text-xl sm:text-2xl">SUMMER 2025</h3>
          <h1 className="title-font text-4xl sm:text-5xl font-bold mt-2 text-white">
            NEW COLLECTION
          </h1>
          <p className="font-medium leading-relaxed text-white text-base sm:text-lg">
            We know how large objects will act, <br /> but things on a small scale.
          </p>
          <button
            type="button"
            className="bg-[#272343] px-6 py-3 rounded-md hover:scale-105 duration-200"
          >
            <Link href={"/shop"} className="text-white">SHOP NOW</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
