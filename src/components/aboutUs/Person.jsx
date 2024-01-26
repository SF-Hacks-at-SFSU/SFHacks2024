import React from "react";

const Person = ({ name, position, img }) => {
  return (
    <div className="w-40 h-auto  rounded-2xl ">
      <img
        src={img}
        className="aspect-square object-cover rounded-full border-4 border-sfPink object-crop"
        loading = "lazy"
      />
      <p className="text-white text-center text-4xl p-2">{name}</p>
      <p className="text-white text-center">{position}</p>
    </div>
  );
};

export default Person;
