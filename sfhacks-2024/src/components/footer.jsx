import "./Footer.css";

export default function Footer() {
  const sponsors = [
    {
      id: 1,
      name: "Sticker Mule",
      path: "/sponsors/sticker-mule-logo-light-bg-stacked.svg",
      link: "https://mule.to/p5h3",
    },
    // {
    //     name: "Los Pollos",
    //     path: "public/sponsors/Los_Pollos.webp",
    //     link: "dinosaur"
    // }
  ];

  const sponsorsMap = sponsors.map((x) => (
    <a target="_blank" id={x.id} href={x.link}>
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