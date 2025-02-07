"use client";
import Image from "next/image";
import SearchField from "../searchbar/SearchField";

const Header = () => {


  return (
    <div className="bg-myHeading text-[#ffffff]/70 text-[0.5rem] sm:text-xs xl:text-[13px] lg:px-20 sm:px-10 px-3 py-2 lg:py-[14px]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto">
          <div className="flex items-center gap-1 sm:items-center">
            <Image src={"/icons/mail.png"} alt={"mail"} width={16} height={12} />
            codewithhuzaifa1212@gmail.com
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 sm:text-left text-center w-full sm:w-auto mt-9 sm:mt-0">
           <SearchField />
        </div>
        
      </div>
    </div>
  );
}; 

export default Header; 
 