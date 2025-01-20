import React from "react";

const Video = () => {
  return (
    <div className="w-full px-8 sm:px-16 md:px-28 lg:px-44 py-16">
      <div className="relative w-full h-96">
        {/* Embedded Video */}
        <video
          className="absolute inset-0 w-full h-full rounded-3xl"
          controls
          autoPlay
          muted
        >
          <source src="/about/vedio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional Background Overlay */}
      </div>
    </div>
  );
};

export default Video;
