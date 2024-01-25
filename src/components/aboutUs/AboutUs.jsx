import React from "react";
import Person from "./Person";

const AboutUs = () => {
  const people = [
    { name: "Odera",
      position: "Co-President",
      img: "/frogs/frog1.png"
    },
    {
      name: "Arianna",
      position: "Co-President",
      img: "/frogs/frog2.png",
    },
    {
      name: "Marco",
      position: "Vice President",
      img: "/frogs/frog3.png",
    },
    { name: "Huy",
      position: "Administrator",
      img: "/frogs/frog3.png"
    },
    { name: "Mark",
      position: "Treasurer",
      img: "/frogs/frog3.png"
    },
    {
      name: "Omar",
      position: "Tech Operations",
      img: "/frogs/frog4.png",
    },
    {
      name: "Akim",
      position: "Tech Operations",
      img: "/frogs/frog2.png",
    },
    {
      name: "Avinh",
      position: "Tech Operations",
      img: "/frogs/frog3.png",
    },
    {
      name: "Lakshyaa",
      position: "Tech Operations",
      img: "/frogs/frog3.png",
    },
    {
      name: "Angelo",
      position: "Tech Operations",
      img: "/frogs/frog4.png",
    },
    {
      name: "Gabby",
      position: "Design",
      img: "/frogs/frog5.png",
    },
    {
      name: "Michelle",
      position: "Design",
      img: "/frogs/frog4.png",
    },
    {
      name: "Japneet",
      position: "Social Engagement",
      img: "/frogs/frog3.png",
    },
    {
      name: "Ria",
      position: "Social Engagement",
      img: "/frogs/frog3.png",
    },
    {
      name: "John",
      position: "Marketing",
      img: "/frogs/frog3.png",
    },
    {
      name: "Anh",
      position: "Marketing",
      img: "/frogs/frog3.png",
    },
    {
      name: "Shriya",
      position: "Outreach",
      img: "/frogs/frog3.png",
    },
    {
      name: "Ash",
      position: "Outreach",
      img: "/frogs/frog3.png",
    },
    {
      name: "Keith",
      position: "Outreach",
      img: "/frogs/frog3.png",
    },
    {
      name: "Sukrit",
      position: "Logistics",
      img: "/frogs/frog3.png",
    },
  ];
  return (
    <div>
      <p className="text-center text-7xl text-white">About Us</p>

      <p className="text-center text-2xl text-white p-6 ">
      SF Hacks is more than just an event, we are a team of passionate individuals dedicated to hosting this hackathon. 
      Our diverse team spans across logistics, design, tech operations, social engagement, marketing, and outreach. 
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
