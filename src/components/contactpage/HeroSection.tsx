import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="w-full bg-white text-myHeading body-font "
      // style={{ backgroundImage: "url('/banners/hero.jpg')" }}
    >
      <div className="container mx-auto flex px-12  lg:px-24 py-24 md:flex-row flex-col items-center justify-center">
        <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left mb-16 sm:mb-0 items-center text-center gap-6">
          <h3 className="font-semibold">CONTACT US</h3>
          <h1 className="title-font text-4xl sm:text-5xl font-bold mt-2 ">
            Get in touch <br /> today
          </h1>
          <p className="text-myGry  font-medium leading-relaxed">
            We know how large objects will act, <br /> but things on a small
            scale.
          </p>
          <div className="font-bold">
            <h3>Phone : +451 215 215</h3>
            <h3 className="mt-2">Fax : +451 215 215</h3>
          </div>
          <div className="flex justify-center items-center gap-5  ">
            <Image src={"/icons/x-blu.png"} alt="" width={30} height={30} />
            <Image src={"/icons/fb-blue.png"} alt="" width={30} height={30} />
            <Image src={"/icons/insta-blu.png"} alt="" width={30} height={30} />
            <Image src={"/icons/linkedin.png"} alt="" width={30} height={30} />
          </div>
        </div>
        <div className="">
          <Image src={"/contact/hero.png"} alt="" width={700} height={700} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
