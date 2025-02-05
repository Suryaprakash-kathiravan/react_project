// BlogCard.jsx

const truncateText = (text, length) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

const BlogCard = ({ blog }) => {
  return (
    <a href={`/blog/${blog.id}`} className="">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: '400px', height: '400px' }}>
      <div style={{ width: '100%', height: '60%' }}>
        <img src={blog.image} alt={blog.title} className="object-cover w-full h-full" />
      </div>
      <div className="p-6" style={{ height: '40%' }}>
        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-700 mb-4">{truncateText(blog.excerpt, 10)}</p>
        
      </div>
    </div>
    </a>
  );
};

export default BlogCard;
