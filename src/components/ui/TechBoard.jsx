import { Card } from "@/components/ui/card";
import { Code, Database, Server, Wrench } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
export default function Technologies() {

  const frontend = [
    { name: "JavaScript"},
    { name: "HTML"},
    { name: "Tailwind CSS"},
    { name: "Next.js"},
    { name: "React"},
    {}
  ]

  const backend = [
    { name: "Python"},
    { name: "Java"},
    { name: "C"},
    { name: "Express"},
    { name: "FastAPI"},
    { name: "SpringBoot"}
  ]

  const tools = [
    { name: "Docker"},
    { name: "GitHub"},
    { name: "GitHub Actions"},
    { name: "MongoDB"},
    { name: "SQL"},
    { name: "AWS (Learning)"}

  ]

  return (
      <div className="px-10 lg:px-20 pt-10 pb-20 bg-snowMid2 w-full mx-auto">
        <FadeIn className="">

          <h2 className="flex flex-row gap-5 items-center justify-center text-2xl text-[var(--dark-color)] font-semibold mb-8 text-center">
            <Wrench />
            Technologies and Skills
          </h2>
    
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <Card id="frontend" className="flex flex-col px-7 py-7 gap-2 bg-snowDark">
              <Code />
              <h3 className="text-lg text-[var(--dark-color)] font-semibold">Frontend</h3>
              <div id="frontend-tech" className="flex flex-col gap-2 text-[var(--dark-color)]">
                {frontend.map((item, index) => (
                  <div key={index} className="flex flex-row ">
                    {item.name}
                  </div>
                ))}
              </div>
            </Card>
            <Card id="backend" className="flex flex-col px-7 py-7 gap-2 bg-snowDark">
              <Server />
              <h3 className="text-lg text-[var(--dark-color)] font-semibold">Backend</h3>
              <div id="backend-tech" className="flex flex-col gap-2 text-[var(--dark-color)]">
                {backend.map((item, index) => (
                  <div key={index} className="flex flex-row">
                    {item.name}
                  </div>
                ))}
              </div>
            </Card>
            <Card id="tools" className="flex flex-col px-7 py-7 gap-2 bg-snowDark">
              <Database />
              <h3 className="text-lg text-[var(--dark-color)] font-semibold">Tools</h3>
              <div id="tools-tech" className="flex flex-col gap-2 text-[var(--dark-color)]">
                {tools.map((item, index) => (
                  <div key={index} className="flex flex-row">
                    {item.name}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </FadeIn>
      </div>
  );
}
