import Countdown from '../components/Countdown';

export default function Home() {
  return (
    <>
      
    </>
  );
}
<section className="home">
      <div className="hero">
        <img className="hero--image" src="/sfhacks/logopupleBluewithtext.png" />
        <div className="hero--text">
          <p>Cohosted by Association of Computer Machinery (ACM) at SFSU</p>

          <h1 className="hero--text--title">SF HACKS 2024</h1>

          <CountDown />
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
      </div>
    </section>