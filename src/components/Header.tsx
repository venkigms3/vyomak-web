import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <a href="/" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-lg font-semibold text-white shadow-md shadow-sky-200 dark:shadow-sky-900 transition group-hover:-translate-y-0.5">
              V
            </div>
            <div className="leading-tight">
              <span className="block text-sm text-slate-500 dark:text-slate-400">Technology blog</span>
              <span className="block text-lg font-semibold text-slate-900 dark:text-white">Vyomak</span>
            </div>
          </a>
          <div className="flex items-center gap-4">
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
            <ThemeToggle />
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200 dark:shadow-sky-900 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Let's talk
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
