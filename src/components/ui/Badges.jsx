import { Code, Database, Globe, Server, Terminal } from "lucide-react";

const technologies = ["20 y/o", "3rd year", "USYD", "Computer Sci. Major", "Data Sci. Minor"];

export default function Badges() {
  return (
    <div className="flex flex-wrap justify-center w-full gap-2 bg-[var(--dark-color)] p-4 rounded-xl">
      {technologies.map((tech, index) => (
        <div key={index} className="flex items-center gap-2 px-3 py-2 bg-[var(--grey-color)] text-[var(--dark-color)] rounded-full text-sm font-medium">
          {tech}
        </div>
      ))}
    </div>
  );
}
