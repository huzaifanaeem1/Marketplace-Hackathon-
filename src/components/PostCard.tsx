import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({
  imgUrl,
  title,
  desc,
  date,
  commentCount,
}: {
  imgUrl: string;
  title: string;
  desc: string;
  date: string;
  commentCount: number;
}) => {
  return (
    <div className=" text-black hover:scale-105 duration-200">
      <div className="h-full p-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="relative">
          <Image
            className="w-full object-cover object-center"
            src={imgUrl}
            alt="blog"
            width={200}
            height={200}
          />
          <div className="absolute top-6 left-6 bg-[#E74040] px-2 py-1 text-white font-semibold rounded-lg">
            NEW
          </div>
        </div>
        <div className="sm:p-6 flex flex-col gap-3">
          <div className="flex gap-3 font-light text-sm sm:text-base">
            <span className="text-[#8EC2F2]">Google</span>
            <span className="text-[#737373]">Trending</span>
            <span className="text-[#737373]">New</span>
          </div>
          <h1 className="title-font text-xl sm:text-2xl font-light text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed text-[#737373] text-sm sm:text-base ">
            {desc}
          </p>
          <div className="flex justify-between items-center mt-3 text-[#737373] ">
            <div className="flex justify-center items-center gap-2 text-xs sm:text-sm">
              <Image
                src={"/icons/coolicon.png"}
                alt="clock"
                width={13}
                height={13}
              />
              {date}
            </div>
            <div className="flex justify-center items-center gap-2 text-xs sm:text-sm">
              <Image
                src={"/icons/comments.png"}
                alt="comment"
                width={16}
                height={15}
              />
              {commentCount} comments
            </div>
          </div>
          <Link
            href={""}
            className="text-[#737373] inline-flex items-center mt-4 gap-4 md:mb-2 lg:mb-0"
          >
            <span className="font-semibold text-lg">Learn More</span>
            <Image src={"/icons/left-icon.png"} alt="" width={9} height={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
