import SponsorContainer from "./SponsorContainer";

type Sponsor = [string, string, string]; //image name, tier(gold,silver,bronze),link
export default function SponsorPage() {
  //const sponsorTier = "Gold";
  //const sponsorLink = "https://example.com/sponsor";

  const sponsors: Sponsor[] = [
    ["Los_Pollos.webp", "Gold", "http://www.lphishiring.com"],
    ["Duff.png", "Silver", "https://simpsons.fandom.com/wiki/Duff_Beer"],
    [
      "BloxxyCola.webp",
      "Bronze",
      "https://roblox.fandom.com/wiki/Catalog:Bloxy_Cola",
    ],
    ["Adidas_logo.png", "Gold", "https://www.adidas.com/us"],
    ["google.png", "Platinum", "https://about.google"],
    ["lyft.png", "Silver", "https://www.lyft.com"],
    [
      "Vindertech.png",
      "Platinum",
      "https://fortnite.fandom.com/wiki/Vindertech",
    ],
    ["chipotle.png", "Bronze", "https://www.chipotle.com"],
    ["cose.png", "Gold", "https://cose.sfsu.edu"],
    ["business.png", "Gold", "https://cob.sfsu.edu"],
    ["adobe.png", "Silver", "https://helpx.adobe.com/support/xd.html"],
    ["ibm.png", "Gold", "https://www.ibm.com/us-en"],
    ["cahsi.png", "Gold", "https://cahsi.utep.edu"],
    ["Workday_Logo.png", "Platinum", "https://www.workday.com"],
  ];

  return (
    <>
      <div className="py-12 bg-sfDarkBlue rounded-lg mb-16 shadow-lg">
        <h1 className="font-bold text-center font-mono text-6xl py-4 text-white">
        Our <span className=" text-sfGreyBlue">Sponsors... </span>
        </h1>
      </div>

      <div className="flex flex-row justify-center">
        {sponsors.map((sponsor: Sponsor, index: number) => (
          <div key={index} className="p-6">
            <SponsorContainer
              sponsorLogo={`sponsors/${sponsor[0]}`} // Logo pathname
              sponsorTier={sponsor[1]} // Donation tier
              sponsorLink={sponsor[2]} // Link to webpage
            />
          </div>
        ))}
      </div>
    </>
  );
}
