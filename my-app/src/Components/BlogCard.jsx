// BlogCard.jsx

const truncateText = (text, length) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

const BlogCard = ({ blog }) => {
  return (
    <a href={`/blog/${blog.id}`} className="">
    <div className="bg-white rounded-lg shadow-lg h-80 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-700 mb-4">{truncateText(blog.excerpt,20)}</p>
        
      </div>
    </div>
    </a>
  );
};

export default BlogCard;
