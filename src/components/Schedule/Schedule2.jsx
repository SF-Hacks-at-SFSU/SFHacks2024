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
        description: "",
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
      {
        start: "10:00",
        end: "11:00",
        name: "sponsors event",
        description: "description",
      },
    ],
    [
      // misc
      {
        start: "9:00",
        end: "9:30",
        name: "Team Bulding Activity ",
        description: "Ice Breakers/Scavenger Hunt",
      },
      {
        start: "12:00",
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
        start: "10:00",
        end: "11:00",
        name: "name day2 general 1",
        description: "description",
      },
      {
        start: "10:00",
        end: "11:00",
        name: "name2",
        description: "description",
      },
    ],
    [
      //workshop1
      {
        start: "10:00",
        end: "11:00",
        name: "workshop1 event day2",
        description: "description",
      },
      {
        start: "10:00",
        end: "11:00",
        name: "workshop1 event2 day2",
        description: "description",
      },
    ],
    [
      // worksjop 2
      {
        start: "10:00",
        end: "11:00",
        name: "workshop2 event day2",
        description: "description",
      },
    ],
    [
      // sponsors
      {
        start: "10:00",
        end: "11:00",
        name: "sponsors event day2",
        description: "description",
      },
    ],
    [
      // misc
      {
        start: "10:00",
        end: "11:00",
        name: "misc event",
        description: "description",
      },
    ],
  ];
  const day3 = [
    [
      //general
      {
        start: "10:00",
        end: "11:00",
        name: "name day3 general 1",
        description: "description",
      },
      {
        start: "10:00",
        end: "11:00",
        name: "name2 day 3",
        description: "description",
      },
    ],
    [
      //workshop1
      {
        start: "10:00",
        end: "11:00",
        name: "workshop1 event day3",
        description: "description",
      },
      {
        start: "10:00",
        end: "11:00",
        name: "workshop1 event2 day3",
        description: "description",
      },
    ],
    [
      // worksjop 2
      {
        start: "10:00",
        end: "11:00",
        name: "workshop2 event day3",
        description: "description",
      },
    ],
    [
      // sponsors
      {
        start: "10:00",
        end: "11:00",
        name: "sponsors event day3",
        description: "description",
      },
    ],
    [
      // misc
      {
        start: "10:00",
        end: "11:00",
        name: "misc event",
        description: "description",
      },
    ],
  ];

  //
  const [day, setDay] = useState(0);
  const [types, setTypes] = useState(0);

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
      </div>

      <div className="flex justify-center gap-2 p-5">
        <div
          onClick={() => setDay(0)}
          className="flex flex-col w-20 h-20 bg-sfDarkBlue rounded-xl items-center justify-center cursor-pointer hover:scale-105 duration-100 border border-sfBloo "
        >
          <h1 className="text-center text-sfPink text-2xl font-bold ">Day</h1>
          <h1 className="text-3xl font-bold text-sfPink">1</h1>
        </div>
        <div
          className="flex flex-col w-20 h-20 bg-sfDarkBlue rounded-xl items-center justify-center cursor-pointer hover:scale-105 duration-100 border border-sfBloo "
          onClick={() => setDay(1)}
        >
          <h1 className="text-center text-sfPink text-2xl font-bold ">Day</h1>
          <h1 className="text-3xl font-bold text-sfPink">2</h1>
        </div>
        <div
          onClick={() => setDay(2)}
          className="flex flex-col w-20 h-20 bg-sfDarkBlue rounded-xl items-center justify-center cursor-pointer hover:scale-105 duration-100 border border-sfBloo"
        >
          <h1 className="text-center text-sfPink text-2xl font-bold ">Day</h1>
          <h1 className="text-3xl font-bold text-sfPink">3</h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center  ">
        <button
          onClick={() => setTypes(0)}
          className="border rounded-2xl p-2 border-sfBloo bg-sfDarkBlue"
        >
          General
        </button>
        <button
          onClick={() => setTypes(1)}
          className="border rounded-2xl p-2 border-sfBloo bg-sfDarkBlue"
        >
          Workshop 1
        </button>
        <button
          onClick={() => setTypes(2)}
          className="border rounded-2xl p-2 border-sfBloo bg-sfDarkBlue"
        >
          Workshop 2
        </button>
        <button
          onClick={() => setTypes(3)}
          className="border rounded-2xl p-2 border-sfBloo bg-sfDarkBlue"
        >
          Sponsors
        </button>
        <button
          onClick={() => setTypes(4)}
          className="border rounded-2xl p-2 border-sfBloo bg-sfDarkBlue"
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
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule2;
