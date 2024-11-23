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
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-4" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-bold my-3" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-bold my-2" {...props} />,
          p: ({ node, ...props }) => <p className="my-2" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
          img: ({ node, alt, ...props }) => <img alt={alt || ''} className="max-w-full h-auto my-4" {...props} />
        }}
      >
        {postData.content}
      </ReactMarkdown>
    </div>
  );
}

export default BlogPost;
