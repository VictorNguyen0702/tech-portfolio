import { Card, CardContent } from "@/components/ui/card";
import { Link } from "lucide-react";

const techStack = [
  { name: "Next.js", version: "15+", icon: "/imgs/TechStack/nextjs.png", link: "https://nextjs.org/" },
  { name: "ShadCN", version: "", icon: "/imgs/TechStack/shadcn.png", link: "https://ui.shadcn.com/" },
  { name: "FastAPI", version: "0.115.8", icon: "/imgs/TechStack/fastapi.png", link: "https://fastapi.tiangolo.com/" },
  { name: "MongoDB", version: "8.0.4", icon: "/imgs/TechStack/mongo.png", link: "https://www.mongodb.com/" },
];

export default function TechStack() {
  return (
<div className="p-6 md:p-8 bg-[var(--light-color)] rounded-xl border border-neutral-800 text-white w-full max-w-[90vw] sm:max-w-lg mx-auto">
{/* Header */}
      <h2 className="text-xl font-bold flex items-center gap-2">
        <span>🛠️</span>
        <p className= "text-[var(--dark-color)]">My Tech Stack</p>
      </h2>
      <p className="text-sm text-[var(--dark-color)]">My most used tech stack for projects:</p>

      {/* Grid for Tech Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3 mt-4 ">
        {techStack.map((tech, index) => (
          <a href={tech.link} key={index} target="_blank" rel="noopener noreferrer" className="text-[var(--light-color)]">
            < Card className="bg-[var(--dark-color)] border border-neutral-800 rounded-lg hover:shadow-lg hover:shadow-gray-700 flex items-center justify-between p-4 h-20">
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                <div>
                  <p className="text-lg font-medium text-[var(--light-color)]">{tech.name}</p>
                  {tech.version && <p className="text-sm text-neutral-400">Version {tech.version}</p>}
                </div>
              </div>
            <Link className="w-4 h-4 text-[var(--light-color)]" />
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
