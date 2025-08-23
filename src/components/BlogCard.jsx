import React from 'react';
import { FaClock, FaCalendar, FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group">
      {/* Header with category and read time */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 text-xs font-medium rounded-full">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <FaClock size={12} />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {post.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Footer with date and read more */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <FaCalendar size={12} />
            <span>{formatDate(post.publishDate)}</span>
          </div>
          
          <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 group-hover:gap-3">
            <span className="text-sm font-medium">Read More</span>
            <FaArrowRight size={12} className="transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
