import React from 'react';
import { Link } from 'react-router-dom';
import { getSortedPostsData } from '../utils/blogPosts';

function Home() {
  const recentPosts = getSortedPostsData().slice(0, 3);

  return (
    <div className="home">
      <div className="md:flex items-center mb-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img 
            src="/images/home-image.jpg" 
            alt="Your Name" 
            className="rounded-lg w-full max-w-sm mx-auto shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Personal Website</h1>
          <p className="text-xl mb-4">
            Hello! I'm [Your Name], a [Your Profession/Field] based in [Your Location].
            I'm passionate about [Your Interests/Specialties].
          </p>
          <p className="text-lg mb-4">
            Explore my research, publications, projects, and more. Feel free to get in touch if you have any questions!
          </p>
          <Link to="/about" className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Learn More About Me
          </Link>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Recent Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <article key={post.id} className="border rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">Published on: {post.date}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-blue-600 hover:text-blue-800"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">View All Blog Posts</Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Latest Publications</h2>
          <p>Check out my recent research papers and publications.</p>
          <Link to="/publications" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">View Publications</Link>
        </div>
        <div className="border rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <p>Explore some of my notable projects and contributions.</p>
          <Link to="/projects" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">View Projects</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;