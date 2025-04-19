// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../../components/homepage/blog/blog-card";

async function getAllBlogs() {
  try {
    const username = personalData.mediumUsername;
    if (!username) {
      console.log('No Medium username provided');
      return [];
    }
    
    const res = await fetch(`https://medium.com/@${username}`, { next: { revalidate: 3600 } });
    
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

    try {
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
    } catch (error) {
      console.error('Error parsing Medium data:', error);
      return [];
    }
  } catch (error) {
    console.error('Error in getAllBlogs:', error);
    return [];
  }
}

export default async function Page() {
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
