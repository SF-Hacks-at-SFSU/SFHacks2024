import React from "react";
import Person from "./Person";

const AboutUs = () => {
  const people = [
    { name: "OD", position: "Co-President", img: "/frogs/frog3.png" },

    {
      name: "Arianna",
      position: "Co-President",
      img: "/frogs/frog4.png",
    },
    {
      name: "Omar",
      position: "Director of Tech",
      img: "/frogs/frog1.png",
    },
    {
      name: "Akim",
      position: "Developer",
      img: "/frogs/frog2.png",
    },

    {
      name: "Avinh",
      position: "Developer",
      img: "/frogs/frog3.png",
    },
    {
      name: "Lakshyaa",
      position: "Developer",
      img: "/frogs/frog3.png",
    },
    {
      name: "Angelo",
      position: "Developer",
      img: "/frogs/frog4.png",
    },
    {
      name: "Gabbi",
      position: "Designer",
      img: "/frogs/frog5.png",
    },
    {
      name: "Michelle",
      position: "Designer",
      img: "/frogs/frog4.png",
    },
    {
      name: "Japneet",
      position: "Social Event Officer",
      img: "/frogs/frog3.png",
    },
  ];
  return (
    <div>
      <p className="text-center text-7xl text-white">About Us</p>

      <p className="text-center text-2xl text-white p-6 ">
        The sfhacks team consists of highly driven creative individuals who's
        main goal is to enhance the talents of future programmers.
      </p>
      <p className="text-center text-white text-5xl">Meet Our Team</p>
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-5 p-10">
        {people.map((person, index) => (
          <Person
            name={person.name}
            position={person.position}
            img={person.img}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
