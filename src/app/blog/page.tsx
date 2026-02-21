/**
 * Blog List Page
 *
 * Displays all blog posts including published and coming soon articles.
 *
 * Features:
 * - Published posts are clickable and show date
 * - Coming soon posts have special badge and are non-clickable
 * - Dark mode support
 * - Responsive layout
 */

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

export default function Blog() {
  // Blog posts data
  // comingSoon: true disables link and shows badge
  const posts = [
    {
      title: "Azure Monitor",
      slug: "azure-monitor",
      excerpt: "Comprehensive guide to monitoring and observability with Azure Monitor, including Application Insights and Log Analytics.",
      date: "Coming Soon",
      comingSoon: true,
    },
    {
      title: "Getting Started with Next.js",
      slug: "getting-started-nextjs",
      excerpt: "Learn how to build modern web applications with Next.js and React.",
      date: "2024-02-13",
      comingSoon: false,
    },
    {
      title: "Cloud Solutions for Developers",
      slug: "cloud-solutions",
      excerpt: "Exploring various cloud platforms and their benefits for development.",
      date: "2024-02-12",
      comingSoon: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Blog</h1>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${post.comingSoon ? 'relative' : ''}`}
            >
              {/* Coming Soon badge - only shown for upcoming posts */}
              {post.comingSoon && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-xs font-semibold text-white shadow-md">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                  </svg>
                  Coming Soon
                </span>
              )}

              {/* Post title - clickable for published, plain text for coming soon */}
              <h2 className="text-2xl font-semibold mb-2">
                {post.comingSoon ? (
                  <span className="text-gray-900 dark:text-white">{post.title}</span>
                ) : (
                  <a href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {post.title}
                  </a>
                )}
              </h2>

              {/* Post excerpt/description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>

              {/* Date or "Coming Soon" indicator */}
              <time
                dateTime={post.comingSoon ? undefined : post.date}
                className={`text-sm ${post.comingSoon ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-500 dark:text-gray-400'}`}
              >
                {post.date}
              </time>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}