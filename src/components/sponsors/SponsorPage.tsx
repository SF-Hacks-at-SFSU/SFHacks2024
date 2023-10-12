import SponsorContainer from "./SponsorContainer";

type Sponsor = [string, string, string];
export default function SponsorPage() {
  //const sponsorTier = "Gold";
  //const sponsorLink = "https://example.com/sponsor";

  const sponsors: Sponsor[] = [
    ["Los_Pollos.webp", "Gold", "http://www.lphishiring.com"],
    ["Duff.png", "Silver", "https://simpsons.fandom.com/wiki/Duff_Beer"],
    ["BloxxyCola.webp", "Bronze", "https://roblox.fandom.com/wiki/Catalog:Bloxy_Cola"],
    ["Adidas_logo.png", "Gold", "https://www.adidas.com/us"],
    ["google.png", "Platinum", "https://about.google"],
    ["lyft.png", "Silver", "https://www.lyft.com"],
    ["Vindertech.png", "Platinum", "https://fortnite.fandom.com/wiki/Vindertech"],
    ["chipotle.png", "Bronze", "https://www.chipotle.com"],
    ["cose.png", "Gold", "https://cose.sfsu.edu"],
    ["business.png", "Gold", "https://cob.sfsu.edu"],
    ["csld-logo.png", "Gold", "https://career.sfsu.edu"]
  ];

  return (
    <>
      <div className="py-12 bg-blue-950 rounded-lg mb-16 shadow-lg">
        <h1 className="font-bold text-center font-mono text-6xl py-4">
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-violet-600 to-sky-900"
            style={{ display: "inline-block" }}
          >
            Our Sponsors...
          </span>
        </h1>
      </div>

      <div className="flex flex-row justify-center">
        {sponsors.map((sponsor: Sponsor, index: number) => (
          <div key={index} className="p-6">
            <SponsorContainer
              sponsorLogo={sponsor[0]} // Logo pathname
              sponsorTier={sponsor[1]} // Donation tier
              sponsorLink={sponsor[2]} // Link to webpage
            />
          </div>
        ))}
      </div>
    </>
  );
}
