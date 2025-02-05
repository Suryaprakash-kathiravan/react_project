// AddBlog.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [image, setImage] = useState(null); // Store the selected image file
  const [preview, setPreview] = useState(''); // Store the Base64 URL for preview
  const navigate = useNavigate();

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);

      // Convert the file to a Base64 URL for preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new blog object
    const newBlog = {
      id: Date.now(), // Unique ID (using timestamp)
      title,
      excerpt,
      image: preview, // Use the Base64 URL as the image source
    };

    // Get existing blogs from local storage
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // Add the new blog to the list
    const updatedBlogs = [...existingBlogs, newBlog];

    // Save the updated list to local storage
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    // Pass the new blog to the parent component
    onAddBlog(newBlog);

    // Redirect to the homepage
    navigate('/');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add a New Blog</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="excerpt">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter blog excerpt"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*" // Allow only image files
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          {preview && (
            <div className="mt-4">
              <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Save Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
