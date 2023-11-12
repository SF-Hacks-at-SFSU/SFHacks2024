export default function SponsorContainer({
  sponsorLogo,
  sponsorTier,
  sponsorLink,
}: {
  sponsorLogo: string;
  sponsorTier: string;
  sponsorLink: string;
}) {
  let tierColor: string;
  if (sponsorTier.toLocaleLowerCase() === "gold") {
    tierColor = "border-yellow-500";
  } else if (sponsorTier.toLocaleLowerCase() === "silver") {
    tierColor = "border-gray-400";
  } else {
    tierColor = "border-red-600"; //bronze
  }

  return (
    <div className={`commentborder-4 blll${tierColor}  `}>
      <a href={sponsorLink} target="_blank">
        <img
          src={sponsorLogo}
          alt="Logo"
          className="object-scale-down h-20 w-20"
        />{" "}
      </a>
    </div>
  );
}