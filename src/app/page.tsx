export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Vyomak
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Technology Enthusiast & Cloud Solutions Developer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Sharing insights on cloud computing, web development, and innovative tech solutions.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm passionate about technology and love exploring new solutions in cloud computing and web development.
            This blog is where I share my experiences, tutorials, and thoughts on the latest tech trends.
          </p>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Getting Started with Next.js</h3>
              <p className="text-gray-600 mb-4">Learn how to build modern web applications with Next.js and React.</p>
              <a href="/blog/getting-started-nextjs" className="text-blue-600 hover:underline">Read more →</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Cloud Solutions for Developers</h3>
              <p className="text-gray-600 mb-4">Exploring various cloud platforms and their benefits for development.</p>
              <a href="/blog/cloud-solutions" className="text-blue-600 hover:underline">Read more →</a>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">View All Posts</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have questions or want to collaborate? Feel free to reach out!
          </p>
          <a href="mailto:contact@vyomak.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
