import Image from "next/image";
import { Button } from "@/components/ui/button"
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import Header from "@/components/ui/Header"
import TechStack from "@/components/ui/TechStack";
import AboutMe from "@/components/ui/AboutMe";

export default function Home() {
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />

      <div>
        
      </div>
      <AboutMe />
      <TechStack />
      <ProjectCarousel />

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
      
    </div>
    
  );
}
