import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Tower Defense Game",
    description: "A tower defense game based off BTD5",
    image: "imgs/TowerDefence.png",
    link: "https://github.com/VictorNguyen0702/Tower-Defense-Game"
  },
  {
    name: "PriceBite",
    description: "An AI powered app to search economical options for grocery shopping",
    image: "imgs/project-filler.png",
    link: "https://github.com/yunz-dev/pricebite"
  },
  {
    name: "Yet Another WishList (YAWL)",
    description: "A wishlist website for users to save gift ideas",
    image: "imgs/project-filler.png",
    link: "https://github.com/Monkieeboi/yawl"
  },

];

const ProjectBoard = () => {

  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 bg-[var(--light-color)] rounded-xl border border-neutral-800 text-white w-full max-w-[full]">
      <h2 className="text-base text-[var(--dark-color)] sm:text-lg md:text-xl font-bold flex items-center gap-2">
        <p className="">Personal Projects</p>
      </h2>
      
      <p className="text-sm sm:text-base md:text-lg text-[var(--dark-color)] leading-relaxed">
        Some projects I've worked on are...
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="w-full max-w-lg mx-auto border border-gray-700 rounded-xl shadow-lg hover:scale-105 transition-transform bg-[var(--light-color)]">
            <div className="h-48 sm:h-56 md:h-64 lg:h-72 w-full overflow-hidden rounded-t-xl">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover brightness-90 hover:brightness-100 transition"/>
            </div>
            <CardContent className="text-center p-4">
              <h3 className="text-lg font-bold text-[var(--dark-color)]">{project.name}</h3>
              <p className="text-sm text-[var(--dark-color)]">{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-center p-4">
              <Button asChild className="bg-[var(--dark-color)] text-white rounded-full px-4 py-2 transition hover:brightness-75">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap 4"></div>
    </div>
  )
}

export default ProjectBoard;