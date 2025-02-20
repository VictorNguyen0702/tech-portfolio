"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <div className="w-full max-w-lg mx-auto mt-5">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="p-2">
              <Card className="max-w-md mx-auto border border-gray-700 rounded-xl shadow-lg hover:scale-105 transition-transform bg-[var(--light-color)]">

                <div className="h-56 w-full overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover brightness-90 hover:brightness-100 transition"
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
        <CarouselPrevious className="bg-white text-black hover:bg-gray-300" />
        <CarouselNext className="bg-white text-black hover:bg-gray-300" />
      </Carousel>
    </div>
  );
};

export default PortfolioCarousel;
