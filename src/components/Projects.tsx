const projects = [
  {
    title: "Compliance Azure",
    description:
      "A multi-agent AI system for automated Azure cloud compliance auditing. Uses AI agents to scan Azure resources, evaluate them against security policies, generate detailed compliance reports, and suggest remediation steps — streamlining cloud governance workflows.",
    tags: ["LangGraph", "LangSmith", "FastAPI", "Azure", "Azure Video Indexer", "Azure AI Search"],
    github: "https://github.com/Shaurya23102/compliance_azure",
    gradient: "from-blue-500 to-indigo-600",
    icon: "🛡️",
  },
  {
    title: "Insurance Claim Agent",
    description:
      "An AI-powered insurance claim processing agent that automates the end-to-end claim lifecycle. Leverages LLM-based reasoning to extract information from claim documents, validate policy terms, assess damage, and produce structured claim decisions with explanations.",
    tags: ["RAG", "LangChain", "Fine-tuning", "Hugging Face", "HNSW", "Redis", "Semantic Caching", "FastAPI", "Docker"],
    github: "https://github.com/Shaurya23102/Insurance_claim_agent",
    gradient: "from-emerald-500 to-teal-600",
    icon: "📋",
  },
  {
    title: "Grading Handwritten Notes",
    description:
      "A fine-tuned vision model that grades handwritten student notes automatically. Uses transfer learning and fine-tuning techniques on vision transformers to understand handwriting quality, content accuracy, and organization, providing objective and consistent grading at scale.",
    tags: ["Python", "Qwen2.5-7B-Instruct", "LoRA", "LLM Finetuning", "PRM", "SymPy", "OpenCV", "Tesseract"],
    github:
      "https://github.com/Shaurya23102/Grading_Handwritten_Notes_Using_Fine-tuning",
    gradient: "from-orange-500 to-amber-600",
    icon: "📝",
  },
  {
    title: "Crop Identification & Area Mapping",
    description:
      "A geospatial AI pipeline for crop identification and area estimation using satellite imagery. Applies remote sensing techniques and machine learning classifiers to map agricultural land use, identify crop types, and calculate cultivation areas for agricultural planning.",
    tags: ["ResNet-18", "SIFT", "Gated Fusion", "MobileSAM"],
    github:
      "https://github.com/Shaurya23102/Crop-Identification-and-area-mapping",
    gradient: "from-green-500 to-lime-600",
    icon: "🌾",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[var(--color-surface)]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flagship <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto">
            A showcase of projects spanning AI agents, computer vision,
            geospatial analysis, and cloud security.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="h-full rounded-2xl bg-[var(--color-surface)] border border-white/5 p-8 transition-all duration-500 hover:border-white/10 hover:bg-[var(--color-surface-hover)] glow">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{project.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary-light)] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-[var(--color-muted)] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>

                {/* Description */}
                <p className="text-[var(--color-muted)] leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-[var(--color-muted)] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Gradient accent bar */}
                <div
                  className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${project.gradient} rounded-full mt-6 transition-all duration-500`}
                />
              </div>
            </a>
          ))}
        </div>

        {/* View all repos link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Shaurya23102?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-primary-light)] hover:text-white transition-colors"
          >
            View all 31+ repositories on GitHub
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
