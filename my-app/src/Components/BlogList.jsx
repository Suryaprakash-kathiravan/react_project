// import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  return (
    <div className="container mx-auto py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;