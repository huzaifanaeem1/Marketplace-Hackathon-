import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section className="flex justify-center items-center flex-col pt-40  text-black bg-white ">
      <div className="w-full mx-auto">
        {/* Pricing header */}
        <div className="flex justify-center items-center flex-col gap-5 mt-12">
          WHAT WE DO{" "}
          <h2 className="text-3xl sm:text-5xl font-bold text-myHeading ">
            Innovation tailored for you
          </h2>
          <div className="flex justify-center items-center gap-4 font-semibold mt-3 pb-12">
            <h3>Home</h3>
            <Image
              src={"/icons/left-icon.png"}
              alt="left"
              width={8.62}
              height={16}
            />
            <h3 className="text-myGry">Team</h3>
          </div>
        </div>

        <div className="grid grid-cols-4 grid-rows-2">
          <div className="col-span-2 row-span-2">
            <Image src={"/teams/team.png"} alt="" width={400} height={300} />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={"/teams/team1.png"} alt="" width={400} height={300} />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={"/teams/team2.png"} alt="" width={400} height={300} />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={"/teams/team3.png"} alt="" width={400} height={300} />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={"/teams/team4.png"} alt="" width={400} height={300} />
          </div>
        </div>
        <div className="mt-20">
          <div className="flex justify-center items-center flex-col gap-4">
            <h1 className="text-myHeading font-bold text-3xl text-center">
              Start your 14 days free trial
            </h1>
            <p className="md:w-1/3 text-base font-semibold text-myGry text-center">
              {" "}
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent
            </p>
            <button className="bg-myBlue px-8 py-4 font-bold rounded-xl text-white">
              Try it free now
            </button>
            <div className="flex justify-center items-center gap-3 mt-5">
              <Image src={"/icons/x-blu.png"} alt="" width={30} height={30} />
              <Image src={"/icons/fb-blue.png"} alt="" width={30} height={30} />
              <Image
                src={"/icons/insta-blu.png"}
                alt=""
                width={30}
                height={30}
              />
              <Image
                src={"/icons/linkedin.png"}
                alt=""
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Team;
