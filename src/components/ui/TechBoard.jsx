export default function Technologies() {
  const langAndFrame = [
    { name: "Python", icon: "/imgs/TechBoard/python.png" },
    { name: "Java", icon: "/imgs/TechBoard/java.png" },
    { name: "C", icon: "/imgs/TechBoard/c.png" },
    { name: "JavaScript", icon: "/imgs/TechBoard/javascript.png" },
    { name: "HTML", icon: "/imgs/TechBoard/html.png" },
    { name: "Tailwind CSS", icon: "/imgs/TechBoard/tailwindcss.png" },
    { name: "Next.js", icon: "/imgs/TechBoard/javascript.png" },
    { name: "React", icon: "/imgs/TechBoard/react.png" },
    { name: "Express", icon: "/imgs/TechBoard/express.png" },
    { name: "FastAPI", icon: "/imgs/TechBoard/fastapi.png" },
    { name: "MongoDB", icon: "/imgs/TechBoard/mongodb.png" },
    { name: "SQL", icon: "/imgs/TechBoard/sql.png" },
  ];

  return (
      <div className="p-6 md:p-8 bg-[var(--light-color)] rounded-xl border border-neutral-800 w-full max-w-[90vw] sm:max-w-lg mx-auto">

        <h3 className="text-2xl text-[var(--dark-color)] font-semibold mb-8 text-center">
          Languages and Frameworks
        </h3>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 gap-2">
          {langAndFrame.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-2 bg-[var(--dark-color)] rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 object-contain"
              />
              <p className="mt-3 text-sm text-white">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
  );
}
