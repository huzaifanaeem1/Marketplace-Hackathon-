import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center w-full font-semibold py-16 bg-white">
      <div className="w-[313px] h-[74px] border-2 border-gray-300 rounded-lg flex items-center justify-center">
        <div className="grid grid-cols-7 w-full h-full cursor-pointer">
          <div className="col-span-2 flex items-center justify-center text-myGry">
            First
          </div>
          <div className="flex items-center justify-center text-myBlue border-2 border-gray-300">
            1
          </div>
          <div className="flex items-center justify-center bg-myBlue text-white">
            2
          </div>
          <div className="flex items-center justify-center text-myBlue border-2 border-gray-300">
            3
          </div>
          <div className="col-span-2 flex items-center justify-center text-myBlue">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
