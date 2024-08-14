import { TypescriptIcon } from './svg/technologies-icons/typescript-icon'
import { PostgresqlIcon } from './svg/technologies-icons/postgresql-icons'
import { ReactIcon } from './svg/technologies-icons/react-icon'
import { NextjsIcon } from './svg/technologies-icons/nextjs-icon'
import { TailwindIcon } from './svg/technologies-icons/tailwind-icon'
import { HTMLIcon } from './svg/technologies-icons/html-icon'
import { CSSIcon } from './svg/technologies-icons/css-icon'

export default function Technologies() {
    return (
        <div className="flex flex-col justify-center items-center mb-20">
            <h1 className="text-3xl mb-6"><b>Technologies</b></h1>
            <div className="flex flex-wrap items-center justify-center gap-4 px-2">
                <TypescriptIcon className="fill-color_sec transition-transform hover:scale-125" />
                <PostgresqlIcon className="fill-color_sec transition-transform hover:scale-125" />
                <ReactIcon className="fill-color_sec transition-transform hover:scale-125" />
                <NextjsIcon className="fill-color_sec transition-transform hover:scale-125" />
                <TailwindIcon className="fill-color_sec transition-transform hover:scale-125" />
                <HTMLIcon className="fill-color_sec transition-transform hover:scale-125" />
                <CSSIcon className="fill-color_sec transition-transform hover:scale-125" />
            </div>
        </div>
    )
}
