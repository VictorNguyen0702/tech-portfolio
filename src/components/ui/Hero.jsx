'use client';
import {Button} from "@/components/ui/button";
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from "./FadeIn";

const Hero = () => {
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      const headerHeight = document.querySelector('nav').offsetHeight;
      
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
    return (
      <div className="bg-cover brightness-75" style={{ backgroundImage: "url('/background-image.png')" }}>
        <FadeIn className="flex flex-col items-left justify-left px-10 py-20 lg:p-20 gap-5">
          <div className="text-3xl text-[var(--hero-text-color)] font-bold sm:w-full lg:w-[30%]">Computer Science Student and Aspiring Backend Developer</div>
          <div className="text-lg text-[var(--hero-text-color)] sm:w-full lg:w-[30%]">Tech enthusiast and software developer who loves turning ideas into functional applications</div>
          <Button asChild className="bg-[var(--dark-color)] text-white max-w-[150px] rounded-full px-4 py-2">
            <motion.a href="#projects" className="transition-transform duration-300 hover:-translate-y-1" onClick={(e) => { e.preventDefault(); handleScroll('projects');}}>Projects</motion.a>
          </Button>
        </FadeIn>
      </div>
    )
}

export default Hero