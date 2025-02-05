// import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BlogDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4 min-h-screen">Blog Title</h1>
        <img src="https://via.placeholder.com/800x400" alt="Blog" className="w-full h-96 object-cover mb-6" />
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vitae magna tincidunt tincidunt.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;