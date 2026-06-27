"use client"; // <--- Add this directive

import Image from 'next/image';
import Link from 'next/link';

function BlogCard({ blog }) {
  const publishDate = blog.publishedAt 
    ? new Date(blog.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) 
    : 'Date unavailable';

  // Use the imageUrl passed from the RSS feed, or a placeholder
  const imageUrl = blog.imageUrl || '/png/placeholder.png'; 

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group flex flex-col hover:shadow-[0_0_20px_rgba(22,242,179,0.15)] transition-shadow duration-500">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg relative">
        <Image
          src={imageUrl}
          fill // Use fill to cover the container
          alt={blog.title || 'Blog post image'}
          className='object-cover group-hover:scale-110 transition-all duration-300'
          // Add onError to handle broken image links from Medium feed
          onError={(e) => { 
            // Prevent infinite loop if placeholder also fails
            if (e.currentTarget.src !== '/png/placeholder.png') {
              e.currentTarget.src = '/png/placeholder.png'; 
            }
          }} 
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col flex-grow">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{publishDate}</p>
          {/* Claps count removed as it's not available in RSS */}
        </div>
        <Link target='_blank' href={blog.url || '#'} rel="noopener noreferrer">
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog.title || 'Untitled Post'}
          </p>
        </Link>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3 flex-grow'>
          {blog.subtitle || ''}
        </p>
        <div className="mt-auto pt-2">
          <Link target='_blank' href={blog.url || '#'} rel="noopener noreferrer">
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs hover:bg-violet-600 transition-colors duration-200'>
              Read More on Medium
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
