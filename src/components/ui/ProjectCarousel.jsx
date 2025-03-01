"use client";

import React, { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Yet Another WishList (YAWL)",
    description: "A wishlist website for users to save gift ideas",
    image: "imgs/project-filler.png",
    link: "https://github.com/Monkieeboi/yawl"
  },
  {
    name: "League Tracker",
    description: "A website to track League of Legends leaderboards",
    image: "imgs/project-filler.png",
    link: "https://github.com/VictorNguyen0702/League-Tracker"
  },
  {
    name: "Tower Defense Game",
    description: "A tower defense game based off BTD5",
    image: "imgs/TowerDefence.png",
    link: "https://github.com/VictorNguyen0702/Tower-Defense-Game"
  }
];

const PortfolioCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const carouselRef = useRef(null);



  return (
    <div className="w-full overflow-visible">
      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[plugin.current]}
        className="w-full"
        setApi={(api) => {
          if (api && !carouselRef.current) {
            carouselRef.current = api;
            setSelectedIndex(api.selectedScrollSnap());
          }
        }}
      >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="w-full overflow-visible">
            <Card className="w-full border border-gray-700 rounded-xl shadow-lg hover:scale-95 transition-transform bg-[var(--light-color)] overflow-visible">
              <div className="h-48 sm:h-56 md:h-64 lg:h-72 w-full visible rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-t-xl brightness-90 hover:brightness-100 transition"
                />
              </div>
              <CardContent className="text-center p-4">
                <h3 className="text-lg font-bold text-[var(--dark-color)]">{project.name}</h3>
                <p className="text-sm text-[var(--dark-color)]">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-center p-4">
                <Button
                  asChild
                  className="bg-[var(--dark-color)] text-white rounded-full px-4 py-2 transition hover:brightness-75"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => carouselRef.current && carouselRef.current.scrollTo(index)}
            className="h-3 w-3 rounded-full transition bg-gray-500 hover:bg-gray-700"
          />
        ))}
      </div>
    </div>

  );
};

export default PortfolioCarousel;
