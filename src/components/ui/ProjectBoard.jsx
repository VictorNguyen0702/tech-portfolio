import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Github } from "lucide-react";

const projects = [
  {
    name: "Tower Defense Game",
    description: "A tower defense game based off BTD5",
    link: "https://github.com/VictorNguyen0702/Tower-Defense-Game",
    tech: ["Java", "Processing"]
  },
  {
    name: "PriceBite",
    description: "An AI powered app to search economical options for grocery shopping",
    link: "https://github.com/yunz-dev/pricebite",
    tech: ["Java", "Python", "Javascript", "SpringBoot", "React"]
  },
  {
    name: "Yet Another WishList (YAWL)",
    description: "A wishlist website for users to save gift ideas",
    link: "https://github.com/Monkieeboi/yawl",
    tech: ["Javascript", "Express", "React"]
  },

];

const ProjectBoard = () => {

  return (
    <div className="px-10 lg:px-20 py-10 bg-white w-full mx-auto">
      <h2 className="text-2xl text-[var(--dark-color)] font-semibold mb-8 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
            <Card key={index} className="w-[90%] mx-auto border-0 rounded-xl shadow-lg hover:scale-110 transition-transform bg-[var(--light-color)]">
            <div className="h-[25vh] w-full overflow-hidden rounded-t-xl">
              <img src="imgs/github-project.png" alt={project.name} className="w-full h-full object-cover brightness-10 hover:brightness-100 transition"/>
            </div>
            <CardContent className="text-center p-4">
              <h3 className="text-lg font-bold text-[var(--dark-color)]">{project.name}</h3>
              <p className="text-sm text-[var(--dark-color)]">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {project.tech.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs font-medium text-white bg-[var(--dark-color)] rounded-full">{tech}</span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-4">
              <Button asChild className="bg-[var(--dark-color)] text-white w-[30%] rounded-full px-4 py-2 transition hover:brightness-75">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-5 lg:my-24 gap-5">
        <p>To see other projects, check out my GitHub</p>
        <a href="https://github.com/VictorNguyen0702" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-3 justify-center items-center w-[150px]">
          <Button className="bg-[var(--dark-color)] text-white w-full rounded-full px-4 py-2 transition hover:brightness-75">
            <img src="imgs/Other/github.svg" alt="github" className="text-[var(--light-color)] w-6"/>
            <p>Github</p>
          </Button>
        </a>

      </div>

    </div>
  )
}

export default ProjectBoard;