import { SchoolIcon } from "./svg/school-icon";

export default function AboutMe() {
    return (
        <div className="flex flex-col justify-center items-center mb-20 text-justify px-4">
            <h1 className="text-3xl mb-6"><b>About Me</b></h1>

            <div className="flex flex-col itens-center">
                <p className="mb-4">I'm passionate about technology and programming, always looking to learn new technologies and turn ideas into reality through code. In my spare time, I like to relax by playing video games.</p>
                <div className="flex">
                    <SchoolIcon className="mr-2 fill-color_sec" />
                    <p className="">Information Systems Technologies and Programming | 2022-2024</p>
                </div>
            </div>

        </div>
    )
}
