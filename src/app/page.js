import Image from "next/image";
import { Button } from "@/components/ui/button"
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import Header from "@/components/ui/Header"
import TechStack from "@/components/ui/TechStack";
import AboutMe from "@/components/ui/AboutMe";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] min-h-screen mx-auto pb-16 font-[family-name:var(--font-geist-sans)] gap-6">
        
        {/* Left Side (AboutMe + TechStack) */}
        <div className="flex flex-col items-center gap-4">
          <AboutMe />
          <TechStack />
        </div>

        {/* Middle (ProjectCarousel) */}
        <div className="flex flex-col items-center justify-start w-full min-h-screen">
          <ProjectCarousel />
        </div>




      </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
