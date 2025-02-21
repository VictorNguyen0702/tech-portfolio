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
    <section className="text-[var(--dark-color)] py-20">
      <div className="max-w-5xl mx-auto px-6 py-10 bg-[var(--light-color)] rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-center">Technologies</h2>
        <p className="text-center text-gray-600 mb-10">
          Languages, Frameworks, and tools I have worked with.
        </p>

        <h3 className="text-2xl font-semibold mb-8 text-center">
          Languages and Frameworks
        </h3>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {langAndFrame.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-[var(--dark-color)] rounded-lg shadow-md hover:scale-110 transition-transform"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 object-contain"
              />
              <p className="mt-3 text-sm text-white">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
