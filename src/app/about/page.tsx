import { AboutHeroSection, OurTeam, Payment, Stats, Video } from "@/components";
import React from "react";

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
      <div className="flex justify-center items-center flex-col text-center text-myHeading mt-12 mb-8">
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
  );
};

export default page;
