import React from "react";
import SponsorUsForum from "./SponsorUsForum";
import "./sponsors.css";

const Sponsors = () => {
  const smallSponsorsSet1 = [
    {
      id: 1,
      name: "Workday",
      path: "/sponsor-logos/small-logos/Workday_logo.png",
      link: "https://www.workday.com/",
    },
    {
      id: 2,
      name: "Humane",
      path: "/sponsor-logos/small-logos/Humane_logo.png",
      link: "https://humane.com/",
    },
    {
      id: 3,
      name: "Vectara",
      path: "/sponsor-logos/small-logos/Vectara_Logo.svg",
      link: "https://vectara.com/",
    },
    {
      id: 4,
      name: "Fireworks",
      path: "/sponsor-logos/small-logos/Fireworks.svg",
      link: "https://fireworks.ai/",
    },
    {
      id: 5,
      name: "MLT",
      path: "/sponsor-logos/small-logos/Colored_MLT_Logo.png",
      link: "https://mlt.org/",
    },
  ];

  const smallSponsorsSet2 = [
    {
      id: 1,
      name: "Computer Science Department",
      path: "/sponsor-logos/small-logos/csdep_logo.svg",
      link: "https://cs.sfsu.edu/",
    },
    {
      id: 2,
      name: "Balsamiq",
      path: "/sponsor-logos/small-logos/balsamiq_logo.png",
      link: "https://balsamiq.com/",
    },
    {
      id: 3,
      name: ".xyz",
      path: "/sponsor-logos/small-logos/xyz-logo-color.svg",
      link: "https://gen.xyz/",
    },
    {
      id: 4,
      name: "Sticker Mule",
      path: "/sponsor-logos/small-logos/Sticker_Mule_logo.svg",
      link: "https://mule.to/p5h3",
    },
    {
      id: 5,
      name: "Zuora",
      path: "/sponsor-logos/small-logos/Zuora_logo.png",
      link: "https://www.zuora.com/",
    },
  ];

  const smallSponsorsSet3 = [
    {
      id: 1,
      name: "Marvell",
      path: "/sponsor-logos/small-logos/Marvell_Logo.svg",
      link: "https://www.marvell.com/",
    },
    {
      id: 2,
      name: "Axure",
      path: "/sponsor-logos/small-logos/Axure_logo.svg",
      link: "https://www.axure.com/",
    },
    {
      id: 3,
      name: "Celcius",
      path: "/sponsor-logos/small-logos/Celcius_logo.png",
      link: "https://www.celsius.com/",
    },
    {
      id: 4,
      name: "Echo3D",
      path: "/sponsor-logos/small-logos/Echo3D_logo.png",
      link: "https://www.echo3d.com/",
    },
    {
      id: 5,
      name: "VerbWire",
      path: "/sponsor-logos/small-logos/Verb_logo.svg",
      link: "https://www.verbwire.com/",
    },
  ];

  const smallSponsorsSet4 = [
    {
      id: 1,
      name: "MongoDb",
      path: "/sponsor-logos/small-logos/MongoDB_White.svg",
      link: "https://www.mongodb.com/",
    },
    {
      id: 2,
      name: "Stand Out Stickers",
      path: "/sponsor-logos/small-logos/stand-out-stickers-logo.png",
      link: "https://www.standoutstickers.com/?utm_campaign=events-league-organizers-fall2023&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intro",
    },
    {
      id: 3,
      name: "Desmos",
      path: "/sponsor-logos/small-logos/Desmos_logo.svg",
      link: "https://www.desmos.com/",
    },
    {
      id: 4,
      name: "Games for love",
      path: "/sponsor-logos/small-logos/Games_For_Love_logo.png",
      link: "https://gamesforlove.org/",
    },
    {
      id: 5,
      name: "Ikes Sandwiches",
      path: "/sponsor-logos/small-logos/Ikes_logo.svg",
      link: "https://www.ikessandwich.com/",
    },
  ];

  const smallSponsorsSet5 = [
    {
      id: 1,
      name: "Notion",
      path: "/sponsor-logos/small-logos/Notion_logo.png",
      link: "https://www.notion.so/",
    },
    {
      id: 2,
      name: "Art of Problem Solving",
      path: "/sponsor-logos/small-logos/AOPS_Logo.png",
      link: "https://artofproblemsolving.com/",
    },
    {
      id: 3,
      name: "Google Cloud",
      path: "/sponsor-logos/gcloud.png",
      link: "https://cloud.google.com/",
    },
    {
      id: 4,
      name: "Associated Students",
      path: "/sponsor-logos/AS.png",
      link: "https://asi.sfsu.edu/",
    },
  ];

  const mediumSponsors = [
    {
      id: 1,
      name: "COZE",
      path: "/sponsor-logos/medium-logos/ByteDance_logo.png",
      link: "https://www.coze.com/",
    },
    {
      id: 2,
      name: "COSE",
      path: "/sponsor-logos/medium-logos/COSE_logo.png",
      link: "https://cose.sfsu.edu/",
    },
    {
      id: 3,
      name: "Innovation/entrep",
      path: "/sponsor-logos/medium-logos/innovation.webp",
      link: "https://cob.sfsu.edu/initiatives-centers/innovation-entrepreneurship-programs-community-engagement",
    },
    {
      id: 4,
      name: "Lam-Lerson",
      path: "/sponsor-logos/medium-logos/lamLerson.png",
      link: "https://cob.sfsu.edu/initiatives-centers/emerging-technologies",
    },
  ];

  const largeSponsors = [
    {
      id: 1,
      name: "Fastly",
      path: "/sponsor-logos/large-logos/fastly-ar21.svg",
      link: "https://www.fastly.com/",
    },
    {
      id: 2,
      name: "OpenAi",
      path: "/sponsor-logos/large-logos/OpenAI_Logo.svg",
      link: "https://openai.com/",
    },
    {
      id: 3,
      name: "Kaiser Permanente",
      path: "/sponsor-logos/large-logos/KP_logo.png",
      link: "https://healthy.kaiserpermanente.org/northern-california/front-door",
    },
    {
      id: 4,
      name: "Cisco",
      path: "/sponsor-logos/large-logos/Cisco_logo.png",
      link: "https://www.cisco.com/",
    },
    {
      id: 5,
      name: "Neurelo",
      path: "/sponsor-logos/large-logos/Neurelo_logo.png",
      link: "https://www.neurelo.com/",
    },
  ];

  const xLargeSponsors = [
    {
      id: 1,
      name: "Paul Klein",
      path: "/sponsor-logos/xlarge-logos/paul-klein.png",
      link: "https://browserbase.com/",
    },
    {
      id: 2,
      name: "Browser Base",
      path: "/sponsor-logos/xlarge-logos/browser-base.png",
      link: "https://browserbase.com/",
    },
  ];

  /*---------------------------------------------------------------------- */

  const smallSponsorsSet1Map = smallSponsorsSet1.map((x) => (
    <a target="_blank" key={x.id} href={x.link}>
      <img className="small--sponsor--image" src={x.path} />
    </a>
  ));

  const smallSponsorsSet2Map = smallSponsorsSet2.map((x) => (
    <a target="_blank" key={x.id} href={x.link}>
      <img className="small--sponsor--image" src={x.path} />
    </a>
  ));

  const smallSponsorsSet3Map = smallSponsorsSet3.map((x) => (
    <a target="_blank" key={x.id} href={x.link}>
      <img className="small--sponsor--image" src={x.path} />
    </a>
  ));

  const smallSponsorsSet4Map = smallSponsorsSet4.map((x) => (
    <a target="_blank" key={x.id} href={x.link}>
      <img className="small--sponsor--image" src={x.path} />
    </a>
  ));

  const smallSponsorsSet5Map = smallSponsorsSet5.map((x) => (
    <a target="_blank" key={x.id} href={x.link}>
      <img className="small--sponsor--image" src={x.path} />
    </a>
  ));

  const mediumSponsorsMap = mediumSponsors.map((x) => (
    <a target="_blank" key={x.id} href={x.link}>
      <img className="medium--sponsor--image" src={x.path} />
    </a>
  ));

  const largeSponsorsMap = largeSponsors.map((x) => (
    <a target="_blank" key={x.id} href={x.link}>
      <img className="large--sponsor--image" src={x.path} />
    </a>
  ));

  const xLargeSponsorsMap = xLargeSponsors.map((x) => (
    <a target="_blank" key={x.id} href={x.link}>
      <img className="x--large--sponsor--image" src={x.path} />
    </a>
  ));

  return (
    <div>
      <div className="bg-sfDarkBlue">
        <div className="relative w-full h-32 md:h-40 lg:h-60">
          <div className="absolute inset-0 bg-event bg-cover bg-center brightness-[85%]"></div>
          <h1 className="text-center font-bold text-4xl text-white relative flex items-center justify-center h-full md:text-6xl lg:text-8xl z-0">
            Sponsors
          </h1>
        </div>
        <h1 className="text-center text-gray-300 text-md md:text-3xl lg:text-4xl relative flex items-center justify-center h-full m-5 md:m-10">
          Thank you to our sponsors
        </h1>
        <div className="flex flex-col justify-center sponsors-container">
          <div className="flex flex-row items-center x-large-sponsors">
            {xLargeSponsorsMap}
          </div>
          <div className="flex flex-row items-center large-sponsors">
            {largeSponsorsMap}
          </div>
          <div className="flex flex-row items-center medium-sponsors">
            {mediumSponsorsMap}
          </div>
          <div className="flex flex-row items-center small-sponsors">
            {smallSponsorsSet1Map}
          </div>
          <div className="flex flex-row items-center small-sponsors">
            {smallSponsorsSet2Map}
          </div>
          <div className="flex flex-row items-center small-sponsors">
            {smallSponsorsSet3Map}
          </div>
          <div className="flex flex-row items-center small-sponsors">
            {smallSponsorsSet4Map}
          </div>
          <div className="flex flex-row items-center m-3 small-sponsors">
            {smallSponsorsSet5Map}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
