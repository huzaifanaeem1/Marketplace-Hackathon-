import React from "react";
import Image from "next/image";

const PricingCard = ({
  plan,
  light = true,
  className,
}: {
  plan: string;
  light?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-5 ${className} ${
        light ? "bg-white text-myHeading" : "bg-gray-800 text-white"
      } border-2 border-myBlue rounded-lg px-6 py-12`}
    >
      <h1 className={`text-2xl font-bold `}>{plan}</h1>
      <p
        className={`text-lg font-semibold ${
          light ? "text-myGry" : "text-white"
        }`}
      >
        Organize across all apps by hand
      </p>
      <div className="text-myBlue flex justify-center items-center font-bold text-lg gap-2">
        <h3 className="text-4xl">0</h3>
        <div>
          <h4>$</h4>
          <h4>Per month</h4>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center gap-5 ${
          light ? "text-myHeading" : "text-white"
        }`}
      >
        <div className="flex gap-2">
          <div className="p-2  rounded-[50%] bg-[#2DC071]">
            <Image src={"/icons/tick.png"} alt="" width={16} height={11} />
          </div>
          <p className="text-base font-semibold">Unlimited Product updates</p>
        </div>
        <div className="flex gap-2">
          <div className="p-2  rounded-[50%] bg-[#2DC071]">
            <Image src={"/icons/tick.png"} alt="" width={16} height={11} />
          </div>
          <p className="text-base font-semibold">Unlimited Product updates</p>
        </div>
        <div className="flex gap-2">
          <div className="p-2  rounded-[50%] bg-[#2DC071]">
            <Image src={"/icons/tick.png"} alt="" width={16} height={11} />
          </div>
          <p className="text-base font-semibold">Unlimited Product updates</p>
        </div>
        <div className="flex gap-2">
          <div className="p-2  rounded-[50%] bg-[#bdbdbd]">
            <Image src={"/icons/tick.png"} alt="" width={16} height={11} />
          </div>
          <p className="text-base font-semibold">Unlimited Product updates</p>
        </div>
        <div className="flex gap-2">
          <div className="p-2  rounded-[50%] bg-[#bdbdbd]">
            <Image src={"/icons/tick.png"} alt="" width={16} height={11} />
          </div>
          <p className="text-base  font-semibold">Unlimited Product updates</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
