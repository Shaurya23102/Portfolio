export default function About() {
  const achievements = [
    {
      icon: "🏆",
      title: "Amazon ML Challenge 2024",
      detail:
        "Top 1000 rank out of 70,000+ participants nationwide in entity extraction from product images and descriptions.",
    },
    {
      icon: "🥷",
      title: "NeetCode",
      detail: "Ranked in the Top 10% of users on NeetCode.",
    },
    {
      icon: "🐍",
      title: "HackerRank Python",
      detail:
        "5-star Gold badge; solved 200+ challenges across data structures and algorithms on different platforms.",
    },
    {
      icon: "🗄️",
      title: "HackerRank SQL",
      detail:
        "5-star Gold badge; solved 100+ questions across different platforms.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Avatar & achievements */}
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

            <div className="w-full space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 text-center md:text-left">
                Achievements
              </h3>
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <span className="text-xl leading-none mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="text-sm text-[var(--color-muted)] leading-snug">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              I&apos;m an <span className="text-white font-medium">AI engineer</span> focused on{" "}
              <span className="text-white font-medium">generative AI</span> and agentic
              systems, currently pursuing my B.Tech at IIIT Naya Raipur. I build
              production-grade LLM applications, from RAG pipelines to tool-using
              agents, and ship them like real software.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              My work spans{" "}
              <span className="text-white font-medium">
                multi-agent systems with LangGraph and MCP
              </span>{" "}
              for cloud compliance and insurance claims, plus LoRA fine-tuning of
              vision models for educational grading, backed by{" "}
              <span className="text-white font-medium">
                PostgreSQL, Redis and vector databases
              </span>{" "}
              for state, caching and retrieval.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              I care about what happens after the notebook: tracing and evaluating
              agents with <span className="text-white font-medium">LangSmith</span>,
              serving with FastAPI, containerizing with Docker, deploying on Azure, and
              automating releases with CI/CD so AI systems are reliable and observable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
