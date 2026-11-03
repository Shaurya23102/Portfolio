"use client";

import { useState } from "react";

type Skill = {
  name: string;
  score: number; // out of 10
};

type Subcategory = {
  name: string;
  skills: Skill[];
};

type Category = {
  id: string;
  title: string;
  icon: string;
  subcategories: Subcategory[];
};

const skillData: Category[] = [
  {
    id: "aiml",
    title: "AI / ML",
    icon: "🧠",
    subcategories: [
      {
        name: "Core ML",
        skills: [
          { name: "Machine Learning", score: 8 },
          { name: "Deep Learning", score: 7 },
          { name: "NLP", score: 8 },
          { name: "Transformers", score: 7 },
        ],
      },
      {
        name: "Data & Numerics",
        skills: [
          { name: "NumPy", score: 8 },
          { name: "Pandas", score: 8 },
          { name: "PyTorch", score: 7 },
        ],
      },
      {
        name: "LLM Frameworks",
        skills: [
          { name: "LangChain", score: 8 },
          { name: "LangGraph", score: 8 },
          { name: "LlamaIndex", score: 8 },
        ],
      },
      {
        name: "Retrieval",
        skills: [
          { name: "RAG", score: 9 },
          { name: "GraphRAG", score: 6 },
        ],
      },
      {
        name: "Agents & Tooling",
        skills: [
          { name: "Agentic AI", score: 8 },
          { name: "FastMCP", score: 8 },
          { name: "Prompt Engineering", score: 9 },
        ],
      },
      {
        name: "Fine-tuning",
        skills: [{ name: "LLM Fine-tuning", score: 8 }],
      },
      {
        name: "LLMOps & Observability",
        skills: [
          { name: "LLMOps", score: 7 },
          { name: "LangSmith", score: 8 },
        ],
      },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Tools",
    icon: "🛠️",
    subcategories: [
      {
        name: "Backend & Apps",
        skills: [
          { name: "FastAPI", score: 8 },
          { name: "Streamlit", score: 8 },
          { name: "JSON Handling", score: 9 },
        ],
      },
      {
        name: "Containers & Cloud",
        skills: [
          { name: "Docker", score: 8 },
          { name: "Azure", score: 7 },
        ],
      },
      {
        name: "Version Control & CI/CD",
        skills: [
          { name: "Git", score: 9 },
          { name: "GitHub", score: 9 },
          { name: "GitHub Actions", score: 8 },
          { name: "CI/CD", score: 8 },
        ],
      },
      {
        name: "Testing & Automation",
        skills: [
          { name: "Pytest", score: 8 },
          { name: "n8n", score: 7 },
        ],
      },
      {
        name: "Tools & Model Hub",
        skills: [
          { name: "Hugging Face", score: 7 },
          { name: "VS Code", score: 9 },
        ],
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & Retrieval",
    icon: "🗄️",
    subcategories: [
      {
        name: "Relational",
        skills: [
          { name: "SQL", score: 8 },
          { name: "PostgreSQL", score: 7 },
          { name: "SQLite", score: 7 },
        ],
      },
      {
        name: "Caching",
        skills: [{ name: "Redis", score: 8 }],
      },
      {
        name: "Vector Stores",
        skills: [
          { name: "ChromaDB", score: 8 },
          { name: "FAISS", score: 7 },
        ],
      },
      {
        name: "Search & Indexing",
        skills: [
          { name: "HNSW", score: 9 },
          { name: "Azure AI Search", score: 7 },
        ],
      },
      {
        name: "Graph",
        skills: [{ name: "Neo4j", score: 7 }],
      },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: "💻",
    subcategories: [
      {
        name: "Programming Languages",
        skills: [
          { name: "Python", score: 9 },
          { name: "SQL", score: 7 },
          { name: "C++", score: 7 },
        ],
      },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("aiml");

  const currentCategory = skillData.find((cat) => cat.id === activeTab) || skillData[0];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono mb-3">
            <span>⚡ Technical Proficiency</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Hands-on expertise benchmarked across machine learning, frameworks, databases, and languages.
          </p>
        </div>

        {/* Category Tabs to ensure it fits compactly in a single screen */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillData.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/30"
                    : "bg-[#11131c] text-slate-400 hover:text-slate-200 hover:bg-[#171926] border border-white/5"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-white/5 text-slate-500"
                  }`}
                >
                  {cat.subcategories.reduce((acc, sub) => acc + sub.skills.length, 0)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display: Compact Multi-column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCategory.subcategories.map((subcat) => (
            <div
              key={subcat.name}
              className="rounded-xl bg-[#11131c]/90 border border-white/5 p-4.5 hover:border-indigo-500/30 transition-all duration-200 shadow-sm"
            >
              {/* Subcategory title */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                  {subcat.name}
                </h3>
                <span className="text-[11px] text-slate-500 font-mono">
                  {subcat.skills.length} {subcat.skills.length === 1 ? "skill" : "skills"}
                </span>
              </div>

              {/* Skill Bars */}
              <div className="space-y-3.5">
                {subcat.skills.map((skill) => {
                  const percentage = (skill.score / 10) * 100;
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1.5 font-mono">
                          <span className="text-white font-semibold">
                            {skill.score}
                          </span>
                          <span className="text-slate-500 text-[10px]">/ 10</span>
                        </div>
                      </div>

                      {/* Progress bar container */}
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-400 transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quick summary footer note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Ratings represent practical development and production project proficiency (out of 10).
          </p>
        </div>

      </div>
    </section>
  );
}
