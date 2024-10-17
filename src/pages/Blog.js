import React from 'react';
import { Link } from 'react-router-dom';
import { getSortedPostsData } from '../utils/blogPosts';

function Blog() {
  const blogPosts = getSortedPostsData();
  console.log('Blog posts:', blogPosts);

  return (
    <div className="blog">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="space-y-8">
        {blogPosts.length === 0 ? (
          <p>No blog posts found.</p>
        ) : (
          blogPosts.map((post) => (
            <article key={post.id} className="border-b pb-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">Published on: {post.date}</p>
              <Link 
                to={`/blog/${post.id}`} 
                className="text-blue-600 hover:text-blue-800"
                onClick={() => console.log(`Clicked on post: ${post.id}`)}
              >
                Read more
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

export default Blog;