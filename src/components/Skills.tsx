const skillCategories = [
  {
    title: "AI / ML",
    icon: "🧠",
    skills: [
      "Large Language Models",
      "Fine-tuning",
      "Computer Vision",
      "NLP",
      "Multi-Agent Systems",
      "Deep Learning",
      "Transfer Learning",
      "PyTorch",
    ],
  },
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: ["Azure", "Docker", "Git", "GitHub Actions", "REST APIs"],
  },
  {
    title: "Frameworks & Tools",
    icon: "🛠️",
    skills: [
      "Next.js",
      "React",
      "FastAPI",
      "LangChain",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  {
    title: "Data & Geospatial",
    icon: "🌍",
    skills: [
      "Remote Sensing",
      "GIS",
      "Satellite Imagery",
      "Pandas",
      "NumPy",
      "OpenCV",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-[var(--color-surface)] border border-white/5 p-6 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-[var(--color-muted)] hover:text-white hover:bg-[var(--color-primary)]/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
