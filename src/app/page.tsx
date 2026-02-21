import HomeSlider from "@/components/HomeSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-slate-900 dark:text-white">

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Animated mesh background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.08),transparent)]" />
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-sky-200/30 dark:bg-sky-900/20 blur-3xl" />
          <div className="absolute top-20 right-1/4 h-80 w-80 rounded-full bg-indigo-200/30 dark:bg-indigo-900/20 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="max-w-3xl space-y-8">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 dark:border-sky-800/60 bg-sky-50/80 dark:bg-sky-950/60 px-4 py-1.5 text-sm font-medium text-sky-700 dark:text-sky-400 backdrop-blur-sm shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 animate-pulse" />
              Technology &amp; Cloud Solutions
            </span>

            {/* Headline with gradient */}
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight">
              Crafting{" "}
              <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                elegant,
              </span>{" "}
              resilient experiences.
            </h1>

            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
              I explore cloud architecture, front-end craftsmanship, and developer experience. Here you'll find ideas,
              guides, and practical notes from building secure, scalable products.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 dark:shadow-sky-900/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/30"
              >
                View the blog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-7 py-3.5 text-sm font-semibold text-slate-800 dark:text-white backdrop-blur-sm shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md"
              >
                Contact me
              </a>
            </div>

            {/* Stats row */}
            <div className="grid gap-4 sm:grid-cols-3 pt-4">
              {[
                { label: "Focus", title: "Cloud Strategy", desc: "Cost-aware, secure, and scalable solutions." },
                { label: "Tooling", title: "Next.js & React", desc: "Performance-first front-end craft." },
                { label: "Approach", title: "Pragmatic DX", desc: "Clear patterns and maintainable systems." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-slate-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm backdrop-blur-sm transition hover:border-sky-200 dark:hover:border-sky-800 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-1">{card.label}</p>
                  <p className="text-base font-bold text-slate-900 dark:text-white">{card.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slider */}
      <HomeSlider />

      {/* About */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">About</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                  Vyomak.
                </span>
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                I'm a technology enthusiast and cloud solutions developer who cares about elegant experiences and
                reliable systems. I enjoy distilling complex ideas into actionable steps teams can use.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "What I share",
                    desc: "Architectural notes, front-end patterns, deployment playbooks, and learnings from real-world builds.",
                  },
                  {
                    title: "How I work",
                    desc: "Collaborative, experiment-friendly, and focused on measurable impact with thoughtful polish.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5"
                  >
                    <p className="text-sm font-bold text-slate-800 dark:text-white">{c.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-500/10 to-indigo-500/10 blur-xl" />
              <div className="relative rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white grid place-items-center text-2xl font-bold shadow-lg shadow-sky-500/30">
                    V
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Technology Enthusiast</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">Cloud &amp; Web</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    { color: "bg-sky-500", text: "Designing scalable architectures with sensible guardrails and observability." },
                    { color: "bg-indigo-500", text: "Building performant interfaces that balance clarity, accessibility, and delight." },
                    { color: "bg-emerald-500", text: "Translating lessons learned into guides, templates, and repeatable playbooks." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${item.color}`} />
                      <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 p-12 shadow-2xl shadow-sky-500/20">
            {/* Decorative blobs */}
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
            <div className="relative space-y-4 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-white/70">Get in touch</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's build something impactful.</h2>
              <p className="text-lg text-white/75 max-w-xl leading-relaxed">
                Have questions, ideas, or a project in mind? I love collaborating on thoughtful, human-centered products.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="mailto:contact@vyomak.com"
                  className="inline-flex items-center gap-2 justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email me
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20"
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
