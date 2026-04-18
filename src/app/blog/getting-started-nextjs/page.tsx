import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started with Next.js",
  description: "Learn how to build modern web applications with Next.js and React.",
  alternates: {
    canonical: "https://vyomak.com/blog/getting-started-nextjs",
  },
  openGraph: {
    title: "Getting Started with Next.js | Vyomak",
    description: "Learn how to build modern web applications with Next.js and React.",
    url: "https://vyomak.com/blog/getting-started-nextjs",
    type: "article",
    publishedTime: "2024-02-13",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Getting Started with Next.js" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Started with Next.js | Vyomak",
    description: "Learn how to build modern web applications with Next.js and React.",
    images: ["/og-image.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Getting Started with Next.js",
  description: "Learn how to build modern web applications with Next.js and React.",
  datePublished: "2024-02-13",
  dateModified: "2024-02-13",
  author: { "@type": "Person", name: "Vyomak" },
  url: "https://vyomak.com/blog/getting-started-nextjs",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vyomak.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://vyomak.com/blog" },
    { "@type": "ListItem", position: 3, name: "Getting Started with Next.js", item: "https://vyomak.com/blog/getting-started-nextjs" },
  ],
};

export default function Post() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Post header */}
      <div className="relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(56,189,248,0.10),transparent)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to blog
          </Link>
          <span className="inline-flex items-center rounded-full bg-sky-50 dark:bg-sky-950 border border-sky-100 dark:border-sky-900 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-4">
            Web Dev
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Getting Started with Next.js
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Vyomak</span>
            <span>·</span>
            <time dateTime="2024-02-13">February 13, 2024</time>
          </div>
        </div>
      </div>

      {/* Post content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
          prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
          prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-slate-800 dark:prose-code:text-slate-200
          prose-pre:bg-slate-900 dark:prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-700 prose-pre:rounded-xl">
          <p>
            Next.js is a powerful React framework that makes building web applications easier and more efficient.
            In this post, we&apos;ll explore the basics of getting started with Next.js.
          </p>
          <h2>Why Next.js?</h2>
          <p>
            Next.js provides features like server-side rendering, static site generation, and API routes out of the box.
            It&apos;s perfect for building modern web applications.
          </p>
          <h2>Installation</h2>
          <p>
            To create a new Next.js project, run:
          </p>
          <pre><code>npx create-next-app@latest my-app</code></pre>
          <h2>Next Steps</h2>
          <p>
            Once your project is set up, you can start building your components and pages.
            Check out the Next.js documentation for more advanced features.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 transition hover:border-sky-300 dark:hover:border-sky-700 hover:text-sky-600 dark:hover:text-sky-400"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All posts
          </Link>
        </div>
      </div>
    </div>
  );
}
