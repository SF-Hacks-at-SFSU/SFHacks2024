export default function SponsorUsForum() {
  return (
    <div className="bg-sfDarkerBlue w-auto h-auto px-4 py-4 md:w-1/2">
      <h1 className="text-white text-3xl font-bold pb-4">Reach Us:</h1>
      <form
        className="flex flex-col gap-3"
        action="mailto:sfhacksteam@gmail.com"
        method="get"
        encType="text/plain"
      >
        <label className="text-white">Name</label>
        <input
          type="subject"
          className=" bg-gray-600 text-gray-300 p-2.5"
          id="name"
          name="subject"
          placeholder="Your name..."
        />
        <label className="text-white">Email</label>
        <input
          type="email"
          className=" bg-gray-600 text-gray-300 p-2.5 "
          name="email"
          placeholder="Your Email.."
        />
        <label className="text-white">Message</label>

        <input
          type="text"
          className=" bg-gray-600 text-gray-300 p-2.5 pb-14"
          name="body"
          placeholder="Your Message..."
        />
        <button className=" bg-sfGreyBlue rounded-md text-white w-fit px-2 place-self-end ">
          {" "}
          Submit
        </button>
      </form>
      <p className="text-end p-2 text-white delay-1000">
        {" "}
        Form not working? Email us at{" "}
        <a
          href="mailto:sfhacksteam@gmail.com"
          className=" pointer-events-auto text-yellow-400 hover:underline"
        >
          sfshacksteam@gmail.com{" "}
        </a>
      </p>
    </div>
  );
}
