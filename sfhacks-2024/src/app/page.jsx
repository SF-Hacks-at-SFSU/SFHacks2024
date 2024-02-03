import Countdown from '../components/Countdown';

export default function Home() {
  return (
    <section className="h-[calc(100vh)] flex flex-row gap-[10%] justify-center object-cover bg-[url('/brand-assets/background-bridge.png')] bg-cover p-[15%]">
      <img className="h-[70vh]" src="/brand-assets/purple-logo.png" />
      <div className="w-[600px] gap-2.5 flex flex-col items-center text-[rgba(245,245,245,0.65)] text-base not-italic font-[550] leading-[normal] text-center">
        <p>Cohosted by Association of Computer Machinery (ACM) at SFSU</p>

        <h1 className="text-[#ebebeb] text-center text-[4rem] not-italic leading-[normal] uppercase font-[1000]">SF HACKS 2024</h1>

        <Countdown />
        
        <p>
          April 5th - 7th 2024
          <a
            classNameName="border-b hover:border-sfPink"
            href="https://www.google.com/maps/place/Student+Life+Events+Center+%2F+Annex+I/@37.7264505,-122.4847354,17z/data=!3m1!4b1!4m6!3m5!1s0x808f7da51ff323d3:0x74d61cd2d66d4dbb!8m2!3d37.7264463!4d-122.4821605!16s%2Fg%2F1hdz113p8?entry=ttu"
            className="hero--text--subtitle"
            target="_blank"
          >
            @ SF State Annex 1
          </a>
        </p>

        <p className="text-white mt-5">
          Our organization's purpose is to plan and host California's most
          talented collegiate hackers, designers, and developers, to a 3 day
          hackathon. Join us next spring to kickoff SF Hacks 2024!
        </p>

        <div
          className="inline-block flex-row flex-wrap justify-center gap-5 sm:mb-10"
        >
          <a href="https://bit.ly/sfhacks2024-apply" target="_blank"
            ><button
              type="button"
              className="text-sfLightBlue mt-5 p-4 text-lg font-semibold rounded-full bg-sfPink"
              >Register Now</button
            >
          </a>

          <a href="https://discord.gg/P5PsDR6G7W" target="_blank"
            ><button
              type="button"
              className="bg-sfLightBlue mt-5 p-4 text-lg font-semibold rounded-full text-sfPink"
              >Join Discord</button
            >
          </a>
        </div>
      </div>
    </section>
  );
}