// Home.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import BlogList from '../Components/BlogList';
import Footer from '../Components/Footer';
import AddBlog from '../Components/AddBlog';
import BlogListPage from '../Components/BlogListPage';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Retrieve blogs from local storage when the component mounts
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    <div className='bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200'>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <div className="container mx-auto py-8">
                      <BlogList blogs={blogs} />
                    </div>
                  </>
                }
              />
              <Route path="/add-blog" element={<AddBlog onAddBlog={handleAddBlog} />} />
              <Route path="/blogs" element={<BlogListPage blogs={blogs.slice(0,5)} setBlogs={setBlogs} />} />
              {/* <Route path="/blog/:id" element={<BlogListPage blogs={blogs.slice(0,5)} setBlogs={setBlogs} />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default Home;
