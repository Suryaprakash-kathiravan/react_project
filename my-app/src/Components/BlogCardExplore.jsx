// BlogCardExplore.jsx
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate,Link } from 'react-router-dom';

const truncateText = (text, length) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

const BlogCardExplore = ({ blog,}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log(blog.id);
    navigate(`/blogpaQ/${blog.id}`);
  };

  return (
    <div
      className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 mb-6 transform hover:scale-105 cursor-pointer"
      style={{ width: '1500px', height: '300px' }}
      onClick={handleCardClick}
    >
      <div style={{ width: '40%', height: '100%' }}>
        <img src={blog.image} alt={blog.title} className="object-cover w-full h-full transition-transform duration-300" />
      </div>
      <div className="w-3/5 p-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-blue-300 opacity-50 rounded-lg"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">{truncateText(blog.title, 30)}</h2>
          <p className="text-gray-700 mb-6">{truncateText(blog.excerpt, 100)}</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button
                className="flex items-center text-red-600 hover:text-red-800 transition duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteBlog(blog.id);
                }}
              >
                <FaTrash className="mr-2" /> Delete
              </button>
              <button
                className="flex items-center text-green-600 hover:text-green-800 transition duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  onEditBlog(blog.id);
                }}
              >
                <FaEdit className="mr-2" /> Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardExplore;
