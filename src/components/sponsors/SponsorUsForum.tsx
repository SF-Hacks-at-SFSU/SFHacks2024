import { useState } from "react";
export default function SponsorUsForum() {
  return (
    <div className="bg-sfDarkBlue w-auto h-auto px-4 py-4">
      <h1 className="text-white text-3xl font-bold pb-4 text-center">
        Reach Us
      </h1>
      <form
        className="flex flex-col gap-3"
        action="https://formspree.io/f/xpzgnnda"
        method="POST"
        id="sponsorForm"
      >
        <label className="text-white">Name</label>
        <input
          type="subject"
          className=" bg-sfDarkBlue text-gray-300 p-2.5 border-b border-sfGreyBlue focus:border-sfPink focus:outline-none"
          id="name"
          name="Subject"
          placeholder="Your name..."
        />
        <label className="text-white">Email</label>
        <input
          type="email"
          className=" bg-sfDarkBlue text-gray-300 p-2.5 border-b border-sfGreyBlue focus:border-sfPink focus:outline-none"
          name="email"
          placeholder="Your Email.."
        />
        <label className="text-white">Message</label>

        <input
          type="text"
          className=" bg-sfDarkBlue text-gray-300 p-2.5 pb-14 border-b border-sfGreyBlue focus:border-sfPink focus:outline-none"
          name="body"
          placeholder="Your Message..."
        />
        <button
          className=" text-sfDarkBlue rounded-full bg-sfPink  p-2 place-self-center w-48 overflow-hidden whitespace-nowrap hover:bg-sky-900 text-s font-semibold "
          value="Submit"
        >
          {" "}
          Submit
        </button>
      </form>
      <p className="text-end p-2 text-white text-xs">
        {" "}
        Form not working? Email us at{" "}
        <a
          href="mailto:sfhacksteam@gmail.com"
          className=" pointer-events-auto text-sfPink hover:underline"
        >
          sfshacksteam@gmail.com{" "}
        </a>
      </p>
    </div>
  );
}