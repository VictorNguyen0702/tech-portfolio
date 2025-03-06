import { User } from "lucide-react";
import Technologies from "@/components/ui/TechBoard";
import TechStack from "@/components/ui/TechStack";

const AboutMe = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 px-20 py-10 bg-[var(--light-color)] border border-[var(--light-color)] text-white w-full mx-auto">
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-base sm:text-lg md:text-xl font-bold flex items-center gap-2">
            <User size={32} className="text-[var(--dark-color)]"/>
            <p className="text-[var(--dark-color)]">About Me</p>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--dark-color)] leading-relaxed">
            I’m a 3rd-year Advanced Computing student passionate about software development...
          </p>
        </div>
        <TechStack />
      </div>
    );
}

export default AboutMe;