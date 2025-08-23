import React from 'react';
import { BLOG_POSTS } from '../utils/data';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Latest Thoughts</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing insights, lessons learned, and technical deep-dives from my journey in software development. 
            These articles showcase my problem-solving approach and passion for technology.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to read more? I write about technology, development, and learning.
          </p>
          <button className="action-btn-outline">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
