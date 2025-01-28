"use client"
import React, { useState } from "react";
import { FaCheckCircle, FaClipboard } from "react-icons/fa";

const Page = ({ params }: { params: { orderId: string } }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(params.orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section>
    <div className="text-center h-screen flex flex-col justify-center items-center gap-6">
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
  <FaCheckCircle 
    className="text-green-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-pulse"
  />
  <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-myHeading">
    Thank you for your Order
  </h1>
</div>

      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-myGry font-semibold">
        Your Order ID is{" "}
        <span
          onClick={handleCopy}
          className="font-semibold text-lg sm:text-xl text-myGry cursor-pointer flex items-center gap-2 pt-2"
        >
          {params.orderId}
          <FaClipboard
            className={`text-gray-500 ${copied ? 'text-green-500' : 'text-gray-500'}`}
            title={copied ? 'Copied!' : 'Copy to clipboard'}
          />
        </span>
      </span>
      {copied && (
        <div className="text-green-500 mt-2 text-xl font-semibold">
          Order ID copied to clipboard!
        </div>
      )}
    </div>
    <hr className="border-t-2 border-myGry my-4 mx-6" />
    </section>

  );
};

export default Page;
 