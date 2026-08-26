export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Avatar & quick info */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl overflow-hidden gradient-border glow">
                <img
                  src="https://avatars.githubusercontent.com/u/180048545?v=4"
                  alt="Shaurya Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { icon: "🎓", text: "IIIT Naya Raipur" },
                { icon: "📍", text: "India" },
                { icon: "💻", text: "31+ Repositories" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-[var(--color-muted)]"
                >
                  {item.icon} {item.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              I&apos;m a passionate <span className="text-white font-medium">AI/ML enthusiast</span> and{" "}
              <span className="text-white font-medium">full-stack developer</span> currently
              pursuing my B.Tech at IIIT Naya Raipur. I love building systems
              that sit at the intersection of artificial intelligence and
              practical software engineering.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              My work spans from developing{" "}
              <span className="text-white font-medium">
                multi-agent AI systems
              </span>{" "}
              for cloud compliance and insurance processing, to fine-tuning
              vision models for educational grading and building{" "}
              <span className="text-white font-medium">
                geospatial crop identification
              </span>{" "}
              pipelines using satellite imagery.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              I thrive on solving real-world problems with code and AI — whether
              it&apos;s automating Azure policy checks, intelligently processing
              insurance claims, or mapping crop areas from space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
