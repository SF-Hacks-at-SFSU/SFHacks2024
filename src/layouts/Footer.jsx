import "./Footer.css";

export default function Footer() {
  const sponsors = [
    {
      name: "Sticker Mule",
      path: "/sponsors/sticker-mule-logo-light-bg-stacked.svg",
      link: "https://www.stickermule.com/",
    },
    // {
    //     name: "Los Pollos",
    //     path: "public/sponsors/Los_Pollos.webp",
    //     link: "dinosaur"
    // }
  ];

  const sponsorsMap = sponsors.map((x) => (
    <a target="_blank" href={x.link}>
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
