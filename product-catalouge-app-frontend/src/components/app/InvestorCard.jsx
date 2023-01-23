import React from "react";
import Button from "../core/Button";

const InvestorCard = ({ investor }) => {
  return (
    <>
      <div>
        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
          <img
            className="absolute object-cover w-full h-full rounded"
            src={investor?.imgSrc}
            alt="Person"
          />
        </div>
        <div className="flex flex-col sm:text-center">
          <p className="text-lg font-bold">{investor?.title}</p>
          <p className="mb-5 text-xs text-gray-800">{investor?.description}</p>
          <div className="flex items-center ">
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorCard;
