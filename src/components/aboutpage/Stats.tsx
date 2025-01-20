import React from "react";

// Stats Component
const Stats = () => {
  const stats = [
    {
      value: "15K",
      label: "Happy customers",
    },
    {
      value: "150K",
      label: "Monthly visitors",
    },
    {
      value: "15",
      label: "Countries Worldwide",
    },
    {
      value: "100+",
      label: "Top Partners",
    },
  ];

  return (
    <div className="flex justify-center gap-24 py-16 sm:gap-0 sm:justify-around px-20 items-center mt-20 flex-col sm:flex-row">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h2 className="text-5xl font-bold">{stat.value}</h2>
          <p className="text-myGry font-semibold">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
