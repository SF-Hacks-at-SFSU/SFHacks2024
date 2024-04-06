import Countdown from '../components/Countdown';
import FAQ from "../components/FAQ";
import Sponsors from "../components/sponsors/Sponsors";
import AboutUs from "../components/aboutUs/AboutUs";
import Tracks from "../components/Tracks";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className='bg-[#254d70]'>
      <section className="h-[calc(90vh)] items-center bg-sfDarkBlue flex flex-row gap-[10%] justify-center object-cover bg-[url('/brand-assets/background-bridge.png')] bg-cover p-[5%]">
        <img className="h-[70vh] hidden lg:block" src="/brand-assets/purple-logo.png" />
        <div className="w-[600px] gap-2.5 flex flex-col items-center text-[rgba(245,245,245,0.65)] text-base not-italic font-[550] leading-[normal] text-center">
          
          <p>Cohosted by Association of Computer Machinery (ACM) at SFSU</p>
          <h1 className={`${inter.className} text-[#ebebeb] text-center text-[4rem] not-italic leading-[normal] uppercase font-[1000]`}>SFHACKS 2024</h1>
          
          <h1 className="pt-5 text-[#ebebeb] text-[1.5rem]">Project Submission Deadline:</h1>
          <Countdown />
          
          <p>April 5th - 7th 2024 @
            <a
              className="border-b hover:border-sfPink"
              href="https://www.google.com/maps/place/Student+Life+Events+Center+%2F+Annex+I/@37.7264505,-122.4847354,17z/data=!3m1!4b1!4m6!3m5!1s0x808f7da51ff323d3:0x74d61cd2d66d4dbb!8m2!3d37.7264463!4d-122.4821605!16s%2Fg%2F1hdz113p8?entry=ttu"
              target="_blank"
            >SF State Annex 1</a>
          </p>

          <p className="text-white mt-5">
            Our organization's purpose is to plan and host California's most
            talented collegiate hackers, designers, and developers, to a 3 day
            hackathon. Join us next spring to kickoff SF Hacks 2024!
          </p>

          <div className="flex flex-row flex-wrap justify-center gap-5 sm:mb-10">
            <a href="https://discord.gg/P5PsDR6G7W" target="_blank">
              <button
                type="button"
                className="bg-sfLightBlue mt-5 p-4 text-lg font-semibold rounded-full text-sfPink"
              >Join Discord</button>
            </a>
            <a href="https://sfhacks-2024.devpost.com/" target="_blank">
              <button
                type="button"
                className="bg-sfLightBlue mt-5 p-4 text-lg font-semibold rounded-full text-sfPink"
              >Submit on Devpost</button>
            </a>
            <a href="https://bit.ly/sfhacks2024-handbook" target="_blank">
              <button
                type="button"
                className="bg-sfLightBlue mt-5 p-4 text-lg font-semibold rounded-full text-sfPink"
              >Hacker's Handbook</button>
            </a>
            <a href="/sfhacks_map.png" target="_blank" download>
              <button
                type="button"
                className="bg-sfPink mt-5 p-4 text-lg font-semibold rounded-full text-sfLightBlue xl:hidden lg:hidden md:block sm:block xs:block"
              >Map</button>
            </a>
          </div>

        </div>
      </section>


      <section className="bg-[#0E1E2C]">
        <Tracks />
      </section>
      <section className="bg-[#254d70]">
        <FAQ />
      </section>
      <section className="bg-sfDarkBlue">
        <Sponsors />
      </section>
      <section className="bg-sfDarkBlue">
        <AboutUs />
      </section>
    </main>
  );
}