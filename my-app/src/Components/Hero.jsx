// import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[url('https://via.placeholder.com/1920x600')] bg-cover bg-center h-96 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-white">Discover amazing stories and insights</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Explore Blogs</button>
      </div>
    </div>
  );
};

export default Hero;