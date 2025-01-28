import { AboutHeroSection, OurTeam, Payment, Stats, Video } from "@/components";
import React from "react";
import Image from "next/image";
import { FaBuilding, FaIndustry, FaHandHoldingUsd } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-white text-myHeading">
      <AboutHeroSection />

      {/* Problems trying */}
      <div className="flex justify-center items-center gap-12 px-12 sm:px-48 py-16 mt-12 sm:mt-56 md:mt-0 lg:mt-16 flex-col sm:flex-row text-center sm:text-left rounded-lg  overflow-hidden">
  <div className="max-w-[394px] space-y-6">
    <span className="text-myHeading font-semibold text-lg tracking-wide ">Challenging Concepts</span>
    <h3 className="text-4xl font-semibold text-myHeading leading-tight ">
      Master the hardest problems with ease and confidence.
    </h3>
  </div>
  <div className="space-y-4">
    <p className="text-myGry font-medium opacity-90">
      Dive into complex topics with step-by-step guidance and hands-on experience. Our solutions are built for success.
    </p>
    <button className="bg-myHeading text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-myHeading transition duration-300">
      Start Learning Now
    </button>
  </div>
</div>
      {/* stats */}
      <Stats />
      <Video />
      <OurTeam />
      {/* Big Companies */}
    <div className="bg-[#fafafa] mt-32 pt-8  pb-8 ">
      <div className="flex justify-center items-center flex-col text-center text-myHeading mt-20 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Trusted by Big Brands
        </h1>
        <h6 className="text-myGry text-sm md:text-base font-semibold mb-4">
          Join the top industry leaders in e-commerce and retail.
        </h6>
        <h6 className="text-myGry text-sm md:text-base font-semibold mb-8">
          Partner with us for seamless transactions and growth.
        </h6>
      </div>

      {/* Icons Section with E-Commerce Focus */}
      <div className="flex justify-center items-center gap-10 flex-wrap mb-12">
        <div className="text-center p-6 bg-myHeading hover:bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <FaBuilding size={50} className="mb-4" />
          <h4 className="text-xl font-semibold">Corporate Partners</h4>
          <p className="text-sm">Collaborating with top brands to enhance customer experience.</p>
        </div>
        <div className="text-center bg-myHeading p-6 hover:bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <FaIndustry size={50} className="mb-4" />
          <h4 className="text-xl font-semibold">Leading Industries</h4>
          <p className="text-sm">Transforming the e-commerce landscape with cutting-edge tech.</p>
        </div>
        <div className="text-center p-6 bg-myHeading hover:bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <FaHandHoldingUsd size={50} className="mb-4" />
          <h4 className="text-xl font-semibold">Investment Opportunities</h4>
          <p className="text-sm">Fueling growth with strategic partnerships and investments.</p>
        </div>
      </div>

      {/* Payment Section (Assuming this is your payment method showcase) */}
      <div className="bg-[#fafafa]p-6 rounded-lg mt-28 text-center">
        <h3 className="text-2xl font-semibold mb-4">Secure and Fast Payment Options</h3>
        <p className="text-myGry text-base mb-6">
          We offer a variety of secure payment methods for a seamless shopping experience.
        </p>
        <div className="flex justify-center items-center gap-6">
          {/* Add your payment icons here */}
        <Payment/>
        </div>
      </div>
    </div>


    <section className="w-full text-white bg-[#2a7cc7] relative overflow-hidden">
  {/* Background Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-myHeading  to-myHeading opacity-80"></div>

  <div className="relative flex md:flex-row flex-col items-center justify-center ">
    {/* Text Content */}
    <div className="lg:flex-grow md:w-1/2 my-16 md:pl-32 flex flex-col justify-center md:items-start md:text-left px-6 items-center text-center gap-6 animate-fadeIn">
      <h3 className="font-semibold text-lg tracking-wide">WORK WITH US</h3>
      <h1 className="title-font text-4xl sm:text-5xl font-extrabold mt-2">
        Now Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">grow yours</span>
      </h1>
      <p className="font-medium leading-relaxed text-gray-200">
        The gradual accumulation of information about atomic and <br />
        small-scale behavior during the first quarter of the 20th
      </p>
      <button
        type="button"
        className="bg-white  text-myHeading px-8 py-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
      >
        Get Started
      </button>
    </div>

    {/* Image Section */}
    <div className="hidden md:block animate-slideIn">
      <Image
        src={"/about/hero.png"}
        alt="Hero Image"
        width={500}
        height={700}
        className="rounded-2xl mr-20"
      />
    </div>
  </div>
</section>

    </div>
  );
};

export default page;
