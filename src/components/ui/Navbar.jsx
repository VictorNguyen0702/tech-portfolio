'use client';
import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { House, Menu, User, Wrench, FolderKanban } from "lucide-react";
import { motion } from 'framer-motion';


export default function Navbar() {
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      const headerHeight = document.querySelector('nav').offsetHeight; // Get the sticky header height (you can adjust the selector if needed)

      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
  return (
    <nav className="w-full bg-polarDark shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-lg font-bold"></div>

      {/* Desktop Navigation (Hidden on Small Screens) */}
        <div className="hidden md:flex text-snowMid1 space-x-6 gap-10 pr-40">
          <motion.a href="#home" className="flex flex-row gap-2 items-center inline-block transition-transform duration-300 hover:-translate-y-1" onClick={(e) => { e.preventDefault(); handleScroll('home');}}>
            <House />
            Home
          </motion.a>
          <motion.a href="#about-me" className="flex flex-row gap-2 inline-block transition-transform duration-300 hover:-translate-y-1" onClick={(e) => { e.preventDefault(); handleScroll('about-me');}}>
            <User />
            About Me
          </motion.a>
          <motion.a href="#skills" className="flex flex-row gap-2  inline-block transition-transform duration-300 hover:-translate-y-1" onClick={(e) => { e.preventDefault(); handleScroll('skills');}}>
            <Wrench />
            Skills
          </motion.a>
          <motion.a href="#projects" className="flex flex-row gap-2  inline-block transition-transform duration-300 hover:-translate-y-1" onClick={(e) => { e.preventDefault(); handleScroll('projects');}}>
            <FolderKanban />
            Projects
          </motion.a>
        </div>
      {/* Mobile Navigation - Sheet (Sidebar) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden text-snowMid2">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-polarDark">
          <div className="flex flex-col text-snowMid1 space-y-4 mt-6">
            <motion.a href="#home" className="flex flex-row gap-2 items-center inline-block transition-transform duration-300 hover:-translate-y-1" onClick={(e) => { e.preventDefault(); handleScroll('home');}}>
              <House />
              Home
            </motion.a>
            <motion.a href="#about-me" className="flex flex-row gap-2 inline-block transition-transform duration-300 hover:-translate-y-1" onClick={(e) => { e.preventDefault(); handleScroll('about-me');}}>
              <User />
              About Me
            </motion.a>
            <motion.a href="#skills" className="flex flex-row gap-2  inline-block transition-transform duration-300 hover:-translate-y-1" onClick={(e) => { e.preventDefault(); handleScroll('skills');}}>
              <Wrench />
              Skills
            </motion.a>
            <motion.a href="#projects" className="flex flex-row gap-2  inline-block transition-transform duration-300 hover:-translate-y-1" onClick={(e) => { e.preventDefault(); handleScroll('projects');}}>
              <FolderKanban />
              Projects
            </motion.a>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
