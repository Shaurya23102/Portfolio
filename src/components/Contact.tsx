export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[var(--color-surface)]/50"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <p className="text-lg text-[var(--color-muted)] mb-10 max-w-xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of something amazing. Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/Shaurya23102"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--color-surface)] border border-white/5 hover:border-white/15 transition-all duration-300 glow"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <div className="text-left">
              <p className="text-sm text-[var(--color-muted)]">GitHub</p>
              <p className="text-white font-medium">@Shaurya23102</p>
            </div>
          </a>

          <a
            href="mailto:shaurya23102@iiitnr.edu.in"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--color-surface)] border border-white/5 hover:border-white/15 transition-all duration-300 glow"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="text-left">
              <p className="text-sm text-[var(--color-muted)]">Email</p>
              <p className="text-white font-medium">shauryakumar1122@gmail.com</p>
            </div>
          </a>
        </div>

        <div className="mt-16">
          <a
            href="mailto:shaurya23102@iiitnr.edu.in"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-indigo-500/25"
          >
            Say Hello 👋
          </a>
        </div>
      </div>
    </section>
  );
}
