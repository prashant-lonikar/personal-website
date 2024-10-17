import React from 'react';
import { Link } from 'react-router-dom';
import { getSortedPostsData } from '../utils/blogPosts';

function Blog() {
  const blogPosts = getSortedPostsData();

  return (
    <div className="blog">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.length === 0 ? (
          <p>No blog posts found.</p>
        ) : (
          blogPosts.map((post) => (
            <article key={post.id} className="border rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">Published on: {post.date}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-blue-600 hover:text-blue-800"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

export default Blog;