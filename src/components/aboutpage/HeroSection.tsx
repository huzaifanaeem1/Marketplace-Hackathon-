import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center h-screen relative min-h-screen text-white sm:pt-20 pt-36 flex items-center justify-center text-center"
      style={{ backgroundImage: 'url("/about/about.jpg")' }}
    >
      <div className="absolute inset-0 bg-myHeading bg-opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-28 lg:px-24 lg:py-32 relative z-[2]">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h3 className="font-semibold text-base sm:text-lg uppercase text-myGry">
            About Company
          </h3>
          <h1 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">
            About Us
          </h1>
          <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
            Welcome to <strong>Stylezy</strong>, your one-stop destination for the latest fashion trends! <br />
            At Stylezy, we offer a wide range of stylish and affordable clothing and accessories for every occasion.
            Whether you&apos;re looking for casual wear, formal outfits, or trendy accessories, we&apos;ve got you covered.
            Our collection is curated to provide the perfect balance of comfort, quality, and style, all at great prices.
            Shop with us today and elevate your wardrobe with the best in fashion!
          </p>

          <a href="/contact">
            <button
              type="button"
              className="bg-myHeading text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:scale-105 duration-200"
            >
              Get Quote Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
