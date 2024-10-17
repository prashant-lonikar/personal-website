import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPostData } from '../utils/blogPosts';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    console.log('BlogPost component rendered. ID:', id);
    const fetchedPostData = getPostData(id);
    console.log('Post data:', fetchedPostData);

    if (fetchedPostData) {
      setPostData(fetchedPostData);
    } else {
      console.log('Post not found, redirecting to blog page');
      navigate('/blog', { replace: true });
    }
  }, [id, navigate]);

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <p className="text-gray-600 mb-6">Published on: {postData.date}</p>
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </div>
  );
}

export default BlogPost;