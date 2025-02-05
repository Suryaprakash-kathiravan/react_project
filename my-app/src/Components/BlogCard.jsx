// import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-700 mb-4">{blog.excerpt}</p>
        <a href={`/blog/${blog.id}`} className="text-blue-600 hover:underline">Read More</a>
      </div>
    </div>
  );
};

export default BlogCard;