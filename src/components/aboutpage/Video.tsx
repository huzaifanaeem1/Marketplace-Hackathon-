import React from "react";
import Image from "next/image";

const Video = () => {
  return (
    <div className="w-full px-8 sm:px-16 md:px-28 py-16">
      <div
        style={{ backgroundImage: "url('about/video.png')" }}
        className="bg-cover bg-center h-auto flex justify-center items-center rounded-3xl"
      >
        <div className="bg-myBlue p-6 rounded-[50%] m-28">
          <Image src={"/icons/pause.png"} alt="" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default Video;
