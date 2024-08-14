import Link from 'next/link'
import { WebsiteIcon } from './svg/social-icon/website-icon'
import { GithubIcon } from './svg/social-icon/github-icon'

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center mb-20">
            <h1 className="text-3xl mb-6"><b>Projects</b></h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="bg-color_main border border-color_sec min-w-80 max-w-xl p-4 rounded-lg flex flex-col justify-between hover:bg-color_hover transition duration-300 ease-in-out">
                    <div>
                        <h1 className="text-xl">GameHub Backlog</h1>
                        <p className="text-sm mb-2 text-color_sub">TypeScript - React - Next.js - PostgreSQL - Prisma - Tailwind</p>
                        <p className="text-base text-justify">GameHub Backlog is a comprehensive game backlog tracker designed to help you efficiently manage your video game collection. As your library of titles grows, keeping track of what to play next can become a daunting task. GameHub simplifies this by providing a centralized platform to organize, prioritize, and manage your games with ease.</p>
                    </div>

                    <div className="flex mt-2 space-x-2">
                        <Link href="https://gamehub-project-navy.vercel.app" target="_blank">
                            <WebsiteIcon className="fill-color_sec transition-transform hover:scale-110" />
                        </Link>
                        <Link href="https://github.com/goncalojbsousa/gamehub-project" target="_blank">
                            <GithubIcon className="fill-color_sec transition-transform hover:scale-110" />
                        </Link>
                    </div>
                </div>

                <div className="bg-color_main border border-color_sec min-w-80 max-w-xl p-4 rounded-lg flex flex-col justify-between hover:bg-color_hover transition duration-300 ease-in-out">
                    <div className="">
                        <h1 className="text-xl ">GESFaturação - Shopify APP</h1>
                        <p className="text-sm mb-2 text-color_sub">TypeScript - React - Remix - PostgreSQL - Prisma - Node.js - Express.js</p>
                        <p className="text-base text-justify">This internship project consists of developing an application for Shopify, integrated with FTKode&apos;s GESFaturação API, which aims to automate and simplify invoicing processes for online stores. The app makes it possible to convert orders into invoices or receipts automatically, synchronize inventories between Shopify and GESFaturação, and send financial documents by email efficiently and automatically.</p>
                    </div>
                    <div className="flex mt-2 space-x-2 text-color_sub">
                        Private project
                    </div>
                </div>
            </div>
        </div>
    )
}
