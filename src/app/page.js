import ProjectCarousel from "@/components/ui/ProjectCarousel";
import Header from "@/components/ui/Header"
import TechStack from "@/components/ui/TechStack";
import TechBoard from "@/components/ui/TechBoard";
import AboutMe from "@/components/ui/AboutMe";
import ProjectBoard from "@/components/ui/ProjectBoard";

export default function Home() {
  return (
    <div>
      <Header />
      {/* Body Div */}
      <div className="pr-8 pb-8 pl-8">
          {/* Top half of body (Grid) */}

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] mx-auto pb-16 font-[family-name:var(--font-geist-sans)] gap-6">

            {/* Left Side (AboutMe + TechStack) */}
            <div className="flex flex-col items-center gap-4">
              <AboutMe />
              <TechStack />
            </div>

            {/* Middle (ProjectCarousel) */}
            <div className="flex flex-col items-center justify-start w-full">
              <ProjectCarousel />
            </div>

            {/* Right Side (Language + Frameworks) */}
            <div className="flex flex-col items-center gap-4">
              <TechBoard />
            </div>

          </div>
        {/* Bottom half of body (Project Board) */}
          <div className="mx-14">
            <ProjectBoard />
          </div>
        </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

