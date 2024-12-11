import React from "react";
import Image from "next/image";

const TeamCard = ({
  username,
  profession,
  imgUrl,
}: {
  username: string;
  profession: string;
  imgUrl: string;
}) => {
  return (
    <div className=" text-black hover:scale-105 duration-200">
      <div className="h-full p-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          className="w-full object-cover object-center"
          src={imgUrl}
          alt="blog"
          width={200}
          height={200}
        />
        <div className="flex justify-center items-center flex-col gap-3 mt-8">
          <h1 className="text-myHeading font-bold ">{username}</h1>
          <h4 className="text-myGry font-semibold">{profession}</h4>
          <div className="flex justify-center items-center gap-2">
            <a target="_blank">
              <Image
                src={"/icons/fb-blue.png"}
                alt="fb"
                width={23}
                height={23}
              />
            </a>
            <a target="_blank">
              <Image
                src={"/icons/insta-blu.png"}
                alt="fb"
                width={22}
                height={22}
              />
            </a>
            <a target="_blank">
              <Image src={"/icons/x-blu.png"} alt="fb" width={22} height={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
