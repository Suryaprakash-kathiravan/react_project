// BlogDetails.jsx
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto py-8">
          <p className="text-center text-red-500 text-2xl font-bold">Blog not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover mb-6" />
        <p className="text-gray-700 leading-relaxed">{blog.excerpt}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
