'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const comingSoonItems = [
  {
    title: 'Azure Monitor',
    description:
      'Comprehensive guide to monitoring and observability with Azure Monitor, including Application Insights and Log Analytics.',
  },
  {
    title: 'Terraform at Scale',
    description:
      'Best practices for managing infrastructure-as-code across multiple cloud providers.',
  },
];

const statusServices = [
  { name: 'AWS', icon: '☁️', status: 'operational' as const },
  { name: 'Azure', icon: '🔷', status: 'operational' as const },
  { name: 'GCP', icon: '☁️', status: 'operational' as const },
  { name: 'GitHub', icon: '🐙', status: 'operational' as const },
  { name: 'GitLab', icon: '🦊', status: 'operational' as const },
  { name: 'Oracle Cloud', icon: '🔴', status: 'operational' as const },
];

const latestPosts = [
  {
    title: 'Getting Started with Next.js',
    description:
      'Build modern web applications with Next.js, React, and edge-ready tooling.',
    href: '/blog/getting-started-nextjs',
  },
  {
    title: 'Cloud Solutions for Developers',
    description:
      'A practical look at cloud platforms, architecture choices, and cost-aware design.',
    href: '/blog/cloud-solutions',
  },
];

const slides = ['Coming Soon', 'Service Status', 'Latest Blogs'] as const;

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-400">
              Highlights
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              At a glance
            </h2>
          </div>
          {/* Navigation arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-sm transition hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-sm transition hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Slide container */}
        <div
          className="relative overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 shadow-lg shadow-slate-200/60 dark:shadow-slate-900/60"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {/* Slide 1 — Coming Soon */}
            <div className="w-full flex-shrink-0 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                  </svg>
                  Coming Soon
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                Upcoming articles
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                New deep-dives being prepared right now.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {comingSoonItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900/60 p-5"
                  >
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide 2 — Service Status */}
            <div className="w-full flex-shrink-0 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 ring-1 ring-emerald-200 dark:ring-emerald-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  All Systems Operational
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                Cloud service status
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                Live health overview of key platforms.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {statusServices.map((svc) => (
                  <div
                    key={svc.name}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900/60 px-4 py-3"
                  >
                    <span className="text-xl">{svc.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-slate-900 dark:text-white truncate">
                        {svc.name}
                      </p>
                    </div>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  </div>
                ))}
              </div>
              <Link
                href="/status"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 mt-6"
              >
                View full status page
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Slide 3 — Latest Blogs */}
            <div className="w-full flex-shrink-0 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 ring-1 ring-slate-200 dark:ring-slate-600">
                  Blog
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                Latest posts
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                Fresh insights on cloud and web development.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {latestPosts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900/60 p-5 transition hover:border-sky-200 dark:hover:border-sky-800 hover:shadow-md"
                  >
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400">
                      {post.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 dark:text-sky-400 mt-3">
                      Read more <span aria-hidden>→</span>
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 mt-6"
              >
                View all posts
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((label, i) => (
            <button
              key={label}
              onClick={() => setCurrent(i)}
              aria-label={`Go to ${label} slide`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 bg-gradient-to-r from-sky-500 to-indigo-500'
                  : 'w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
