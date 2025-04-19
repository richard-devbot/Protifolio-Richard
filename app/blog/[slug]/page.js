// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

async function getAllBlogs() {
  const username = personalData.mediumUsername;
  const res = await fetch(`https://medium.com/@${username}`);
  
  if (!res.ok) {
    console.error('Failed to fetch data:', await res.text());
    return [];
  }

  const html = await res.text();
  
  // Extract the JSON data from the HTML
  const jsonMatch = html.match(/<script>window.__APOLLO_STATE__ = (.*?)<\/script>/);
  if (!jsonMatch) {
    console.error('Failed to extract JSON data from HTML');
    return [];
  }

  const jsonData = JSON.parse(jsonMatch[1]);

  // Extract blog post data from the JSON
  const blogs = Object.values(jsonData)
    .filter(item => item.__typename === 'Post')
    .map(post => ({
      id: post.id,
      title: post.title,
      subtitle: post.subtitle,
      slug: post.uniqueSlug,
      publishedAt: post.firstPublishedAt,
      url: `https://medium.com/@${username}/${post.uniqueSlug}`,
      claps: post.clapCount,
      imageId: post.previewImage && post.previewImage.id
    }));

  return blogs;
}

async function page() {
  const blogs = await getAllBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blogs ({blogs.length})
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.length > 0 ? (
          blogs.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))
        ) : (
          <p className="text-center col-span-3 text-white">No blogs found. Please check your Medium username.</p>
        )}
      </div>
    </div>
  );
}

export default page;
