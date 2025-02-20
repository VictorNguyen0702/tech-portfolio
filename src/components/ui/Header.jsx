import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full grid grid-cols-3 items-center p-4 bg-[var(--light-color)] text-white shadow-lg">
      {/* Empty space for balancing */}
      <div></div>

      <h1 className="text-xl font-bold bg-[var(--light-color)] text-[var(--dark-color)] text-center">Victor's Portfolio</h1>

      <div className="flex justify-end gap-4">
        <a href="https://github.com/VictorNguyen0702" target="_blank">
          <Button
              variant="outline"
              className="text-white border-[var(--dark-color)] bg-[var(--dark-color)] hover:shadow-lg hover:shadow-gray-700 hover:bg-[var(--dark-color)] hover:text-[var(--light-color)]">
              <Github className="w-5 h-5 mr-2"/>
              Github
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/victor-nguyen-43123b26a/" target="_blank">
          <Button
              variant="outline"
              className="text-white border-[var(--dark-color)] bg-[var(--dark-color)] hover:shadow-lg hover:shadow-gray-700 hover:bg-[var(--dark-color)] hover:text-[var(--light-color)]">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
          </Button>
        </a>
      </div>
    </header>


  );
}
