// BlogListPage.jsx
import BlogCard from '../Components/BlogCard';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BlogListPage = ({ blogs }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogListPage;
