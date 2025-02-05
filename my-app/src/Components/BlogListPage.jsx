// BlogListPage.jsx
import { useState } from 'react';
import BlogCardExplore from '../Components/BlogCardExplore';
import Navbar from './Navbar';
import Footer from './Footer';
console.log("hi");
const BlogListPage = ({ blogs, setBlogs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const handleEditBlog = (id) => {
    // Implement your edit functionality here
    // You could navigate to the edit page or show an edit form
  };

  const handleOpenBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseBlog = () => {
    setSelectedBlog(null);
  };

  const filteredBlogs = blogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search blogs..."
            className="w-full px-3 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="w-full px-3 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="asc">Sort by Title (A-Z)</option>
            <option value="desc">Sort by Title (Z-A)</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="w-full">
              <BlogCardExplore
                blog={blog}
                onDeleteBlog={handleDeleteBlog}
                onEditBlog={handleEditBlog}
                onOpenBlog={handleOpenBlog}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedBlog && <BlogModal blog={selectedBlog} onClose={handleCloseBlog} />}

    </div>
  );
};

export default BlogListPage;
