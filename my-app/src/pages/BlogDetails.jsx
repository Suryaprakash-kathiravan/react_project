// BlogDetails.jsx
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover mb-6" />
        <p className="text-gray-700 leading-relaxed">{blog.excerpt}</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
