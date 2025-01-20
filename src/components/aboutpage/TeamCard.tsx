import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const TeamCard = ({
  username,
  profession,
  imgUrl,
  fbUrl,
  instaUrl,
  xUrl,
}: {
  username: string;
  profession: string;
  imgUrl: string;
  fbUrl: string;
  instaUrl: string;
  xUrl: string;
}) => {
  return (
    <div className="text-black hover:scale-105 duration-300 transition-all ease-in-out transform">
      <div className="h-full p-6 border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative">
          <img
            className="w-full object-cover object-center rounded-lg"
            src={imgUrl}
            alt={username}
            width={200}
            height={200}
          />

        </div>
        <div className="flex justify-center items-center flex-col gap-3 mt-6">
          <h1 className="text-xl font-bold text-[#272343]">{username}</h1>
          <h4 className="text-myGry font-semibold text-lg">{profession}</h4>
          <div className="flex justify-center items-center gap-4 mt-4">
            <a target="_blank" href={fbUrl} className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={23} />
            </a>
            <a target="_blank" href={instaUrl} className="text-pink-600 hover:text-pink-800">
              <FaInstagram size={22} />
            </a>
            <a target="_blank" href={xUrl} className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
