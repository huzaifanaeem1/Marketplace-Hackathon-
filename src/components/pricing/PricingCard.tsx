import React from "react";
import { FaCheck } from "react-icons/fa6";

// PricingCard Component
const PricingCard = ({
  plan,
  price,
  features, 
  isHighlighted,
}: {
  plan: string;
  price: number;
  features: { name: string; available: boolean }[];
  isHighlighted?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-5 p-6 rounded-lg border-2 transition-all transform duration-300 ease-in-out ${
        isHighlighted ? "bg-[#272343] text-white border-[#272343]" : "bg-white text-[#272343] border-gray-300"
      } hover:scale-105`} // Hover scale effect
    >
      <h1 className="text-2xl font-bold">{plan}</h1>
      <div className="flex justify-center items-baseline text-myBlue font-bold gap-1"> 
        <h3 className={`text-4xl ${isHighlighted ? "text-white" : "text-[#272343]"}`}>${price}</h3>
        <span className={`text-lg ${isHighlighted ? "text-white" : "text-[#272343]"}`}>/month</span>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`p-2 rounded-full ${
                feature.available ? "bg-green-600" : "bg-green-600"
              }`}
            >
              <FaCheck className="h-4 w-4 text-white" />
            </div>
            <p className="text-base">{feature.name}</p>
          </div>
        ))}
      </div>
      <button
        className={`px-6 py-2 mt-6 rounded-lg font-bold transition-all duration-300 ease-in-out ${
          isHighlighted ? "bg-white text-[#272343]" : "bg-[#272343] text-white"
        } hover:scale-105`} // Button hover scale effect
      >
        Choose {plan}
      </button>
    </div>
  );
};

export default PricingCard;
