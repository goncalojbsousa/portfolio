import { GithubIcon } from "@/components/svg/social-icon/github-icon";
import { LinkedinIcon } from "@/components/svg/social-icon/linkedin-icon";
import { WebsiteIcon } from "@/components/svg/social-icon/website-icon";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
    return (
        <nav className="text-color_sec mb-10">
            <div className="flex flex-col sm:flex-row justify-center items-center p-4">

                <div className="flex items-center sm:mr-12 mb-4 sm:mb-0">
                    <Image
                        className="rounded-full mr-4"
                        src="/photo.jpeg"
                        alt="Gonçalo Sousa Photo"
                        width={80}
                        height={80}
                        draggable={false}
                    />
                    <div>
                        <h1 className=""><b>Gonçalo Sousa</b></h1>
                        <p>Software Developer</p>
                    </div>
                </div>

                <div className="flex space-x-4 items-center">
                    <Link href="https://goncalosousa.netlify.app" target="_blank">
                        <WebsiteIcon className="fill-color_sec transition-transform hover:scale-110" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/goncalojbsousa" target="_blank">
                        <LinkedinIcon className="fill-color_sec transition-transform hover:scale-110" />
                    </Link>
                    <Link href="https://github.com/goncalojbsousa" target="_blank">
                        <GithubIcon className="fill-color_sec transition-transform hover:scale-110" />
                    </Link>
                    <div className="text-color_sec">|</div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
