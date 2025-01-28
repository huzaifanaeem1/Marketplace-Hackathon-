import React from "react";
import Image from "next/image";
import TeamCard from "../aboutpage/TeamCard";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Team = () => {
  const team = [
    {
      id: 1,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-1.jpg",
    },
    {
      id: 2,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-2.jpg",
    },
    {
      id: 3,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-3.jpg",
    },
    {
      id: 4,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-4.jpg",
    },
    {
      id: 5,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-5.jpg",
    },
    {
      id: 6,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-6.jpg",
    },
    {
      id: 7,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-7.jpg",
    },
    {
      id: 8,
      username: "username",
      profession: "profession",
      imgUrl: "/about/user-8.jpg",
    },
  ];
  return (
    <section className="flex justify-center items-center flex-col pt-28  text-black bg-white ">
      <div className="w-full mx-auto">

        <div className="flex justify-center items-center flex-col gap-5 mt-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold text-myGry">What we do</h2>
            <h2 className="text-3xl sm:text-5xl font-bold text-myHeading">
              Innovation tailored
            </h2>
            <div className="flex justify-center items-center gap-4 font-semibold mt-3 pb-12">
              <h3>
                <Link href={"/"}>Home</Link>
              </h3>
              /
              <h3 className="text-myGry">
                <Link href={"/team"}>Team</Link>
              </h3>
            </div>
          </div>

          {/* Collage */}
          <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-4 sm:grid-rows-2 gap-2">
            <div className="col-span-2 row-span-2">
              <Image src={"/teams/team.png"} alt="" width={800} height={570} />
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
          <div className="flex justify-center items-center py-16 px-6 sm:px-24 flex-col">
            <h1 className="text-4xl font-bold">Meet Our Team</h1>
            <div className="flex justify-center items-center flex-wrap gap-4 mt-10 sm:mt-16">
              {team.map((user) => (
                <TeamCard
                  key={user.id}
                  username={user.username}
                  profession={user.profession}
                  imgUrl={user.imgUrl} fbUrl={""} instaUrl={""} xUrl={""} />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center mb-10">
            <h2 className="text-2xl font-bold">Start your 14-day free trial</h2>
            <p className="text-gray-500 mt-2">
              No credit card required. Cancel anytime.
            </p>
            <a href="/contact">
              <button className="mt-4 px-8 py-4 bg-[#272343]  text-white font-bold rounded-lg shadow transition-transform  hover:scale-105">
                Try for Free
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-myGry my-8 mx-6" />
    </section>
  );
};

export default Team;
