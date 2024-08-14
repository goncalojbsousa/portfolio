import AboutMe from "@/components/about-me";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl lg:max-w-4xl lg:text-lg text-color_sec">

      <Navbar />

      <AboutMe />

      <Technologies />

      <Projects />

    </main>
  );
}