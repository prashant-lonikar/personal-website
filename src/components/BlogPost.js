import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPostData } from '../utils/blogPosts';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchedPostData = getPostData(id);
    if (fetchedPostData) {
      setPostData(fetchedPostData);
    } else {
      navigate('/blog', { replace: true });
    }
  }, [id, navigate]);

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <p className="text-gray-600 mb-6">Published on: {postData.date}</p>
      {postData.image && (
        <img 
          src={postData.image} 
          alt={postData.title} 
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />
      )}
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </div>
  );
}

export default BlogPost;