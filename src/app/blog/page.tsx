export default function Blog() {
  const posts = [
    {
      title: "Getting Started with Next.js",
      slug: "getting-started-nextjs",
      excerpt: "Learn how to build modern web applications with Next.js and React.",
      date: "2024-02-13",
    },
    {
      title: "Cloud Solutions for Developers",
      slug: "cloud-solutions",
      excerpt: "Exploring various cloud platforms and their benefits for development.",
      date: "2024-02-12",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">
                <a href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}