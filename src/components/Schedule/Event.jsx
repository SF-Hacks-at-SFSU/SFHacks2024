import React from "react";
import { FaClock } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
const Event = ({ start, end, name, description }) => {
  return (
    <div>
      <div className="flex gap-10 justify-start  bg-sfDarkBlue w-full min-h-16 h-auto border border-sfBloo rounded-2xl">
        <div className="flex flex-col gap-3 p-3 justify-center ">
          <h1 className="text-xl text-sfPink tra">{start}</h1>
          <FaArrowDownLong className=" text-sfPink text-center" />
          <h1 className="text-xl text-sfPink">{end}</h1>
        </div>
        <div className="flex flex-col justify-center snap-center items-center p-3">
          <h1 className="text-center font-bold text-white">{name}</h1>
          <h1 className="text-center text-gray-200">{description}</h1>
        </div>
      </div>
    </div>
  );
};

export default Event;
