export default function Post() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <article className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Getting Started with Next.js</h1>
          <time className="text-gray-500 dark:text-gray-400 mb-8 block">February 13, 2024</time>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200">
            <p>
              Next.js is a powerful React framework that makes building web applications easier and more efficient.
              In this post, we'll explore the basics of getting started with Next.js.
            </p>
            <h2 className="text-gray-900 dark:text-white">Why Next.js?</h2>
            <p>
              Next.js provides features like server-side rendering, static site generation, and API routes out of the box.
              It's perfect for building modern web applications.
            </p>
            <h2 className="text-gray-900 dark:text-white">Installation</h2>
            <p>
              To create a new Next.js project, run:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <code className="text-gray-800 dark:text-gray-200">npx create-next-app@latest my-app</code>
            </pre>
            <h2 className="text-gray-900 dark:text-white">Next Steps</h2>
            <p>
              Once your project is set up, you can start building your components and pages.
              Check out the Next.js documentation for more advanced features.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}