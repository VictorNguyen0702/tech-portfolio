import { User } from "lucide-react";
import Badges from "./Badges";

const AboutMe = () => {
    return (
      <div className="flex flex-col gap-4 p-6 bg-[var(--light-color)] rounded-xl border border-neutral-800 text-white 
                      w-full max-w-lg mx-auto">
        <h2 className="text-base sm:text-lg md:text-xl font-bold flex items-center gap-2">
          <User size={32} className="text-[var(--dark-color)]" />
          <p className="text-[var(--dark-color)]">About Me</p>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[var(--dark-color)] leading-relaxed">
          I’m a 3rd-year Advanced Computing student passionate about software development...
        </p>
        <Badges />
      </div>
    );
}

export default AboutMe;