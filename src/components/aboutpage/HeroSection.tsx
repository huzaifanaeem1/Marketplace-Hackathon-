import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen text-myGry bg-white body-font sm:pt-20 pt-36"
    >
      <div className="container mx-auto flex px-4 sm:px-8 py-8 sm:py-16 lg:px-24 lg:py-16 flex-col-reverse md:flex-row items-center">
        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center gap-6 order-last sm:order-first md:order-first">
          <h3 className="font-semibold text-base sm:text-lg uppercase text-[#272343]">
            About Company
          </h3>
          <h1 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#272343]">
            About Us
          </h1>
          <p className="text-myGry text-sm sm:text-base font-medium leading-relaxed">
            Welcome to <strong>Stylezy</strong>, your one-stop destination for the latest fashion trends! <br />
            At Stylezy, we offer a wide range of stylish and affordable clothing and accessories for every occasion. 
            Whether you're looking for casual wear, formal outfits, or trendy accessories, we've got you covered. 
            Our collection is curated to provide the perfect balance of comfort, quality, and style, all at great prices. 
            Shop with us today and elevate your wardrobe with the best in fashion!
          </p>
          <a href="/contact">
            <button
              type="button"
              className="bg-[#272343] text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:scale-105 duration-200"
            >
              Get Quote Now
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <Image
            src="/about/hero1.png"
            alt="About Us"
            width={400}
            height={500}
            className="w-64 sm:w-80 md:w-full max-w-sm md:max-w-md lg:max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
