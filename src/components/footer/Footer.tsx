import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const socialLinks = [ 
    {
      id: 1,
      icon: <FiFacebook />,
      url: "https://www.facebook.com/profile.php?id=100084760552740",
    },
    {
      id: 2,
      icon: <FiInstagram />,
      url: "https://www.instagram.com/__.zefa.__?igsh=a2J4a3dvcWF2Njg5",
    },
    {
      id: 3,
      icon: <FiTwitter />,
      url: "https://www.twitter.com",
    },
  ];

  return (
    <footer className="bg-white text-black body-font">
      
      <div className="container px-5 py-8 mx-auto">
        {/* Footer Header */}
        <div className="w-full flex flex-col sm:flex-row justify-start sm:justify-between items-center mb-20 px-12">
          <Link href="/" className="text-3xl font-bold hover:text-gray-600 transition-colors duration-300">
            <Image src={"/home/stylezy-blue.png"} alt={"Stylezy-Logo"} width={120} height={100} />
          </Link>

          {/* Social Links */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                key={link.id}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 text-xl transition-colors duration-300 ease-in-out"
              >
                {link.icon}
              </a>
            ))}
          </span>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row sm:justify-center items-center">
          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[{ title: "Company Info", links: ["About us", "Career", "We are hiring", "Blog"] },
              { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Cookies Policy", "Disclaimer"] },
              { title: "Features", links: ["Business Marketing", "User Analytics", "Live Chat", "Unlimited Support"] },
              { title: "Resources", links: ["Help Center", "FAQs", "Guides", "Case Studies"] },
            ].map((col, index) => (
              <div key={index} className="w-full px-4 text-myGry flex flex-col gap-2">
                <h2 className="title-font text-myHeading tracking-widest text-sm mb-3 font-bold">
                  {col.title}
                </h2>
                <nav className="list-none mb-10 flex flex-col gap-4">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="hover:text-myGry/80 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start mt-8 sm:mt-0">
            <div>
              <h2 className="title-font font-bold text-myHeading tracking-widest mb-8">
                Get In Touch
              </h2>
              <div className="flex justify-center items-center gap-6">
                <input
                  type="text"
                  placeholder="Your Email"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 font-semibold rounded border border-gray-300 focus:ring-2 focus:ring-myHeading focus:border-myHeading text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button className="inline-flex text-white bg-myHeading/95 border-0 py-2 px-6 focus:outline-none hover:bg-myHeading rounded transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-myGry text-sm sm:text-base mt-4">
                Stay updated with the latest news and offers.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */} 
        <div className="mt-8 text-center pt-2">
        <hr className="border-t-2 border-myGry my-4 mx-6" />
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Stylezy. All rights reserved. <br />
            Developed by 
            <a href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5/"><span className="font-medium text-myHeading"> Huzaifa Naeem</span>.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
