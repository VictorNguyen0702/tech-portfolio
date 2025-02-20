import Image from "next/image";
import { Button } from "@/components/ui/button"
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import Header from "@/components/ui/Header"
import TechStack from "@/components/TechStack";
export default function Home() {
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />

      <div>
        
      </div>
      <TechStack />
      <ProjectCarousel />

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
      
    </div>
    
  );
}
