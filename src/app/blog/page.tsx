import type { Metadata } from "next";

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(56,189,248,0.12),transparent)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(56,189,248,0.07),transparent)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-4">Writing</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Ideas, guides, and practical notes on cloud, front-end, and developer experience.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Published posts grid */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">Published</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {published.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 dark:hover:border-sky-800 hover:shadow-lg hover:shadow-sky-500/5"
              >
                {/* Tag */}
                <span className="inline-flex items-center rounded-full bg-sky-50 dark:bg-sky-950 border border-sky-100 dark:border-sky-900 px-2.5 py-0.5 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-4">
                  {post.tag}
                </span>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <time dateTime={post.date} className="text-xs text-slate-400 dark:text-slate-500">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:gap-2 transition-all">
                    Read <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>

                {/* Hover gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-sky-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Coming soon */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">Coming Soon</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {coming.map((post) => (
              <article
                key={post.slug}
                className="relative rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-6"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-2.5 py-0.5 text-xs font-semibold text-white mb-4">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                  </svg>
                  Coming Soon
                </span>
                <h2 className="text-xl font-bold text-slate-400 dark:text-slate-500 mb-2">{post.title}</h2>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
