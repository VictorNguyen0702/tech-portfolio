'use client';
import {Button} from "@/components/ui/button";
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      const headerHeight = document.querySelector('nav').offsetHeight; // Get the sticky header height (you can adjust the selector if needed)

      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
    return (
      <div className="flex flex-col items-left justify-left bg-[var(--hero-color)] px-10 py-20 lg:p-20 gap-5">
        <div className="text-3xl font-bold sm:w-full lg:w-[30%]">Computer Science Student and Aspiring Backend Developer</div>
        <div className="text-lg sm:w-full lg:w-[30%]">Tech enthusiast and software developer who loves turning ideas into functional applications</div>
        <Button asChild className="bg-[var(--dark-color)] text-white max-w-[150px] rounded-full px-4 py-2 transition hover:brightness-75">
          <motion.a href="#projects" className="hover:text-[var(--text-hover-color)]" onClick={(e) => { e.preventDefault(); handleScroll('projects');}}>Projects</motion.a>
        </Button>
      </div>
    )
}

export default Hero