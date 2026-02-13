export default function Post() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <article className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-4">Getting Started with Next.js</h1>
          <time className="text-gray-500 mb-8 block">February 13, 2024</time>
          <div className="prose prose-lg max-w-none">
            <p>
              Next.js is a powerful React framework that makes building web applications easier and more efficient.
              In this post, we'll explore the basics of getting started with Next.js.
            </p>
            <h2>Why Next.js?</h2>
            <p>
              Next.js provides features like server-side rendering, static site generation, and API routes out of the box.
              It's perfect for building modern web applications.
            </p>
            <h2>Installation</h2>
            <p>
              To create a new Next.js project, run:
            </p>
            <pre className="bg-gray-100 p-4 rounded">
              <code>npx create-next-app@latest my-app</code>
            </pre>
            <h2>Next Steps</h2>
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