import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 h-screen">
      <h1>Only Admin can access /admin route</h1>
    </div>
  );
};

export default page;

