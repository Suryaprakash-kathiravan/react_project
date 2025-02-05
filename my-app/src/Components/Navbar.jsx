// Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-bold hover:text-gray-200 transition duration-300">
          My Blog
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white text-lg hover:text-gray-200 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add-blog" className="text-white text-lg hover:text-gray-200 transition duration-300">
              Add Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
