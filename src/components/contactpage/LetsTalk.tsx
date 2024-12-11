import React from "react";
import Image from "next/image";

const LetsTalk = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col text-myHeading gap-6 py-16">
        <Image
          src={"/icons/arrow.png"}
          alt=""
          width={72}
          height={22}
          className="-ml-5"
        />
        <h3 className="text-2xl font-semibold text-[#737373]">
          WE Can't WAIT TO MEET YOU
        </h3>
        <h1 className="text-5xl font-bold">Let's Talk</h1>
        <button className="bg-myBlue px-8 py-4 font-bold rounded-xl text-white">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default LetsTalk;
