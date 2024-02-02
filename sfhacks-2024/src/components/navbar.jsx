import Link from "next/link"
import Image from "next/image"

const Navbar = () => {

    return (
        <nav className="flex flex-row items-center justify-between h-24 bg-white">
            <div className="flex flex-row items-center ml-10">
                <Link className="" href="/">
                    <Image
                        src="/brand-assets/head-logo.svg"
                        width={60}
                        height={60}
                        alt="Picture of the author"
                        />
                </Link>

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
            
            <div className="flex flex-row mr-10 gap-10">
                <Link href="/faq/">FAQ</Link>
                <Link href="/sponsors/">Sponsors</Link>
                <a
                    href="https://bit.ly/sfhacks2024-apply"
                    target="_blank"
                    class="register--button">Register
                </a>


                {/* .nav--button:hover {
                    border-color: #132a3e;
                    border-bottom: 0.25em solid;
                    cursor: pointer;
                    transition: 0.2s ease-in;
                } */}
            </div>
        </nav>
    )

}

export default Navbar;