import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 tech-bg">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 subtle-grid pointer-events-none" />

      {/* Subtle top ambient beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Photo Card */}
          <div className="md:col-span-5 flex justify-center md:justify-start order-1">
            <div className="relative group">
              {/* Subtle ambient halo */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500/30 via-cyan-500/20 to-purple-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              <div className="relative w-64 h-80 sm:w-72 sm:h-92 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 bg-[#12141f] shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Shaurya Kumar"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-60" />

                {/* Floating status pill */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#090a0f]/85 backdrop-blur-md border border-white/10 text-xs">
                  <span className="flex items-center gap-2 text-slate-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to opportunities
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">IIITNR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Information */}
          <div className="md:col-span-7 text-center md:text-left order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              AI/ML Engineer & Systems Developer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Shaurya Kumar</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal mb-4">
              Building intelligent AI agents, fine-tuned models & cloud-scale systems.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Student at <span className="text-slate-200 font-semibold">IIIT Naya Raipur</span> focusing 
              on turning state-of-the-art LLMs, multi-agent workflows, computer vision, and geospatial AI 
              into robust, production-grade applications.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium text-sm hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                Explore Projects
              </a>
              <a
                href="#skills"
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Skills & Tech
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl text-slate-400 hover:text-white transition-colors text-sm font-medium"
              >
                Contact Me →
              </a>
            </div>

            {/* Key stats row */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/5 max-w-lg mx-auto md:mx-0">
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">31+</div>
                <div className="text-xs text-slate-400">GitHub Repos</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl font-bold text-indigo-400 font-mono">Top 1000</div>
                <div className="text-xs text-slate-400">Amazon ML &apos;24</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">3rd Year</div>
                <div className="text-xs text-slate-400">B.Tech IIITNR</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
