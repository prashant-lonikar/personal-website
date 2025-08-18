import React from 'react';
import { Link } from 'react-router-dom';
import { getSortedPostsData } from '../utils/blogPosts';

function Home() {
  const recentPosts = getSortedPostsData().slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="md:flex items-center mb-16">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="/images/home-image.jpg"
            alt="Prashant Lonikar"
            className="rounded-lg w-full max-w-sm mx-auto shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            I am a solutions engineer developing and selling AI products for the future
          </h1>
          <p className="text-xl mb-6 text-gray-600 leading-relaxed">
            Analysts are spending too much time on non-analysis tasks and companies are losing out on business due to resource restrictions.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            At Briink, I bridge the gap between cutting-edge AI technology and real business needs, helping organizations unlock their full potential through intelligent automation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/work" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
              View My Work
            </Link>
            <Link to="/about" className="inline-block border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300 font-semibold">
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Three Pillars Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">How I Drive Value</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Design & Prototype</h3>
            <p className="text-gray-600 mb-3">
              Working prototypes over wireframes: the magic of customers trying tools is unmatched
            </p>
            <Link to="/work" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Bridge Sales & Engineering</h3>
            <p className="text-gray-600 mb-3">
              Every sales person should speak tech. Speaking both languages is key to managing expectations
            </p>
            <Link to="/work" className="text-green-600 hover:text-green-800 font-medium">Learn More →</Link>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Build Customer Relationships</h3>
            <p className="text-gray-600 mb-3">
              Customers want you to succeed so they can succeed. It's not a battle.
            </p>
            <Link to="/work" className="text-purple-600 hover:text-purple-800 font-medium">Learn More →</Link>
          </div>
        </div>
      </div>

      {/* Recent Blog Posts */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Recent Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <article key={post.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">Published on: {post.date}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium">View All Blog Posts</Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Featured Projects</h2>
          <p className="text-gray-600 mb-4">Explore some of my notable projects and contributions in AI and sustainability.</p>
          <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-medium">View Projects →</Link>
        </div>
        <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Beyond Work</h2>
          <p className="text-gray-600 mb-4">Discover my interests, hobbies, and what I'm learning outside of work.</p>
          <Link to="/hobbies" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;