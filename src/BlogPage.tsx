import React from 'react';
import BlogPostPreview from './BlogPostPreview';
import { BlogPostData } from './BlogPost';

const blogPosts: BlogPostData[] = [
  { title: 'Introducing the New React Context API', date: '2023-08-15' },
  { title: 'React Hooks Explained', author: 'John Doe' },
  { title: 'Building a React Component Library' },
  // Add more blog posts here
];

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div>
        {blogPosts.map((post, index) => (
          <BlogPostPreview key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
