import HomeSlider from "@/components/HomeSlider";

const techStack = ["Next.js", "React", "TypeScript", "AWS", "Azure", "Terraform", "Node.js"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080810] text-slate-900 dark:text-white overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-50 dark:opacity-30 pointer-events-none" />

        {/* Gradient orbs */}
        <div className="absolute top-1/3 left-1/4 h-[480px] w-[480px] rounded-full bg-sky-400/20 dark:bg-sky-500/10 blur-[120px] animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-[380px] w-[380px] rounded-full bg-indigo-400/20 dark:bg-indigo-500/10 blur-[100px] animate-float-slow pointer-events-none" style={{ animationDelay: "3s" }} />

        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 mb-10 shadow-sm animate-fade-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Available for collaboration</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black leading-[0.95] tracking-tighter mb-8">
            <span className="block text-slate-900 dark:text-white">Building</span>
            <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x">
              the future
            </span>
            <span className="block text-slate-900 dark:text-white">of the web.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            Cloud architect &amp; front-end craftsman. I build elegant, resilient products that scale with confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-8 py-4 text-sm font-bold text-white dark:text-slate-900 shadow-xl shadow-slate-900/20 dark:shadow-white/10 transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Read the blog
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 dark:border-slate-700 px-8 py-4 text-sm font-bold text-slate-700 dark:text-slate-300 transition-all hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
            >
              Get in touch
            </a>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 px-3.5 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 transition hover:border-sky-300 dark:hover:border-sky-700 hover:text-sky-700 dark:hover:text-sky-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Scroll</span>
          <div className="h-10 w-5 rounded-full border-2 border-slate-400 flex items-start justify-center p-1">
            <div className="h-2 w-1 rounded-full bg-slate-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── Bento grid ────────────────────────────────── */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto">

            {/* About — large */}
            <div className="sm:col-span-2 relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 shadow-sm group hover:shadow-xl transition-shadow">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-400/20 blur-2xl" />
              <p className="text-xs font-black uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3">About</p>
              <h2 className="text-3xl font-black mb-4 tracking-tight">Hi, I&apos;m <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Vyomak.</span></h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-lg">
                Technology enthusiast and cloud solutions developer. I care deeply about elegant experiences
                and reliable systems, distilling complex ideas into actionable steps teams can actually use.
              </p>
              <div className="flex gap-8">
                {[{ n: "5+", l: "Years exp." }, { n: "20+", l: "Projects" }, { n: "3", l: "Cloud certs" }].map((s) => (
                  <div key={s.l}>
                    <p className="text-3xl font-black text-slate-900 dark:text-white">{s.n}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wide mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud focus — gradient */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 p-8 text-white shadow-xl">
              <div className="absolute -right-8 -bottom-8 h-36 w-36 rounded-full bg-white/10" />
              <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-white/10" />
              <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-4">Focus</p>
              <h3 className="text-2xl font-black mb-3 leading-tight">Cloud Strategy</h3>
              <p className="text-white/75 text-sm leading-relaxed">Cost-aware, secure, and scalable infrastructure solutions.</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-white/80">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                Actively building
              </div>
            </div>

            {/* Status */}
            <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Current status</p>
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xl font-black">Available</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Open to interesting projects and collaborations worldwide.</p>
            </div>

            {/* Tooling — dark */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-slate-800 p-8 text-white shadow-sm">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-500/20 blur-xl" />
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Tooling</p>
              <h3 className="text-2xl font-black mb-3">Next.js &amp; React</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Performance-first front-end craft with modern tooling.</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {["TypeScript", "Tailwind", "Vitest"].map((t) => (
                  <span key={t} className="rounded-full bg-slate-700 px-2.5 py-1 text-xs font-semibold text-slate-300">{t}</span>
                ))}
              </div>
            </div>

            {/* Approach — emerald */}
            <div className="relative overflow-hidden rounded-3xl bg-emerald-500 p-8 text-white shadow-sm">
              <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-white/10" />
              <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-4">Approach</p>
              <h3 className="text-2xl font-black mb-3">Pragmatic DX</h3>
              <p className="text-white/80 text-sm leading-relaxed">Clear patterns, maintainable systems, and measurable impact.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Slider ────────────────────────────────────── */}
      <div className="bg-white dark:bg-[#080810]">
        <HomeSlider />
      </div>

      {/* ── Contact ───────────────────────────────────── */}
      <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 dark:bg-slate-900 p-12 md:p-16 shadow-2xl">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
            {/* Orbs */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Get in touch</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                Let&apos;s build something <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">impactful.</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
                Have questions, ideas, or a project in mind? I love collaborating on thoughtful, human-centered products.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:contact@vyomak.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email me
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-700 px-8 py-4 text-sm font-bold text-slate-300 transition-all hover:-translate-y-1 hover:border-slate-500 hover:text-white"
                >
                  Read the blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
