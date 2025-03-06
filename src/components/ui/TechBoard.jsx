import { Card } from "@/components/ui/card";
import {Code, Database, Server} from "lucide-react";

export default function Technologies() {

  const frontend = [
    { name: "JavaScript", icon: "/imgs/TechBoard/javascript.png" },
    { name: "HTML", icon: "/imgs/TechBoard/html.png" },
    { name: "Tailwind CSS", icon: "/imgs/TechBoard/tailwindcss.png" },
    { name: "Next.js", icon: "/imgs/TechBoard/nextjs.png" },
    { name: "React", icon: "/imgs/TechBoard/react.png" },
    {}
  ]

  const backend = [
    { name: "Python", icon: "/imgs/TechBoard/python.png" },
    { name: "Java", icon: "/imgs/TechBoard/java.png" },
    { name: "C", icon: "/imgs/TechBoard/c.png" },
    { name: "Express", icon: "/imgs/TechBoard/express.png" },
    { name: "FastAPI", icon: "/imgs/TechBoard/fastapi.png" },
    { name: "SpringBoot", icon: "/imgs/TechBoard/springboot.png"}
  ]

  const tools = [
    { name: "MongoDB", icon: "/imgs/TechBoard/mongodb.png" },
    { name: "SQL", icon: "/imgs/TechBoard/sql.png" },
    { name: "AWS (Learning)", icon: "/imgs/TechBoard/aws.png" },
    {},
    {},
    {}
  ]

  return (
      <div className="px-20 pt-10 pb-20 bg-[var(--hero-color)] w-full mx-auto">
        <h2 className="text-2xl text-[var(--dark-color)] font-semibold mb-8 text-center">
          Technologies and Skills
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Card id="frontend" className="flex flex-col px-7 py-7 gap-2">
            <Code />
            <h3 className="text-lg text-[var(--dark-color)] font-semibold">Frontend</h3>
            <div id="frontend-tech" className="flex flex-col gap-2">
              {frontend.map((item, index) => (
                <div key={index} className="flex flex-row">
                  {item.name}
                </div>
              ))}
            </div>
          </Card>
          <Card id="backend" className="flex flex-col px-7 py-7 gap-2">
            <Server />
            <h3 className="text-lg text-[var(--dark-color)] font-semibold">Backend</h3>
            <div id="backend-tech" className="flex flex-col gap-2">
              {backend.map((item, index) => (
                <div key={index} className="flex flex-row">
                  {item.name}
                </div>
              ))}
            </div>
          </Card>
          <Card id="tools" className="flex flex-col px-7 py-7 gap-2">
            <Database />
            <h3 className="text-lg text-[var(--dark-color)] font-semibold">Tools</h3>
            <div id="tools-tech" className="flex flex-col gap-2">
              {tools.map((item, index) => (
                <div key={index} className="flex flex-row">
                  {item.name}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
  );
}
