import React from "react";
import SponsorUsForum from "./SponsorUsForum";
import "./sponsors.css";

const Sponsors = () => {
  return (
    <div>
      <a
        style={{
          display: "block",
          maxWidth: "100px",
          minWidth: "60px",
          position: "absolute",
          left: "180px",
          top: "0",
          width: "10%",
          zIndex: "10000",
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=red"
        target="_blank"
      >
        <img
          className="mlh-trust-badge"
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
          alt="Major League Hacking 2024 Hackathon Season"
          style={{ width: "100%" }}
        />
      </a>

      <div className="bg-sfDarkBlue">
        <div className="relative w-full h-32 md:h-40 lg:h-60">
          <div className="absolute inset-0 bg-event bg-cover bg-center brightness-[85%]"></div>
          <h1 className="text-center font-bold text-3xl text-white relative flex items-center justify-center h-full md:text-6xl lg:text-8xl z-0">
            Sponsorship
          </h1>
        </div>
        <div className="flex flex-col md:flex-row sponsors-container">
          <div className="pt-20 md:px-20 md:flex-1">
            <h1 className="text-center text-3xl text-white md:text-5xl px-4 md:px-20">
              Why Sponsor Us?
            </h1>
            <p className="p-6 md:text-2xl text-center text-slate-100">
              The sponsorship funds will support hackers attending our inclusive
              SF Hacks event. We're reaching out to a diverse audience,
              including non-computer science majors and beginners, thanks to our
              San Francisco location. Our event is accessible to startups, large
              companies, and everyone in between. Students have the freedom to
              create whatever they desire, and sponsors can participate by
              offering branded prizes, API demos, swag, and workshops.
            </p>
          </div>
          <div className="p-10 md:p-20 md:w-300 md:justify-center md:flex-1">
            <SponsorUsForum />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;