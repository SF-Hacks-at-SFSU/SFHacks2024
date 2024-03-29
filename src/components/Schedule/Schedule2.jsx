"use-client";
import React from "react";
import { useState } from "react";
import Event from "./Event";
const Schedule2 = () => {
  //general, workshop 1, 2

  const day1 = [
    [
      //general
      {
        start: "2:45 PM",
        end: "3:30 PM",
        name: "Check Ins",
        description: "Hackers will check in",
      },
      {
        start: "3:30 PM",
        end: "4:00 PM",
        name: "Opening Ceremony",
        description: "The Hacking Begins!",
      },
      {
        start: "6:30 PM",
        end: "7:00 PM",
        name: "Interview Time",
        description: "Questions about projects",
      },
      {
        start: "7:30 PM",
        end: "8:00 PM",
        name: "Dinner",
        description: "Devour some amazing food  ",
      },
      {
        start: "11:00 PM",
        end: "12:00 AM",
        name: "Midnight Snacks",
        description: "Foood!",
      },
    ],
    [
      //workshop1
      {
        start: "4:00 PM",
        end: "5:00 PM",
        name: "Coze Workshop",
        description: "With Joshua Alphonse ",
      },
      {
        start: "5:15 PM",
        end: "6:15 PM",
        name: "Mongo DB Workshop ",
        description: "With Mark Kim",
      },
      {
        start: "6:30 PM",
        end: "7:30 PM",
        name: "Notion Workshop ",
        description: "With Huy",
      },
    ],
    [
      // worksjop 2
      {
        start: "4:00 PM",
        end: "5:00 PM",
        name: "Github Workshop",
        description: "With MLH",
      },
      {
        start: "5:15 PM",
        end: "6:15 PM",
        name: "Neurelo workshop",
        description: "with Chirag Shah",
      },
      {
        start: "6:30 PM",
        end: "7:30 PM",
        name: "Fireworks.Ai",
        description: "with Raymond Thai",
      },
    ],
    [
      // sponsors
    ],
    [
      // misc
      {
        start: "9:00",
        end: "9:30",
        name: "Team Bulding Activity ",
        description: "Ice Breakers/Scavenger Hunt",
      },
    ],
  ];
  const day2 = [
    [
      //general
      {
        start: "8:00 AM",
        end: "8:30 AM",
        name: "Doors Open",
        description: "Those that left may return",
      },
      {
        start: "9:00 AM",
        end: "9:30 AM",
        name: "Breakfast",
        description: "BREAK your FAST",
      },
      {
        start: "1:00 PM",
        end: "2:00 PM",
        name: "Lunch",
        description: "Obliderate your hunger with some Costo Pizza",
      },
      {
        start: "2:00 PM",
        end: "3:30 PM",
        name: "Women in Tech Panel",
        description:
          "Celebrate the contributions of women who shape the future of our technology.",
      },
      {
        start: "4:00 PM",
        end: "4:30 PM",
        name: "Workshop Interview Time",
        description: "[Description still pending]",
      },
      {
        start: "6:00 PM",
        end: "7:00 PM",
        name: "POC in tech panel",
        description:
          "Highlighting the voices and achievements of people of color in the tech industry.",
      },
      {
        start: "8:00 PM",
        end: "9:00 PM",
        name: "Dinner",
        description: "Feast on some of Ike's Sandwiches",
      },
    ],
    [
      //workshop1
      {
        start: "11:00 AM",
        end: "11:30 AM",
        name: "Cyber Security SIG Workshop",
        description: "Learn the fundementals of ethical hacking",
      },
      {
        start: "5:00 PM",
        end: "6:00 PM",
        name: "Games for Love Workshop",
        description:
          "Learn how to save lives by making awesome games, hosted by Jon Wolheim",
      },
      {
        start: "7:00 PM",
        end: "10:30 PM",
        name: "Game Dev SIG workshop",
        description:
          "Learn the basics of creating groundbreaking gaming experiences",
      },
    ],
    [
      // worksjop 2
    ],
    [
      // sponsors
    ],
    [
      // misc
      {
        start: "10:00 AM",
        end: "10:30 AM",
        name: "Merchandise Handout",
        description: "Enjoy all of the splended goodies",
      },
      {
        start: "3:00 PM",
        end: "4:00 PM",
        name: "K Pop event",
        description: "Learn how to dance and sing like your favorite idol.",
      },
      {
        start: "4:00 PM",
        end: "5:00 PM",
        name: "Mini-event: Painting/Watercolor",
        description: "Hone in your artistic side and learn painting techniques",
      },
      {
        start: "9:00 PM",
        end: "9:30 PM",
        name: "Karaoke",
        description: "Show off your singing skills.",
      },
      {
        start: "11:00 PM",
        end: "11:30 PM",
        name: "Mini-event: Paper airplanes",
        description: "Learn how to make paper airplanes",
      },
      {
        start: "2:00 AM",
        end: "3:00 AM",
        name: "Mini-event: Board Game night",
        description: "Stay up late and play some games",
      },
    ],
  ];
  const day3 = [
    [
      //general
      {
        start: "8:00 AM",
        end: "8:30 AM",
        name: "Doors Open",
        description: "Those who left may return",
      },
      {
        start: "9:00 AM",
        end: "9:30 AM",
        name: "Breakfast",
        description: "Enjoy some coffee and breakfast with Noah's Bagel",
      },
      {
        start: "10:30 AM",
        end: "11:00 AM",
        name: "Project Submission deadline",
        description: "Submit your project by 11:30 AM",
      },

      {
        start: "11:30 AM",
        end: "1:00 PM",
        name: "Project Judging",
        description: "Relax and take a breather while your project gets judged",
      },
      {
        start: "2:00 PM",
        end: "4:00 PM",
        name: "Winners revealed/Interview",
        description: "Celebrate those who won",
      },
    ],
    [
      //workshop1
    ],
    [
      // worksjop 2
    ],
    [
      // sponsors
    ],
    [
      // misc
      {
        start: "1:10 PM",
        end: "2:00 PM",
        name: "Alumni Panel",
        description:
          "Hear from Sf State Alumni who are deep in the tech industry",
      },
    ],
  ];

  //
  const [day, setDay] = useState(0);
  const [types, setTypes] = useState(0);

  const handleDateChange = (date) => {
    setDay(date);
    setTypes(0);
  };

  let date;
  if (day === 0) {
    date = day1;
  } else if (day === 1) {
    date = day2;
  } else {
    date = day3;
  }

  return (
    <div className="flex bg-sfDarkerBlue w-75 min-h-96 h-auto flex-col gap-3 p-5 rounded-xl ">
      <div className=" rounded-xl">
        <h1 className="text-4xl text-center p-2 text-sfPink font-bold">
          Schedule
        </h1>
        <h1 className="text-center">
          Disclaimer: Some workshops on day 1 have overlapping times
        </h1>
      </div>

      <div className="flex justify-center gap-2 p-5">
        <div
          onClick={() => handleDateChange(0)}
          className={`flex flex-col w-20 h-20  rounded-xl items-center justify-center cursor-pointer hover:scale-105 duration-100 border border-sfBloo ${
            day != 0 ? "bg-sfDarkBlue" : "bg-sfBloo"
          }`}
        >
          <h1 className="text-center text-sfPink text-2xl font-bold ">Day</h1>
          <h1 className="text-3xl font-bold text-sfPink">1</h1>
        </div>
        <div
          onClick={() => handleDateChange(1)}
          className={`flex flex-col w-20 h-20  rounded-xl items-center justify-center cursor-pointer hover:scale-105 duration-100 border border-sfBloo ${
            day != 1 ? "bg-sfDarkBlue" : "bg-sfBloo"
          }`}
        >
          <h1 className="text-center text-sfPink text-2xl font-bold ">Day</h1>
          <h1 className="text-3xl font-bold text-sfPink">2</h1>
        </div>
        <div
          onClick={() => handleDateChange(2)}
          className={`flex flex-col w-20 h-20  rounded-xl items-center justify-center cursor-pointer hover:scale-105 duration-100 border border-sfBloo ${
            day != 2 ? "bg-sfDarkBlue" : "bg-sfBloo"
          }`}
        >
          <h1 className="text-center text-sfPink text-2xl font-bold ">Day</h1>
          <h1 className="text-3xl font-bold text-sfPink">3</h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center  ">
        <button
          onClick={() => setTypes(0)}
          className={`border rounded-2xl p-2 border-sfBloo  ${
            types != 0 ? "bg-sfDarkBlue" : "bg-sfBloo"
          } ${date[0].length === 0 ? "hidden" : ""} `}
        >
          General
        </button>
        <button
          onClick={() => setTypes(1)}
          className={`border rounded-2xl p-2 border-sfBloo  ${
            types != 1 ? "bg-sfDarkBlue" : "bg-sfBloo"
          } ${date[1].length === 0 ? "hidden" : ""}`}
        >
          Workshop 1
        </button>
        <button
          onClick={() => setTypes(2)}
          className={`border rounded-2xl p-2 border-sfBloo  ${
            types != 2 ? "bg-sfDarkBlue" : "bg-sfBloo"
          } ${date[2].length === 0 ? "hidden" : ""}`}
        >
          Workshop 2
        </button>
        <button
          onClick={() => setTypes(3)}
          className={`border rounded-2xl p-2 border-sfBloo  ${
            types != 3 ? "bg-sfDarkBlue" : "bg-sfBloo"
          } ${date[3].length === 0 ? "hidden" : ""}`}
        >
          Sponsors
        </button>
        <button
          onClick={() => setTypes(4)}
          className={`border rounded-2xl p-2 border-sfBloo  ${
            types != 4 ? "bg-sfDarkBlue" : "bg-sfBloo"
          } ${date[4].length === 0 ? "hidden" : ""}`}
        >
          Events
        </button>
      </div>

      <div className="flex flex-col gap-3 justify-center">
        {date[types].map((item2, index2) => (
          <Event
            start={item2.start}
            end={item2.end}
            name={item2.name}
            description={item2.description}
            key={index2}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule2;
