import React from "react";
import { FaClock } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
const Event = ({ start, end, name, description }) => {
  return (
    <div className="md:flex md:flex-row justify-center">
      <div className="flex gap justify-start  bg-sfDarkBlue w-full md:w-[30%]  min-h-16 h-auto border border-sfBloo rounded-2xl">
        <div className="flex flex-col gap-3 p-3 justify-center">
          <h1 className="text-md text-sfPink  whitespace-nowrap">{start}</h1>
          <FaArrowDownLong className=" text-sfPink self-center" />
          <h1 className="text-md text-sfPink">{end}</h1>
        </div>
        <div className="flex flex-col justify-center snap-center items-center p-3 w-full">
          <h1 className="text-center font-bold text-white pb-2">{name}</h1>
          <h1 className="text-center text-gray-200">{description}</h1>
        </div>
      </div>
    </div>
  );
};

export default Event;
