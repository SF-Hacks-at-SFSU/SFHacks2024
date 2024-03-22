export default function Tracks() {
  const tracks = [
    {
      title: "AI Track",
      description: "This challenge invites you to develop an AI or use an existing AI in your project.",
      image: "/tracks/ai.svg"
    },
    {
      title: "Best Hardware Track",
      description: "Using your preferred hardware or hardware emulator, build a hack of your choice.",
      image: "/tracks/hardware.svg"
    },
    {
      title: "Best Sustainability Hack",
      description: "Develop a hack that provides an innovative and practical solution that promotes sustainable development.",
      image: "/tracks/sustainability.svg"
    },
    {
      title: "Best Design",
      description: "Develop a hack with innovative and visually appealing user interfaces (UI) and user experiences (UX).",
      image: "/tracks/design.svg"
    },
    {
      title: "First-Time-Hack",
      description: "You are eligible for this category if at least half of your team is made of 1st time hackers.",
      image: "/tracks/beginner.svg"
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-[5%] text-center md:text-2xl">
      <p className="text-white">Tracks</p>
      <p className="text-[#868C89]">Prizes will be announced soon.</p>
      <div className="flex flex-row place-items-center overflow-x-scroll no-scrollbar mt-10 items-center gap-5 md:justify-center md:flex-wrap">
        {tracks.map(x => 
          <img src={x.image} />
        )}
      </div>
      <p className="sm:block md:hidden mt-5 text-md text-[#868C89]">(scroll right)</p>
      <p className="mt-20 md:text-4xl text-2xl text-[#FBF3DB]">Challenge Theme Track to be announced April 1st...</p>
      <p className="text-[#868C89]">Any project that attempts a challenge track will automatically receive a slight increase in the judging categories.</p>
    </div>
  );
}