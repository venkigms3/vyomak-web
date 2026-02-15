/**
 * ThemeToggle Component
 * 
 * Provides a button to toggle between light and dark mode themes.
 * The theme preference is persisted in localStorage and applied to the HTML element.
 * 
 * Features:
 * - Sun icon for light mode (current state)
 * - Moon icon for dark mode (current state)
 * - Respects system preference on first visit
 * - Prevents hydration mismatch by initializing state as null
 */

'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  // Initialize theme as null to prevent hydration mismatch
  // Will be set to actual theme after component mounts
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    // Set state and apply theme to DOM
    setTheme(initialTheme as 'light' | 'dark');
    applyTheme(initialTheme);
  }, []);

  /**
   * Apply theme to the document root element
   * Adds 'dark' class for dark mode, removes it for light mode
   */
  const applyTheme = (newTheme: string) => {
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  /**
   * Toggle between light and dark themes
   * Updates state, localStorage, and DOM
   */
  const toggleTheme = () => {
    console.log('[DEBUG] Toggle clicked! Current theme:', theme);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('[DEBUG] New theme will be:', newTheme);
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    
    // Verify the change
    setTimeout(() => {
      const hasClass = document.documentElement.classList.contains('dark');
      console.log('[DEBUG] After toggle - dark class exists:', hasClass);
      console.log('[DEBUG] All classes:', document.documentElement.className);
    }, 100);
  };

  // Don't render until mounted to avoid hydration issues
  // Shows empty placeholder with same dimensions
  if (theme === null) {
    return (
      <button className="rounded-full p-2 w-9 h-9" aria-label="Toggle theme">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
      aria-label="Toggle theme"
      type="button"
    >
      {/* Show current theme icon: Sun for light mode, Moon for dark mode */}
      {theme === 'dark' ? (
        // Moon icon - showing we're in dark mode
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        // Sun icon - showing we're in light mode
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
}

