'use client';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from 'react';
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
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-lg font-bold"></div>

      {/* Desktop Navigation (Hidden on Small Screens) */}
        <div className="hidden md:flex space-x-6 gap-10 pr-40">
          <motion.a href="#home" className="hover:text-[var(--text-hover-color)]" onClick={(e) => { e.preventDefault(); handleScroll('home');}}>Home</motion.a>
          <motion.a href="#about-me" className="hover:text-[var(--text-hover-color)]" onClick={(e) => { e.preventDefault(); handleScroll('about-me');}}>About Me</motion.a>
          <motion.a href="#skills" className="hover:text-[var(--text-hover-color)]" onClick={(e) => { e.preventDefault(); handleScroll('skills');}}>Skills</motion.a>
          <motion.a href="#projects" className="hover:text-[var(--text-hover-color)]" onClick={(e) => { e.preventDefault(); handleScroll('projects');}}>Projects</motion.a>
        </div>
      {/* Mobile Navigation - Sheet (Sidebar) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col space-y-4 mt-6">
            <motion.a href="#home" className="hover:text-[var(--text-hover-color)]" onClick={(e) => { e.preventDefault(); handleScroll('home');}}>Home</motion.a>
            <motion.a href="#about-me" className="hover:text-[var(--text-hover-color)]" onClick={(e) => { e.preventDefault(); handleScroll('about-me');}}>About Me</motion.a>
            <motion.a href="#skills" className="hover:text-[var(--text-hover-color)]" onClick={(e) => { e.preventDefault(); handleScroll('skills');}}>Skills</motion.a>
            <motion.a href="#projects" className="hover:text-[var(--text-hover-color)]" onClick={(e) => { e.preventDefault(); handleScroll('projects');}}>Projects</motion.a>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
