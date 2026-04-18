import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on cloud computing, Next.js, web development, and developer experience by Vyomak.",
  openGraph: {
    title: "Blog | Vyomak",
    description: "Articles on cloud computing, Next.js, web development, and developer experience by Vyomak.",
    url: "https://vyomak.com/blog",
  },
};

const posts = [
  {
    title: "Azure Monitor",
    slug: "azure-monitor",
    excerpt: "Comprehensive guide to monitoring and observability with Azure Monitor, including Application Insights and Log Analytics.",
    date: "Coming Soon",
    comingSoon: true,
    tag: "Cloud",
  },
  {
    title: "Getting Started with Next.js",
    slug: "getting-started-nextjs",
    excerpt: "Learn how to build modern web applications with Next.js and React.",
    date: "2024-02-13",
    comingSoon: false,
    tag: "Web Dev",
  },
  {
    title: "Cloud Solutions for Developers",
    slug: "cloud-solutions",
    excerpt: "Exploring various cloud platforms and their benefits for development.",
    date: "2024-02-12",
    comingSoon: false,
    tag: "Cloud",
  },
];

export default function Blog() {
  const published = posts.filter((p) => !p.comingSoon);
  const coming = posts.filter((p) => p.comingSoon);
  const [featured, ...rest] = published;

  return (
    <div className="min-h-screen bg-white dark:bg-[#080810]">

      {/* ── Header ──────────────────────────────────── */}
      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/60">
        <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-20 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-black uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-4">Writing</p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.95] mb-6">
            The Blog.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg">
            Ideas, guides, and practical notes on cloud, front-end, and developer experience.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* ── Featured post ───────────────────────── */}
        {featured && (
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Featured</p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-2xl hover:shadow-sky-500/5 transition-all hover:-translate-y-1"
            >
              {/* Colour slab */}
              <div className="sm:w-72 min-h-[200px] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-[140px] leading-none select-none">
                  {featured.title[0]}
                </div>
                <div className="absolute inset-0 dot-grid opacity-20" />
              </div>

              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <span className="inline-flex items-center rounded-full bg-sky-50 dark:bg-sky-950 border border-sky-100 dark:border-sky-900 px-3 py-1 text-xs font-bold text-sky-700 dark:text-sky-400 mb-5">
                    {featured.tag}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{featured.excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <time dateTime={featured.date} className="text-sm font-semibold text-slate-400">
                    {new Date(featured.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400 group-hover:gap-3 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        )}

        {/* ── More posts ──────────────────────────── */}
        {rest.length > 0 && (
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">More posts</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5 hover:border-sky-200 dark:hover:border-sky-800"
                >
                  <span className="inline-flex items-center rounded-full bg-sky-50 dark:bg-sky-950 border border-sky-100 dark:border-sky-900 px-2.5 py-0.5 text-xs font-bold text-sky-700 dark:text-sky-400 mb-4">
                    {post.tag}
                  </span>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <time dateTime={post.date} className="text-xs font-semibold text-slate-400">
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:gap-2 transition-all">
                      Read <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Coming soon ─────────────────────────── */}
        {coming.length > 0 && (
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Coming Soon</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {coming.map((post) => (
                <article
                  key={post.slug}
                  className="relative overflow-hidden rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 p-7"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-1 text-xs font-bold text-white mb-4 shadow-md shadow-sky-500/20">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                    </svg>
                    Coming Soon
                  </span>
                  <h2 className="text-xl font-black text-slate-300 dark:text-slate-600 mb-2">{post.title}</h2>
                  <p className="text-sm text-slate-400 dark:text-slate-600 leading-relaxed">{post.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
