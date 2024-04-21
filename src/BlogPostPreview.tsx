import React from 'react';
import { BlogPostData } from './BlogPost';

interface BlogPostPreviewProps {
  post: BlogPostData;
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ post }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      {post.date && <p className="text-gray-500">{post.date}</p>}
      {post.author && <p className="text-gray-500">By {post.author}</p>}
    </div>
  );
};

export default BlogPostPreview;
