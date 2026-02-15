const posts = [
  {
    title: "Getting Started with Next.js",
    description: "Build modern web applications with Next.js, React, and edge-ready tooling.",
    href: "/blog/getting-started-nextjs",
  },
  {
    title: "Cloud Solutions for Developers",
    description: "A practical look at cloud platforms, architecture choices, and cost-aware design.",
    href: "/blog/cloud-solutions",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-slate-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="absolute -left-16 -top-10 h-64 w-64 rounded-full bg-sky-200/50 dark:bg-sky-900/30 blur-3xl" />
        <div className="absolute -right-10 top-12 h-72 w-72 rounded-full bg-indigo-200/40 dark:bg-indigo-900/30 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-gray-800/70 px-3 py-1 text-sm font-medium text-sky-700 dark:text-sky-400 shadow-sm ring-1 ring-sky-100 dark:ring-sky-900">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
              Technology &amp; Cloud Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-slate-900 dark:text-white">
              Crafting elegant, resilient experiences for the modern web.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-2xl">
              I explore cloud architecture, front-end craftsmanship, and developer experience. Here you'll find ideas,
              guides, and practical notes from building secure, scalable products.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 dark:shadow-sky-900 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-200 dark:hover:shadow-sky-900"
              >
                View the blog
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-white shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-gray-600 hover:shadow-lg"
              >
                Contact me
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 pt-4">
              <div className="rounded-2xl border border-slate-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-4 shadow-sm">
                <p className="text-sm text-slate-500 dark:text-gray-400">Focus</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Cloud Strategy</p>
                <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">Cost-aware, secure, and scalable solutions.</p>
              </div>
              <div className="rounded-2xl border border-slate-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-4 shadow-sm">
                <p className="text-sm text-slate-500 dark:text-gray-400">Tooling</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Next.js &amp; React</p>
                <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">Performance-first front-end craft.</p>
              </div>
              <div className="rounded-2xl border border-slate-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-4 shadow-sm">
                <p className="text-sm text-slate-500 dark:text-gray-400">Approach</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Pragmatic DX</p>
                <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">Clear patterns and maintainable systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-400">About</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">Hi, I'm Vyomak.</h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                I'm a technology enthusiast and cloud solutions developer who cares about elegant experiences and
                reliable systems. I enjoy distilling complex ideas into actionable steps teams can use.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">What I share</p>
                  <p className="text-sm text-slate-600 dark:text-gray-300 mt-1">
                    Architectural notes, front-end patterns, deployment playbooks, and learnings from real-world builds.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">How I work</p>
                  <p className="text-sm text-slate-600 dark:text-gray-300 mt-1">
                    Collaborative, experiment-friendly, and focused on measurable impact with thoughtful polish.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-100 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 p-8 shadow-lg shadow-slate-200/50 dark:shadow-gray-900/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white grid place-items-center text-xl font-semibold shadow-md">
                  V
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-gray-400">Technology Enthusiast</p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">Cloud &amp; Web</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>Designing scalable architectures with sensible guardrails and observability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <span>Building performant interfaces that balance clarity, accessibility, and delight.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>Translating lessons learned into guides, templates, and repeatable playbooks.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-400">Latest posts</p>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Fresh insights</h2>
            </div>
            <a
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-sky-700 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300"
            >
              View all posts →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <a
                key={post.href}
                href={post.href}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 p-6 shadow-md shadow-slate-200/60 dark:shadow-gray-900/60 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50/80 via-white to-indigo-50/80 dark:from-sky-900/20 dark:via-gray-800 dark:to-indigo-900/20 opacity-0 transition group-hover:opacity-100" />
                <div className="relative space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-gray-700 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-gray-300 ring-1 ring-slate-200 dark:ring-gray-600">
                    Blog
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-sky-800 dark:group-hover:text-sky-400">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed">{post.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 dark:text-sky-400">
                    Read more
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <a
              href="/blog"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 dark:shadow-sky-900 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-200 dark:hover:shadow-sky-900"
            >
              View all posts
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-indigo-700 p-10 shadow-2xl">
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
              <div className="absolute -left-12 top-0 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute right-0 -bottom-12 h-56 w-56 rounded-full bg-indigo-300/30 blur-3xl" />
            </div>
            <div className="relative space-y-4 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">Get in touch</p>
              <h2 className="text-3xl md:text-4xl font-semibold">Let's build something impactful.</h2>
              <p className="text-lg text-white/80 max-w-2xl">
                Have questions, ideas, or a project in mind? I love collaborating on thoughtful, human-centered products.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="mailto:contact@vyomak.com"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Email me
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
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
