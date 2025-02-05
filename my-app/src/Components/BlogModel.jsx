// BlogModal.jsx
import { FaTimes } from 'react-icons/fa';

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold">{blog.title}</h2>
          <button onClick={onClose} className="text-red-600 hover:text-red-800">
            <FaTimes />
          </button>
        </div>
        <div className="p-4">
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-4" />
          <p className="text-gray-700 leading-relaxed">{blog.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
