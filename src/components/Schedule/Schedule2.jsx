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
        start: "2:30 PM",
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
        start: "7:30 PM",
        end: "8:00 PM",
        name: "Dinner",
        description: "Devour some amazing food from Taqueria (VG, HA)",
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
        name: "Coze: AI Bot Creation w/ Joshua Alphonse",
        description:
          "Next-generation AI chatbot building platform. Quickly create bots without coding and publish them on various platforms",
      },
      {
        start: "5:15 PM",
        end: "6:15 PM",
        name: "Mongo DB: Representing Meaning In Numbers With & Looking Them Up ",
        description:
          "Master MongoDB and vector search to enhance your project with efficient data retrieval.",
      },
      {
        start: "6:30 PM",
        end: "7:30 PM",
        name: "Notion Workshop w/ Giahuy Dang ",
        description: "Learn how to increase your productivity using Notion.",
      },
    ],
    [
      // worksjop 2
      {
        start: "4:00 PM",
        end: "5:00 PM",
        name: "Github Copilot Workshop with MLH",
        description:
          "Learn about how to use GitHub Copilot from MLH Coach Mansi.",
      },
      {
        start: "5:15 PM",
        end: "6:15 PM",
        name: "Neurelo Data API workshop w/ George Sumpster",
        description: "Boost your hackathon project's speed with AI-powered auto-generated Data APIs for MongoDB and PostgreSQL",
      },
      {
        start: "6:30 PM",
        end: "7:30 PM",
        name: "Fireworks AI Workshop w/ Raymond Thai",
        description: "",
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
        description: "Noah’s Bagel (VG, HA)",
      },
      {
        start: "1:00 PM",
        end: "2:00 PM",
        name: "Lunch",
        description:
          "Obliderate your hunger with Ike’s Sandwhiches (VG, V, HA)",
      },
      {
        start: "2:00 PM",
        end: "3:30 PM",
        name: "Women In Tech Panel",
        description:
          "Hear about our panelist's experiences as women in the technology industry.",
      },

      {
        start: "6:00 PM",
        end: "7:00 PM",
        name: "POC in Tech Panel",
        description:
          "Hear about our panelist's experiences as people of color in the technology industry.",
      },
      {
        start: "8:00 PM",
        end: "9:00 PM",
        name: "Dinner",
        description: "Feast on some Costco Pizza (VG, HA)",
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
        name: "Workshop w/ Jon Wolheim: Neuroscience in Games: Applying Game Tech to Your World",
        description: "Learn how to save lives by making awesome games",
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
        description:
          "Enjoy some coffee and breakfast with Noah's Bagel (VG, HA)",
      },
      {
        start: "10:30 AM",
        end: "11:00 AM",
        name: "Project Submission deadline",
        description: "Submit your project by 11:00 AM",
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
        name: "Winners revealed",
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
        name: "SF State Alumni Panel",
        description:
          "Hear about our panelist's experiences as alumni of San Francisco State University.",
      },
      {
        start: "2:00 PM",
        end: "2:15 PM",
        name: "K-Pop Dance Party",
        description: "Learn how to dance and sing like your favorite idol.",
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
