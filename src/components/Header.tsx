/**
 * Header Component
 * 
 * Main navigation header with:
 * - Logo and branding
 * - Navigation links (Home, Blog, Status, Contact)
 * - Mobile menu toggle
 * - Theme toggle button (dark/light mode)
 * - Call-to-action button
 * 
 * Features:
 * - Sticky positioning
 * - Backdrop blur effect
 * - Responsive design with hamburger menu for mobile
 * - Dark mode support
 */

'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

// Navigation items configuration
const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Status", href: "/status" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Logo and branding */}
          <a href="/" className="group flex items-center gap-3">
            {/* Gradient V icon */}
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-lg font-semibold text-white shadow-md shadow-sky-200 dark:shadow-sky-900 transition group-hover:-translate-y-0.5">
              V
            </div>
            {/* Site title and tagline */}
            <div className="leading-tight">
              <span className="block text-sm text-slate-500 dark:text-slate-400">Technology blog</span>
              <span className="block text-lg font-semibold text-slate-900 dark:text-white">Vyomak</span>
            </div>
          </a>

          {/* Right side: Navigation + Theme Toggle + CTA */}
          <div className="flex items-center gap-4">
            {/* Desktop navigation menu - hidden on mobile (md:flex) */}
            <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-800/70 px-3 py-1.5 shadow-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-sm font-semibold text-slate-700 dark:text-slate-300 transition hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Theme toggle button */}
            <ThemeToggle />

            {/* Mobile menu button - only visible on small screens */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-full p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                // Close icon (X)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Call-to-action button - hidden on small mobile */}
            <a
              href="/#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200 dark:shadow-sky-900 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Let's talk
            </a>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
                >
                  {item.label}
                </a>
              ))}
              {/* Mobile CTA button */}
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 mx-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200 dark:shadow-sky-900 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Let's talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
