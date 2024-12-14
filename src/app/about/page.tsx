import { AboutHeroSection, OurTeam, Payment, Stats, Video } from "@/components";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-white text-myHeading">
      <AboutHeroSection />

      {/* Problems trying */}
      <div className="flex justify-center items-center gap-20 px-12 sm:px-48 py-16 mt-12 sm:mt-56 md:mt-0 lg:mt-16 flex-col sm:flex-row text-center sm:text-left">
        <div className="max-w-[394px] space-y-6">
          <span className="text-[#E74040] font-semibold">Problems trying</span>
          <h3 className="text-3xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            fugiat vero consequatur.
          </h3>
        </div>
        <div>
          <p className="text-myGry font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            praesentium quibusdam esse?
          </p>
        </div>
      </div>

      {/* stats */}
      <Stats />
      <Video />
      <OurTeam />

      {/* Big Companies */}
      <div className="bg-[#fafafa] py-6">
        <div className="flex justify-center items-center flex-col text-center  text-myHeading mt-12 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Big Companies are here
          </h1>
          <h6 className="text-myGry text-sm md:text-base font-semibold">
            Problems trying to resolve the conflict between
          </h6>
          <h6 className="text-myGry text-sm md:text-base font-semibold">
            the two major realms of Classical physics, Newtonian mechanics
          </h6>
        </div>

        <Payment />
      </div>
      <section
        className="w-full text-white bg-[#2a7cc7] body-font"
        // style={{ backgroundImage: "url('/about/hero2.png')" }}
      >
        <div className=" flex md:flex-row flex-col items-center justify-center">
          <div className="lg:flex-grow md:w-1/2 my-16 md:pl-32 flex flex-col justify-center md:items-start md:text-left px-6 items-center text-center gap-6 ">
            <h3 className="font-semibold">WORK WITH US</h3>
            <h1 className="title-font text-4xl sm:text-5xl font-bold mt-2 ">
              Now Let&apos;s grow yours
            </h1>
            <p className="font-medium leading-relaxed">
              The gradual accumulation of information about atomic and <br />
              small-scale behavior during the first quarter of the 20th
            </p>
            <button
              type="button"
              className=" text-white border border-white px-6 py-3 rounded-md hover:scale-105 duration-200"
            >
              Button
            </button>
          </div>
          <div className="hidden md:block">
            <Image src={"/about/hero2.png"} alt="" width={500} height={700} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
