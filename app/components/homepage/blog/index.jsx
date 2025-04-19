"use client";

import Link from 'next/link';
import BlogCard from './blog-card';

function Blog({ blogs }) {
  return (
    <div id="blog" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))
        ) : (
          <p className="text-center col-span-3 text-white">No blogs found.</p>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/blog" className="bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-600 transition-all duration-300">
          View All
        </Link>
      </div>
    </div>
  );
}

export default Blog;
