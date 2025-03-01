import ProjectCarousel from "@/components/ui/ProjectCarousel";
import Header from "@/components/ui/Header"
import TechStack from "@/components/ui/TechStack";
import TechBoard from "@/components/ui/TechBoard";
import AboutMe from "@/components/ui/AboutMe";
import ProjectBoard from "@/components/ui/ProjectBoard";
import Achievements from "@/components/ui/Achievements";

export default function Home() {
  return (
    <div>
      <Header />
      {/* Body Div */}
      <div className="px-12 pb-12 overflow-visible">
          {/* Top half of body (Grid) */}

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] mx-auto pb-16 font-[family-name:var(--font-geist-sans)] gap-12 overflow-visible">

            {/* Left Side (TechStack + Certificates) */}
            <div className="flex flex-col items-center gap-12 w-full">
              <TechStack />
              <Achievements />
            </div>

            {/* Middle (About Me) */}
            <div className="flex flex-col items-center justify-start w-full overflow-visible">
              <AboutMe />
            </div>

            {/* Right Side (Technology Board) */}
            <div className="flex flex-col items-center gap-4">
              <TechBoard />
            </div>

          </div>
        {/* Bottom half of body (Project Board) */}
          <div>
            <ProjectBoard />
          </div>
        </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

