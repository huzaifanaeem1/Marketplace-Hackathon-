import React from "react";
import Image from "next/image";

const OurOffice = () => {
  return (
    <section className=" ">
      <div className=" container px-5 py-20 mx-auto  ">
        <div className=" items-center text-center text-black space-y-2">
          <h3 className="text-2xl font-semibold text-[#737373]">
            VISIT OUR OFFICE
          </h3>
          <h1 className="text-3xl font-bold">
            We help small businesses with big ideas
          </h1>
        </div>
        {/* Cards */}
        <div className="flex justify-center items-center flex-col md:flex-row mt-20 gap-5">
          {/* Card 1 */}
          <div className="flex justify-center items-center flex-col font-semibold gap-4 px-12 py-20">
            <div className="flex justify-center items-center flex-col gap-2">
              <Image src={"/icons/call.png"} alt="" width={72} height={72} />
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <div>Get Support</div>
            <button className="px-6 py-3 rounded-full border-2 border-myBlue">
              Submit Request
            </button>
          </div>
          <div className="flex justify-center items-center flex-col font-semibold gap-4 bg-myHeading text-white px-12 py-20">
            <div className="flex justify-center items-center flex-col gap-2">
              <Image
                src={"/icons/location.png"}
                alt=""
                width={72}
                height={72}
              />
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <div>Get Support</div>
            <button className="px-6 py-3 text-myBlue rounded-full border-2 border-myBlue">
              Submit Request
            </button>
          </div>
          {/* Card 3 */}
          <div className="flex justify-center items-center flex-col font-semibold gap-4 px-12 py-20">
            <div className="flex justify-center items-center flex-col gap-2">
              <Image
                src={"/icons/mail-blu.png"}
                alt=""
                width={72}
                height={72}
              />
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <div>Get Support</div>
            <button className="px-6 py-3 rounded-full border-2 border-myBlue">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
