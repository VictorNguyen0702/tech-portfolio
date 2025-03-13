import { Github, Linkedin, User } from "lucide-react";
import TechStack from "@/components/ui/TechStack";
import FadeIn from "@/components/ui/FadeIn";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 px-10 lg:px-20 py-10 bg-snowLight text-white w-full mx-auto">
      {/* Wrapper for fade-in effect */}
      <FadeIn className="flex flex-col justify-center gap-6">
        <h2 className="text-base sm:text-lg md:text-xl font-bold flex items-center gap-2">
          <User size={32} className="text-[var(--dark-color)]" />
          <p className="text-[var(--dark-color)]">About Me</p>
        </h2>
        <p className="sm:w-full lg:w-[65%] md:text-lg text-[var(--dark-color)] leading-relaxed">
          I’m a 3rd-year Advanced Computing student passionate about backend
          engineering and AI/ML. I enjoy designing personal projects, learning
          AWS, and exploring ML frameworks like TensorFlow and PyTorch.
        </p>
        <div className="flex flex-row justify-left pr-10 gap-5 text-[var(--dark-color)]">
          <a
            href="https://github.com/VictorNguyen0702"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/victor-nguyen-43dwa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </FadeIn>

      <FadeIn>
        <TechStack />
      </FadeIn>
      
    </div>
  );
};

export default AboutMe;
