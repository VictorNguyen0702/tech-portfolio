"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative w-full flex items-center justify-between p-4 mb-8 bg-[var(--light-color)] text-white shadow-lg">
      {/* Left Spacer */}
      <div className="flex-1 hidden md:block" />

      {/* Title */}
      <h1 className="text-xl font-bold text-[var(--dark-color)] text-center flex-1">
        Victor's Portfolio
      </h1>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
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

      {/* Hamburger Menu Button (Mobile) */}
      <div className="relative md:hidden" ref={menuRef}>
        <button className="text-[var(--dark-color)]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Dropdown Menu (Rounded) */}
        <div
          className={`flex flex-col items-center gap-2 p-2 absolute right-0 mt-2 w-40 bg-[var(--light-color)] shadow-lg rounded-2xl border border-gray-300 overflow-hidden transition-opacity duration-200 ${
            isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
          }`}
        >
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
      </div>
    </header>
  );
}
