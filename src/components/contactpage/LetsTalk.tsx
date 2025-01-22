import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";

const LetsTalk = () => {
  return (
    <div className="max-w-[1280px] m-auto min-h-[70vh] md:py-20 sm:py-10 py-6 p-3">
      <div className="w-full md:flex justify-center items-center gap-3">
        <div className="md:w-[35%] w-full sm:p-4 space-y-4 md:py-0 py-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#272343] p-2">
            <IoMdCall className="w-4 h-4 object-contain text-white"/>
            </div>
            <span className="text-xl">Call To Us</span>
          </div>
          <p className="text-[#272343]">We are available 24/7, 7 days a week.</p>
          <p className="text-[#272343] pb-3">Phone: +92 312 3629 391</p>

          <hr className="border border-zinc-300"/>
 
          <div className="flex items-center gap-3 py-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#272343] p-2">
             <AiOutlineMail  className="w-4 h-4 object-contain text-white"/>
            </div>
            <span className="text-xl">Write To Us</span>
          </div>
          <p className="text-[#272343]">Fill out our form and we will contact you within 24 hours.</p>
          <a
                href="mailto:codewithhuzaifa@gmail.com"
                className=" text-[#272343] hover:underline"
              >
                codewithhuzaifa1212@gmail.com
              </a> 
        </div> 

        <div className="md:w-[65%] w-full sm:p-4">
          <form action="">
            <div className="w-full grid md:grid-cols-3 grid-cols-2 md:grid-rows-1 grid-rows-2 sm:gap-5 gap-2 rounded-md">
              <input type="text" name="name" className="px-4 py-3 bg-[#F5F5F5] placeholder:text-myGry focus:outline-none col-span-1 rounded-md" placeholder="Your Name"/>
              <input type="email" name="email" className="px-4 py-3 bg-[#F5F5F5] placeholder:text-myGry focus:outline-none col-span-1 rounded-md" placeholder="Your Email"/>
              <input type="phone" name="phone" className="px-4 py-3 bg-[#F5F5F5] placeholder:text-myGry focus:outline-none md:col-span-1 col-span-2 rounded-md" placeholder="Your Phone"/>
            </div>
            <textarea name="message" className="sm:my-5 my-2 w-full sm:h-60 h-40 px-4 py-3 bg-[#F5F5F5] placeholder:text-myGry focus:outline-none resize-none rounded-md" placeholder="Your Message"></textarea>
            <div className="w-full flex justify-end">
            <button type="submit" className="px-12 font-medium w-fit bg-[#272343] mr-20 sm:mr-72 text-white py-4 rounded-lg transition-transform hover:scale-105 duration-300">
              Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="border-t-2 border-myGry my-4  mt-16" />
    </div>
    
  );
};

export default LetsTalk; 
