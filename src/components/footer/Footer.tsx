import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black body-font">
      <div className="container px-5 py-8 mx-auto ">
        {/* footer head */}
        <div className=" w-full flex flex-col sm:flex-row justify-start sm:justify-between items-center mb-20 px-12">
          <h1 className="text-3xl font-bold">Bandage</h1>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
            <a target="_blank">
              <Image
                src={"/icons/fb-blue.png"}
                alt="fb"
                width={23}
                height={23}
              />
            </a>
            <a target="_blank">
              <Image
                src={"/icons/insta-blu.png"}
                alt="fb"
                width={22}
                height={22}
              />
            </a>
            <a target="_blank">
              <Image src={"/icons/x-blu.png"} alt="fb" width={22} height={18} />
            </a>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center items-center">
          {/* links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* 1st col */}
            <div className="  w-full px-4 font-bold  text-myGry flex flex-col gap-2 ">
              <h2 className="title-font  text-myHeading tracking-widest text-sm mb-3">
                Company info
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-4">
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Career</a>
                </li>
                <li>
                  <a>We are hiring</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </nav>
            </div>
            {/* 2nd col */}
            <div className="  w-full px-4 font-bold  text-myGry  flex flex-col gap-2">
              <h2 className="title-font  text-myHeading tracking-widest text-sm mb-3">
                Legal
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-4">
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Career</a>
                </li>
                <li>
                  <a>We are hiring</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </nav>
            </div>
            {/* 3rd col */}
            <div className="  w-full px-4 font-bold  text-myGry  flex flex-col gap-2">
              <h2 className="title-font  text-myHeading tracking-widest text-sm mb-3">
                Features
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-4">
                <li>
                  <a>Business Marketing</a>
                </li>
                <li>
                  <a>User Analytic</a>
                </li>
                <li>
                  <a>Live chat</a>
                </li>
                <li>
                  <a>Unlimited Support</a>
                </li>
              </nav>
            </div>
            {/* 4th col */}
            <div className="  w-full px-4 font-bold  text-myGry  flex flex-col gap-2">
              <h2 className="title-font  text-myHeading tracking-widest text-sm mb-3">
                Resources
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-4">
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Career</a>
                </li>
                <li>
                  <a>We are hiring</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </nav>
            </div>
          </div>
          {/* subscribe mail */}
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="">
              <h2 className="title-font font-bold  text-myHeading tracking-widest mb-8  ">
                Get In Touch
              </h2>
              <div className="flex justify-center items-center gap-6">
                <input
                  type="text"
                  placeholder="Your Email"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 font-semibold rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-myBlue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button className="inline-flex text-white bg-myBlue border-0 py-2 px-6 focus:outline-none hover:bg-myblborder-myBlue rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-myGry text-sm sm:text-base mt-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
