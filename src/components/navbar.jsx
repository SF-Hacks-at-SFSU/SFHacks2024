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
                    className="block max-w-24 min-w-14 absolute left-40 top-0 w-1/10 z-10000"
                    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=red"
                    target="_blank"
                ><img
                    className="w-full"
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
                    alt="Major League Hacking 2024 Hackathon Season"
                /></a>

            </div>
            
            {/* Right side of header */}
            <div className="flex flex-row text-[#FFF5D9] mr-10 gap-[5vw]">

                {/* Buttons */}
                <Link className="transition duration-200 ease-in-out delay-150 border-b-4 hover:border-[#FFF5D9] border-transparent" href="/faq/">FAQ</Link>

                <Link className="transition duration-200 ease-in-out delay-150 border-b-4 hover:border-[#FFF5D9] border-transparent" href="/sponsors/">Sponsors</Link>
                <a
                    href="https://bit.ly/sfhacks2024-apply"
                    target="_blank"
                    className="transition duration-200 ease-in-out delay-150 border-b-4 hover:border-[#FFF5D9] border-transparent">Register
                </a>
            </div>
        </nav>
    )

}

export default Navbar;