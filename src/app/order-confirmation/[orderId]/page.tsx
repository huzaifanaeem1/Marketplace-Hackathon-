import React from "react";

const page = ({ params }: { params: { order_id: string } }) => {
  return (
    <div className="text-center h-screen flex flex-col justify-center items-center gap-6">
      <h1 className=" font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-myHeading">
        Thank you for your Order
      </h1>
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-myBlue">
        {" "}
        Your Order id is {params.order_id}
      </span>
    </div>
  );
};

export default page;