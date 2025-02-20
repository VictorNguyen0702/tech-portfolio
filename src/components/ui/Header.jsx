"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // for small screen hamburger menu

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-[var(--light-color)] text-white shadow-lg">
      {/* Title (Centered) */}
      <h1 className="text-xl font-bold text-[var(--dark-color)] mx-auto md:ml-0">Victor's Portfolio</h1>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <a href="https://github.com/VictorNguyen0702" target="_blank">
          <Button
            variant="outline"
            className="text-white border-[var(--dark-color)] bg-[var(--dark-color)] hover:shadow-lg hover:shadow-gray-700 hover:bg-[var(--dark-color)] hover:text-[var(--light-color)]">
            <Github className="w-5 h-5 mr-2" />
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

      {/* Hamburger Menu (Mobile) */}
      <button className="md:hidden text-[var(--dark-color)]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-[var(--dark-color)] rounded-lg shadow-lg flex flex-col gap-2 p-4 md:hidden">
          <a href="https://github.com/VictorNguyen0702" target="_blank" className="text-white flex items-center gap-2">
            <Github className="w-5 h-5" />
            Github
          </a>
          <a href="https://www.linkedin.com/in/victor-nguyen-43123b26a/" target="_blank" className="text-white flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      )}
    </header>
  );
}
