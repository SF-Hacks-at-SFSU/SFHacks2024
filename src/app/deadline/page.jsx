"use client";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
const page = () => {
  const Ref = useRef(null);

  var countDownDate = new Date("Apr 7, 2024 11:00:00");

  const total = Date.parse(countDownDate) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  const [timer, setTimer] = useState({ days, hours, minutes, seconds });

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);

    if (total >= 0) {
      setTimer({ days, hours, minutes, seconds });
    }
  };

  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  useEffect(() => {
    clearTimer(countDownDate);
  }, []);

  // Returns null on first render, so the client and server match
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return (
    <div className="flex flex-col bg-[bg-[#254d70]] w-full h-full justify-center p-36 bg-[url('/brand-assets/background-bridge.png')] bg-cover gap-5 items-center">
      <div className=" translate-y-20 scale-150">
        <p className="text-center text-white xl:text-6xl md:text-3xl sm:text-sm">Project Submission Deadline</p>
        {total <= 0 ? (
          <div className="flex flex-col gap-[auto] text-[#FFF5D9] text-center text-xl not-italic font-[575] leading-[normal] py-7 xl:text-7xl md:text-3xl sm:text-sm">Congratulations Hackers!</div>
        ) : (
          <div
            className={` flex flex-row w-auto justify-between items-center gap-[5vw] m-5`}
          >
            <div className="flex flex-col gap-[auto] items-center text-[#FFF5D9] text-center text-xl not-italic font-[575] leading-[normal]">
              <h1 className="pb-3 xl:text-5xl md:text-3xl sm:text-sm">Days</h1>
              <p className="pb-3 xl:text-5xl md:text-3xl sm:text-sm">
                {timer.days > 9 ? timer.days : "0" + timer.days}
              </p>
            </div>
            <div className="flex flex-col gap-[auto] items-center text-[#FFF5D9] text-center text-xl not-italic font-[575] leading-[normal]">
              <h1 className="pb-3 xl:text-5xl md:text-3xl sm:text-sm">Hours</h1>
              <p className="pb-3 xl:text-5xl md:text-3xl sm:text-sm">
                {timer.hours > 9 ? timer.hours : "0" + timer.hours}
              </p>
            </div>
            <div className="flex flex-col gap-[auto] items-center text-[#FFF5D9] text-center text-xl not-italic font-[575] leading-[normal]">
              <h1 className="pb-3 xl:text-5xl md:text-3xl sm:text-sm">Minutes</h1>
              <p className="pb-3 xl:text-5xl md:text-3xl sm:text-sm">
                {timer.minutes > 9 ? timer.minutes : "0" + timer.minutes}
              </p>
            </div>
            <div className="flex flex-col gap-[auto] items-center text-[#FFF5D9] text-center text-xl not-italic font-[575] leading-[normal] xl:block sm:text-sm hidden">
              <h1 className="pb-3 xl:text-5xl md:text-3xl sm:text-sm">Seconds</h1>
              <p className="pb-3 xl:text-5xl md:text-3xl sm:text-sm">
                {timer.seconds > 9 ? timer.seconds : "0" + timer.seconds}
              </p>
            </div>
          </div>
        )}

        {total <= 0 ? (
          <></>
        ) : (
          <div className="text-center xl:text-5xl md:text-3xl sm:text-sm">
            Submit your project on Devpost
          </div>
        )}

      </div>

      <div className=" h-64"></div>
    </div>
  );
};
export default page;
