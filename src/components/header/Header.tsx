"use client";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const Header = () => {


  return (
    <div className="bg-[#272343] text-[#ffffff]/70 text-[0.5rem] sm:text-xs xl:text-[13px] lg:px-20 sm:px-10 px-3 py-2 lg:py-[14px]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto">
          <div className="flex items-center gap-1 sm:items-center">
            <Image src={"/icons/mail.png"} alt={"mail"} width={16} height={12} />
            codewithhuzaifa1212@gmail.com
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 sm:text-left text-center w-full sm:w-auto mt-4 sm:mt-0">
          <span className="text-myGry">
            <FaCheck className="w-6 h-6"/>
          </span>
          <span className="text-lg font-semibold text-myGry">
            Get 20% Off Your First Order!
          </span>
        </div>

        {/* Language Dropdown and Contact Link */}
        
      </div>
    </div>
  );
};

export default Header;
