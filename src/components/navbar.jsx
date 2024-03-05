import Link from "next/link"
import Image from "next/image"

const Navbar = () => {

    return (
        <nav className="flex flex-row items-center justify-between h-[calc(10vh)] bg-sfDarkBlue">

            {/* Left side of header */}
            <div className="flex flex-row items-center ml-10">

                {/* SF Hacks Logo */}
                <Link className="" href="/">
                    <Image
                        src="/brand-assets/head-logo.svg"
                        width={60}
                        height={60}
                        alt="Picture of the author"
                        />
                </Link>

                {/* MLH Banner */}
                <a
                    className="xs:w-12 md:block md:w-14 lg:w-20 absolute left-32 top-0 z-50"
                    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=red"
                    target="_blank"
                ><img
                    className="w-full"
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
                    alt="Major League Hacking 2024 Hackathon Season"
                /></a>

            </div>
            
            {/* Right side of header */}
            <div className="flex flex-row text-[#FFF5D9] mr-8 gap-[2vw] md:text-l xs:text-xs">

                {/* Buttons */}
                <Link className="transition duration-200 ease-in-out delay-150 border-b-4 hover:border-[#FFF5D9] border-transparent" href="/faq/">FAQ</Link>

                <Link className="transition duration-200 ease-in-out delay-150 border-b-4 hover:border-[#FFF5D9] border-transparent" href="/sponsors/">Sponsors</Link>
            </div>
        </nav>
    )

}

export default Navbar;