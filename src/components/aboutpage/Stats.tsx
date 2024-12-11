import React from "react";

const Stats = () => {
  return (
    <div className="flex justify-center gap-24 py-16 sm:gap-0 sm:justify-around px-20 items-center mt-20 flex-col sm:flex-row">
      <div className="text-center">
        <h2 className="text-5xl font-bold">15K</h2>
        <p className="text-myGry font-semibold">Happy customers</p>
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold">150K</h2>
        <p className="text-myGry font-semibold">Monthly visitors</p>
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold">15</h2>
        <p className="text-myGry font-semibold">Countries Worldwide</p>
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold">100+</h2>
        <p className="text-myGry font-semibold">Top Partners</p>
      </div>
    </div>
  );
};

export default Stats;
