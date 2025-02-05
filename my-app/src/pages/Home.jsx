import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import BlogList from '../Components/BlogList';
import Footer from '../Components/Footer';
import AddBlog from '../Components/AddBlog';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: '10 Tips for Better Productivity',
      excerpt: 'Learn how to boost your productivity with these simple tips.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 2,
      title: 'The Art of Mindfulness',
      excerpt: 'Discover the benefits of mindfulness and how to practice it daily.',
      image: 'https://via.placeholder.com/400x200',
    },
  ]);

  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="container mx-auto py-8">
                {/* <Link
                  to="/add-blog"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Add New Blog
                </Link> */}
                <BlogList blogs={blogs} />
              </div>
            </>
          }
        />
        <Route path="/add-blog" element={<AddBlog onAddBlog={handleAddBlog} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Home;