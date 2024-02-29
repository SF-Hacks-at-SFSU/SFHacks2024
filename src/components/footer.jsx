import "./Footer.css";

export default function Footer() {
  const sponsors = [
    {
      id: 1,
      name: "Sticker Mule",
      path: "/sponsor-logos/sticker-mule-logo-light-bg-stacked.svg",
      link: "https://mule.to/p5h3",
    },
    {
        name: "Stand Out Stickers",
        path: "/sponsor-logos/stand-out-stickers-logo.png",
        link: "https://www.standoutstickers.com/?utm_campaign=events-league-organizers-fall2023&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intro"
    },
  ];

  const sponsorsMap = sponsors.map((x) => (
    <a target="_blank" key={x.id} href={x.link}>
      <img className="sponsor--image" src={x.path} />
    </a>
  ));

  return (
    <div className="foot">
      <p className="footer-label">Sponsored By</p>
      <div className="sponsors"></div>
      {sponsorsMap}
    </div>
  );
}