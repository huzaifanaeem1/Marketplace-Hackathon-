import React from "react"; 
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

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
          <div className="flex justify-center items-center gap-5">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} className="hover:text-myHeading text-blue-800 transition-all" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} className="hover:text-myHeading text-pink-500 transition-all" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className="hover:text-myHeading text-blue-700 transition-all" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} className="hover:text-myHeading text-blue-500 transition-all" />
      </a>
    </div>
        </div>
        <div className="">
          <Image src={"/about/hero1.png"} alt="" width={700} height={700} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
